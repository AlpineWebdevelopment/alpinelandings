import type { Metadata } from 'next';
import { Landing } from '@/components/pages/Landing';
import { variants } from '@/variants/config';

export const metadata: Metadata = {
  title: 'Árpád Népe Egyesület — hagyományőrzés, íjászat, szablyavívás Budapesten',
  description: 'Hagyományőrző foglalkozások és edzések a XIV. és XVI. kerületben: íjászat, szablyavívás, kézművesség, népi kultúra — gyerekeknek, ifiknek és felnőtteknek.',
};

export default function Page() {
  return <Landing v={variants.a} />;
}
