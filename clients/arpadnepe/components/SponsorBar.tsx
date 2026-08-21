import { mintaTamogatok } from '@/content';
import { LogoNapJel } from './Logo';
import { Minta } from './Minta';

/**
 * Támogatói sáv — vízszintesen futó hirdetőléc.
 *
 * Működés: a lista kétszer szerepel egymás mellett, a belső elem
 * `translateX(-50%)`-ig fut, így a hurok varrat nélkül ismétlődik.
 * Hover és fókusz esetén megáll. `prefers-reduced-motion` esetén (globals.css)
 * az animáció kikapcsol, és a sáv sima, oldalra görgethető listává válik.
 *
 * Akadálymentesség: a lista csak szöveg, nincs benne fókuszálható elem, tehát
 * nem tudja csapdába ejteni a billentyűzetes navigációt. A duplikált példány
 * aria-hidden, hogy a képernyőolvasó ne olvassa kétszer.
 *
 * A támogatók nevei MINTA adatok — a valós logókat az egyesület adja meg.
 *
 * Helye: a hero teteje, mindhárom színsémán. Az elemeket a pecsét
 * napkorongja választja el.
 */
export function SponsorBar({ className = '' }: { className?: string }) {

  const lista = (rejtett: boolean) => (
    <ul aria-hidden={rejtett || undefined} className="flex shrink-0 items-center">
      {mintaTamogatok.map((t, i) => (
        <li
          key={`${t.nev}-${i}-${rejtett ? 'dup' : 'orig'}`}
          className={`flex shrink-0 items-center gap-6 whitespace-nowrap px-6 font-body text-sm text-ink2`}
        >
          {t.nev}
          {/* elválasztó: a pecsét napkorongja, aprón */}
          <LogoNapJel className="h-3 w-3 shrink-0 text-accent2" />
        </li>
      ))}
    </ul>
  );

  return (
    <aside
      aria-label="Támogatóink"
      className={`relative flex flex-col overflow-hidden border-y border-line bg-card/70 sm:flex-row sm:items-stretch ${className}`}
    >
      <p
        className="flex shrink-0 items-center gap-2.5 border-b border-line bg-accent/10 px-5 py-2 font-body text-xs font-bold uppercase tracking-[0.2em] text-accent sm:border-b-0 sm:border-r sm:py-3"
      >
        Támogatóink
        <Minta magyarazat="A támogatók nevei és logói helykitöltők — az egyesület adja meg a valós listát." />
      </p>

      <div className="bar-viewport relative min-w-0 flex-1 overflow-hidden">
        <div className="bar-track flex w-max items-center py-2.5 sm:py-3">
          {lista(false)}
          {lista(true)}
        </div>
      </div>
    </aside>
  );
}
