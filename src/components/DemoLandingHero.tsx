import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, LayoutTemplate, MonitorSmartphone } from 'lucide-react';

interface DemoLandingHeroProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaHref?: string;
}

const heroHighlights = [
  '4 plantillas alineadas al dashboard',
  'Vista web para operación y vista móvil para seguimiento',
  'Assets locales para evitar fallos de carga',
];

export default function DemoLandingHero({
  title = 'Diseños de app para web y móvil conectados al dashboard',
  subtitle = 'Una misma operación comercial, con layouts distintos según el dispositivo: escritorio para control y móvil para respuesta rápida.',
  primaryCtaText = 'Ver plantillas',
  secondaryCtaText = 'Ir al dashboard',
  primaryCtaHref = '#plantillas',
  secondaryCtaHref = '/dashboard',
}: DemoLandingHeroProps) {
  return (
    <section className="demo-hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="badge-premium mb-4 mt-8">Smarter Funnel OS · Showcase responsive</div>
            <h1 className="display-3 mb-4">{title}</h1>
            <p className="lead text-secondary mb-4">{subtitle}</p>
            <div className="demo-hero-actions">
              <Link href={primaryCtaHref} className="btn btn-success-premium btn-cta-dynamic">
                {primaryCtaText}
                <ArrowRight size={18} />
              </Link>
              <Link href={secondaryCtaHref} className="btn cta-outline-dynamic">
                {secondaryCtaText}
              </Link>
            </div>
            <div className="demo-hero-highlights">
              {heroHighlights.map((item) => (
                <div key={item} className="demo-hero-highlight">
                  <CheckCircle2 size={18} className="text-success" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="demo-hero-preview">
              <div className="demo-preview-browser">
                <div className="demo-preview-browser__bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="demo-preview-browser__media">
                  <Image
                    src="/images/dashboard_feature.png"
                    alt="Vista web del dashboard comercial"
                    width={1024}
                    height={1024}
                    sizes="(max-width: 991px) 100vw, 48vw"
                    className="demo-preview-browser__image"
                    priority
                  />
                </div>
                <div className="demo-preview-browser__pill">
                  <LayoutTemplate size={16} />
                  Web operativo
                </div>
              </div>
              <div className="demo-preview-phone">
                <div className="demo-preview-phone__header">
                  <MonitorSmartphone size={16} />
                  Móvil supervisor
                </div>
                <div className="demo-preview-phone__card">
                  <span>Inbox prioritario</span>
                  <strong>12 chats activos</strong>
                </div>
                <div className="demo-preview-phone__card">
                  <span>Seguimiento IA</span>
                  <strong>4 leads listos</strong>
                </div>
                <div className="demo-preview-phone__card">
                  <span>SLA premium</span>
                  <strong>91%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
