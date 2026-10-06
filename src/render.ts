import type { Card, Locale, PageId, Section } from './types.ts';
import { content } from './content/index.ts';
import { brandLockup, brandMark as mark } from './brand.ts';
import {
  appUrl,
  communityUrl,
  communityIqUrl,
  docsUrl,
  languageNames,
  locales,
  ogLocales,
  origin,
  pages,
  routes,
} from './routes.ts';

export function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
export function serializeJson(value: unknown): string {
  const json = JSON.stringify(value);
  if (json === undefined) throw new Error('Structured data must be serializable');
  return json.replaceAll('<', '\\u003c').replaceAll('>', '\\u003e').replaceAll('&', '\\u0026');
}
const arrow =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function nav(locale: Locale, pageId: PageId): string {
  return (
    pages
      .filter((page) => page !== 'home')
      .map(
        (page) =>
          `<a href="${routes[locale][page]}"${page === pageId ? ' aria-current="page"' : ''}>${escapeHtml(content[locale].nav[page])}</a>`,
      )
      .join('') + `<a href="${docsUrl}">${escapeHtml(content[locale].docsNav)}</a>`
  );
}
function appActions(locale: Locale): string {
  const copy = content[locale];
  return `<div class="hero-actions"><a class="button primary" href="${appUrl}">${escapeHtml(copy.app)}${arrow}</a><a class="button secondary" href="${docsUrl}">${escapeHtml(copy.docs)}${arrow}</a></div>`;
}
function card(locale: Locale, item: Card, index: number): string {
  const copy = content[locale];
  return `<article class="feature-card"><div class="card-top"><span class="card-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span>${item.status ? `<span class="badge ${item.status}">${escapeHtml(copy.status[item.status])}</span>` : '<span class="card-dot" aria-hidden="true"></span>'}</div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p>${item.link ? `<a class="text-link" href="${routes[locale][item.link]}">${escapeHtml(copy.more)} <span class="sr-only">${escapeHtml(copy.nav[item.link])}</span>${arrow}</a>` : ''}</article>`;
}
function section(locale: Locale, item: Section, index: number, home: boolean): string {
  return `<section class="content-section ${home ? 'home-section' : 'detail-section'}" aria-labelledby="section-${index}"><div class="section-heading"><span class="section-index" aria-hidden="true">/ ${String(index + 1).padStart(2, '0')}</span><div><h2 id="section-${index}">${escapeHtml(item.title)}</h2><p class="section-lead">${escapeHtml(item.text)}</p></div></div>${item.cards ? `<div class="card-grid ${item.cards.length === 2 ? 'two' : ''}">${item.cards.map((item, i) => card(locale, item, i)).join('')}</div>` : ''}${item.bullets ? `<ul class="principles">${item.bullets.map((text) => `<li><span class="principle-mark" aria-hidden="true">↗</span>${escapeHtml(text)}</li>`).join('')}</ul>` : ''}</section>`;
}
export function structuredData(locale: Locale, pageId: PageId) {
  const copy = content[locale];
  const page = copy.pages[pageId];
  const url = `${origin}${routes[locale][pageId]}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${origin}/#organization`,
        name: 'Daclify',
        url: `${origin}/`,
        logo: {
          '@type': 'ImageObject',
          url: `${origin}/assets/brand-mark.png`,
          width: 64,
          height: 64,
        },
        sameAs: ['https://github.com/Daclify', communityUrl],
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        name: 'Daclify',
        url: `${origin}/`,
        inLanguage: [...locales],
        publisher: { '@id': `${origin}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: locale,
        isPartOf: { '@id': `${origin}/#website` },
        about: { '@id': `${origin}/#organization` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: copy.nav.home,
            item: `${origin}${routes[locale].home}`,
          },
          ...(pageId === 'home'
            ? []
            : [{ '@type': 'ListItem', position: 2, name: copy.nav[pageId], item: url }]),
        ],
      },
    ],
  };
}

function preview(locale: Locale): string {
  const copy = content[locale].preview;
  return `<div class="hero-art"><div class="orbit orbit-one" aria-hidden="true"></div><div class="orbit orbit-two" aria-hidden="true"></div><div class="orbit-node node-one" aria-hidden="true"></div><div class="orbit-node node-two" aria-hidden="true"></div><div class="workspace-preview"><div class="preview-header"><span class="preview-symbol" aria-hidden="true">${mark}</span><span class="preview-label">${escapeHtml(copy.label)}</span><span class="window-dots" aria-hidden="true">•••</span></div><div class="preview-body"><div class="preview-kicker">DAO / 001</div><h2>${escapeHtml(copy.name)}</h2><p class="preview-caption">${escapeHtml(copy.caption)}</p><div class="preview-tabs">${copy.tabs.map((label, index) => `<span class="${index === 0 ? 'selected' : ''}">${escapeHtml(label)}</span>`).join('')}</div><div class="preview-rows">${copy.rows.map((label, index) => `<div class="preview-row"><span class="row-icon" aria-hidden="true">${['◇', '↗', '≡'][index]}</span><span>${escapeHtml(label)}</span><span class="row-tag tag-${index}">${escapeHtml(copy.tags[index] ?? '')}</span></div>`).join('')}</div><div class="preview-flow">${copy.flow.map((label, index) => `<span><i aria-hidden="true">${index + 1}</i>${escapeHtml(label)}</span>`).join('')}</div></div></div><div class="floating-note">${mark}<span>${escapeHtml(copy.note)}</span></div></div>`;
}

export function renderPage(locale: Locale, pageId: PageId): string {
  const copy = content[locale];
  const page = copy.pages[pageId];
  const url = `${origin}${routes[locale][pageId]}`;
  const home = pageId === 'home';
  const image = `${origin}/assets/social-${locale}.png`;
  const imageAlt = `Daclify — ${copy.pages.home.heading.replaceAll('\n', ' ')}`;
  return `<!DOCTYPE html>
<html lang="${locale}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(page.title)}</title>
<meta name="description" content="${escapeHtml(page.description)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#100d0b">
<link rel="canonical" href="${url}">
${locales.map((lang) => `<link rel="alternate" hreflang="${lang}" href="${origin}${routes[lang][pageId]}">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${origin}${routes.en[pageId]}">
<link rel="alternate" type="text/markdown" href="${origin}${routes[locale][pageId]}index.md" title="${escapeHtml(page.title)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Daclify">
<meta property="og:title" content="${escapeHtml(page.title)}">
<meta property="og:description" content="${escapeHtml(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${ogLocales[locale]}">
${locales
  .filter((lang) => lang !== locale)
  .map((lang) => `<meta property="og:locale:alternate" content="${ogLocales[lang]}">`)
  .join('\n')}
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${escapeHtml(imageAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(page.title)}">
<meta name="twitter:description" content="${escapeHtml(page.description)}">
<meta name="twitter:image" content="${image}">
<meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}">
<link rel="icon" type="image/png" sizes="64x64" href="/assets/brand-mark.png">
<link rel="preload" href="/assets/inter-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/site.css">
<script type="application/ld+json">${serializeJson(structuredData(locale, pageId))}</script>
</head>
<body>
<a class="skip-link" href="#main">${escapeHtml(copy.skip)}</a>
<header class="site-header"><div class="container header-inner"><a class="brand" href="${routes[locale].home}" aria-label="Daclify — ${escapeHtml(copy.nav.home)}">${brandLockup}</a><nav class="desktop-nav" aria-label="${escapeHtml(copy.menu)}">${nav(locale, pageId)}</nav><div class="header-end"><nav class="language-nav" aria-label="${escapeHtml(copy.language)}">${locales.map((lang) => `<a href="${routes[lang][pageId]}" lang="${lang}" hreflang="${lang}" aria-label="${languageNames[lang]}" title="${languageNames[lang]}"${locale === lang ? ' aria-current="true"' : ''}>${lang.toUpperCase()}</a>`).join('')}</nav><details class="mobile-menu"><summary>${escapeHtml(copy.menu)}<span aria-hidden="true">＋</span></summary><nav aria-label="${escapeHtml(copy.menu)}">${nav(locale, pageId)}</nav></details></div></div></header>
<main id="main" tabindex="-1">
${!home ? `<div class="container breadcrumbs"><a href="${routes[locale].home}">${escapeHtml(copy.nav.home)}</a><span aria-hidden="true">/</span><span>${escapeHtml(copy.nav[pageId])}</span></div>` : ''}
<section class="container hero ${home ? '' : 'detail-hero'}" aria-labelledby="page-title"><div class="hero-copy"><p class="eyebrow"><span aria-hidden="true"></span>${escapeHtml(page.eyebrow)}</p><h1 id="page-title">${page.heading
    .split('\n')
    .map(
      (line, index, lines) =>
        `<span${index === lines.length - 1 && home ? ' class="amber-text"' : ''}>${escapeHtml(line)}</span>`,
    )
    .join(
      '',
    )}</h1><p class="hero-lead">${escapeHtml(page.lead)}</p>${appActions(locale)}<p class="product-note"><span class="status-dot" aria-hidden="true"></span><span>${escapeHtml(copy.productNote)}</span></p></div>${home ? preview(locale) : `<div class="detail-emblem" aria-hidden="true">${mark}<span>${escapeHtml(copy.nav[pageId])}</span></div>`}</section>
${home ? `<div class="brand-strip"><div class="container">${copy.benefits.map((benefit) => `<span>${escapeHtml(benefit)}</span>`).join('')}</div></div>` : ''}
<div class="container content">${home ? `<section class="content-section" aria-labelledby="community-iq-title"><div class="section-heading"><span class="section-index" aria-hidden="true">↗</span><div><h2 id="community-iq-title">${escapeHtml(copy.communityIq.title)}</h2><p class="section-lead">${escapeHtml(copy.communityIq.text)}</p><a class="text-link" href="${communityIqUrl}">${escapeHtml(copy.communityIq.linkLabel)}${arrow}</a></div></div></section>` : ''}${page.sections.map((item, index) => section(locale, item, index, home)).join('')}</div>
${home ? `<section class="container faq-section" aria-labelledby="faq-title"><div><p class="eyebrow">FAQ</p><h2 id="faq-title">${escapeHtml(copy.questions)}</h2></div><div class="faq-list">${copy.faq.map((item) => `<details><summary>${escapeHtml(item.question)}<span aria-hidden="true">＋</span></summary><p>${escapeHtml(item.answer)}</p></details>`).join('')}</div></section>` : ''}
<section class="container closing-section" aria-labelledby="closing-title"><div class="closing-orbit" aria-hidden="true"></div><p class="eyebrow">DACLIFY</p><h2 id="closing-title">${escapeHtml(copy.ctaTitle)}</h2><p>${escapeHtml(copy.ctaText)}</p>${appActions(locale)}</section>
</main>
<footer class="site-footer"><div class="container footer-main"><div><a class="brand" href="${routes[locale].home}">${brandLockup}</a><p class="footer-tagline">${escapeHtml(copy.footer)}</p><p class="footer-note">${escapeHtml(copy.footerNote)}</p></div><nav aria-label="${escapeHtml(copy.menu)}">${nav(locale, pageId)}</nav><div class="footer-links"><a href="${appUrl}">${escapeHtml(copy.app)}${arrow}</a><a href="${docsUrl}">${escapeHtml(copy.docs)}${arrow}</a><a href="${communityUrl}">${escapeHtml(copy.community)}${arrow}</a><a href="https://github.com/Daclify">GitHub ${arrow}</a></div></div><div class="container footer-bottom"><span>© Daclify</span><span>EN / ES / PL</span><span>${escapeHtml(copy.productNote)}</span></div></footer>
</body>
</html>\n`;
}

export function renderMarkdown(locale: Locale, pageId: PageId): string {
  const copy = content[locale];
  const page = copy.pages[pageId];
  const communityIq =
    pageId === 'home'
      ? `## ${copy.communityIq.title}\n\n${copy.communityIq.text}\n\n[${copy.communityIq.linkLabel}](${communityIqUrl})\n\n`
      : '';
  const sections = page.sections
    .map(
      (section) =>
        `## ${section.title}\n\n${section.text}\n\n${section.cards?.map((card) => `### ${card.title}${card.status ? ` — ${copy.status[card.status]}` : ''}\n\n${card.text}\n`).join('\n') ?? ''}${section.bullets?.map((item) => `- ${item}`).join('\n') ?? ''}`,
    )
    .join('\n\n');
  const faq =
    pageId === 'home'
      ? `\n\n## ${copy.questions}\n\n${copy.faq.map((item) => `### ${item.question}\n\n${item.answer}`).join('\n\n')}`
      : '';
  return `# ${page.title}\n\n> ${page.description}\n\n${origin}${routes[locale][pageId]}\n\n${page.lead}\n\n${communityIq}${sections}${faq}\n\n## ${copy.ctaTitle}\n\n${copy.ctaText}\n\n- [${copy.app}](${appUrl})\n- [${copy.docs}](${docsUrl})\n- [${copy.community}](${communityUrl})\n`;
}

export function renderSitemap(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${locales.flatMap((locale) => pages.map((pageId) => `  <url><loc>${origin}${routes[locale][pageId]}</loc></url>`)).join('\n')}\n</urlset>\n`;
}

export function renderLlms(): string {
  return `# Daclify\n\n> Daclify is a modular DAO platform for membership, governance, funded work, contributor payments and shared documents.\n\nUse the app to explore DAO workspaces and the versioned handbook for accounts, voting, projects, treasury and document guides. The roadmap identifies planned capabilities, including social/Telegram login, managed recovery, independent deployments, hosted services and future chain integrations. Prices and delivery dates for these options are not announced. Encryption protects document content; public blockchain activity may remain visible.\n\n## CommunityIQ\n\n- [CommunityIQ](${communityIqUrl}): ${content.en.communityIq.text}\n\n## App and documentation\n\n- [Daclify app](${appUrl}): DAO Hub and community workspaces.\n- [Daclify handbook](${docsUrl}): Product guides in the app; check versions and deployment-specific feature availability.\n\n${locales.map((locale) => `## ${languageNames[locale]}\n\n${pages.map((pageId) => `- [${content[locale].pages[pageId].title}](${origin}${routes[locale][pageId]}): ${content[locale].pages[pageId].description} Markdown: ${origin}${routes[locale][pageId]}index.md`).join('\n')}`).join('\n\n')}\n\n## Optional\n\n- [Full website text](${origin}/llms-full.txt): Complete public content in all three languages.\n- [Daclify community](${communityUrl}): Project discussion and feedback.\n- [Daclify GitHub organization](https://github.com/Daclify): Public organization profile; repository availability varies.\n`;
}
