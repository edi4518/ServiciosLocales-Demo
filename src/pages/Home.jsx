import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Wrench, Thermometer, CheckCircle, Clock, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  const especialidades = [
    {
      id: 'electricidad',
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      titulo: 'Electricidad Residencial & Comercial',
      descripcion: 'Solución inmediata de cortocircuitos, armado de tableros térmicos, renovaciones de cableados de potencia y certificaciones APSE.',
    },
    {
      id: 'plomeria',
      icon: <Wrench className="w-8 h-8 text-amber-500" />,
      titulo: 'Plomería & Gas Certificado',
      descripcion: 'Detección de fugas no visibles, destapaciones con maquinaria rotativa, montaje de termotanques y habilitaciones de redes de gas.',
    },
    {
      id: 'climatizacion',
      icon: <Thermometer className="w-8 h-8 text-amber-500" />,
      titulo: 'Climatización & Aire Acondicionado',
      descripcion: 'Instalaciones normalizadas de equipos Split y Centrales, carga de gas refrigerante R410/R32 y service preventivo de temporada.',
    },
  ];

  const metricas = [
    {
      icon: <Users className="w-7 h-7 text-amber-500" />,
      valor: '+1.500',
      label: 'Trabajos Realizados',
      sublabel: 'En hogares, consorcios y locales'
    },
    {
      icon: <Clock className="w-7 h-7 text-amber-500" />,
      valor: '30 min',
      label: 'Llegada en Urgencias',
      sublabel: 'Unidades de respuesta rápida'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-amber-500" />,
      valor: '6 Meses',
      label: 'Garantía por Escrito',
      sublabel: 'En repuestos e instalación'
    },
    {
      icon: <CheckCircle className="w-7 h-7 text-amber-500" />,
      valor: '100%',
      label: 'Técnicos Matriculados',
      sublabel: 'Personal certificado y calificado'
    },
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-28 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            
            {/* Badge Superior */}
            <div className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>TÉCNICOS MATRICULADOS Y CERTIFICADOS</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Soluciones Rápidas y Garantizadas en{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 bg-clip-text text-transparent">
                Electricidad, Plomería y Climatización
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Atención inmediata de urgencias las 24 horas, presupuestos transparentes sin cargos ocultos y garantía formal por escrito en cada intervención.
            </p>

            {/* Botones de Acción Principales */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/presupuesto"
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 text-center"
              >
                Solicitar Presupuesto
              </Link>
              <Link
                to="/servicios"
                className="w-full sm:w-auto border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white px-6 py-3 rounded-xl transition-all text-center bg-slate-900/60"
              >
                Ver Servicios
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Grilla de Especialidades Destacadas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Especialidades Destacadas</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Servicios técnicos profesionales adaptados a necesidades residenciales y comerciales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {especialidades.map((esp) => (
            <div
              key={esp.id}
              className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/40 transition-all shadow-xl flex flex-col justify-between space-y-6 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="p-3 bg-slate-800/80 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  {esp.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{esp.titulo}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{esp.descripcion}</p>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <Link
                  to="/servicios"
                  className="text-amber-500 hover:text-amber-400 font-semibold text-sm inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Ver detalles y tarifas</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Sección de Indicadores de Confianza / Métricas */}
      <section className="bg-slate-900 border-y border-slate-800 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metricas.map((met, idx) => (
              <div key={idx} className="space-y-2 p-4 rounded-xl bg-slate-950/40 border border-slate-800/60">
                <div className="mx-auto w-fit p-3 bg-slate-900 rounded-xl mb-2">
                  {met.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-500">{met.valor}</div>
                <div className="text-base font-bold text-white">{met.label}</div>
                <div className="text-xs text-slate-400">{met.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
