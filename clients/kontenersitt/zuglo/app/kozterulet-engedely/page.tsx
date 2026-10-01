import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";

// FIGYELEM: a kerületi rendeletek díjtételei és határidői ÉVENTE változnak.
// Az alábbi adatok 2026-10-01-én, a hivatkozott hivatalos oldalakon ellenőrizve.
// Évente egyszer át kell nézni, és a hivatkozásokat is újra meg kell nyitni.
// 2026-10-01 (Tamás kérése): a cég NEM vállalja az engedély ügyintézését —
// ez az oldal útmutató, nem szolgáltatás-ígéret.
export const metadata: Metadata = {
  title:
    "Közterület-használati engedély konténerhez Zugló — hol igényelje, 14. kerület",
  description:
    "Kell-e engedély a konténerhez Zuglóban, hol kell igényelni, mennyi idő és mennyibe kerül? Útmutató a 14. kerületi közterület-használathoz, hivatalos linkekkel. ☎ +36 21 3355 222",
  alternates: { canonical: "/kozterulet-engedely" },
};

export default function EngedelyPage() {
  return (
    <main>
      <header className="subhero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Közterület-engedély</span>
          </div>
          <span className="k">Közterület-engedély · XIV. kerület</span>
          <h1>Közterület-engedély konténerhez Zuglóban</h1>
          <p className="lead">
            Ha a konténer közterületre kerül, a zuglói önkormányzat
            engedélye kell hozzá. Összeszedtük, mikor kell, mikor nem, és hol
            tudja pár perc alatt elindítani a kérelmet.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Mikor kell engedély?</h2>
          <p>
            Ha a konténer <b>közterületre</b> — járdára, úttestre, parkolósávba,
            zöldsávba — kerül, <b>közterület-használati hozzájárulás</b>{" "}
            szükséges a XIV. kerületi önkormányzattól. Ez a tipikus eset a
            sűrűn beépített, kevés parkolóhelyes utcákban, például a{" "}
            <b>Füredi úti lakótelep</b> vagy a <b>Bosnyák tér</b> környékén.
          </p>

          <h2>Mikor nem kell?</h2>
          <p>
            Ha a konténer végig <b>saját telken, udvaron vagy a munkaterületen
            belül</b> áll, nem kell engedély. Ez a tipikus a kertes utcákban —{" "}
            <b>Alsórákos</b>, <b>Rákosfalva</b>, <b>Nagyzugló</b> —, ahol az
            udvarban vagy a behajtón is elfér a konténer.
          </p>
          <p>
            Van egy másik eset is: a zuglói rendelet szerint{" "}
            <b>24 óránál rövidebb</b> kihelyezéshez nem kell hozzájárulás, de a
            szándékot <b>legkésőbb az előző naptári napon</b> be kell jelenteni
            a közterület tulajdonosánál. Ha tehát reggel kihozzuk és estére
            elvisszük a konténert, elég a bejelentés.
          </p>

          <h2>Hol igényelje Zuglóban?</h2>
          <p>
            A kérelmet a <b>Zuglói Polgármesteri Hivatalhoz</b> kell benyújtani.
            Az ügy leírása és a letölthető kérelem itt található:
          </p>
          <ul>
            <li>
              <a href="https://www.zuglo.hu/kozterulet-hasznalat/" target="_blank" rel="noopener noreferrer">
                zuglo.hu — Közterület-használat
              </a>{" "}
              (ügyleírás, feltételek)
            </li>
            <li>
              <a href="https://www.zuglo.hu/ugyfelszolgalaton-intezheto-ugyek/" target="_blank" rel="noopener noreferrer">
                zuglo.hu — Ügyfélszolgálaton intézhető ügyek
              </a>{" "}
              (innen tölthető le a kérelem nyomtatvány)
            </li>
          </ul>
          <table className="ptable">
            <tbody>
              <tr>
                <td>
                  <b>Illeték</b>
                </td>
                <td>Nincs — az eljárás illeték- és díjmentes</td>
              </tr>
              <tr>
                <td>
                  <b>Mikor adja be?</b>
                </td>
                <td>
                  Legkésőbb <b>8 nappal</b> a kezdés előtt, ha a használat
                  legfeljebb 30 nap és 50 m² (a konténer ilyen). Egyébként 45
                  nappal korábban.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Hogyan?</b>
                </td>
                <td>
                  Jogi személyként <b>kizárólag e-papíron</b> (epapir.gov.hu).
                  Magánszemélyként személyesen a Bácskai utcai
                  ügyfélszolgálaton, vagy postán: 1145 Budapest, Pétervárad utca
                  2.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Díj</b>
                </td>
                <td>
                  Övezettől függően <b>400–700 Ft/m²/nap</b> (nettó) a
                  törmeléktároló konténerre. Fizető parkolóhelyen plusz
                  parkolási díj.
                </td>
              </tr>
              <tr>
                <td>
                  <b>Ügyintézési idő</b>
                </td>
                <td>45 nap, de a rövid használatot ennél gyorsabban elbírálják</td>
              </tr>
            </tbody>
          </table>

          <h2>Miben segítünk mi?</h2>
          <p>
            Őszintén: <b>az engedélyt nem tudjuk Ön helyett elintézni.</b> A
            kérelmet az ingatlan tulajdonosa vagy használója nyújtja be, és az
            ügyintézés napokig tart — a konténerre pedig általában hamarabb
            szükség van. Amiben viszont segítünk:
          </p>
          <ul>
            <li>
              Telefonon <b>megmondjuk, kell-e egyáltalán engedély</b> oda, ahova
              a konténert szánja.
            </li>
            <li>
              Megmondjuk, <b>mekkora helyet foglal</b> a választott konténer, és
              hány napra érdemes kérni — ezek az adatok kellenek a kérelembe.
            </li>
            <li>
              A konténert <b>az engedélyben szereplő helyre és időben</b> tesszük
              le, és a lejárat előtt elvisszük.
            </li>
            <li>
              Ha nincs idő az engedélyre, együtt megkeressük, <b>hol fér el
              magánterületen</b> — udvarban, behajtón, a telken belül.
            </li>
          </ul>

          <h2>Jó, ha tudja</h2>
          <ul>
            <li>
              Engedély nélküli közterület-használatért <b>bírság</b> járhat, és
              a konténert el is szállíttathatják — ezt egy kis tervezéssel
              könnyű elkerülni.
            </li>
            <li>
              Meddig maradhat kint a konténer? Közterületen azt az{" "}
              <b>engedély időtartama</b> szabja meg, nem a mi egy hetünk.
            </li>
            <li>
              Ha van rá mód, tegye a konténert <b>magánterületre</b> — az
              gyorsabb és olcsóbb, mert nem kell hozzá engedély.
            </li>
          </ul>

          <p className="muted-note">
            Az itt szereplő adatok tájékoztató jellegűek, 2026 októberi
            állapot szerint. A kerületi rendeletek és díjak évente változnak,
            ezért indulás előtt mindig ellenőrizze a hivatkozott hivatalos
            oldalon.
          </p>

          <p>
            Ha megvan a hely, nézze meg a{" "}
            <Link href="/sittszallitas">sittszállítás</Link> és a{" "}
            <Link href="/lomtalanitas-zoldhulladek">
              lomtalanítás · zöldhulladék
            </Link>{" "}
            részleteit, vagy kérjen árat az <Link href="/arak">Árak</Link>{" "}
            oldalon.
          </p>

          <CtaBand text="Nem biztos benne, kell-e engedély? Hívjon — megmondjuk, és segítünk megtalálni a konténer helyét." />
        </div>
      </section>
    </main>
  );
}
