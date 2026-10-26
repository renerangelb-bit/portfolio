import type { Localized } from '@/i18n/config';

/**
 * Who I am and how to reach me. Used by the home page, the CV, metadata and structured data.
 * The phone number appears only in the CV (PDF and /cv page), not on the home page.
 */
export const profile = {
  name: 'René Rangel',
  fullName: 'René Ángel Rangel Bernal',
  role: { en: 'Full-stack developer', es: 'Desarrollador full-stack' } as Localized<string>,
  cvRole: {
    en: 'Full-Stack Software Developer Jr.',
    es: 'Desarrollador de Software Full-Stack Jr.',
  } as Localized<string>,
  location: { en: 'Aguascalientes, Mexico', es: 'Aguascalientes, México' } as Localized<string>,
  timezone: 'UTC−6',
  email: 'renerangelb@gmail.com',
  phone: { display: '+52 449 329 6808', href: 'tel:+524493296808' },
  linkedin: { label: 'linkedin.com/in/rene-angel-rangel-bernal', href: 'https://www.linkedin.com/in/rene-angel-rangel-bernal' },
  github: { label: 'github.com/renerangelb-bit', href: 'https://github.com/renerangelb-bit' },
  nexa: 'https://nexastudiohq.com',
  /** Public URL of this site, without a trailing slash. Override with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://renerangel.netlify.app').replace(/\/$/, ''),
  /** Repository of this site, linked in the footer. */
  sourceUrl: 'https://github.com/renerangelb-bit/portfolio',
  /** Set to false to hide the availability line everywhere. */
  available: true,
  /** CV files in /public/cv, generated with `npm run cv:pdf`. */
  cvPdf: { en: '/cv/Rene-Rangel-CV-EN.pdf', es: '/cv/Rene-Rangel-CV-ES.pdf' } as Localized<string>,
};

export const absoluteUrl = (path: string) => `${profile.url}${path === '/' ? '' : path}` || profile.url;

/** Short texts about me, in both languages. */
export const intro = {
  headline: {
    en: 'I build web apps from the data model to the checkout.',
    es: 'Construyo aplicaciones web, del modelo de datos al checkout.',
  },
  lead: {
    en: 'I’m René Rangel, a full-stack developer working with React, Next.js, TypeScript, Node.js and SQL. I also spent 20 months handling online orders for a dental supply company, so I know what happens behind the order button.',
    es: 'Soy René Rangel, desarrollador full-stack con React, Next.js, TypeScript, Node.js y SQL. También pasé 20 meses gestionando pedidos en línea para una distribuidora dental, así que sé lo que pasa detrás del botón de comprar.',
  },
  availability: {
    en: 'Available now for a full-time role, remote or in Aguascalientes, Mexico (UTC−6).',
    es: 'Disponible ya para un puesto de tiempo completo, remoto o en Aguascalientes, México (UTC−6).',
  },
  cvSummary: {
    en: 'Full-stack developer with a B.Eng. in Software Development and Management, building web applications with React, Next.js, TypeScript, Node.js and SQL. At NEXA, the studio I co-founded, I built a bilingual business website with its own contact API and a working e-commerce prototype with checkout, accounts and order tracking. I also spent 20 months handling online orders for a dental supply company, so I understand the business side of the software I build.',
    es: 'Desarrollador full-stack e ingeniero en Desarrollo y Gestión de Software. Construyo aplicaciones web con React, Next.js, TypeScript, Node.js y SQL. En NEXA, el estudio que cofundé, desarrollé un sitio bilingüe con su propia API de contacto y un prototipo funcional de e-commerce con checkout, cuentas y rastreo de pedidos. También pasé 20 meses gestionando pedidos en línea para una distribuidora dental, así que entiendo el lado de negocio del software que construyo.',
  },
} satisfies Record<string, Localized<string>>;
