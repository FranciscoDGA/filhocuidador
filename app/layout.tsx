import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
    default: "Filho Cuidador | O portal para quem cuida de pais com demência",
    template: "%s | Filho Cuidador",
  },
  description: "O único portal brasileiro que fala com filhos que cuidam de pais com Alzheimer, Parkinson, AVC e outras demências. Informação, acolhimento e orientação prática.",
  keywords: [
    "cuidador de idoso",
    "filho cuidador",
    "Alzheimer",
    "Parkinson",
    "demência",
    "cuidados com idosos",
    "burnout cuidador",
    "procuração idoso",
    "BPC idoso",
    "como cuidar de pai com Alzheimer",
  ],
  authors: [{ name: "Filho Cuidador" }],
  creator: "Filho Cuidador",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://filhocuidador.com.br",
    siteName: "Filho Cuidador",
    title: "Filho Cuidador | O portal para quem cuida de pais com demência",
    description: "Informação, acolhimento e orientação prática para filhos que cuidam de pais com Alzheimer, Parkinson, AVC e outras doenças.",
    images: [
      {
        url: "https://filhocuidador.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Filho Cuidador - Portal de acolhimento para cuidadores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Filho Cuidador | O portal para quem cuida de pais com demência",
    description: "Informação, acolhimento e orientação prática para filhos que cuidam de pais com Alzheimer, Parkinson, AVC e outras doenças.",
    images: ["https://filhocuidador.com.br/og-image.jpg"],
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
    canonical: "https://filhocuidador.com.br",
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
        <link rel="canonical" href="https://filhocuidador.com.br" />
      </head>
      <body className="min-h-full flex flex-col bg-bg-base text-text-base font-body selection:bg-brand-primary selection:text-white">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
