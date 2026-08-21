// Kerület-specifikus központi adatok — Angyalföld (XIII. kerület).
export const site = {
  district: "Angyalföld",
  districtNo: "XIII.",
  domain: "https://kontenerrendelesangyalfold.hu",
  phoneDisplay: "+36 21 3355 233",
  phoneHref: "+36213355233",
  email: "info@kontenersitt.hu",
  address: "1172 Budapest, Vidor utca 7.",
  droppOffPrice: "12.700 Ft (bruttó)",
  m3Price: "10.250 Ft/m³-tól",
  hoursWeekday: "H–P: 7:00–20:00",
  hoursSat: "Szo: 7:00–18:00",
  hoursSun: "V: zárva",
  // Az űrlap-beküldések a /api/lead route-on át, Resenddel mennek a
  // diszpecser@kontenersitt.hu címre (env: RESEND_API_KEY, LEAD_TO, LEAD_FROM).
} as const;
