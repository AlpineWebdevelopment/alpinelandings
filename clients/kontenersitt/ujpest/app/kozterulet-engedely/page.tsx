import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title:
    "Közterület-használati engedély konténerhez Újpest — útmutató a IV. kerületben",
  description:
    "Mikor kell közterület-használati engedély a konténerhez Újpesten, és mikor nem? Útmutató a IV. kerületi engedélyhez — az ügyintézésben segítünk. ☎ +36 21 3355 255",
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
          <h1>Közterület-engedély konténerhez Újpesten</h1>
          <p className="lead">
            Ha a konténer közterületre kerül, engedély kell a IV. kerületi
            önkormányzattól. Összeszedtük, mikor kell, mikor nem, és hogyan
            intézzük helyetted — hogy se büntetés, se bosszúság ne legyen belőle.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mikor kell engedély?</h2>
          <p>
            Ha a konténer <b>közterületre</b> — járdára, úttestre, parkolósávba —
            kerül, <b>közterület-használati hozzájárulás</b> szükséges az
            újpesti (IV. kerületi) önkormányzattól. Ez a lakótelepi részeken
            gyakori, például <b>Káposztásmegyeren</b> vagy az{" "}
            <b>Újpest-központ</b> (Árpád út, István út) sűrű beépítésű utcáiban,
            ahol nincs elég hely a telken belül.
          </p>

          <h2>Mikor nem kell engedély?</h2>
          <p>
            Ha a konténer végig <b>saját telken, udvaron vagy a behajtón</b> áll,
            nincs szükség közterület-használati engedélyre. Ez a kertes részeken —
            <b> Megyer</b>, <b>Istvántelek</b> — a gyakoribb, ahol a konténer
            elfér a kapun belül.
          </p>

          <h2>Hogyan intézzük?</h2>
          <ul>
            <li>
              Már a <b>telefonban megbeszéljük</b>, hova kerülne a konténer, és
              kell-e hozzá engedély.
            </li>
            <li>
              Ha kell, <b>segítünk a IV. kerületi önkormányzati
              ügyintézésben</b> és a szükséges adatok összeállításában.
            </li>
            <li>
              A konténert úgy helyezzük el, hogy megfeleljen az engedélyben
              foglaltaknak.
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
              Ha van rá mód, a konténert inkább <b>saját területre</b> tesszük —
              az gyorsabb és olcsóbb, mert nem kell engedély.
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
