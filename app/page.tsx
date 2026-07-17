import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function Home() {
  const featuredArticle = {
    slug: "reconhecendo-burnout-cuidador",
    title: "Reconhecendo o Burnout do Cuidador: Quando Você Precisa de Ajuda",
    excerpt: "Cuidar de um pai idoso é exaustivo. Entenda os sinais de burnout, culpa, e quando procurar ajuda.",
    category: "Saúde Emocional",
    author: "Equipe Filho Cuidador",
    date: "17 de julho, 2024",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
  };

  const breakingNews = [
    {
      slug: "bpc-loas-guia-completo",
      title: "BPC: Guia Completo 2024",
      category: "Jurídico",
      date: "20 de julho, 2024",
      author: "Equipe Filho Cuidador",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=150",
    },
    {
      slug: "culpa-raiva-exaustao-normal-sentir",
      title: "Culpa e Raiva: É Normal Sentir?",
      category: "Saúde Emocional",
      date: "23 de julho, 2024",
      author: "Equipe Filho Cuidador",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=150",
    },
    {
      slug: "prevencao-quedas-casa-guia-pratico",
      title: "Prevenção de Quedas em Casa",
      category: "Cuidados Práticos",
      date: "25 de julho, 2024",
      author: "Equipe Filho Cuidador",
      image: "https://images.unsplash.com/photo-1576091160499-112ba8d25d1d?w=150",
    },
  ];

  const allArticles = [
    {
      slug: "reconhecendo-burnout-cuidador",
      title: "Reconhecendo o Burnout do Cuidador",
      category: "Saúde Emocional",
      date: "17 de julho, 2024",
      author: "Equipe Filho Cuidador",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300",
    },
    {
      slug: "bpc-loas-guia-completo",
      title: "BPC (Benefício de Prestação Continuada): Guia Completo 2024",
      category: "Jurídico & Financeiro",
      date: "20 de julho, 2024",
      author: "Equipe Filho Cuidador",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300",
    },
    {
      slug: "procuracao-idoso-modelo-passo-passo",
      title: "Procuração de Idoso: Modelo e Passo a Passo",
      category: "Jurídico & Financeiro",
      date: "21 de julho, 2024",
      author: "Equipe Filho Cuidador",
      image: "https://images.unsplash.com/photo-1450101499163-c8917c7b4edc?w=400&h=300",
    },
    {
      slug: "culpa-raiva-exaustao-normal-sentir",
      title: "Culpa, Raiva e Exaustão: É Normal Sentir Isso?",
      category: "Saúde Emocional",
      date: "23 de julho, 2024",
      author: "Equipe Filho Cuidador",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300",
    },
  ];

  const topAuthors = [
    {
      name: "Equipe Filho Cuidador",
      role: "Criadora de Conteúdo",
      articleCount: 7,
    },
  ];

  const trendingTopics = [
    {
      name: "Saúde Emocional",
      count: 12,
      image: "https://images.unsplash.com/photo-1544367567-0d6fcffe7f1f?w=300&h=200",
    },
    {
      name: "Cuidados Práticos",
      count: 8,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200",
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-16 border-b border-gray-200 dark:border-gray-800">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
              <h1 className="text-5xl md:text-6xl font-bold mb-2 pb-4 border-b-2 border-black dark:border-white">
                Quietly Thinking
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-6 text-sm leading-relaxed">
                A calm space for slow thoughts. No noise – just reflection, meaning, and quiet curiosity.
              </p>
            </div>
            <div className="md:col-span-1">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Um espaço para filhos que cuidam. Informação prática, acolhimento emocional e orientação confiável.
              </p>
              <button className="text-sm font-medium hover:opacity-75 transition">
                Subscribe now → <span className="ml-2">▶</span>
              </button>
            </div>
          </div>
        </section>

        {/* Featured Article + Side News */}
        <section className="py-12 grid md:grid-cols-3 gap-8">
          {/* Featured - 2 cols */}
          <div className="md:col-span-2">
            <Link href={`/artigos/${featuredArticle.slug}`}>
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium">● {featuredArticle.category}</span>
                <span className="text-xs text-gray-500">{featuredArticle.date}</span>
              </div>
              <Link href={`/artigos/${featuredArticle.slug}`}>
                <h2 className="text-4xl font-bold hover:opacity-75 transition">{featuredArticle.title}</h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-lg">{featuredArticle.excerpt}</p>
              <div className="flex items-center gap-3 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                <div>
                  <p className="text-sm font-medium">{featuredArticle.author}</p>
                  <p className="text-xs text-gray-500">{featuredArticle.date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side News - 1 col */}
          <div>
            <Link href={`/artigos/${breakingNews[0].slug}`}>
              <div className="mb-6 overflow-hidden rounded">
                <img
                  src={breakingNews[0].image}
                  alt={breakingNews[0].title}
                  className="w-full h-32 object-cover hover:scale-105 transition-transform"
                />
              </div>
            </Link>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-gray-500 mb-1">FLASH NEWS</p>
                <Link href={`/artigos/${breakingNews[0].slug}`}>
                  <p className="font-bold hover:opacity-75 transition">{breakingNews[0].title}</p>
                </Link>
                <p className="text-xs text-gray-500 mt-2">{breakingNews[0].date}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Breaking News Section */}
        <section className="py-12 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-bold mb-8">
            # Breaking News
          </h3>
          <div className="space-y-8">
            {breakingNews.map((article) => (
              <div key={article.slug} className="grid md:grid-cols-3 gap-6 pb-8 border-b border-gray-200 dark:border-gray-800 last:border-0">
                <div className="md:col-span-2">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xs font-medium">● {article.category}</span>
                  </div>
                  <Link href={`/artigos/${article.slug}`}>
                    <h4 className="text-2xl font-bold mb-3 hover:opacity-75 transition">{article.title}</h4>
                  </Link>
                  <p className="text-xs text-gray-500">{article.date}</p>
                </div>
                <Link href={`/artigos/${article.slug}`}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-24 object-cover rounded hover:opacity-75 transition"
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* All Articles Grid */}
        <section className="py-12 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-bold mb-8">Recent Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {allArticles.map((article) => (
              <Link key={article.slug} href={`/artigos/${article.slug}`}>
                <div className="group cursor-pointer">
                  <div className="mb-4 overflow-hidden rounded">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium">● {article.category}</span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  <h4 className="text-xl font-bold group-hover:opacity-75 transition">{article.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Top Authors */}
        <section className="py-12 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-bold mb-8">TOP AUTHORS</h3>
          <div className="space-y-4">
            {topAuthors.map((author) => (
              <div key={author.name} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded transition">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                  <div>
                    <p className="font-bold text-sm">{author.name}</p>
                    <p className="text-xs text-gray-500">{author.role}</p>
                  </div>
                </div>
                <button className="text-xs font-medium px-3 py-1 border border-black dark:border-white rounded hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Follow Us + Trending */}
        <section className="py-12 border-t border-gray-200 dark:border-gray-800 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-bold mb-6">FOLLOW US</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-sm hover:opacity-75 transition">
                <span>f</span> Facebook <span className="ml-auto text-xs">1k</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:opacity-75 transition">
                <span>𝕏</span> Twitter <span className="ml-auto text-xs">1k</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:opacity-75 transition">
                <span>📷</span> Instagram <span className="ml-auto text-xs">1k</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-sm hover:opacity-75 transition">
                <span>▶</span> YouTube <span className="ml-auto text-xs">1k</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">TRENDING TOPICS</h3>
            <div className="space-y-4">
              {trendingTopics.map((topic) => (
                <div key={topic.name} className="space-y-2">
                  <img
                    src={topic.image}
                    alt={topic.name}
                    className="w-full h-20 object-cover rounded"
                  />
                  <p className="font-bold text-sm">{topic.name}</p>
                  <p className="text-xs text-gray-500">{topic.count}+ articles</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner CTA */}
        <section className="py-12 text-center border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 mb-4">Your banner here</p>
          <p className="text-xs text-gray-400 mb-6">310 × 220</p>
          <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded hover:opacity-90 transition">
            Contact
          </button>
        </section>
      </div>
    </Layout>
  );
}