import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full pt-12 pb-12 bg-white">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-600 mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Portal de Apoio ao Cuidador Familiar
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight border-b-2 border-gray-100 pb-6">
          Apoio e Orientação Prática para Quem Cuida de Pais Idosos
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Content Left */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Cuidar de um familiar idoso é um ato de afeto que traz desafios diários, emocionais e jurídicos. Aqui você encontra informação confiável, acolhimento e passos claros para não se sentir sozinho nessa jornada.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link href="/cuidados-praticos" className="p-3.5 rounded-xl border border-gray-200 hover:border-gray-900 transition bg-gray-50/50">
                <span className="text-xl block mb-1">🏥</span>
                <span className="font-semibold text-sm text-gray-900 block">Cuidados Diários</span>
                <span className="text-xs text-gray-500">Rotina, medicação e higiene</span>
              </Link>
              <Link href="/saude-emocional" className="p-3.5 rounded-xl border border-gray-200 hover:border-gray-900 transition bg-gray-50/50">
                <span className="text-xl block mb-1">💭</span>
                <span className="font-semibold text-sm text-gray-900 block">Saúde do Cuidador</span>
                <span className="text-xs text-gray-500">Prevenção do burnout e apoio</span>
              </Link>
              <Link href="/orientacao-juridica" className="p-3.5 rounded-xl border border-gray-200 hover:border-gray-900 transition bg-gray-50/50">
                <span className="text-xl block mb-1">⚖️</span>
                <span className="font-semibold text-sm text-gray-900 block">Direitos & BPC/LOAS</span>
                <span className="text-xs text-gray-500">Benefícios, INSS e curatela</span>
              </Link>
              <Link href="/familia" className="p-3.5 rounded-xl border border-gray-200 hover:border-gray-900 transition bg-gray-50/50">
                <span className="text-xl block mb-1">👨‍👩‍👧</span>
                <span className="font-semibold text-sm text-gray-900 block">Organização Familiar</span>
                <span className="text-xs text-gray-500">Divisão de tarefas e diálogo</span>
              </Link>
            </div>
          </div>

          {/* Right Column / Guia Rápido */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Primeiros Passos para Quem Acabou de Assumir o Cuidado</h3>
            <p className="text-sm text-gray-600 mb-4">Se você assumiu recentemente os cuidados de um idoso, confira os passos essenciais para organizar a nova rotina:</p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">1.</span>
                <span><strong>Centralize as informações médicas:</strong> Liste receitas atuais, horários de remédios e contatos de emergência em um só caderno ou app.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">2.</span>
                <span><strong>Adapte a casa contra quedas:</strong> Remova tapetes soltos e instale barras de apoio no banheiro.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">3.</span>
                <span><strong>Verifique direitos e benefícios:</strong> Confira critérios do BPC/LOAS no Meu INSS ou CRAS se houver vulnerabilidade de renda.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">4.</span>
                <span><strong>Estabeleça limites:</strong> Peça divisão de custos e tarefas com outros familiares antes do esgotamento físico e emocional.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
