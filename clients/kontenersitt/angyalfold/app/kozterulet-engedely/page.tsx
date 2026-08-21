import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title:
    "Közterület-használati engedély konténerhez Angyalföld — útmutató a XIII. kerületben",
  description:
    "Mikor kell közterület-használati engedély a konténerhez Angyalföldön, és hogyan intézzük? Útmutató a XIII. kerületi engedélyhez — a sűrű beépítés miatt gyakran szükséges. ☎ +36 21 3355 233",
  alternates: { canonical: "/kozterulet-engedely" },
};

export default function EngedelyPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Közterület-engedély</span>
          </div>
          <h1>Közterület-engedély konténerhez Angyalföldön</h1>
          <p className="lead">
            Angyalföld sűrűn beépített, ezért a konténer gyakran közterületre
            kerül — ilyenkor engedély kell a XIII. kerületi önkormányzattól.
            Összeszedtük, mikor kell, mikor nem, és hogyan intézzük helyetted.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mikor kell engedély?</h2>
          <p>
            Ha a konténer <b>közterületre</b> — járdára, úttestre, parkolósávba —
            kerül, <b>közterület-használati hozzájárulás</b> szükséges a XIII.
            kerületi önkormányzattól. A sűrű beépítés és a szűk parkolók miatt ez
            Angyalföldön a <b>gyakoribb</b> eset, például az <b>Újlipótváros</b>{" "}
            bérházainál vagy a <b>Váci út</b> menti utcákban.
          </p>

          <h2>Mikor nem kell engedély?</h2>
          <p>
            Ha a konténer végig <b>zárt udvarban, saját területen vagy a
            munkaterületen belül</b> áll, nincs szükség közterület-használati
            engedélyre. Ez főleg a társasházi zárt udvaroknál és az új lakóparkok
            saját területén — <b>Vizafogó</b>, <b>Marina-part</b> — fordulhat
            elő.
          </p>

          <h2>Hogyan intézzük?</h2>
          <ul>
            <li>
              Már a <b>telefonban megbeszéljük</b>, hova kerülne a konténer, és
              kell-e hozzá engedély.
            </li>
            <li>
              Ha kell, <b>segítünk a XIII. kerületi önkormányzati
              ügyintézésben</b> és a szükséges adatok összeállításában.
            </li>
            <li>
              A konténert úgy helyezzük el, hogy megfeleljen az engedélyben
              foglaltaknak és ne akadályozza a forgalmat.
            </li>
          </ul>

          <h2>Jó, ha tudja</h2>
          <ul>
            <li>
              Engedély nélküli közterület-használat <b>bírságot</b> vonhat maga
              után — ezt egy kis tervezéssel könnyű elkerülni.
            </li>
            <li>
              A közterületen az <b>engedély időtartama</b> szabja meg, meddig
              maradhat kint a konténer.
            </li>
            <li>
              Ha van rá mód, a konténert inkább <b>zárt udvarba</b> tesszük — az
              gyorsabb és olcsóbb, mert nem kell engedély.
            </li>
          </ul>

          <p>
            Kész a hely? Nézze meg a{" "}
            <Link href="/sittszallitas">sittszállítás</Link> és a{" "}
            <Link href="/lomtalanitas-zoldhulladek">
              lomtalanítás · zöldhulladék
            </Link>{" "}
            részleteit, vagy kérjen árat az <Link href="/arak">Árak</Link>{" "}
            oldalon.
          </p>

          <CtaBand text="Nem biztos benne, kell-e engedély? Hívjon — megmondjuk, és ha kell, segítünk elintézni." />
        </div>
      </section>
    </main>
  );
}
