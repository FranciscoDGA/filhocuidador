import Link from "next/link";
import type { Metadata } from "next";
import DiarySubmitForm from "@/components/forms/DiarySubmitForm";

export const metadata: Metadata = {
  title: "Diários de Cuidadores",
  description: "Histórias reais de filhos que cuidam de pais com Alzheimer, Parkinson, AVC e demências. Depoimentos emocionantes e lições de vida.",
};

const diaries = [
  {
    slug: "ana-maria-o-dia-a-dia-com-mae-alzheimer",
    title: "O Dia a Dia com a Mãe que Já Não Me Reconhece",
    author: "Ana Maria, 42 anos",
    city: "São Paulo, SP",
    excerpt: "Há dois anos, minha mãe foi diagnosticada com Alzheimer. Hoje, ela não sabe meu nome, mas eu sei exatamente o que ela precisa. Cada dia é uma nova lição sobre o que é amor incondicional.",
    date: "15 Jul 2026",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&auto=format&fit=crop",
  },
  {
    slug: "carlos-cuidar-do-pai-sozinho",
    title: "Cuidar do Pai Sozinho: Um Filho, Um Sacrifício",
    author: "Carlos, 38 anos",
    city: "Rio de Janeiro, RJ",
    excerpt: "Meu pai tem Parkinson e moramos juntos há um ano. Não tenho irmãos para dividir. É desafiador, mas ver o sorriso dele quando eu chego do trabalho vale tudo.",
    date: "10 Jul 2026",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&auto=format&fit=crop",
  },
  {
    slug: "mariana-quando-a-familia-nao-ajuda",
    title: "Quando a Família Não Ajuda: A Solidão do Cuidador",
    author: "Mariana, 45 anos",
    city: "Belo Horizonte, MG",
    excerpt: "Meus irmãos moram longe e raro ligam. Eu cuido da minha mãe todos os dias. Às vezes sinto raiva, mas depois lembro que ela fez isso por mim a vida inteira.",
    date: "5 Jul 2026",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&auto=format&fit=crop",
  },
  {
    slug: "pedro-o-burnout-que-ninguem-ve",
    title: "O Burnout que Ninguém Vê: Minha História",
    author: "Pedro, 40 anos",
    city: "Curitiba, PR",
    excerpt: "Trabalho home office e cuido do meu pai durante o dia. Não saio mais, não tenho vida social. Meu médico disse que estou com burnout. Preciso de ajuda, mas não sei pedir.",
    date: "28 Jun 2026",
    readTime: 9,
    image: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=600&auto=format&fit=crop",
  },
  {
    slug: "juliana-o-dia-em-que-desisti-e-voltei",
    title: "O Dia em que Desisti e Voltei",
    author: "Juliana, 36 anos",
    city: "Salvador, BA",
    excerpt: "Há seis meses quase intern minha mãe em um asilo. Chorei muito. Mas naquele noite, ela me abraçou e disse 'obrigada'. Foi o único momento de lucidez em meses. Não desisti mais.",
    date: "20 Jun 2026",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&auto=format&fit=crop",
  },
  {
    slug: "roberto-o-avc-que-mudou-tudo",
    title: "O AVC que Mudou Tudo: De Filho a Cuidador",
    author: "Roberto, 50 anos",
    city: "Porto Alegre, RS",
    excerpt: "Meu pai sofreu um AVC aos 75 anos. Em uma manhã, ele passou de uma pessoa ativa a alguém que não consegue falar. Eu nunca tinha cuidado de ninguém. Aprendi na raça.",
    date: "15 Jun 2026",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=600&auto=format&fit=crop",
  },
];

export default function DiariosPage() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <span className="text-brand-primary">Diários de Cuidadores</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary/60 mb-4 block">
            Histórias Reais
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-6 leading-tight">
            Diários de Cuidadores
          </h1>
          <p className="text-base text-brand-secondary leading-relaxed">
            Histórias reais de filhos que cuidam de pais com demência. Dor, amor, desafios e superação. Você não está sozinho(a).
          </p>
        </div>

        {/* Formulário de Submissão */}
        <div className="bg-white border border-border-base p-6 lg:p-8 mb-12">
          <h3 className="text-lg font-display font-medium text-brand-primary mb-2">
            Compartilhe sua história
          </h3>
          <p className="text-xs text-brand-secondary/60 mb-6">
            Sua experiência pode ajudar milhares de outros cuidadores. Preencha e envie.
          </p>
          <DiarySubmitForm />
        </div>

        {/* Diaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {diaries.map((diary) => (
            <Link key={diary.slug} href={`/diarios/${diary.slug}`} className="group">
              <article className="bg-white border border-border-base overflow-hidden h-full">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[5px] bg-gray-100">
                  <img
                    src={diary.image}
                    alt={diary.title}
                    width={600}
                    height={400}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[10px] text-brand-secondary/40 mb-3">
                    <span>{diary.date}</span>
                    <span>•</span>
                    <span>{diary.readTime} min de leitura</span>
                  </div>
                  <h2 className="text-base font-display font-medium text-brand-primary mb-2 leading-snug group-hover:text-brand-secondary transition-colors">
                    {diary.title}
                  </h2>
                  <p className="text-xs text-brand-secondary/60 leading-relaxed mb-3 line-clamp-3">
                    {diary.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center">
                      <span className="text-[10px] font-medium text-brand-primary">
                        {diary.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium text-brand-primary">{diary.author}</p>
                      <p className="text-[10px] text-brand-secondary/40">{diary.city}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
