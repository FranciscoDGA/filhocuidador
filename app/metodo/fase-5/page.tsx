import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fase 5: Aspectos Jurídicos e Financeiros - Método Filho Cuidador",
  description: "Proteja sua família. Entenda seus direitos, benefícios, procuração, curatela e como organizar as finanças do cuidado.",
};

const tools = [
  {
    type: "Guia",
    name: "Direitos do Cuidador de Idoso no Brasil",
    href: "/artigos/direitos-idoso-estatuto-lei",
  },
  {
    type: "Calculadora",
    name: "Quanto Custa Cuidar de um Idoso?",
    href: "/ferramentas/calculadora-custos",
  },
  {
    type: "Template",
    name: "Modelo de Procuração",
    href: "/templates/modelo-procuracao.html",
    target: "_blank",
  },
];

const relatedArticles = [
  { slug: "direitos-idoso-estatuto-lei", label: "Direitos do Idoso" },
  { slug: "bpc-loas-guia-completo", label: "BPC e LOAS" },
  { slug: "procuracao-idoso-modelo-passo-passo", label: "Modelo de Procuração" },
];

export default function Fase5Page() {
  return (
    <main className="bg-bg-base min-h-screen">
      {/* Hero */}
      <section className="bg-brand-primary text-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/metodo"
              className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/50 hover:text-white/80 transition-colors mb-8 block"
            >
              ← Método Filho Cuidador
            </Link>
            <div className="inline-flex w-20 h-20 bg-purple-500 items-center justify-center text-white text-3xl font-display font-medium rounded-[5px] mb-8">
              05
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium mb-4 leading-tight">
              Aspectos Jurídicos e Financeiros
            </h1>
            <p className="text-base text-white/60 italic mb-6">
              Proteja sua família
            </p>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Entenda seus direitos, benefícios, procuração, curatela e como organizar as finanças do cuidado.
            </p>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-4">
              Ferramentas desta Fase
            </h2>
            <p className="text-sm text-brand-secondary leading-relaxed">
              Recursos para proteger você e sua família.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                target={tool.target}
                className="bg-white border border-border-base p-6 rounded-[5px] hover:border-brand-accent/40 transition-colors group"
              >
                <span className="text-[10px] font-medium tracking-wider uppercase text-brand-accent block mb-2">
                  {tool.type}
                </span>
                <span className="text-sm text-brand-primary font-medium leading-relaxed block group-hover:text-brand-accent transition-colors">
                  {tool.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 lg:py-20 bg-white border-y border-border-base">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-display font-medium text-brand-primary mb-4">
              Artigos Relacionados
            </h2>
            <p className="text-sm text-brand-secondary leading-relaxed">
              Leia mais sobre aspectos jurídicos e financeiros.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/artigos/${article.slug}`}
                className="text-sm text-brand-secondary hover:text-brand-primary border border-border-base px-5 py-2 rounded-[5px] transition-colors"
              >
                {article.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link
              href="/metodo/fase-4"
              className="px-6 py-3 border border-border-base text-brand-secondary text-[13px] font-medium tracking-wide uppercase hover:border-brand-accent/40 hover:text-brand-primary transition-colors rounded-[5px]"
            >
              ← Fase 4: Saúde do Cuidador
            </Link>
            <Link
              href="/metodo/certificado"
              className="px-6 py-3 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors rounded-[5px]"
            >
              Certificado →
            </Link>
          </div>
        </div>
      </section>

      {/* Back */}
      <div className="pb-12 text-center">
        <Link href="/" className="text-sm text-brand-secondary hover:text-brand-primary transition-colors">
          ← Voltar para o Filho Cuidador
        </Link>
      </div>
    </main>
  );
}
