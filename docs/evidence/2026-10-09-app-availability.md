# App availability — 9 October 2026

Website version `2.0.0-alpha.9` marks the main app Soon using native disabled
buttons without hrefs. Active Test App and handbook links use
`https://testnet.app.daclify.com/` and `/docs`. Hero, closing section, footer,
navigation, localized Markdown and LLM discovery exports share this policy.
English, Spanish and Polish preserve the existing design and branding.

Verification actually run:

- Before implementation, the two updated structural/export regressions failed
  because the main app was still linked and testnet destinations were absent.
- TypeScript check, static build and all 43 Node tests passed.
- All 46 desktop/mobile Chromium checks passed, including disabled controls,
  test-app navigation, handbook navigation without JavaScript, all 15 localized
  pages, axe accessibility checks and 320px/intermediate-width layouts.
- Desktop English and mobile Polish screenshots were visually inspected.
- Static root exports were regenerated; `check:export` verified byte equality
  with the generated publishable tree. Formatting and final diff checks passed.

External app/handbook navigation used deterministic destination fixtures.
These checks establish landing-page behavior, not live app, API or hosting
availability. No production app was enabled or deployed by this change.
