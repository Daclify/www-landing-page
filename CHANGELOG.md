# Changelog

## 2.0.0-alpha.5

- Remove ten obsolete root images/icons: previous partner logos, Daclify branding/assistant artwork, favicon and language flags, after verifying no current callers.
- Replace the temporary asset-retention policy with explicit cleanup guidance; keep active generated HTML/Markdown/discovery exports for static hosting.
- Ignore macOS Finder metadata to prevent accidental tracking.

## 2.0.0-alpha.4

- Fix homepage overflow at intermediate desktop widths without changing the approved desktop/mobile design.
- Preflight complete export manifests, source bytes and plain filesystem paths before writes; reject empty/duplicate manifests and linked artifacts.
- Restrict preview reads to physical output paths and distinguish missing files from unexpected read errors.
- Build only declared public assets and preserve the previous output when input validation fails.
- Build a dedicated browser-test server on port 4180, add build/export/HTTP/layout regressions and enable unused-code compiler checks.
- Consolidate identical app actions and remove obsolete badge styling; preserve all product copy, metadata and URLs.

## 2.0.0-alpha.3

- Rewrite all 15 pages in English, Spanish and Polish around clear product benefits: membership, voting, funded work, contributor payments and shared records.
- Link localized app and handbook actions to `app.daclify.com` and its frontend `/docs` route in main actions, navigation, footers and machine-readable content.
- Replace engineering progress notices and stack labels with customer-facing descriptions; retain honest planned-feature, pricing and privacy boundaries.
- Refresh metadata and social cards; add all-page destination checks and desktop/mobile, no-JavaScript navigation regressions.

## 2.0.0-alpha.2

- Match the frontend's rounded `d.` tile, `daclify` wordmark and `GOVERN TOGETHER` tagline across every page and illustration.
- Generate social cards and a 64×64 favicon/organization logo from the same markup, styling and actual Inter font; remove the initially introduced D/arrow symbol.
- Add a brand regression across all languages and a clipping check during favicon generation.

## 2.0.0-alpha.1

- Rebuild the public site around modular community governance and the actual Daclify V2 development status.
- Apply the frontend's amber/espresso identity, local Inter fonts and localized social cards.
- Publish complete English, Spanish and Polish source content across home, platform, modules, privacy and roadmap topics, with topic-preserving language links.
- Generate canonical/hreflang and social metadata, honest JSON-LD, robots.txt, sitemap.xml, llms.txt, full public text and Markdown pages.
- Add strict TypeScript static generation, reproducible root exports, verification-only CI and semantic/browser/accessibility regression coverage.
- Remove unsupported AI/reputation/search/offer claims, remote fonts and the external newsletter form. Retain old standalone image assets for review.

This is a reviewable website rebuild, not a production deployment or a qualification of the underlying application/contracts.
