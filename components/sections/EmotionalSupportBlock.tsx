import Link from "next/link";

export default function EmotionalSupportBlock() {
  return (
    <section className="py-20 bg-brand-accent text-white my-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight mb-8">
          "Você não precisa saber tudo. Precisa de um lugar para começar."
        </h2>
        <Link 
          href="/artigos" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-accent bg-white hover:bg-bg-base rounded-full transition-all shadow-md hover:shadow-lg"
        >
          Explorar o site
        </Link>
      </div>
    </section>
  );
}
