import { createServer } from 'node:http';
import { readFile, realpath } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

const root = await realpath(resolve(import.meta.dirname, '../dist'));
const port = Number(process.env.PORT ?? 4179);
if (!Number.isInteger(port) || port < 1024 || port > 65535)
  throw new Error('Invalid preview port');
const types: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};
const server = createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end('Method not allowed');
    return;
  }
  let path: string;
  try {
    path = decodeURIComponent(new URL(request.url ?? '/', 'http://127.0.0.1').pathname);
  } catch {
    response.writeHead(400).end('Invalid request');
    return;
  }
  if (path.includes('\\') || path.includes('\0')) {
    response.writeHead(400).end('Invalid request');
    return;
  }
  const file = resolve(root, `.${path}${path.endsWith('/') ? 'index.html' : ''}`);
  if (!file.startsWith(`${root}${sep}`)) {
    response.writeHead(404).end('Not found');
    return;
  }
  try {
    const physicalFile = await realpath(file);
    if (!physicalFile.startsWith(`${root}${sep}`)) {
      response.writeHead(404).end('Not found');
      return;
    }
    const bytes = await readFile(physicalFile);
    response.writeHead(200, {
      'Content-Type': types[extname(file)] ?? 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
    });
    response.end(request.method === 'HEAD' ? undefined : bytes);
  } catch (error: unknown) {
    const absent =
      error instanceof Error &&
      'code' in error &&
      ['ENOENT', 'ENOTDIR', 'EISDIR'].includes(String(error.code));
    if (absent) {
      response
        .writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
        .end('Not found');
    } else {
      console.error('Preview file read failed.');
      response
        .writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
        .end('Unable to read preview content.');
    }
  }
});
server.listen(port, '127.0.0.1', () =>
  console.log(`Daclify website preview: http://127.0.0.1:${port}`),
);
