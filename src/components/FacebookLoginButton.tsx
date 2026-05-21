'use client';

import { useState } from 'react';
import { facebookLogin } from './FacebookSDK';
import { Facebook, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface FacebookLoginButtonProps {
  configId?: string;
  onSuccess?: (authResponse: any) => void;
  onError?: (error: Error) => void;
}

export default function FacebookLoginButton({
  configId = process.env.NEXT_PUBLIC_FB_CONFIG_ID || '',
  onSuccess,
  onError,
}: FacebookLoginButtonProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!configId) {
      const msg = 'Configuration ID (config_id) is missing. Please set NEXT_PUBLIC_FB_CONFIG_ID or pass it as a prop.';
      setErrorMessage(msg);
      setStatus('error');
      onError?.(new Error(msg));
      return;
    }

    setStatus('loading');
    setErrorMessage(null);

    try {
      const authResponse = await facebookLogin(configId);
      setStatus('success');
      onSuccess?.(authResponse);
      console.log('Facebook Login Success:', authResponse);
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Login failed');
      onError?.(err);
      console.error('Facebook Login Error:', err);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleLogin}
        disabled={status === 'loading'}
        className={`flex items-center justify-center gap-3 px-6 py-3 rounded-xl font-bold transition-all ${status === 'loading' ? 'bg-blue-600/50 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20'} text-white w-full`}
      >
        {status === 'loading' ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Facebook className="w-5 h-5 fill-current" />
        )}
        {status === 'loading' ? 'Connecting...' : 'Connect Facebook Business'}
      </button>

      {status === 'success' && (
        <div className="flex items-center gap-2 text-green-400 text-sm font-medium animate-in fade-in slide-in-from-top-1">
          <CheckCircle2 className="w-4 h-4" />
          <span>Connected successfully!</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-start gap-2 text-red-400 text-sm font-medium animate-in fade-in slide-in-from-top-1">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
