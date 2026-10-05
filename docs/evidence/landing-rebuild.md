# Landing rebuild evidence

Recorded 2026-10-05. Source baseline: `edb897b` in `Daclify/www-landing-page`. Implementation branch: `codex/landing-v2-brand-seo`, in an isolated worktree. This task changes the landing repository only; the V2 application/contracts and other legacy repositories were not edited.

## Delivered

Fifteen static pages across English, Spanish and Polish; the frontend's established `d.` tile/wordmark/tagline and amber/espresso presentation; complete localized product, account, deployment, module, privacy, roadmap and FAQ copy; topic-preserving language navigation; local fonts and three 1200×630 PNG social cards. SEO metadata, Organization/WebSite/WebPage/BreadcrumbList JSON-LD, robots.txt, sitemap.xml, llms.txt, full public text and page Markdown share their typed source. Root exports preserve the existing static workflow, while `dist/` is the preferred publishable tree. The initial D/arrow replacement was corrected after the user's review; logo source is frontend commit `13784ed`.

The initial revision displayed development status throughout. The subsequent user-directed product-copy revision below replaces that presentation. Unsupported legacy AI/reputation claims, invented search/offer metadata and the third-party newsletter form remain removed. This task does not establish production readiness, final prices or launch dates. Public links do not require access to the private V2 repositories.

## Verification

- The initial 17 route/discovery checks failed against the legacy site: the canonical tag, Polish/full topic pages and discovery files were absent.
- Static export regression: an unsafe later manifest entry initially caused a partial valid write. The exporter now validates the complete manifest before any write. A temporary-directory regression passed after the fix; unrelated assets and check-only behavior are also tested.
- Initial browser run: 36 passed and two failed, exposing 30px language targets at 320px. A two-row mobile header preserves 44px language targets without hiding overflow.
- `npm run assets:social`: generated all three cards with the real Chromium renderer. Reviewed the Polish image and actual desktop/mobile pages.
- `npm run export`: built and exported all 15 pages and discovery files.
- `npm run typecheck`: strict TypeScript, including test/tooling code, passed.
- A fresh `npm ci --ignore-scripts` installed the locked 12-package development tree; type checks, the 22-case suite and exact export checks passed afterward. The install audit reported zero vulnerabilities in that dependency tree.
- `npm test`: 22 Node cases passed. Includes actual parsed HTML/JSON-LD, unique metadata, canonical/alternate consistency, complete internal file links, PNG dimensions, crawler/Markdown files, escaping and export behavior.
- `npm run test:e2e`: 38 desktop/mobile Chromium cases passed. All pages undergo axe scans; journeys cover language/topic mapping, no-JavaScript navigation/FAQ, 320px overflow/touch targets, reduced motion, real 404 responses and crawler MIME types. Sitemap XML is parsed and its namespace/URLs checked.
- `npm run format:check` and `npm run check:export`: passed. Generated root output matches the build.
- Agent-browser inspection: meaningful rendered content and expected links; no reported JavaScript page errors. Reviewed the 1440px full English page, Spanish privacy page and 390px Polish homepage. Screenshot artifacts are local and ignored.
- Verification-only CI uses commit-pinned official checkout/setup-node releases, read-only permissions, locked dependencies and a bounded job. The original review commit's [GitHub verification run](https://github.com/Daclify/www-landing-page/actions/runs/37380028971) passed; that historical result does not stand in for the logo correction's own checks.

## Logo correction after user review

The user identified the invented mark as incorrect. Verified frontend `src/App.vue` and `src/styles.css` at `13784ed`; adopted its rounded `d.` tile, lowercase wordmark and unchanged `GOVERN TOGETHER` brand tagline across all locales. The initial SVG is removed; the favicon and social cards are rasterized from the shared frontend-derived markup/styles with the actual Inter font. The new brand regression first failed on the old SVG and now passes. Favicon bounds also caught a missing border-box rule before the corrected asset was exported. Frontend files, including its unrelated local edits, were not changed.

Updated verification: 23 Node cases and 38 desktop/mobile browser cases passed, plus strict types, formatting and exact export checks.

## Product-copy revision after user review

The user approved the design and requested easy-to-understand product promotion, an app link at `app.daclify.com` and links to documentation inside the app. Verified the actual frontend route `/docs/:topic?` in `src/main.ts`. Reviewed frontend feature status, help behavior and the core execution ledger; the existing website's detailed release-blocker copy was also stale relative to newer local contract work. No app, backend or contract files were changed.

Rewrote every topic in all three languages around concrete user actions. Removed engineering progress notices from the main product pitch and replaced the technology strip with membership/voting/funding/treasury/records. Main and closing actions now link to the app and handbook. Desktop/mobile navigation includes documentation, and the footer includes both destinations. Metadata, localized social cards, per-page Markdown and llms files follow the same copy. Social/Telegram sign-in, managed recovery, independent deployments, hosted Operations and chain extensions remain identified as planned; encryption limits and unannounced prices remain explicit.

Verification for this revision:

- New all-page action and Markdown destination tests failed first because app/handbook links were missing, then passed after implementation.
- `npm run assets:social` regenerated the three localized cards; `npm run export` regenerated all 15 HTML/Markdown pages and discovery output.
- `npm run typecheck` passed. `npm test`: 25 Node cases passed. `npm run test:e2e -- --reporter=dot`: 42 desktop/mobile cases passed, including all-page axe/overflow checks and no-JavaScript documentation navigation.
- Final `npm run format:check`, `npm run check:export` and `git diff --check` passed; generated root exports match the build exactly.
- App/handbook navigation uses explicitly labelled deterministic destination fixtures. These tests establish the correct outbound navigation, not live availability or operation of the future app host.
- Agent-browser rendered the English desktop and Polish mobile homepage with the revised main actions and handbook navigation. Reviewed both screenshots and the Polish social card. No page errors were reported.

The website version is `2.0.0-alpha.3`. Launch-facing copy and intended destinations do not replace the app's own release qualification. Confirm the deployed app, direct `/docs` routing and supported feature documentation before publishing the website. No production publication, DNS change or application deployment was performed.

## Publication limits

No production publish, DNS/host modification, analytics configuration, Search Console property or submission occurred. The existing repository names `https://daclify.com` as its origin; live-host validation was not established, and the GitHub Pages API returned no existing configuration. Static generation and local checks do not establish indexing, ranking, AI inclusion, rich-result eligibility or deployed Core Web Vitals. Review translations editorially with native speakers. Safari, Firefox and actual Telegram clients were not exercised by this website task.

Tests of the informational website do not qualify Daclify smart contracts, custody, Pinata or application releases. The underlying product limitations remain recorded in backend-core's execution ledger. Old partner/logo assets were initially retained for review and were subsequently removed after the user's cleanup feedback; see the repository audit record.
