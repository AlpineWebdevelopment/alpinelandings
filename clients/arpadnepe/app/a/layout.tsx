import type { ReactNode } from 'react';
import { ValtozatLayout } from '@/components/ValtozatLayout';
import { variants } from '@/variants/config';

/**
 * 1. változat — Hírcsík: a bejegyzés teljes szélességű csíkban, a fejléc alatt.
 * Alapból Pergamen színben nyílik; a jobb alsó sarki váltóval mind a három
 * színséma kipróbálható rajta.
 */
export default function Layout({ children }: { children: ReactNode }) {
  return <ValtozatLayout v={variants.a}>{children}</ValtozatLayout>;
}
