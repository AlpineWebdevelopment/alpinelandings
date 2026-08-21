import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title: "Sittszállítás Zugló — építési törmelék elszállítása a XIV. kerületben",
  description:
    "Sittszállítás Zuglóban: tégla, beton, csempe, vakolat elszállítása felújításból, bontásból. 4–8 m³-es konténer, gyors kiszállítás a XIV. kerület minden városrészébe. ☎ +36 21 3355 222",
  alternates: { canonical: "/sittszallitas" },
};

export default function SittPage() {
  return (
    <main>
      <header className="subhero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Sittszállítás</span>
          </div>
          <span className="k">Sittszállítás · XIV. kerület</span>
          <h1>Sittszállítás Zuglóban</h1>
          <p className="lead">
            Építési törmelék — tégla, beton, csempe, vakolat — elszállítása
            felújításból és bontásból, konténerrel, Zugló minden városrészébe.
            Kiszállítás jellemzően 24 órán belül.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mi számít sittnek?</h2>
          <p>
            A sitt az építkezés és felújítás <b>ásványi eredetű törmeléke</b>,
            amelyet konténerben, szabályosan szállítunk el:
          </p>
          <ul>
            <li>
              <b>Tégla és beton</b> — falbontás, aljzat, kerítés
            </li>
            <li>
              <b>Csempe és járólap</b> — fürdő- és konyhafelújítás
            </li>
            <li>
              <b>Vakolat, kőműves törmelék</b>
            </li>
            <li>
              <b>Tetőcserép, kőzet</b> — kisebb tető- és kertfelújítás
            </li>
          </ul>

          <h2>Sittszállítás Zugló felújításaihoz</h2>
          <p>
            A XIV. kerület házállománya vegyes, ezért máshogy áll a konténer egy{" "}
            <b>Füredi úti lakótelepi</b> panelfelújításnál, mint egy{" "}
            <b>herminamezői</b> vagy <b>istvánmezői</b> társasháznál, vagy egy{" "}
            <b>alsórákosi</b>, <b>rákosfalvai</b> kertes háznál. Sofőrjeink
            ismerik a kerületet, és a lehető legjobb helyre teszik le a
            konténert, hogy a törmeléket kényelmesen tudja pakolni.
          </p>

          <h2>Melyik konténer kell a sitthez?</h2>
          <p>
            A sitt nehéz, ezért nem kell a legnagyobb konténer. Egy átlagos
            fürdő- és konyhafelújításhoz a <b>4 m³</b>, teljes lakásfelújításhoz
            a <b>6 m³</b>, társasházi vagy több lakásos munkához a{" "}
            <b>8 m³</b> a jellemző. Ha bizonytalan, telefonon egy perc alatt
            segítünk választani, hogy ne fizessen feleslegesen nagyobbért. Az
            árakról bővebben az <Link href="/arak">Árak</Link> oldalon.
          </p>

          <h2>Hogyan zajlik a sittszállítás?</h2>
          <ul>
            <li>Felhív, elmondja, mit bont és hol — azonnal árat mondunk.</li>
            <li>Kiszállítjuk a konténert, jellemzően 24 órán belül.</li>
            <li>Megpakolja; a konténer akár 1 hétig felár nélkül kint maradhat.</li>
            <li>Hívásra elszállítjuk, és engedélyes lerakóban adjuk le.</li>
          </ul>

          <p>
            Nemcsak sitt: <Link href="/lomtalanitas-zoldhulladek">lomot és
            zöldhulladékot</Link> is elszállítunk. Közterületre kerülne a
            konténer? Lásd a{" "}
            <Link href="/kozterulet-engedely">közterület-engedély</Link>{" "}
            útmutatót.
          </p>

          <CtaBand text="Mondja el, mit bont — azonnal árat mondunk a sittszállításra, kiszállítással és lerakással együtt." />
        </div>
      </section>
    </main>
  );
}
