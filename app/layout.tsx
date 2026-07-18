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
  title: "Filho Cuidador | Você não está sozinho nessa",
  description: "Portal de informação, acolhimento e orientação prática para filhos que cuidam de pais idosos com doenças neurodegenerativas e crônicas.",
  keywords: ["cuidador", "idoso", "Alzheimer", "Parkinson", "demência", "cuidados"],
  openGraph: {
    title: "Filho Cuidador",
    description: "Você não está sozinho nessa",
    type: "website",
    url: "https://filhocuidador.com.br",
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
      <body className="min-h-full flex flex-col bg-bg-base text-text-base font-body selection:bg-brand-secondary selection:text-white">
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
