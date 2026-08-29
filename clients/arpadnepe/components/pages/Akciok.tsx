import Link from 'next/link';
import {
  arak,
  arMegjegyzes,
  egyebKoltsegek,
  egyesulet,
  foglalkozasById,
  helyszinRovid,
  mintaAkciok,
  napNev,
  valosAjanlatok,
  arakById,
} from '@/content';
import { variantHref, type VariantConfig } from '@/variants/config';
import { Minta, MintaSav } from '../Minta';
import { ArLista, Card, CardCim, CardSzoveg, Gomb, PageHeader, Section } from '../ui';

export function AkciokPage({ v }: { v: VariantConfig }) {
  return (
    <>
      <PageHeader
        cimke="Akciók"
        cim="Aktuális ajánlataink"
        lead="Az alábbi ajánlatok a jelenlegi weboldalunk saját közlései. A kedvezményekhez tartozó kártyák minták — azokat az egyesület tölti majd fel valós tartalommal."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Gomb href={egyesulet.telefonHref}>{egyesulet.telefon}</Gomb>
          <Gomb href={`mailto:${egyesulet.email}`} masodlagos>
            {egyesulet.email}
          </Gomb>
        </div>
      </PageHeader>

      <Section cimke="Most fut" cim="Amit a jelenlegi oldal hirdet">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valosAjanlatok.map((a) => {
            const ar = a.arId ? arakById[a.arId] : null;
            const fogl = a.foglalkozasId ? foglalkozasById(a.foglalkozasId) : null;
            return (
              <Card key={a.cim} as="li" className="flex flex-col">
                <span className="self-start border border-accent px-2.5 py-1 font-body text-xs font-bold uppercase tracking-[0.16em] text-accent">
                  {a.cimke}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">
                  {a.cim}
                </h3>
                <p className="mt-2.5 font-body text-sm leading-relaxed text-ink2">{a.leiras}</p>
                {ar ? (
                  <p className="mt-4 font-body text-sm text-ink2">
                    <span className="font-display text-lg font-bold text-accent">{ar.ertek}</span>{' '}
                    — {ar.cim.toLowerCase()}
                  </p>
                ) : null}
                {a.reszletek || fogl ? (
                  <ul className="mt-5 flex-1 space-y-2 border-t border-line pt-4">
                    {a.reszletek?.map((r) => (
                      <li key={r} className="flex gap-2.5 font-body text-sm text-ink2">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2" />
                        {r}
                      </li>
                    ))}
                    {fogl?.idopontok.map((i, k) => (
                      <li key={k} className="flex gap-2.5 font-body text-sm text-ink2">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2" />
                        <span>
                          <span className="font-semibold text-ink">{napNev(i.nap)}</span> {i.ido} ·{' '}
                          {helyszinRovid(i.helyszinId).ker}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {a.link ? (
                  <Link
                    href={variantHref(v.key, a.link.href)}
                    className="mt-4 inline-flex min-h-11 items-center gap-1.5 self-start font-body text-sm font-semibold text-link underline-offset-4 hover:underline"
                  >
                    {a.link.cimke} <span aria-hidden="true">→</span>
                  </Link>
                ) : null}
              </Card>
            );
          })}
        </ul>
      </Section>

      <Section alt cimke="Kedvezmények" cim="Ide kerülnek a kedvezmények">
        <MintaSav>
          A jelenlegi oldal nem hirdet próbaalkalmat vagy ajánlói kedvezményt. Ezek a kártyák
          megmutatják, hogyan nézne ki — az összegeket és feltételeket az egyesület adja meg.
        </MintaSav>

        <ul className="grid gap-6 sm:grid-cols-3">
          {mintaAkciok.map((a) => (
            <Card key={a.cim} as="li" className="flex flex-col border-dashed">
              <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
                <CardCim>{a.cim}</CardCim>
                <Minta />
              </div>
              <CardSzoveg>{a.leiras}</CardSzoveg>
              <dl className="mt-6 space-y-3 border-t border-line pt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="font-body text-xs uppercase tracking-[0.14em] text-muted">
                    Érték
                  </dt>
                  <dd className="font-display text-base font-semibold text-ink">{a.ertek}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="font-body text-xs uppercase tracking-[0.14em] text-muted">
                    Érvényesség
                  </dt>
                  <dd className="font-body text-sm text-ink2">{a.ervenyes}</dd>
                </div>
              </dl>
            </Card>
          ))}
        </ul>
      </Section>

      <Section cimke="Árak 2026–27" cim="Mibe kerül a részvétel?" lead={arMegjegyzes}>
        <ArLista tetelek={arak} className="max-w-3xl" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Card>
            <CardCim>{egyebKoltsegek.cim}</CardCim>
            <p className="mt-2.5 font-body text-sm text-ink2">{egyebKoltsegek.tetelek.join(', ')}.</p>
            <CardSzoveg>{egyebKoltsegek.szoveg}</CardSzoveg>
          </Card>
          <Card>
            <CardCim>Ha nincs saját eszközöd</CardCim>
            <CardSzoveg>{egyebKoltsegek.eszkoz}</CardSzoveg>
            <Link
              href={variantHref(v.key, '/foglalkozasok#eszkozberles')}
              className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-body text-sm font-semibold text-link underline-offset-4 hover:underline"
            >
              Eszközbérlési díjak <span aria-hidden="true">→</span>
            </Link>
          </Card>
        </div>
      </Section>
    </>
  );
}
