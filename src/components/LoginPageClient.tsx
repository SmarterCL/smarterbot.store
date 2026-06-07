import Link from 'next/link';
import { ArrowUpRight, MessageCircleMore } from 'lucide-react';

type LoginPageClientProps = {
  nextPath: string;
  message: string | null;
  error: string | null;
};

export default function LoginPageClient({
  nextPath,
  message,
  error,
}: LoginPageClientProps) {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          {message ? <p className="alert alert-success small fw-semibold">{message}</p> : null}
          {error ? <p className="alert alert-danger small fw-semibold">{error}</p> : null}

          <div className="bg-white rounded-4 border border-light shadow-sm p-4 p-lg-5">
            <p className="text-uppercase text-secondary fw-bold small mb-2">
              Acceso temporalmente deshabilitado
            </p>
            <h1 className="display-6 fw-black mb-3">Login simple</h1>
            <p className="text-secondary mb-4">
              Estamos simplificando la plataforma. Si necesitas acceso o una
              demo, usa WhatsApp o escríbenos directo. El siguiente destino
              previsto era <span className="text-dark fw-bold">{nextPath}</span>.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3">
              <Link href="/connect" className="btn btn-success-premium">
                <MessageCircleMore size={18} />
                WhatsApp
              </Link>
              <Link href="/contact" className="btn btn-outline-dark">
                Hablar con ventas <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
