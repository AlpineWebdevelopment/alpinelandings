import type { Metadata } from 'next';
import { SzabalyzatokPage } from '@/components/pages/Szabalyzatok';
import { variants } from '@/variants/config';

export const metadata: Metadata = {
  title: 'Szabályzatok — Árpád Népe Egyesület',
  description:
    'Az Árpád Népe Egyesület érték- és magatartási szabályzata, valamint az íjászati és vívó foglalkozások biztonsági szabályzata — teljes szöveggel, letölthető változattal.',
};

export default function Page() {
  return <SzabalyzatokPage v={variants.a} />;
}
