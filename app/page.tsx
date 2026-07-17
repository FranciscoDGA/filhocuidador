import Link from "next/link";
import Layout from "@/components/layout/Layout";
import ArticleCard from "@/components/blog/ArticleCard";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Você não está sozinha no cuidado
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Orientação prática, acolhimento emocional e informação confiável para filhos que cuidam de pais idosos. O portal que fala COM você, não SOBRE seu pai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/artigos"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Ler Artigos
            </Link>
            <Link
              href="/comunidade"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Entrar na Comunidade
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-600 mb-8">
            ⚠️ <strong>Disclaimer:</strong> Nosso conteúdo é informativo. Consulte sempre um profissional de saúde.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-600">+50</p>
              <p className="text-gray-600">Artigos publicados</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">80%</p>
              <p className="text-gray-600">Mulheres cuidadoras</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">5</p>
              <p className="text-gray-600">Pilares de conteúdo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Conteúdo que importa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">💭 Saúde Emocional</h3>
              <p className="text-gray-600">
                Burnout, culpa, raiva, luto antecipado. Sua saúde mental importa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">👨‍⚕️ Cuidados Práticos</h3>
              <p className="text-gray-600">
                Alimentação, medicação, higiene, segurança em casa. Guias passo a passo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">⚖️ Jurídico & Financeiro</h3>
              <p className="text-gray-600">
                Procuração, interdição, BPC, LOAS, home care. Informação descomplicada.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">🧠 Doenças</h3>
              <p className="text-gray-600">
                Alzheimer, Parkinson, AVC, demência. Entenda fases, sintomas e o que esperar.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">👨‍👩‍👧 Família & Conflitos</h3>
              <p className="text-gray-600">
                Irmãos que não ajudam, cuidador solo, divisão de custos. Você não está sozinho.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-3">📚 E-books & Guias</h3>
              <p className="text-gray-600">
                Recursos em PDF para baixar e compartilhar com a família.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Leitura Recomendada</h2>
            <Link
              href="/artigos"
              className="text-blue-600 font-semibold hover:text-blue-800"
            >
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ArticleCard
              slug="reconhecendo-burnout-cuidador"
              title="Reconhecendo o Burnout do Cuidador"
              excerpt="Sinais de alerta para quando você está no limite. E sim, sua exaustão é legítima."
              category="Saúde Emocional"
              readTime={8}
              date="17 de julho, 2024"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Receba conteúdo na sua caixa</h2>
          <p className="mb-6 text-blue-100">
            Um email por semana com artigos, dicas e recursos para você.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 rounded text-gray-900"
              required
            />
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 px-8 py-3 rounded font-semibold transition"
            >
              Inscrever
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
