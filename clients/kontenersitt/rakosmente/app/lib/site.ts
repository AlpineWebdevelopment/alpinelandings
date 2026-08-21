// Kerület-specifikus központi adatok — Rákosmente (XVII. kerület).
// m³-ár Tamás által megerősítve (2026-08-06): XVII. Rákosmente 9.375 Ft/m³-tól.
export const site = {
  district: "Rákosmente",
  districtNo: "XVII.",
  domain: "https://kontenerrendelesrakosmente.hu",
  phoneDisplay: "+36 21 3355 211",
  phoneHref: "+36213355211",
  email: "info@kontenersitt.hu",
  address: "1172 Budapest, Vidor utca 7.",
  droppOffPrice: "12.700 Ft (bruttó)",
  m3Price: "9.375 Ft/m³-tól",
  hoursWeekday: "H–P: 7:00–20:00",
  hoursSat: "Szo: 7:00–18:00",
  hoursSun: "V: zárva",
  // Az űrlap-beküldések a /api/lead route-on át, Resenddel mennek a
  // diszpecser@kontenersitt.hu címre (env: RESEND_API_KEY, LEAD_TO, LEAD_FROM).
} as const;
