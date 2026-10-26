import { profile, absoluteUrl } from '@/content/profile';
import { routes, type Locale } from '@/i18n/config';
import { skills } from '@/content/skills';

/** schema.org Person, so search engines can connect this site with my LinkedIn and GitHub. */
export function personJsonLd(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.fullName,
    alternateName: profile.name,
    jobTitle: profile.role[locale],
    url: absoluteUrl(routes.home[locale]),
    email: `mailto:${profile.email}`,
    image: absoluteUrl('/images/rene.webp'),
    address: { '@type': 'PostalAddress', addressLocality: 'Aguascalientes', addressCountry: 'MX' },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad Tecnológica de Aguascalientes' },
    knowsAbout: skills.slice(0, 2).flatMap((g) => g.items.slice(0, 6)),
    knowsLanguage: ['es', 'en'],
    sameAs: [profile.linkedin.href, profile.github.href],
  };
}

/** Serializes JSON-LD safely for a <script> tag. */
export const jsonLdString = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');
