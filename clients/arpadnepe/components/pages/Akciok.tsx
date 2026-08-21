import { arak, arMegjegyzes, egyesulet, mintaAkciok, valosAjanlatok } from '@/content';
import { Minta, MintaSav } from '../Minta';
import { Card, CardCim, CardSzoveg, Gomb, PageHeader, Section } from '../ui';

export function AkciokPage() {
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
          {valosAjanlatok.map((a) => (
            <Card key={a.cim} as="li" className="flex flex-col">
              <span
                className="self-start border border-accent px-2.5 py-1 font-body text-xs font-bold uppercase tracking-[0.16em] text-accent"
              >
                {a.cimke}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">
                {a.cim}
              </h3>
              <p className="mt-2.5 flex-1 font-body text-sm leading-relaxed text-ink2">
                {a.leiras}
              </p>
              {a.reszletek ? (
                <ul className="mt-5 space-y-2 border-t border-line pt-4">
                  {a.reszletek.map((r) => (
                    <li key={r} className="flex gap-2.5 font-body text-sm text-ink2">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Card>
          ))}
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

      <Section cimke="Árak" cim="Mibe kerül a részvétel?" lead={arMegjegyzes}>
        <dl className="max-w-3xl border-t border-line">
          {arak.map((a) => (
            <div
              key={a.cim}
              className="flex flex-col gap-2 border-b border-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div className="min-w-0">
                <dt className="font-display text-lg font-semibold text-ink">{a.cim}</dt>
                {a.megjegyzes ? (
                  <p className="mt-1 font-body text-sm text-ink2">{a.megjegyzes}</p>
                ) : null}
              </div>
              <dd className="shrink-0 font-display text-xl font-bold tabular-nums text-accent">
                {a.ertek}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
