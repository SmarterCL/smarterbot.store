'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, PlayCircle, Database, Zap, BarChart3, CheckCircle2 } from 'lucide-react';
import SupabaseAuth from '@/components/SupabaseAuth';
import { supabase } from '@/lib/supabase';

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
  const router = useRouter();
  const [sessionChecked, setSessionChecked] = useState(false);

  useEffect(() => {
    if (!supabase) {
      setSessionChecked(true);
      return;
    }

    let mounted = true;
    const unlockTimer = window.setTimeout(() => {
      if (mounted) {
        setSessionChecked(true);
      }
    }, 1800);

    supabase.auth
      .getSession()
      .then(({ data }) => {
        if (!mounted) {
          return;
        }

        window.clearTimeout(unlockTimer);

        if (data.session) {
          // document.cookie = 'studio_access=Demo2026@; domain=claw3d.smarterbot.store; path=/; secure; samesite=lax';
router.replace(nextPath);
          return;
        }

        setSessionChecked(true);
      })
      .catch(() => {
        if (mounted) {
          window.clearTimeout(unlockTimer);
          setSessionChecked(true);
        }
      });

    return () => {
      mounted = false;
      window.clearTimeout(unlockTimer);
    };
  }, [nextPath, router]);

  return (
    <section className="container py-5">
      <div className="row justify-content-center align-items-center g-4">
        <div className="col-12 col-lg-6">
          <div className="pe-lg-4">
            <div className="position-relative overflow-hidden rounded-4 shadow-lg border border-light bg-black text-white mb-4">
              <div className="ratio ratio-16x9">
              <Image
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80"
                alt="Equipo operando automatizaciones y agentes"
                fill
                sizes="(max-width: 992px) 100vw, 50vw"
                className="object-fit-cover"
              />
            </div>
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ background: 'linear-gradient(135deg, rgba(3,7,18,0.85) 0%, rgba(15,23,42,0.55) 50%, rgba(22,163,74,0.28) 100%)' }}
              />
              <div className="position-relative p-4 p-lg-5">
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                  <span className="badge rounded-pill text-bg-light text-dark px-3 py-2 fw-black">Demo visual</span>
                  <span className="badge rounded-pill border border-light-subtle text-white-50 px-3 py-2 fw-bold">n8n + agentes + workflows</span>
                </div>
                <h2 className="display-6 fw-black mb-3">Acceso a la plataforma</h2>
                <p className="text-white-50 fs-6 mb-4">Gestiona ventas, atención y automatizaciones desde un único panel operativo.</p>
                <div className="d-flex flex-wrap gap-3 mb-4">
                  <Link
                    href="/"
                    className="btn btn-light rounded-pill px-4 py-3 fw-black d-inline-flex align-items-center gap-2"
                  >
                    Solicita una demo <ArrowUpRight size={16} />
                  </Link>
                  <a
                    href="https://www.youtube.com/watch?v=yzvLfHb0nqE"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light rounded-pill px-4 py-3 fw-black d-inline-flex align-items-center gap-2"
                  >
                    <PlayCircle size={16} />
                    Ver recorrido
                  </a>
                </div>
                <div className="row g-3 mb-4">
                  <div className="col-12 col-md-7">
                    <div className="rounded-4 bg-white bg-opacity-10 border border-light-subtle p-3 p-lg-4 h-100 text-dark">
                      <div className="d-flex align-items-center justify-content-between gap-3 mb-3">
                        <div>
                          <div className="text-uppercase small fw-black text-white-50 mb-1">Operación centralizada</div>
                          <div className="h4 fw-black mb-0">Ventas, soporte y automatización en un solo flujo</div>
                        </div>
                        <span className="badge rounded-pill text-bg-success px-3 py-2 fw-black">24/7</span>
                      </div>
                      <div className="row g-3 align-items-center">
                        <div className="col-7">
                          <div className="position-relative overflow-hidden rounded-4 border border-light-subtle" style={{ minHeight: '168px' }}>
                            <Image
                              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                              alt="Equipo comercial revisando métricas en pantallas"
                              fill
                              sizes="(max-width: 992px) 100vw, 30vw"
                              className="object-fit-cover"
                            />
                          </div>
                        </div>
                        <div className="col-5">
                          <div className="rounded-4 bg-dark bg-opacity-25 border border-light-subtle p-3 mb-3">
                            <div className="small text-uppercase fw-black text-white-50 mb-1">Respuesta media</div>
                            <div className="h3 fw-black mb-0">&lt; 2 min</div>
                          </div>
                          <div className="rounded-4 bg-dark bg-opacity-25 border border-light-subtle p-3">
                            <div className="small text-uppercase fw-black text-white-50 mb-1">Automatizaciones activas</div>
                            <div className="h3 fw-black mb-0">+48</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-5">
                    <div className="rounded-4 bg-white bg-opacity-10 border border-light-subtle p-3 p-lg-4 h-100">
                      <div className="small text-uppercase fw-black text-white-50 mb-3">Qué resuelves aquí</div>
                      <div className="d-flex flex-column gap-3 mb-4">
                        {[
                          'Coordina agentes, leads y workflows sin cambiar de herramienta.',
                          'Detecta cuellos de botella con métricas operativas en tiempo real.',
                          'Escala atención comercial con seguimiento centralizado.',
                        ].map((item) => (
                          <div key={item} className="d-flex align-items-start gap-2">
                            <CheckCircle2 size={18} className="text-success flex-shrink-0 mt-1" />
                            <span className="small text-white-50">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="position-relative overflow-hidden rounded-4 border border-light-subtle" style={{ minHeight: '168px' }}>
                        <img
                          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
                          alt="Panel operativo con métricas y conversaciones de clientes"
                          className="position-absolute w-100 h-100 object-fit-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-6 col-md-4">
              <div className="position-relative rounded-4 overflow-hidden" style={{ minHeight: '180px' }}>
                <img src="/images/whatsapp_feature.png" alt="WhatsApp multi‑agente" className="position-absolute w-100 h-100 object-fit-cover" />
                <div className="position-absolute bottom-0 start-0 w-100 text-center text-white bg-black bg-opacity-50 py-2" style={{ fontSize: '0.9rem' }}>
                  Convierte WhatsApp<br/>en tu<br/>sistema comercial
                </div>
              </div>
            </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="position-relative rounded-4 overflow-hidden" style={{ minHeight: '180px' }}>
                      <img src="/images/crm_feature.png" alt="CRM integrado" className="position-absolute w-100 h-100 object-fit-cover" />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="position-relative rounded-4 overflow-hidden" style={{ minHeight: '180px' }}>
                      <img src="/images/dashboard_feature.png" alt="Dashboard analítico" className="position-absolute w-100 h-100 object-fit-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-secondary small mt-4 mb-0 d-flex flex-wrap align-items-center gap-2">
              ¿Aún no tienes acceso? <Link href="/" className="link-dark fw-bold">Solicita una demo</Link>.
              <a
                href="https://www.youtube.com/watch?v=yzvLfHb0nqE"
                target="_blank"
                rel="noreferrer"
                className="link-dark fw-bold text-decoration-none d-inline-flex align-items-center gap-1"
              >
                Ver video completo <ArrowUpRight size={14} />
              </a>
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-5">
          {message ? <p className="alert alert-success small fw-semibold">{message}</p> : null}
          {error ? <p className="alert alert-danger small fw-semibold">{error}</p> : null}

          {sessionChecked ? (
            <SupabaseAuth redirectTo={nextPath} />
          ) : (
            <div className="bg-white rounded-4 shadow-sm border border-light p-5 text-center">
              <div className="spinner-border text-dark" role="status" aria-hidden="true" />
              <p className="text-secondary small fw-semibold mt-3 mb-0">Verificando tu sesión...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
