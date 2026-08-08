import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ShieldAlert, Send, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    asunto: 'consulta_general',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Generar link directo a WhatsApp con el mensaje estructurado del formulario
  const generarWhatsAppLink = () => {
    const textoAsunto = 
      formData.asunto === 'urgencia' ? '🚨 Urgencia 24hs' :
      formData.asunto === 'presupuesto' ? '📋 Solicitud de Presupuesto' :
      formData.asunto === 'reclamo' ? '⚠️ Seguimiento / Garantía' : '💬 Consulta General';

    const textoMensaje = 
      `*Consulta recibida desde la Web - ElectroTech*%0A` +
      `----------------------------------------%0A` +
      `👤 *Nombre:* ${formData.nombre || 'No especificado'}%0A` +
      `📞 *Teléfono:* ${formData.telefono || 'No especificado'}%0A` +
      `📧 *Email:* ${formData.correo || 'No especificado'}%0A` +
      `📌 *Tipo de Consulta:* ${textoAsunto}%0A` +
      `💬 *Mensaje / Falla:* ${formData.mensaje || 'Sin detalles adiconales'}%0A` +
      `----------------------------------------%0A` +
      `Quedo a la espera de respuesta por este medio.`;

    return `https://wa.me/541155559999?text=${textoMensaje}`;
  };

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Encabezado de la Sección */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="bg-amber-500/10 text-amber-400 border border-amber-500/30 px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2">
          <Phone className="w-4 h-4 text-amber-400" />
          <span>ESTAMOS PARA AYUDARTE</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          Ubicación, Cobertura y Vías Directas de Contacto
        </h1>
        
        <p className="text-slate-400 text-lg leading-relaxed">
          Comunicate de forma directa con nuestro equipo de atención o envianos tu mensaje para coordinar una visita técnica.
        </p>
      </div>

      {/* Estructura a 2 Columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Columna Izquierda: Información & Cobertura */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Tarjeta Oficina Central */}
          <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-3 flex items-start space-x-4">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Oficina Central</h3>
              <p className="text-slate-300 text-sm">Av. Corrientes 2500, CABA</p>
              <p className="text-xs text-slate-500 mt-1">Base operativa y logística de materiales.</p>
            </div>
          </div>

          {/* Tarjeta Atención Telefónica */}
          <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-3 flex items-start space-x-4">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Atención Telefónica</h3>
              <a href="tel:+541155559999" className="text-amber-400 font-bold text-base hover:underline block">
                +54 11 5555-9999
              </a>
              <p className="text-xs text-slate-500 mt-1">Línea directa rotativa de atención al cliente.</p>
            </div>
          </div>

          {/* Tarjeta Correo Electrónico */}
          <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-3 flex items-start space-x-4">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded-xl flex-shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Correo Electrónico</h3>
              <a href="mailto:contacto@electrotech.com.ar" className="text-amber-400 font-medium text-sm hover:underline block">
                contacto@electrotech.com.ar
              </a>
              <p className="text-xs text-slate-500 mt-1">Para licitaciones y contratos comerciales.</p>
            </div>
          </div>

          {/* Tarjeta Guardia de Urgencias */}
          <div className="bg-slate-900/90 border border-amber-500/30 p-6 rounded-2xl space-y-3 flex items-start space-x-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl flex-shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Guardia de Urgencias 24hs</h3>
              <p className="text-slate-300 text-sm font-semibold text-emerald-400">
                Disponible las 24 hs, los 365 días del año
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Llegada estimada en menos de 30 minutos dentro del radio de cobertura.
              </p>
            </div>
          </div>

          {/* Zonas de Cobertura */}
          <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Clock className="w-5 h-5 text-amber-500" />
              <span>Zonas de Cobertura Oficial</span>
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>CABA (Todos los barrios)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zona Norte (GBA)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zona Sur (GBA)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zona Oeste (GBA)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Columna Derecha: Formulario de Mensajes & Consultas Directas */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-6 shadow-xl">
          
          <div>
            <h2 className="text-xl font-bold text-white">Envianos tu Consulta</h2>
            <p className="text-slate-400 text-sm mt-1">
              Completá el formulario para generar un mensaje formateado y chatear directamente por WhatsApp.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Nombre Completo *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Teléfono / WhatsApp *</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Ej: 11 5555-9999"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Correo Electrónico</label>
                <input
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="ejemplo@correo.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Tipo de Consulta</label>
                <select
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-500 text-sm"
                >
                  <option value="consulta_general">Consulta General</option>
                  <option value="urgencia">Atención de Urgencia 24hs</option>
                  <option value="presupuesto">Solicitud de Cotización</option>
                  <option value="reclamo">Garantía / Servicio Postventa</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Mensaje o Detalle del Trabajo *</label>
              <textarea
                name="mensaje"
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribí aquí los detalles de la falla, ubicación o consulta que deseas realizar..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
              />
            </div>

            <div className="pt-2">
              <a
                href={generarWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.01]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Enviar Consulta por WhatsApp</span>
              </a>
              
              <p className="text-[11px] text-slate-500 text-center mt-3">
                Serás redirigido al chat oficial de ElectroTech con los datos formateados automáticamente.
              </p>
            </div>

          </form>

        </div>

      </div>

    </div>
  );
}
