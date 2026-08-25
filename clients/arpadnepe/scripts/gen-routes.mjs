/**
 * A hat aloldal útvonalfájljait generálja mindhárom változathoz.
 * A tényleges felület a components/pages/* alatt él; az aloldalak
 * változattól és színsémától függetlenül azonosak — a keretet a szülő layout
 * (components/ValtozatLayout.tsx) adja.
 *
 * Futtatás: node scripts/gen-routes.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const gyoker = join(process.cwd(), 'app');

const oldalak = [
  {
    utvonal: 'eredmenyek',
    komponens: 'EredmenyekPage',
    modul: 'Eredmenyek',
    cim: 'Eredmények',
    leiras:
      'Az Árpád Népe Egyesület referencialistája: iskolai bemutatók, falunapok, fesztiválok és íjászversenyek 2020-tól napjainkig.',
  },
  {
    utvonal: 'ertekelesek',
    komponens: 'ErtekelesekPage',
    modul: 'Ertekelesek',
    cim: 'Referenciák és értékelések',
    leiras:
      'Visszajelzések az Árpád Népe Egyesület foglalkozásairól és rendezvényeiről, valamint visszatérő intézményi partnereink.',
  },
  {
    utvonal: 'rendezvenyek',
    komponens: 'RendezvenyekPage',
    modul: 'Rendezvenyek',
    cim: 'Rendezvények',
    leiras:
      'Hagyományőrző programok iskoláknak, óvodáknak, falunapokra és fesztiválokra: íjászat, kézművesség, jurta, népi játékok, kosaras körhinta.',
  },
  {
    utvonal: 'kozossegi-szolgalat',
    komponens: 'KozossegiSzolgalatPage',
    modul: 'KozossegiSzolgalat',
    cim: '50 órás közösségi szolgálat',
    leiras:
      'Töltsd az 50 órás közösségi szolgálatodat egy hagyományőrző egyesületnél: gyerekfoglalkozások és rendezvények a XIV. és XVI. kerületben.',
  },
  {
    utvonal: 'dokumentumok',
    komponens: 'DokumentumokPage',
    modul: 'Dokumentumok',
    cim: 'Egyesületi papírok',
    leiras:
      'Az Árpád Népe Hagyományőrző, Kulturális és Sport Egyesület nyilvános adatai, alapszabálya és egyéb iratai.',
  },
  {
    utvonal: 'akciok',
    komponens: 'AkciokPage',
    modul: 'Akciok',
    cim: 'Akciók',
    leiras:
      'Ingyenes nyílt napok, új kezdő edzések és aktuális ajánlatok az Árpád Népe Egyesületnél.',
  },
];

const valtozatok = ['a', 'b', 'c'];

let db = 0;
for (const v of valtozatok) {
  for (const o of oldalak) {
    const cel = join(gyoker, v, o.utvonal, 'page.tsx');
    const tartalom = `import type { Metadata } from 'next';
import { ${o.komponens} } from '@/components/pages/${o.modul}';

export const metadata: Metadata = {
  title: '${o.cim} — Árpád Népe Egyesület',
  description:
    '${o.leiras}',
};

export default function Page() {
  return <${o.komponens} />;
}
`;
    mkdirSync(dirname(cel), { recursive: true });
    writeFileSync(cel, tartalom, 'utf8');
    db += 1;
  }
}

console.log(`${db} útvonalfájl generálva.`);
