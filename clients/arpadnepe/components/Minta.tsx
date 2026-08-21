/**
 * MINTA jelvény.
 *
 * Minden olyan felületi elemre rákerül, amelynek tartalma NEM a jelenlegi
 * weboldalról származik. Az ügyfél így azonnal látja, hova kell valós tartalom.
 *
 * A jelvény háttere a LAPSZÍN 70%-a, nem a kiemelőszín árnyalata. Kiemelőszínű
 * fátyollal a felirat és a háttere egymás felé csúszna — és ha a jelvény egy
 * ugyancsak kiemelőszínnel fátyolozott dobozban (MintaSav) áll, a két réteg
 * összeadódik, és a kontraszt 4,2:1-ig esik. A lapszínű alap ezt megszünteti:
 * minden sémán, minden felületen 5:1 fölött marad.
 */
export function Minta({
  cim = 'MINTA',
  magyarazat,
  className = '',
}: {
  cim?: string;
  /** Rövid magyarázat, mi kerül majd ide. */
  magyarazat?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border border-accent/60 bg-paper/70 px-2 py-0.5 font-body text-xs font-bold uppercase tracking-[0.14em] text-accent ${className}`}
      title={magyarazat ?? 'Helykitöltő tartalom — ide kerül majd a valós anyag.'}
    >
      <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-accent" />
      {cim}
      {magyarazat ? <span className="sr-only"> — {magyarazat}</span> : null}
    </span>
  );
}

/**
 * Magyarázó doboz egy egész szakasz fölé, ha a szakasz minden eleme minta.
 */
export function MintaSav({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-3 border border-dashed border-accent/50 bg-accent/[0.06] px-4 py-3">
      <Minta />
      <p className="font-body text-sm text-ink2">{children}</p>
    </div>
  );
}
