import type { Metadata } from 'next';
import { ErtekelesekPage } from '@/components/pages/Ertekelesek';
import { variants } from '@/variants/config';

export const metadata: Metadata = {
  title: 'Referenciák és értékelések — Árpád Népe Egyesület',
  description:
    'Visszajelzések az Árpád Népe Egyesület foglalkozásairól és rendezvényeiről, valamint visszatérő intézményi partnereink.',
};

export default function Page() {
  return <ErtekelesekPage v={variants.a} />;
}
