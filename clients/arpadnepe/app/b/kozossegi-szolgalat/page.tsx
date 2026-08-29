import type { Metadata } from 'next';
import { KozossegiSzolgalatPage } from '@/components/pages/KozossegiSzolgalat';
import { variants } from '@/variants/config';

export const metadata: Metadata = {
  title: '50 órás közösségi szolgálat — Árpád Népe Egyesület',
  description:
    'Töltsd az 50 órás közösségi szolgálatodat egy hagyományőrző egyesületnél: gyerekfoglalkozások és rendezvények a XIV. és XVI. kerületben.',
};

export default function Page() {
  return <KozossegiSzolgalatPage v={variants.b} />;
}
