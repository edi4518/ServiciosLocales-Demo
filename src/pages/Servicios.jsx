import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Wrench, Thermometer, Check } from 'lucide-react';

export default function Servicios() {
  const location = useLocation();
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  const categorias = ['Todos', 'Electricidad', 'Plomería', 'Climatización'];

  // Escuchar si proviene un estado de navegación interno (ej: desde Footer)
  useEffect(() => {
    if (location.state?.categoria) {
      setCategoriaActiva(location.state.categoria);
    }
  }, [location.state]);

  const servicios = [
    {
      id: 1,
      categoria: 'Electricidad',
      titulo: 'Instalación y Readecuación de Tableros Eléctricos',
      descripcion: 'Actualización de tableros monofásicos y trifásicos con térmicas de última generación, disyuntores de seguridad y puesta a tierra.',
      precio: 'Desde $25.000',
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      tareas: [
        'Disyuntores y térmicas normalizados',
        'Medición de puesta a tierra con jabalina',
        'Balanceo de cargas por fase',
        'Emisión de informe técnico APSE'
      ]
    },
    {
      id: 2,
      categoria: 'Electricidad',
      titulo: 'Búsqueda y Reparación de Cortocircuitos 24hs',
      descripcion: 'Detección de fugas de corriente, recargo de fases y reparación de emergencias eléctricas en residencias y comercios.',
      precio: 'Desde $18.000',
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      tareas: [
        'Localización de fugas y cortocircuitos',
        'Reemplazo de cableados sobrecalentados',
        'Restablecimiento de luz e iluminación',
        'Guardia nocturna y feriados 24/7'
      ]
    },
    {
      id: 3,
      categoria: 'Plomería',
      titulo: 'Destapaciones Mecánicas y Limpieza de Cañerías',
      descripcion: 'Desobstrucción técnica con equipos electromecánicos de resortes rotativos para cloacas, rejillas y piletas.',
      precio: 'Desde $22.000',
      icon: <Wrench className="w-6 h-6 text-amber-500" />,
      tareas: [
        'Limpieza mecánica sin romper estructuras',
        'Destape de pluviales y cloacales',
        'Limpieza de graseras y trampas',
        'Mantenimiento preventivo de cañerías'
      ]
    },
    {
      id: 4,
      categoria: 'Plomería',
      titulo: 'Instalación y Mantenimiento de Termotanques / Calefones',
      descripcion: 'Instalación y service de calentadores de agua solares, eléctricos y a gas realizados por gasistas matriculados.',
      precio: 'Desde $28.000',
      icon: <Wrench className="w-6 h-6 text-amber-500" />,
      tareas: [
        'Gasistas matriculados oficiales',
        'Prueba de hermeticidad y fuga de gas',
        'Limpieza de quemadores y ánodos',
        'Conexión de agua fría, caliente y ventilaciones'
      ]
    },
    {
      id: 5,
      categoria: 'Climatización',
      titulo: 'Instalación Certificada de Aire Acondicionado Split',
      precio: 'Desde $45.000',
      descripcion: 'Montaje profesional de equipos Split y Multisplit manteniendo la garantía formal de la marca fabricante.',
      icon: <Thermometer className="w-6 h-6 text-amber-500" />,
      tareas: [
        'Kit completo de cañería de cobre hasta 3m',
        'Vacío técnico con bomba de doble etapa',
        'Soportes reforzados y aislación anticondensación',
        'Prueba de estanqueidad con nitrógeno'
      ]
    },
    {
      id: 6,
      categoria: 'Climatización',
      titulo: 'Mantenimiento Preventivo y Carga de Gas Refrigerante',
      precio: 'Desde $20.000',
      descripcion: 'Carga de gas R410a / R22, control de presiones de trabajo y desinfección química de turbinas y serpentinas.',
      icon: <Thermometer className="w-6 h-6 text-amber-500" />,
      tareas: [
        'Carga de gas refrigerante R410a / R22',
        'Desinfección de filtros y turbina evaporadora',
        'Control de rendimiento energético',
        'Reparación de microfugas de gas'
      ]
    }
  ];

  const serviciosFiltrados = categoriaActiva === 'Todos'
    ? servicios
    : servicios.filter(s => s.categoria === categoriaActiva);

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* 1. Encabezado de Página */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
          NUESTRO CATÁLOGO DE SERVICIOS
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Soluciones Especializadas para el Hogar y Comercio
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Todos los trabajos incluyen diagnóstico inicial sin cargo, presupuesto transparente pre-aprobado y garantía formal por escrito.
        </p>
      </div>

      {/* 2. Barra de Filtros por Categoría */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              categoriaActiva === cat
                ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. Grilla de Tarjetas de Servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviciosFiltrados.map((srv) => (
          <div
            key={srv.id}
            className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/40 transition-all shadow-xl flex flex-col justify-between space-y-6 group"
          >
            <div className="space-y-4">
              
              <div className="flex items-center justify-between">
                <div className="p-3 bg-slate-800 rounded-xl group-hover:scale-110 transition-transform">
                  {srv.icon}
                </div>
                <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs px-3 py-1 rounded-full font-medium">
                  {srv.categoria}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{srv.titulo}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{srv.descripcion}</p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                  Incluye:
                </span>
                <ul className="space-y-2">
                  {srv.tareas.map((tarea, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{tarea}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400 font-medium">Precio estimado:</span>
                <span className="text-xl font-extrabold text-amber-500">{srv.precio}</span>
              </div>

              <Link
                to="/presupuesto"
                state={{ categoria: srv.categoria.toLowerCase(), servicioId: srv.id }}
                className="bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 w-full py-2.5 rounded-xl font-semibold transition-all text-center block mt-4"
              >
                Pedir Presupuesto
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
