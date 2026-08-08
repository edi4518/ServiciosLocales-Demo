import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

export default function Contacto() {
  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white">Canales de Contacto Directo</h1>
        <p className="text-slate-400 text-lg">
          ¿Tienes alguna duda o emergencia? Comunícate con nuestro equipo de atención inmediata.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Card Phone */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-4 text-center hover:border-indigo-500/40 transition-colors">
          <div className="mx-auto w-fit p-4 bg-indigo-500/10 text-indigo-400 rounded-2xl">
            <Phone className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">Llamada Directa</h3>
          <p className="text-sm text-slate-400">Atención telefónica de emergencias y consultas.</p>
          <a
            href="tel:+5491123456789"
            className="inline-block pt-2 text-indigo-400 font-semibold text-lg hover:underline"
          >
            +54 9 11 2345-6789
          </a>
        </div>

        {/* Card WhatsApp */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-4 text-center hover:border-emerald-500/40 transition-colors">
          <div className="mx-auto w-fit p-4 bg-emerald-500/10 text-emerald-400 rounded-2xl">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">WhatsApp 24/7</h3>
          <p className="text-sm text-slate-400">Envíanos fotos o videos del problema para diagnóstico rápido.</p>
          <a
            href="https://wa.me/5491123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block pt-2 text-emerald-400 font-semibold text-lg hover:underline"
          >
            Chat de WhatsApp
          </a>
        </div>

        {/* Card Email */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-4 text-center hover:border-cyan-500/40 transition-colors">
          <div className="mx-auto w-fit p-4 bg-cyan-500/10 text-cyan-400 rounded-2xl">
            <Mail className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">Correo Electrónico</h3>
          <p className="text-sm text-slate-400">Para contrataciones corporativas o licitaciones.</p>
          <a
            href="mailto:contacto@serviprolocal.com"
            className="inline-block pt-2 text-cyan-400 font-semibold text-lg hover:underline"
          >
            contacto@serviprolocal.com
          </a>
        </div>

      </div>

      {/* Info Horarios & Ubicación */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Horarios de Atención</h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-slate-300">
              <Clock className="w-5 h-5 text-indigo-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">Lunes a Viernes</div>
                <div className="text-sm text-slate-400">08:00 hs - 20:00 hs</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-slate-300">
              <Clock className="w-5 h-5 text-indigo-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">Sábados</div>
                <div className="text-sm text-slate-400">09:00 hs - 18:00 hs</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-slate-300">
              <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div>
                <div className="font-semibold text-white">Servicio de Guardias 24 horas</div>
                <div className="text-sm text-slate-400">Para emergencias eléctricas y de plomería todos los días.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 border-t md:border-t-0 md:border-l border-slate-800 pt-6 md:pt-0 md:pl-8">
          <h2 className="text-2xl font-bold text-white">Oficina y Base Operativa</h2>
          <div className="flex items-start space-x-3 text-slate-300">
            <MapPin className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-white">Base Central</p>
              <p className="text-sm text-slate-400">Av. Principal 1234, Ciudad Local</p>
              <p className="text-xs text-slate-500 mt-2">Cobertura en todo el radio urbano y zonas aledañas hasta 30km.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
