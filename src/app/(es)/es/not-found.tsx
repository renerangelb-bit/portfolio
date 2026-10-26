import type { Metadata } from 'next';
import { NotFoundView } from '@/views/NotFoundView';
import { getDictionary } from '@/i18n';

export const metadata: Metadata = { title: getDictionary('es').notFound.title, robots: { index: false, follow: true } };

export default function NotFound() {
  return <NotFoundView locale="es" />;
}
