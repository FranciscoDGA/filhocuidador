export default function AccolhimentoSection() {
  return (
    <section className="w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-accent via-orange-500 to-red-500"></div>
      <div className="absolute -top-40 -right-40 -z-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 -z-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center">
        <p className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-12">
          Você não precisa
          <br />
          <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            saber tudo sozinho
          </span>
        </p>

        <button className="px-8 py-3.5 bg-white text-brand-accent rounded-full font-bold shadow-2xl shadow-black/20 hover:shadow-2xl hover:shadow-black/40 hover:scale-105 transition-all duration-300 text-sm">
          Começar a Explorar
        </button>
      </div>
    </section>
  );
}
