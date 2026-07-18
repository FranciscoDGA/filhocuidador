export default function AccolhimentoSection() {
  return (
    <section className="w-full py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-brand-primary text-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight mb-12">
          Você não precisa
          <br />
          <span className="text-white/50">
            saber tudo sozinho
          </span>
        </p>

        <a
          href="/artigos"
          className="inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-white border-b border-white/30 hover:border-white/70 pb-1 transition-colors"
        >
          Começar a Explorar
        </a>
      </div>
    </section>
  );
}
