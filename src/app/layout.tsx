import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://koloursclinic.in"),
  title: "Kolours Clinic | Best Skin Care & Aesthetic Clinic in Chennai",
  description: "Reveal healthy, radiant, and confident skin at Kolours Clinic, Chennai. Specializing in advanced acne treatments, scar reduction, anti-aging solutions, laser treatments, and expert dermatological care led by top skin specialists.",
  keywords: [
    "Skin Care Clinic Chennai",
    "Dermatologist Chennai",
    "Acne Treatment Chennai",
    "Pigmentation Treatment Chennai",
    "Laser Skin Clinic Chennai",
    "Anti Aging Treatment Chennai",
    "Skin Specialist Chennai",
    "Aesthetic Clinic Chennai",
    "Acne Scar Treatment Chennai",
  ],
  authors: [{ name: "Kolours Clinic" }],
  openGraph: {
    title: "Kolours Clinic | Best Skin Care & Aesthetic Clinic in Chennai",
    description: "Experience luxury skincare treatments and advanced dermatology care. Reveal healthy, radiant, and confident skin with Chennai's leading skin specialists.",
    url: "https://koloursclinic.in",
    siteName: "Kolours Clinic",
    images: [
      {
        url: "/images/hero_model.png",
        width: 1200,
        height: 630,
        alt: "Kolours Clinic Chennai - Reveal Healthy & Radiant Skin",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolours Clinic | Skin Care & Aesthetic Clinic in Chennai",
    description: "Advanced dermatological treatments, modern technology, and personalized skincare solutions in Chennai.",
    images: ["/images/hero_model.png"],
  },
  alternates: {
    canonical: "https://koloursclinic.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Dermatology",
    "name": "Kolours Clinic",
    "image": "https://koloursclinic.in/images/hero_model.png",
    "@id": "https://koloursclinic.in/#clinic",
    "url": "https://koloursclinic.in",
    "telephone": "+919876543210",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12, Khader Nawaz Khan Road, Nungambakkam",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600006",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0612,
      "longitude": 80.2515
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:00"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919876543210",
      "contactType": "reservations",
      "areaServed": "IN",
      "availableLanguage": ["en", "ta"]
    },
    "sameAs": [
      "https://www.facebook.com/koloursclinic",
      "https://www.instagram.com/koloursclinic"
    ]
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${outfit.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-clinic text-text-clinic">
        {children}
      </body>
    </html>
  );
}
