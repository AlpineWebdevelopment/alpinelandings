import { LogoJel, LogoNapJel, PecsetLec } from './Logo';

/**
 * Szakaszelválasztó — a pecsét formanyelvéből.
 *
 * A léc a pecsétgyűrű pontritmusát viszi tovább, a közepén az egyesület
 * jele áll (nap, íj, szablya, holdsarló) vonalas kivitelben.
 *
 * Dekoratív, ezért aria-hidden.
 */
export function Ornament({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center gap-4 ${className}`}>
      <PecsetLec className="min-w-0 flex-1 text-accent2" />
      <LogoJel className="h-9 w-8 shrink-0 text-accent" strokeWidth={7} />
      <PecsetLec className="min-w-0 flex-1 text-accent2" />
    </div>
  );
}

/** Rövid léc — ott, ahol a jel sok lenne. */
export function OrnamentLec({ className = '' }: { className?: string }) {
  return <PecsetLec className={`text-accent2 ${className}`} />;
}

/**
 * Rubrumjel — a szakaszcímkék előtt álló bekezdésjel:
 * a pecsét napkorongja, aprón.
 *
 * `kepen`: fotó fölött álló címke. A kiemelőszín ilyen apró fokozatban nem
 * hoz elég kontrasztot a fátyolozott kép fölött (mérve: 3,41:1), ezért a
 * szöveg a világos tintát kapja, és csak a napkorong marad kiemelőszínű.
 */
export function Rubrum({
  children,
  kepen = false,
}: {
  children: React.ReactNode;
  kepen?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-2.5 font-body text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm sm:tracking-[0.22em] ${
        kepen ? 'text-ink' : 'text-accent'
      }`}
    >
      <LogoNapJel className="h-4 w-4 shrink-0 text-accent" />
      {children}
    </p>
  );
}
