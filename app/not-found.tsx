import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary mb-4 block">
          Erro 404
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-medium text-brand-primary mb-6">
          Página não encontrada
        </h1>
        <p className="text-base text-brand-secondary leading-relaxed mb-8 max-w-lg mx-auto">
          O conteúdo que você procura não existe ou foi movido. Que tal explorar nossos artigos mais populares?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          {[
            { slug: "alzheimer-guia-pratico-cuidador", title: "Guia Prático do Alzheimer" },
            { slug: "burnout-cuidador-sinais-alerta", title: "Burnout do Cuidador" },
            { slug: "bpc-loas-guia-completo", title: "Guia BPC/LOAS" },
            { slug: "procuracao-idoso-modelo-passo-passo", title: "Como Fazer Procuração" },
            { slug: "higiene-banho-seguro-idoso", title: "Banho Seguro no Idoso" },
            { slug: "prevencao-quedas-casa-guia-pratico", title: "Prevenção de Quedas" },
          ].map((article) => (
            <Link
              key={article.slug}
              href={`/artigos/${article.slug}`}
              className="bg-white border border-border-base p-5 rounded-[5px] hover:border-brand-accent/40 transition-colors text-left"
            >
              <h2 className="text-sm font-display font-medium text-brand-primary hover:text-brand-accent transition-colors">
                {article.title}
              </h2>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-block px-8 py-3 bg-brand-primary text-white text-[13px] font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors rounded-[5px]"
        >
          Voltar ao Início
        </Link>
      </div>
    </main>
  );
}
