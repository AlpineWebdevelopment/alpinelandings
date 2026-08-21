// Kerület-specifikus központi adatok. A másik 4 oldalnál ezt a fájlt kell átírni.
export const site = {
  district: "Zugló",
  districtNo: "XIV.",
  domain: "https://kontenerrendeleszuglo.hu",
  phoneDisplay: "+36 21 3355 222",
  phoneHref: "+36213355222",
  email: "info@kontenersitt.hu",
  address: "1172 Budapest, Vidor utca 7.",
  droppOffPrice: "12.700 Ft (bruttó)",
  m3Price: "9.875 Ft/m³-tól",
  hoursWeekday: "H–P: 7:00–20:00",
  hoursSat: "Szo: 7:00–18:00",
  hoursSun: "V: zárva",
  // Az űrlap-beküldések a /api/lead route-on át, Resenddel mennek a
  // diszpecser@kontenersitt.hu címre (env: RESEND_API_KEY, LEAD_TO, LEAD_FROM).
} as const;
