import Link from 'next/link';
import { MessageCircleMore } from 'lucide-react';

export default function RegisterPage() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <span className="badge text-bg-dark rounded-pill px-3 py-2 mb-3">Solicitar demo</span>
          <h1 className="display-5 fw-black mb-3">Activa la versión simple de SmarterBOT.</h1>
          <p className="text-secondary fs-5 mb-4">
            Estamos dejando la plataforma más liviana. Para avanzar ahora,
            usa WhatsApp o escríbenos directo y te guiamos por el flujo que sí
            está funcionando.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3">
            <Link href="/connect" className="btn btn-success-premium">
              <MessageCircleMore size={18} />
              WhatsApp
            </Link>
            <a
              href="mailto:smarterbotcl@gmail.com?subject=Demo%20Smarter%20BOT"
              className="btn btn-outline-dark"
            >
              Pedir demo por email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
