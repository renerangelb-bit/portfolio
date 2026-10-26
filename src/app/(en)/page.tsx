import type { Metadata } from 'next';
import { HomeView } from '@/views/HomeView';
import { getDictionary } from '@/i18n';
import { routes } from '@/i18n/config';
import { pageMetadata } from '@/lib/seo';

const t = getDictionary('en');

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  paths: routes.home,
  title: t.meta.homeTitle,
  description: t.meta.homeDescription,
  absoluteTitle: true,
  type: 'profile',
});

export default function Page() {
  return <HomeView locale="en" />;
}
