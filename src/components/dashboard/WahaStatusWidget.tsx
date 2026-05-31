'use client';

import { useEffect, useState } from 'react';
import { Smartphone, RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react';
import styles from '@/app/dashboard/dashboard.module.css';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';

type WahaStatus = {
  tenant: string;
  session: string;
  status: string;
  phone: string | null;
  qrRequired: boolean;
  lastSeen: string | null;
};

type WahaQr = {
  tenant: string;
  status: string;
  qr: string | null;
  expiresAt: string | null;
};

export default function WahaStatusWidget({ tenantId }: { tenantId: string }) {
  const [status, setStatus] = useState<WahaStatus | null>(null);
  const [qrData, setQrData] = useState<WahaQr | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL?.trim();

      if (!apiBaseUrl) {
        throw new Error('Falta NEXT_PUBLIC_API_GATEWAY_URL.');
      }

      const supabase = createSupabaseBrowserClient();
      const session = supabase ? (await supabase.auth.getSession()).data.session : null;
      const accessToken = session?.access_token;

      if (!accessToken) {
        throw new Error('No hay sesión válida para consultar WAHA.');
      }

      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      const [statusResponse, qrResponse] = await Promise.all([
        fetch(`${apiBaseUrl}/api/v1/waha/status/${tenantId}`, {
          headers,
          cache: 'no-store',
        }),
        fetch(`${apiBaseUrl}/api/v1/waha/qr/${tenantId}`, {
          headers,
          cache: 'no-store',
        }),
      ]);

      if (!statusResponse.ok) {
        throw new Error('WAHA status no disponible.');
      }

      const statusPayload = (await statusResponse.json()) as WahaStatus;
      setStatus(statusPayload);

      if (qrResponse.ok) {
        const qrPayload = (await qrResponse.json()) as WahaQr;
        setQrData(qrPayload);
      } else {
        setQrData(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al conectar con WAHA API.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    // Refresh every 30 seconds
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, [tenantId]);

  return (
    <div className={styles.panelCard} style={{ marginBottom: '1.5rem' }}>
      <div className={styles.panelHeader}>
        <div>
          <p className={styles.miniLabel}>WhatsApp Business</p>
          <h2 className={styles.sectionTitle}>Conexión WAHA</h2>
        </div>
        <button 
          onClick={fetchStatus} 
          disabled={loading}
          className="btn btn-sm btn-outline-dark rounded-circle p-2 d-flex align-items-center justify-content-center"
          title="Actualizar estado"
        >
          <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      <div className="p-3 bg-soft rounded-4 border border-light">
        {loading && !status ? (
          <div className="d-flex align-items-center gap-2 text-secondary small fw-bold">
            <RefreshCw size={16} className="animate-spin" /> Verificando sesión...
          </div>
        ) : error ? (
          <div className="d-flex align-items-center gap-2 text-danger small fw-bold">
            <AlertTriangle size={16} /> {error}
          </div>
        ) : status ? (
          <div>
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="p-2 rounded-circle text-success" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                <Smartphone size={24} />
              </div>
              <div>
                <div className="fw-black fs-5 d-flex align-items-center gap-2">
                  {status.phone ?? 'WhatsApp no enlazado'}
                  {status.status === 'connected' && <CheckCircle2 size={16} className="text-success" />}
                </div>
                <div className="small text-secondary fw-bold">
                  Sesión: {status.session}
                </div>
              </div>
            </div>
            
            <div className="d-flex align-items-center justify-content-between pt-3 border-top border-light">
              <span className={`badge ${status.status === 'connected' ? 'text-bg-success' : 'text-bg-warning'} rounded-pill`}>
                {status.status === 'connected' ? 'Conectado' : 'Requiere atención'}
              </span>
              <span className="small text-secondary fw-bold">
                {status.lastSeen
                  ? `Activo ${new Date(status.lastSeen).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
                  : 'Sin actividad reciente'}
              </span>
            </div>
            
            {qrData?.qr && (
              <div className="mt-3 text-center">
                <p className="small fw-bold mb-2">Escanea para conectar</p>
                <img src={qrData.qr} alt="QR Code" className="img-fluid rounded" />
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
