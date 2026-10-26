/**
 * Languages and URLs. English lives at the root (/), Spanish under /es.
 * Every page exists in both languages; this file is the single source of truth for links,
 * the language switch, hreflang tags and the sitemap.
 */
export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

/** A value that exists in both languages. */
export type Localized<T> = Record<Locale, T>;

export const ogLocale: Localized<string> = { en: 'en_US', es: 'es_MX' };

export const routes = {
  home: { en: '/', es: '/es' },
  cv: { en: '/cv', es: '/es/cv' },
} satisfies Record<string, Localized<string>>;

/** Section anchors on the home page. */
export const anchors = {
  work: { en: 'work', es: 'proyectos' },
  experience: { en: 'experience', es: 'experiencia' },
  skills: { en: 'skills', es: 'habilidades' },
  contact: { en: 'contact', es: 'contacto' },
} satisfies Record<string, Localized<string>>;

export const projectPath = (slug: string): Localized<string> => ({ en: `/work/${slug}`, es: `/es/proyectos/${slug}` });

export function localeFromPath(pathname: string): Locale {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
}

/** Equivalent path in the other language. Unknown paths fall back to the other home page. */
export function alternatePath(pathname: string, target: Locale): string {
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  const from = localeFromPath(clean);
  if (from === target) return clean;
  for (const paths of Object.values(routes) as Localized<string>[]) {
    if (paths[from] === clean) return paths[target];
  }
  const m = clean.match(from === 'en' ? /^\/work\/([^/]+)$/ : /^\/es\/proyectos\/([^/]+)$/);
  if (m) return projectPath(m[1])[target];
  return routes.home[target];
}
