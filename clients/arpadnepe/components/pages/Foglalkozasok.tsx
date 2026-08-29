import Image from 'next/image';
import Link from 'next/link';
import {
  arMegjegyzes,
  arak,
  arakById,
  beiratkozas,
  egyebKoltsegek,
  egyesulet,
  felszerelesBerles,
  foglalkozasById,
  galeriaKep,
  helyszinRovid,
  napNev,
  plakatIdk,
  plakatok,
  programlehetosegek,
  tablazatCim,
} from '@/content';
import { variantHref, type VariantConfig } from '@/variants/config';
import { HetiTablazat } from '../HetiTablazat';
import { Lap } from '../Texture';
import { ArLista, Card, CardCim, CardSzoveg, Cimke, Gomb, PageHeader, Section } from '../ui';

const PROGRAMLEHETOSEGEK_CIM = 'Foglalkozásokon kívüli programlehetőségek';

const fejCella = 'py-3 pr-4 font-body text-xs font-bold uppercase tracking-[0.16em] text-muted';

/**
 * FOGLALKOZÁSOK — a hat foglalkozás a plakátok szövegével, a 2026–27-es heti
 * rend, az árak, a tagoknak szóló eszközbérlés és a beiratkozás.
 * Minden adat a content/edzesek.ts és content/foglalkozasok.ts fájlból jön.
 */
export function FoglalkozasokPage({ v }: { v: VariantConfig }) {
  const h = (p: string) => variantHref(v.key, p);

  return (
    <>
      <PageHeader
        cimke="Foglalkozások 2026–27"
        cim="Foglalkozások és edzések"
        lead="Várunk minden érdeklődő gyermeket szeretettel, hogy együtt őrizzük és továbbadjuk hagyományainkat!"
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Gomb href="#beiratkozas">Beiratkozás</Gomb>
          <Gomb href={egyesulet.telefonHref} masodlagos>
            {egyesulet.telefon}
          </Gomb>
        </div>
        <nav aria-label="Ugrás a foglalkozásokhoz" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {plakatIdk.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="inline-flex min-h-11 items-center border border-line bg-paper px-3 py-1.5 font-body text-sm text-ink2 hover:border-accent hover:text-accent"
                >
                  {foglalkozasById(id).nev}
                </a>
              </li>
            ))}
            {[
              ['#arak', 'Árak'],
              ['#eszkozberles', 'Eszközbérlés'],
              ['#beiratkozas', 'Beiratkozás'],
            ].map(([href, cimke]) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex min-h-11 items-center border border-line bg-paper px-3 py-1.5 font-body text-sm font-semibold text-ink hover:border-accent hover:text-accent"
                >
                  {cimke}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {/* ═══════════════ HETI REND ═══════════════ */}
      <Section id="heti-rend" cimke="Heti rend" cim={tablazatCim}>
        <HetiTablazat cimmel={false} />
      </Section>

      {/* ═══════════════ A HAT FOGLALKOZÁS ═══════════════ */}
      {plakatIdk.map((id, i) => {
        const f = foglalkozasById(id);
        const p = plakatok[id];
        const kep = galeriaKep(p.kep);
        return (
          <Section key={id} id={id} alt={i % 2 === 0} cimke={p.korosztaly} cim={p.cim} lead={p.alcim}>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
              <div className="min-w-0">
                <div className="kethasab space-y-8">
                  {p.reszek.map((r) => (
                    <div key={r.cim} className="break-inside-avoid">
                      <h3 className="font-display text-xl font-semibold leading-snug text-ink">
                        {r.cim}
                      </h3>
                      {r.bekezdesek.map((b) => (
                        <p key={b} className="mt-3 font-body text-base leading-relaxed text-ink2">
                          {b}
                        </p>
                      ))}
                      {r.lista ? (
                        <ul className="mt-3 space-y-2">
                          {r.lista.map((t) => (
                            <li key={t} className="flex gap-3 font-body text-base leading-relaxed text-ink2">
                              <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-accent" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {r.kiemelt ? (
                        <p className="mt-4 border-l-2 border-accent pl-4 font-body text-base font-semibold leading-relaxed text-ink">
                          {r.kiemelt}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>

                {p.programlehetosegekBevezeto ? (
                  <div className="mt-8 border-t border-line pt-6">
                    <p className="font-body text-base leading-relaxed text-ink2">
                      {p.programlehetosegekBevezeto}
                    </p>
                    <a
                      href="#programlehetosegek"
                      className="mt-3 inline-flex min-h-11 items-center gap-1.5 font-body text-sm font-semibold text-link underline-offset-4 hover:underline"
                    >
                      {PROGRAMLEHETOSEGEK_CIM} <span aria-hidden="true">↓</span>
                    </a>
                  </div>
                ) : null}

                {p.zaro ? (
                  <p className="mt-8 font-display text-lg font-semibold leading-snug text-ink">
                    {p.zaro}
                  </p>
                ) : null}
              </div>

              <Lap className="self-start p-5 sm:p-6 lg:sticky lg:top-24">
                <div className="relative">
                  <Image
                    src={kep.src}
                    alt={kep.alt}
                    width={kep.w}
                    height={kep.h}
                    sizes="(max-width: 1024px) 100vw, 20rem"
                    className="aspect-[4/3] h-auto w-full border border-line object-cover"
                  />
                  <h3 className="mt-5 font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
                    Időpontok
                  </h3>
                  {f.idopontok.length ? (
                    <dl className="mt-2 divide-y divide-line">
                      {f.idopontok.map((ip, k) => {
                        const hely = helyszinRovid(ip.helyszinId);
                        return (
                          <div key={k} className="grid grid-cols-[5.5rem_1fr] gap-3 py-2.5">
                            <dt className="font-body text-sm font-semibold text-ink">{napNev(ip.nap)}</dt>
                            <dd className="font-body text-sm text-ink2">
                              <span className="font-display font-bold tabular-nums text-accent">{ip.ido}</span>
                              <br />
                              {hely.ker} {hely.rovidCim}
                              {ip.egyeztetendo ? (
                                <>
                                  {' '}
                                  <Cimke magyarazat={ip.egyeztetendo}>Egyeztetendő</Cimke>
                                </>
                              ) : null}
                              {ip.megjegyzes ? (
                                <span className="mt-0.5 block text-xs text-ink2">({ip.megjegyzes})</span>
                              ) : null}
                            </dd>
                          </div>
                        );
                      })}
                    </dl>
                  ) : null}
                  {f.napiMegjegyzes ? (
                    <p className="mt-2 font-body text-xs text-ink2">
                      {Object.entries(f.napiMegjegyzes)
                        .filter(([, sz]) => sz === 'SZÜNET')
                        .map(([nap]) => napNev(nap as Parameters<typeof napNev>[0]))
                        .join(', ')}
                      {Object.values(f.napiMegjegyzes).includes('SZÜNET') ? ': szünet.' : ''}
                    </p>
                  ) : null}

                  {f.arIds?.length ? (
                    <>
                      <h3 className="mt-5 font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
                        Díj
                      </h3>
                      <dl className="mt-2 divide-y divide-line">
                        {f.arIds.map((aid) => {
                          const a = arakById[aid];
                          return (
                            <div key={aid} className="flex items-baseline justify-between gap-4 py-2.5">
                              <dt className="font-body text-sm text-ink2">{a.cim}</dt>
                              <dd className="shrink-0 font-display text-base font-bold tabular-nums text-accent">
                                {a.ertek}
                              </dd>
                            </div>
                          );
                        })}
                      </dl>
                    </>
                  ) : null}

                  <a
                    href={p.fajl}
                    download
                    className="mt-5 inline-flex min-h-11 items-center gap-1.5 font-body text-sm font-semibold text-link underline-offset-4 hover:underline"
                  >
                    Plakát letöltése (JPG) <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </Lap>
            </div>
          </Section>
        );
      })}

      {/* ═══════════════ PROGRAMLEHETŐSÉGEK ═══════════════ */}
      <Section id="programlehetosegek" cimke="Tagoknak" cim={PROGRAMLEHETOSEGEK_CIM}>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programlehetosegek.map((pl) => (
            <Card key={pl.cim} as="li">
              <CardCim>{pl.cim}</CardCim>
              <CardSzoveg>{pl.szoveg}</CardSzoveg>
            </Card>
          ))}
        </ul>
      </Section>

      {/* ═══════════════ ÁRAK ═══════════════ */}
      <Section id="arak" alt cimke="Árak 2026–27" cim="Mibe kerül a részvétel?" lead={arMegjegyzes}>
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
            <a
              href="#eszkozberles"
              className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-body text-sm font-semibold text-link underline-offset-4 hover:underline"
            >
              Eszközbérlési díjak <span aria-hidden="true">↓</span>
            </a>
          </Card>
        </div>
      </Section>

      {/* ═══════════════ ESZKÖZBÉRLÉS ═══════════════ */}
      <Section
        id="eszkozberles"
        cimke="Tagoknak"
        cim={felszerelesBerles.cim}
        lead={felszerelesBerles.bevezeto}
      >
        <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[34rem] max-w-3xl border-collapse text-left">
            <caption className="sr-only">Eszközbérlési díjak alkalmanként és havonta</caption>
            <thead>
              <tr className="border-b border-ink">
                <th scope="col" className={fejCella}>
                  {felszerelesBerles.oszlopok.eszkoz}
                </th>
                <th scope="col" className={fejCella}>
                  {felszerelesBerles.oszlopok.alkalmi}
                </th>
                <th scope="col" className={fejCella}>
                  {felszerelesBerles.oszlopok.havi}
                </th>
              </tr>
            </thead>
            <tbody>
              {felszerelesBerles.tetelek.map((t, i) => (
                <tr key={i} className="border-b border-line">
                  <th scope="row" className="py-3.5 pr-4 text-left font-normal">
                    <span className="font-display text-base font-semibold text-ink">{t.eszkoz}</span>
                    {t.reszlet ? (
                      <span className="block font-body text-xs text-ink2">({t.reszlet})</span>
                    ) : null}
                  </th>
                  <td className="py-3.5 pr-4 font-display text-base font-bold tabular-nums text-accent">
                    {t.alkalmi}
                  </td>
                  <td className="py-3.5 font-display text-base font-bold tabular-nums text-accent">
                    {t.havi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 max-w-3xl border-l-2 border-accent pl-4 font-body text-sm leading-relaxed text-ink">
          {felszerelesBerles.hasznalat}
        </p>

        <h3 className="mt-10 font-display text-xl font-semibold text-ink">
          {felszerelesBerles.feltetelekCim}
        </h3>
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {felszerelesBerles.feltetelek.map((t) => (
            <Card key={t.cim} as="li">
              <CardCim>{t.cim}</CardCim>
              <CardSzoveg>{t.szoveg}</CardSzoveg>
            </Card>
          ))}
        </ul>

        <ul className="mt-5 grid gap-5 sm:grid-cols-3">
          {felszerelesBerles.sajatFelszereles.map((t) => (
            <Card key={t.cim} as="li" className="bg-paper2">
              <CardCim>{t.cim}</CardCim>
              <CardSzoveg>{t.szoveg}</CardSzoveg>
            </Card>
          ))}
        </ul>
      </Section>

      {/* ═══════════════ BEIRATKOZÁS ═══════════════ */}
      <Section id="beiratkozas" alt cimke={`Beiratkozás ${beiratkozas.ev}`} cim={beiratkozas.cim}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14">
          <div className="min-w-0">
            <h3 className="font-display text-xl font-semibold text-ink">{beiratkozas.feltetelekCim}</h3>
            <ol className="mt-4 space-y-3">
              {beiratkozas.feltetelek.map((t, i) => (
                <li key={t} className="flex gap-4 font-body text-base leading-relaxed text-ink2">
                  <span className="shrink-0 font-display text-base font-bold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {t}
                </li>
              ))}
            </ol>

            <h3 className="mt-10 font-display text-xl font-semibold text-ink">
              {beiratkozas.felszerelesCim}
            </h3>
            <p className="mt-3 font-body text-base leading-relaxed text-ink2">
              {beiratkozas.felszerelesBevezeto}
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {beiratkozas.felszereles.map((t) => (
                <li key={t} className="flex gap-3 font-body text-base text-ink2">
                  <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-accent" />
                  {t}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl font-semibold text-ink">{beiratkozas.biztonsagCim}</h3>
            <p className="mt-3 font-body text-base leading-relaxed text-ink2">
              {beiratkozas.biztonsag}{' '}
              <Link
                href={h('/szabalyzatok')}
                className="font-semibold text-link underline-offset-4 hover:underline"
              >
                A szabályzatok teljes szövege →
              </Link>
            </p>

            <h3 className="mt-10 font-display text-xl font-semibold text-ink">{beiratkozas.adatkezelesCim}</h3>
            <p className="mt-3 font-body text-base leading-relaxed text-ink2">{beiratkozas.adatkezeles}</p>
          </div>

          <Lap className="self-start p-5 sm:p-6 lg:sticky lg:top-24">
            <div className="relative">
              <h3 className="font-display text-lg font-bold uppercase text-ink">{beiratkozas.urlap}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-ink2">{beiratkozas.urlapMegjegyzes}</p>
              <a
                href={beiratkozas.letoltes}
                download
                className="gomb mt-5 inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-6 py-3 font-body text-sm font-bold text-onaccent hover:opacity-90"
                data-elsodleges="true"
              >
                Beiratkozó lap letöltése (DOCX)
              </a>
              <Link
                href={h('#jelentkezes')}
                className="mt-3 inline-flex min-h-11 items-center font-body text-sm font-semibold text-link underline-offset-4 hover:underline"
              >
                Online jelentkezés a kezdőlapon →
              </Link>
              <p className="mt-5 font-body text-sm text-ink2">
                Kérdésed van? Hívj:{' '}
                <a href={egyesulet.telefonHref} className="font-semibold text-link underline-offset-4 hover:underline">
                  {egyesulet.telefon}
                </a>
                <br />
                <a href={`mailto:${egyesulet.email}`} className="break-all font-semibold text-link underline-offset-4 hover:underline">
                  {egyesulet.email}
                </a>
              </p>
            </div>
          </Lap>
        </div>
      </Section>
    </>
  );
}
