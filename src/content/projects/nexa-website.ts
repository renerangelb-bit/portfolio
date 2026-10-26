import type { Project } from './types';

const base = '/work/nexa-website';

export const nexaWebsite: Project = {
  slug: 'nexa-website',
  order: 2,
  name: { en: 'NEXA website', es: 'Sitio web de NEXA' },
  title: {
    en: 'A bilingual website for my studio, with a contact form that turns an inquiry into a scheduled call',
    es: 'Un sitio bilingüe para mi estudio, con un formulario de contacto que convierte una solicitud en una llamada agendada',
  },
  summary: {
    en: 'The site of NEXA, the web studio I run with a designer. Every page exists in English and Spanish, and the contact form is validated on both ends, protected against bots and answered automatically by email.',
    es: 'El sitio de NEXA, el estudio web que llevo con un diseñador. Cada página existe en inglés y en español, y el formulario de contacto se valida en ambos lados, está protegido contra bots y responde automáticamente por correo.',
  },
  role: {
    en: 'Front-end and back-end development. Brand and visual design by Giovanni Durón',
    es: 'Desarrollo front-end y back-end. Marca y diseño visual de Giovanni Durón',
  },
  year: '2026',
  status: { en: 'Live', es: 'En línea' },
  stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Resend', 'Cloudflare Turnstile', 'Netlify'],
  highlights: {
    en: [
      'English and Spanish versions of every page from one codebase, each with its own URL, hreflang tags and sitemap entry',
      'A contact API with rate limiting, a honeypot, a minimum fill time, server-side validation and Cloudflare Turnstile',
      'Pre-rendered pages where only the menu and the contact form ship JavaScript',
    ],
    es: [
      'Versión en inglés y en español de cada página desde un solo código, cada una con su URL, etiquetas hreflang y entrada en el sitemap',
      'Una API de contacto con límite de solicitudes, campo trampa, tiempo mínimo de llenado, validación en el servidor y Cloudflare Turnstile',
      'Páginas generadas por adelantado donde solo el menú y el formulario de contacto envían JavaScript',
    ],
  },
  cover: {
    src: `${base}/home.webp`,
    width: 1440,
    height: 900,
    alt: { en: 'The NEXA home page on desktop', es: 'La página de inicio de NEXA en escritorio' },
  },
  coverMobile: {
    src: `${base}/mobile-home-es.webp`,
    width: 780,
    height: 1688,
    alt: { en: 'The Spanish home page of NEXA on a phone', es: 'La página de inicio de NEXA en español en un teléfono' },
  },
  links: [
    { kind: 'live', href: 'https://nexastudiohq.com' },
    { kind: 'code', href: 'https://github.com/renerangelb-bit/nexa-studio' },
  ],
  blocks: [
    {
      type: 'text',
      title: { en: 'Context', es: 'Contexto' },
      body: {
        en: 'In January 2026 I started NEXA with Giovanni Durón, a designer, to build websites and custom software for small businesses in Mexico, the US and Canada. Giovanni owns the brand and the visual design; I own the code.\n\nThe site has one job: let a busy business owner understand what we do, see starting prices and get in touch in a few minutes, in their own language.',
        es: 'En enero de 2026 empecé NEXA con Giovanni Durón, diseñador, para hacer sitios web y software a la medida para pequeños negocios de México, Estados Unidos y Canadá. Giovanni se encarga de la marca y el diseño visual; yo, del código.\n\nEl sitio tiene un solo trabajo: que un dueño de negocio ocupado entienda qué hacemos, vea precios iniciales y nos contacte en pocos minutos, en su idioma.',
      },
    },
    {
      type: 'text',
      title: { en: 'Two languages, one codebase', es: 'Dos idiomas, un solo código' },
      body: {
        en: 'English lives at the root and Spanish under `/es`, each with its own root layout so `<html lang>` is always right. A single config file maps every route to its translation, and it drives the language switch, the hreflang tags and the sitemap, so a new page can’t ship in one language and be forgotten in the other. Unknown URLs get a translated 404 inside the normal layout.',
        es: 'El inglés vive en la raíz y el español en `/es`, cada uno con su propio layout raíz para que `<html lang>` siempre sea correcto. Un solo archivo de configuración relaciona cada ruta con su traducción, y de ahí salen el cambio de idioma, las etiquetas hreflang y el sitemap, así una página nueva no puede publicarse en un idioma y olvidarse en el otro. Las URL que no existen muestran un 404 traducido dentro del diseño normal.',
      },
    },
    {
      type: 'image',
      image: {
        src: `${base}/contact.webp`,
        width: 1440,
        height: 900,
        alt: { en: 'The NEXA contact page with the inquiry form', es: 'La página de contacto de NEXA con el formulario' },
      },
      caption: {
        en: 'The contact page. After sending, the visitor gets a confirmation email and a link to book a 20-minute call.',
        es: 'La página de contacto. Al enviar, el visitante recibe un correo de confirmación y un enlace para agendar una llamada de 20 minutos.',
      },
    },
    {
      type: 'text',
      title: { en: 'The contact API', es: 'La API de contacto' },
      body: {
        en: 'The form posts to a Next.js route handler that runs the same checks in a fixed order:\n\n1. Rate limit per IP address.\n2. A hidden honeypot field and a minimum fill time, which drop most bots silently.\n3. Field validation with the same `validateContact` function the browser uses, so both sides always agree.\n4. Cloudflare Turnstile verification, when it is configured.\n5. Two emails through Resend: the inquiry to the studio and an automatic reply to the visitor.\n\nKeys live in environment variables, and production pages are served with a strict Content Security Policy.',
        es: 'El formulario envía a un route handler de Next.js que hace las mismas revisiones en un orden fijo:\n\n1. Límite de solicitudes por dirección IP.\n2. Un campo trampa oculto y un tiempo mínimo de llenado, que descartan en silencio a la mayoría de los bots.\n3. Validación de campos con la misma función `validateContact` que usa el navegador, así ambos lados siempre coinciden.\n4. Verificación de Cloudflare Turnstile, cuando está configurado.\n5. Dos correos con Resend: la solicitud al estudio y una respuesta automática al visitante.\n\nLas llaves viven en variables de entorno, y en producción las páginas se sirven con una Content Security Policy estricta.',
      },
    },
    {
      type: 'phones',
      images: [
        { src: `${base}/mobile-home-es.webp`, width: 780, height: 1688, alt: { en: 'Spanish home page on a phone', es: 'Inicio en español en un teléfono' } },
        { src: `${base}/mobile-services.webp`, width: 780, height: 1688, alt: { en: 'Services and starting prices on a phone', es: 'Servicios y precios iniciales en un teléfono' } },
        { src: `${base}/mobile-contact.webp`, width: 780, height: 1688, alt: { en: 'Contact form on a phone', es: 'Formulario de contacto en un teléfono' } },
      ],
      caption: {
        en: 'Spanish home page, services with starting prices, and the contact form on a phone.',
        es: 'Inicio en español, servicios con precios iniciales y el formulario de contacto en un teléfono.',
      },
    },
    {
      type: 'text',
      title: { en: 'Performance and accessibility', es: 'Rendimiento y accesibilidad' },
      body: {
        en: '- Pages are pre-rendered at build time; only the navigation menu and the contact form are client components.\n- Fonts are open-license and served from our own domain.\n- Entrance motion uses CSS scroll-driven animations, with no JavaScript, and is turned off for visitors who prefer reduced motion.\n- Every text color passes WCAG AA contrast, focus is always visible, and the mobile menu is a native `<dialog>`.\n- Analytics come from Cloudflare Web Analytics, which sets no cookies, so the site needs no cookie banner.',
        es: '- Las páginas se generan al compilar; solo el menú de navegación y el formulario de contacto son componentes de cliente.\n- Las tipografías son de licencia libre y se sirven desde nuestro propio dominio.\n- Las animaciones de entrada usan animaciones de CSS ligadas al scroll, sin JavaScript, y se desactivan para quien prefiere reducir el movimiento.\n- Todos los colores de texto cumplen el contraste WCAG AA, el foco siempre es visible y el menú móvil es un `<dialog>` nativo.\n- La analítica es de Cloudflare Web Analytics, que no usa cookies, así que el sitio no necesita aviso de cookies.',
      },
    },
    {
      type: 'text',
      title: { en: 'What I’d do next', es: 'Qué haría después' },
      body: {
        en: 'Store inquiries in a database instead of only email, so we can follow up on each lead and see where they come from, and add automated tests for the contact API.',
        es: 'Guardar las solicitudes en una base de datos y no solo en el correo, para dar seguimiento a cada prospecto y ver de dónde llega, y agregar pruebas automatizadas a la API de contacto.',
      },
    },
  ],
};
