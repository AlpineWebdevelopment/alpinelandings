'use client';

import Link from 'next/link';
import { useRef, useState, type FormEvent, type ReactNode } from 'react';
import {
  beiratkozas,
  foglalkozasok,
  napNev,
  type Foglalkozas,
  type Idopont,
} from '@/content/edzesek';
import { egyesulet, helyszinRovid } from '@/content/egyesulet';
import { jelentkezesiLap, urlapHibak, type NyilatkozatId } from '@/content/jelentkezesiLap';
import { variantHref, type VariantKey } from '@/variants/config';
import { MintaSav } from './Minta';
import { GombNyomo, gombOsztaly } from './ui';

/**
 * Online beiratkozó lap — a nyomtatott lap mezői, weben.
 *
 * — Saját ellenőrzés (`noValidate`): a hibaüzenetek magyarul, a mező alatt,
 *   `aria-invalid` + `aria-describedby`; küldéskor a fókusz az első hibás mezőre
 *   ugrik. Szerkesztéskor a mező hibája törlődik.
 * — A foglalkozások nem szabad szöveg, hanem a 2026–27-es táblázat díjköteles
 *   alkalmai jelölőnégyzettel — ugyanabból az adatból, mint a táblázat.
 * — 18 év alatt (az életkor mezőből) megjelenik a szülő/gondviselő blokk, és
 *   annak elérhetősége lesz kötelező a jelentkezőé helyett.
 * — A bemutató NEM küld adatot: az érvényes űrlap egy összegzést mutat (MINTA
 *   megjegyzéssel), amit egy `mailto:` gomb kész levélként nyit meg az egyesület
 *   címére. Az éles bekötés a README „Ami az éles oldalra még kell" listáján van.
 * — Jelölőnégyzetek 24×24 px (WCAG 2.5.8), a sorok 44 px magasak.
 */

type MezoId =
  | 'nev'
  | 'eletkor'
  | 'lakcim'
  | 'telefon'
  | 'email'
  | 'gondviseloNev'
  | 'gondviseloTelefon'
  | 'gondviseloEmail'
  | 'megjegyzes';
type HibaKulcs = MezoId | 'foglalkozasok' | NyilatkozatId;
type Hibak = Partial<Record<HibaKulcs, string>>;

const URES: Record<MezoId, string> = {
  nev: '',
  eletkor: '',
  lakcim: '',
  telefon: '',
  email: '',
  gondviseloNev: '',
  gondviseloTelefon: '',
  gondviseloEmail: '',
  megjegyzes: '',
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** A fókusz sorrendje hibánál — az űrlap vizuális sorrendje. */
const SORREND: HibaKulcs[] = [
  'nev',
  'eletkor',
  'lakcim',
  'telefon',
  'email',
  'gondviseloNev',
  'gondviseloTelefon',
  'gondviseloEmail',
  'foglalkozasok',
  'feltetelek',
  'szabalyzat',
  'adatkezeles',
];

/** A választható alkalmak: a díjköteles foglalkozások táblázatbeli időpontjai. */
const valaszthato = foglalkozasok.filter((f) => f.arIds?.length && f.idopontok.length);

const alkalomKulcs = (f: Foglalkozas, k: number) => `${f.id}|${k}`;
const alkalomId = (f: Foglalkozas, k: number) => `jel-fogl-${f.id}-${k}`;

function alkalomSzoveg(ip: Idopont): string {
  const hely = helyszinRovid(ip.helyszinId);
  return `${napNev(ip.nap)} ${ip.ido} · ${hely.ker} ${hely.rovidCim}`;
}

function fokuszId(k: HibaKulcs): string {
  if (k === 'foglalkozasok') {
    const f = valaszthato[0];
    return f ? alkalomId(f, 0) : 'jel-nev';
  }
  if (k === 'feltetelek' || k === 'szabalyzat' || k === 'adatkezeles') return `jel-ny-${k}`;
  return `jel-${k}`;
}

const mezoOsztaly = (hibas: boolean) =>
  `urlap-mezo mt-1.5 block w-full min-h-12 border bg-paper px-3.5 py-2.5 font-body text-base text-ink ${
    hibas ? 'border-accent' : 'border-line focus:border-ink'
  }`;

function Mezo({
  id,
  cimke,
  ertek,
  onChange,
  hiba,
  kotelezo = true,
  tipp,
  tobbsoros = false,
  type = 'text',
  autoComplete,
  inputMode,
  className = '',
}: {
  id: string;
  cimke: string;
  ertek: string;
  onChange: (v: string) => void;
  hiba?: string;
  kotelezo?: boolean;
  tipp?: string;
  tobbsoros?: boolean;
  type?: 'text' | 'email' | 'tel' | 'number';
  autoComplete?: string;
  inputMode?: 'text' | 'numeric' | 'tel' | 'email';
  className?: string;
}) {
  const hibaId = `${id}-hiba`;
  const tippId = `${id}-tipp`;
  const leiro = [hiba ? hibaId : '', tipp ? tippId : ''].filter(Boolean).join(' ') || undefined;
  const kozos = {
    id,
    value: ertek,
    required: kotelezo,
    'aria-invalid': hiba ? true : undefined,
    'aria-describedby': leiro,
    className: mezoOsztaly(!!hiba),
    autoComplete,
  };
  return (
    <div className={className}>
      <label htmlFor={id} className="block font-body text-sm font-bold text-ink">
        {cimke}
        {kotelezo ? null : <span className="font-normal text-ink2"> (nem kötelező)</span>}
      </label>
      {tobbsoros ? (
        <textarea {...kozos} rows={3} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input {...kozos} type={type} inputMode={inputMode} onChange={(e) => onChange(e.target.value)} />
      )}
      {tipp ? (
        <p id={tippId} className="mt-1.5 font-body text-xs leading-snug text-ink2">
          {tipp}
        </p>
      ) : null}
      {hiba ? (
        <p id={hibaId} className="mt-1.5 font-body text-sm font-semibold text-accent">
          {hiba}
        </p>
      ) : null}
    </div>
  );
}

function Jelolo({
  id,
  bejelolve,
  onChange,
  hiba,
  leiroId,
  children,
}: {
  id: string;
  bejelolve: boolean;
  onChange: (be: boolean) => void;
  hiba?: string;
  /** Csoportszintű hibaüzenet azonosítója (a foglalkozásoknál). */
  leiroId?: string;
  children: ReactNode;
}) {
  const hibaId = `${id}-hiba`;
  const leiro = [hiba ? hibaId : '', leiroId ?? ''].filter(Boolean).join(' ') || undefined;
  return (
    <div>
      <label htmlFor={id} className="flex min-h-11 cursor-pointer items-start gap-3 py-1.5">
        <input
          id={id}
          type="checkbox"
          checked={bejelolve}
          onChange={(e) => onChange(e.target.checked)}
          aria-invalid={hiba ? true : undefined}
          aria-describedby={leiro}
          className="mt-0.5 h-6 w-6 shrink-0 cursor-pointer accent-accent"
        />
        <span className="font-body text-base leading-snug text-ink">{children}</span>
      </label>
      {hiba ? (
        <p id={hibaId} className="ml-9 font-body text-sm font-semibold text-accent">
          {hiba}
        </p>
      ) : null}
    </div>
  );
}

function Sor({ cimke, children }: { cimke: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-3 sm:flex-row sm:gap-6">
      <dt className="shrink-0 font-body text-xs font-bold uppercase tracking-[0.14em] text-muted sm:w-56 sm:pt-1">
        {cimke}
      </dt>
      <dd className="min-w-0 font-body text-base leading-relaxed text-ink">{children}</dd>
    </div>
  );
}

export function JelentkezesUrlap({ valtozat }: { valtozat: VariantKey }) {
  const h = (p: string) => variantHref(valtozat, p);
  const t = jelentkezesiLap;

  const [ertek, setErtek] = useState<Record<MezoId, string>>(URES);
  const [valasztott, setValasztott] = useState<string[]>([]);
  const [elfogadva, setElfogadva] = useState<Record<NyilatkozatId, boolean>>({
    feltetelek: false,
    szabalyzat: false,
    adatkezeles: false,
  });
  const [hibak, setHibak] = useState<Hibak>({});
  const [osszegzes, setOsszegzes] = useState(false);
  const osszegzesRef = useRef<HTMLDivElement>(null);

  const kor = ertek.eletkor.trim() === '' ? null : Number(ertek.eletkor);
  const kiskoru = kor !== null && Number.isInteger(kor) && kor < 18;

  const torolHiba = (k: HibaKulcs) =>
    setHibak((elozo) => {
      if (!(k in elozo)) return elozo;
      const uj = { ...elozo };
      delete uj[k];
      return uj;
    });
  const irja = (k: MezoId) => (v: string) => {
    setErtek((e) => ({ ...e, [k]: v }));
    torolHiba(k);
  };
  const valaszt = (kulcs: string) => (be: boolean) => {
    setValasztott((v) => (be ? [...v, kulcs] : v.filter((x) => x !== kulcs)));
    torolHiba('foglalkozasok');
  };
  const elfogad = (k: NyilatkozatId) => (be: boolean) => {
    setElfogadva((e) => ({ ...e, [k]: be }));
    torolHiba(k);
  };

  const ellenoriz = (): Hibak => {
    const hb: Hibak = {};
    const ures = (k: MezoId) => ertek[k].trim() === '';
    const rosszEmail = (k: MezoId) => !EMAIL.test(ertek[k].trim());
    const rosszTelefon = (k: MezoId) => ertek[k].replace(/\D/g, '').length < 6;

    if (ures('nev')) hb.nev = urlapHibak.kotelezo;
    if (ures('eletkor')) hb.eletkor = urlapHibak.kotelezo;
    else if (kor === null || !Number.isInteger(kor) || kor < 1 || kor > 120)
      hb.eletkor = urlapHibak.eletkor;
    if (ures('lakcim')) hb.lakcim = urlapHibak.kotelezo;

    // 18 év alatt a jelentkező saját elérhetősége nem kötelező, a gondviselőé igen.
    if (ures('telefon')) {
      if (!kiskoru) hb.telefon = urlapHibak.kotelezo;
    } else if (rosszTelefon('telefon')) hb.telefon = urlapHibak.telefon;
    if (ures('email')) {
      if (!kiskoru) hb.email = urlapHibak.kotelezo;
    } else if (rosszEmail('email')) hb.email = urlapHibak.email;

    if (kiskoru) {
      if (ures('gondviseloNev')) hb.gondviseloNev = urlapHibak.kotelezo;
      if (ures('gondviseloTelefon')) hb.gondviseloTelefon = urlapHibak.kotelezo;
      else if (rosszTelefon('gondviseloTelefon')) hb.gondviseloTelefon = urlapHibak.telefon;
      if (ures('gondviseloEmail')) hb.gondviseloEmail = urlapHibak.kotelezo;
      else if (rosszEmail('gondviseloEmail')) hb.gondviseloEmail = urlapHibak.email;
    }

    if (valasztott.length === 0) hb.foglalkozasok = urlapHibak.foglalkozas;
    for (const ny of t.nyilatkozatok) if (!elfogadva[ny.id]) hb[ny.id] = urlapHibak.nyilatkozat;
    return hb;
  };

  const kuld = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hb = ellenoriz();
    setHibak(hb);
    const elso = SORREND.find((k) => hb[k]);
    if (elso) {
      const id = fokuszId(elso);
      requestAnimationFrame(() => document.getElementById(id)?.focus());
      return;
    }
    setOsszegzes(true);
    requestAnimationFrame(() => osszegzesRef.current?.focus());
  };

  const vissza = () => {
    setOsszegzes(false);
    requestAnimationFrame(() => document.getElementById('jel-nev')?.focus());
  };

  const valasztottAlkalmak = valaszthato
    .flatMap((f) => f.idopontok.map((ip, k) => ({ f, ip, kulcs: alkalomKulcs(f, k) })))
    .filter((x) => valasztott.includes(x.kulcs));

  const hibaSzam = Object.keys(hibak).length;

  /* ------------------------------- ÖSSZEGZÉS ------------------------------- */

  if (osszegzes) {
    const v = (k: MezoId) => ertek[k].trim() || '—';
    const sorok: string[] = [
      t.osszegzes.targy,
      '',
      `${t.mezok.nev}: ${v('nev')}`,
      `${t.mezok.eletkor}: ${v('eletkor')}`,
      `${t.mezok.lakcim}: ${v('lakcim')}`,
      `${t.mezok.telefon}: ${v('telefon')}`,
      `${t.mezok.email}: ${v('email')}`,
    ];
    if (kiskoru) {
      sorok.push(
        '',
        `${t.osszegzes.gondviselo}: ${v('gondviseloNev')}`,
        `${t.mezok.telefon}: ${v('gondviseloTelefon')}`,
        `${t.mezok.email}: ${v('gondviseloEmail')}`,
      );
    }
    sorok.push('', `${t.osszegzes.valasztott}:`);
    for (const x of valasztottAlkalmak) sorok.push(`- ${x.f.nev}: ${alkalomSzoveg(x.ip)}`);
    if (ertek.megjegyzes.trim()) sorok.push('', `${t.mezok.megjegyzes}: ${ertek.megjegyzes.trim()}`);
    sorok.push('', `${t.osszegzes.nyilatkozatok}: ${t.nyilatkozatok.map((n) => n.cim).join('; ')}.`);

    const mailto = `mailto:${egyesulet.email}?subject=${encodeURIComponent(
      `${t.osszegzes.targy} — ${v('nev')}`,
    )}&body=${encodeURIComponent(sorok.join('\r\n'))}`;

    return (
      <div ref={osszegzesRef} tabIndex={-1} aria-labelledby="jel-osszegzes-cim">
        <h4 id="jel-osszegzes-cim" className="font-display text-lg font-bold uppercase text-ink">
          {t.osszegzes.cim}
        </h4>
        <p className="mt-2 font-body text-base text-ink2">{t.osszegzes.bevezeto}</p>
        <div className="mt-6">
          <MintaSav>{t.kuldesMegjegyzes}</MintaSav>
        </div>
        <dl className="border-t border-line">
          <Sor cimke={t.mezok.nev}>{v('nev')}</Sor>
          <Sor cimke={t.mezok.eletkor}>{v('eletkor')}</Sor>
          <Sor cimke={t.mezok.lakcim}>{v('lakcim')}</Sor>
          <Sor cimke={t.mezok.telefon}>{v('telefon')}</Sor>
          <Sor cimke={t.mezok.email}>{v('email')}</Sor>
          {kiskoru ? (
            <>
              <Sor cimke={t.osszegzes.gondviselo}>{v('gondviseloNev')}</Sor>
              <Sor cimke={`${t.osszegzes.gondviselo} — ${t.mezok.telefon.toLowerCase()}`}>
                {v('gondviseloTelefon')}
              </Sor>
              <Sor cimke={`${t.osszegzes.gondviselo} — ${t.mezok.email.toLowerCase()}`}>
                {v('gondviseloEmail')}
              </Sor>
            </>
          ) : null}
          <Sor cimke={t.osszegzes.valasztott}>
            <ul className="space-y-1">
              {valasztottAlkalmak.map((x) => (
                <li key={x.kulcs}>
                  <span className="font-semibold">{x.f.nev}</span> — {alkalomSzoveg(x.ip)}
                </li>
              ))}
            </ul>
          </Sor>
          {ertek.megjegyzes.trim() ? (
            <Sor cimke={t.mezok.megjegyzes}>{ertek.megjegyzes.trim()}</Sor>
          ) : null}
          <Sor cimke={t.osszegzes.nyilatkozatok}>{t.nyilatkozatok.map((n) => n.cim).join('; ')}.</Sor>
        </dl>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={mailto} data-elsodleges="true" className={gombOsztaly(false)}>
            {t.osszegzes.emailGomb}
          </a>
          <GombNyomo masodlagos onClick={vissza}>
            {t.osszegzes.vissza}
          </GombNyomo>
        </div>
      </div>
    );
  }

  /* --------------------------------- ŰRLAP --------------------------------- */

  return (
    <form noValidate onSubmit={kuld} aria-labelledby="jelentkezes-cim">
      <p className="font-body text-sm text-ink2">{t.kotelezoMegjegyzes}</p>

      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-x-12">
        {/* ---- Jelentkező adatai ---- */}
        <div className="min-w-0">
          <fieldset className="min-w-0">
            <legend className="font-display text-lg font-bold uppercase text-ink">{t.adatokCim}</legend>
            <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,1fr)_9rem]">
              <Mezo id="jel-nev" cimke={t.mezok.nev} ertek={ertek.nev} onChange={irja('nev')} hiba={hibak.nev} autoComplete="name" />
              <Mezo
                id="jel-eletkor"
                cimke={t.mezok.eletkor}
                ertek={ertek.eletkor}
                onChange={irja('eletkor')}
                hiba={hibak.eletkor}
                type="number"
                inputMode="numeric"
                tipp={t.mezok.eletkorTipp}
              />
            </div>
            <Mezo id="jel-lakcim" cimke={t.mezok.lakcim} ertek={ertek.lakcim} onChange={irja('lakcim')} hiba={hibak.lakcim} autoComplete="street-address" className="mt-4" />
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Mezo id="jel-telefon" cimke={t.mezok.telefon} ertek={ertek.telefon} onChange={irja('telefon')} hiba={hibak.telefon} kotelezo={!kiskoru} type="tel" inputMode="tel" autoComplete="tel" />
              <Mezo id="jel-email" cimke={t.mezok.email} ertek={ertek.email} onChange={irja('email')} hiba={hibak.email} kotelezo={!kiskoru} type="email" inputMode="email" autoComplete="email" />
            </div>
          </fieldset>

          {kiskoru ? (
            <div className="mt-6 border-t border-line pt-5">
              <fieldset className="min-w-0">
                <legend className="font-display text-base font-bold uppercase text-ink">{t.gondviseloCim}</legend>
                <Mezo id="jel-gondviseloNev" cimke={t.mezok.nev} ertek={ertek.gondviseloNev} onChange={irja('gondviseloNev')} hiba={hibak.gondviseloNev} className="mt-4" />
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Mezo id="jel-gondviseloTelefon" cimke={t.mezok.telefon} ertek={ertek.gondviseloTelefon} onChange={irja('gondviseloTelefon')} hiba={hibak.gondviseloTelefon} type="tel" inputMode="tel" />
                  <Mezo id="jel-gondviseloEmail" cimke={t.mezok.email} ertek={ertek.gondviseloEmail} onChange={irja('gondviseloEmail')} hiba={hibak.gondviseloEmail} type="email" inputMode="email" />
                </div>
              </fieldset>
            </div>
          ) : null}

          <Mezo
            id="jel-megjegyzes"
            cimke={t.mezok.megjegyzes}
            ertek={ertek.megjegyzes}
            onChange={irja('megjegyzes')}
            kotelezo={false}
            tipp={t.mezok.megjegyzesTipp}
            tobbsoros
            className="mt-6"
          />
        </div>

        {/* ---- Foglalkozások ---- */}
        <fieldset className="min-w-0" aria-describedby={hibak.foglalkozasok ? 'jel-fogl-hiba' : undefined}>
          <legend className="font-display text-lg font-bold uppercase leading-snug text-ink">{t.valasztasCim}</legend>
          <p className="mt-3 font-body text-sm leading-relaxed text-ink2">
            {t.valasztasMegjegyzes}{' '}
            <Link href={h('/foglalkozasok')} className="font-semibold text-link underline-offset-4 hover:underline">
              {t.valasztasLink} →
            </Link>
          </p>
          {hibak.foglalkozasok ? (
            <p id="jel-fogl-hiba" className="mt-3 font-body text-sm font-semibold text-accent">
              {hibak.foglalkozasok}
            </p>
          ) : null}
          {valaszthato.map((f) => (
            <div key={f.id} className="mt-5 border-t border-line pt-4">
              <fieldset className="min-w-0">
                <legend className="font-display text-base font-bold text-ink">
                  {f.nev}
                  {f.korosztaly ? <span className="font-body text-sm font-normal text-ink2"> — {f.korosztaly}</span> : null}
                </legend>
                <div className="mt-1 grid gap-x-6 sm:grid-cols-2">
                  {f.idopontok.map((ip, k) => (
                    <Jelolo
                      key={k}
                      id={alkalomId(f, k)}
                      bejelolve={valasztott.includes(alkalomKulcs(f, k))}
                      onChange={valaszt(alkalomKulcs(f, k))}
                      leiroId={hibak.foglalkozasok && k === 0 && f === valaszthato[0] ? 'jel-fogl-hiba' : undefined}
                    >
                      <span className="font-semibold">
                        {napNev(ip.nap)} {ip.ido}
                      </span>{' '}
                      <span className="text-ink2">
                        · {helyszinRovid(ip.helyszinId).ker} {helyszinRovid(ip.helyszinId).rovidCim}
                      </span>
                      {ip.megjegyzes ? <span className="block text-xs text-ink2">({ip.megjegyzes})</span> : null}
                    </Jelolo>
                  ))}
                </div>
              </fieldset>
            </div>
          ))}
        </fieldset>
      </div>

      {/* ---- Nyilatkozatok ---- */}
      <fieldset className="mt-10 min-w-0 border-t border-line pt-8">
        <legend className="float-left w-full font-display text-lg font-bold uppercase text-ink">{t.nyilatkozatokCim}</legend>
        <p className="clear-both mt-2 font-body text-sm text-ink2">{t.alairasMegjegyzes}</p>
        {t.nyilatkozatok.map((ny) => (
          <div key={ny.id} className="mt-6">
            <p className="font-display text-base font-bold text-ink">{ny.cim}</p>
            {ny.bevezeto ? (
              <p className="mt-1 font-body text-sm leading-relaxed text-ink2">
                {ny.bevezeto}{' '}
                {ny.link ? (
                  <Link href={h(ny.link.href)} className="font-semibold text-link underline-offset-4 hover:underline">
                    {ny.link.cimke} →
                  </Link>
                ) : null}
              </p>
            ) : null}
            {ny.id === 'feltetelek' ? (
              <details className="mt-2 border border-line bg-paper px-4">
                <summary className="min-h-11 cursor-pointer py-2.5 font-body text-sm font-bold text-ink">
                  {t.reszletekCim}
                </summary>
                <ol className="mt-2 space-y-2 font-body text-sm leading-relaxed text-ink2">
                  {beiratkozas.feltetelek.map((s, i) => (
                    <li key={s} className="flex gap-3">
                      <span className="shrink-0 font-display font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
                      {s}
                    </li>
                  ))}
                </ol>
                <p className="mt-4 font-body text-sm font-bold text-ink">{beiratkozas.felszerelesCim}</p>
                <p className="mt-1 font-body text-sm leading-relaxed text-ink2">{beiratkozas.felszerelesBevezeto}</p>
                <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                  {beiratkozas.felszereles.map((s) => (
                    <li key={s} className="flex gap-3 font-body text-sm text-ink2">
                      <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                      {s}
                    </li>
                  ))}
                </ul>
                {ny.link ? (
                  <p className="mt-3 pb-2 font-body text-sm">
                    <Link
                      href={h(ny.link.href)}
                      className="inline-flex min-h-11 items-center font-semibold text-link underline-offset-4 hover:underline"
                    >
                      {ny.link.cimke} →
                    </Link>
                  </p>
                ) : null}
              </details>
            ) : null}
            <div className="mt-2">
              <Jelolo id={`jel-ny-${ny.id}`} bejelolve={elfogadva[ny.id]} onChange={elfogad(ny.id)} hiba={hibak[ny.id]}>
                {ny.nyilatkozat}
              </Jelolo>
            </div>
          </div>
        ))}
      </fieldset>

      {hibaSzam > 0 ? (
        <p role="alert" className="mt-8 font-body text-sm font-semibold text-accent">
          {urlapHibak.osszegzes}
        </p>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
        <GombNyomo type="submit">{t.kuldGomb}</GombNyomo>
        <a href={beiratkozas.letoltes} download className="inline-flex min-h-11 items-center font-body text-sm font-semibold text-link underline-offset-4 hover:underline">
          {t.papirLink} <span aria-hidden="true">&nbsp;↓</span>
        </a>
      </div>
      <div className="mt-6">
        <MintaSav>{t.kuldesMegjegyzes}</MintaSav>
      </div>
    </form>
  );
}
