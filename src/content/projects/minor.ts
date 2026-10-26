import type { MinorProject } from './types';

/**
 * Earlier school and practicum projects. Listed on the home page and in the CV, without a case study.
 * `href` is optional: add a link if the code is public.
 */
export const minorProjects: MinorProject[] = [
  {
    name: { en: 'Internal report manager for the SITO platform', es: 'Gestor interno de reportes de la plataforma SITO' },
    context: { en: 'Professional practicum, UTA, 2025', es: 'Estadía profesional, UTA, 2025' },
    description: {
      en: 'Developed and maintained the report management system the university uses to administer SITO, working on an existing codebase: requirements, debugging and changes tracked in Git.',
      es: 'Desarrollé y mantuve el gestor de reportes con el que la universidad administra SITO, sobre una base de código existente: requerimientos, depuración y cambios con Git.',
    },
    stack: ['CodeIgniter', 'PHP', 'Git'],
  },
  {
    name: { en: 'Environmental monitoring app', es: 'App de monitoreo ambiental' },
    context: { en: 'Academic project, TSU', es: 'Proyecto académico, TSU' },
    description: {
      en: 'A native Android app that shows temperature, humidity and wind from Arduino sensors, sent over Wi-Fi through a Raspberry Pi gateway to Firebase Realtime Database.',
      es: 'Una app nativa Android que muestra temperatura, humedad y viento de sensores Arduino, enviados por Wi-Fi a través de una Raspberry Pi a Firebase Realtime Database.',
    },
    stack: ['Kotlin', 'Android', 'Firebase', 'Arduino', 'Raspberry Pi'],
  },
  {
    name: { en: 'Employee management system', es: 'Sistema de control de empleados' },
    context: { en: 'Academic project', es: 'Proyecto académico' },
    description: {
      en: 'CRUD workflows to create, look up and update employee records in one place.',
      es: 'Flujos CRUD para dar de alta, consultar y actualizar los registros de empleados en un solo lugar.',
    },
    stack: ['Java', 'Spring Boot', 'SQL'],
  },
];
