import Link from "next/link";

const diaries = [
  {
    slug: "ana-maria-o-dia-a-dia-com-mae-alzheimer",
    title: "O Dia a Dia com a Mãe que Já Não Me Reconhece",
    author: "Ana Maria, 42 anos",
    city: "São Paulo, SP",
    excerpt: "Há dois anos, minha mãe foi diagnosticada com Alzheimer. Hoje, ela não sabe meu nome, mas eu sei exatamente o que ela precisa.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&q=60&auto=format&fit=crop",
  },
  {
    slug: "carlos-cuidar-do-pai-sozinho",
    title: "Cuidar do Pai Sozinho: Um Filho, Um Sacrifício",
    author: "Carlos, 38 anos",
    city: "Rio de Janeiro, RJ",
    excerpt: "Meu pai tem Parkinson e moramos juntos há um ano. Não tenho irmãos para dividir. É desafiador, mas ver o sorriso dele vale tudo.",
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&q=60&auto=format&fit=crop",
  },
  {
    slug: "juliana-o-dia-em-que-desisti-e-voltei",
    title: "O Dia em que Desisti e Voltei",
    author: "Juliana, 36 anos",
    city: "Salvador, BA",
    excerpt: "Há seis meses quase intern minha mãe em um asilo. Mas naquela noite, ela me abraçou e disse 'obrigada'. Não desisti mais.",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&q=60&auto=format&fit=crop",
  },
];

export default function DiariesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-y border-border-base">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14">
          <div>
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-brand-secondary mb-4 block">
              Histórias Reais
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-medium text-brand-primary">
              Diários de Cuidadores
            </h2>
          </div>
          <Link
            href="/diarios"
            className="mt-4 sm:mt-0 inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-1 transition-colors"
          >
            Ver todos
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {diaries.map((diary) => (
            <Link key={diary.slug} href={`/diarios/${diary.slug}`} className="group">
              <article className="bg-bg-card border border-border-base overflow-hidden h-full rounded-[5px]">
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
                  <h3 className="text-base font-display font-medium text-brand-primary mb-2 leading-snug group-hover:text-brand-accent transition-colors">
                    {diary.title}
                  </h3>
                  <p className="text-xs text-brand-secondary/50 leading-relaxed mb-3 line-clamp-2">
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
    </section>
  );
}
