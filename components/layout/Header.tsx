import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-primary text-white rounded-lg flex items-center justify-center font-bold text-lg leading-none">
                F
              </div>
              <span className="font-display font-bold text-xl text-gray-900">
                Filho Cuidador
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
              Início
            </Link>
            <Link href="/saude-emocional" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
              Saúde Emocional
            </Link>
            <Link href="/cuidados-praticos" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
              Cuidados
            </Link>
            <Link href="/sobre" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
              Sobre nós
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
              Log in
            </Link>
            <Link href="/comunidade" className="bg-gray-900 hover:bg-black text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors">
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Abrir menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
