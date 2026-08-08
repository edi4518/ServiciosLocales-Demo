import { Link } from 'react-router-dom';
import { Award, ShieldCheck, DollarSign, Cpu, CheckCircle, ArrowRight, MessageCircle, Wrench, Zap } from 'lucide-react';

export default function Nosotros() {
  const pilares = [
    {
      icon: <Award className="w-8 h-8 text-amber-500" />,
      titulo: 'Matrícula & Certificación',
      descripcion: 'Personal técnico calificado y matriculado formalmente ante ENRE, Metrogas y cámaras provinciales del sector eléctrico y de gas.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-amber-500" />,
      titulo: 'Presupuestos Transparentes',
      descripcion: 'Cotizaciones claras y detalladas antes de iniciar cada labor. Sin cargos ocultos, adicionales de último momento ni sorpresas.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      titulo: 'Garantía Escrita de 6 Meses',
      descripcion: 'Respaldamos la calidad de nuestros materiales e intervenciones con una garantía formal por escrito en cada factura emitida.'
    }
  ];

  const tecnologia = [
    {
      titulo: 'Detección Digital de Fugas',
      desc: 'Equipos ultrasónicos y de presión para ubicar fugas de gas y pérdidas de agua sin romper paredes de forma inútil.'
    },
    {
      titulo: 'Cámaras Termográficas',
      desc: 'Inspección por infrarrojo para identificar puntos calientes en tableros eléctricos y fallas de aislación térmica.'
    },
    {
      titulo: 'Maquinaria Rotativa de Destape',
      desc: 'Sistemas electromecánicos con resortes de acero templado para limpieza profunda y desobstrucción de cañerías.'
    }
  ];

  return (
    <div className="space-y-20 pb-16">
      
      {/* Hero / Encabezado */}
      <section className="relative overflow-hidden pt-12 pb-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <div className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>MÁS DE 10 AÑOS DE EXPERIENCIA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
            Compromiso, Calidad y Transparencia en Cada Instalación
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            ElectroTech nació para elevar los estándares de servicio técnico en electricidad, plomería y climatización en hogares y comercios.
          </p>

        </div>
      </section>

      {/* Sección Historia & Propósito */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-extrabold text-white">Nuestra Historia y Propósito</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Fundada con el objetivo de brindar una respuesta profesional, rápida y matriculada a problemas edilicios urgentes y de obra, ElectroTech ha crecido hasta convertirse en un referente de confianza en CABA y el Gran Buenos Aires.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Combinamos personal técnico altamente capacitado con tecnología de vanguardia para asegurar que cada cliente obtenga un trabajo seguro, normado y duradero. Nuestro compromiso es la tranquilidad y seguridad de tu hogar o espacio comercial.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-amber-400">
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Matrículas Oficiales</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Facturación A y B</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Seguro de Responsabilidad Civil</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4 text-slate-300">
            <div className="flex items-center space-x-3 text-amber-500 font-bold text-lg">
              <Wrench className="w-6 h-6" />
              <span>Estándares de Trabajo</span>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Atención inmediata en menos de 30 minutos para urgencias</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Protocolos estrictos de seguridad eléctrica y hermeticidad de gas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Uso exclusivo de materiales homologados por IRAM</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Grilla de Valores / Pilares */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Nuestros Pilares Fundamentales</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Principios sobre los que construimos cada uno de nuestros servicios diarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pilares.map((pilar, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl hover:border-amber-500/40 transition-all shadow-xl space-y-4"
            >
              <div className="p-3 bg-slate-800 rounded-xl w-fit">
                {pilar.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{pilar.titulo}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pilar.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Equipo & Tecnología */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Cpu className="w-4 h-4" />
            <span>TECNOLOGÍA Y HERRAMIENTAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Equipamiento Técnico de Última Generación</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tecnologia.map((tec, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
              <h4 className="text-lg font-bold text-amber-400">{tec.titulo}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{tec.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Banner CTA Inferior */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-3xl font-black tracking-tight text-slate-950">
              ¿Tenés una urgencia o consulta técnica?
            </h3>
            <p className="text-slate-900 font-semibold text-base">
              Comunicate con nuestro equipo para recibir asesoramiento o solicitar un técnico de guardia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              to="/contacto"
              className="px-6 py-3.5 rounded-xl text-sm font-bold bg-slate-950 hover:bg-slate-900 text-white transition-all text-center flex items-center justify-center space-x-2"
            >
              <span>Ver Vías de Contacto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/541155559999?text=Hola%20ElectroTech,%20quisiera%20realizar%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all text-center flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
