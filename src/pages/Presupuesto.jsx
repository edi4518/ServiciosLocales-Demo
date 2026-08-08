import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calculator, MessageCircle, CheckCircle2, ShieldCheck, Zap, Droplets, Wind, Sparkles, MapPin, Clock } from 'lucide-react';

export default function Presupuesto() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('servicio') || 'electricidad';

  const [servicio, setServicio] = useState(initialService);
  const [tipoTrabajo, setTipoTrabajo] = useState('instalacion');
  const [urgencia, setUrgencia] = useState('normal'); // 'normal' | 'urgente'
  const [zona, setZona] = useState('centro');
  const [detalles, setDetalles] = useState('');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  // Tarifas base estimadas
  const TARIFAS_BASE = {
    electricidad: {
      instalacion: 30000,
      reparacion: 22000,
      mantenimiento: 25000
    },
    plomeria: {
      instalacion: 35000,
      reparacion: 20000,
      mantenimiento: 24000
    },
    climatizacion: {
      instalacion: 45000,
      reparacion: 28000,
      mantenimiento: 30000
    }
  };

  const MULTIPLICADOR_URGENCIA = {
    normal: 1.0,
    urgente: 1.4 // +40% por guardia 24hs
  };

  const RECARGO_ZONA = {
    centro: 0,
    norte: 3000,
    sur: 3000,
    oeste: 3500,
    periferia: 5000
  };

  // Cálculo estimado inmediato en React (useMemo)
  const estimacion = useMemo(() => {
    const base = TARIFAS_BASE[servicio]?.[tipoTrabajo] || 25000;
    const multUrg = MULTIPLICADOR_URGENCIA[urgencia] || 1.0;
    const recargoZ = RECARGO_ZONA[zona] || 0;

    const total = Math.round((base * multUrg) + recargoZ);
    const min = Math.round(total * 0.9);
    const max = Math.round(total * 1.15);

    return { min, max, total };
  }, [servicio, tipoTrabajo, urgencia, zona]);

  // Generar link directo a WhatsApp con los datos del presupuesto
  const generarWhatsAppLink = () => {
    const mensaje = `*Solicitud de Presupuesto ElectroTech*%0A` +
      `----------------------------------------%0A` +
      `👤 *Cliente:* ${nombre || 'No especificado'}%0A` +
      `📞 *Teléfono:* ${telefono || 'No especificado'}%0A` +
      `🔧 *Servicio:* ${servicio.toUpperCase()}%0A` +
      `📋 *Tipo de Trabajo:* ${tipoTrabajo.toUpperCase()}%0A` +
      `🚨 *Urgencia:* ${urgencia === 'urgente' ? 'Urgente 24hs (Guardia)' : 'Atención Normal'}%0A` +
      `📍 *Zona:* ${zona.toUpperCase()}%0A` +
      `💬 *Detalles:* ${detalles || 'Sin detalles adicionales'}%0A` +
      `----------------------------------------%0A` +
      `💰 *Estimación calculada:* $${estimacion.min.toLocaleString('es-AR')} - $${estimacion.max.toLocaleString('es-AR')}`;

    return `https://wa.me/5491123456789?text=${mensaje}`;
  };

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-4 h-4 text-amber-400" />
          <span>Calculadora Interactiva en Tiempo Real</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white">Calcula tu Presupuesto Estimado</h1>
        <p className="text-slate-400 text-lg">
          Selecciona las opciones requeridas para obtener una estimación inmediata y enviarla directo a WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Formulario Calculadora */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Configura tu Requerimiento</span>
          </h2>

          {/* 1. Selección de Servicio */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">1. Tipo de Servicio</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setServicio('electricidad')}
                className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center space-y-2 ${
                  servicio === 'electricidad'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-6 h-6" />
                <span className="text-xs">Electricidad</span>
              </button>

              <button
                type="button"
                onClick={() => setServicio('plomeria')}
                className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center space-y-2 ${
                  servicio === 'plomeria'
                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Droplets className="w-6 h-6" />
                <span className="text-xs">Plomería/Gas</span>
              </button>

              <button
                type="button"
                onClick={() => setServicio('climatizacion')}
                className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center space-y-2 ${
                  servicio === 'climatizacion'
                    ? 'bg-indigo-500/20 border-indigo-500 text-indigo-300 font-bold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Wind className="w-6 h-6" />
                <span className="text-xs">Climatización</span>
              </button>
            </div>
          </div>

          {/* 2. Tipo de Trabajo */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">2. Complejidad del Trabajo</label>
            <select
              value={tipoTrabajo}
              onChange={(e) => setTipoTrabajo(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-500"
            >
              <option value="instalacion">Instalación Nueva / Colocación completa</option>
              <option value="reparacion">Reparación / Arreglo puntual de falla</option>
              <option value="mantenimiento">Mantenimiento preventivo / Service general</option>
            </select>
          </div>

          {/* 3. Urgencia */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">3. Nivel de Urgencia</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUrgencia('normal')}
                className={`p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-center space-x-2 ${
                  urgencia === 'normal'
                    ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 font-bold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Normal (48-72hs)</span>
              </button>

              <button
                type="button"
                onClick={() => setUrgencia('urgente')}
                className={`p-3.5 rounded-xl border text-sm font-medium transition-all flex items-center justify-center space-x-2 ${
                  urgencia === 'urgente'
                    ? 'bg-amber-500/20 border-amber-500 text-amber-400 font-bold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-4 h-4 fill-amber-400" />
                <span>Urgente 24hs</span>
              </button>
            </div>
          </div>

          {/* 4. Zona de Cobertura */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-300">4. Zona de Cobertura</label>
            <div className="relative">
              <MapPin className="w-5 h-5 text-slate-500 absolute left-3.5 top-3.5" />
              <select
                value={zona}
                onChange={(e) => setZona(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-500"
              >
                <option value="centro">Zona Centro / CABA Principal</option>
                <option value="norte">Zona Norte</option>
                <option value="sur">Zona Sur</option>
                <option value="oeste">Zona Oeste</option>
                <option value="periferia">Periferia / Suburbana (+30km)</option>
              </select>
            </div>
          </div>

          {/* Datos Personales */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h3 className="text-sm font-semibold text-slate-300">Datos para la Cotización</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu Nombre"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
              />
              <input
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Teléfono / WhatsApp"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
              />
            </div>

            <textarea
              rows={3}
              value={detalles}
              onChange={(e) => setDetalles(e.target.value)}
              placeholder="Escribe brevemente qué sucede o qué necesitas..."
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
            />
          </div>

        </div>

        {/* Resumen Estimado e Inmediato */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 sticky top-28 shadow-2xl">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Estimación En Tiempo Real
            </span>
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>

          <div className="space-y-2 text-center py-4 bg-slate-950/70 rounded-2xl border border-slate-800">
            <span className="text-xs text-slate-400 uppercase tracking-wider block font-medium">
              Rango Estimado Aproximado
            </span>
            <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
              ${estimacion.min.toLocaleString('es-AR')} - ${estimacion.max.toLocaleString('es-AR')}
            </div>
            <p className="text-[11px] text-slate-500">
              *Sujeto a verificación técnica presencial sin costo.
            </p>
          </div>

          {/* Desglose de parámetros */}
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex justify-between py-1.5 border-b border-slate-800/60">
              <span className="text-slate-400">Rubro seleccionado:</span>
              <span className="font-semibold text-white capitalize">{servicio}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-800/60">
              <span className="text-slate-400">Modalidad:</span>
              <span className="font-semibold text-white capitalize">{tipoTrabajo}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-800/60">
              <span className="text-slate-400">Urgencia:</span>
              <span className={`font-semibold ${urgencia === 'urgente' ? 'text-amber-400' : 'text-emerald-400'}`}>
                {urgencia === 'urgente' ? '24hs Guardia' : 'Normal'}
              </span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-slate-800/60">
              <span className="text-slate-400">Zona:</span>
              <span className="font-semibold text-white capitalize">{zona}</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <a
              href={generarWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Enviar Presupuesto a WhatsApp</span>
            </a>
            
            <p className="text-[11px] text-slate-500 text-center leading-relaxed">
              Al hacer clic serás redirigido a WhatsApp con el desglose del presupuesto listo para enviar al equipo técnico.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
