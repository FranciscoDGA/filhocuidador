import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenIcon, HeartIcon, InfoIcon } from "@/components/ui/Icons";
import { getAllPublishedArticles } from "@/lib/articles";
import { EMERGENCY_CONTACTS, SITE_INFO } from "@/lib/site";

export const metadata: Metadata = {
  title: `Sobre | ${SITE_INFO.name}`,
  description:
    "Conheça a proposta editorial, os limites informativos e o compromisso com transparência do portal Filho Cuidador.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title: `Sobre | ${SITE_INFO.name}`,
    description:
      "Portal informativo criado para acolher e orientar filhos e familiares que cuidam de pessoas idosas.",
    url: "/sobre",
    type: "website",
  },
};

export default function SobrePage() {
  const publishedCount = getAllPublishedArticles().length;

  return (
    <main id="conteudo-principal" className="min-h-screen bg-surface-page py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-3">
            Sobre o portal
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-strong mb-5">
            Filho Cuidador
          </h1>
          <p className="text-lg sm:text-xl text-ink-muted leading-relaxed">
            Informação prática, linguagem direta e respeito a quem assume — muitas vezes
            sem preparo prévio e com múltiplos compromissos — o cuidado cotidiano de um
            familiar idoso.
          </p>
        </header>

        <section aria-labelledby="missao-heading" className="mb-10">
          <div className="rounded-xl border border-border-subtle bg-surface-card p-6 sm:p-8">
            <h2
              id="missao-heading"
              className="font-serif text-2xl sm:text-3xl font-bold text-ink-strong mb-4 flex items-center gap-2.5"
            >
              <HeartIcon className="w-6 h-6 shrink-0" aria-hidden="true" />
              Nossa missão
            </h2>
            <p className="text-base text-ink-body leading-relaxed mb-4">
              Quando um pai, uma mãe ou outro familiar idoso passa a precisar de apoio
              para tarefas diárias, medicação ou acompanhamento médico, quem cuida costuma
              enfrentar exaustão física, dúvidas práticas e falta de orientação acessível.
              O <strong>{SITE_INFO.name}</strong> existe para organizar guias introdutórios
              em português claro — para que você não precise enfrentar esse percurso sozinho
              nesse momento.
            </p>
            <p className="text-base text-ink-body leading-relaxed">
              Sabemos que cada família vive uma realidade diferente de tempo, moradia,
              renda e rede de apoio. Por isso, evitamos fórmulas prontas e priorizamos
              explicações práticas e caminhos em serviços públicos gratuitos, como o SUS,
              o CRAS/CadÚnico e o Meu INSS.
            </p>
          </div>
        </section>

        <section aria-labelledby="transparencia-heading" className="mb-10">
          <div className="rounded-xl border border-border-subtle bg-surface-subtle p-6 sm:p-8">
            <h2
              id="transparencia-heading"
              className="font-serif text-2xl font-bold text-ink-strong mb-4 flex items-center gap-2.5"
            >
              <InfoIcon className="w-6 h-6 shrink-0" aria-hidden="true" />
              Transparência editorial e limites do conteúdo
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-ink-body leading-relaxed list-disc pl-5">
              <li>
                <strong>Caráter estritamente informativo:</strong> nenhum artigo deste
                portal substitui consulta médica, acompanhamento psicológico, avaliação
                nutricional ou parecer jurídico e previdenciário individualizado.
              </li>
              <li>
                <strong>Sem equipe clínica identificada neste momento:</strong> os textos
                atualmente publicados ({publishedCount} guias) têm função educativa e de
                organização cotidiana; ainda não contamos com conselho profissional
                identificado para revisão clínica ou jurídica individual.
              </li>
              <li>
                <strong>Revisão contínua e cautela:</strong> conteúdos sobre benefícios e
                direitos que dependiam de regras antigas foram retirados de circulação
                para revisão, mantendo publicados apenas os materiais com fontes oficiais
                verificáveis.
              </li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="pilares-heading" className="mb-10">
          <h2
            id="pilares-heading"
            className="font-serif text-2xl sm:text-3xl font-bold text-ink-strong mb-5 flex items-center gap-2.5"
          >
            <BookOpenIcon className="w-6 h-6 shrink-0" aria-hidden="true" />
            O que você encontra no portal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/saude-emocional"
              className="rounded-xl border border-border-subtle bg-surface-card p-5 hover:border-border-strong transition-colors"
            >
              <h3 className="font-serif text-lg font-bold text-ink-strong mb-1.5">
                Saúde Emocional
              </h3>
              <p className="text-sm text-ink-muted">
                Reconhecer sobrecarga, burnout, ansiedade, insônia e luto antecipado.
              </p>
            </Link>

            <Link
              href="/cuidados-praticos"
              className="rounded-xl border border-border-subtle bg-surface-card p-5 hover:border-border-strong transition-colors"
            >
              <h3 className="font-serif text-lg font-bold text-ink-strong mb-1.5">
                Cuidados Práticos
              </h3>
              <p className="text-sm text-ink-muted">
                Prevenção de quedas, adaptação do lar, higiene, medicação e alimentação.
              </p>
            </Link>

            <Link
              href="/doencas"
              className="rounded-xl border border-border-subtle bg-surface-card p-5 hover:border-border-strong transition-colors"
            >
              <h3 className="font-serif text-lg font-bold text-ink-strong mb-1.5">
                Condições de Saúde
              </h3>
              <p className="text-sm text-ink-muted">
                Noções gerais para apoiar o acompanhamento de Alzheimer, AVC, diabetes e
                outras condições crônicas.
              </p>
            </Link>

            <Link
              href="/orientacao-juridica"
              className="rounded-xl border border-border-subtle bg-surface-card p-5 hover:border-border-strong transition-colors"
            >
              <h3 className="font-serif text-lg font-bold text-ink-strong mb-1.5">
                Família e Direitos
              </h3>
              <p className="text-sm text-ink-muted">
                Diálogo familiar, acesso a medicamentos pelo SUS e orientação oficial
                sobre o BPC/LOAS.
              </p>
            </Link>
          </div>
        </section>

        <section
          aria-labelledby="apoio-urgente-heading"
          className="rounded-xl border border-border-subtle bg-surface-card p-6 sm:p-8"
        >
          <h2
            id="apoio-urgente-heading"
            className="font-serif text-2xl font-bold text-ink-strong mb-3"
          >
            Canais públicos gratuitos de urgência e apoio
          </h2>
          <p className="text-sm text-ink-muted mb-5">
            Se houver emergência clínica ou necessidade de escuta imediata, procure ajuda
            humana diretamente nos serviços oficiais:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {EMERGENCY_CONTACTS.map((contact) => (
              <a
                key={contact.id}
                href={contact.href}
                className="rounded-lg border border-border-strong p-4 hover:bg-surface-subtle transition-colors block"
              >
                <p className="text-base font-bold text-ink-strong">
                  {contact.label}: {contact.phone}
                </p>
                <p className="text-xs text-ink-muted mt-1">{contact.description}</p>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/artigos"
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg bg-brand-primary text-surface-card text-sm font-semibold"
            >
              Explorar artigos publicados
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg border border-border-strong bg-surface-card text-ink-strong text-sm font-semibold"
            >
              Sugerir correção ou tema
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
