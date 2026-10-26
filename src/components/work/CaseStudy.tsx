import Link from 'next/link';
import type { Project } from '@/content/projects';
import { nextProject } from '@/content/projects';
import { getDictionary } from '@/i18n';
import { anchors, projectPath, routes, type Locale } from '@/i18n/config';
import { Markdown } from '@/lib/markdown';
import { BrowserFrame, PhoneFrame } from '@/components/ui/BrowserFrame';
import { hostOf } from '@/components/home/FeaturedProject';
import { ProjectLinks } from './ProjectLinks';

export function CaseStudy({ project, locale }: { project: Project; locale: Locale }) {
  const t = getDictionary(locale);
  const next = nextProject(project.slug);
  const host = hostOf(project);
  return (
    <article className="container-x pt-8 sm:pt-12">
      <p>
        <Link href={`${routes.home[locale]}#${anchors.work[locale]}`} className="link text-[0.9375rem]">
          {t.project.back}
        </Link>
      </p>

      <header className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <h1 className="display text-[3rem] sm:text-[4.5rem]">{project.name[locale]}</h1>
          <p className="mt-5 text-xl leading-snug sm:text-2xl sm:leading-snug">{project.title[locale]}</p>
          <p className="mt-4 max-w-[40rem] leading-relaxed text-slate">{project.summary[locale]}</p>
        </div>
        <div className="lg:col-span-5 lg:pt-3">
          <dl className="grid gap-4 border-t border-line pt-5 text-[0.9375rem]">
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
            <div>
              <dt className="text-slate">{t.work.stack}</dt>
              <dd className="mt-0.5">{project.stack.join(', ')}</dd>
            </div>
          </dl>
          <ProjectLinks project={project} locale={locale} className="mt-5" />
        </div>
      </header>

      {project.note && (
        <p className="mt-8 max-w-[46rem] border-l-2 border-cobalt pl-4 text-[0.9375rem] leading-relaxed text-slate">{project.note[locale]}</p>
      )}

      <div className="mt-10 sm:mt-14">
        <BrowserFrame image={project.cover} locale={locale} host={host} priority />
      </div>

      <div className="mt-16 space-y-16 sm:mt-24 sm:space-y-24">
        {project.blocks.map((block, i) => {
          if (block.type === 'text') {
            return (
              <section key={i} className="grid gap-4 lg:grid-cols-12 lg:gap-10">
                <h2 className="display-tight text-[1.75rem] sm:text-[2.25rem] lg:col-span-4">{block.title[locale]}</h2>
                <div className="min-w-0 lg:col-span-8">
                  <Markdown source={block.body[locale]} />
                </div>
              </section>
            );
          }
          if (block.type === 'image') {
            return (
              <figure key={i}>
                <BrowserFrame image={block.image} locale={locale} host={host} />
                {block.caption && <figcaption className="mt-3 max-w-[46rem] text-[0.9375rem] text-slate">{block.caption[locale]}</figcaption>}
              </figure>
            );
          }
          return (
            <figure key={i}>
              <div className="grid grid-cols-3 gap-3 sm:gap-8 lg:px-24">
                {block.images.map((img) => (
                  <PhoneFrame key={img.src} image={img} locale={locale} sizes="(min-width: 1024px) 300px, 30vw" />
                ))}
              </div>
              {block.caption && <figcaption className="mt-4 max-w-[46rem] text-[0.9375rem] text-slate lg:px-24">{block.caption[locale]}</figcaption>}
            </figure>
          );
        })}
      </div>

      {next && next.slug !== project.slug && (
        <nav aria-label={t.project.next} className="mt-24 border-t border-line pt-8 sm:mt-32">
          <p className="text-slate">{t.project.next}</p>
          <Link href={projectPath(next.slug)[locale]} className="display mt-2 inline-block text-[2.5rem] transition-colors hover:text-cobalt sm:text-[3.5rem]">
            {next.name[locale]}
          </Link>
        </nav>
      )}
    </article>
  );
}
