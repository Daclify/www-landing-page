# Daclify landing V2 implementation plan

> Execute continuously in this isolated worktree; no delegation. User reviews the complete implementation. No production publication.

**Goal:** Deliver an informative branded static website in English, Spanish and Polish with generated search/AI discovery files.

**Architecture:** Typed content producers and a shared escaped HTML renderer generate 15 pages, metadata, structured data, sitemap and Markdown. CSS/brand assets are local. Export supports the repository's previous root-static hosting without a runtime server.

**Tech stack:** Node 24 native TypeScript, strict tsc, node:test/parse5, Playwright/axe, static HTML/CSS.

- [x] Add independent route-based acceptance checks before implementation. Run `node --test tests/site.test.ts` against the legacy root and record expected missing canonical/localized pages.
- [x] Implement `src/types.ts`, `src/routes.ts`, `src/content/{en,es,pl}.ts`, `src/render.ts` and `tools/build.ts`. `npm test` must validate every emitted page and all discovery files.
- [x] Build `assets/site.css`, brand SVG/favicon and localized social images. Preserve source attribution and font licensing. Use ordinary links and native disclosures; no client application is required.
- [x] Add `tools/serve.ts` with correct MIME types/404s, `tools/export.ts` with owned-path validation and deterministic export checking, and test their relevant failure boundaries.
- [x] Add Playwright journeys for every route/language, topic-preserving language changes, mobile navigation, FAQ keyboard behavior, no-JavaScript rendering, axe and narrow screens. Inspect actual desktop/mobile screenshots.
- [x] Generate and export the complete static tree. Document `npm ci`, `npm run export`, `npm run dev`, checks and hosting/DNS/Search Console review in README and docs/seo.md. Add verification-only CI.
- [x] Run `npm run typecheck`, `npm test`, `npm run test:e2e`, `npm run format:check`, `npm run check:export`; review the diff and record real results. Deliver a reviewable branch and local preview.

## Product-copy revision requested after design review

- [x] Verify the app's handbook route in frontend `src/main.ts` and inspect current feature/account/privacy support before choosing claims.
- [x] Add app/handbook acceptance checks for all pages and readable exports; observe them fail on missing actions and destinations before implementation.
- [x] Rewrite complete English, Spanish and Polish copy around membership, voting, funded work and shared records; retain planned labels for unavailable options and honest privacy/pricing limits.
- [x] Centralize the intended app/handbook URLs; connect hero/closing/footer actions and desktop/mobile handbook navigation. Update Markdown, llms.txt, social images and generated HTML/metadata.
- [x] Exercise deterministic app/handbook navigation fixtures, no-JavaScript navigation, all routes, accessibility and mobile layout. Review screenshots and the source diff; document the separate production publication requirement.
