/**
 * Anyagtextúra és lapkeret.
 *
 * A háttér ORNAMENTIKÁJA az egyesület pecsétjéből jön — lásd components/Logo.tsx.
 * Itt csak a felület anyagszerűsége (szemcse), az iniciálé fészke és a lapkeret
 * maradt.
 */

/** Finom anyagszemcse — pergamen, vászon, posztó felülete. */
export function Szemcse({
  id,
  opacity = 0.45,
  className = '',
}: {
  id: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity, mixBlendMode: 'multiply' }}
      role="presentation"
    >
      <filter id={`szemcse-${id}`}>
        <feTurbulence type="fractalNoise" baseFrequency="0.82" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.42" />
        </feComponentTransfer>
      </filter>
      <rect width="100%" height="100%" filter={`url(#szemcse-${id})`} />
    </svg>
  );
}

/**
 * Iniciálé-fészek: keretes mező, sarkaiban a pecsét pontmotívumával.
 */
export function InicialeKeret({ children }: { children: React.ReactNode }) {
  return (
    <span className="gild relative inline-grid h-14 w-14 shrink-0 place-items-center sm:h-[5.5rem] sm:w-[5.5rem] lg:h-28 lg:w-28">
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        role="presentation"
      >
        <rect x="1" y="1" width="98" height="98" className="fill-accent" opacity="0.1" />
        <rect x="1" y="1" width="98" height="98" fill="none" className="stroke-accent2" strokeWidth="2" />
        <rect x="6" y="6" width="88" height="88" fill="none" className="stroke-accent" strokeWidth="0.8" />
        {/* sarokpontok — a pecsétgyűrű négy pontjának ritmusa */}
        <g className="fill-accent2">
          {[
            [13, 13],
            [87, 13],
            [13, 87],
            [87, 87],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.6" />
          ))}
        </g>
      </svg>
      <span className="relative font-display text-3xl font-bold leading-none text-accent sm:text-5xl lg:text-6xl">
        {children}
      </span>
    </span>
  );
}

/* ==========================================================================
   LAP  —  a tartalmat hordozó, kiemelt mező
   ========================================================================== */

/**
 * Lap: a tartalmat hordozó tábla. A sötét színsémán belül a tinta megfordul
 * (sötét szöveg világos lapon) — ezt a `lap-kor` hatókör adja a globals.css-ben.
 */
export function Lap({
  children,
  className = '',
  szegett = true,
}: {
  children: React.ReactNode;
  className?: string;
  /** Belső szegélyvonal — a rávarrt tábla / kódexkeret jelzése. */
  szegett?: boolean;
}) {
  return (
    <div className={`lap-kor relative border border-line bg-card text-ink ${className}`}>
      {szegett ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-1.5 border border-line/60"
        />
      ) : null}
      {children}
    </div>
  );
}
