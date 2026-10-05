# Daclify V2 public website

Rebuild the existing static landing repository around the approved V2 vision. The user requests continuous implementation and reviews the resulting code afterward; no extra design approval or delegation is needed. Publishing is a separate action.

Use the existing daclify.com canonical origin, subject to operator verification before publication. English stays at `/`; Spanish uses `/es/`, Polish `/pl/`. Five substantive topics per language: home, platform, modules, privacy, roadmap. Language links preserve the topic with localized slugs. No automatic language redirects. Render all content into ordinary HTML so navigation and information work without JavaScript.

Use the V2 product's espresso, ivory and amber family and its established rounded `d.` tile/wordmark/tagline, an expressive large headline, an illustrative community workspace, restrained topology graphics, generous editorial spacing and readable detailed pages. Bundle Inter locally. Native details elements provide mobile navigation and FAQ disclosure. Avoid remote fonts, trackers, fake forms, usage statistics, invented customers and launch promises.

Explain internal/native identities, clearly labelled custody modes, shared/independent deployments, Hub discovery, credits/native-token governance, Decide/Works/payroll, JSON/IPFS content, privacy boundaries, free basic governance and planned hosted Operations. Development slices and planned capabilities must have distinct labels. No production signup CTA while the release is unqualified; link to the roadmap and the existing Telegram community instead. Remove unsupported legacy AI/reputation/search/price claims. Public copy never links readers to private V2 repositories as if they are available documentation.

Generate unique titles/descriptions, one main heading, self-canonical URLs, reciprocal en/es/pl/x-default alternates, Open Graph/Twitter metadata and honest Organization/WebSite/WebPage/BreadcrumbList JSON-LD. Generate robots.txt, sitemap.xml, llms.txt, llms-full.txt and readable per-page Markdown from the same content. A crawler file or structured data cannot guarantee ranking or inclusion. Do not fabricate last-modified dates.

Build with Node 24 native TypeScript, using no application runtime dependency or SPA framework. `dist/` is the publishable tree; an explicit export maintains root HTML/assets for the existing static-host workflow. Export owns only its recorded generated paths, retaining legacy assets. CI builds/checks/tests without deploying. Preview locally; keep production untouched.

Acceptance: all 15 language pages have complete localized navigation/content/status/FAQ; no dead internal links; metadata and sitemap agree; structured-data references resolve; crawler files are valid; malicious text cannot escape HTML/JSON-LD; desktop/mobile/no-JS navigation and language switches work; axe checks and 320px overflow checks pass; source and exported output match.
