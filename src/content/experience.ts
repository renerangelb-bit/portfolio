import type { Localized } from '@/i18n/config';

export type Job = {
  role: Localized<string>;
  org: string;
  orgDetail?: Localized<string>;
  href?: string;
  /** 'YYYY-MM' */
  start: string;
  /** 'YYYY-MM', or leave out for a current job. */
  end?: string;
  place: Localized<string>;
  /** Shown in small text under the title, e.g. "Part-time". */
  note?: Localized<string>;
  bullets: Localized<string[]>;
};

/** Newest first. The same list feeds the home page and the CV. */
export const experience: Job[] = [
  {
    role: { en: 'Software Developer and co-founder', es: 'Desarrollador de software y cofundador' },
    org: 'NEXA',
    orgDetail: { en: 'Web and software studio', es: 'Estudio de web y software' },
    href: 'https://nexastudiohq.com',
    start: '2026-01',
    place: { en: 'Remote', es: 'Remoto' },
    note: { en: 'Part-time, client projects', es: 'Medio tiempo, proyectos para clientes' },
    bullets: {
      en: [
        'Built the studio’s bilingual website with Next.js 16, React 19 and TypeScript, including a contact API with rate limiting, bot protection and transactional email through Resend.',
        'Built a working e-commerce prototype for a handmade cosmetics brand: a 63-product catalog, cart with coupons, two-step checkout, customer accounts and order tracking with six statuses.',
        'Defined the phased technical scope for that store, turning catalog, purchasing and administration needs into front-end, back-end, data and UX deliverables.',
        'Designed normalized SQL Server data models and the initial REST API architecture with Node.js and Express, prioritizing data integrity and maintainability.',
      ],
      es: [
        'Desarrollé el sitio bilingüe del estudio con Next.js 16, React 19 y TypeScript, incluida una API de contacto con límite de solicitudes, protección contra bots y correo transaccional con Resend.',
        'Construí un prototipo funcional de e-commerce para una marca de cosmética artesanal: catálogo de 63 productos, carrito con cupones, checkout en dos pasos, cuentas de cliente y rastreo de pedidos con seis estados.',
        'Definí el alcance técnico por fases de esa tienda, convirtiendo necesidades de catálogo, compra y administración en entregables de front-end, back-end, datos y UX.',
        'Diseñé modelos de datos normalizados en SQL Server y la arquitectura inicial de la API REST con Node.js y Express, priorizando integridad de datos y mantenibilidad.',
      ],
    },
  },
  {
    role: { en: 'Sales and Customer Service Executive', es: 'Ejecutivo de Ventas y Atención al Cliente' },
    org: 'Corporativo Dental Santander',
    orgDetail: { en: 'Dental supply distributor', es: 'Distribuidora de insumos dentales' },
    start: '2024-10',
    end: '2026-06',
    place: { en: 'Aguascalientes, Mexico', es: 'Aguascalientes, México' },
    note: { en: 'Full-time, alongside the last stretch of my degree', es: 'Tiempo completo, junto con la recta final de mi carrera' },
    bullets: {
      en: [
        'Managed three stages of the online order lifecycle (customer guidance, payment reconciliation and shipping coordination), keeping every order traceable through delivery.',
        'Translated technical product specifications into clear buying guidance for customers.',
      ],
      es: [
        'Gestioné tres etapas del ciclo de pedidos en línea (asesoría, conciliación de pagos y coordinación de envíos), manteniendo cada pedido rastreable hasta la entrega.',
        'Traduje especificaciones técnicas de productos en recomendaciones de compra claras para los clientes.',
      ],
    },
  },
  {
    role: { en: 'Software Developer, professional practicum', es: 'Desarrollador de software, estadía profesional' },
    org: 'Universidad Tecnológica de Aguascalientes',
    orgDetail: { en: 'SITO platform', es: 'Plataforma SITO' },
    start: '2025-05',
    end: '2025-09',
    place: { en: 'Aguascalientes, Mexico', es: 'Aguascalientes, México' },
    note: { en: 'Required capstone placement of the engineering program', es: 'Requisito curricular de la ingeniería' },
    bullets: {
      en: [
        'Developed and maintained an internal report management system for the university’s SITO platform over five months.',
        'Analyzed requirements and changed an existing CodeIgniter and PHP codebase, using Git for version control.',
      ],
      es: [
        'Desarrollé y mantuve durante cinco meses un gestor interno de reportes para la plataforma SITO de la universidad.',
        'Analicé requerimientos y modifiqué una base de código existente en CodeIgniter y PHP, con control de versiones en Git.',
      ],
    },
  },
];
