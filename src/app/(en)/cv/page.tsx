import type { Metadata } from 'next';
import { CvView } from '@/views/CvView';
import { getDictionary } from '@/i18n';
import { routes } from '@/i18n/config';
import { pageMetadata } from '@/lib/seo';

const t = getDictionary('en');

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  paths: routes.cv,
  title: t.meta.cvTitle,
  description: t.meta.cvDescription,
});

export default function Page() {
  return <CvView locale="en" />;
}
