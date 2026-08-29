import type { Metadata } from 'next';
import { FoglalkozasokPage } from '@/components/pages/Foglalkozasok';
import { variants } from '@/variants/config';

export const metadata: Metadata = {
  title: 'Foglalkozások és edzések 2026–27 — Árpád Népe Egyesület',
  description:
    'Gyermek, ifjúsági és felnőtt hagyományőrző foglalkozások, íjász- és vívóedzések, kézművesség és társasjáték a XIV. és XVI. kerületben — heti rend, árak, eszközbérlés, beiratkozás.',
};

export default function Page() {
  return <FoglalkozasokPage v={variants.b} />;
}
