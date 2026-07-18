import Link from "next/link";

export default function FeaturedArticleSection() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-bg-base">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Featured Article - Large */}
          <div className="md:col-span-2">
            <Link href="/artigos/reconhecendo-burnout-cuidador">
              <div className="group cursor-pointer">
                {/* Image */}
                <div className="aspect-video bg-gray-100 overflow-hidden mb-5 flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand-secondary/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Content */}
                <div>
                  <p className="text-[10px] font-medium text-brand-accent mb-2 tracking-[0.15em] uppercase">Saúde Emocional</p>
                  <h2 className="text-2xl md:text-3xl font-display font-medium text-brand-primary mb-3 leading-tight group-hover:text-brand-secondary transition">
                    Reconhecendo o Burnout do Cuidador
                  </h2>
                  <p className="text-sm text-brand-secondary/60 mb-4 line-clamp-3 font-light leading-relaxed">
                    Sinais de alerta para quando você está no limite. E sim, sua exaustão é legítima. Entenda os sinais, cuide-se e não sofra sozinho.
                  </p>
                  <div className="flex items-center gap-3 text-[11px] text-brand-secondary/40">
                    <span>Por Neil</span>
                    <span>•</span>
                    <span>17 de julho, 2024</span>
                    <span>•</span>
                    <span>8 min de leitura</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Sidebar - Featured Articles */}
          <div>
            <div className="border-l border-border-base pl-6">
              <h3 className="text-[11px] font-medium text-brand-secondary/40 mb-6 tracking-widest uppercase">Destaques</h3>

              <div className="space-y-8">
                {/* Article 1 */}
                <Link href="/artigos/bpc-loas-guia-completo">
                  <div className="group cursor-pointer">
                    <p className="text-[10px] font-medium text-brand-accent mb-1 tracking-[0.15em] uppercase">Jurídico</p>
                    <h4 className="font-display font-medium text-sm text-brand-primary mb-1 group-hover:text-brand-secondary transition line-clamp-2">
                      BPC - Guia Completo 2024
                    </h4>
                    <p className="text-[11px] text-brand-secondary/40">20 de julho, 2024</p>
                  </div>
                </Link>

                {/* Article 2 */}
                <Link href="/artigos/comunicacao-irmaos-nao-ajudam">
                  <div className="group cursor-pointer">
                    <p className="text-[10px] font-medium text-brand-accent mb-1 tracking-[0.15em] uppercase">Família</p>
                    <h4 className="font-display font-medium text-sm text-brand-primary mb-1 group-hover:text-brand-secondary transition line-clamp-2">
                      Quando o Irmão Não Quer Ajudar
                    </h4>
                    <p className="text-[11px] text-brand-secondary/40">10 de agosto, 2024</p>
                  </div>
                </Link>

                {/* Article 3 */}
                <Link href="/artigos">
                  <div className="group cursor-pointer">
                    <p className="text-[10px] font-medium text-brand-accent mb-1 tracking-[0.15em] uppercase">Cuidados Práticos</p>
                    <h4 className="font-display font-medium text-sm text-brand-primary mb-1 group-hover:text-brand-secondary transition line-clamp-2">
                      Técnicas de Alívio do Estresse
                    </h4>
                    <p className="text-[11px] text-brand-secondary/40">5 de agosto, 2024</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
