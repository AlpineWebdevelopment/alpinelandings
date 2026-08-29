import { szabalyzatok } from '@/content';
import type { VariantConfig } from '@/variants/config';
import { Cimke, PageHeader, Section } from '../ui';

/**
 * SZABÁLYZATOK — a két dokumentum teljes szövege, olvasható oldalként.
 * Nem harmonikában és nem képként: kereshető, nyomtatható, mélylinkelhető
 * (#ertek, #biztonsag). A számozott listát nem tördeljük hasábokba.
 */
export function SzabalyzatokPage(_props: { v: VariantConfig }) {
  return (
    <>
      <PageHeader
        cimke="Szabályzatok"
        cim="Az egyesület szabályzatai"
        lead="Az érték- és magatartási szabályzat, valamint az íjászati és vívó foglalkozások biztonsági szabályzata teljes szöveggel. Mindkettő az egyesület saját szövege, a végleges elfogadás előtti változatban."
      >
        <nav aria-label="Ugrás a szabályzatokhoz" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {szabalyzatok.map((sz) => (
              <li key={sz.id}>
                <a
                  href={`#${sz.id}`}
                  className="inline-flex min-h-11 items-center border border-line bg-paper px-3 py-1.5 font-body text-sm text-ink2 hover:border-accent hover:text-accent"
                >
                  {sz.cim}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      {szabalyzatok.map((sz, i) => (
        <Section key={sz.id} id={sz.id} alt={i % 2 === 1} cimke={sz.alcim ?? 'Szabályzat'} cim={sz.cim}>
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <Cimke magyarazat={sz.jelzes.forras}>{sz.jelzes.cimke}</Cimke>
              <p className="font-body text-sm text-ink2">{sz.jelzes.forras}</p>
            </div>

            {sz.bevezeto ? (
              <p className="lead mt-6 font-body text-lg leading-relaxed text-ink2">{sz.bevezeto}</p>
            ) : null}

            {sz.szakaszok.map((szak) => (
              <div key={szak.cim} className="mt-10">
                <h3 className="font-display text-xl font-semibold text-ink">{szak.cim}</h3>
                {szak.szamozott ? (
                  <ol className="mt-4 list-decimal space-y-3 pl-6 font-body text-base leading-relaxed text-ink2 marker:font-display marker:font-bold marker:text-accent">
                    {szak.pontok.map((p) => (
                      <li key={p} className="pl-1">
                        {p}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="mt-4 space-y-3">
                    {szak.pontok.map((p) => (
                      <li key={p} className="flex gap-3 font-body text-base leading-relaxed text-ink2">
                        <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {sz.zaro.length ? (
              <div className="mt-10 space-y-3 border-t border-line pt-6">
                {sz.zaro.map((z) => (
                  <p key={z} className="font-body text-base leading-relaxed text-ink2">
                    {z}
                  </p>
                ))}
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              {sz.letoltesek.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  download
                  className="inline-flex min-h-11 items-center gap-1.5 border border-ink px-4 py-2 font-body text-sm font-bold text-ink transition hover:bg-ink hover:text-paper"
                >
                  {l.cimke} <span aria-hidden="true">↓</span>
                </a>
              ))}
            </div>
          </div>
        </Section>
      ))}
    </>
  );
}
