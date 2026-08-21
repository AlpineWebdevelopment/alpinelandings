import { egyesulet, linkek, mockFacebookPoszt } from '@/content';
import { LogoNapJel } from './Logo';
import { Minta } from './Minta';

/**
 * „Legfrissebb Facebook-bejegyzés" — HÁROMFÉLE ELHELYEZÉS.
 *
 * Mindhárom séma ugyanazt a tartalmat mutatja, de más helyen — hogy az
 * egyesület össze tudja hasonlítani, melyik a jó kompromisszum:
 *
 *   LatestPostSav      (Pergamen) — teljes szélességű csík közvetlenül a
 *                       fejléc alatt; ez a legfelső lehetséges hely.
 *   LatestPostCard     (Indigó)   — kártya a hero HÁTTÉRFOTÓJÁN, a jobb
 *                       hasábban. `kepen` móddal enyhén áttetsző, hogy a
 *                       kép átüssön alatta.
 *   LatestPostKepAlja  (Posztó)   — kártya a hero fotójának ALSÓ RÉSZÉRE
 *                       ültetve, a kép szélétől behúzva.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * ÉLES BEÁGYAZÁS KAPCSOLÓJA
 *
 * false → stílusos mintakártya (ez fut a demóban). Mindig megjelenik, akkor is,
 *         ha nincs net, vagy a böngésző blokkolja a Facebookot.
 * true  → a VALÓDI Facebook Page Plugin iframe, ami az oldal élő bejegyzéseit
 *         mutatja. Tokenre nincs szükség, csak arra, hogy az oldal nyilvános
 *         legyen. Cserébe a Facebook saját kinézetét hozza, és blokkolók
 *         mellett üres marad — ezért a demóban alapból ki van kapcsolva.
 *
 * Egyetlen sor átállítása mindhárom változatban élesíti.
 * ────────────────────────────────────────────────────────────────────────────
 */
export const ELES_FB_BEAGYAZAS = false;

/** A valódi Facebook Page Plugin. Csak akkor renderelődik, ha a kapcsoló true. */
function FacebookBeagyazas({ magassag = 340 }: { magassag?: number }) {
  const url = encodeURIComponent(linkek.facebook);
  return (
    <iframe
      title={`${egyesulet.rovidNev} — Facebook-oldal`}
      src={`https://www.facebook.com/plugins/page.php?href=${url}&tabs=timeline&width=380&height=${magassag}&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false`}
      width="100%"
      height={magassag}
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen={false}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      loading="lazy"
    />
  );
}

/**
 * A bejegyzés törzse — mock.
 * A benne látható szöveg az egyesület saját, jelenlegi weboldalán hirdetett
 * nyílt napjának szövege, tehát kitalált állítás nincs benne.
 */
function PostBody({
  tomor = false,
  fekvo = false,
  suru = false,
}: {
  tomor?: boolean;
  /** Fekvő elrendezés: bal oldalon a szerző, jobbra a szöveg. */
  fekvo?: boolean;
  /**
   * Sűrű elrendezés: a szerzősor egyetlen apró dátumsorrá zsugorodik, a
   * szöveg két sor. A fotó alsó részére ülő kártyánál kell, hogy a kép
   * kétharmada szabadon maradjon.
   */
  suru?: boolean;
}) {
  const fej = (
    <div className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="grid h-9 w-9 shrink-0 place-items-center border border-accent2/60 bg-accent/10 font-display text-xs font-bold text-accent"
      >
        ÁN
      </span>
      <div className="min-w-0">
        <p className="truncate font-body text-xs font-semibold leading-tight">
          {mockFacebookPoszt.szerzo}
        </p>
        <p className="font-body text-xs text-muted">{mockFacebookPoszt.datum}</p>
      </div>
    </div>
  );

  const torzs = (
    <>
      <p
        className={`font-body text-sm leading-relaxed text-ink2 ${
          tomor ? 'line-clamp-3' : ''
        } ${fekvo ? '' : 'mt-3'}`}
      >
        {mockFacebookPoszt.szoveg}
      </p>
      <a
        href={linkek.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex min-h-11 items-center gap-1.5 font-body text-sm font-semibold text-accent underline-offset-4 hover:underline"
      >
        {mockFacebookPoszt.ctaFelirat}
        <span aria-hidden="true">→</span>
      </a>
    </>
  );

  if (suru) {
    return (
      <>
        <p className="font-body text-xs text-muted">{mockFacebookPoszt.datum}</p>
        <p className="mt-1.5 line-clamp-2 font-body text-sm leading-relaxed text-ink2">
          {mockFacebookPoszt.szoveg}
        </p>
        <a
          href={linkek.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex min-h-11 items-center gap-1.5 font-body text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          {mockFacebookPoszt.ctaFelirat}
          <span aria-hidden="true">→</span>
        </a>
      </>
    );
  }

  if (fekvo) {
    return (
      <div className="grid gap-5 sm:grid-cols-[13rem_minmax(0,1fr)] sm:items-start">
        {fej}
        <div className="min-w-0">{torzs}</div>
      </div>
    );
  }

  return (
    <>
      {fej}
      {torzs}
    </>
  );
}

/** A kártya belseje: éles beágyazás vagy mintakártya. */
function PostTartalom(props: {
  tomor?: boolean;
  fekvo?: boolean;
  suru?: boolean;
  magassag?: number;
}) {
  if (ELES_FB_BEAGYAZAS) return <FacebookBeagyazas magassag={props.magassag} />;
  return <PostBody tomor={props.tomor} fekvo={props.fekvo} suru={props.suru} />;
}

/** Csak akkor jelezzük mintaként, ha tényleg a mintakártya fut. */
function PostJelzes() {
  if (ELES_FB_BEAGYAZAS) return null;
  return (
    <Minta magyarazat="Facebook-előnézet — az éles oldalon a Facebook Page Plugin tölti be." />
  );
}

/**
 * Dokkolt kártya a hero rácsában, rubrikált fejléccel.
 *
 * `kepen`: a kártya a hero háttérfotóján áll. Ilyenkor 92%-os fedettségű a
 * lapszín, hogy a kép átüssön alatta — a mögötte lévő fátyollal együtt ez a
 * legrosszabb esetben (teljesen fehér képpont) is bőven a kontrasztküszöb
 * fölött marad, tehát a szöveg olvashatósága nem függ a fotó tartalmától.
 */
export function LatestPostCard({
  className = '',
  kepen = false,
}: {
  className?: string;
  kepen?: boolean;
}) {
  return (
    <section
      aria-labelledby="friss-hirek-cim"
      className={`relative border p-5 ${
        kepen
          ? 'border-accent2/60 bg-card/92 shadow-[0_24px_50px_-28px_rgba(0,0,0,0.85)] backdrop-blur-[2px] sm:p-6'
          : 'border-accent2/70 bg-card'
      } ${className}`}
    >
      <div className="mb-3 flex items-center justify-between gap-3 border-b border-accent2/50 pb-3">
        <h2
          id="friss-hirek-cim"
          className="font-display text-sm font-bold uppercase tracking-[0.16em] text-accent"
        >
          Friss hírek
        </h2>
        <PostJelzes />
      </div>
      <PostTartalom />
    </section>
  );
}

/**
 * PERGAMEN — teljes szélességű csík közvetlenül a fejléc alatt.
 * A legfelső lehetséges hely: a látogató a címsor előtt látja.
 */
export function LatestPostSav() {
  return (
    <section
      aria-labelledby="friss-sav-cim"
      className="relative border-b border-line bg-card"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-2.5 sm:flex-row sm:items-center sm:gap-4">
        <h2
          id="friss-sav-cim"
          className="flex shrink-0 items-center gap-2.5 font-body text-xs font-bold uppercase tracking-[0.2em] text-accent"
        >
          <LogoNapJel className="h-4 w-4 shrink-0" />
          Friss hír
        </h2>
        <p className="min-w-0 flex-1 font-body text-base leading-snug text-ink2">
          <span className="line-clamp-2 sm:line-clamp-1">{mockFacebookPoszt.szoveg}</span>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={linkek.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 font-body text-base font-semibold text-accent underline-offset-4 hover:underline"
          >
            {mockFacebookPoszt.ctaFelirat} <span aria-hidden="true">→</span>
          </a>
          <PostJelzes />
        </div>
      </div>
    </section>
  );
}

/**
 * POSZTÓ — kártya a hero fotójának ALSÓ RÉSZÉN.
 *
 * A képre ülve, a szélétől behúzva: úgy néz ki, mint egy múzeumi tárgycédula
 * a fénykép alsó harmadán. A fotó a kártya alatt 4/5-ös arányú, így a felső
 * — lényeges — része végig szabadon marad.
 */
export function LatestPostKepAlja({ className = '' }: { className?: string }) {
  return (
    <section
      aria-labelledby="friss-kepalja-cim"
      className={`border border-accent2/70 bg-card p-4 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.65)] ${className}`}
    >
      <div className="mb-2.5 flex items-center justify-between gap-3 border-b border-accent2/50 pb-2.5">
        <h2
          id="friss-kepalja-cim"
          className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.14em] text-accent"
        >
          <LogoNapJel className="h-3.5 w-3.5 shrink-0" />
          Friss hír
        </h2>
        <PostJelzes />
      </div>
      <PostTartalom suru magassag={240} />
    </section>
  );
}
