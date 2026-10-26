import type { Localized } from '@/i18n/config';

export type ProjectImage = {
  /** Path under /public, e.g. /work/my-project/home.webp */
  src: string;
  width: number;
  height: number;
  alt: Localized<string>;
};

export type ProjectLink = {
  kind: 'live' | 'demo' | 'code';
  href: string;
};

/**
 * One block of a case study. Text blocks use a small Markdown subset
 * (## headings are not needed: each block has its own title).
 */
export type ProjectBlock =
  | { type: 'text'; title: Localized<string>; body: Localized<string> }
  | { type: 'image'; image: ProjectImage; caption?: Localized<string> }
  | { type: 'phones'; images: ProjectImage[]; caption?: Localized<string> };

export type Project = {
  /** URL segment: /work/<slug> and /es/proyectos/<slug>. Never change it once published. */
  slug: string;
  /** Lower numbers appear first. */
  order: number;
  name: Localized<string>;
  /** One sentence: what it is and why it matters. Shown as the case study headline. */
  title: Localized<string>;
  /** Two short sentences for the home page and search results. */
  summary: Localized<string>;
  role: Localized<string>;
  year: string;
  status: Localized<string>;
  stack: string[];
  /** Three short bullets for the home page. */
  highlights: Localized<string[]>;
  cover: ProjectImage;
  coverMobile?: ProjectImage;
  links: ProjectLink[];
  /** Optional note shown under the header, e.g. "This is a prototype". */
  note?: Localized<string>;
  blocks: ProjectBlock[];
};

/** Smaller projects listed on the home page without a case study. */
export type MinorProject = {
  name: Localized<string>;
  /** Where and when, e.g. "Academic project, TSU". */
  context: Localized<string>;
  description: Localized<string>;
  stack: string[];
  href?: string;
};
