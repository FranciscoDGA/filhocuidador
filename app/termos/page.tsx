import type { Metadata } from "next";
import Link from "next/link";
import { EMERGENCY_CONTACTS, getSiteUrl, SITE_INFO } from "@/lib/site";

export const metadata: Metadata = {
  title: `Termos de Uso | ${SITE_INFO.name}`,
  description:
    "Condições de uso, caráter estritamente informativo dos guias e limitações de responsabilidade do Filho Cuidador.",
  alternates: {
    canonical: "/termos",
  },
  openGraph: {
    title: `Termos de Uso | ${SITE_INFO.name}`,
    description:
      "Regras transparentes de uso e aviso de responsabilidade sobre conteúdos de saúde e direitos no Filho Cuidador.",
    url: "/termos",
    type: "website",
  },
};

export default function TermosPage() {
  const siteUrl = getSiteUrl();

  return (
    <main id="conteudo-principal" className="min-h-screen bg-surface-page py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 pb-8 border-b border-border-subtle">
          <p className="text-xs font-bold uppercase tracking-widest text-ink-muted mb-2">
            Regras de utilização
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-ink-strong mb-3">
            Termos de Uso
          </h1>
          <p className="text-sm text-ink-muted">
            Última revisão: 24 de novembro de 2026
          </p>
        </header>

        <div className="space-y-8 text-base text-ink-body leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl font-bold text-ink-strong mb-3">
              1. Finalidade do portal
            </h2>
            <p>
              Ao acessar o portal <strong>{SITE_INFO.name}</strong> ({siteUrl}), você
              concorda com estes Termos de Uso. O portal publica conteúdos introdutórios e
              guias práticos voltados a filhos e familiares que acompanham pessoas idosas.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-ink-strong mb-3">
              2. Conteúdo informativo não substitui atendimento profissional
            </h2>
            <p className="mb-3">
              Todos os guias têm finalidade exclusivamente educativa e informativa. Eles{" "}
              <strong>não substituem</strong> diagnóstico, prescrição medicamentosa,
              conduta médica, psicoterapia, orientação nutricional ou consultoria jurídica e
              previdenciária individualizada.
            </p>
            <p>
              Nunca inicie, interrompa ou altere dosagens de medicamentos por conta
              própria. Sobre benefícios assistenciais e previdenciários, confirme sempre os
              critérios vigentes junto aos canais oficiais (gov.br, INSS, CRAS ou
              Defensoria Pública).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-ink-strong mb-3">
              3. Urgências e emergência
            </h2>
            <p className="mb-3">
              Este site não realiza plantão, triagem clínica nem atendimento emergencial.
              Em situações urgentes no Brasil, utilize diretamente os serviços públicos:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base">
              {EMERGENCY_CONTACTS.map((contact) => (
                <li key={contact.id}>
                  <strong>
                    {contact.label} ({contact.phone}):
                  </strong>{" "}
                  {contact.description}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-ink-strong mb-3">
              4. Links externos e alterações de conteúdo
            </h2>
            <p>
              O portal pode apontar para páginas oficiais do governo brasileiro ou fontes
              de referência pública, mas não controla a disponibilidade nem eventuais
              alterações desses domínios externos. Guias desatualizados podem ser removidos
              temporariamente para revisão editorial.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-ink-strong mb-3">
              5. Contato e privacidade
            </h2>
            <p>
              Dúvidas ou pedidos de correção editorial podem ser encaminhados pela página
              de{" "}
              <Link href="/contato" className="underline text-ink-strong font-medium">
                Contato
              </Link>
              . O tratamento de dados segue o descrito na{" "}
              <Link href="/privacidade" className="underline text-ink-strong font-medium">
                Política de Privacidade
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
