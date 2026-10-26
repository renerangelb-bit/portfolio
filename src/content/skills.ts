import type { Localized } from '@/i18n/config';

export type SkillGroup = { name: Localized<string>; items: string[] };

/**
 * Grouped by where each tool sits in a project. List only what you can explain in an interview.
 * Add PostgreSQL to "Back end and data" once a project in this portfolio uses it.
 */
export const skills: SkillGroup[] = [
  {
    name: { en: 'Front end', es: 'Front-end' },
    items: ['React 19', 'Next.js (App Router)', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Zustand', 'Vite', 'Angular'],
  },
  {
    name: { en: 'Back end and data', es: 'Back-end y datos' },
    items: ['Node.js', 'Express', 'REST APIs', 'SQL Server', 'Relational modeling', 'MongoDB', 'Java', 'Spring Boot', 'PHP', 'CodeIgniter', 'Python'],
  },
  {
    name: { en: 'Mobile and IoT', es: 'Móvil e IoT' },
    items: ['Kotlin', 'Android Studio', 'Firebase Realtime Database', 'Arduino', 'Raspberry Pi'],
  },
  {
    name: { en: 'Tools and services', es: 'Herramientas y servicios' },
    items: ['Git', 'GitHub', 'GitHub Actions', 'Postman', 'Netlify', 'Resend', 'Cloudflare Turnstile'],
  },
];

/** Spanish labels for the few skill names that change between languages. */
export const skillLabelEs: Record<string, string> = {
  'Relational modeling': 'Modelado relacional',
  'REST APIs': 'APIs REST',
};

export const skillLabel = (name: string, locale: 'en' | 'es') => (locale === 'es' ? (skillLabelEs[name] ?? name) : name);
