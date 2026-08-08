import { useState, useMemo } from 'react';
import { Zap, Wrench, Thermometer, Send, Clock, ShieldCheck, Calculator, MapPin, AlertTriangle } from 'lucide-react';

export default function Presupuesto() {
  const [categoria, setCategoria] = useState('electricidad');
  const [servicioId, setServicioId] = useState('tablero');
  const [urgencia, setUrgencia] = useState('normal'); // 'normal' | 'urgente'
  const [zona, setZona] = useState('caba');
  const [detalles, setDetalles] = useState('');

  // Opciones de servicios por categoría
  const serviciosPorCategoria = {
    electricidad: [
      { id: 'tablero', nombre: 'Instalación / Readecuación de Tablero Eléctrico', precioBase: 25000 },
      { id: 'cortocircuito', nombre: 'Búsqueda y Reparación de Cortocircuito', precioBase: 18000 },
      { id: 'cableado', nombre: 'Cableado General e Iluminación LED', precioBase: 35000 },
    ],
    plomeria: [
      { id: 'destape', nombre: 'Destapaciones Mecánicas de Cañerías', precioBase: 22000 },
      { id: 'termotanque', nombre: 'Instalación / Service de Termotanque o Calefón', precioBase: 28000 },
      { id: 'fugas', nombre: 'Reparación de Fugas y Filtraciones', precioBase: 20000 },
    ],
    climatizacion: [
      { id: 'split', nombre: 'Instalación Certificada de Aire Split', precioBase: 45000 },
      { id: 'gas', nombre: 'Carga de Gas Refrigerante (R410a/R22)', precioBase: 20000 },
      { id: 'mantenimiento', nombre: 'Mantenimiento Preventivo de A/C', precioBase: 22000 },
    ]
  };

  // Ajustar servicio seleccionado si se cambia la categoría
  const handleCategoriaChange = (nuevaCategoria) => {
    setCategoria(nuevaCategoria);
    const primerServicio = serviciosPorCategoria[nuevaCategoria][0];
    setServicioId(primerServicio.id);
  };

  // Servicio actual objeto
  const servicioActual = useMemo(() => {
    const lista = serviciosPorCategoria[categoria] || [];
    return lista.find(s => s.id === servicioId) || lista[0];
  }, [categoria, servicioId]);

  // Tasas por zona
  const tasaVisitaZona = {
    caba: 0,
    zona_norte: 2500,
    zona_sur: 2500,
    zona_oeste: 2500,
  };

  const nombreZona = {
    caba: 'CABA (Sin tasa de visita)',
    zona_norte: 'Zona Norte (+$2.500 de visita)',
    zona_sur: 'Zona Sur (+$2.500 de visita)',
    zona_oeste: 'Zona Oeste (+$2.500 de visita)',
  };

  // Cálculo en tiempo real
  const calculo = useMemo(() => {
    const base = servicioActual?.precioBase || 0;
    const recargoUrgencia = urgencia === 'urgente' ? Math.round(base * 0.20) : 0;
    const tasaZona = tasaVisitaZona[zona] || 0;
    const total = base + recargoUrgencia + tasaZona;

    return { base, recargoUrgencia, tasaZona, total };
  }, [servicioActual, urgencia, zona]);

  // Generar link de WhatsApp
  const generarLinkWhatsApp = () => {
    const textoCategoria = categoria.toUpperCase();
    const textoServicio = servicioActual?.nombre;
    const textoUrgencia = urgencia === 'urgente' ? 'Urgencia 24hs (<30 min)' : 'Atención Programada (24-48 hs)';
    const textoZona = nombreZona[zona];
    const textoDetalles = detalles.trim() ? detalles : 'Sin observaciones adicionales';
    const totalFormateado = `$${calculo.total.toLocaleString('es-AR')}`;

    const mensaje = 
      `*Solicitud de Presupuesto Estimado - ElectroTech*%0A` +
      `----------------------------------------%0A` +
      `🔧 *Especialidad:* ${textoCategoria}%0A` +
      `📋 *Trabajo:* ${textoServicio}%0A` +
      `🚨 *Urgencia:* ${textoUrgencia}%0A` +
      `📍 *Zona de Cobertura:* ${textoZona}%0A` +
      `💬 *Detalles:* ${textoDetalles}%0A` +
      `----------------------------------------%0A` +
      `💰 *TOTAL ESTIMADO CALCULADO:* ${totalFormateado}%0A%0A` +
      `Quedo a la espera de su confirmación para coordinar el trabajo.`;

    return `https://wa.me/541155559999?text=${mensaje}`;
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* 1. Encabezado de la Sección */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2">
          <Calculator className="w-4 h-4 text-amber-400" />
          <span>COTIZACIÓN INMEDIATA</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Calculá el Presupuesto Estimado de tu Trabajo
        </h1>
        
        <p className="text-slate-400 text-lg leading-relaxed">
          Seleccioná la especialidad, el tipo de urgencia y tu zona para obtener un valor estimado en tiempo real sin compromiso.
        </p>
      </div>

      {/* 3. Estructura de la Interfaz (Grid 2 columnas en desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Columna Izquierda: Formulario de Selección */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
          
          {/* Paso 1: Categoría del Servicio */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-white uppercase tracking-wider block">
              Paso 1: Categoría del Servicio
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleCategoriaChange('electricidad')}
                className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center gap-2 ${
                  categoria === 'electricidad'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-500 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <Zap className="w-6 h-6" />
                <span className="text-xs font-semibold">Electricidad</span>
              </button>

              <button
                type="button"
                onClick={() => handleCategoriaChange('plomeria')}
                className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center gap-2 ${
                  categoria === 'plomeria'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-500 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <Wrench className="w-6 h-6" />
                <span className="text-xs font-semibold">Plomería</span>
              </button>

              <button
                type="button"
                onClick={() => handleCategoriaChange('climatizacion')}
                className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center gap-2 ${
                  categoria === 'climatizacion'
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-500 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <Thermometer className="w-6 h-6" />
                <span className="text-xs font-semibold">Climatización</span>
              </button>
            </div>
          </div>

          {/* Paso 2: Tarea Específica */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-white uppercase tracking-wider block">
              Paso 2: Tarea Específica a Realizar
            </label>
            <select
              value={servicioId}
              onChange={(e) => setServicioId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-500 font-medium text-sm"
            >
              {serviciosPorCategoria[categoria].map((s) => (
                <option key={s.id} value={s.id}>
                  {s.nombre} — (${s.precioBase.toLocaleString('es-AR')})
                </option>
              ))}
            </select>
          </div>

          {/* Paso 3: Nivel de Urgencia */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-white uppercase tracking-wider block">
              Paso 3: Nivel de Urgencia
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Opción Normal */}
              <div
                onClick={() => setUrgencia('normal')}
                className={`cursor-pointer p-4 rounded-xl border transition-all flex items-start space-x-3 ${
                  urgencia === 'normal'
                    ? 'bg-slate-800 border-amber-500/80 ring-1 ring-amber-500'
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                }`}
              >
                <input
                  type="radio"
                  name="urgencia"
                  checked={urgencia === 'normal'}
                  onChange={() => setUrgencia('normal')}
                  className="mt-1 accent-amber-500"
                />
                <div>
                  <span className="font-bold text-white text-sm block">Atención Programada</span>
                  <span className="text-xs text-slate-400 block mt-0.5">Coordinación en 24-48 hs (Sin costo extra)</span>
                </div>
              </div>

              {/* Opción Urgente */}
              <div
                onClick={() => setUrgencia('urgente')}
                className={`cursor-pointer p-4 rounded-xl border transition-all flex items-start space-x-3 relative overflow-hidden ${
                  urgencia === 'urgente'
                    ? 'bg-slate-800 border-amber-500/80 ring-1 ring-amber-500'
                    : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="absolute top-2 right-2 bg-amber-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Recomendado
                </div>
                <input
                  type="radio"
                  name="urgencia"
                  checked={urgencia === 'urgente'}
                  onChange={() => setUrgencia('urgente')}
                  className="mt-1 accent-amber-500"
                />
                <div>
                  <span className="font-bold text-white text-sm block flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    Urgencia 24hs
                  </span>
                  <span className="text-xs text-amber-400 font-medium block mt-0.5">Llegada en &lt;30 min (+20% recargo)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Paso 4: Zona de Cobertura & Detalles */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white uppercase tracking-wider block">
                Paso 4: Zona de Cobertura
              </label>
              <div className="relative">
                <MapPin className="w-5 h-5 text-amber-500 absolute left-3.5 top-3.5" />
                <select
                  value={zona}
                  onChange={(e) => setZona(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-500 font-medium text-sm"
                >
                  <option value="caba">CABA (Buenos Aires) — Sin tasa de visita</option>
                  <option value="zona_norte">Zona Norte — (+$2.500 visita)</option>
                  <option value="zona_sur">Zona Sur — (+$2.500 visita)</option>
                  <option value="zona_oeste">Zona Oeste — (+$2.500 visita)</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300 block">
                Observaciones Adicionales (Opcional)
              </label>
              <textarea
                rows={3}
                value={detalles}
                onChange={(e) => setDetalles(e.target.value)}
                placeholder="Escribí aquí detalles adicionales sobre la falla o el trabajo..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
              />
            </div>
          </div>

        </div>

        {/* Columna Derecha: Tarjeta Resumen y Total Estimado */}
        <div className="lg:col-span-5 bg-slate-900 border border-amber-500/30 p-8 rounded-2xl shadow-2xl space-y-6 sticky top-28">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <h2 className="text-lg font-extrabold text-white">Resumen del Presupuesto</h2>
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>

          {/* Desglose de Ítems */}
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex justify-between items-start py-2 border-b border-slate-800/80">
              <div>
                <span className="font-semibold text-white block">{servicioActual?.nombre}</span>
                <span className="text-xs text-slate-400 capitalize">Categoría: {categoria}</span>
              </div>
              <span className="font-bold text-white">${calculo.base.toLocaleString('es-AR')}</span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
              <span className="text-slate-400">Recargo por Urgencia 24hs:</span>
              <span className={`font-bold ${calculo.recargoUrgencia > 0 ? 'text-amber-400' : 'text-slate-500'}`}>
                +${calculo.recargoUrgencia.toLocaleString('es-AR')}
              </span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
              <span className="text-slate-400">Tasa de Visita por Zona:</span>
              <span className={`font-bold ${calculo.tasaZona > 0 ? 'text-amber-400' : 'text-emerald-400'}`}>
                {calculo.tasaZona === 0 ? '¡Gratis (CABA)!' : `+$${calculo.tasaZona.toLocaleString('es-AR')}`}
              </span>
            </div>
          </div>

          {/* Total Estimado Destacado */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 text-center space-y-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              Total Estimado Calculado
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">
              ${calculo.total.toLocaleString('es-AR')}
            </div>
            <p className="text-[11px] text-slate-500">
              *Presupuesto orientativo sin cargo. El valor final se confirma tras diagnóstico presencial.
            </p>
          </div>

          {/* Botón de Acción Principal: Enviar a WhatsApp */}
          <div className="space-y-3 pt-2">
            <a
              href={generarLinkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <Send className="w-5 h-5" />
              <span>Enviar Presupuesto a WhatsApp</span>
            </a>

            <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-400 text-center">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Respuesta inmediata en menos de 5 minutos</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
