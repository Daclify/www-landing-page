# Daclify public website

An informative, static website for Daclify V2 in English, Spanish and Polish. The amber/espresso identity follows the V2 product foundations. Product copy distinguishes development implementations, planned capabilities and privacy limits; it does not promise a production launch, final pricing or unsupported AI features.

## Work locally

Use Node 24.21+ within Node 24 and npm 11.19+ within npm 11.

```sh
npm ci --ignore-scripts
npm run build
npm run dev
```

The preview is at `http://127.0.0.1:4179`. It serves the generated `dist/` directory, with real 404s and correct content types. Rebuild after source changes; the preview does not watch files. All navigation, language switching and FAQ disclosures work without JavaScript. The site sends no newsletter form, tracks no visitors and loads no third-party font/script.

## Edit content and branding

- `src/content/en.ts`, `es.ts`, `pl.ts`: complete localized copy; do not edit generated HTML or Markdown.
- `src/types.ts`: shared typed content contract.
- `src/routes.ts`: canonical origin, language/topic paths and community links.
- `src/render.ts`: shared accessible HTML, metadata, JSON-LD and machine-readable text.
- `assets/site.css`: visual system and responsive behavior.
- `src/brand.ts` and `assets/brand.css`: established frontend `d.` tile, wordmark and brand tagline.
- `assets/brand-mark.png`: favicon/organization logo generated from that same markup, font and styling.
- `tools/social.ts`: explicit localized 1200×630 social-card and favicon generation. Run `npm run assets:social` after relevant headline/design changes; this requires Playwright Chromium. Commit the reviewed PNGs. Ordinary builds do not require a browser.

English stays at `/`; Spanish uses `/es/`, Polish `/pl/`. Each language has home, platform, modules, privacy and roadmap pages with localized slugs. Language links preserve the topic. HTML contains self-canonical URLs and reciprocal en/es/pl/x-default alternates.

## Build and export

`npm run build` replaces the disposable `dist/` output and emits 15 HTML pages, page Markdown, local assets/fonts/licenses, `robots.txt`, `sitemap.xml`, `llms.txt` and `llms-full.txt`. `site-files.json` records the generated files. No contract/application/backend dependency is required.

`npm run export` also copies the generated static files to the repository root for compatibility with the previous plain-HTML hosting workflow. It updates only validated generated paths and retains old project/logo assets. `npm run check:export` detects missing or stale exported files. If removing a route, explicitly review and remove obsolete root exports; the exporter never deletes unrelated files.

Prefer publishing **only `dist/`** on a static host. The site expects domain-root hosting, directory index support and real 404 responses. It does not use a catch-all SPA rewrite. No host, GitHub Pages site, DNS configuration or production deployment was created or changed by this rebuild. Verification CI does not deploy.

Canonical origin remains `https://daclify.com` from the previous website. Confirm the actual production host, HTTPS and www-to-canonical redirect before publication. See [SEO and publication notes](docs/seo.md).

## Verify

```sh
npm run typecheck
npm test
npx playwright install chromium
npm run test:e2e
npm run format:check
npm run check:export
```

Node tests cover complete language/topic routes, metadata consistency, JSON-LD, internal links, social-image dimensions, crawler files, Markdown and escaping. Playwright covers all 15 pages in desktop/mobile Chromium with axe scans, topic-preserving language changes, no-JavaScript navigation/FAQ, 320px layout, touch targets, reduced motion, MIME types and 404 behavior. CI checks exported output and does not publish.

The recorded baseline/final evidence and review limitations are in [the implementation record](docs/evidence/landing-rebuild.md). Automated language completeness does not substitute for editorial review by native speakers. Local browser and structural checks do not establish search indexing, ranking or live-host behavior.
