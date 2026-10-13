import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { locales, pages, routes } from '../src/routes.ts';
import { content } from '../src/content/index.ts';
import { renderPage, renderMarkdown, renderLlms } from '../src/render.ts';
test('every language promotes the mini-app page with matching HTML and Markdown availability', () => {
  assert.ok(pages.includes('mini-apps'));
  for (const locale of locales) {
    const page = content[locale].pages['mini-apps'];
    assert.ok(page);
    const html = renderPage(locale, 'mini-apps'),
      markdown = renderMarkdown(locale, 'mini-apps');
    assert.ok(html.includes('href="https://daclify.com' + routes[locale]['mini-apps'] + '"'));
    for (const section of page.sections) {
      assert.ok(html.includes(section.text.replaceAll('&', '&amp;')));
      assert.ok(markdown.includes(section.text));
    }
    assert.ok(
      renderPage(locale, 'home').includes('href="' + routes[locale]['mini-apps'] + '"'),
    );
    assert.ok(html.includes('https://testnet.app.daclify.com/mini-apps'));
    assert.ok(renderLlms().includes(routes[locale]['mini-apps']));
    for (const lang of locales)
      assert.ok(
        html.includes(
          'hreflang="' +
            lang +
            '" href="https://daclify.com' +
            routes[lang]['mini-apps'] +
            '"',
        ),
      );
  }
  const files = JSON.parse(
    readFileSync(resolve(process.env.SITE_DIR ?? 'dist', 'site-files.json'), 'utf8'),
  );
  for (const locale of locales)
    assert.ok(files.includes(routes[locale]['mini-apps'].slice(1) + 'index.md'));
});
