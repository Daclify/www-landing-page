import { chromium } from '@playwright/test';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { content } from '../src/content/index.ts';
import { locales } from '../src/routes.ts';
import { escapeHtml } from '../src/render.ts';
import { brandLockup, brandMark } from '../src/brand.ts';

// Explicit design-asset generation; an ordinary site build needs no browser.
const root = resolve(import.meta.dirname, '..');
const brandStyles = await readFile(resolve(root, 'assets/brand.css'), 'utf8');
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
const fonts = `@font-face{font-family:Inter;font-weight:100 900;src:url(data:font/woff2;base64,${latin.toString('base64')})} @font-face{font-family:Inter;font-weight:100 900;src:url(data:font/woff2;base64,${font.toString('base64')});unicode-range:U+0100-02FF,U+1E00-1EFF}`;
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  for (const locale of locales) {
    const copy = content[locale];
    await page.setContent(`<!DOCTYPE html><html lang="${locale}"><head><meta charset="utf-8"><style>
      ${fonts}
      ${brandStyles}
      *{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#100d0b;color:#f5eee4;font-family:Inter,sans-serif;padding:50px 68px;position:relative;overflow:hidden}
      .orbit{position:absolute;border:1px solid #634528;border-radius:50%;width:620px;height:620px;top:-220px;right:-260px}.orbit:after{content:'';position:absolute;inset:-100px;border:1px solid #3e3327;border-radius:50%}
      .social-brand{transform:scale(1.25);transform-origin:top left;margin-bottom:18px}.last{color:#f4b35d}.eyebrow{color:#f4b35d;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin-top:28px}
      h1{font-size:76px;line-height:1.1;letter-spacing:-4px;font-weight:550;margin:22px 0 0}h1 span{display:block}.footer{position:absolute;left:68px;right:68px;bottom:35px;display:flex;justify-content:space-between;font-size:14px;color:#bdb2a5;border-top:1px solid #3e3327;padding-top:20px}
      </style></head><body><div class="orbit"></div><div class="brand social-brand">${brandLockup}</div><div class="eyebrow">${escapeHtml(copy.pages.home.eyebrow)}</div><h1>${copy.pages.home.heading
        .split('\n')
        .map(
          (line, index) =>
            `<span class="${index === 2 ? 'last' : ''}">${escapeHtml(line)}</span>`,
        )
        .join(
          '',
        )}</h1><div class="footer"><span>daclify.com</span><span>${escapeHtml(copy.footer)}</span></div></body></html>`);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: resolve(root, `assets/social-${locale}.png`) });
  }
  await page.setViewportSize({ width: 64, height: 64 });
  await page.setContent(
    `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${fonts}${brandStyles}*{box-sizing:border-box}body{margin:0;width:64px;height:64px;background:#100d0b;font-family:Inter,sans-serif}.brand-mark{transform:scale(1.5238095238095237);transform-origin:top left}</style></head><body>${brandMark}</body></html>`,
  );
  await page.evaluate(() => document.fonts.ready);
  const iconBounds = await page.locator('.brand-mark').boundingBox();
  if (!iconBounds || iconBounds.width > 64.01 || iconBounds.height > 64.01) {
    throw new Error('Favicon logo is clipped by the 64px canvas');
  }
  await page.screenshot({ path: resolve(root, 'assets/brand-mark.png') });
  await page.setViewportSize({ width: 512, height: 1024 });
  await page.setContent(
    `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>${fonts}${brandStyles}*{box-sizing:border-box}body{margin:0;width:512px;height:1024px;background:#100d0b;font-family:Inter,sans-serif;display:grid;place-items:center}.brand{font-size:29px;transform:scale(2.1)}.brand .brand-mark{width:42px;height:42px;font-size:29px}</style></head><body><div class="brand">${brandLockup}</div></body></html>`,
  );
  await page.evaluate(() => document.fonts.ready);
  const lockupBounds = await page.locator('.brand').boundingBox();
  if (
    !lockupBounds ||
    lockupBounds.x < 0 ||
    lockupBounds.y < 0 ||
    lockupBounds.x + lockupBounds.width > 512 ||
    lockupBounds.y + lockupBounds.height > 1024
  ) {
    throw new Error('Portrait brand lockup is clipped by the 512×1024 canvas');
  }
  await page.screenshot({ path: resolve(root, 'assets/brand-lockup-512x1024.png') });
  await page.setContent(
    `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><style>${fonts}${brandStyles}*{box-sizing:border-box}body{margin:0;width:512px;height:1024px;background:#100d0b;font-family:Inter,sans-serif;display:grid;place-items:center}.brand-mark{transform:scale(10)}</style></head><body>${brandMark}</body></html>`,
  );
  await page.evaluate(() => document.fonts.ready);
  const markBounds = await page.locator('.brand-mark').boundingBox();
  if (
    !markBounds ||
    markBounds.x < 0 ||
    markBounds.y < 0 ||
    markBounds.x + markBounds.width > 512 ||
    markBounds.y + markBounds.height > 1024
  ) {
    throw new Error('Portrait brand mark is clipped by the 512×1024 canvas');
  }
  await page.screenshot({ path: resolve(root, 'assets/brand-mark-512x1024.png') });
} finally {
  await browser.close();
}
console.log(
  'Generated three localized social cards, the favicon and two 512×1024 brand exports.',
);
