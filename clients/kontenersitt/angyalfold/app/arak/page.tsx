import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Konténer árak Angyalföld — m³ ár és díjak a XIII. kerületben | 10.250 Ft/m³-tól",
  description:
    "Konténer rendelés árak Angyalföldön: 10.250 Ft/m³-tól (nettó, 8 m³-es vegyes konténer). Kiszállítás, elszállítás és lerakási díj együtt, rejtett költség nélkül. Személyes hulladékleadás 12.700 Ft. ☎ +36 21 3355 233",
  alternates: { canonical: "/arak" },
};

export default function ArakPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Árak</span>
          </div>
          <h1>Konténer árak Angyalföldön</h1>
          <p className="lead">
            Átlátható, m³-alapú árazás — a XIII. kerületben <b>{site.m3Price}</b>{" "}
            nettó, 8 m³-es vegyes konténerre. A pontos árat a méret és a hulladék
            típusa adja; telefonon azonnal megmondjuk, rejtett költség nélkül.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mennyibe kerül a konténer Angyalföldön?</h2>
          <p>
            A konténer ára a <b>választott mérettől</b> (4–8 m³) és a{" "}
            <b>hulladék típusától</b> függ, mert a sitt, a lom és a vegyes
            hulladék lerakási díja eltér. A kiindulási m³-ár a XIII. kerületben:
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
                <td>Vegyes konténer (8 m³), XIII. kerület</td>
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
          <p style={{ fontSize: ".85rem", color: "var(--slate)" }}>
            Az m³-ár nettó, 8 m³-es vegyes konténerre értendő. A végleges árat a
            munka és a hulladék típusa alapján telefonon adjuk meg.
          </p>

          <h2>Mit tartalmaz az ár?</h2>
          <ul>
            <li>
              <b>Kiszállítás</b> Angyalföld bármelyik részébe
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

          <h2>Nincs rejtett költség</h2>
          <p>
            Mi <b>engedélyes lerakóban, szabályosan</b> dolgozunk, és a hulladék
            akár 90%-át újrahasznosításra adjuk le — erről igazolást is adunk. A
            telefonban mondott ár a kiszállítást, az elszállítást és a lerakást
            is tartalmazza.
          </p>

          <h2>Személyes hulladékleadás</h2>
          <p>
            Kisebb mennyiséget személyesen is leadhat a telephelyünkön:{" "}
            <b>{site.address}</b> A telephelyi hulladékátvétel ára{" "}
            <b>{site.droppOffPrice}</b>.
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
