import { Link } from 'react-router-dom';
import { Wrench, MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grilla a 4 columnas en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Columna 1: Logo + Descripción */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-slate-800 border border-slate-700 rounded-xl">
                <Wrench className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-xl font-black text-white">ElectroTech</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Empresa líder en servicios integrales de electricidad, plomería y climatización. Contamos con personal matriculado y certificado para garantizar soluciones seguras en hogares y comercios.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-500 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-amber-500 transition-colors">Servicios</Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-amber-500 transition-colors">Nosotros</Link>
              </li>
              <li>
                <Link to="/presupuesto" className="hover:text-amber-500 transition-colors">Presupuesto</Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-amber-500 transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios Principales */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Servicios Principales
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-slate-200 transition-colors">Electricidad Residencial e Industrial</li>
              <li className="hover:text-slate-200 transition-colors">Plomería & Redes de Gas</li>
              <li className="hover:text-slate-200 transition-colors">Climatización & Aire Acondicionado</li>
              <li className="hover:text-slate-200 transition-colors">Atención de Urgencias 24/7</li>
              <li className="hover:text-slate-200 transition-colors">Mantenimiento Preventivo</li>
            </ul>
          </div>

          {/* Columna 4: Datos de Contacto y Cobertura (CABA & GBA) */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contacto & Cobertura
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Cobertura completa en CABA & GBA (Buenos Aires)</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>+54 9 11 2345-6789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>contacto@electrotech.com.ar</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>Atención 24hs / Emergencias</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© 2026 ElectroTech. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
