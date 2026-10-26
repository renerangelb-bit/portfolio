import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '@/styles/globals.css';
import { RootDocument } from '@/components/layout/RootDocument';
import { rootMetadata, rootViewport } from '@/lib/layout-metadata';

export const metadata: Metadata = rootMetadata('es');
export const viewport = rootViewport;

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="es">{children}</RootDocument>;
}
