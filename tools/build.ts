import { lstat, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { renderLlms, renderMarkdown, renderPage, renderSitemap } from '../src/render.ts';
import { locales, origin, pages, routes } from '../src/routes.ts';

const root = resolve(import.meta.dirname, '..');
const output = resolve(root, 'dist');
const fontRoot = resolve(root, 'node_modules/@fontsource-variable/inter');
const files = new Map<string, string | Buffer>();
// Only declared public assets belong to the publishable tree. Authoring notes,
// temporary files and unrelated additions to assets/ are never copied wholesale.
const publicAssets = [
  'brand.css',
  'site.css',
  'brand-mark.png',
  ...locales.map((locale) => `social-${locale}.png`),
];
for (const name of publicAssets) {
  const source = resolve(root, 'assets', name);
  if (!(await lstat(source)).isFile())
    throw new Error(`Public asset must be a regular file: ${name}`);
  files.set(`assets/${name}`, await readFile(source));
}
files.set(
  'assets/inter-latin.woff2',
  await readFile(resolve(fontRoot, 'files/inter-latin-wght-normal.woff2')),
);
files.set(
  'assets/inter-latin-ext.woff2',
  await readFile(resolve(fontRoot, 'files/inter-latin-ext-wght-normal.woff2')),
);
files.set('assets/INTER-LICENSE.txt', await readFile(resolve(fontRoot, 'LICENSE')));
let full = '# Daclify — complete public website content\n\n';
for (const locale of locales) {
  for (const pageId of pages) {
    const directory = routes[locale][pageId].slice(1);
    const markdown = renderMarkdown(locale, pageId);
    files.set(`${directory}index.html`, renderPage(locale, pageId));
    files.set(`${directory}index.md`, markdown);
    full += `${markdown}\n\n---\n\n`;
  }
}
files.set('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
files.set('sitemap.xml', renderSitemap());
files.set('llms.txt', renderLlms());
files.set('llms-full.txt', `${full.trimEnd()}\n`);
files.set('.nojekyll', '');
files.set('site-files.json', `${JSON.stringify([...files.keys()].sort(), null, 2)}\n`);
// Validate/read/render all inputs before replacing the disposable output. A
// missing input does not destroy the last successful local preview.
await rm(output, { recursive: true, force: true });
for (const [file, bytes] of files) {
  await mkdir(dirname(resolve(output, file)), { recursive: true });
  await writeFile(resolve(output, file), bytes);
}
console.log(
  `Built ${locales.length * pages.length} localized pages and discovery files for ${origin}.`,
);
