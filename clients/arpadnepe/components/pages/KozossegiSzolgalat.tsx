import {
  egyesulet,
  helyszinek,
  jelentkezesLepesek,
  kozossegiSzolgalat,
  linkek,
} from '@/content';
import { Minta } from '../Minta';
import { Card, CardCim, CardSzoveg, Gomb, PageHeader, Section } from '../ui';

export function KozossegiSzolgalatPage() {
  return (
    <>
      <PageHeader
        cimke="50 órás közösségi szolgálat"
        cim="Töltsd nálunk az 50 órádat"
        lead={kozossegiSzolgalat.vezeto}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Gomb href="#jelentkezes">Jelentkezem</Gomb>
          <Gomb href={egyesulet.telefonHref} masodlagos>
            {egyesulet.telefon}
          </Gomb>
        </div>
      </PageHeader>

      <Section
        cimke="Mit csinálsz nálunk"
        cim={kozossegiSzolgalat.lehetosegekCim}
        lead="Nem papírt tologatsz: a foglalkozásokon és a rendezvényeken segítesz, ott, ahol tényleg kell a kéz."
      >
        <ul className="grid gap-5 sm:grid-cols-2">
          {kozossegiSzolgalat.lehetosegek.map((l, i) => (
            <Card key={l} as="li">
              <span className="font-display text-3xl font-bold text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <CardSzoveg>{l}</CardSzoveg>
            </Card>
          ))}
        </ul>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <Card>
            <CardCim>Íjászat, vívás, kézműves</CardCim>
            <CardSzoveg>
              A gyerekfoglalkozásokon íjászat, vívás, kézműves és egyéb népi kultúra zajlik —
              ezekben segítesz az oktatók mellett.
            </CardSzoveg>
          </Card>
          <Card>
            <CardCim>Rendezvények</CardCim>
            <CardSzoveg>
              Iskolai bemutató napok, falunapok, gyereknapok, fesztiválok — 2025-ben 36 ilyen
              rendezvényünk volt.
            </CardSzoveg>
          </Card>
          <Card>
            <CardCim>Utána maradhatsz</CardCim>
            <CardSzoveg>{kozossegiSzolgalat.tagsag}</CardSzoveg>
          </Card>
        </div>
      </Section>

      <Section alt cimke="A menete" cim="Négy lépés">
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {jelentkezesLepesek.map((l) => (
            <Card key={l.szam} as="li" className="flex flex-col">
              <div className="flex items-center justify-between gap-2">
                <span className="font-display text-2xl font-bold text-accent">{l.szam}</span>
                {l.minta ? (
                  <Minta magyarazat="Az óraigazolás menete nem szerepel a jelenlegi oldalon — az egyesület adja meg." />
                ) : null}
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">{l.cim}</h3>
              <CardSzoveg>{l.szoveg}</CardSzoveg>
            </Card>
          ))}
        </ol>
      </Section>

      <Section cimke="Mikor gyere" cim={kozossegiSzolgalat.allandoCim}>
        <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <table className="w-full min-w-[34rem] border-collapse text-left">
            <caption className="sr-only">
              Állandó foglalkozások, ahol közösségi szolgálatot lehet teljesíteni
            </caption>
            <thead>
              <tr className="border-b border-ink">
                <th scope="col" className="py-3 pr-4 font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  Nap
                </th>
                <th scope="col" className="py-3 pr-4 font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  Helyszín
                </th>
                <th scope="col" className="py-3 pr-4 font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  Időpont
                </th>
                <th scope="col" className="py-3 font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  Foglalkozás
                </th>
              </tr>
            </thead>
            <tbody>
              {kozossegiSzolgalat.allando.map((a, i) => (
                <tr key={`${a.nap}-${a.ido}-${i}`} className="border-b border-line">
                  <td className="py-3.5 pr-4 font-display text-base font-semibold text-ink">
                    {a.nap}
                  </td>
                  <td className="py-3.5 pr-4 font-body text-sm text-ink2">{a.ker}</td>
                  <td className="py-3.5 pr-4 font-body text-sm tabular-nums text-ink">{a.ido}</td>
                  <td className="py-3.5 font-body text-sm text-ink2">{a.leiras}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {helyszinek.map((h) => (
            <Card key={h.id}>
              <CardCim>{h.nev}</CardCim>
              <CardSzoveg>{h.cim}</CardSzoveg>
            </Card>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-accent2 pl-5">
          <h3 className="font-display text-lg font-semibold text-ink">
            {kozossegiSzolgalat.alkalmi.cim}
          </h3>
          <p className="mt-2 max-w-2xl font-body text-sm leading-relaxed text-ink2">
            {kozossegiSzolgalat.alkalmi.szoveg}
          </p>
        </div>
      </Section>

      <Section id="jelentkezes" alt cimke="Jelentkezés" cim="Küldd el az adataidat">
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 border border-dashed border-accent/50 bg-accent/[0.06] px-4 py-3">
              <Minta cim="MINTA ŰRLAP" magyarazat="A demóban az űrlap nem küld adatot." />
              <p className="font-body text-sm text-ink2">
                A bemutató oldalon az űrlap nem működik. Éles oldalon e-mailre továbbítjuk.
              </p>
            </div>

            {/* Nem működő űrlap-felület: a demóban szándékosan nincs mögötte küldés. */}
            <form
              aria-describedby="urlap-megjegyzes"
              className="grid gap-5 border border-line bg-card p-6"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="ksz-nev" className="font-body text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    Név
                  </label>
                  <input
                    id="ksz-nev"
                    name="nev"
                    type="text"
                    autoComplete="name"
                    placeholder="Teljes neved"
                    className="min-h-12 border border-line bg-paper px-4 py-3 font-body text-base text-ink placeholder:text-muted"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="ksz-iskola" className="font-body text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    Iskola
                  </label>
                  <input
                    id="ksz-iskola"
                    name="iskola"
                    type="text"
                    placeholder="Az iskolád neve"
                    className="min-h-12 border border-line bg-paper px-4 py-3 font-body text-base text-ink placeholder:text-muted"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="ksz-email" className="font-body text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    E-mail
                  </label>
                  <input
                    id="ksz-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="pelda@email.hu"
                    className="min-h-12 border border-line bg-paper px-4 py-3 font-body text-base text-ink placeholder:text-muted"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="ksz-telefon" className="font-body text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    Telefonszám
                  </label>
                  <input
                    id="ksz-telefon"
                    name="telefon"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+36 …"
                    className="min-h-12 border border-line bg-paper px-4 py-3 font-body text-base text-ink placeholder:text-muted"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="ksz-uzenet" className="font-body text-xs font-bold uppercase tracking-[0.14em] text-muted">
                  Mikor érnél rá?
                </label>
                <textarea
                  id="ksz-uzenet"
                  name="uzenet"
                  rows={4}
                  placeholder="Melyik napokon tudsz jönni, és hány órát kell teljesítened?"
                  className="min-h-12 border border-line bg-paper px-4 py-3 font-body text-base text-ink placeholder:text-muted"
                />
              </div>
              <p id="urlap-megjegyzes" className="font-body text-xs text-muted">
                Bemutató űrlap — a gomb nem küld adatot.
              </p>
              <button
                type="button"
                className="min-h-12 justify-self-start bg-accent px-6 py-3 font-body text-sm font-bold text-onaccent"
              >
                Jelentkezés elküldése
              </button>
            </form>
          </div>

          <Card className="h-fit">
            <CardCim>Vagy egyszerűen hívj</CardCim>
            <CardSzoveg>
              Ha gyorsabb, hívd {kozossegiSzolgalat.kapcsolattarto}t telefonon, és megbeszéljük.
            </CardSzoveg>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  Telefon
                </dt>
                <dd className="mt-1">
                  <a
                    href={egyesulet.telefonHref}
                    className="font-display text-2xl font-bold text-ink hover:text-accent"
                  >
                    {egyesulet.telefon}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  E-mail
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${egyesulet.email}`}
                    className="inline-block break-all py-1 font-body text-base text-ink hover:text-accent"
                  >
                    {egyesulet.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-body text-xs font-bold uppercase tracking-[0.16em] text-muted">
                  Facebook
                </dt>
                <dd className="mt-1">
                  <a
                    href={linkek.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-1 font-body text-base text-link underline-offset-4 hover:underline"
                  >
                    {kozossegiSzolgalat.kapcsolattarto}
                  </a>
                </dd>
              </div>
            </dl>
          </Card>
        </div>
      </Section>
    </>
  );
}
