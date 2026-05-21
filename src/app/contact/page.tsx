'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simular el envío del formulario
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section className="container py-7 pt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <span className="badge text-bg-dark rounded-pill px-3 py-2 mb-3 mt-4">Ventas</span>
          <h1 className="display-6 fw-black mb-3">Hablemos de tu operación comercial.</h1>
          <p className="text-secondary fs-5 mb-5">
            Si quieres implementar WhatsApp multiagente, funnel comercial, automatización y dashboards conectados, este es el punto de entrada.
          </p>

          <div className="bg-white rounded-4 border border-light p-4 p-md-5 shadow-sm">
            {status === 'success' ? (
              <div className="text-center py-5">
                <CheckCircle2 size={48} className="text-success mx-auto mb-4" />
                <h3 className="fw-black mb-3">¡Mensaje enviado!</h3>
                <p className="text-secondary mb-0">
                  Hemos recibido tu solicitud. Nuestro equipo te contactará muy pronto para evaluar tu operación comercial.
                </p>
                <button 
                  onClick={() => setStatus('idle')} 
                  className="btn btn-outline-dark mt-4 rounded-pill px-4"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label fw-bold small">Nombre completo</label>
                    <input type="text" className="form-control form-control-lg bg-soft border-0" id="name" required placeholder="Ej. Juan Pérez" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label fw-bold small">Correo electrónico</label>
                    <input type="email" className="form-control form-control-lg bg-soft border-0" id="email" required placeholder="correo@empresa.com" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label fw-bold small">Teléfono / WhatsApp</label>
                    <input type="tel" className="form-control form-control-lg bg-soft border-0" id="phone" required placeholder="+56 9 0000 0000" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="company" className="form-label fw-bold small">Empresa</label>
                    <input type="text" className="form-control form-control-lg bg-soft border-0" id="company" required placeholder="Tu empresa" />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label fw-bold small">¿Cómo podemos ayudarte?</label>
                    <textarea className="form-control bg-soft border-0" id="message" rows={4} required placeholder="Cuéntanos brevemente sobre tu operación actual y lo que necesitas..."></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-black rounded-pill px-5 py-3 d-inline-flex align-items-center gap-2 fw-black tracking-widest uppercase hover-scale w-100 justify-content-center" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Enviando...' : (
                        <>Enviar solicitud <Send size={18} /></>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
          
          <div className="mt-5 text-center text-secondary small">
            <p className="mb-1"><strong>Contacto directo:</strong> <a href="mailto:smarterbotcl@gmail.com" className="text-secondary fw-bold text-decoration-underline">smarterbotcl@gmail.com</a></p>
            <p className="mb-0">Enfoque: implementación, integración y operación de ventas conversacionales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
