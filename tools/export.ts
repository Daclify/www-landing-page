import { copyFile, mkdir, readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const output = resolve(root, 'dist');
const manifest: unknown = JSON.parse(
  await readFile(resolve(output, 'site-files.json'), 'utf8'),
);
if (
  !Array.isArray(manifest) ||
  !manifest.every((file: unknown): file is string => typeof file === 'string')
)
  throw new Error('Invalid generated file manifest');
const checking = process.argv.includes('--check');
// Validate the complete manifest before the first write.
for (const file of manifest) {
  if (
    !/^(?:assets\/[a-zA-Z0-9._-]+|(?:[a-z-]+\/)*index\.(?:html|md)|robots\.txt|sitemap\.xml|llms(?:-full)?\.txt|\.nojekyll)$/.test(
      file,
    )
  )
    throw new Error('Unsafe generated export path');
}
let differences = 0;
for (const file of manifest) {
  const destination = resolve(root, file);
  if (checking) {
    let current: Buffer;
    try {
      current = await readFile(destination);
    } catch {
      differences++;
      console.error(`Missing export: ${file}`);
      continue;
    }
    if (!current.equals(await readFile(resolve(output, file)))) {
      differences++;
      console.error(`Stale export: ${file}`);
    }
  } else {
    await mkdir(dirname(destination), { recursive: true });
    await copyFile(resolve(output, file), destination);
  }
}
if (differences) process.exitCode = 1;
else
  console.log(
    checking
      ? 'Static export matches the generated site.'
      : 'Exported static pages and discovery files to the repository root.',
  );
