import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 py-24 lg:py-32">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-text-base leading-tight mb-6 tracking-tight">
              Cuidar de quem você ama é um ato de amor. <span className="text-brand-accent">Mas também dói.</span>
            </h1>
            <p className="text-lg sm:text-xl text-text-base/80 font-body mb-8 max-w-2xl leading-relaxed">
              Aqui você encontra informação, acolhimento e orientação prática para atravessar essa fase com mais segurança.
            </p>
            <Link 
              href="#acolhimento" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#C47B5A] hover:bg-[#A8623F] rounded-full transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Quero me sentir menos sozinho
            </Link>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-primary/10">
              <div className="absolute inset-0 bg-brand-accent/10 z-10 mix-blend-multiply"></div>
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1000&auto=format&fit=crop"
                alt="Filha adulta apoiando mãe idosa com carinho"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative background blob */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-secondary/20 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
