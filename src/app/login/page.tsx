'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
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
            <span className="badge text-bg-dark rounded-pill px-3 py-2 mb-3">SmarterOS Login</span>
            <h1 className="display-5 fw-black mb-3">Entra a tu operación comercial conversacional.</h1>
            <p className="text-secondary fs-5 mb-4">
              Accede a tu stack de ventas, atención y automatización desde una sola sesión.
            </p>
            <div className="d-flex flex-column gap-2 text-secondary fw-semibold">
              <span>WhatsApp multiagente</span>
              <span>CRM y seguimiento</span>
              <span>Automatizaciones conectadas</span>
              <span>Dashboards y operación centralizada</span>
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
