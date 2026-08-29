import type { Metadata } from 'next';
import { EredmenyekPage } from '@/components/pages/Eredmenyek';
import { variants } from '@/variants/config';

export const metadata: Metadata = {
  title: 'Eredmények — Árpád Népe Egyesület',
  description:
    'Az Árpád Népe Egyesület referencialistája: iskolai bemutatók, falunapok, fesztiválok és íjászversenyek 2020-tól napjainkig.',
};

export default function Page() {
  return <EredmenyekPage v={variants.a} />;
}
