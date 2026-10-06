# Brand assets

Edit this guide directly. `npm run assets:social` renders PNGs and preserves documentation edits.

The established identity comes from `daclify-frontend/src/App.vue` and `src/styles.css` at commit `13784ed`: a rounded amber `d.` tile, the `daclify` wordmark and the unchanged brand tagline `GOVERN TOGETHER`. `src/brand.ts` owns the shared markup and `assets/brand.css` its frontend-derived styling. The same source is used in website headers/footers, illustrative marks, social cards and the 64×64 PNG favicon/organization logo. No replacement symbol is introduced.

`brand-lockup-512x1024.png` is an additional portrait export: 512 pixels wide by 1024 pixels high, with the intact full logo centred on the espresso background. It is rendered directly from the source markup and Inter font, preserving proportions rather than stretching or enlarging the favicon. `brand-mark-512x1024.png` is the standalone mark version on the same portrait canvas: the original tile is rendered at 420×420 pixels and centred, without the wordmark or tagline. The original favicon and page identity remain unchanged.

Run `npm run assets:social` to regenerate the three localized 1200×630 cards, favicon and both portrait brand exports with Chromium. The palette follows the Daclify V2 CIQ/MIQ foundations.

Inter is distributed by @fontsource-variable/inter 5.3.0 under the SIL Open Font License. Builds and exports include the package license. Latin and Latin Extended subsets cover English, Spanish and Polish. The website loads no third-party font or tracking service.
