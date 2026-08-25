/**
 * AZ EGYESÜLET PECSÉTJE — vonalas (outline) SVG-változat.
 *
 * Az egyesület saját logója után rajzolva: körpecsét, a gyűrűben a névfelirat
 * és négy pont, a mezőben napkorong sugarakkal, íj és szablya keresztben,
 * jobb alul holdsarló.
 *
 * A rajz KIZÁRÓLAG kontúrokból áll (`fill="none"`, `currentColor`), hogy
 * háttérvízjelként bármelyik színsémában használható legyen.
 *
 * MEGJEGYZÉS az éles oldalhoz: ez a logó vonalas újrarajzolása, nem az eredeti
 * fájl. A fejlécbe és a favikonhoz kérjük az egyesülettől az eredeti,
 * vektoros (SVG/AI/EPS) logót. Az eredeti felirata kézzel rajzolt, rovás
 * stílusú betűkkel készült; itt a névgyűrű a lap saját címbetűjével (Cinzel)
 * fut, hogy a háttérben tisztán olvasható maradjon.
 *
 * Nézetdoboz: 400×400, középpont (200,200).
 */

/* --------------------------------------------------------------------------
   RÉSZFORMÁK — a pecsét elemei, külön is használhatók
   -------------------------------------------------------------------------- */

/** Napkorong sugarakkal — a pecsét bal felső eleme. */
function Nap({
  cx = 142,
  cy = 133,
  r = 38,
}: {
  cx?: number;
  cy?: number;
  r?: number;
}) {
  // A sugarak a jobb alsó negyedben kimaradnak: ott az eredetin az íj takarja.
  const sugarak = [
    100, 118, 136, 154, 172, 190, 208, 226, 244, 262, 280, 298, 316, 334,
  ];
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} />
      {sugarak.map((szog) => {
        const rad = (szog * Math.PI) / 180;
        const x1 = cx + Math.cos(rad) * (r + 9);
        const y1 = cy + Math.sin(rad) * (r + 9);
        const x2 = cx + Math.cos(rad) * (r + 31);
        const y2 = cy + Math.sin(rad) * (r + 31);
        return <line key={szog} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
  );
}

/** Szablya — hegye bal felül, markolata jobb alul, keresztvassal. */
function Szablya() {
  return (
    <g>
      {/* penge: a hegytől a keresztvasig, a köszörült élen vissza */}
      <path d="M122 102 C 152 132, 190 178, 246 242 L 236 250 C 180 190, 144 140, 122 102 Z" />
      {/* keresztvas */}
      <path d="M256 232 L 226 257 L 230 262 L 260 237 Z" />
      {/* markolat és gomb */}
      <path d="M238 250 L 274 297 L 282 291 L 246 244" />
    </g>
  );
}

/** Íj — visszacsapó ívvel, hegye jobb felül és bal alul. */
function Ij() {
  return (
    <path d="M284 110 C 289 122, 281 133, 268 141 C 246 156, 226 182, 210 212 C 196 240, 176 264, 152 279 C 143 285, 133 289, 124 290" />
  );
}

/** Holdsarló — jobb alul, nyílásával a pecsét közepe felé. */
function Holdsarlo() {
  return (
    <path d="M279.5 247.5 A 27 27 0 1 1 243.5 283.5 A 27 27 0 0 0 279.5 247.5 Z" />
  );
}

/* --------------------------------------------------------------------------
   A TELJES PECSÉT
   -------------------------------------------------------------------------- */

export function LogoPecset({
  id,
  className = '',
  felirattal = true,
  strokeWidth = 2,
}: {
  /** Egyedi azonosító — a névgyűrű ívútjaihoz kell. Kötelező, ha felirattal. */
  id: string;
  className?: string;
  /** Fusson-e a névfelirat a gyűrűben. Kicsiben érdemes kikapcsolni. */
  felirattal?: boolean;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="presentation"
    >
      <defs>
        {/* a felirat ívútjai */}
        <path id={`pecset-fent-${id}`} d="M54.3 147 A 155 155 0 0 1 345.7 147" />
        <path id={`pecset-lent-${id}`} d="M73 289 A 155 155 0 0 0 327 289" />
      </defs>

      {/* gyűrűk: külső perem kettős vonala és a mező határa */}
      <circle cx="200" cy="200" r="196" />
      <circle cx="200" cy="200" r="178" />
      <circle cx="200" cy="200" r="132" />

      {/* a gyűrű négy pontja */}
      {[215, 325, 145, 35].map((szog) => {
        const rad = (szog * Math.PI) / 180;
        return (
          <circle
            key={szog}
            cx={200 + Math.cos(rad) * 155}
            cy={200 + Math.sin(rad) * 155}
            r="9"
          />
        );
      })}

      {felirattal ? (
        <g
          fill="currentColor"
          stroke="none"
          className="font-display"
          style={{ fontSize: 30, letterSpacing: '0.14em', fontWeight: 700 }}
        >
          <text textAnchor="middle">
            <textPath href={`#pecset-fent-${id}`} startOffset="50%">
              ÁRPÁD NÉPE
            </textPath>
          </text>
          <text textAnchor="middle">
            <textPath href={`#pecset-lent-${id}`} startOffset="50%">
              EGYESÜLET
            </textPath>
          </text>
        </g>
      ) : null}

      {/* a mező: nap, íj, szablya, holdsarló */}
      <Nap />
      <Ij />
      <Szablya />
      <Holdsarlo />
    </svg>
  );
}

/**
 * Tömör jel — a pecsét magja gyűrű és felirat nélkül: nap, íj, szablya, hold.
 * Kis méretben is olvasható; ornamens-medalionnak és felsorolásjelnek használjuk.
 */
export function LogoJel({
  className = '',
  strokeWidth = 6,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="96 60 214 254"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="presentation"
    >
      <Nap />
      <Ij />
      <Szablya />
      <Holdsarlo />
    </svg>
  );
}

/** Csak a napkorong — apró felsorolásjelnek és elválasztónak. */
export function LogoNapJel({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      role="presentation"
    >
      <circle cx="20" cy="20" r="7" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((szog) => {
        const rad = (szog * Math.PI) / 180;
        return (
          <line
            key={szog}
            x1={20 + Math.cos(rad) * 11}
            y1={20 + Math.sin(rad) * 11}
            x2={20 + Math.cos(rad) * 16}
            y2={20 + Math.sin(rad) * 16}
          />
        );
      })}
    </svg>
  );
}


/**
 * Kör alakú jelvény a fejlécbe — HELYKITÖLTŐ.
 *
 * Nem a nagy pecsét kicsinyítése: 44–48 px-en az túl sűrű lenne. Ez egy külön,
 * egyszerűsített rajz ugyanabból a jelkészletből — keresztbe tett íj és szablya,
 * bal felül napkorong —, vastagabb vonallal. A holdsarló ekkora méretben már
 * összemosódna, ezért csak a nagy pecséten szerepel.
 *
 * A végleges oldalra az egyesület eredeti, vektoros logója kerül a helyére.
 */
export function LogoKor({ className = '' }: { className?: string }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full border-2 border-accent bg-card ${className}`}
    >
      <svg
        aria-hidden="true"
        className="h-[74%] w-[74%] text-accent"
        viewBox="0 0 48 48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        role="presentation"
      >
        {/* íj — visszacsapó ív, jobb felülről bal alulra */}
        <path d="M37 11 C 33 19, 27 27, 20 33 C 17 35, 14 36, 11 37" />
        {/* szablya — bal felülről jobb alulra, keresztvassal */}
        <path d="M12 12 L 33 34" />
        <path d="M30 37 L 37 30" />
        <path d="M33 34 L 38 39" />
        {/* napkorong bal felül */}
        <circle cx="15" cy="20" r="4" />
        <path d="M15 13.5 V 11.5 M9.6 17 L 8 16 M9.6 23 L 8 24 M15 26.5 V 28.5" />
      </svg>
    </span>
  );
}

/* --------------------------------------------------------------------------
   HÁTTÉRMEZŐ ÉS LÉC
   -------------------------------------------------------------------------- */

/**
 * Pecsétmező — a logó kicsinyített kontúrja átlós rácsban ismételve.
 * Ez a lap háttértextúrája; a pecsétek felváltva ülnek, hogy a mező ne
 * soronként, hanem átlósan olvasódjon.
 */
export function PecsetMezo({
  id,
  className = '',
  opacity = 0.14,
}: {
  id: string;
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`pecset-mezo pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
      role="presentation"
    >
      <defs>
        <g id={`pecset-mag-${id}`}>
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="200" cy="200" r="196" />
            <circle cx="200" cy="200" r="178" />
            <circle cx="200" cy="200" r="132" />
            {[215, 325, 145, 35].map((szog) => {
              const rad = (szog * Math.PI) / 180;
              return (
                <circle
                  key={szog}
                  cx={200 + Math.cos(rad) * 155}
                  cy={200 + Math.sin(rad) * 155}
                  r="11"
                />
              );
            })}
            <Nap />
            <Ij />
            <Szablya />
            <Holdsarlo />
          </g>
        </g>

        <pattern id={`pecsetmezo-${id}`} width="280" height="280" patternUnits="userSpaceOnUse">
          <use href={`#pecset-mag-${id}`} transform="translate(10 10) scale(0.3)" />
          <use href={`#pecset-mag-${id}`} transform="translate(150 150) scale(0.3)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#pecsetmezo-${id})`} />
    </svg>
  );
}

/**
 * Pecsétléc — hajszálvonal, rajta a pecsétgyűrű négy pontjának ritmusa.
 * Ez a szakaszelválasztó alapja.
 */
export function PecsetLec({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-2.5 w-full ${className}`}
      viewBox="0 0 240 10"
      preserveAspectRatio="none"
      role="presentation"
    >
      <line x1="0" y1="5" x2="240" y2="5" stroke="currentColor" strokeWidth="1" />
      <g fill="currentColor">
        {[20, 60, 100, 140, 180, 220].map((x) => (
          <circle key={x} cx={x} cy="5" r="2.6" />
        ))}
      </g>
    </svg>
  );
}
