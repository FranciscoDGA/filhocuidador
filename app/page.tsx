import Link from "next/link";
import Layout from "@/components/layout/Layout";
import FeaturedArticle from "@/components/blog/FeaturedArticle";
import ArticleCard from "@/components/blog/ArticleCard";
import TrendingTopics from "@/components/blog/TrendingTopics";
import AuthorCard from "@/components/blog/AuthorCard";

export default function Home() {
  const trendingTopics = [
    { name: "Saúde Emocional", count: 12, slug: "saude-emocional" },
    { name: "Cuidados Práticos", count: 8, slug: "cuidados-praticos" },
    { name: "Jurídico", count: 5, slug: "juridico" },
    { name: "Alzheimer", count: 7, slug: "alzheimer" },
  ];

  const recentArticles = [
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
  ];

  const authors = [
    {
      name: "Equipe Filho Cuidador",
      role: "Criadora de Conteúdo",
      bio: "Dedicada a trazer informação confiável e acolhimento para cuidadores familiares.",
      articleCount: 22,
    },
  ];

  return (
    <Layout>
      {/* Hero / Intro Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 sm:mb-8">
            Quietly Caring
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            Um espaço para filhos que cuidam. Informação prática, acolhimento emocional e
            orientação confiável para quem cuida de pais idosos com doenças neurodegenerativas.
          </p>
        </div>

        {/* Trending Topics */}
        <TrendingTopics topics={trendingTopics} />

        <div className="mb-16 sm:mb-20 lg:mb-24 h-px bg-gray-200 dark:bg-gray-800" />
      </section>

      {/* Featured Article */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-24">
        <FeaturedArticle
          slug="reconhecendo-burnout-cuidador"
          title="Reconhecendo o Burnout do Cuidador: Quando Você Precisa de Ajuda"
          excerpt="Cuidar de um pai idoso é um privilégio, mas também é exaustivo. Entenda os sinais de burnout, a culpa que você sente, e quando procurar ajuda profissional."
          category="Saúde Emocional"
          author="Equipe Filho Cuidador"
          date="17 de julho, 2024"
        />
      </section>

      {/* Recent Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Artigos Recentes</h2>
          <Link
            href="/artigos"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:opacity-75 transition"
          >
            Ver todos →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {recentArticles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </section>

      {/* Authors Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-24">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Criadores em Destaque</h3>
        <div className="space-y-4">
          {authors.map((author) => (
            <AuthorCard
              key={author.name}
              name={author.name}
              role={author.role}
              bio={author.bio}
              articleCount={author.articleCount}
            />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-24">
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-6 sm:p-8 lg:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Inscreva-se na Newsletter</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
            Receba conteúdo semanal direto na sua caixa de entrada. Artigos, dicas práticas e
            acolhimento para quem cuida.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 rounded bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-900 dark:text-gray-100 text-sm"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition text-sm whitespace-nowrap"
            >
              Inscrever
            </button>
          </form>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <div className="p-4 sm:p-6 rounded-lg bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800">
          <p className="text-xs sm:text-sm text-yellow-900 dark:text-yellow-100">
            <strong>⚠️ Aviso Importante:</strong> Este conteúdo é informativo. Consulte sempre um profissional de
            saúde para questões médicas ou psicológicas.
          </p>
        </div>
      </section>
    </Layout>
  );
}
