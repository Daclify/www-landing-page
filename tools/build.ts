import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { renderLlms, renderMarkdown, renderPage, renderSitemap } from '../src/render.ts';
import { locales, origin, pages, routes } from '../src/routes.ts';

const root = resolve(import.meta.dirname, '..');
const output = resolve(root, 'dist');
// dist is the documented disposable build output, never the repository root.
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(resolve(root, 'assets'), resolve(output, 'assets'), { recursive: true });
const fontRoot = resolve(root, 'node_modules/@fontsource-variable/inter');
await cp(
  resolve(fontRoot, 'files/inter-latin-wght-normal.woff2'),
  resolve(output, 'assets/inter-latin.woff2'),
);
await cp(
  resolve(fontRoot, 'files/inter-latin-ext-wght-normal.woff2'),
  resolve(output, 'assets/inter-latin-ext.woff2'),
);
await cp(resolve(fontRoot, 'LICENSE'), resolve(output, 'assets/INTER-LICENSE.txt'));
const files: string[] = [];
let full = '# Daclify — complete public website content\n\n';
for (const locale of locales) {
  for (const pageId of pages) {
    const directory = routes[locale][pageId].slice(1);
    await mkdir(resolve(output, directory), { recursive: true });
    const markdown = renderMarkdown(locale, pageId);
    await writeFile(resolve(output, directory, 'index.html'), renderPage(locale, pageId));
    await writeFile(resolve(output, directory, 'index.md'), markdown);
    files.push(`${directory}index.html`, `${directory}index.md`);
    full += `${markdown}\n\n---\n\n`;
  }
}
await writeFile(
  resolve(output, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`,
);
await writeFile(resolve(output, 'sitemap.xml'), renderSitemap());
await writeFile(resolve(output, 'llms.txt'), renderLlms());
await writeFile(resolve(output, 'llms-full.txt'), `${full.trimEnd()}\n`);
await writeFile(resolve(output, '.nojekyll'), '');
files.push('robots.txt', 'sitemap.xml', 'llms.txt', 'llms-full.txt', '.nojekyll');
for (const file of await readdir(resolve(output, 'assets'))) files.push(`assets/${file}`);
await writeFile(
  resolve(output, 'site-files.json'),
  `${JSON.stringify(files.sort(), null, 2)}\n`,
);
console.log(
  `Built ${locales.length * pages.length} localized pages and discovery files for ${origin}.`,
);
