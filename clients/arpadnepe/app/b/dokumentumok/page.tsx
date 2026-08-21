import type { Metadata } from 'next';
import { DokumentumokPage } from '@/components/pages/Dokumentumok';

export const metadata: Metadata = {
  title: 'Egyesületi papírok — Árpád Népe Egyesület',
  description:
    'Az Árpád Népe Hagyományőrző, Kulturális és Sport Egyesület nyilvános adatai, alapszabálya és egyéb iratai.',
};

export default function Page() {
  return <DokumentumokPage />;
}
