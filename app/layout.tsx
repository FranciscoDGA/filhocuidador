import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Filho Cuidador | Orientação para Cuidadores Familiares",
  description: "Portal de informação, acolhimento e orientação prática para filhos que cuidam de pais idosos com doenças neurodegenerativas e crônicas.",
  keywords: ["cuidador", "idoso", "Alzheimer", "Parkinson", "demência", "cuidados"],
  openGraph: {
    title: "Filho Cuidador",
    description: "O único portal que fala COM você, não SOBRE seu pai",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
