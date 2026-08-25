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
    name: "Máté Zwick",
    text: "Nagyon segítőkész volt az úriember, nem problémázott!",
  },
  {
    name: "Pap Márton",
    text: "NEF sofôrje a legszebb",
  },
  {
    name: "Tutor Evelin",
    text: "Nagyon segítőkészek a kollégák, minden rendben volt!",
  },
];

/** A cégprofil a Google Térképen — a „több vélemény” link ide mutat. */
export const googleProfileUrl =
  "https://www.google.com/maps/place/?q=place_id:ChIJD13NnpAW-yERlCRtnsMvAak";

export const googleRating = "5,0";
export const googleReviewCount = 62;
