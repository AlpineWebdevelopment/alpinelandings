import type { ReactNode } from 'react';
import { ValtozatLayout } from '@/components/ValtozatLayout';
import { variants } from '@/variants/config';

/**
 * 3. változat — Cédula a képen: a kártya a hero fotójának alsó részén ül.
 * Alapból Posztó színben nyílik; a jobb alsó sarki váltóval mind a három
 * színséma kipróbálható rajta.
 */
export default function Layout({ children }: { children: ReactNode }) {
  return <ValtozatLayout v={variants.c}>{children}</ValtozatLayout>;
}
