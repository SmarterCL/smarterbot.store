'use client';

import { useEffect, useState } from 'react';
import { Smartphone, RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react';
import styles from '@/app/dashboard/dashboard.module.css';

type WahaStatus = {
  session: string;
  status: string;
  phone: string;
  qr: string | null;
  last_seen: string;
};

export default function WahaStatusWidget({ tenantId }: { tenantId: string }) {
  const [status, setStatus] = useState<WahaStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchStatus = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`/api/widgets/waha-status/${tenantId}`);
      if (!res.ok) throw new Error('API Error');
      const data = await res.json();
      setStatus(data);
    } catch (err) {
      setError(true);
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
            <AlertTriangle size={16} /> Error al conectar con WAHA API
          </div>
        ) : status ? (
          <div>
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="p-2 rounded-circle text-success" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                <Smartphone size={24} />
              </div>
              <div>
                <div className="fw-black fs-5 d-flex align-items-center gap-2">
                  {status.phone}
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
                Activo {new Date(status.last_seen).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            
            {status.qr && (
              <div className="mt-3 text-center">
                <p className="small fw-bold mb-2">Escanea para conectar</p>
                <img src={status.qr} alt="QR Code" className="img-fluid rounded" />
              </div>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
