'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function AuthCallbackPage() {
  const router = useRouter();
  const [message, setMessage] = useState('Completando inicio de sesión...');

  useEffect(() => {
    const finishAuth = async () => {
      try {
        const url = new URL(window.location.href);
        const code = url.searchParams.get('code');

        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) {
            throw error;
          }
        }

        router.replace('/bot');
      } catch (error) {
        console.error('Supabase auth callback failed:', error);
        setMessage('No se pudo completar el inicio de sesión. Redirigiendo...');
        setTimeout(() => router.replace('/bot'), 1500);
      }
    };

    finishAuth();
  }, [router]);

  return (
    <div className="min-h-screen d-flex align-items-center justify-content-center bg-soft px-4">
      <div className="bg-white rounded-4xl shadow-xl border border-light p-5 text-center" style={{ maxWidth: '28rem' }}>
        <h1 className="h3 mb-3">Autenticando</h1>
        <p className="text-secondary mb-0">{message}</p>
      </div>
    </div>
  );
}
