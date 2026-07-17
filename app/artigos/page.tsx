import Layout from "@/components/layout/Layout";
import ArticleCard from "@/components/blog/ArticleCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artigos | Filho Cuidador",
  description: "Leia nossos artigos sobre saúde emocional, cuidados práticos, jurídico e financeiro para cuidadores familiares.",
};

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
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-4">Artigos</h1>
        <p className="text-xl text-gray-600 mb-12">
          Conteúdo acolhedor e prático para você que cuida.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Todos
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Saúde Emocional
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Cuidados Práticos
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Jurídico & Financeiro
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Doenças
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>

        {/* Empty State Message */}
        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Nenhum artigo encontrado. Volte em breve!
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
