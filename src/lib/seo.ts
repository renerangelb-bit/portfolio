import type { Metadata } from 'next';
import { profile } from '@/content/profile';
import { ogLocale, type Locale, type Localized } from '@/i18n/config';

type PageMeta = {
  locale: Locale;
  /** Path of this page in both languages. */
  paths: Localized<string>;
  title: string;
  description: string;
  /** Use the title as-is instead of the "%s, René Rangel" template. */
  absoluteTitle?: boolean;
  image?: { url: string; width: number; height: number; alt: string };
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
};

export const titleTemplate = `%s | ${profile.name}`;

/** Per-page metadata with canonical URL, hreflang alternates, Open Graph and Twitter cards. */
export function pageMetadata({ locale, paths, title, description, absoluteTitle, image, type = 'website', noindex }: PageMeta): Metadata {
  const ogImage = image ?? { url: `/og/og-${locale}.png`, width: 1200, height: 630, alt: `${profile.name}, ${profile.role[locale]}` };
  const fullTitle = absoluteTitle ? title : titleTemplate.replace('%s', title);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: paths[locale],
      languages: { en: paths.en, es: paths.es, 'x-default': paths.en },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: paths[locale],
      siteName: profile.name,
      locale: ogLocale[locale],
      type,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
