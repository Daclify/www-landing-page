import type { Locale, PageId } from './types.ts';
export const locales: readonly Locale[] = ['en', 'es', 'pl'];
export const pages: readonly PageId[] = [
  'home',
  'platform',
  'modules',
  'privacy',
  'roadmap',
  'mini-apps',
];
export const origin = 'https://daclify.com';
export const miniAppsUrl = 'https://testnet.app.daclify.com/mini-apps';
export const testAppUrl = 'https://testnet.app.daclify.com/';
// Verified against daclify-frontend/src/main.ts: /docs/:topic?.
export const docsUrl = 'https://testnet.app.daclify.com/docs';
export const communityUrl = 'https://t.me/daclify';
export const communityIqUrl = 'https://community-iq.com/';
export const routes: Record<Locale, Record<PageId, string>> = {
  en: {
    'mini-apps': '/mini-apps/',
    home: '/',
    platform: '/platform/',
    modules: '/modules/',
    privacy: '/privacy/',
    roadmap: '/roadmap/',
  },
  es: {
    'mini-apps': '/es/mini-apps/',
    home: '/es/',
    platform: '/es/plataforma/',
    modules: '/es/modulos/',
    privacy: '/es/privacidad/',
    roadmap: '/es/hoja-de-ruta/',
  },
  pl: {
    'mini-apps': '/pl/mini-apps/',
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
