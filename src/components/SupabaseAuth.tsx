'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Loader2, LogIn, LogOut, Sparkles } from 'lucide-react';
import {
  getAuthCallbackUrl,
  hasSupabaseEnv,
  normalizeNextPath,
  supabase,
  supabaseEnvError,
  type AuthUser,
} from '@/lib/supabase';

type SupabaseAuthProps = {
  redirectTo?: string;
};

export default function SupabaseAuth({
  redirectTo = '/dashboard',
}: SupabaseAuthProps) {
  const [user, setUser] = useState<AuthUser>(null);
  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    let mounted = true;
    const unlockTimer = window.setTimeout(() => {
      if (!mounted) {
        return;
      }

      setLoading(false);
      setMessage((current) => current ?? 'La validación de sesión tardó demasiado. Puedes continuar manualmente.');
    }, 1800);

    supabase.auth
      .getSession()
      .then(({ data, error }) => {
        if (!mounted) {
          return;
        }

        window.clearTimeout(unlockTimer);

        if (error) {
          setMessage(error.message);
          setUser(null);
        } else {
          setUser(data.session?.user ?? null);
        }

        setLoading(false);
      })
      .catch((error: unknown) => {
        if (!mounted) {
          return;
        }

        window.clearTimeout(unlockTimer);
        setMessage(error instanceof Error ? error.message : 'No fue posible leer la sesión.');
        setLoading(false);
      });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) {
        return;
      }

      setUser(session?.user ?? null);
      setPending(false);
    });

    return () => {
      mounted = false;
      window.clearTimeout(unlockTimer);
      subscription.unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    if (!supabase) {
      setMessage(supabaseEnvError);
      return;
    }

    setPending(true);
    setMessage(null);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: getAuthCallbackUrl(redirectTo),
      },
    });

    if (error) {
      setPending(false);
      setMessage(error.message);
    }
  };

  const signOut = async () => {
    if (!supabase) {
      return;
    }

    setPending(true);
    setMessage(null);

    const { error } = await supabase.auth.signOut();

    if (error) {
      setMessage(error.message);
    } else {
      setUser(null);
    }

    setPending(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <Loader2 className="animate-spin text-success" />
      </div>
    );
  }

  if (user) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-light text-center">
        <div className="mb-4">
          {user.user_metadata?.avatar_url ? (
            <Image
              src={user.user_metadata.avatar_url}
              alt="Avatar"
              width={64}
              height={64}
              className="rounded-full mx-auto border-2 border-success p-1"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-soft flex items-center justify-center mx-auto text-2xl font-black">
              {user.email?.charAt(0).toUpperCase() ?? 'S'}
            </div>
          )}
        </div>
        <h3 className="font-black text-lg mb-1">{user.user_metadata?.full_name || 'Usuario'}</h3>
        <p className="text-secondary text-xs font-bold mb-2">{user.email}</p>
        <p className="text-secondary opacity-75 text-[11px] font-bold mb-4">
          Sesión activa. Destino configurado: <span className="text-dark">{normalizeNextPath(redirectTo)}</span>
        </p>
        {message ? (
          <p className="text-danger text-[11px] font-bold mb-4">{message}</p>
        ) : null}

        <button
          onClick={signOut}
          disabled={pending}
          className="btn btn-outline-dark rounded-full w-100 py-2.5 text-xs font-black uppercase tracking-widest d-inline-flex align-items-center justify-content-center gap-2"
        >
          {pending ? <Loader2 size={14} className="animate-spin" /> : <LogOut size={14} />}
          Cerrar sesión
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-light text-center">
      <div className="d-inline-flex align-items-center justify-content-center rounded-pill border border-success-subtle bg-success-subtle text-success px-3 py-2 mb-3">
        <Sparkles size={14} className="me-2" />
        <span className="text-[10px] font-black uppercase tracking-widest">Acceso seguro</span>
      </div>
      <h3 className="font-black text-2xl mb-2">Accede a SmarterOS</h3>
      <p className="text-secondary text-sm font-bold mb-2">
        Inicia sesión para entrar al panel y continuar tu operación comercial desde un solo lugar.
      </p>
      <p className="text-secondary opacity-75 text-[11px] font-bold mb-4">
        Después del login te enviaremos a <span className="text-dark">{normalizeNextPath(redirectTo)}</span>.
      </p>
      <div className="rounded-4 border border-light bg-light-subtle px-3 py-3 mb-6 text-start">
        <div className="text-[10px] font-black text-uppercase tracking-widest text-success mb-1">Incluye</div>
        <p className="text-secondary text-[11px] font-bold mb-0">
          Acceso a dashboard, CRM, conversaciones y automatizaciones desde una única sesión.
        </p>
      </div>

      {message ? <p className="text-danger text-[11px] font-bold mb-4">{message}</p> : null}

      {!hasSupabaseEnv ? (
        <Link
          href="/dashboard"
          className="btn btn-black rounded-full w-100 py-3 text-xs font-black uppercase tracking-widest d-inline-flex align-items-center justify-content-center gap-3 transition-all hover-scale mb-3"
        >
          <LogIn size={16} />
          Acceder a la Plataforma
        </Link>
      ) : (
        <button
          onClick={signInWithGoogle}
          disabled={pending}
          className="btn btn-black rounded-full w-100 py-3 text-xs font-black uppercase tracking-widest d-inline-flex align-items-center justify-content-center gap-3 transition-all hover-scale mb-3"
        >
          {pending ? (
            <Loader2 className="animate-spin" size={16} />
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          )}
          {pending ? 'Redirigiendo...' : 'Continuar con Google'}
        </button>
      )}

      {hasSupabaseEnv && (
        <>
          <div className="d-flex align-items-center justify-content-center my-3 text-muted text-[10px] font-bold uppercase tracking-widest">
            <span className="border-bottom w-25"></span>
            <span className="px-2">O bien</span>
            <span className="border-bottom w-25"></span>
          </div>

          <Link
            href="/dashboard"
            className="btn btn-outline-dark rounded-full w-100 py-3 text-xs font-black uppercase tracking-widest d-inline-flex align-items-center justify-content-center gap-2 transition-all hover-scale"
          >
            <Sparkles size={14} className="text-success" />
            Probar en Modo Demo
          </Link>
        </>
      )}

      <p className="text-secondary opacity-50 text-[10px] font-bold mt-6 mb-0">
        Al continuar, aceptas nuestros <Link href="/terminos" className="underline">Términos</Link> y{' '}
        <Link href="/privacidad" className="underline">Privacidad</Link>.
      </p>
    </div>
  );
}
