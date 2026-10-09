# SEO, localization and publication

## What the build provides

Fifteen substantive static pages cover community governance, platform/accounts/deployments, Decide/Works/payroll, encrypted documents and the feature roadmap. Each topic is fully written in English, Spanish and Polish, including menus, metadata, FAQ, planned-feature labels and app/handbook calls to action. No language is substituted through client-side JavaScript or an automatic browser-language redirect.

Every page has one H1, a unique title/description, self-canonical URL, reciprocal `en`, `es`, `pl` and `x-default` alternates, Open Graph/Twitter metadata and a local 1200×630 localized social image. Alternates map the equivalent topic rather than returning every reader to a homepage. Generic language targeting is intentional; Polish language support does not imply a Polish office or Spanish language support a Spanish legal entity.

The JSON-LD graph describes Organization, WebSite, WebPage and BreadcrumbList. Page names, descriptions, URLs and languages come from the same content as visible HTML. It includes no fabricated ratings, founding date, paid/free offer, operating search endpoint or production-ready software claim. Structured data must describe the actual page; no particular search appearance is promised.

The XML sitemap lists only the 15 canonical HTML pages. Language annotations are in HTML; duplicating them in the sitemap is unnecessary. No invented last-modified date, change-frequency or priority field is emitted. `robots.txt` permits crawling of the public website and points to its absolute sitemap URL. It is not a security/access-control mechanism.

`llms.txt` is a curated Markdown index of all language pages, their plain Markdown variants, app/handbook destinations, planned capabilities and optional public links. `llms-full.txt` contains the complete public content. These files implement a discovery proposal; they do not guarantee AI inclusion, ranking or licensing enforcement. They are not a substitute for useful rendered content, sitemaps or proper crawler access.

Fonts and images are local; the informational website has no client application bundle, tracker or third-party form. Keep the origin and metadata references consistent when changing hosting. Rebuild/export after editing content, and regenerate social cards when their displayed text changes.

## Before publication

1. Confirm that `https://daclify.com` is the intended canonical production origin. Live-host validation was not established by this implementation. The previous repository uses this origin; the GitHub Pages API did not provide an existing Pages configuration.
2. Publish the generated `dist/` at the domain root or use the explicit root export. Configure HTTPS and a permanent redirect from alternative hosts to the canonical host. Root-relative asset paths are intentional; subdirectory project hosting needs a separate base-path design.
3. Ensure all directory pages return 200, missing pages return 404, crawler files have their expected content types, and the host does not return the homepage for every unknown path.
4. Keep preview/staging hosts out of the production index through host-level access controls or an `X-Robots-Tag: noindex` policy. Do not modify the production sitemap to list temporary preview hosts.
5. Review all translations and product claims against the supported app release. The main app remains marked Soon with disabled controls. Verify the active test app at `https://testnet.app.daclify.com/`, its handbook at `/docs` (including direct SPA loads), and the community destination before publication. Enable main-app links only after its deployment is ready. Feature availability, pricing and release readiness require supporting product evidence.
6. Check deployed JSON-LD with Google's relevant testing tools and review canonical/hreflang with Search Console URL inspection after domain ownership is configured. The local tests validate structure and consistency, not Google's indexing decision or rich-result eligibility.
7. Submit `https://daclify.com/sitemap.xml` in the verified Search Console property. No Search Console property, submission, analytics or search indexing was configured during this rebuild.
8. Measure real performance on the deployed host, including compression/caching, font/image delivery and Core Web Vitals. Local absence of JavaScript is not a Lighthouse score or a performance guarantee.

## Primary references

- [Google: localized page versions](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google: structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google: robots.txt](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt)
- [Google: building a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [The llms.txt proposal](https://llmstxt.org/)
