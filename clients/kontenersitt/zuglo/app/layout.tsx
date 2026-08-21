import type { Metadata } from "next";
import { Saira, Saira_Condensed } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import CookieConsent from "./components/CookieConsent";
import PhoneTracking from "./components/PhoneTracking";

// Display: kondenzált, nehéz — plakátos, ipari karakter (hero, címsorok, gombok, számok)
const display = Saira_Condensed({
  subsets: ["latin", "latin-ext"],
  weight: "800",
  variable: "--font-display",
  display: "swap",
});

// Body: normál szélességű Saira — kohézív szupercsalád, jó olvashatóság
const body = Saira({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kontenerrendeleszuglo.hu"),
  title: "Konténer rendelés Zugló — sittszállítás a XIV. kerületben | 4–8 m³",
  description:
    "Konténer rendelés Zuglóban akár aznapi kiszállítással: sitt, lom és vegyes hulladék elszállítása a XIV. kerület minden városrészébe — Alsórákos, Herminamező, Rákosfalva, Törökőr. 4–8 m³ konténerek. ☎ +36 21 3355 222",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://kontenerrendeleszuglo.hu/",
    title: "Konténer rendelés Zugló — sittszállítás a XIV. kerületben",
    description:
      "4–8 m³ konténerek sitthez, lomhoz, vegyes hulladékhoz Zugló minden városrészébe. Gyors kiszállítás, engedély-ügyintézés. Hívjon: +36 21 3355 222",
  },
};

const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Konténer Rendelés Zugló",
  description:
    "Konténeres sittszállítás, lomtalanítás és hulladékszállítás Zuglóban (Budapest XIV. kerület). 4–8 m³ konténerek gyors kiszállítással Alsórákos, Herminamező, Istvánmező, Kiszugló, Nagyzugló, Rákosfalva és Törökőr területén.",
  url: "https://kontenerrendeleszuglo.hu/",
  telephone: "+36213355222",
  email: "info@kontenersitt.hu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vidor utca 7.",
    addressLocality: "Budapest",
    postalCode: "1172",
    addressCountry: "HU",
  },
  areaServed: [
    { "@type": "Place", name: "Zugló (Budapest XIV. kerület)" },
    { "@type": "Place", name: "Alsórákos" },
    { "@type": "Place", name: "Herminamező" },
    { "@type": "Place", name: "Istvánmező" },
    { "@type": "Place", name: "Kiszugló" },
    { "@type": "Place", name: "Nagyzugló" },
    { "@type": "Place", name: "Rákosfalva" },
    { "@type": "Place", name: "Törökőr" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <CookieConsent />
        <PhoneTracking />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
      </body>
    </html>
  );
}
