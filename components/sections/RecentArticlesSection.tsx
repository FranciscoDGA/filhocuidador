import Link from "next/link";

const articlesByCategory = {
  "Saúde Emocional": [
    { id: 1, slug: "reconhecendo-burnout-cuidador", title: "Reconhecendo o Burnout", date: "17 jul" },
    { id: 2, slug: "auto-cuidado-essencial", title: "Auto-cuidado Essencial", date: "15 jul" },
    { id: 3, slug: "ansiedade-cuidadores", title: "Ansiedade em Cuidadores", date: "12 jul" },
    { id: 4, slug: "meditacao-pratica", title: "Meditação na Prática", date: "10 jul" },
  ],
  "Jurídico & Financeiro": [
    { id: 5, slug: "bpc-loas-guia-completo", title: "BPC - Guia Completo 2024", date: "20 jul" },
    { id: 6, slug: "aposentadoria-cuidador", title: "Aposentadoria do Cuidador", date: "18 jul" },
    { id: 7, slug: "direitos-trabalhistas", title: "Direitos Trabalhistas", date: "16 jul" },
    { id: 8, slug: "pensao-viuvez", title: "Pensão por Viuvez", date: "14 jul" },
  ],
  "Família": [
    { id: 9, slug: "comunicacao-irmaos-nao-ajudam", title: "Quando o Irmão Não Quer Ajudar", date: "10 ago" },
    { id: 10, slug: "conflitos-familiares", title: "Conflitos Familiares", date: "8 ago" },
    { id: 11, slug: "limites-saudaveis", title: "Limites Saudáveis", date: "6 ago" },
    { id: 12, slug: "conversas-dificeis", title: "Conversas Difíceis", date: "4 ago" },
  ],
  "Cuidados Práticos": [
    { id: 13, slug: "higiene-pessoal", title: "Higiene Pessoal do Idoso", date: "2 ago" },
    { id: 14, slug: "medicamentos", title: "Gerenciamento de Medicamentos", date: "31 jul" },
    { id: 15, slug: "mobilidade", title: "Técnicas de Mobilização", date: "29 jul" },
    { id: 16, slug: "alimentacao", title: "Nutrição Adequada", date: "27 jul" },
  ],
};

const categoryBgColors: { [key: string]: string } = {
  "Saúde Emocional": "bg-blue-50",
  "Jurídico & Financeiro": "bg-green-50",
  "Família": "bg-amber-50",
  "Cuidados Práticos": "bg-purple-50",
};

const categoryBorderColors: { [key: string]: string } = {
  "Saúde Emocional": "border-blue-300",
  "Jurídico & Financeiro": "border-green-300",
  "Família": "border-amber-300",
  "Cuidados Práticos": "border-purple-300",
};

export default function RecentArticlesSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {Object.entries(articlesByCategory).map(([category, articles]) => (
          <div key={category} className={`py-16 border-b border-gray-200 last:border-b-0`}>
            {/* Category Header */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">{category}</h3>
              <Link
                href={`/${category.toLowerCase().replace(/\s+/g, "-").replace("&", "e")}`}
                className="text-brand-primary font-medium hover:underline text-sm"
              >
                Ver todos →
              </Link>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {articles.map((article) => (
                <Link key={article.id} href={`/artigos/${article.slug}`}>
                  <div className="group cursor-pointer">
                    {/* Thumbnail */}
                    <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded mb-4 overflow-hidden flex items-center justify-center group-hover:shadow-md transition">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>

                    {/* Content */}
                    <h4 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand-primary transition">
                      {article.title}
                    </h4>
                    <p className="text-xs text-gray-600">{article.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
