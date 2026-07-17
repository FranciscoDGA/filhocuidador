import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Filho Cuidador
        </Link>

        <ul className="hidden md:flex gap-8">
          <li><Link href="/artigos" className="hover:text-blue-600 transition">Artigos</Link></li>
          <li><Link href="/guias" className="hover:text-blue-600 transition">Guias</Link></li>
          <li><Link href="/recursos" className="hover:text-blue-600 transition">Recursos</Link></li>
          <li><Link href="/comunidade" className="hover:text-blue-600 transition">Comunidade</Link></li>
        </ul>

        <button className="md:hidden text-gray-700">☰</button>
      </nav>
    </header>
  );
}
