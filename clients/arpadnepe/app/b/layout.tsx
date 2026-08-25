import type { ReactNode } from 'react';
import { ValtozatLayout } from '@/components/ValtozatLayout';
import { variants } from '@/variants/config';

/**
 * 2. változat — Képes hero: a fotó a hero háttere, a szöveg és a kártya a képen.
 * Alapból Indigó színben nyílik; a jobb alsó sarki váltóval mind a három
 * színséma kipróbálható rajta.
 */
export default function Layout({ children }: { children: ReactNode }) {
  return <ValtozatLayout v={variants.b}>{children}</ValtozatLayout>;
}
