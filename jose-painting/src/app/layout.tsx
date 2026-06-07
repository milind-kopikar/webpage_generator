import type { Metadata, Viewport } from "next";
import { Cabin, Old_Standard_TT } from "next/font/google";
import "./globals.css";
import { business } from "@/content/business";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  display: "swap",
});

const oldStandard = Old_Standard_TT({
  variable: "--font-old-standard",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const description = `${business.name} provides professional interior, exterior, cabinet, and commercial painting across ${business.serviceArea}. Trusted by homeowners and businesses for over ${business.yearsInBusiness} years. Free estimates.`;

export const metadata: Metadata = {
  title: {
    default: `${business.name} — Professional Painters in ${business.serviceArea}`,
    template: `%s | ${business.name}`,
  },
  description,
  keywords: [
    "painting",
    "house painters",
    "interior painting",
    "exterior painting",
    "cabinet refinishing",
    business.serviceArea,
  ],
  openGraph: {
    title: `${business.name} — Professional Painters`,
    description,
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1f3a57",
  width: "device-width",
  initialScale: 1,
};

/** Structured data so search engines understand this is a local business. */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  description,
  telephone: business.phoneHref,
  email: business.email,
  areaServed: business.serviceArea,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "US",
  },
  openingHours: business.hours
    .filter((h) => !/closed/i.test(h.hours))
    .map((h) => `${h.days} ${h.hours}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cabin.variable} ${oldStandard.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
