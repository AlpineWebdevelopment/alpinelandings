import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Konténer árak Zugló — m³ ár és díjak a XIV. kerületben | 9.875 Ft/m³-tól",
  description:
    "Konténer rendelés árak Zuglóban: 9.875 Ft/m³-tól (nettó, 8 m³-es vegyes konténer). Kiszállítás, elszállítás és lerakási díj együtt, rejtett költség nélkül. Személyes hulladékleadás 12.700 Ft. ☎ +36 21 3355 222",
  alternates: { canonical: "/arak" },
};

export default function ArakPage() {
  return (
    <main>
      <header className="subhero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Árak</span>
          </div>
          <span className="k">Árak · XIV. kerület</span>
          <h1>Konténer árak Zuglóban</h1>
          <p className="lead">
            Átlátható, m³-alapú árazás — a XIV. kerületben{" "}
            <b>{site.m3Price}</b> nettó, 8 m³-es vegyes konténerre. A pontos árat
            a méret és a hulladék típusa határozza meg; telefonon azonnal
            megmondjuk, rejtett költség nélkül.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mennyibe kerül a konténer Zuglóban?</h2>
          <p>
            A konténer ára a <b>választott mérettől</b> (4–8 m³) és a{" "}
            <b>hulladék típusától</b> függ, mert a sitt, a lom és a vegyes
            hulladék lerakási díja eltér. A kiindulási m³-ár Zuglóban:
          </p>

          <table className="ptable">
            <thead>
              <tr>
                <th>Szolgáltatás</th>
                <th>Ár</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vegyes konténer (8 m³), XIV. kerület</td>
                <td>
                  <b>{site.m3Price}</b> (nettó)
                </td>
              </tr>
              <tr>
                <td>Személyes hulladékleadás a telephelyen</td>
                <td>
                  <b>{site.droppOffPrice}</b>
                </td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: ".85rem", color: "var(--grey-dark)" }}>
            Az m³-ár nettó, 8 m³-es vegyes konténerre értendő. A végleges árat a
            munka és a hulladék típusa alapján telefonon adjuk meg.
          </p>

          <h2>Mit tartalmaz az ár?</h2>
          <ul>
            <li>
              <b>Kiszállítás</b> Zugló bármelyik városrészébe
            </li>
            <li>
              <b>Rendelkezésre állás</b> — a konténer akár 1 hétig felár nélkül
              kint maradhat
            </li>
            <li>
              <b>Elszállítás</b> a megtelt konténerért, hívásra
            </li>
            <li>
              <b>Lerakási díj</b> és szabályos, engedélyes ártalmatlanítás
            </li>
            <li>
              <b>Igazolás</b> a hulladék szabályos leadásáról, kérésre
            </li>
          </ul>

          <h2>Miért nem teszünk ki fix árat minden méretre?</h2>
          <p>
            Mert az őszinte ár a hulladék típusától is függ. Mi{" "}
            <b>engedélyes lerakóban, szabályosan</b> adjuk le a hulladékot, és
            erről igazolást is adunk — ennek megvan a valós, kiszámítható
            költsége. Cserébe nincs meglepetés: a telefonban mondott ár a
            kiszállítást, az elszállítást és a lerakást is tartalmazza.
          </p>

          <h2>Személyes hulladékleadás Zugló közelében</h2>
          <p>
            Kisebb mennyiséget személyesen is leadhat a telephelyünkön:{" "}
            <b>{site.address}</b> A telephelyi hulladékátvétel ára{" "}
            <b>{site.droppOffPrice}</b>. Ha nem biztos benne, hogy konténer vagy
            személyes leadás éri-e meg jobban, hívjon — megmondjuk.
          </p>

          <p>
            Nézze meg a <Link href="/sittszallitas">sittszállítás</Link> és a{" "}
            <Link href="/lomtalanitas-zoldhulladek">
              lomtalanítás · zöldhulladék
            </Link>{" "}
            részleteit is, vagy közterületre tenné a konténert? Lásd a{" "}
            <Link href="/kozterulet-engedely">közterület-engedély</Link>{" "}
            útmutatót.
          </p>

          <CtaBand />
        </div>
      </section>
    </main>
  );
}
