import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ferramentas Gratuitas para Cuidadores | Filhos Cuidadores",
  description: "Quiz de burnout, checklist de diagnóstico, calculadora de custos e mais ferramentas gratuitas para cuidadores de idosos.",
  alternates: {
    canonical: "https://filhocuidador.vercel.app/ferramentas",
  },
  openGraph: {
    title: "Ferramentas Gratuitas para Cuidadores | Filhos Cuidadores",
    description: "Quiz de burnout, checklist de diagnóstico, calculadora de custos e mais.",
    url: "https://filhocuidador.vercel.app/ferramentas",
    siteName: "Filhos Cuidadores",
    locale: "pt_BR",
    type: "website",
  },
};

export default function FerramentasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
