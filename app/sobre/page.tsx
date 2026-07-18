import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre o Filho Cuidador",
  description: "Conheça a missão do Filho Cuidador: o único portal brasileiro dedicado a filhos que cuidam de pais com demência, Alzheimer e outras doenças.",
  openGraph: {
    title: "Sobre o Filho Cuidador",
    description: "O único portal brasileiro que fala com quem cuida, não sobre o idoso.",
  },
};

export default function SobrePage() {
  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">
            Início
          </Link>
          <span>/</span>
          <span className="text-brand-primary">Sobre</span>
        </div>

        {/* Content */}
        <article>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-brand-primary mb-8 leading-tight">
            Sobre o Filho Cuidador
          </h1>

          <div className="space-y-6 text-base text-brand-secondary/80 leading-[1.8]">
            <p>
              O <strong className="text-brand-primary">Filho Cuidador</strong> é um portal dedicado a filhos adultos que cuidam de pais idosos com doenças neurodegenerativas e crônicas. Somos um espaço de informação, acolhimento e orientação prática para quem vive essa realidade.
            </p>

            <h2 className="text-xl font-display font-medium text-brand-primary pt-4">
              Por que existe este site?
            </h2>

            <p>
              No Brasil, são mais de 11 milhões de cuidadores informais. A maioria são mulheres entre 35 e 55 anos que assumiram a responsabilidade de cuidar de um pai ou mãe sem preparo, sem apoio e sem saber por onde começar.
            </p>

            <p>
              Quando buscam ajuda no Google, encontram conteúdo frio, genérico ou acadêmico. Nada que fale <em>com</em> eles — sempre fala <em>sobre</em> o idoso.
            </p>

            <p>
              O Filho Cuidador nasceu para preencher esse vazio. Todo conteúdo é escrito do ponto de vista de quem cuida, com linguagem acessível, empatia real e informação confiável.
            </p>

            <h2 className="text-xl font-display font-medium text-brand-primary pt-4">
              Nossa Missão
            </h2>

            <p>
              Oferecer informação confiável, acolhimento emocional e orientação prática para filhos que cuidam de pais com demência e outras doenças. Para que ninguém precise passar por isso sozinho.
            </p>

            <ul className="space-y-2 pl-4">
              <li className="flex items-start gap-2">
                <span className="text-brand-accent mt-1">•</span>
                <span><strong className="text-brand-primary">Informação confiável:</strong> Sobre doenças, cuidados, direitos e benefícios</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent mt-1">•</span>
                <span><strong className="text-brand-primary">Acolhimento emocional:</strong> Validando sua experiência e reconhecendo seus sentimentos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent mt-1">•</span>
                <span><strong className="text-brand-primary">Orientação prática:</strong> Dicas do dia a dia que realmente funcionam</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-accent mt-1">•</span>
                <span><strong className="text-brand-primary">Comunidade:</strong> Saber que você não está sozinho nessa</span>
              </li>
            </ul>

            <h2 className="text-xl font-display font-medium text-brand-primary pt-4">
              Política de Conteúdo
            </h2>

            <p>
              Todos os nossos artigos são baseados em pesquisa científica, diretrizes de órgãos públicos (INSS, Ministério da Saúde), experiência prática de cuidadores e consulta com profissionais especializados.
            </p>

            <div className="bg-brand-primary/[0.03] border border-border-base p-5 my-8">
              <p className="text-xs text-brand-secondary/70 leading-relaxed">
                <strong className="text-brand-primary">Aviso importante:</strong> Nenhum conteúdo deste portal substitui a consulta com um profissional de saúde ou jurídico. Se você ou seu familiar precisam de atendimento, busque um profissional qualificado.
              </p>
            </div>

            <h2 className="text-xl font-display font-medium text-brand-primary pt-4">
              Contato
            </h2>

            <p>
              Tem dúvidas, sugestões ou gostaria de colaborar? Gostaríamos de ouvir você.
            </p>

            <p>
              <strong className="text-brand-primary">Email:</strong>{" "}
              <a href="mailto:contato@filhocuidador.com.br" className="text-brand-primary hover:text-brand-accent transition underline underline-offset-2">
                contato@filhocuidador.com.br
              </a>
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
