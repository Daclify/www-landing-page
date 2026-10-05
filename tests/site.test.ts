import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  readFileSync,
  existsSync,
  cpSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
import { parse, type DefaultTreeAdapterTypes } from 'parse5';
import { escapeHtml, serializeJson } from '../src/render.ts';

function elements(node: DefaultTreeAdapterTypes.Node): DefaultTreeAdapterTypes.Element[] {
  const own = 'tagName' in node ? [node] : [];
  return 'childNodes' in node ? [...own, ...node.childNodes.flatMap(elements)] : own;
}
function attr(node: DefaultTreeAdapterTypes.Element, name: string): string | undefined {
  return node.attrs.find((attr) => attr.name === name)?.value;
}
function text(node: DefaultTreeAdapterTypes.Node): string {
  return 'value' in node
    ? node.value
    : 'childNodes' in node
      ? node.childNodes.map(text).join('')
      : '';
}
function record(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

const root = resolve(process.env.SITE_DIR ?? '.');
const origin = 'https://daclify.com';
const paths = [
  ['/', '/es/', '/pl/'],
  ['/platform/', '/es/plataforma/', '/pl/platforma/'],
  ['/modules/', '/es/modulos/', '/pl/moduly/'],
  ['/privacy/', '/es/privacidad/', '/pl/prywatnosc/'],
  ['/roadmap/', '/es/hoja-de-ruta/', '/pl/plan-rozwoju/'],
];
const languages = ['en', 'es', 'pl'];
const load = (path: string) => readFileSync(resolve(root, `.${path}index.html`), 'utf8');

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

test('English has a self-referencing canonical and all language alternatives', () => {
  const html = load('/');
  assert.match(html, /rel="canonical" href="https:\/\/daclify\.com\/"/);
  for (const lang of languages) assert.match(html, new RegExp(`hreflang="${lang}"`));
  assert.match(html, /hreflang="x-default"/);
});

test('brand matches the frontend d. tile and wordmark instead of a new symbol', () => {
  for (const path of paths.flat()) {
    const nodes = elements(parse(load(path)));
    const marks = nodes.filter((node) => attr(node, 'class') === 'brand-mark');
    assert.ok(marks.length >= 2);
    for (const mark of marks) {
      assert.equal(mark.tagName, 'span');
      assert.equal(text(mark), 'd.');
    }
    const captions = nodes.filter((node) => attr(node, 'class') === 'brand-caption');
    assert.equal(captions.length, 2);
    for (const caption of captions) assert.equal(text(caption), 'GOVERN TOGETHER');
    assert.doesNotMatch(load(path), /M10 7h10a13|brand-period|brand-mark\.svg/);
  }
  const favicon = readFileSync(resolve(root, 'assets/brand-mark.png'));
  assert.equal(favicon.subarray(1, 4).toString(), 'PNG');
  assert.equal(favicon.readUInt32BE(16), 64);
  assert.equal(favicon.readUInt32BE(20), 64);
  assert.equal(existsSync(resolve(root, 'assets/brand-mark.svg')), false);
});

test('every page offers localized app and handbook actions in the main user journey', () => {
  const labels = [
    { app: 'Open app', docs: 'Read the docs', navigation: 'Docs' },
    { app: 'Abrir la app', docs: 'Leer la documentación', navigation: 'Documentación' },
    { app: 'Otwórz aplikację', docs: 'Czytaj dokumentację', navigation: 'Dokumentacja' },
  ];
  for (const group of paths) {
    for (const [index, path] of group.entries()) {
      const label = labels[index];
      assert.ok(label);
      const nodes = elements(parse(load(path)));
      for (const className of ['hero-actions', 'footer-links']) {
        const regions = nodes.filter((node) => attr(node, 'class') === className);
        assert.ok(regions.length >= 1, `${path}: missing ${className}`);
        for (const region of regions) {
          const links = elements(region).filter((node) => node.tagName === 'a');
          assert.ok(
            links.some(
              (link) =>
                attr(link, 'href') === 'https://app.daclify.com/' && text(link) === label.app,
            ),
            `${path}: missing app action`,
          );
          assert.ok(
            links.some(
              (link) =>
                attr(link, 'href') === 'https://app.daclify.com/docs' &&
                text(link) === label.docs,
            ),
            `${path}: missing handbook action`,
          );
        }
      }
      const navigation = nodes.filter((node) =>
        ['desktop-nav', 'mobile-menu'].includes(attr(node, 'class') ?? ''),
      );
      for (const region of navigation) {
        assert.ok(
          elements(region).some(
            (node) =>
              node.tagName === 'a' &&
              attr(node, 'href') === 'https://app.daclify.com/docs' &&
              text(node) === label.navigation,
          ),
        );
      }
      const hero = nodes.find((node) => attr(node, 'class')?.split(' ').includes('hero'));
      assert.ok(hero);
      assert.doesNotMatch(
        text(hero),
        /in development|en desarrollo|w trakcie rozwoju|verification|release review|implementa[ct]ion/i,
      );
    }
  }
});

test('readable exports identify the product and link to the app and its public handbook', () => {
  for (const path of paths.flat()) {
    const markdown = readFileSync(resolve(root, `.${path}index.md`), 'utf8');
    assert.ok(markdown.includes('https://app.daclify.com/'));
    assert.ok(markdown.includes('https://app.daclify.com/docs'));
  }
  const llms = readFileSync(resolve(root, 'llms.txt'), 'utf8');
  assert.ok(llms.includes('[Daclify app](https://app.daclify.com/)'));
  assert.ok(llms.includes('[Daclify handbook](https://app.daclify.com/docs)'));
  assert.doesNotMatch(llms, /platform in development|not a qualified production release/);
});

for (const group of paths) {
  for (const [index, path] of group.entries()) {
    test(`${path} is complete, localized and crawlable without JavaScript`, () => {
      const html = load(path);
      assert.match(html, new RegExp(`<html lang="${languages[index]}"`));
      assert.equal((html.match(/<h1[ >]/g) ?? []).length, 1);
      assert.match(html, new RegExp(`rel="canonical" href="${origin}${path}"`));
      for (const alternative of group)
        assert.ok(html.includes(`href="${origin}${alternative}"`));
      assert.ok(html.length > 10000, 'page must contain substantial rendered information');
      assert.doesNotMatch(
        html,
        /initDataUnsafe|AI-powered|SearchAction|application\/javascript/,
      );
      assert.equal(parse(html).childNodes.length > 0, true);
      const blocks = [
        ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
      ];
      assert.equal(blocks.length, 1);
      for (const block of blocks) {
        assert.ok(block[1]);
        const json: unknown = JSON.parse(block[1]);
        assert.ok(record(json));
        assert.equal(json['@context'], 'https://schema.org');
        assert.ok(Array.isArray(json['@graph']));
        const graph: unknown[] = json['@graph'];
        const page = graph.find((item) => record(item) && item['@type'] === 'WebPage');
        assert.ok(record(page));
        assert.equal(page.url, `${origin}${path}`);
        assert.equal(page.inLanguage, languages[index]);
        const parseErrors: string[] = [];
        const nodes = elements(
          parse(html, { onParseError: (error) => parseErrors.push(error.code) }),
        );
        assert.deepEqual(parseErrors, []);
        const scripts = nodes.filter((node) => node.tagName === 'script');
        assert.equal(scripts.length, 1);
        const script = scripts[0];
        assert.ok(script);
        assert.equal(attr(script, 'type'), 'application/ld+json');
        const title = nodes.find((node) => node.tagName === 'title');
        assert.ok(title);
        assert.equal(page.name, text(title));
        const description = nodes.find(
          (node) => node.tagName === 'meta' && attr(node, 'name') === 'description',
        );
        assert.ok(description);
        assert.equal(page.description, attr(description, 'content'));
        assert.ok(text(nodes.find((node) => node.tagName === 'main') ?? title).length > 1300);
        const links = nodes.filter(
          (node) => node.tagName === 'link' && attr(node, 'hreflang'),
        );
        assert.equal(links.length, 4);
        for (const [i, alternative] of group.entries()) {
          const link = links.find((node) => attr(node, 'hreflang') === languages[i]);
          assert.ok(link);
          assert.equal(attr(link, 'href'), `${origin}${alternative}`);
        }
        const image = nodes.find(
          (node) => node.tagName === 'meta' && attr(node, 'property') === 'og:image',
        );
        assert.ok(image);
        const imageUrl = attr(image, 'content');
        assert.ok(imageUrl);
        const png = readFileSync(resolve(root, `.${new URL(imageUrl).pathname}`));
        assert.equal(png.subarray(1, 4).toString(), 'PNG');
        assert.equal(png.readUInt32BE(16), 1200);
        assert.equal(png.readUInt32BE(20), 630);
      }
      for (const match of html.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
        const href = match[1];
        assert.ok(href);
        const target = resolve(root, `.${href}${href.endsWith('/') ? 'index.html' : ''}`);
        assert.ok(existsSync(target), `${path}: missing ${href}`);
      }
    });
  }
}

test('sitemap, crawler instructions and machine-readable content cover all languages', () => {
  const sitemap = readFileSync(resolve(root, 'sitemap.xml'), 'utf8');
  assert.equal((sitemap.match(/<loc>/g) ?? []).length, 15);
  for (const path of paths.flat()) assert.ok(sitemap.includes(`<loc>${origin}${path}</loc>`));
  assert.doesNotMatch(sitemap, /<lastmod>|<priority>|<changefreq>/);
  const robots = readFileSync(resolve(root, 'robots.txt'), 'utf8');
  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \//);
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
  const llms = readFileSync(resolve(root, 'llms.txt'), 'utf8');
  assert.ok(llms.startsWith('# Daclify\n'));
  for (const path of paths.flat()) assert.ok(llms.includes(`${origin}${path}`));
  assert.match(llms, /membership.*governance.*funded work/i);
  const full = readFileSync(resolve(root, 'llms-full.txt'), 'utf8');
  assert.ok(full.length > llms.length * 3);
});

test('text and structured data cannot escape their HTML contexts', () => {
  assert.equal(
    escapeHtml('<img src=x onerror="alert(1)">&\''),
    '&lt;img src=x onerror=&quot;alert(1)&quot;&gt;&amp;&#39;',
  );
  const value = { text: '</script><script>alert(1)</script>&' };
  const encoded = serializeJson(value);
  assert.doesNotMatch(encoded, /<|>|&/);
  assert.deepEqual(JSON.parse(encoded), value);
  assert.throws(() => serializeJson(undefined));
});

test('titles and descriptions are unique, all content is translated and public claims are bounded', () => {
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  for (const path of paths.flat()) {
    const nodes = elements(parse(load(path)));
    const title = nodes.find((node) => node.tagName === 'title');
    const description = nodes.find(
      (node) => node.tagName === 'meta' && attr(node, 'name') === 'description',
    );
    assert.ok(title && description);
    assert.ok(!titles.has(text(title)));
    titles.add(text(title));
    const value = attr(description, 'content');
    assert.ok(value && value.length >= 90 && value.length <= 230);
    assert.ok(!descriptions.has(value));
    descriptions.add(value);
    assert.doesNotMatch(
      load(path),
      /blob\/main|foundingDate|SearchAction|aggregateRating|priceCurrency|sibforms|data-lang=|googletagmanager|fonts\.googleapis/,
    );
    assert.ok(existsSync(resolve(root, `.${path}index.md`)));
  }
});
