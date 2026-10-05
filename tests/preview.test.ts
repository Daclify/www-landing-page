import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createServer, request, type IncomingHttpHeaders } from 'node:http';
import { spawn } from 'node:child_process';
import { cpSync, mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';

async function previewFixture(
  run: (directory: string, origin: string) => Promise<void>,
): Promise<void> {
  const directory = mkdtempSync(resolve(tmpdir(), 'daclify-preview-'));
  const reservation = createServer();
  await new Promise<void>((accept, reject) => {
    reservation.once('error', reject);
    reservation.listen(0, '127.0.0.1', accept);
  });
  const address = reservation.address();
  assert.ok(address && typeof address !== 'string');
  const port = address.port;
  await new Promise<void>((accept, reject) =>
    reservation.close((error) => (error ? reject(error) : accept())),
  );
  mkdirSync(resolve(directory, 'tools'));
  mkdirSync(resolve(directory, 'dist/assets'), { recursive: true });
  writeFileSync(resolve(directory, 'package.json'), '{"type":"module"}');
  cpSync(
    resolve(import.meta.dirname, '../tools/serve.ts'),
    resolve(directory, 'tools/serve.ts'),
  );
  writeFileSync(
    resolve(directory, 'dist/index.html'),
    '<!doctype html><title>Fixture</title><h1>Preview fixture</h1>',
  );
  writeFileSync(resolve(directory, 'dist/robots.txt'), 'User-agent: *\nAllow: /\n');
  writeFileSync(resolve(directory, 'dist/assets/site.css'), 'body { color: black; }');
  writeFileSync(resolve(directory, 'outside.txt'), 'outside sentinel');
  const child = spawn(process.execPath, [resolve(directory, 'tools/serve.ts')], {
    env: { ...process.env, PORT: String(port) },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const closed = new Promise<void>((accept) => child.once('close', () => accept()));
  try {
    await new Promise<void>((accept, reject) => {
      const timer = setTimeout(
        () => reject(new Error('Preview fixture startup timed out')),
        5000,
      );
      let output = '';
      child.stdout.on('data', (chunk: Buffer) => {
        output += chunk.toString();
        if (output.includes('Daclify website preview:')) {
          clearTimeout(timer);
          accept();
        }
      });
      child.once('error', (error) => {
        clearTimeout(timer);
        reject(error);
      });
      child.once('exit', (code) => {
        clearTimeout(timer);
        reject(new Error(`Preview fixture exited early (${code})`));
      });
    });
    await run(directory, `http://127.0.0.1:${port}`);
  } finally {
    if (child.exitCode === null) child.kill();
    await closed;
    rmSync(directory, { recursive: true, force: true });
  }
}

async function read(
  origin: string,
  path: string,
  method = 'GET',
): Promise<{ status: number; body: string; headers: IncomingHttpHeaders }> {
  const url = new URL(origin);
  return new Promise((accept, reject) => {
    const req = request(
      { hostname: url.hostname, port: url.port, path, method },
      (response) => {
        let body = '';
        response.setEncoding('utf8');
        response.on('data', (chunk: string) => {
          body += chunk;
        });
        response.once('error', reject);
        response.once('end', () =>
          accept({ status: response.statusCode ?? 0, body, headers: response.headers }),
        );
      },
    );
    req.once('error', reject);
    req.end();
  });
}

test('preview supports GET/HEAD, MIME types, method rejection and real missing-file responses', async () => {
  await previewFixture(async (_directory, origin) => {
    const page = await read(origin, '/');
    assert.equal(page.status, 200);
    assert.match(page.body, /Preview fixture/);
    assert.equal(page.headers['x-content-type-options'], 'nosniff');
    const head = await read(origin, '/', 'HEAD');
    assert.equal(head.status, 200);
    assert.equal(head.body, '');
    assert.equal(head.headers['content-type'], page.headers['content-type']);
    assert.match(
      (await read(origin, '/assets/site.css')).headers['content-type'] ?? '',
      /text\/css/,
    );
    assert.match(
      (await read(origin, '/robots.txt?cache=1')).headers['content-type'] ?? '',
      /text\/plain/,
    );
    const post = await read(origin, '/', 'POST');
    assert.equal(post.status, 405);
    assert.equal(post.headers.allow, 'GET, HEAD');
    assert.equal((await read(origin, '/missing/')).status, 404);
  });
});

test('preview rejects malformed encoding, null bytes, backslashes and encoded traversal', async () => {
  await previewFixture(async (_directory, origin) => {
    for (const path of ['/invalid%ZZ', '/file%00.txt', '/assets%5cfile.css'])
      assert.equal((await read(origin, path)).status, 400, path);
    for (const path of ['/%2e%2e%2foutside.txt', '/assets/%2e%2e%2f%2e%2e%2foutside.txt']) {
      const result = await read(origin, path);
      assert.equal(result.status, 404, path);
      assert.doesNotMatch(result.body, /outside sentinel/);
    }
  });
});

for (const kind of ['file', 'directory']) {
  test(`preview does not serve files through a ${kind} link outside its output`, async () => {
    await previewFixture(async (directory, origin) => {
      const link = resolve(directory, 'dist/linked');
      symlinkSync(
        resolve(directory, kind === 'file' ? 'outside.txt' : '.'),
        link,
        kind === 'file' ? 'file' : 'dir',
      );
      const response = await read(origin, kind === 'file' ? '/linked' : '/linked/outside.txt');
      assert.equal(response.status, 404);
      assert.doesNotMatch(response.body, /outside sentinel/);
      assert.match((await read(origin, '/')).body, /Preview fixture/);
    });
  });
}

test('preview keeps in-tree file links readable', async () => {
  await previewFixture(async (directory, origin) => {
    symlinkSync(resolve(directory, 'dist/robots.txt'), resolve(directory, 'dist/alias.txt'));
    const response = await read(origin, '/alias.txt');
    assert.equal(response.status, 200);
    assert.match(response.body, /User-agent/);
  });
});

test('preview reports unexpected filesystem failures without exposing raw errors', async () => {
  await previewFixture(async (directory, origin) => {
    symlinkSync('cycle.txt', resolve(directory, 'dist/cycle.txt'));
    const response = await read(origin, '/cycle.txt');
    assert.equal(response.status, 500);
    assert.equal(response.body, 'Unable to read preview content.');
    assert.doesNotMatch(response.body, /ELOOP|cycle\.txt|daclify-preview/);
  });
});
