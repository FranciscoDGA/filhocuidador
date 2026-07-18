"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className="bg-[#101828] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 mt-24 rounded-t-[40px] md:rounded-t-[80px]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top CTA Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-5xl font-display font-semibold mb-6">
            Vamos caminhar juntos nisso
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 font-body mb-10">
            Junte-se a mais de 4.000 cuidadoras que já recebem nosso apoio emocional semanal.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-gray-600 hover:border-gray-400 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
            >
              Fale Conosco
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-primary hover:bg-brand-primary/90 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
            >
              Inscrever-se
            </button>
          </form>
          {submitted && (
            <p className="font-semibold text-sm mt-4 text-green-400">
              ✓ Obrigado! Verifique seu email para confirmar.
            </p>
          )}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16 border-t border-gray-800 pt-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-brand-primary text-white rounded-lg flex items-center justify-center font-bold text-lg leading-none">
                F
              </div>
              <span className="font-display font-bold text-xl text-white">
                Filho Cuidador
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Informação, acolhimento e orientação prática para atravessar essa fase com mais segurança e amor.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-300 mb-4">Conteúdo</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/categorias/saude-emocional" className="hover:text-white transition-colors">Saúde Emocional</Link></li>
              <li><Link href="/categorias/cuidados-praticos" className="hover:text-white transition-colors">Cuidados Práticos</Link></li>
              <li><Link href="/categorias/entendendo-doenca" className="hover:text-white transition-colors">A Doença</Link></li>
              <li><Link href="/categorias/juridico" className="hover:text-white transition-colors">Jurídico</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-300 mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre nós</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
              <li><Link href="/imprensa" className="hover:text-white transition-colors">Imprensa</Link></li>
              <li><Link href="/apoio" className="hover:text-white transition-colors">Apoie o projeto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-300 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/termos" className="hover:text-white transition-colors">Termos</Link></li>
              <li><Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Filho Cuidador. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
