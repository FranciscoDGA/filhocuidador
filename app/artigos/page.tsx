import Layout from "@/components/layout/Layout";
import ArticleCard from "@/components/blog/ArticleCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artigos | Filho Cuidador",
  description: "Leia nossos artigos sobre saúde emocional, cuidados práticos, jurídico e financeiro para cuidadores familiares.",
};

const categories = [
  { label: "Todos", slug: null },
  { label: "Saúde Emocional", slug: "saude-emocional" },
  { label: "Cuidados Práticos", slug: "cuidados-praticos" },
  { label: "Jurídico & Financeiro", slug: "juridico" },
  { label: "Doenças", slug: "doencas" },
  { label: "Família", slug: "familia" },
];

export default function ArtigosPage() {
  const articles = [
    {
      slug: "reconhecendo-burnout-cuidador",
      title: "Reconhecendo o Burnout do Cuidador",
      excerpt: "Sinais de alerta para quando você está no limite. E sim, sua exaustão é legítima.",
      category: "Saúde Emocional",
      readTime: 8,
      date: "17 de julho, 2024",
    },
    {
      slug: "bpc-loas-guia-completo",
      title: "BPC (Benefício de Prestação Continuada): Guia Completo 2024",
      excerpt: "Como solicitar o BPC, quem tem direito, documentos necessários e passo a passo.",
      category: "Jurídico & Financeiro",
      readTime: 12,
      date: "20 de julho, 2024",
    },
    {
      slug: "procuracao-idoso-modelo-passo-passo",
      title: "Procuração de Idoso: Modelo e Passo a Passo",
      excerpt: "Como fazer procuração para que você possa resolver problemas legais e financeiros.",
      category: "Jurídico & Financeiro",
      readTime: 10,
      date: "21 de julho, 2024",
    },
    {
      slug: "culpa-raiva-exaustao-normal-sentir",
      title: "Culpa, Raiva e Exaustão: É Normal Sentir Isso?",
      excerpt: "A culpa de estar cansado, a raiva de irmãos que não ajudam, a exaustão sem fim.",
      category: "Saúde Emocional",
      readTime: 8,
      date: "23 de julho, 2024",
    },
    {
      slug: "cuidar-de-si-mesmo-enquanto-cuida-outro",
      title: "Cuidar de Si Mesmo Enquanto Cuida de Outro",
      excerpt: "Autocuidado não é luxo. É o combustível que mantém você funcionando.",
      category: "Saúde Emocional",
      readTime: 10,
      date: "24 de julho, 2024",
    },
    {
      slug: "prevencao-quedas-casa-guia-pratico",
      title: "Prevenção de Quedas em Casa: Guia Prático",
      excerpt: "Transforme sua casa numa fortaleza de segurança. Checklist prático e custo-efetivo.",
      category: "Cuidados Práticos",
      readTime: 11,
      date: "25 de julho, 2024",
    },
    {
      slug: "interdicao-vs-curatela-qual-usar",
      title: "Interdição vs Curatela: Qual Usar?",
      excerpt: "Quando seu pai não consegue mais assinar documentos. Qual é a diferença.",
      category: "Jurídico & Financeiro",
      readTime: 11,
      date: "26 de julho, 2024",
    },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Artigos</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Conteúdo acolhedor e prático para filhos que cuidam de pais idosos.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="mb-16 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.slug || "all"}
              className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Nenhum artigo encontrado. Volte em breve!
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
