import Link from 'next/link';
import type { Project } from '@/content/projects';
import { getDictionary } from '@/i18n';
import { projectPath, type Locale } from '@/i18n/config';
import { BrowserFrame, PhoneFrame } from '@/components/ui/BrowserFrame';
import { ProjectLinks } from '@/components/work/ProjectLinks';

export function FeaturedProject({ project, locale, priority }: { project: Project; locale: Locale; priority?: boolean }) {
  const t = getDictionary(locale);
  const href = projectPath(project.slug)[locale];
  const host = hostOf(project);
  const headingId = `project-${project.slug}`;
  return (
    <article aria-labelledby={headingId} className="border-t border-line pt-10 first:border-t-0 first:pt-0 sm:pt-14">
      <div className="relative lg:pr-24">
        <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
          <BrowserFrame image={project.cover} locale={locale} host={host} priority={priority} sizes="(min-width: 1184px) 990px, 100vw" />
        </Link>
        {project.coverMobile && (
          <div className="absolute right-0 -bottom-8 hidden w-[11.5rem] lg:block" aria-hidden="true">
            <PhoneFrame image={project.coverMobile} locale={locale} sizes="184px" />
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <h3 id={headingId} className="display text-[2rem] sm:text-[2.5rem]">
            <Link href={href} className="transition-colors hover:text-cobalt">
              {project.name[locale]}
            </Link>
          </h3>
          <p className="mt-3 text-lg leading-snug">{project.title[locale]}</p>
          <Link href={href} className="btn btn-primary mt-6">
            {t.work.caseStudy}
            <span className="sr-only">: {project.name[locale]}</span>
          </Link>
        </div>

        <div className="lg:col-span-7">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-4 text-[0.9375rem] sm:grid-cols-2">
            <div>
              <dt className="text-slate">{t.work.role}</dt>
              <dd className="mt-0.5">{project.role[locale]}</dd>
            </div>
            <div>
              <dt className="text-slate">{t.work.status}</dt>
              <dd className="mt-0.5">
                {project.status[locale]}, {project.year}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-slate">{t.work.stack}</dt>
              <dd className="mt-0.5">{project.stack.join(', ')}</dd>
            </div>
          </dl>
          <ul className="mt-6 space-y-2 text-[0.9375rem] leading-relaxed">
            {project.highlights[locale].map((h) => (
              <li key={h} className="relative pl-5">
                <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-0.5 w-2.5 bg-cobalt" />
                {h}
              </li>
            ))}
          </ul>
          <ProjectLinks project={project} locale={locale} className="mt-6" />
        </div>
      </div>
    </article>
  );
}

export function hostOf(project: Project): string | undefined {
  const site = project.links.find((l) => l.kind === 'live' || l.kind === 'demo');
  return site ? new URL(site.href).host : undefined;
}
