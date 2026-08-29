import type { Metadata } from 'next';
import { AkciokPage } from '@/components/pages/Akciok';
import { variants } from '@/variants/config';

export const metadata: Metadata = {
  title: 'Akciók — Árpád Népe Egyesület',
  description:
    'Ingyenes nyílt napok, új kezdő edzések és aktuális ajánlatok az Árpád Népe Egyesületnél.',
};

export default function Page() {
  return <AkciokPage v={variants.a} />;
}
