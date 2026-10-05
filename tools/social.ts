import { chromium } from '@playwright/test';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { content } from '../src/content/index.ts';
import { locales } from '../src/routes.ts';
import { escapeHtml } from '../src/render.ts';

// Explicit design-asset generation; an ordinary site build needs no browser.
const root = resolve(import.meta.dirname, '..');
const font = await readFile(
  resolve(
    root,
    'node_modules/@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2',
  ),
);
const latin = await readFile(
  resolve(root, 'node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2'),
);
const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  for (const locale of locales) {
    const copy = content[locale];
    await page.setContent(`<!DOCTYPE html><html lang="${locale}"><head><meta charset="utf-8"><style>
      @font-face{font-family:Inter;src:url(data:font/woff2;base64,${latin.toString('base64')})} @font-face{font-family:Inter;src:url(data:font/woff2;base64,${font.toString('base64')});unicode-range:U+0100-02FF,U+1E00-1EFF}
      *{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#100d0b;color:#f5eee4;font-family:Inter,sans-serif;padding:50px 68px;position:relative;overflow:hidden}
      .orbit{position:absolute;border:1px solid #634528;border-radius:50%;width:620px;height:620px;top:-220px;right:-260px}.orbit:after{content:'';position:absolute;inset:-100px;border:1px solid #3e3327;border-radius:50%}
      .brand{font-size:40px;font-weight:650;letter-spacing:-2px}.brand span,.last{color:#f4b35d}.eyebrow{color:#f4b35d;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-top:28px}
      h1{font-size:76px;line-height:1.1;letter-spacing:-4px;font-weight:550;margin:22px 0 0}h1 span{display:block}.footer{position:absolute;left:68px;right:68px;bottom:35px;display:flex;justify-content:space-between;font-size:14px;color:#bdb2a5;border-top:1px solid #3e3327;padding-top:20px}
      </style></head><body><div class="orbit"></div><div class="brand">daclify<span>.</span></div><div class="eyebrow">${escapeHtml(copy.pages.home.eyebrow)}</div><h1>${copy.pages.home.heading
        .split('\n')
        .map(
          (line, index) =>
            `<span class="${index === 2 ? 'last' : ''}">${escapeHtml(line)}</span>`,
        )
        .join(
          '',
        )}</h1><div class="footer"><span>daclify.com</span><span>${escapeHtml(copy.status.development)} / V2</span></div></body></html>`);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: resolve(root, `assets/social-${locale}.png`) });
  }
} finally {
  await browser.close();
}
await writeFile(
  resolve(root, 'assets/README.md'),
  '# Brand assets\n\nThe amber D/arrow mark, wordmark treatment and social cards were created for this rebuild. The palette follows the Daclify V2 CIQ/MIQ foundations. Social cards are generated from localized homepage copy with `npm run assets:social`; review and regenerate them when that copy changes.\n\nInter is distributed by @fontsource-variable/inter 5.3.0 under the SIL Open Font License. Builds and exports include the package license. Latin and Latin Extended subsets cover English, Spanish and Polish. The website loads no third-party font or tracking service.\n',
);
console.log('Generated three 1200×630 localized social cards.');
