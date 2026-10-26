import type { Localized } from '@/i18n/config';

export type Degree = { title: Localized<string>; school: string; start: string; end: string; note?: Localized<string> };

export const education: Degree[] = [
  {
    title: { en: 'B.Eng. in Software Development and Management', es: 'Ingeniería en Desarrollo y Gestión de Software' },
    school: 'Universidad Tecnológica de Aguascalientes',
    start: '2024-01',
    end: '2025-09',
  },
  {
    title: {
      en: 'University Technician (TSU) in Multiplatform Software Development',
      es: 'Técnico Superior Universitario en Desarrollo de Software Multiplataforma',
    },
    school: 'Universidad Tecnológica de Aguascalientes',
    start: '2021-01',
    end: '2023-12',
    note: { en: 'Associate-level technical degree', es: '' },
  },
];

export type Language = { name: Localized<string>; level: Localized<string> };

export const languages: Language[] = [
  { name: { en: 'Spanish', es: 'Español' }, level: { en: 'Native', es: 'Nativo' } },
  {
    name: { en: 'English', es: 'Inglés' },
    level: { en: 'Intermediate (B1–B2): technical reading and conversation', es: 'Intermedio (B1–B2): lectura técnica y conversación' },
  },
];
