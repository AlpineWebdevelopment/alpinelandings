import type { Metadata } from 'next';
import Script from 'next/script';
import { SEMA_INIT_SCRIPT } from '@/variants/config';
import { betuValtozok } from '@/variants/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Árpád Népe Egyesület — bemutató változatok',
  description:
    'Két tervezési irány az Árpád Népe Hagyományőrző, Kulturális és Sport Egyesület új weboldalához.',
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /*
      suppressHydrationWarning: a lenti szkript a hidratálás ELŐTT teszi rá a
      <html>-re a választott színséma felülíró osztályát, tehát a szerveren
      renderelt és a kliensen talált osztálylista szándékosan eltér.
    */
    <html
      lang="hu"
      className={betuValtozok}
      /* a globals.css `scroll-behavior: smooth`-t ad a <html>-nek; ez jelzi a
         Next útvonalváltásainak, hogy ez szándékos */
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        {/*
          A színsémaválasztás visszaállítása az első festés előtt.
          `next/script` + `beforeInteractive` kell hozzá, nem sima <script>
          elem a React-fában: azt kliensoldali renderkor a böngésző nem futtatja
          le (a Next fejlesztői módban figyelmeztet is rá). A `beforeInteractive`
          csak a gyökérlayoutban működik — ezért van itt, és nem a
          változat-layoutban.
        */}
        <Script id="sema-init" strategy="beforeInteractive">
          {SEMA_INIT_SCRIPT}
        </Script>
        {children}
      </body>
    </html>
  );
}
