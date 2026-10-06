import type { Locale, PageId } from './types.ts';
export const locales: readonly Locale[] = ['en', 'es', 'pl'];
export const pages: readonly PageId[] = ['home', 'platform', 'modules', 'privacy', 'roadmap'];
export const origin = 'https://daclify.com';
export const appUrl = 'https://app.daclify.com/';
// Verified against daclify-frontend/src/main.ts: /docs/:topic?.
export const docsUrl = 'https://app.daclify.com/docs';
export const communityUrl = 'https://t.me/daclify';
export const communityIqUrl = 'https://community-iq.com/';
export const routes: Record<Locale, Record<PageId, string>> = {
  en: {
    home: '/',
    platform: '/platform/',
    modules: '/modules/',
    privacy: '/privacy/',
    roadmap: '/roadmap/',
  },
  es: {
    home: '/es/',
    platform: '/es/plataforma/',
    modules: '/es/modulos/',
    privacy: '/es/privacidad/',
    roadmap: '/es/hoja-de-ruta/',
  },
  pl: {
    home: '/pl/',
    platform: '/pl/platforma/',
    modules: '/pl/moduly/',
    privacy: '/pl/prywatnosc/',
    roadmap: '/pl/plan-rozwoju/',
  },
};
export const languageNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  pl: 'Polski',
};
export const ogLocales: Record<Locale, string> = { en: 'en_US', es: 'es_ES', pl: 'pl_PL' };
