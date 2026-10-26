import type { Project } from './types';
import { volviendoAlOrigen } from './volviendo-al-origen';
import { nexaWebsite } from './nexa-website';

/**
 * Case studies, in the order they appear on the home page.
 * To add one: create a file next to these, import it here and add it to the list.
 * Images go in public/work/<slug>/.
 */
export const projects: Project[] = [volviendoAlOrigen, nexaWebsite].sort((a, b) => a.order - b.order);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** The project after this one, looping back to the first. */
export function nextProject(slug: string): Project | undefined {
  if (projects.length < 2) return undefined;
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

export { minorProjects } from './minor';
export type { Project, ProjectBlock, ProjectImage, ProjectLink, MinorProject } from './types';
