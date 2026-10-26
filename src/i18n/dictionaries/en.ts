/** Interface text in English. Content (projects, experience…) lives in src/content. */
export const en = {
  meta: {
    homeTitle: 'René Rangel, full-stack developer',
    homeDescription:
      'Full-stack developer in Aguascalientes, Mexico, working with React, Next.js, TypeScript, Node.js and SQL. Available for full-time roles, remote or on site.',
    cvTitle: 'CV',
    cvDescription: 'The CV of René Rangel, full-stack developer: experience, projects, skills and education.',
  },
  a11y: {
    skip: 'Skip to content',
    home: 'René Rangel, home',
    mainNav: 'Main',
    languageSwitch: 'Leer en español',
    opensInNewTab: '(opens in a new tab)',
    photoAlt: 'Portrait of René Rangel',
  },
  nav: {
    work: 'Work',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    cv: 'CV',
    language: 'ES',
  },
  hero: {
    email: 'Email me',
    downloadCv: 'Download CV (PDF)',
  },
  flow: {
    title: 'One order, done two ways',
    stepsLabel: 'Order statuses',
    steps: ['Order received', 'Payment confirmed', 'Preparing', 'Packed', 'Shipped', 'Delivered'],
    byHand: 'At Dental Santander I handled three of these steps by hand: guiding customers, reconciling payments and coordinating shipping.',
    asSoftware: 'For the Volviendo al Origen prototype I built the same flow as software.',
    link: 'See the prototype',
  },
  work: {
    title: 'Selected work',
    role: 'My role',
    status: 'Status',
    stack: 'Built with',
    caseStudy: 'Read the case study',
    live: 'Live site',
    demo: 'Live demo',
    code: 'Code on GitHub',
    otherTitle: 'Earlier projects',
    otherIntro: 'School and practicum work, before NEXA.',
  },
  project: {
    back: 'All work',
    next: 'Next project',
  },
  experience: {
    title: 'Experience',
    present: 'Present',
  },
  skills: {
    title: 'Skills',
    intro: 'What I use, grouped by where it sits in a project.',
  },
  education: {
    title: 'Education',
    languages: 'Languages',
  },
  contact: {
    title: 'Contact',
    lead: 'Email is the fastest way to reach me. I answer in English or Spanish.',
    elsewhere: 'Also on',
    nexa: 'Need a website or custom software for your business? That’s NEXA, the studio I co-founded.',
    nexaLink: 'Visit NEXA',
  },
  cv: {
    download: 'Download PDF',
    print: 'This page is the printable version of my CV.',
    backHome: 'Back to the portfolio',
    summary: 'Summary',
    experience: 'Experience',
    projects: 'Selected projects',
    skills: 'Skills',
    education: 'Education',
  },
  footer: {
    built: 'Built with Next.js and TypeScript.',
    source: 'Source on GitHub',
  },
  notFound: {
    title: 'Page not found',
    body: 'This page doesn’t exist or has moved.',
    home: 'Go to the home page',
  },
};

export type Dictionary = typeof en;
