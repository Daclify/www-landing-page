import { expect, test } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

const groups = [
  ['/', '/es/', '/pl/'],
  ['/platform/', '/es/plataforma/', '/pl/platforma/'],
  ['/modules/', '/es/modulos/', '/pl/moduly/'],
  ['/privacy/', '/es/privacidad/', '/pl/prywatnosc/'],
  ['/roadmap/', '/es/hoja-de-ruta/', '/pl/plan-rozwoju/'],
];

for (const path of groups.flat()) {
  test(`${path} renders accessible information with no page errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    const logo = page.locator('.site-header .brand');
    await expect(logo.locator('.brand-mark')).toHaveText('d.');
    await expect(logo.locator('.brand-caption')).toHaveText('GOVERN TOGETHER');
    await expect(logo).toContainText('daclify');
    await expect(logo.locator('svg')).toHaveCount(0);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(results.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test('language links preserve the topic and expose complete translated pages', async ({
  page,
}) => {
  await page.goto('/modules/');
  await page.getByRole('link', { name: 'Español', exact: true }).click();
  await expect(page).toHaveURL(/\/es\/modulos\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await page.getByRole('link', { name: 'Polski', exact: true }).click();
  await expect(page).toHaveURL(/\/pl\/moduly\/$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'pl');
  await page.getByRole('link', { name: 'English', exact: true }).click();
  await expect(page).toHaveURL(/\/modules\/$/);
});

test('CommunityIQ project links work on localized homepages without JavaScript', async ({
  browser,
  baseURL,
  isMobile,
}) => {
  if (!baseURL) throw new Error('Preview base URL is required');
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
    viewport: { width: isMobile ? 390 : 1440, height: 900 },
  });
  try {
    await context.route('https://community-iq.com/**', (route) =>
      route.fulfill({
        contentType: 'text/html',
        body: '<!doctype html><html lang="en"><title>CommunityIQ destination</title><main>CommunityIQ destination</main></html>',
      }),
    );
    const page = await context.newPage();
    for (const item of [
      { path: '/', link: 'Explore CommunityIQ' },
      { path: '/es/', link: 'Conoce CommunityIQ' },
      { path: '/pl/', link: 'Poznaj CommunityIQ' },
    ]) {
      await page.goto(item.path);
      await expect(page.getByRole('heading', { name: /CommunityIQ/ })).toBeVisible();
      const link = page.getByRole('link', { name: item.link, exact: true });
      await expect(link).toHaveAttribute('href', 'https://community-iq.com/');
      await link.click();
      await expect(page).toHaveURL('https://community-iq.com/');
    }
  } finally {
    await context.close();
  }
});

test('localized primary actions navigate to the app and its handbook', async ({ page }) => {
  // A deterministic destination tests navigation without assuming the future host is live.
  await page.route('https://app.daclify.com/**', async (route) => {
    await route.fulfill({
      contentType: 'text/html',
      body: '<!doctype html><html lang="en"><title>Destination fixture</title><main>Destination fixture</main></html>',
    });
  });
  for (const path of ['/', '/es/', '/pl/']) {
    await page.goto(path);
    const app = page.locator('.hero .hero-actions .primary');
    await expect(app).toHaveAttribute('href', 'https://app.daclify.com/');
    await app.click();
    await expect(page).toHaveURL('https://app.daclify.com/');
    await page.goto(path);
    const docs = page.locator('.hero .hero-actions .secondary');
    await expect(docs).toHaveAttribute('href', 'https://app.daclify.com/docs');
    await docs.click();
    await expect(page).toHaveURL('https://app.daclify.com/docs');
  }
});

test('the handbook is reachable through desktop and mobile navigation without JavaScript', async ({
  browser,
  baseURL,
}) => {
  if (!baseURL) throw new Error('Preview base URL is required');
  for (const width of [1440, 390]) {
    const context = await browser.newContext({
      javaScriptEnabled: false,
      baseURL,
      viewport: { width, height: 900 },
    });
    await context.route('https://app.daclify.com/**', async (route) => {
      await route.fulfill({
        contentType: 'text/html',
        body: '<!doctype html><html lang="en"><title>Handbook fixture</title><main>Handbook fixture</main></html>',
      });
    });
    const page = await context.newPage();
    await page.goto('/');
    const region = width === 390 ? '.mobile-menu' : '.desktop-nav';
    if (width === 390) await page.locator('.mobile-menu summary').click();
    await page.locator(region).getByRole('link', { name: 'Docs', exact: true }).click();
    await expect(page).toHaveURL('https://app.daclify.com/docs');
    await context.close();
  }
});

test('navigation and FAQ remain usable without JavaScript', async ({ browser, baseURL }) => {
  if (!baseURL) throw new Error('Preview base URL is required');
  const context = await browser.newContext({
    javaScriptEnabled: false,
    baseURL,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  await page.goto('/pl/');
  await page.locator('.mobile-menu summary').click();
  await page
    .locator('.mobile-menu')
    .getByRole('link', { name: 'Prywatność', exact: true })
    .click();
  await expect(page).toHaveURL(/\/pl\/prywatnosc\/$/);
  await page.getByRole('link', { name: 'Español', exact: true }).click();
  await expect(page).toHaveURL(/\/es\/privacidad\/$/);
  await page.goto('/es/');
  const question = page.locator('.faq-list summary').first();
  await question.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('.faq-list details').first()).toHaveAttribute('open', '');
  await context.close();
});

test('all language pages fit at 320px and respect reduced motion', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const path of groups.flat()) {
    await page.goto(path);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      path,
    ).toBe(true);
    expect(
      await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior),
    ).toBe('auto');
    const targets = await page.locator('.language-nav a').evaluateAll((links) =>
      links.map((link) => {
        const rect = link.getBoundingClientRect();
        return { width: rect.width, height: rect.height };
      }),
    );
    for (const target of targets) {
      expect(target.width).toBeGreaterThanOrEqual(44);
      expect(target.height).toBeGreaterThanOrEqual(44);
    }
  }
});

test('homepages fit intermediate desktop widths around the orbit breakpoint', async ({
  page,
}) => {
  for (const path of ['/', '/es/', '/pl/']) {
    for (const width of [900, 901, 1150, 1151, 1200, 1240, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        `${path} at ${width}px`,
      ).toBe(true);
    }
  }
});

test('missing content is a real 404 and crawler files have the correct MIME types', async ({
  request,
  page,
}) => {
  expect((await request.get('/missing-page/')).status()).toBe(404);
  expect((await request.get('/robots.txt')).headers()['content-type']).toContain('text/plain');
  expect((await request.get('/llms.txt')).headers()['content-type']).toContain('text/plain');
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.headers()['content-type']).toContain('application/xml');
  await page.goto('/');
  const parsed = await page.evaluate(
    (xml) => {
      const document = new DOMParser().parseFromString(xml, 'application/xml');
      return {
        invalid: document.querySelector('parsererror') !== null,
        namespace: document.documentElement.namespaceURI,
        urls: [...document.querySelectorAll('loc')].map((node) => node.textContent),
      };
    },
    await sitemap.text(),
  );
  expect(parsed.invalid).toBe(false);
  expect(parsed.namespace).toBe('http://www.sitemaps.org/schemas/sitemap/0.9');
  expect(parsed.urls.sort()).toEqual(
    groups
      .flat()
      .map((path) => `https://daclify.com${path}`)
      .sort(),
  );
});
