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
    name: "gábor acsai",
    text: "Nagyon jokepuek a szallito kollegak gyorsak precizek csak ajanlani tudom oket",
  },
  {
    name: "János Sajti",
    text: "Meg vagyok elégedve a szolgáltatással",
  },
  {
    name: "Zsuzsanna Sajti",
    text: "Precizen végezte a munkáját csak ajánlani tudom",
  },
];

/** A cégprofil a Google Térképen — a „több vélemény” link ide mutat. */
export const googleProfileUrl =
  "https://www.google.com/maps/place/?q=place_id:ChIJD13NnpAW-yERlCRtnsMvAak";

export const googleRating = "5,0";
export const googleReviewCount = 62;
