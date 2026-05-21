'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BarChart3, Database, MessageCircle, Zap } from 'lucide-react';
import SupabaseAuth from '@/components/SupabaseAuth';
import { supabase } from '@/lib/supabase';

type LoginPageClientProps = {
  nextPath: string;
  message: string | null;
  error: string | null;
};

const loginHighlights = [
  {
    icon: MessageCircle,
    title: 'WhatsApp multiagente',
    description: 'Comunicación omnicanal integrada.',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
    alt: 'Equipo comercial trabajando conversaciones en tiempo real',
  },
  {
    icon: Database,
    title: 'CRM y seguimiento',
    description: 'Gestión de clientes y oportunidades.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    alt: 'Dashboard de ventas y seguimiento comercial',
  },
  {
    icon: Zap,
    title: 'Automatizaciones conectadas',
    description: 'Flujos de trabajo sincode.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    alt: 'Automatizaciones y flujo operativo en una mesa de trabajo',
  },
  {
    icon: BarChart3,
    title: 'Dashboards centralizados',
    description: 'Visibilidad operativa en tiempo real.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    alt: 'Gráficos de métricas y dashboard ejecutivo',
  },
];

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
            <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
              {loginHighlights.map(({ icon: Icon, title, description, image, alt }) => (
                <div key={title} className="col">
                  <div className="card h-100 border-0 bg-light overflow-hidden shadow-sm">
                    <div className="position-relative" style={{ height: '160px' }}>
                      <Image
                        src={image}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-fit-cover"
                      />
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.10) 0%, rgba(15,23,42,0.58) 100%)' }}
                      />
                      <div className="position-absolute bottom-0 start-0 p-3 text-white">
                        <div className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white text-dark mb-2 shadow-sm" style={{ width: '40px', height: '40px' }}>
                          <Icon size={18} />
                        </div>
                        <h5 className="card-title fw-bold mb-1 text-white">{title}</h5>
                      </div>
                    </div>
                    <div className="card-body">
                      <p className="card-text text-secondary mb-0">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-secondary small mt-4 mb-0">
              ¿Aún no tienes acceso? <Link href="/" className="link-dark fw-bold">Solicita una demo</Link>.
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
