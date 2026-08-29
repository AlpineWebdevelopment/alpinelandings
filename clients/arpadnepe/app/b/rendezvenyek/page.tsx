import type { Metadata } from 'next';
import { RendezvenyekPage } from '@/components/pages/Rendezvenyek';
import { variants } from '@/variants/config';

export const metadata: Metadata = {
  title: 'Rendezvények — Árpád Népe Egyesület',
  description:
    'Hagyományőrző programok iskoláknak, óvodáknak, falunapokra és fesztiválokra: íjászat, kézművesség, jurta, népi játékok, kosaras körhinta.',
};

export default function Page() {
  return <RendezvenyekPage v={variants.b} />;
}
