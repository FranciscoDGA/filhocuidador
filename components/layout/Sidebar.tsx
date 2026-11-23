import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-full lg:w-80 space-y-12">
      {/* Flash News */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">FLASH NEWS</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <Link key={item} href="#" className="group flex gap-4 items-center">
              <div className="flex-1">
                <h4 className="text-sm font-bold text-gray-900 group-hover:text-gray-600 leading-snug mb-1">
                  Pequenas atitudes que mudam o dia
                </h4>
                <p className="text-xs text-gray-400">• 13 Jun, 2026</p>
              </div>
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <svg className="absolute inset-0 w-full h-full text-gray-300 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pilares Temáticos */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">PILARE DE APOIO</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
        <div className="space-y-3">
          {[
            { title: "Saúde Emocional do Cuidador", desc: "Burnout, culpa e acolhimento", href: "/saude-emocional" },
            { title: "Cuidados Práticos Diários", desc: "Higiene, banho seguro e sono", href: "/cuidados-praticos" },
            { title: "Direitos & Finanças", desc: "BPC, medicamentos SUS e curatela", href: "/direitos-financas" },
            { title: "Rotina & Organização Familiar", desc: "Divisão de tarefas e rotinas", href: "/rotina-organizacao" },
          ].map((pillar, idx) => (
            <Link key={idx} href={pillar.href} className="block p-3 rounded-xl border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition">
              <h4 className="text-sm font-bold text-gray-900">{pillar.title}</h4>
              <p className="text-xs text-gray-500 mt-0.5">{pillar.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Follow Us */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">SIGA-NOS</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <a href="#" className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-gray-300 transition">
            <span className="text-sm font-medium">Facebook</span>
            <span className="text-xs text-gray-400">12k</span>
          </a>
          <a href="#" className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-gray-300 transition">
            <span className="text-sm font-medium">Twitter</span>
            <span className="text-xs text-gray-400">12k</span>
          </a>
          <a href="#" className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-gray-300 transition">
            <span className="text-sm font-medium">Instagram</span>
            <span className="text-xs text-gray-400">13k</span>
          </a>
          <a href="#" className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-gray-300 transition">
            <span className="text-sm font-medium">Youtube</span>
            <span className="text-xs text-gray-400">12k</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
