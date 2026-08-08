import { Shield, Award, Users, ThumbsUp } from 'lucide-react';

export default function Nosotros() {
  const valores = [
    {
      icon: <Shield className="w-8 h-8 text-indigo-400" />,
      title: 'Transparencia y Honestidad',
      desc: 'Presupuestos claros sin costos ocultos antes de iniciar cualquier labor.'
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      title: 'Personal Capacitado',
      desc: 'Técnicos calificados y matriculados con años de experiencia en el rubro.'
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-400" />,
      title: 'Atención Personalizada',
      desc: 'Seguimiento cercano y directo para atender cada requerimiento específico.'
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-amber-400" />,
      title: 'Garantía de Trabajo',
      desc: 'Todos nuestros trabajos cuentan con respado escrito de calidad y servicio.'
    }
  ];

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Intro */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white">Sobre ServiPro Local</h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Somos un equipo multidisciplinario de profesionales enfocados en resolver problemas de infraestructura, electricidad, plomería y mantenimiento en hogares y comercios locales.
        </p>
      </div>

      {/* Grid de Valores */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {valores.map((v, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 text-center">
            <div className="mx-auto w-fit p-3 bg-slate-800 rounded-xl">
              {v.icon}
            </div>
            <h3 className="text-xl font-bold text-white">{v.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Compromiso */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Nuestro Compromiso con la Comunidad</h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-base leading-relaxed">
          Sabemos lo importante que es la seguridad y comodidad en tu hogar. Por ello, brindamos atención rápida, cumplimiento estricto de horarios pactados y el uso de materiales de primera calidad.
        </p>
      </div>

    </div>
  );
}
