import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-80 space-y-12">
      {/* Últimos Artigos */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">ARTIGOS POPULARES</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
        <div className="space-y-6">
          {[
            { slug: "como-lidar-com-agressividade-no-alzheimer", title: "Como Lidar com Agressividade no Alzheimer" },
            { slug: "cuidados-basicos-com-idosos", title: "Cuidados Básicos com Idosos: Guia Completo" },
            { slug: "saude-emocional-do-cuidador", title: "Saúde Emocional do Cuidador" },
            { slug: "rotina-de-cuidados-alzheimer", title: "Rotina de Cuidados para Alzheimer" },
            { slug: "como-explicar-alzheimer-para-a-familia", title: "Como Explicar Alzheimer para a Família" },
          ].map((article) => (
            <Link key={article.slug} href={`/artigos/${article.slug}`} className="group block">
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-brand-primary leading-snug mb-1">
                {article.title}
              </h4>
              <p className="text-xs text-gray-400">Filhos Cuidadores</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Ferramentas Úteis */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">FERRAMENTAS</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
        <div className="space-y-3">
          <Link href="/ferramentas/calculadora-custos" className="block p-4 rounded-[5px] border border-gray-100 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all">
            <h4 className="text-sm font-bold text-gray-900 mb-1">Calculadora de Custos</h4>
            <p className="text-xs text-gray-400">Estime os gastos mensais com cuidados</p>
          </Link>
          <Link href="/ferramentas" className="block p-4 rounded-[5px] border border-gray-100 hover:border-brand-primary/30 hover:bg-brand-primary/5 transition-all">
            <h4 className="text-sm font-bold text-gray-900 mb-1">Ver Todas as Ferramentas</h4>
            <p className="text-xs text-gray-400">Checklists, planilhas e mais</p>
          </Link>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-brand-primary/5 border border-brand-primary/10 p-6 rounded-[5px]">
        <h4 className="text-sm font-display font-medium text-brand-primary mb-2">
          Newsletter Semanal
        </h4>
        <p className="text-xs text-brand-secondary/60 mb-4 leading-relaxed">
          Dicas práticas e acolhimento direto no seu email.
        </p>
        <Link href="/comunidade" className="block w-full text-center px-4 py-2 bg-brand-primary text-white text-xs font-medium tracking-wide uppercase hover:bg-brand-primary/90 transition-colors rounded-[5px]">
          Inscrever-se
        </Link>
      </div>
    </aside>
  );
}
