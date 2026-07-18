import Link from "next/link";

export default function EmotionalSupportBlock() {
  return (
    <section className="py-24 lg:py-32 bg-bg-base my-16 lg:my-24 border-y border-border-base">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium leading-snug mb-10 text-brand-primary">
          Você não precisa saber tudo.
          <br />
          <span className="text-brand-secondary/60">Precisa de um lugar para começar.</span>
        </h2>
        <Link 
          href="/artigos" 
          className="inline-flex items-center text-[13px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-1 transition-colors"
        >
          Explorar o site
        </Link>
      </div>
    </section>
  );
}
