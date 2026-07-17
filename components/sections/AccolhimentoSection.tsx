export default function AccolhimentoSection() {
  return (
    <section className="w-full py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-brand-accent">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight mb-10">
          Você não precisa
          <br />
          <span className="font-semibold">saber tudo sozinho</span>
        </p>

        <button className="px-8 py-3.5 bg-white text-brand-accent rounded-full font-semibold hover:bg-white/90 transition duration-300 text-sm">
          Começar a Explorar
        </button>
      </div>
    </section>
  );
}
