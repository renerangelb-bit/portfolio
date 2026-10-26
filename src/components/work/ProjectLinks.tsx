import type { Project, ProjectLink } from '@/content/projects';
import { getDictionary } from '@/i18n';
import type { Locale } from '@/i18n/config';
import { ExternalLink } from '@/components/ui/ExternalLink';

const order: ProjectLink['kind'][] = ['live', 'demo', 'code'];

/** "Live site", "Live demo" and "Code on GitHub" links of a project. */
export function ProjectLinks({ project, locale, className = '' }: { project: Project; locale: Locale; className?: string }) {
  const t = getDictionary(locale);
  const labels = { live: t.work.live, demo: t.work.demo, code: t.work.code };
  const links = [...project.links].sort((a, b) => order.indexOf(a.kind) - order.indexOf(b.kind));
  if (!links.length) return null;
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] ${className}`}>
      {links.map((l) => (
        <li key={l.href}>
          <ExternalLink href={l.href} newTabLabel={t.a11y.opensInNewTab} className="link font-semibold">
            {labels[l.kind]}
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
}
