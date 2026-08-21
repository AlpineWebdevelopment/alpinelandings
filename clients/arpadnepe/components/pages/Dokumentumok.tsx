import { dokumentumok, egyesulet, linkek, nyilvanosAdatok, tamogatas } from '@/content';
import { Minta } from '../Minta';
import { AdatSor, Card, CardCim, CardSzoveg, PageHeader, Section } from '../ui';

export function DokumentumokPage() {
  const elerheto = dokumentumok.filter((d) => d.allapot === 'elerheto');
  const minta = dokumentumok.filter((d) => d.allapot === 'minta');

  return (
    <>
      <PageHeader
        cimke="Egyesületi papírok"
        cim="Dokumentumok"
        lead="Az egyesület nyilvános adatai és iratai. Ami már megvan, az a jelenlegi weboldalon szkennelt képként érhető el — a végleges oldalra egységes, letölthető PDF-eket javaslunk."
      />

      <Section cimke="Nyilvános adatok" cim="Az egyesület adatai">
        <dl className="max-w-3xl">
          {nyilvanosAdatok.map((a) => (
            <AdatSor key={a.cimke} cimke={a.cimke} ertek={a.ertek} />
          ))}
        </dl>
      </Section>

      <Section alt cimke="Iratok" cim="Meglévő dokumentumok">
        <ul className="border-t border-line">
          {elerheto.map((d) => (
            <li
              key={d.cim}
              className="flex flex-col gap-3 border-b border-line py-6 sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-lg font-semibold text-ink">{d.cim}</h3>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-ink2">
                  {d.leiras}
                </p>
              </div>
              <p className="shrink-0 font-body text-xs uppercase tracking-[0.14em] text-muted sm:w-48">
                {d.formatum}
              </p>
              {d.href ? (
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-11 shrink-0 items-center justify-center border border-ink px-4 py-2.5 text-center font-body text-sm font-bold text-ink transition hover:bg-ink hover:text-paper"
                >
                  Megtekintés
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section cimke="Pótlandó" cim="Ami még hiányzik">
        <div className="mb-8 flex flex-wrap items-center gap-3 border border-dashed border-accent/50 bg-accent/[0.06] px-4 py-3">
          <Minta />
          <p className="font-body text-sm text-ink2">
            Ezek a sorok helykitöltők: ilyen dokumentum jelenleg nem szerepel a weboldalon. A
            szerkezet kész, a fájlokat az egyesület tölti majd fel.
          </p>
        </div>

        <ul className="border-t border-line">
          {minta.map((d) => (
            <li
              key={d.cim}
              className="flex flex-col gap-3 border-b border-line py-6 sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-lg font-semibold text-ink">{d.cim}</h3>
                  <Minta />
                </div>
                <p className="mt-1.5 font-body text-sm leading-relaxed text-ink2">
                  {d.leiras}
                </p>
              </div>
              <p className="shrink-0 font-body text-xs uppercase tracking-[0.14em] text-muted sm:w-48">
                {d.formatum}
              </p>
              <span
                aria-disabled="true"
                className="flex min-h-11 shrink-0 items-center justify-center border border-line px-4 py-2.5 text-center font-body text-sm font-bold text-muted"
              >
                Nincs feltöltve
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section alt cimke="Támogatás" cim={tamogatas.cim}>
        <div className="grid gap-5 sm:grid-cols-3">
          {tamogatas.modok.map((m) => (
            <Card key={m.cim}>
              <CardCim>{m.cim}</CardCim>
              <CardSzoveg>{m.szoveg}</CardSzoveg>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Card>
            <CardCim>Bankszámla</CardCim>
            <p className="mt-3 font-body text-sm text-muted">{egyesulet.bank}</p>
            <p className="mt-1 font-display text-lg font-semibold tabular-nums text-ink">
              {egyesulet.bankszamla}
            </p>
            <p className="mt-3 font-body text-sm text-muted">IBAN</p>
            <p className="mt-1 font-body text-sm tabular-nums text-ink">{egyesulet.iban}</p>
          </Card>
          <Card>
            <CardCim>Támogatói oldalunk</CardCim>
            <CardSzoveg>
              Látogasd meg a támogatói oldalunkat, és segíts megvalósítani a terveinket.
            </CardSzoveg>
            <a
              href={linkek.tamogatoiOldal}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center font-body text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              Támogatói oldal <span aria-hidden="true">→</span>
            </a>
          </Card>
        </div>
      </Section>
    </>
  );
}
