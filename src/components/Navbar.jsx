import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Wrench, Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Presupuesto', path: '/presupuesto' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Marca / Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2.5 bg-slate-800 border border-slate-700 rounded-xl group-hover:scale-105 transition-transform duration-300">
              <Wrench className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white group-hover:text-amber-500 transition-colors">
                ElectroTech
              </span>
              <span className="block text-[11px] text-amber-400 font-medium tracking-wide">
                Servicios Integrales
              </span>
            </div>
          </Link>

          {/* Navegación Desktop con NavLink */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition-colors duration-200 ${
                    isActive
                      ? 'text-amber-500 font-semibold border-b-2 border-amber-500 pb-1'
                      : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Botón Urgencias 24hs WhatsApp con animación pulsante */}
          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/5491123456789?text=Hola%20ElectroTech,%20tengo%20una%20urgencia%2024hs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg shadow-emerald-500/20 animate-pulse hover:animate-none transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Urgencias 24hs</span>
            </a>
          </div>

          {/* Botón Menú Hamburguesa Móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-amber-500/10 text-amber-500 font-semibold border border-amber-500/30'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <a
            href="https://wa.me/5491123456789?text=Hola%20ElectroTech,%20tengo%20una%20urgencia%2024hs"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center space-x-2 w-full mt-4 px-5 py-3 rounded-xl text-base font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg animate-pulse"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Urgencias 24hs (WhatsApp)</span>
          </a>
        </div>
      )}
    </header>
  );
}
