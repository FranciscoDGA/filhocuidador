import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/lib/articles";
import { Brain, Home, HeartPulse, Scale, Users } from "lucide-react";

const categoryData: Record<string, {
  name: string;
  description: string;
  icon: React.ReactNode;
  longDescription: string;
}> = {
  "entendendo-a-doenca": {
    name: "Entendendo a Doença",
    description: "Alzheimer, Parkinson, AVC, demência senil — o que esperar de cada fase",
    icon: <Brain className="w-6 h-6" />,
    longDescription: "Entender o que está acontecendo com o seu pai é o primeiro passo para cuidar melhor. Aqui você encontra informações claras sobre Alzheimer, Parkinson, AVC e outras doenças — sem linguagem médica complicada, sempre do ponto de vista de quem cuida.",
  },
  "cuidados-praticos": {
    name: "Cuidados Práticos",
    description: "Alimentação, medicação, segurança em casa, higiene, sono",
    icon: <Home className="w-6 h-6" />,
    longDescription: "O dia a dia do cuidador é cheio de dúvidas práticas: como dar banho com segurança? Como lidar com a incontinência? Como adaptar a casa para evitar quedas? Aqui você encontra orientação clara e aplicável.",
  },
  "saude-emocional": {
    name: "Saúde do Cuidador",
    description: "Burnout, culpa, raiva, luto antecipado, como pedir ajuda",
    icon: <HeartPulse className="w-6 h-6" />,
    longDescription: "Cuidar de alguém que está se deteriorando é uma das experiências mais desgastantes que existem. A culpa, a raiva, o esgotamento — tudo isso é normal. Aqui falamos abertamente sobre a saúde emocional de quem cuida.",
  },
  "juridico": {
    name: "Questões Jurídicas e Financeiras",
    description: "Procuração, interdição, BPC, LOAS, plano de saúde, home care",
    icon: <Scale className="w-6 h-6" />,
    longDescription: "Burocracia é a última coisa que você precisa no meio do caos. Mas direitos são importantes. Aqui explicamos procuração, interdição, benefícios do INSS, cobertura de plano de saúde — tudo em linguagem acessível.",
  },
  "familia": {
    name: "Família e Conflitos",
    description: "Irmãos que não ajudam, cuidador solo, distância geográfica",
    icon: <Users className="w-6 h-6" />,
    longDescription: "Quando um filho cuida e os outros não ajudam, a família inteira sofre. Conflitos entre irmãos, solidão do cuidador, distância geográfica — temas difíceis que ninguém fala, mas que precisam ser conversados.",
  },
};

function getArticlesByCategory(slug: string) {
  const allArticles = getAllArticles();
  const categoryMap: Record<string, string[]> = {
    "entendendo-a-doenca": ["Alzheimer", "Parkinson", "AVC", "Demência", "Doença"],
    "cuidados-praticos": ["Cuidados", "Alimentação", "Higiene", "Segurança", "Medicação", "Sono", "Banho", "Casa"],
    "saude-emocional": ["Saúde Emocional", "Burnout", "Culpa", "Depressão", "Ansiedade", "Autocuidado", "Luto"],
    "juridico": ["Jurídico", "BPC", "LOAS", "Procuração", "Interdição", "INSS", "Plano de Saúde"],
    "familia": ["Família", "Irmãos", "Conflito", "Relacionamento"],
  };

  const keywords = categoryMap[slug] || [];
  return allArticles.filter(article => {
    const titleMatch = keywords.some(kw => article.title.toLowerCase().includes(kw.toLowerCase()));
    const categoryMatch = keywords.some(kw => article.category.toLowerCase().includes(kw.toLowerCase()));
    return titleMatch || categoryMatch;
  });
}

export function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryData[slug];
  if (!category) return {};
  
  return {
    title: `${category.name} | Filho Cuidador`,
    description: category.description,
    openGraph: {
      title: `${category.name} | Filho Cuidador`,
      description: category.description,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryData[slug];
  const articles = getArticlesByCategory(slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-bg-base">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-display font-medium text-brand-primary mb-4">Categoria não encontrada</h1>
          <Link href="/" className="text-brand-primary font-medium hover:underline">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-bg-base min-h-screen">
      {/* Header da Categoria */}
      <div className="bg-white border-b border-border-base">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-[11px] text-brand-secondary/50">
            <Link href="/" className="hover:text-brand-primary transition">Início</Link>
            <span>/</span>
            <span className="text-brand-primary">{category.name}</span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 border border-border-base flex items-center justify-center text-brand-secondary shrink-0">
              {category.icon}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-brand-primary mb-2">
                {category.name}
              </h1>
              <p className="text-base text-brand-secondary max-w-2xl">
                {category.longDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Artigos */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {articles.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-brand-secondary">Nenhum artigo encontrado nesta categoria.</p>
            <Link href="/artigos" className="text-sm text-brand-primary mt-4 inline-block hover:underline">
              Ver todos os artigos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/artigos/${article.slug}`}
                className="group flex flex-col items-start"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[5px] mb-5 bg-gray-100">
                  {article.image && (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  )}
                </div>

                {/* Content */}
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-brand-accent mb-2">
                  {article.category}
                </span>
                <h3 className="text-base lg:text-lg font-display font-medium text-brand-primary mb-2 leading-snug group-hover:text-brand-secondary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-brand-secondary/60 line-clamp-2 font-light leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="mt-auto flex items-center gap-2 text-[11px] text-brand-secondary/40">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 lg:mt-20 border-t border-border-base pt-12 text-center">
          <p className="text-sm text-brand-secondary mb-4">
            Não encontrou o que procurava?
          </p>
          <Link
            href="/artigos"
            className="inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-1 transition-colors"
          >
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </main>
  );
}
