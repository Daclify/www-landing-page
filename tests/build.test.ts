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

function buildFixture(run: (directory: string, script: string) => void): void {
  const directory = mkdtempSync(resolve(tmpdir(), 'daclify-build-'));
  try {
    mkdirSync(resolve(directory, 'tools'));
    mkdirSync(resolve(directory, 'node_modules/@fontsource-variable'), { recursive: true });
    writeFileSync(resolve(directory, 'package.json'), '{"type":"module"}');
    for (const folder of ['src', 'assets'])
      cpSync(resolve(import.meta.dirname, '..', folder), resolve(directory, folder), {
        recursive: true,
      });
    cpSync(
      resolve(import.meta.dirname, '../tools/build.ts'),
      resolve(directory, 'tools/build.ts'),
    );
    symlinkSync(
      resolve(import.meta.dirname, '../node_modules/@fontsource-variable/inter'),
      resolve(directory, 'node_modules/@fontsource-variable/inter'),
      'dir',
    );
    run(directory, resolve(directory, 'tools/build.ts'));
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
}

test('build publishes declared runtime assets instead of the whole authoring folder', () => {
  buildFixture((directory, script) => {
    writeFileSync(resolve(directory, 'assets/unpublished.txt'), 'unpublished fixture');
    const result = spawnSync(process.execPath, [script], { encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    assert.equal(existsSync(resolve(directory, 'dist/assets/unpublished.txt')), false);
    assert.equal(existsSync(resolve(directory, 'dist/assets/README.md')), false);
    for (const file of [
      'assets/brand.css',
      'assets/site.css',
      'assets/brand-mark.png',
      'assets/brand-lockup-512x1024.png',
      'assets/brand-mark-512x1024.png',
      'assets/inter-latin.woff2',
      'assets/INTER-LICENSE.txt',
      'pl/index.html',
      'robots.txt',
    ])
      assert.equal(existsSync(resolve(directory, 'dist', file)), true, file);
  });
});

test('missing build inputs fail before removing the previous generated site', () => {
  buildFixture((directory, script) => {
    mkdirSync(resolve(directory, 'dist'));
    writeFileSync(resolve(directory, 'dist/previous.txt'), 'previous build');
    rmSync(resolve(directory, 'assets/brand-mark.png'));
    assert.equal(spawnSync(process.execPath, [script]).status, 1);
    assert.equal(
      readFileSync(resolve(directory, 'dist/previous.txt'), 'utf8'),
      'previous build',
    );
  });
});

test('missing font inputs fail without erasing the last successful build', () => {
  buildFixture((directory, script) => {
    mkdirSync(resolve(directory, 'dist'));
    writeFileSync(resolve(directory, 'dist/previous.txt'), 'previous build');
    rmSync(resolve(directory, 'node_modules/@fontsource-variable/inter'));
    mkdirSync(resolve(directory, 'node_modules/@fontsource-variable/inter'));
    assert.equal(spawnSync(process.execPath, [script]).status, 1);
    assert.equal(
      readFileSync(resolve(directory, 'dist/previous.txt'), 'utf8'),
      'previous build',
    );
  });
});
