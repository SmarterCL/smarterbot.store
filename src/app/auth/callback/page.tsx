'use client';

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { hasSupabaseEnv, normalizeNextPath, supabase, supabaseEnvError } from '@/lib/supabase';

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Completando autenticación...');

  useEffect(() => {
    const nextPath = normalizeNextPath(searchParams.get('next'));
    const authCode = searchParams.get('code');
    const authError = searchParams.get('error_description') || searchParams.get('error');

    async function completeAuth() {
      if (!hasSupabaseEnv || !supabase) {
        setStatus('error');
        setMessage(supabaseEnvError || 'Supabase no está configurado.');
        return;
      }

      if (authError) {
        setStatus('error');
        setMessage(authError);
        return;
      }

      try {
        if (authCode) {
          const { error } = await supabase.auth.exchangeCodeForSession(authCode);

          if (error) {
            throw error;
          }
        }

        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();

        if (error) {
          throw error;
        }

        if (!session) {
          throw new Error('No se encontró una sesión activa después del callback.');
        }

        const user = session.user;
        const currentTenant = user.user_metadata?.tenant_id || user.app_metadata?.tenant_id;
        
        if (!currentTenant) {
           const emailPrefix = user.email ? user.email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '').toLowerCase() : 'tenant';
           const newTenantId = `${emailPrefix}_${Math.random().toString(36).substring(2, 6)}`;
           
           await supabase.auth.updateUser({
             data: { tenant_id: newTenantId }
           });
        }

        setStatus('success');
        setMessage('Sesión iniciada. Redirigiendo...');
        router.replace(nextPath);
      } catch (error) {
        const nextUrl = `/login?error=${encodeURIComponent(
          error instanceof Error ? error.message : 'No fue posible completar el inicio de sesión.'
        )}&next=${encodeURIComponent(nextPath)}`;

        setStatus('error');
        setMessage(error instanceof Error ? error.message : 'No fue posible completar el inicio de sesión.');
        window.setTimeout(() => {
          router.replace(nextUrl);
        }, 1200);
      }
    }

    void completeAuth();
  }, [router, searchParams]);

  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-5">
          <div className="bg-white rounded-4 shadow-sm border border-light p-5 text-center">
            <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light p-3 mb-4">
              {status === 'loading' ? (
                <Loader2 className="animate-spin" size={20} />
              ) : status === 'success' ? (
                <CheckCircle2 size={20} className="text-success" />
              ) : (
                <AlertCircle size={20} className="text-danger" />
              )}
            </div>

            <h1 className="h3 fw-black mb-3">
              {status === 'loading'
                ? 'Validando acceso'
                : status === 'success'
                  ? 'Acceso confirmado'
                  : 'No pudimos iniciar sesión'}
            </h1>

            <p className={`small fw-semibold mb-4 ${status === 'error' ? 'text-danger' : 'text-secondary'}`}>
              {message}
            </p>

            {status === 'error' ? (
              <Link
                href={`/login?next=${encodeURIComponent(normalizeNextPath(searchParams.get('next')))}`}
                className="btn btn-dark rounded-pill px-4"
              >
                Volver a login
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <section className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-5">
              <div className="bg-white rounded-4 shadow-sm border border-light p-5 text-center">
                <Loader2 className="animate-spin mx-auto mb-3" size={20} />
                <p className="text-secondary small fw-semibold mb-0">Preparando callback de autenticación...</p>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <AuthCallbackContent />
    </Suspense>
  );
}
