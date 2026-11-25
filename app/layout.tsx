import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getSearchIndex } from "@/lib/articles";
import { CATEGORIES } from "@/lib/categories";
import { getSiteUrl, SITE_INFO } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: `${SITE_INFO.name} | Orientação para Cuidadores Familiares`,
    template: `%s`,
  },
  description: SITE_INFO.description,
  keywords: [
    "cuidador familiar",
    "pessoa idosa",
    "Alzheimer",
    "Parkinson",
    "cuidados com idosos",
    "BPC LOAS",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_INFO.name,
    description: SITE_INFO.tagline,
    type: "website",
    url: "/",
    locale: "pt_BR",
    siteName: SITE_INFO.name,
  },
};

const THEME_INIT_SCRIPT = `(function(){try{var k='filho-cuidador-theme';var s=localStorage.getItem(k);var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var r=document.documentElement;r.dataset.theme=d?'dark':'light';r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchIndex = getSearchIndex();

  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col bg-surface-page text-ink-body font-sans">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-brand-primary focus:text-surface-card focus:text-sm focus:font-semibold focus:shadow-lg"
        >
          Pular para o conteúdo principal
        </a>
        <Header searchIndex={searchIndex} categories={CATEGORIES} />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
