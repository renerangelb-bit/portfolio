import { projects } from '@/content/projects';
import { getDictionary } from '@/i18n';
import { anchors, type Locale } from '@/i18n/config';
import { jsonLdString, personJsonLd } from '@/lib/jsonld';
import { Hero } from '@/components/home/Hero';
import { OrderFlow } from '@/components/home/OrderFlow';
import { FeaturedProject } from '@/components/home/FeaturedProject';
import { OtherProjects } from '@/components/home/OtherProjects';
import { Experience } from '@/components/home/Experience';
import { Skills } from '@/components/home/Skills';
import { Contact } from '@/components/home/Contact';
import { SectionHeading } from '@/components/home/SectionHeading';

export function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(personJsonLd(locale)) }} />
      <Hero locale={locale} />
      <OrderFlow locale={locale} />
      <section id={anchors.work[locale]} aria-labelledby="work-title" className="container-x scroll-mt-20 pt-24 sm:pt-32">
        <SectionHeading id="work-title">{t.work.title}</SectionHeading>
        <div className="space-y-16 sm:space-y-20">
          {projects.map((p, i) => (
            <FeaturedProject key={p.slug} project={p} locale={locale} priority={i === 0} />
          ))}
        </div>
        <OtherProjects locale={locale} />
      </section>
      <Experience locale={locale} />
      <Skills locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
