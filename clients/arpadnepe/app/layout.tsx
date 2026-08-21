import type { Metadata } from 'next';
import { betuValtozok } from '@/variants/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Árpád Népe Egyesület — bemutató változatok',
  description:
    'Három tervezési irány az Árpád Népe Hagyományőrző, Kulturális és Sport Egyesület új weboldalához.',
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={betuValtozok}>
      <body>{children}</body>
    </html>
  );
}
