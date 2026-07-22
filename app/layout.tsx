import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingSpecialistButton from "@/components/FloatingSpecialistButton";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Filhos Cuidadores | O portal para quem cuida de pais com demência",
    template: "%s | Filhos Cuidadores",
  },
  description: "O único portal brasileiro que fala com filhos que cuidam de pais com Alzheimer, Parkinson, AVC e outras demências. Informação, acolhimento e orientação prática.",
  keywords: [
    "cuidador de idoso",
    "filho cuidador",
    "filhos cuidadores",
    "Alzheimer",
    "Parkinson",
    "demência",
    "cuidados com idosos",
    "burnout cuidador",
    "procuração idoso",
    "BPC idoso",
    "como cuidar de pai com Alzheimer",
  ],
  authors: [{ name: "Filhos Cuidadores" }],
  creator: "Filhos Cuidadores",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://filhocuidador.vercel.app",
    siteName: "Filhos Cuidadores",
    title: "Filhos Cuidadores | O portal para quem cuida de pais com demência",
    description: "Informação, acolhimento e orientação prática para filhos que cuidam de pais com Alzheimer, Parkinson, AVC e outras doenças.",
    images: [
      {
        url: "https://filhocuidador.vercel.app/api/og?title=Filhos+Cuidadores&category=Portal",
        width: 1200,
        height: 630,
        alt: "Filhos Cuidadores - Portal de acolhimento para cuidadores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Filhos Cuidadores | O portal para quem cuida de pais com demência",
    description: "Informação, acolhimento e orientação prática para filhos que cuidam de pais com Alzheimer, Parkinson, AVC e outras doenças.",
    images: ["https://filhocuidador.vercel.app/api/og?title=Filhos+Cuidadores&category=Portal"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://filhocuidador.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="qH9gltE4Lk1p5ONSBCSMwkXGR9eqixIDruwOJLPqlZQ" />
      </head>
      <body className="min-h-full flex flex-col bg-bg-base text-text-base font-body selection:bg-brand-primary selection:text-white">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <FloatingSpecialistButton />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
