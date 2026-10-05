export type Locale = 'en' | 'es' | 'pl';
export type PageId = 'home' | 'platform' | 'modules' | 'privacy' | 'roadmap';
export type Status = 'development' | 'planned' | 'principle';
export interface Card {
  title: string;
  text: string;
  status?: Status;
  link?: PageId;
}
export interface Section {
  title: string;
  text: string;
  cards?: readonly Card[];
  bullets?: readonly string[];
}
export interface Page {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  sections: readonly Section[];
}
export interface SiteCopy {
  nav: Record<PageId, string>;
  skip: string;
  menu: string;
  language: string;
  status: Record<Status, string>;
  statusNote: string;
  explore: string;
  community: string;
  more: string;
  back: string;
  footer: string;
  footerNote: string;
  ctaTitle: string;
  ctaText: string;
  questions: string;
  faq: readonly { question: string; answer: string }[];
  preview: {
    label: string;
    name: string;
    caption: string;
    tabs: readonly [string, string, string];
    rows: readonly [string, string, string];
    tags: readonly [string, string, string];
    flow: readonly [string, string, string];
    note: string;
  };
  pages: Record<PageId, Page>;
}
