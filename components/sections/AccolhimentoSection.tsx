export default function AccolhimentoSection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-brand-accent">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
          Você não precisa saber tudo.
          <br />
          Precisa de um lugar para começar.
        </p>

        <button className="px-8 py-3 bg-white text-brand-accent rounded-lg font-medium hover:bg-opacity-90 transition duration-200 text-base font-semibold">
          Explorar o Site
        </button>
      </div>
    </section>
  );
}
