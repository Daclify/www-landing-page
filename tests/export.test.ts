import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

function exportFixture(run: (directory: string, script: string) => void): void {
  const directory = mkdtempSync(resolve(tmpdir(), 'daclify-site-export-'));
  try {
    mkdirSync(resolve(directory, 'tools'));
    mkdirSync(resolve(directory, 'dist'));
    writeFileSync(resolve(directory, 'package.json'), '{"type":"module"}');
    cpSync(
      resolve(import.meta.dirname, '../tools/export.ts'),
      resolve(directory, 'tools/export.ts'),
    );
    run(directory, resolve(directory, 'tools/export.ts'));
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
}

test('static export preserves unrelated assets and verifies exact exported bytes', () => {
  exportFixture((directory, script) => {
    writeFileSync(resolve(directory, 'dist/site-files.json'), '["index.html"]');
    writeFileSync(resolve(directory, 'dist/index.html'), 'new site');
    writeFileSync(resolve(directory, 'partner.png'), 'existing asset');
    const result = spawnSync(process.execPath, [script], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    assert.equal(readFileSync(resolve(directory, 'index.html'), 'utf8'), 'new site');
    assert.equal(readFileSync(resolve(directory, 'partner.png'), 'utf8'), 'existing asset');
    assert.equal(spawnSync(process.execPath, [script, '--check']).status, 0);
  });
});

test('export checking fails on stale bytes and missing pages without rewriting them', () => {
  exportFixture((directory, script) => {
    writeFileSync(
      resolve(directory, 'dist/site-files.json'),
      '["index.html", "es/index.html"]',
    );
    writeFileSync(resolve(directory, 'dist/index.html'), 'new site');
    writeFileSync(resolve(directory, 'index.html'), 'old site');
    assert.equal(spawnSync(process.execPath, [script, '--check']).status, 1);
    assert.equal(readFileSync(resolve(directory, 'index.html'), 'utf8'), 'old site');
    assert.equal(existsSync(resolve(directory, 'es/index.html')), false);
  });
});

test('export rejects unsafe paths before copying any files', () => {
  exportFixture((directory, script) => {
    writeFileSync(
      resolve(directory, 'dist/site-files.json'),
      '["index.html", "../escape.txt"]',
    );
    writeFileSync(resolve(directory, 'dist/index.html'), 'new site');
    const result = spawnSync(process.execPath, [script], { encoding: 'utf8' });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /Unsafe generated export path/);
    assert.equal(existsSync(resolve(directory, 'index.html')), false);
  });
});

test('a later missing source leaves every existing export unchanged', () => {
  exportFixture((directory, script) => {
    writeFileSync(
      resolve(directory, 'dist/site-files.json'),
      '["index.html","es/index.html"]',
    );
    writeFileSync(resolve(directory, 'dist/index.html'), 'new page');
    writeFileSync(resolve(directory, 'index.html'), 'old page');
    assert.equal(spawnSync(process.execPath, [script]).status, 1);
    assert.equal(readFileSync(resolve(directory, 'index.html'), 'utf8'), 'old page');
    assert.equal(existsSync(resolve(directory, 'es')), false);
  });
});

for (const { label, manifest } of [
  { label: 'empty', manifest: '[]' },
  { label: 'duplicate', manifest: '["index.html","index.html"]' },
]) {
  test(`export rejects a ${label} manifest instead of reporting success`, () => {
    exportFixture((directory, script) => {
      writeFileSync(resolve(directory, 'dist/site-files.json'), manifest);
      writeFileSync(resolve(directory, 'dist/index.html'), 'new page');
      const result = spawnSync(process.execPath, [script], { encoding: 'utf8' });
      assert.equal(result.status, 1);
      assert.match(result.stderr, /Invalid generated file manifest/);
      assert.equal(existsSync(resolve(directory, 'index.html')), false);
    });
  });
}

for (const location of [
  'source-file',
  'source-directory',
  'destination-file',
  'destination-directory',
]) {
  test(`export rejects a linked ${location} before any write`, () => {
    exportFixture((directory, script) => {
      const outside = mkdtempSync(resolve(tmpdir(), 'daclify-export-outside-'));
      try {
        writeFileSync(resolve(outside, 'index.html'), 'outside sentinel');
        writeFileSync(
          resolve(directory, 'dist/site-files.json'),
          '["index.html","es/index.html"]',
        );
        writeFileSync(resolve(directory, 'dist/index.html'), 'new page');
        writeFileSync(resolve(directory, 'index.html'), 'old page');
        const linked = resolve(directory, location.startsWith('source') ? 'dist/es' : 'es');
        if (location.endsWith('directory')) symlinkSync(outside, linked, 'dir');
        else {
          mkdirSync(linked);
          symlinkSync(resolve(outside, 'index.html'), resolve(linked, 'index.html'));
        }
        if (location.startsWith('destination')) {
          mkdirSync(resolve(directory, 'dist/es'));
          writeFileSync(resolve(directory, 'dist/es/index.html'), 'new translation');
        }
        const result = spawnSync(process.execPath, [script], { encoding: 'utf8' });
        assert.equal(result.status, 1);
        assert.match(result.stderr, /Symbolic links are not allowed/);
        assert.equal(readFileSync(resolve(directory, 'index.html'), 'utf8'), 'old page');
        assert.equal(readFileSync(resolve(outside, 'index.html'), 'utf8'), 'outside sentinel');
      } finally {
        rmSync(outside, { recursive: true, force: true });
      }
    });
  });
}

test('non-file sources fail preflight before earlier files are written', () => {
  exportFixture((directory, script) => {
    writeFileSync(
      resolve(directory, 'dist/site-files.json'),
      '["index.html","es/index.html"]',
    );
    writeFileSync(resolve(directory, 'dist/index.html'), 'new page');
    writeFileSync(resolve(directory, 'index.html'), 'old page');
    mkdirSync(resolve(directory, 'dist/es/index.html'), { recursive: true });
    assert.equal(spawnSync(process.execPath, [script]).status, 1);
    assert.equal(readFileSync(resolve(directory, 'index.html'), 'utf8'), 'old page');
  });
});
