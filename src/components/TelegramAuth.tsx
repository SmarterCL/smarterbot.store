'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { Zap, CheckCircle2, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

export default function TelegramAuth() {
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | 'info' | null }>({
    message: '',
    type: null,
  });
  const [clawStatus, setClawStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [uptime, setUptime] = useState<string>('');

  const CLAW_API_URL = process.env.NEXT_PUBLIC_CLAW_API_URL || '';
  const BOT_USERNAME = process.env.NEXT_PUBLIC_TELEGRAM_BOT_NAME || 'SmarterChat_bot';

  useEffect(() => {
    checkExistingSession();
    checkClawHealth();

    // Define the global callback for Telegram
    (window as any).onTelegramAuth = (user: TelegramUser) => {
      handleAuth(user);
    };
  }, []);

  const checkClawHealth = async () => {
    if (!CLAW_API_URL) {
      setClawStatus('offline');
      return;
    }

    try {
      const response = await fetch(`${CLAW_API_URL}/health`, {
        method: 'GET',
        mode: 'cors',
      });
      if (response.ok) {
        const data = await response.json();
        setClawStatus('online');
        setUptime(data.uptime || '');
      } else {
        setClawStatus('offline');
      }
    } catch (error) {
      setClawStatus('offline');
    }
  };

  const checkExistingSession = () => {
    const session = localStorage.getItem('smarterbot_session');
    if (session) {
      const data = JSON.parse(session);
      setStatus({ message: `Sesión activa como ${data.first_name}`, type: 'info' });
      setTimeout(() => {
        window.location.href = 'https://app.smarterbot.cl/demo';
      }, 1500);
    }
  };

  const handleAuth = async (user: TelegramUser) => {
    setStatus({ message: 'Procesando autenticación...', type: 'info' });

    const sessionData = {
      telegram_id: user.id,
      username: user.username || `user_${user.id}`,
      first_name: user.first_name,
      last_name: user.last_name || '',
      photo_url: user.photo_url || '',
      auth_date: user.auth_date,
      hash: user.hash,
      logged_in: new Date().toISOString(),
    };

    localStorage.setItem('smarterbot_session', JSON.stringify(sessionData));

    try {
      if (!CLAW_API_URL) {
        throw new Error('Claw API URL not configured');
      }

      const response = await fetch(`${CLAW_API_URL}/api/auth/telegram`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sessionData),
      });

      if (response.ok) {
        setStatus({ message: `¡Bienvenido ${user.first_name}! Redirigiendo...`, type: 'success' });
        setTimeout(() => {
          window.location.href = 'https://app.smarterbot.cl/demo';
        }, 2000);
      } else {
        throw new Error('Claw offline');
      }
    } catch (error) {
      setStatus({ message: `¡Bienvenido ${user.first_name}! (Modo Local)`, type: 'success' });
      setTimeout(() => {
        window.location.href = 'https://app.smarterbot.cl/demo';
      }, 2000);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6">
      <div className="bg-white rounded-4xl shadow-2xl border border-light p-8 text-center">
        <div className="bg-black text-white w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl">
          🤖
        </div>

        <h1 className="text-3xl font-black tracking-tighter mb-2">SmarterBot</h1>
        <p className="text-secondary small fw-bold mb-8 leading-relaxed">
          Inicia sesión con Telegram para acceder a tu asistente personal AI
        </p>

        {/* Telegram Widget */}
        <div className="flex justify-center mb-8 py-4 bg-soft rounded-3xl border border-light overflow-hidden">
            <Script
              src="https://telegram.org/js/telegram-widget.js?22"
              strategy="afterInteractive"
              data-telegram-login={BOT_USERNAME}
              data-size="large"
              data-radius="12"
              data-request-access="write"
            />
          {/* Fallback loader if script takes time */}
          <div className="flex flex-col items-center gap-2 py-2">
            <Loader2 className="animate-spin text-success" />
            <span className="text-xs text-secondary fw-bold">Cargando widget...</span>
          </div>
        </div>

        {/* Status Messages */}
        {status.type && (
          <div className={`p-4 rounded-3xl mb-6 text-sm fw-bold border flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 ${
            status.type === 'success' ? 'bg-success-subtle text-success border-success/20' :
            status.type === 'error' ? 'bg-danger/10 text-danger border-danger/20' :
            'bg-subtle text-secondary border-light'
          }`}>
            {status.type === 'success' ? <CheckCircle2 size={18} /> : 
             status.type === 'error' ? <AlertCircle size={18} /> : 
             <Zap size={18} className="text-success" />}
            {status.message}
          </div>
        )}

        {/* Features List */}
        <div className="text-left space-y-4 pt-6 border-t border-light">
          <div className="flex items-center gap-3 text-sm fw-bold text-secondary">
            <div className="bg-success text-white p-1 rounded-full"><CheckCircle2 size={14} /></div>
            Acceso a tu asistente AI personal
          </div>
          <div className="flex items-center gap-3 text-sm fw-bold text-secondary">
            <div className="bg-success text-white p-1 rounded-full"><Zap size={14} fill="currentColor" /></div>
            Respuestas instantáneas
          </div>
          <div className="flex items-center gap-3 text-sm fw-bold text-secondary">
            <div className="bg-success text-white p-1 rounded-full"><ShieldCheck size={14} /></div>
            Autenticación segura
          </div>
        </div>

        {/* Health Check */}
        <div className="mt-8 pt-4 border-t border-light flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 text-xs fw-black tracking-widest uppercase">
            <div className={`w-2 h-2 rounded-full ${
              clawStatus === 'online' ? 'bg-success animate-pulse' : 
              clawStatus === 'offline' ? 'bg-danger' : 'bg-warning'
            }`}></div>
            Claw Status: {clawStatus === 'online' ? 'Online' : clawStatus === 'offline' ? 'No disponible' : 'Verificando...'}
          </div>
          {uptime && <span className="text-[10px] text-secondary fw-bold">Uptime: {uptime}</span>}
        </div>
      </div>
    </div>
  );
}
