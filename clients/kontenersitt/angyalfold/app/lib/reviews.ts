/**
 * Google-vélemények — a SZERVIZ-TRANS cégprofiljáról, szó szerint átvéve.
 *
 * FONTOS: a szövegeket nem szerkesztjük. Ami itt áll, az pontosan az, amit az
 * ügyfél a Google-on írt (a helyesírási hibákkal együtt) — az átírásuk
 * megtévesztő lenne, és a Google szabályzatába is ütközik.
 *
 * Szándékosan NINCS `aggregateRating` a JSON-LD-ben: a Google szerint ha a cég
 * maga kontrollálja a róla szóló véleményeket a saját oldalán, az „önkiszolgáló”
 * értékelésnek minősül, és nem jogosult a csillagos találatra. A blokk célja a
 * meggyőzés az oldalon, nem a keresési csillag.
 */
export type Review = {
  name: string;
  text: string;
  /** Avatar kép a /public-ból; ha nincs, a monogram kerül a helyére. */
  photo?: string;
};

export const reviews: Review[] = [
  {
    name: "Tamás Vitéz",
    text: "Gyors , pontos, precíz!",
    photo: "/velemeny-1.webp",
  },
  {
    name: "Daniel Olajos",
    text: "Pontos, megbízható és nagyon segítőkész szolgáltatás. A konténer időben érkezett, a sofőr udvarias és profi volt, minden gördülékenyen ment. Csak ajánlani tudom!",
    photo: "/velemeny-2.webp",
  },
  {
    name: "Szebasztián Varga",
    text: "Nagyon foncsi nagyon jo",
    photo: "/velemeny-3.webp",
  },
];

/** A cégprofil a Google Térképen — a „több vélemény” link ide mutat. */
export const googleProfileUrl =
  "https://maps.google.com/?cid=12178067384609612948";

export const googleRating = "5,0";
export const googleReviewCount = 63;
