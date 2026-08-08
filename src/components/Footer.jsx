import { Link } from 'react-router-dom';
import { Wrench, MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Footer() {
  const serviciosPrincipales = [
    { nombre: 'Electricidad Residencial e Industrial', path: '/servicios' },
    { nombre: 'Plomería & Redes de Gas', path: '/servicios' },
    { nombre: 'Climatización & Aire Acondicionado', path: '/servicios' },
    { nombre: 'Atención de Urgencias 24/7', path: '/servicios' },
    { nombre: 'Mantenimiento Preventivo', path: '/servicios' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grilla a 4 columnas en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Columna 1: Logo + Descripción */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="p-2 bg-slate-800 border border-slate-700 rounded-xl group-hover:scale-105 transition-transform duration-300">
                <Wrench className="w-5 h-5 text-amber-500" />
              </div>
              <span className="text-xl font-black text-white group-hover:text-amber-500 transition-colors">
                ElectroTech
              </span>
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
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 inline-block text-slate-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 inline-block text-slate-300">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 inline-block text-slate-300">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/presupuesto" className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 inline-block text-slate-300">
                  Presupuesto
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 inline-block text-slate-300">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Servicios Principales Interactivos */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Servicios Principales
            </h3>
            <ul className="space-y-2.5 text-sm">
              {serviciosPrincipales.map((srv, idx) => (
                <li key={idx}>
                  <Link
                    to={srv.path}
                    className="hover:text-amber-400 hover:translate-x-1 transition-all duration-200 inline-block text-slate-300"
                  >
                    {srv.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Datos de Contacto y Cobertura con Enlaces */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contacto & Cobertura
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>Cobertura completa en CABA & GBA (Buenos Aires)</span>
              </li>
              
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a
                  href="https://wa.me/5491123456789?text=Hola!%20Quiero%20hacer%20una%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors text-slate-300 font-medium"
                >
                  +54 9 11 2345-6789
                </a>
              </li>
              
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a
                  href="mailto:contacto@electrotech.com.ar"
                  className="hover:text-amber-400 transition-colors underline-offset-4 hover:underline text-slate-300"
                >
                  contacto@electrotech.com.ar
                </a>
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
