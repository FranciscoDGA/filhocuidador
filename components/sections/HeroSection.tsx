export default function HeroSection() {
  return (
    <section className="w-full pt-16 pb-12 bg-white">
      {/* Massive Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tight leading-none border-b-2 border-gray-100 pb-8">
          Pensando com Calma
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-600 mb-6">
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            Acolhimento
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Um espaço seguro para quem cuida
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            Existem lugares que não estão nos mapas — como o coração de quem cuida. Aqui, reduzimos o ruído para focar no que importa: você.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <span className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-gray-400 cursor-pointer transition">paciência</span>
            <span className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-gray-400 cursor-pointer transition">resiliência</span>
            <span className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-gray-400 cursor-pointer transition">amor</span>
            <span className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-gray-400 cursor-pointer transition">cuidado</span>
          </div>
        </div>
      </div>
    </section>
  );
}
