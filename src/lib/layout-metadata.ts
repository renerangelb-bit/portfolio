import type { Metadata, Viewport } from 'next';
import { profile } from '@/content/profile';
import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n/config';
import { titleTemplate } from './seo';

/** Metadata shared by every page of a language (pages add their own title, description and URLs). */
export function rootMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(profile.url),
    title: { default: t.meta.homeTitle, template: titleTemplate },
    description: t.meta.homeDescription,
    applicationName: profile.name,
    authors: [{ name: profile.fullName, url: profile.url }],
    creator: profile.fullName,
    formatDetection: { email: false, address: false, telephone: false },
  };
}

export const rootViewport: Viewport = {
  themeColor: '#f4f6f8',
  colorScheme: 'only light',
};
