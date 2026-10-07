# Daclify public website

An informative, static product website for Daclify in English, Spanish and Polish. The amber/espresso identity follows the V2 product foundations. Copy explains membership, voting, funded work and shared documents in plain language, with direct app and handbook actions. Planned capabilities remain on the roadmap; prices, delivery dates and unsupported AI features are not invented.

The app destination is `https://app.daclify.com/`; the handbook is `https://app.daclify.com/docs`, matching the frontend's `/docs/:topic?` route. Both URLs are centralized in `src/routes.ts` and appear in every page's main actions, footer and Markdown export. The handbook is also in desktop/mobile navigation and `llms.txt`. These are the user's planned deployment destinations; this website change does not deploy or qualify the app. Confirm the app/handbook host, HTTPS and SPA route fallback before publishing the launch-facing website.

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
- Their `communityIq` copy supplies the homepage project feature and Markdown exports. The user-confirmed relationship is expressed as planned use of Daclify as CommunityIQ's main DAO software; its public URL lives in `src/routes.ts`.
- `src/types.ts`: shared typed content contract.
- `src/routes.ts`: canonical origin, language/topic paths, app, handbook and community links.
- `src/render.ts`: shared accessible HTML, metadata, JSON-LD and machine-readable text.
- `assets/site.css`: visual system and responsive behavior.
- `src/brand.ts` and `assets/brand.css`: established frontend `d.` tile, wordmark and brand tagline.
- `assets/brand-mark.png`: favicon/organization logo generated from that same markup, font and styling.
- `assets/brand-lockup-512x1024.png`: additional portrait logo export, centred on the espresso background with its original proportions.
- `assets/brand-mark-512x1024.png`: standalone 420×420 brand mark centred on a 512×1024 espresso canvas.
- `tools/social.ts`: explicit localized 1200×630 social-card, favicon and portrait logo generation. Run `npm run assets:social` after relevant headline/design changes; this requires Playwright Chromium. Commit the reviewed PNGs. Ordinary builds do not require a browser.
- `assets/README.md`: editable brand asset guide; image generation writes only PNGs.

English stays at `/`; Spanish uses `/es/`, Polish `/pl/`. Each language has home, platform, modules, privacy and roadmap pages with localized slugs. Language links preserve the topic. HTML contains self-canonical URLs and reciprocal en/es/pl/x-default alternates.

## Build and export

`npm run build` reads and renders all inputs before replacing the disposable `dist/` output, preserving the last successful preview when an input is missing or invalid. It emits 15 HTML pages, page Markdown, declared public assets/fonts/licenses, `robots.txt`, `sitemap.xml`, `llms.txt` and `llms-full.txt`. `site-files.json` records the generated files. `tools/build.ts` owns the public asset list: authoring notes such as `assets/README.md` and unrelated asset additions are excluded. Register new runtime assets there. No contract/application/backend dependency is required.

`npm run export` also copies the generated static files to the repository root for compatibility with the previous plain-HTML hosting workflow. It requires a non-empty, unique manifest, validates all source/destination paths, rejects linked or non-file artifacts and reads all source bytes before the first write. Preflight failures leave current exports unchanged. `npm run check:export` detects missing or stale exported files without rewriting them. If removing a route, explicitly review and remove obsolete root exports; the exporter never deletes unrelated files.

Obsolete partner logos, previous Daclify images, the old favicon and language flags have been removed after verifying they have no current callers. Git history preserves them if ever needed. The localized HTML/Markdown and discovery files at the root remain active generated exports for static hosting, rather than separate source implementations.

Build/export operate on a trusted local checkout. Preflight is not an atomic multi-file deployment or protection against a hostile process changing paths concurrently. Disk/write failures can still interrupt output replacement. Use the static host's deployment/promotion facilities to publish a complete `dist/` artifact.

Prefer publishing **only `dist/`** on a static host. The site expects domain-root hosting, directory index support and real 404 responses. It does not use a catch-all SPA rewrite. No host, GitHub Pages site, DNS configuration or production deployment was created or changed by this rebuild. Build and test locally on the Mac. GitHub verification is manual-only (`workflow_dispatch`); pushes and pull requests do not start it, and it does not deploy.

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

Node tests cover complete language/topic routes, metadata consistency, JSON-LD, internal links, social-image dimensions, crawler files, Markdown and escaping, plus isolated build/export/HTTP failure fixtures. Playwright covers all 15 pages in desktop/mobile Chromium with axe scans, topic-preserving language changes, no-JavaScript navigation/FAQ, 320px and intermediate desktop layouts, touch targets and reduced motion.

`npm run test:e2e` builds its own checkout and starts a dedicated server at `http://127.0.0.1:4180`; it never reuses an existing server. Keep that port free for the suite. The interactive preview stays on 4179, or use `PORT=4186 npm run dev`. Preview file reads are confined to the resolved output directory; links to outside files are rejected, missing files return 404 and unexpected read errors return a generic 500 with an operator diagnostic. CI checks exported output and does not publish.

The recorded baseline/final evidence and review limitations are in [the implementation record](docs/evidence/landing-rebuild.md) and [the repository audit](docs/evidence/2026-10-05-landing-audit.md). Automated language completeness does not substitute for editorial review by native speakers. Local browser and structural checks do not establish search indexing, ranking or live-host behavior.
