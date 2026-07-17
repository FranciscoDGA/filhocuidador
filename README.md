# Filho Cuidador 🏥❤️

Portal de conteúdo brasileiro voltado para filhos adultos que cuidam de pais idosos com doenças neurodegenerativas e crônicas.

## 📋 Sobre o Projeto

**Missão**: Ser a referência nacional em informação, acolhimento e orientação prática para cuidadores familiares.

**Público**: Filhos (principalmente filhas, 35-55 anos) que trabalham fora e cuidam de pais com Alzheimer, Parkinson, AVC, demência senil e outras doenças crônicas.

**Diferencial**: O único portal que fala COM o filho cuidador, não SOBRE o idoso. Acolhimento emocional + orientação prática + informação confiável.

## 🎯 Pilares de Conteúdo

1. **Saúde Emocional** - Burnout, culpa, raiva, luto antecipado, solidão
2. **Cuidados Práticos** - Alimentação, medicação, higiene, segurança em casa
3. **Orientação Jurídica e Financeira** - Procuração, interdição, BPC, LOAS, home care
4. **Doenças** - Alzheimer, Parkinson, AVC, demência (em linguagem acessível)
5. **Família e Conflitos** - Irmãos que não ajudam, divisão de custos, cuidador solo

## 🛠 Stack Técnica

- **Frontend**: Next.js + TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Realtime)
- **Deploy**: Vercel
- **CMS**: Markdown files (versionable, simples)
- **SEO**: Next.js App Router + next-seo

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Setup

1. **Clone o repositório**
```bash
git clone <repo-url>
cd filhocuidador
```

2. **Instale dependências**
```bash
npm install
```

3. **Configure variáveis de ambiente**
```bash
cp .env.example .env.local
```

Preencha no `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=seu_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_supabase
```

4. **Rode o servidor de desenvolvimento**
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no browser.

## 📁 Estrutura do Projeto

```
filhocuidador/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Home
│   ├── layout.tsx           # Layout raiz
│   ├── artigos/             # Blog de artigos
│   └── api/                 # API routes
├── components/
│   ├── layout/              # Header, Footer, Layout
│   ├── blog/                # ArticleCard, etc
│   └── home/                # Componentes da homepage
├── content/
│   └── articles/            # Artigos em markdown
├── lib/
│   └── supabase/            # Cliente Supabase
├── public/
│   └── images/              # Imagens estáticas
└── tailwind.config.ts       # Configuração Tailwind
```

## 💬 Tom de Voz

- **Acolhedor** - Como uma amiga que entende
- **Honesto** - Sem falsas esperanças
- **Simples** - Nunca técnico ou clínico
- **Do ponto de vista do filho** - Não do médico
- **Sem julgamento** - Ninguém aqui julgará você por estar cansada

## ⚠️ Disclaimer Padrão

Em todo artigo de saúde:
> "Este conteúdo é informativo. Consulte sempre um profissional de saúde."

## 📊 Métricas de Sucesso (12 meses)

- 50 artigos publicados e indexados
- 10.000 visitas orgânicas/mês
- AdSense aprovado e ativo
- Primeiro e-book lançado

## 💰 Monetização

- Google AdSense
- Afiliados: Amazon, planos de saúde, home care
- E-books próprios
- Comunidade fechada (assinatura) em fase avançada

## 📝 Próximos Passos

- [ ] Página inicial com CTA principal
- [ ] Página de listagem de artigos
- [ ] Página individual de artigos (com markdown render)
- [ ] Integração Supabase para comentários
- [ ] Newsletter/email
- [ ] Sitemap e robots.txt
- [ ] Google Analytics
- [ ] AdSense integration

---

**Feito com ❤️ para filhos cuidadores**
