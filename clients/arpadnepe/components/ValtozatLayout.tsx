import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { SemaValto } from './SemaValto';
import {
  SEMA_GYOKER_OSZTALY,
  semak,
  stilusOsztaly,
  type VariantConfig,
} from '@/variants/config';

/**
 * A két változat közös kerete.
 *
 * A burkoló három osztályt visel:
 *   - `sema-gyoker` — ezt célozza a <html>-re tett `valaszt-*` felülírás,
 *     vagyis a lebegő színsémaváltó;
 *   - a változat ALAPÉRTELMEZETT színsémája (`sema-arany-fekete` stb.);
 *   - a változat FORMANYELVE (`stil-alap | stil-sztyeppe`; a `stil-kodex`
 *     a 3. változattal együtt kivéve, de a stíluslapon megmaradt) —
 *     ez a szín**től független**, és a hero alatti teljes oldalt átformálja.
 *
 * A választott séma visszaállítását az első festés előtt a gyökérlayout
 * `next/script` szkriptje végzi (app/layout.tsx).
 */
export function ValtozatLayout({
  v,
  children,
}: {
  v: VariantConfig;
  children: ReactNode;
}) {
  return (
    <div
      className={`${SEMA_GYOKER_OSZTALY} ${semak[v.alapSema].scope} ${stilusOsztaly(v)} flex min-h-screen flex-col bg-paper text-ink`}
    >
      <a href="#tartalom" className="skip-link">
        Ugrás a tartalomra
      </a>
      <Nav v={v} />
      <main id="tartalom" className="flex-1">
        {children}
      </main>
      <Footer v={v} />
      <SemaValto alap={v.alapSema} />
    </div>
  );
}
