import type { Metadata } from 'next';
import { GaleriaPage } from '@/components/pages/Galeria';
import { variants } from '@/variants/config';

export const metadata: Metadata = {
  title: 'Galéria — Árpád Népe Egyesület',
  description:
    'Fotók az Árpád Népe Egyesület foglalkozásairól, edzéseiről, jurtás kiállításairól és rendezvényeiről.',
};

export default function Page() {
  return <GaleriaPage v={variants.b} />;
}
