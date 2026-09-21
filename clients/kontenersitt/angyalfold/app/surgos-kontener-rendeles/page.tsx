import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "../components/CtaBand";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Sürgős konténer rendelés Angyalföld — akár pár órán belül, szombaton is",
  description:
    "Sürgősen kell konténer a 13. kerületben? Szabad kapacitás esetén akár pár órán belül kiszállítjuk, szombaton is 7 és 18 óra között. Telt konténer cseréje 24 órán belül. ☎ +36 21 3355 233",
  alternates: { canonical: "/surgos-kontener-rendeles" },
};

export default function SurgosPage() {
  return (
    <main>
      <header className="subhead">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Főoldal</Link>
            <span>/</span>
            <span>Sürgős konténer</span>
          </div>
          <h1>Sürgős konténer rendelés Angyalföldön</h1>
          <p className="lead">
            Holnap kezdenek a mesterek, és még nincs konténer? Sürgős esetben
            akár pár órán belül kiszállítunk a XIII. kerületbe — szombaton is.
          </p>
        </div>
      </header>

      <section className="article">
        <div className="wrap prose">
          <h2>Milyen gyorsan tudunk kiérni?</h2>
          <p>
            Nagy flottával dolgozunk — <b>30 autóval és mintegy 2000
            konténerrel</b> —, ezért sürgős esetben, ha van szabad autó, a
            konténert <b>akár pár órán belül</b> kiszállítjuk. Általános esetben
            a kiszállítás <b>24 órán belül</b> megtörténik. A pontos időpontot
            telefonon azonnal megmondjuk, nem kell visszahívásra várnia.
          </p>

          <h2>Mikor hívjon?</h2>
          <ul>
            <li>
              <b>Hétköznap:</b> {site.hoursWeekday.replace("H–P: ", "")}
            </li>
            <li>
              <b>Szombaton:</b> {site.hoursSat.replace("Szo: ", "")}
            </li>
            <li>
              <b>Vasárnap:</b> zárva — a hétfői munkához érdemes már szombaton
              rendelni
            </li>
          </ul>
          <p>
            Minél korábban hív a nap folyamán, annál nagyobb az esély, hogy még
            aznap ki tudunk érni.
          </p>

          <h2>Tipikus sürgős helyzetek Angyalföldön</h2>
          <ul>
            <li>
              Beázás vagy csőtörés után azonnal bontani kell egy{" "}
              <b>Gyöngyösi-lakótelepi</b> vagy <b>Béke téri</b> lakásban
            </li>
            <li>
              Lejár a bérleti szerződés, és ki kell üríteni egy{" "}
              <b>újlipótvárosi</b> bérházi lakást
            </li>
            <li>A felújítás a vártnál gyorsabban halad, és betelt a konténer</li>
            <li>
              Egy üzlethelyiséget határidőre kell átadni a törmeléktől
              megtisztítva
            </li>
          </ul>

          <h2>Sürgős esetben figyeljen a közterület-engedélyre</h2>
          <p>
            Angyalföld sűrűn beépített kerület, és ha a konténer csak az
            utcára, közterületre kerülhet, ahhoz{" "}
            <Link href="/kozterulet-engedely">közterület-engedély</Link> kell.
            Ennek beszerzése időt vesz igénybe, ezért sürgős munkánál érdemes a
            konténert — ha lehetséges — <b>magánterületre</b>, például belső
            udvarra vagy a társasház parkolójába kérni. Telefonon segítünk
            eldönteni, hol fér el.
          </p>

          <h2>A csere is gyors</h2>
          <p>
            Ha a konténer megtelik, <b>24 órán belül cseréljük</b> egy üresre, és
            addig is <b>akár 1 hétig felár nélkül</b> kint maradhat. Így a
            munka nem áll le amiatt, hogy nincs hova pakolni.
          </p>

          <p>
            Az árakért lásd az <Link href="/arak">Árak</Link> oldalt, a bontási
            törmelékről pedig a{" "}
            <Link href="/sittszallitas">sittszállítás</Link> oldalt.
          </p>

          <CtaBand text="Sürgős? Hívjon most — azonnal megmondjuk, mikor tudunk kiérni." />
        </div>
      </section>
    </main>
  );
}
