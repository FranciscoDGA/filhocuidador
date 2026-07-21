import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PrintButton from "@/components/forms/PrintButton";

const kits: Record<string, {
  title: string;
  category: string;
  content: string;
}> = {
  "primeiras-24h-alzheimer": {
    title: "Kit: Primeiras 24h com Alzheimer",
    category: "Diagnóstico",
    content: `
# Kit: Primeiras 24h com Alzheimer

## 1. Documentos Essenciais
- [ ] Laudo médico com diagnóstico
- [ ] Atestado de dependência
- [ ] RG e CPF do idoso
- [ ] Cartão SUS
- [ ] Lista de medicamentos em uso
- [ ] Exames anteriores

## 2. Contatos Importantes
- [ ] Geriatra / Neurologista
- [ ] Advogado (Direito do Idoso)
- [ ] Farmácia de plantão
- [ ] SAMU: 192
- [ ] CVV: 188

## 3. Primeiros Passos
1. Mantenha a calma — o diagnóstico não é o fim
2. Organize todos os documentos em uma pasta
3. Liste todos os medicamentos com horários
4. Consulte um advogado sobre procuração
5. Comece a organizar a rotina diária

## 4. Cuidados Imediatos
- Instale barras de apoio no banheiro
- Retire tapetes soltos
- Trave armárias com produtos perigosos
- Ilumine bem todos os cômodos
- Mantenha telefone de emergência acessível

## 5. Rede de Apoio
- [ ] Informar vizinhos e portaria
- [ ] Trocar contatos com outros cuidadores
- [ ] Pesquisar grupos de apoio na região
- [ ] Definir quem ajuda em emergências
- [ ] Conversar com a família

---
*Filhos Cuidadores — filhoscuidadores.com.br*
    `,
  },
  "agressividade-confusao": {
    title: "Kit: Agressividade e Confusão",
    category: "Comportamento",
    content: `
# Kit: Agressividade e Confusão

## 10 Técnicas para Episódios de Agressividade

### 1. Não confronte
Nunca discuta ou tente raciocinar com a pessoa. Valide o sentimento: "Eu entendo que você está irritado."

### 2. Fale baixo e devagar
Tom de voz baixo e calmo. Frases curtas. Uma ideia por vez.

### 3. Mude de assunto
Se a agressividade está escalando, mude completamente o tema. "Olha que lindo o sol hoje."

### 4. Ofereça algo
Água, chá, um biscoito. Ação física pode quebrar o ciclo de agitação.

### 5. Verifique a causa
Dor? Fome? Cansaço? Medo? Muitas vezes a agressividade tem uma causa física.

### 6. Não leve para o pessoal
A agressividade é da doença, não da pessoa. Repita isso para si mesmo.

### 7. Dê espaço
Se for seguro, deixe a pessoa sozinha por alguns minutos. Não a segure contra a vontade.

### 8. Use música
Música que a pessoa gosta pode acalmar. Evite sons altos ou estridentes.

### 9. Anote o episódio
Data, hora, o que aconteceu antes, duração. Padrões ajudam o médico a ajustar medicação.

### 10. Peça ajuda
Se não consegue lidar sozinho, ligue para um familiar ou profissional de saúde.

## Números de Emergência
- SAMU: 192
- Bombeiros: 193
- Polícia: 190
- CVV (crise emocional): 188

---
*Filhos Cuidadores — filhoscuidadores.com.br*
    `,
  },
  "casa-segura": {
    title: "Kit: Casa Segura",
    category: "Segurança",
    content: `
# Kit: Casa Segura — Adaptando o Lar

## Cozinha
- [ ] Travar armárias com produtos de limpeza
- [ ] Retirar facas de bancada
- [ ] Desligar fogão quando não estiver em uso
- [ ] Instalar detector de fumaça
- [ ] Manter extintor acessível

## Banheiro
- [ ] Instalar barras de apoio na parede
- [ ] Colocar assento para banho
- [ ] Retirar tapetes
- [ ] Antiderrapante na chuveira
- [ ] Porta-chave fácil de abrir

## Quarto
- [ ] Cama na altura certa (nem alta demais)
- [ ] Luminária de fácil acesso
- [ ] Sem tapetes
- [ ] Caminhos livres de obstáculos
- [ ] Plantão de noite acessível

## Sala
- [ ] Móveis fixos (não móveis)
- [ ] Iluminação adequada
- [ ] Sem fios no chão
- [ ] Telefone sempre ao alcance
- [ ] Sofá com apoio para levantar

## Geral
- [ ] Fechaduras que o idoso não consiga abrir
- [ ] Alarme de porta/janela
- [ ] Iluminação noturna nos corredores
- [ ] Itens pessoais sempre no mesmo lugar
- [ ] Número de emergência em local visível

---
*Filhos Cuidadores — filhoscuidadores.com.br*
    `,
  },
  "direitos-cuidador": {
    title: "Kit: Direitos do Cuidador",
    category: "Jurídico",
    content: `
# Kit: Direitos do Cuidador

## 1. BPC/LOAS (Benefício de Prestação Continuada)
- **O que é:** Benefício mensal de 1 salário mínimo
- **Requisitos:** Idoso 65+ ou pessoa com deficiência de qualquer idade + renda familiar per capita baixa
- **Como solicitar:** INSS ou Centro de Referência de Assistência Social (CRAS)
- **Documentos:** RG, CPF, comprovante de residência, laudo médico, comprovante de renda

## 2. Procuração
- **Para que serve:** Autorizar alguém a tomar decisões pelo idoso
- **Como fazer:** Em cartório, com o idoso presente e lúcido
- **Custo:** A partir de R$ 150
- **Dica:** Faça enquanto o idoso ainda tem lucidez

## 3. Curatela
- **Quando:** Quando o idoso não tem mais lucidez para dar procuração
- **Processo:** Judicial — precisa de advogado
- **Prazo:** 3 a 12 meses
- **Custo:** Advocacia + custas judiciais

## 4. Isenção de Imposto de Renda
- **Para quem:** Idosos com renda mensal até R$ 3.856,00 (2024)
- **Como:** Solicitar à Receita Federal
- **Documentos:** Declaração do médico + formulário específico

## 5. Isenção de IPVA
- **Varia por estado:** Alguns estados isentam idosos acima de certa idade
- **Consulte:** Secretaria da Fazenda do seu estado

## 6. Prioridade em Filas
- **Lei:** Idosos têm prioridade em filas e atendimentos (Estatuto do Idoso)
- **Artigo:** 3º da Lei 10.741/2003

## 7. Afastamento do Trabalho
- **Possível:** Licença remunerada para cuidar de familiar enfermo
- **Lei:** Consolidação das Leis do Trabalho (CLT)
- **Prazo:** Até 30 dias por ano

---
*Filhos Cuidadores — filhoscuidadores.com.br*
    `,
  },
  "alimentacao-saudavel": {
    title: "Kit: Alimentação Saudável",
    category: "Nutrição",
    content: `
# Kit: Alimentação Saudável para Idosos com Demência

## Princípios Básicos
- Alimentos macios e fáceis de mastigar
- Porções pequenas e frequentes (5-6 refeições)
- Texturas adequadas (pisado, amassado, líquido)
- Apresentação atraente (despertar apetite)
- Horários regulares

## Cardápio Semanal Sugerido

### Segunda
- Café: Frutas picadas + iogurte
- Almoço: Arroz + frango desfiado + abobrinha
- Lanche: Suco de frutas + biscoito
- Jantar: Sopa de legumes + pão mole

### Terça
- Café: Mingau de aveia + banana
- Almoço: Arroz + peixe + cenoura
- Lanche: Vitamina de frutas
- Jantar: Purê de batata + sopa

### Quarta
- Café: Frutas + queijo branco
- Almoço: Arroz + carne moída + abóbora
- Lanche: Iogurte + frutas
- Jantar: Creme de legumes

### Quinta
- Café: Panqueca de banana
- Almoço: Arroz + ovo + espinafre
- Lanche: Suco + biscoito
- Jantar: Sopa de frango

### Sexta
- Café: Frutas + granola
- Almoço: Arroz + frango + batata doce
- Lanche: Vitamina
- Jantar: Caldo de legumes

### Sábado
- Café: Tapioca com queijo
- Almoço: Arroz + peixe + salada
- Lanche: Frutas
- Jantar: Sopa

### Domingo
- Café: Pão + ovo + frutas
- Almoço: Arroz + carne + legumes
- Lanche: Iogurte
- Jantar: Creme de aveia

## Alimentos que Ajudam a Cognição
- Peixes (salmão, sardinha) — Ômega 3
- Frutas vermelhas — Antioxidantes
- Nozes e castanhas — Gorduras boas
- Folhas verdes — Folato, vitamina K
- Azeite de oliva — Gordura saudável

## Alimentos a Evitar
- Açúcar refinado
- Alimentos ultraprocessados
- Excesso de sal
- Carnes vermelhas em excesso
- Álcool

---
*Filhos Cuidadores — filhoscuidadores.com.br*
    `,
  },
  "cuidador-sobrevivente": {
    title: "Kit: Cuidador Sobrevivente",
    category: "Saúde Mental",
    content: `
# Kit: Cuidador Sobrevivente

## Quiz Rápido de Burnout
Responda para cada item: Nunca (0) / Às vezes (1) / Frequentemente (2) / Sempre (3)

1. Você se sente exausto mesmo depois de dormir?
2. Sente que não consegue mais lidar com as situações?
3. Perdeu o interesse por atividades que gostava?
4. Sente irritação constante?
5. Tem dificuldade para dormir?
6. Sente culpa por não estar fazendo o suficiente?
7. Isolou-se de amigos e familiares?
8. Sente que sua saúde está piorando?
9. Chora sem motivo aparente?
10. Pensa em desistir?

**Resultado:** 0-10 = Baixo | 11-20 = Moderado | 21-30 = Alto | 31-30 = Muito Alto

## Sinais de Alerta
- Insônia crônica
- Dores no corpo sem causa
- Irritabilidade constante
- Perda de apetite
- Isolamento social
- Desesperança
- Uso de álcool ou medicamentos para "aguentar"

## O Que Fazer Agora
1. **Reconheça** — Você não está bem, e isso é ok
2. **Fale** — Com um amigo, familiar, ou profissional
3. **Procure ajuda** — Psicólogo, grupo de apoio, linha de apoio
4. **Cuide de si** — Exercício, alimentação, sono
5. **Divida** — Não faça tudo sozinho

## Grupos de Apoio
- CVV: 188 (24h)
- CVV WhatsApp: (11) 3187-1408
- Grupos no Facebook: "Cuidadores de Idosos"
- CAPS: Centro de Atenção Psicossocial

## Autoajuda Diária
- 10 minutos de caminhada
- Respiração profunda (5 minutos)
- Ligar para 1 amigo
- Escrever 3 coisas pelas quais é grato
- Dormir 7-8 horas

---
*Filhos Cuidadores — filhoscuidadores.com.br*
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const kit = kits[slug];
  if (!kit) return {};

  return {
    title: `${kit.title} | Kits de Emergência`,
    description: `Baixe gratuitamente: ${kit.title}. Guia prático para cuidadores.`,
  };
}

export function generateStaticParams() {
  return Object.keys(kits).map((slug) => ({ slug }));
}

export default async function KitDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const kit = kits[slug];

  if (!kit) notFound();

  return (
    <main className="bg-bg-base min-h-screen py-12 lg:py-16">
      <div className="max-w-[700px] mx-auto px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-2 text-[11px] text-brand-secondary/50">
          <Link href="/" className="hover:text-brand-primary transition">Início</Link>
          <span>/</span>
          <Link href="/kits" className="hover:text-brand-primary transition">Kits</Link>
          <span>/</span>
          <span className="text-brand-primary">{kit.title}</span>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[10px] font-medium tracking-wider uppercase text-brand-accent mb-2 block">
              {kit.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-display font-medium text-brand-primary">
              {kit.title}
            </h1>
          </div>
          <PrintButton />
        </div>

        <div className="bg-white border border-border-base p-6 lg:p-8 prose prose-sm prose-gray max-w-none print:border-0 print:p-0">
          <div
            dangerouslySetInnerHTML={{
              __html: kit.content
                .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-display font-medium text-brand-primary mb-4">$1</h1>')
                .replace(/^## (.+)$/gm, '<h2 class="text-lg font-display font-medium text-brand-primary mt-6 mb-3">$1</h2>')
                .replace(/^### (.+)$/gm, '<h3 class="text-base font-display font-medium text-brand-primary mt-4 mb-2">$1</h3>')
                .replace(/^- \[ \] (.+)$/gm, '<div class="flex items-center gap-2 my-1"><input type="checkbox" class="w-4 h-4" /><span class="text-sm text-brand-secondary">$1</span></div>')
                .replace(/^- (.+)$/gm, '<li class="text-sm text-brand-secondary ml-4">$1</li>')
                .replace(/^(\d+)\. (.+)$/gm, '<div class="flex gap-3 my-1"><span class="text-sm font-medium text-brand-accent shrink-0">$1.</span><span class="text-sm text-brand-secondary">$2</span></div>')
                .replace(/\*\*(.+?)\*\*/g, '<strong class="text-brand-primary">$1</strong>')
                .replace(/^---$/gm, '<hr class="my-6 border-border-base" />')
                .replace(/\n\n/g, '<br/>')
            }}
          />
        </div>

        <div className="mt-8 print:hidden">
          <Link
            href="/kits"
            className="inline-flex items-center text-[11px] font-medium tracking-wide uppercase text-brand-primary border-b border-brand-primary/20 hover:border-brand-primary/60 pb-0.5 transition-colors"
          >
            ← Voltar para os Kits
          </Link>
        </div>
      </div>
    </main>
  );
}
