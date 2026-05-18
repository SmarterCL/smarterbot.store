import Link from 'next/link';
import SupabaseAuth from '@/components/SupabaseAuth';

export default function RegisterPage() {
  return (
    <section className="container py-5">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-lg-6">
          <span className="badge text-bg-dark rounded-pill px-3 py-2 mb-3">Solicitar demo</span>
          <h1 className="display-5 fw-black mb-3">Activa Smarter Funnel OS para tu equipo.</h1>
          <p className="text-secondary fs-5 mb-4">
            Te ayudamos a centralizar WhatsApp, CRM, automatización, seguimiento comercial y operación en una sola plataforma.
          </p>
          <div className="d-flex flex-column gap-3 text-secondary fw-semibold mb-4">
            <span>Implementación guiada del funnel comercial</span>
            <span>Integración con Chatwoot, n8n, Odoo y tu stack</span>
            <span>Dashboard y operación listos para iterar</span>
          </div>
          <div className="bg-white rounded-4 border border-light p-4 shadow-sm">
            <p className="small text-uppercase fw-black text-secondary mb-2">Siguiente paso recomendado</p>
            <p className="mb-3">
              Usa el login para entrar al panel y revisar la experiencia base. Si prefieres una demo comercial guiada, escríbenos y la coordinamos contigo.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="mailto:smarterbotcl@gmail.com?subject=Demo%20Smarter%20Funnel%20OS" className="btn btn-black">
                Pedir demo por email
              </a>
              <Link href="/contact" className="btn btn-outline-dark cta-outline-dynamic">
                Hablar con ventas
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 offset-lg-1">
          <SupabaseAuth redirectTo="/dashboard" />
        </div>
      </div>
    </section>
  );
}
