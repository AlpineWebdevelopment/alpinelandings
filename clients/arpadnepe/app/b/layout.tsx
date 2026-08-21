import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { variants } from '@/variants/config';
import { betuValtozok } from '@/variants/fonts';

/** Indigo színséma. A szerkezet és a tipográfia mindhárom sémában azonos. */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${betuValtozok} sema-indigo flex min-h-screen flex-col bg-paper text-ink`}
    >
      <a href="#tartalom" className="skip-link">
        Ugrás a tartalomra
      </a>
      <Nav v={variants.b} />
      <main id="tartalom" className="flex-1">
        {children}
      </main>
      <Footer v={variants.b} />
    </div>
  );
}
