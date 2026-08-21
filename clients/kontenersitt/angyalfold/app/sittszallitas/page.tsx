import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title: "Sittszállítás Angyalföld — építési törmelék elszállítása a XIII. kerületben",
  description:
    "Sittszállítás Angyalföldön: tégla, beton, csempe, vakolat elszállítása panellakás- és lakópark-felújításból. 4–8 m³-es konténer, gyors kiszállítás a XIII. kerületbe. ☎ +36 21 3355 233",
  alternates: { canonical: "/sittszallitas" },
};

export default function SittPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Sittszállítás</span>
          </div>
          <h1>Sittszállítás Angyalföldön</h1>
          <p className="lead">
            Építési törmelék — tégla, beton, csempe, vakolat — elszállítása
            felújításból és bontásból, konténerrel, a XIII. kerület minden
            részébe.
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
              <b>Tégla és beton</b> — falbontás, aljzat
            </li>
            <li>
              <b>Csempe és járólap</b> — fürdő- és konyhafelújítás
            </li>
            <li>
              <b>Vakolat, kőműves törmelék</b>
            </li>
            <li>
              <b>Üzlethelyiség-átalakítás</b> törmeléke
            </li>
          </ul>

          <h2>Sittszállítás a XIII. kerület épületeihez</h2>
          <p>
            Angyalföld épületállománya sokféle: a <b>Gyöngyösi-lakótelep</b> és a{" "}
            <b>Béke tér</b> panellakásaiban a burkolat- és fürdőfelújítás
            törmeléke a jellemző, az <b>Újlipótváros</b> régi bérházainál a
            komolyabb felújítások, a <b>Vizafogó</b> és a <b>Marina-part</b> új
            lakóparkjaiban pedig az építkezési sitt. Mindegyikhez a helyszínhez
            illő konténert és időzítést választunk.
          </p>

          <h2>Melyik konténer kell a sitthez?</h2>
          <p>
            A sitt nehéz, ezért nem kell a legnagyobb konténer. Fürdő- és
            konyhafelújításhoz a <b>4 m³</b>, teljes lakásfelújításhoz a{" "}
            <b>6 m³</b>, bontáshoz a <b>8 m³</b> a jellemző. Ha bizonytalan,
            telefonon segítünk választani. Az árakról bővebben az{" "}
            <Link href="/arak">Árak</Link> oldalon.
          </p>

          <h2>Hogyan zajlik?</h2>
          <ul>
            <li>Felhív, elmondja, mit bont és hol — azonnal árat mondunk.</li>
            <li>Kihozzuk a konténert, jellemzően 24 órán belül.</li>
            <li>Megpakolja; a konténer akár 1 hétig felár nélkül kint maradhat.</li>
            <li>Hívásra elszállítjuk, és engedélyes lerakóban adjuk le.</li>
          </ul>

          <p>
            Nemcsak sitt:{" "}
            <Link href="/lomtalanitas-zoldhulladek">
              lomot és zöldhulladékot
            </Link>{" "}
            is elszállítunk. Sűrű beépítésnél gyakran kell{" "}
            <Link href="/kozterulet-engedely">közterület-engedély</Link> — ezt
            is intézzük.
          </p>

          <CtaBand text="Mondja el, mit bont — azonnal árat mondunk a sittszállításra, kiszállítással és lerakással együtt." />
        </div>
      </section>
    </main>
  );
}
