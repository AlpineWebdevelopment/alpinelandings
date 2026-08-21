import type { ReactNode } from 'react';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { variants } from '@/variants/config';
import { betuValtozok } from '@/variants/fonts';

/** Pergamen színséma. A szerkezet és a tipográfia mindhárom sémában azonos. */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${betuValtozok} sema-pergamen flex min-h-screen flex-col bg-paper text-ink`}
    >
      <a href="#tartalom" className="skip-link">
        Ugrás a tartalomra
      </a>
      <Nav v={variants.a} />
      <main id="tartalom" className="flex-1">
        {children}
      </main>
      <Footer v={variants.a} />
    </div>
  );
}
