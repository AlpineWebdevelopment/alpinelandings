import type { ReactNode } from 'react';
import type { ArTetel } from '@/content';
import { Ornament, Rubrum } from './Ornament';
import { PecsetMezo } from './Logo';
import { Szemcse } from './Texture';

/**
 * Az aloldalak fejlécének háttere — ugyanaz a pecsétmező és szemcse,
 * mint a kezdőlap heróján. Színsémától függetlenül.
 */
function FejlecHatter() {
  return (
    <>
      <PecsetMezo className="text-accent2" opacity={0.11} />
      <Szemcse id="fejlec" opacity={0.35} />
    </>
  );
}

export function PageHeader({
  cimke,
  cim,
  lead,
  children,
}: {
  cimke: string;
  cim: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="oldal-fej relative overflow-hidden border-b border-line bg-paper2">
      <FejlecHatter />
      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:py-20">
        <Rubrum>{cimke}</Rubrum>
        <h1 className="mt-4 max-w-4xl font-display text-[1.75rem] font-bold uppercase leading-[1.12] tracking-[0.01em] text-ink sm:text-4xl lg:text-5xl">
          {cim}
        </h1>
        {lead ? (
          <p className="lead mt-5 max-w-2xl font-body text-base leading-relaxed text-ink2 sm:mt-6 sm:text-lg">
            {lead}
          </p>
        ) : null}
        {children}
        <Ornament className="mt-8 max-w-sm sm:mt-10" />
      </div>
    </header>
  );
}

export function Section({
  cimke,
  cim,
  lead,
  children,
  className = '',
  id,
  alt = false,
}: {
  cimke?: string;
  cim?: string;
  lead?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  /** Váltakozó háttérsáv. */
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`szakasz relative overflow-hidden ${alt ? 'bg-paper2' : 'bg-paper'} border-b border-line ${className}`}
    >
      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:py-20">
        {cimke || cim || lead ? (
          <div className="szakasz-fej mb-8 max-w-3xl sm:mb-10">
            {cimke ? (
              <Rubrum>{cimke}</Rubrum>
            ) : null}
            {cim ? (
              <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl lg:text-4xl">
                {cim}
              </h2>
            ) : null}
            {lead ? (
              <p className="lead mt-4 font-body text-base leading-relaxed text-ink2">{lead}</p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function Card({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'article';
}) {
  return (
    <Tag
      className={`kartya min-w-0 border border-line bg-card p-5 sm:p-6 ${className}`}
    >
      {children}
    </Tag>
  );
}

export function CardCim({ children }: { children: ReactNode }) {
  return (
    <h3 className="hyphens-auto font-display text-xl font-semibold leading-snug break-words text-ink">
      {children}
    </h3>
  );
}

export function CardSzoveg({ children }: { children: ReactNode }) {
  return <p className="mt-2.5 font-body text-sm leading-relaxed text-ink2">{children}</p>;
}

/** A gomb osztályai — a hivatkozás (`Gomb`) és a nyomógomb (`GombNyomo`) ugyanazt kapja. */
export function gombOsztaly(masodlagos = false, className = ''): string {
  const stilus = masodlagos
    ? 'border border-ink text-ink hover:bg-ink hover:text-paper'
    : 'bg-accent text-onaccent hover:opacity-90';
  return `gomb inline-flex min-h-12 items-center justify-center gap-2 px-6 py-3 font-body text-sm font-bold transition ${stilus} ${className}`;
}

export function Gomb({
  href,
  children,
  masodlagos = false,
  className = '',
  kulso = false,
}: {
  href: string;
  children: ReactNode;
  masodlagos?: boolean;
  className?: string;
  kulso?: boolean;
}) {
  return (
    <a
      href={href}
      {...(kulso ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      data-elsodleges={!masodlagos}
      className={gombOsztaly(masodlagos, className)}
    >
      {children}
    </a>
  );
}

/** Ugyanaz a gomb `<button>`-ként — űrlap küldéséhez, kliensoldali műveletekhez. */
export function GombNyomo({
  children,
  masodlagos = false,
  className = '',
  type = 'button',
  onClick,
}: {
  children: ReactNode;
  masodlagos?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}) {
  return (
    <button type={type} onClick={onClick} data-elsodleges={!masodlagos} className={gombOsztaly(masodlagos, className)}>
      {children}
    </button>
  );
}

/** Adatpár — táblázatszerű sor cím + érték felállásban. */
export function AdatSor({ cimke, ertek }: { cimke: string; ertek: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-3 sm:flex-row sm:items-baseline sm:gap-6">
      <dt className="shrink-0 font-body text-xs font-bold uppercase tracking-[0.14em] text-muted sm:w-56">
        {cimke}
      </dt>
      <dd className="font-body text-sm text-ink">{ertek}</dd>
    </div>
  );
}

/**
 * Semleges címke valós, forrásból vett tartalom mellé, amelyhez megjegyzés
 * tartozik: „Tervezet" (a dokumentum maga mondja magáról, hogy munkaváltozat)
 * vagy „Egyeztetendő" (a forrásban ellentmondás vagy csonka szöveg van).
 * NEM a MINTA jelvény — az a kitalált helykitöltő tartalomé.
 */
export function Cimke({
  children,
  magyarazat,
  className = '',
}: {
  children: ReactNode;
  /** Mi a megjegyzés — title-ként és képernyőolvasónak is. */
  magyarazat: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center border border-line bg-paper2 px-2 py-0.5 font-body text-xs font-bold uppercase tracking-[0.14em] text-ink2 ${className}`}
      title={magyarazat}
    >
      {children}
      <span className="sr-only"> — {magyarazat}</span>
    </span>
  );
}

/** Árlista — cím + megjegyzés bal oldalt, összeg jobb oldalt. */
export function ArLista({ tetelek, className = '' }: { tetelek: ArTetel[]; className?: string }) {
  return (
    <dl className={`border-t border-line ${className}`}>
      {tetelek.map((a) => (
        <div
          key={a.id}
          className="flex flex-col gap-2 border-b border-line py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
        >
          <div className="min-w-0">
            <dt className="font-display text-lg font-semibold text-ink">{a.cim}</dt>
            {a.megjegyzes ? (
              <dd className="mt-1 font-body text-sm leading-relaxed text-ink2">{a.megjegyzes}</dd>
            ) : null}
          </div>
          <dd className="shrink-0 font-display text-xl font-bold tabular-nums text-accent">
            {a.ertek}
          </dd>
        </div>
      ))}
    </dl>
  );
}
