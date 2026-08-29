import {
  foglalkozasok,
  helyszinRovid,
  napok,
  programvaltozas,
  tablazatCim,
  type Foglalkozas,
  type Idopont,
  type NapKulcs,
} from '@/content';
import { Cimke } from './ui';

/**
 * A 2026–27-es foglalkozás- és edzéstáblázat — az egyesület saját táblázatának
 * (forras/…foglalkozas tablazat 2026-27.jpg) elrendezése: sor = foglalkozás,
 * oszlop = nap. Az ügyfél kérésére a kezdőlapon is ez a fő nézet, és a
 * Foglalkozások oldal ugyanezt a komponenst használja.
 *
 * Két megjelenítés, EGY adatból:
 *   — md fölött: a teljes táblázat (8 oszlop) a szakasz szélességében; ha nem
 *     fér el, a saját burkolójában görgethető oldalra;
 *   — md alatt: foglalkozásonként egymás alá, napokkal — mert egy hétoszlopos
 *     táblázat 390 px-en csak oldalra görgetve olvasható.
 * A kettő `hidden`/`md:hidden`-nel váltakozik (display: none), tehát a
 * képernyőolvasó is pontosan egyet lát belőlük.
 */

function cella(f: Foglalkozas, nap: NapKulcs) {
  return {
    idopontok: f.idopontok.filter((i) => i.nap === nap),
    megjegyzes: f.napiMegjegyzes?.[nap],
  };
}

function IdopontDoboz({ i }: { i: Idopont }) {
  const hely = helyszinRovid(i.helyszinId);
  const oras = /^\d/.test(i.ido);
  return (
    <div className="grid gap-1">
      <span
        className={
          oras
            ? 'font-display text-base font-bold leading-tight tabular-nums text-accent'
            : 'font-body text-xs font-semibold leading-snug text-ink'
        }
      >
        {i.ido}
      </span>
      <span className="font-body text-xs leading-snug text-ink2">
        <span className="font-bold text-ink">{hely.ker}</span> {hely.rovidCim}
      </span>
      {i.egyeztetendo ? (
        <span>
          <Cimke magyarazat={i.egyeztetendo}>Egyeztetendő</Cimke>
        </span>
      ) : null}
      {i.megjegyzes ? (
        <span className="font-body text-xs leading-snug text-ink2">({i.megjegyzes})</span>
      ) : null}
    </div>
  );
}

function Megjegyzes({ szoveg }: { szoveg: string }) {
  return szoveg === 'SZÜNET' ? (
    <span className="font-body text-xs font-bold uppercase tracking-[0.14em] text-muted">
      {szoveg}
    </span>
  ) : (
    <span className="block font-body text-xs leading-snug text-ink2">{szoveg}</span>
  );
}

const fejCella = 'py-3 pr-3 font-body text-xs font-bold uppercase tracking-[0.16em] text-muted';
const napCimke = 'pt-0.5 font-body text-sm font-semibold text-ink';

export function HetiTablazat({ cimmel = true }: { cimmel?: boolean }) {
  return (
    <div className="heti-tablazat">
      {/* ── md fölött: a teljes táblázat ── */}
      <div className="-mx-5 hidden overflow-x-auto px-5 md:block">
        <table className="w-full min-w-[60rem] border-collapse text-left">
          <caption
            className={cimmel ? 'mb-4 text-left font-display text-lg font-bold text-ink' : 'sr-only'}
          >
            {tablazatCim}
          </caption>
          <thead>
            <tr className="border-b border-ink">
              <th scope="col" className={`w-52 ${fejCella}`}>
                Foglalkozás / korosztály
              </th>
              {napok.map((n) => (
                <th key={n.kulcs} scope="col" className={fejCella}>
                  {n.nev}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {foglalkozasok.map((f) => (
              <tr key={f.id} className="border-b border-line align-top">
                <th scope="row" className="py-4 pr-4 text-left font-normal">
                  <span className="block font-display text-base font-bold leading-snug text-ink">
                    {f.nev}
                  </span>
                  {f.korosztaly ? (
                    <span className="mt-1 block font-body text-sm font-semibold text-accent">
                      {f.korosztaly}
                    </span>
                  ) : null}
                  <span className="mt-1 block font-body text-xs leading-snug text-ink2">
                    {f.rovid}
                  </span>
                </th>
                {napok.map((n) => {
                  const c = cella(f, n.kulcs);
                  return (
                    <td key={n.kulcs} className="py-4 pr-3">
                      {c.idopontok.length ? (
                        <div className="grid gap-3">
                          {c.idopontok.map((i, k) => (
                            <IdopontDoboz key={k} i={i} />
                          ))}
                        </div>
                      ) : null}
                      {c.megjegyzes ? <Megjegyzes szoveg={c.megjegyzes} /> : null}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── md alatt: ugyanaz az adat, foglalkozásonként ── */}
      <div className="md:hidden">
        {cimmel ? <p className="font-display text-lg font-bold text-ink">{tablazatCim}</p> : null}
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {foglalkozasok.map((f) => (
            <li key={f.id} className="py-5">
              <h3 className="font-display text-base font-bold leading-snug text-ink">{f.nev}</h3>
              {f.korosztaly ? (
                <p className="mt-1 font-body text-sm font-semibold text-accent">{f.korosztaly}</p>
              ) : null}
              <p className="mt-1 font-body text-xs leading-snug text-ink2">{f.rovid}</p>
              <ul className="mt-3 space-y-3">
                {napok.flatMap((n) => {
                  const c = cella(f, n.kulcs);
                  const sorok = c.idopontok.map((i, k) => (
                    <li key={`${n.kulcs}-${k}`} className="grid grid-cols-[5.5rem_1fr] gap-3">
                      <span className={napCimke}>{n.nev}</span>
                      <IdopontDoboz i={i} />
                    </li>
                  ));
                  if (c.megjegyzes) {
                    sorok.push(
                      <li key={`${n.kulcs}-m`} className="grid grid-cols-[5.5rem_1fr] gap-3">
                        <span className={napCimke}>{n.nev}</span>
                        <Megjegyzes szoveg={c.megjegyzes} />
                      </li>,
                    );
                  }
                  return sorok;
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 font-body text-sm font-semibold text-ink2">{programvaltozas}</p>
    </div>
  );
}
