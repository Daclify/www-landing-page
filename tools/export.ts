import { lstat, mkdir, readFile, realpath, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import type { Stats } from 'node:fs';

function missingFile(error: unknown): boolean {
  return error instanceof Error && 'code' in error && error.code === 'ENOENT';
}

// Check every existing component, not just the final filename. These CLI paths
// belong to a trusted checkout; no hostile concurrent filesystem writer is assumed.
async function plainFile(base: string, file: string, allowMissing: boolean): Promise<boolean> {
  const directory = await lstat(base);
  if (directory.isSymbolicLink())
    throw new Error('Symbolic links are not allowed in export paths');
  if (!directory.isDirectory()) throw new Error('Export root must be a directory');
  const parts = file.split('/');
  let path = base;
  for (const [index, part] of parts.entries()) {
    path = resolve(path, part);
    let stat: Stats;
    try {
      stat = await lstat(path);
    } catch (error: unknown) {
      if (allowMissing && missingFile(error)) return false;
      throw error;
    }
    if (stat.isSymbolicLink())
      throw new Error('Symbolic links are not allowed in export paths');
    if (index === parts.length - 1 ? !stat.isFile() : !stat.isDirectory())
      throw new Error('Export paths must contain directories and regular files');
  }
  return true;
}

const root = await realpath(resolve(import.meta.dirname, '..'));
const output = resolve(root, 'dist');
await plainFile(output, 'site-files.json', false);
const manifest: unknown = JSON.parse(
  await readFile(resolve(output, 'site-files.json'), 'utf8'),
);
if (
  !Array.isArray(manifest) ||
  manifest.length === 0 ||
  !manifest.every((file: unknown): file is string => typeof file === 'string') ||
  new Set(manifest).size !== manifest.length
)
  throw new Error('Invalid generated file manifest');
const checking = process.argv.includes('--check');
for (const file of manifest) {
  if (
    !/^(?:assets\/[a-zA-Z0-9][a-zA-Z0-9._-]*|(?:[a-z-]+\/)*index\.(?:html|md)|robots\.txt|sitemap\.xml|llms(?:-full)?\.txt|\.nojekyll)$/.test(
      file,
    )
  )
    throw new Error('Unsafe generated export path');
}
// Preflight every source and destination and capture source bytes before writing.
// Missing or malformed later artifacts cannot leave earlier exports partially updated.
const prepared: { file: string; bytes: Buffer; exists: boolean }[] = [];
for (const file of manifest) {
  await plainFile(output, file, false);
  const exists = await plainFile(root, file, true);
  prepared.push({ file, bytes: await readFile(resolve(output, file)), exists });
}
let differences = 0;
for (const { file, bytes, exists } of prepared) {
  const destination = resolve(root, file);
  if (checking) {
    if (!exists) {
      differences++;
      console.error(`Missing export: ${file}`);
    } else if (!(await readFile(destination)).equals(bytes)) {
      differences++;
      console.error(`Stale export: ${file}`);
    }
  } else {
    await mkdir(dirname(destination), { recursive: true });
    await writeFile(destination, bytes);
  }
}
if (differences) process.exitCode = 1;
else
  console.log(
    checking
      ? 'Static export matches the generated site.'
      : 'Exported static pages and discovery files to the repository root.',
  );
