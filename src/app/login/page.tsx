'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { BarChart3, Database, MessageCircle, Zap } from 'lucide-react';
import SupabaseAuth from '@/components/SupabaseAuth';
import { normalizeNextPath, supabase } from '@/lib/supabase';

function LoginPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [sessionChecked, setSessionChecked] = useState(false);

  const nextPath = normalizeNextPath(searchParams.get('next'));
  const message = searchParams.get('message');
  const error = searchParams.get('error');

  useEffect(() => {
    if (!supabase) {
      setSessionChecked(true);
      return;
    }

    let mounted = true;

    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (!mounted) {
          return;
        }

        if (data.session) {
          router.replace(nextPath);
          return;
        }

        setSessionChecked(true);
      })
      .catch(() => {
        if (mounted) {
          setSessionChecked(true);
        }
      });

    return () => {
      mounted = false;
    };
  }, [nextPath, router]);

  if (!sessionChecked) {
    return (
      <section className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <div className="bg-white rounded-4 shadow-sm border border-light p-5 text-center">
              <div className="spinner-border text-dark" role="status" aria-hidden="true" />
              <p className="text-secondary small fw-semibold mt-3 mb-0">Verificando tu sesión...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-5">
      <div className="row justify-content-center align-items-center g-4">
        <div className="col-12 col-lg-6">
          <div className="pe-lg-4">
            <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
              <div className="col">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body text-center">
                    <MessageCircle className="mb-3" size={32} />
                    <h5 className="card-title fw-bold">WhatsApp multiagente</h5>
                    <p className="card-text text-secondary">Comunicación omnicanal integrada.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body text-center">
                    <Database className="mb-3" size={32} />
                    <h5 className="card-title fw-bold">CRM y seguimiento</h5>
                    <p className="card-text text-secondary">Gestión de clientes y oportunidades.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body text-center">
                    <Zap className="mb-3" size={32} />
                    <h5 className="card-title fw-bold">Automatizaciones conectadas</h5>
                    <p className="card-text text-secondary">Flujos de trabajo sincode.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body text-center">
                    <BarChart3 className="mb-3" size={32} />
                    <h5 className="card-title fw-bold">Dashboards centralizados</h5>
                    <p className="card-text text-secondary">Visibilidad operativa en tiempo real.</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-secondary small mt-4 mb-0">
              ¿Aún no tienes acceso? <Link href="/" className="link-dark fw-bold">Solicita una demo</Link>.
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-5">
          {message ? <p className="alert alert-success small fw-semibold">{message}</p> : null}
          {error ? <p className="alert alert-danger small fw-semibold">{error}</p> : null}
          <SupabaseAuth redirectTo={nextPath} />
        </div>
      </div>
    </section>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <section className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-5">
              <div className="bg-white rounded-4 shadow-sm border border-light p-5 text-center">
                <div className="spinner-border text-dark" role="status" aria-hidden="true" />
                <p className="text-secondary small fw-semibold mt-3 mb-0">Cargando acceso...</p>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <LoginPageContent />
    </Suspense>
  );
}
