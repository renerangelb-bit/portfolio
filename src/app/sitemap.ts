import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/content/profile';
import { projects } from '@/content/projects';
import { projectPath, routes, type Localized } from '@/i18n/config';

/** /sitemap.xml: every page in both languages, with hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (paths: Localized<string>, priority: number) =>
    (['en', 'es'] as const).map((l) => ({
      url: absoluteUrl(paths[l]),
      changeFrequency: 'monthly' as const,
      priority,
      alternates: { languages: { en: absoluteUrl(paths.en), es: absoluteUrl(paths.es), 'x-default': absoluteUrl(paths.en) } },
    }));
  return [...entry(routes.home, 1), ...projects.flatMap((p) => entry(projectPath(p.slug), 0.8)), ...entry(routes.cv, 0.6)];
}
