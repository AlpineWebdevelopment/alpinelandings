import { egyesulet, linkek, mintaErtekelesek, referenciaOsszegzes } from '@/content';
import { Minta, MintaSav } from '../Minta';
import type { VariantConfig } from '@/variants/config';
import { Card, CardCim, CardSzoveg, Gomb, PageHeader, Section } from '../ui';

export function ErtekelesekPage(_props: { v: VariantConfig }) {
  return (
    <>
      <PageHeader
        cimke="Referenciák és értékelések"
        cim="Mit mondanak rólunk?"
        lead="Az értékeléseink jelenleg a Facebook-oldalunkon és a Google-térképen élnek. Ezeket a demóhoz nem tudtuk letölteni — az alábbi idézetek helykitöltők."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Gomb href={linkek.googleErtekeles} kulso>
            Értékelj minket a Google-on
          </Gomb>
          <Gomb href={linkek.facebook} masodlagos kulso>
            Facebook-oldalunk
          </Gomb>
        </div>
      </PageHeader>

      <Section cimke="Vélemények" cim="Idézetek">
        <MintaSav>
          Mind a hat idézet minta. Az egyesület a valós Facebook- és Google-értékelésekből
          választja majd ki, melyik kerüljön ide — a kártyák szerkezete marad.
        </MintaSav>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mintaErtekelesek.map((e) => (
            <Card key={e.nev} as="li" className="flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <span
                  aria-hidden="true"
                  className="font-display text-5xl leading-none text-accent/35"
                >
                  „
                </span>
                <Minta />
              </div>
              <blockquote className="mt-2 flex-1">
                <p className="font-body text-sm leading-relaxed text-ink2">
                  {e.szoveg}
                </p>
              </blockquote>
              <footer className="mt-5 border-t border-line pt-4">
                <p className="font-display text-base font-semibold text-ink">{e.nev}</p>
                <p className="font-body text-xs text-muted">{e.szerep}</p>
              </footer>
            </Card>
          ))}
        </ul>
      </Section>

      <Section
        alt
        cimke="Ami viszont nem minta"
        cim="Az intézményi referenciák"
        lead="A visszatérő megrendelők a legerősebb ajánlás — ezek a jelenlegi weboldal referencialistájából származnak."
      >
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              cim: 'Hunyadi János Általános Iskola, XIV. ker.',
              szoveg:
                'Bemutató napok és családi napok éveken át; a pince lőtér itt működik közel 20 éve.',
            },
            {
              cim: 'Budafok–Tétény önkormányzati táborok',
              szoveg:
                '2021 óta minden nyáron visszatérő táborprogramok, 2024-ben heti két alkalommal.',
            },
            {
              cim: 'Budapest XVI. kerületi önkormányzat',
              szoveg:
                'Iskolai bemutatók és táboros programok az önkormányzattól elnyert pályázat alapján.',
            },
            {
              cim: 'Dunakeszi',
              szoveg: 'Majális, gyereknap, városi születésnap és fesztivál — több éven át.',
            },
            {
              cim: 'Kiskunlacháza',
              szoveg: 'Tüske Fesztivál, kiszézés és szüreti mulatság.',
            },
            {
              cim: 'Halásztelek, Felsőpakony, Bénye, Csömör',
              szoveg: 'Falunapok és őszi vigadalmak, visszatérő meghívással.',
            },
          ].map((r) => (
            <Card key={r.cim} as="li">
              <CardCim>{r.cim}</CardCim>
              <CardSzoveg>{r.szoveg}</CardSzoveg>
            </Card>
          ))}
        </ul>

        <p className="mt-8 font-body text-sm text-muted">
          Összesen {referenciaOsszegzes.ev2025} rendezvény 2025-ben és{' '}
          {referenciaOsszegzes.ev2024} 2024-ben.{' '}
          <a
            href={`${linkek.jelenlegiOldal}referenciak/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-1 text-link underline underline-offset-4"
          >
            Teljes lista
          </a>
          .
        </p>
      </Section>

      <Section cimke="Írj te is" cim="Volt már nálunk?">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-body text-base leading-relaxed text-ink2">
            Ha jártál a foglalkozásainkon vagy megrendelted valamelyik programunkat, egy
            értékeléssel sokat segítesz. Ha inkább írnál, elérhetőségeink alább.
          </p>
          <div className="flex flex-wrap gap-4">
            <Gomb href={linkek.googleErtekeles} kulso>
              Értékelés írása
            </Gomb>
            <Gomb href={`mailto:${egyesulet.email}`} masodlagos>
              {egyesulet.email}
            </Gomb>
          </div>
        </div>
      </Section>
    </>
  );
}
