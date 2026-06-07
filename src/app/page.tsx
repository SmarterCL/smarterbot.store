'use client';

import {
  ArrowRight,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  Factory,
  HeartPulse,
  LayoutTemplate,
  MessageSquareShare,
  ShieldCheck,
  Store,
  Workflow,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const operatingLayers = [
  {
    icon: <LayoutTemplate size={28} />,
    title: 'Captacion',
    description:
      'Landing pages, formularios, campañas y funnels conectados a cada canal de entrada.',
  },
  {
    icon: <MessageSquareShare size={28} />,
    title: 'Conversacion',
    description:
      'Inbox centralizado, asignacion de conversaciones y respuesta asistida por IA.',
  },
  {
    icon: <Workflow size={28} />,
    title: 'Automatizacion',
    description:
      'Workflows para seguimiento, recordatorios, calificacion, SLA y handoff entre equipos.',
  },
  {
    icon: <ChartNoAxesCombined size={28} />,
    title: 'Operacion',
    description:
      'Pipeline comercial, cotizaciones, dashboards, ERP y trazabilidad completa del lead.',
  },
];

const problemPoints = [
  'Leads que entran por WhatsApp y se enfrían antes del primer contacto.',
  'Equipos vendiendo por chats sueltos sin ownership, historial ni métricas.',
  'Seguimientos manuales que dependen de memoria y terminan perdiendo negocios.',
  'Bots aislados que responden, pero no conectan con CRM, cotizaciones ni operación.',
];

const sectors = [
  { icon: <Building2 size={22} />, name: 'Inmobiliaria' },
  { icon: <Store size={22} />, name: 'Retail' },
  { icon: <HeartPulse size={22} />, name: 'Salud' },
  { icon: <Factory size={22} />, name: 'Logística y servicios' },
];

const differentiators = [
  'No vendemos un bot aislado: implementamos una operación comercial completa.',
  'Tu stack queda conectado de punta a punta: WhatsApp, CRM, automatización, ERP y analítica.',
  'Puedes operar con equipos humanos, IA o ambos sin cambiar de interfaz.',
  'Arquitectura regional, personalizable y lista para self-hosted o despliegue dedicado.',
];

const heroTiles = [
  {
    src: '/images/dashboard_feature.png',
    alt: 'Captación comercial',
    title: 'Captación',
  },
  {
    src: '/images/whatsapp_feature.png',
    alt: 'Inbox conversacional',
    title: 'Inbox',
  },
  {
    src: '/images/crm_feature.png',
    alt: 'IA aplicada a leads',
    title: 'IA aplicada',
  },
  {
    src: '/images/whatsapp.png',
    alt: 'Automatización operacional',
    title: 'Automatización',
  },
  {
    src: '/images/crm.png',
    alt: 'Pipeline y reporting',
    title: 'Pipeline',
  },
  {
    src: '/images/dashboard.png',
    alt: 'Backoffice y ERP',
    title: 'ERP',
  },
];

export default function HomePage() {
  return (
    <div className="landing-wrapper">
      <section className="hero-section py-7 pt-5 overflow-hidden">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="badge-premium mb-4">
                Smarter Funnel OS · Ventas conversacionales por WhatsApp
              </div>
              <h1 className="display-1 mb-4">
                Convierte WhatsApp en tu
                <br />
                <span className="text-gradient">sistema operativo comercial</span>
              </h1>
              <p className="lead text-secondary mb-5 fs-4">
                Captacion, conversacion, seguimiento, automatizacion y operacion conectados en una
                sola plataforma. Menos chats perdidos. Mas oportunidades cerradas.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 hero-cta-group">
                <Link
                  href="/register"
                  className="btn btn-success-premium btn-cta-dynamic d-flex align-items-center justify-content-center gap-2"
                >
                  Solicitar demo <ArrowRight size={20} />
                </Link>
                <Link
                  href="#operacion"
                  className="btn btn-outline-dark rounded-pill px-5 py-3 fw-black uppercase tracking-widest d-flex align-items-center justify-content-center cta-outline-dynamic"
                >
                  Ver plataforma
                </Link>
              </div>
              <div className="mt-5 d-flex flex-wrap align-items-center gap-4">
                <div className="d-flex align-items-center gap-2 text-secondary small fw-bold">
                  <ShieldCheck size={18} className="text-success" />
                  WhatsApp + CRM + IA + ERP
                </div>
                <div className="d-flex align-items-center gap-2 text-secondary small fw-bold">
                  <CheckCircle2 size={18} className="text-success" />
                  Multiagente, automatizado y trazable
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-hero-mosaic">
                {heroTiles.map((tile) => (
                  <div key={tile.title} className="home-hero-mosaic__tile">
                    <Image
                      src={tile.src}
                      alt={tile.alt}
                      fill
                      sizes="(max-width: 991px) 50vw, 16vw"
                      className="home-hero-mosaic__image"
                      priority={tile.title === 'Captación'}
                    />
                    <div className="home-hero-mosaic__label">{tile.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 bg-soft border-y border-light overflow-hidden">
        <div className="container">
          <div className="brand-marquee">
            <div className="brand-marquee__track">
              {[
                'WHATSAPP',
                'CRM',
                'AUTOMATION',
                'AI',
                'ERP',
                'PIPELINE',
                'LEADS',
                'SUPPORT',
                'WHATSAPP',
                'CRM',
                'AUTOMATION',
                'AI',
                'ERP',
                'PIPELINE',
                'LEADS',
              ].map((brand, index) => (
                <div key={`${brand}-${index}`} className="brand-pill h4 fw-black tracking-tighter grayscale mb-0">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="problema" className="py-7">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <h2 className="display-4 mb-4">
                El problema no es <span className="text-gradient">responder chats</span>
              </h2>
              <p className="lead text-secondary mb-0">
                El problema es operar ventas desde conversaciones sin sistema, sin trazabilidad y sin
                integración con lo que ocurre después del primer mensaje.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                {problemPoints.map((problem) => (
                  <div key={problem} className="col-md-6">
                    <div className="h-100 p-4 rounded-4xl bg-soft border-0 hover-lift">
                      <div className="d-flex align-items-start gap-3">
                        <div className="bg-white p-2 rounded-3xl shadow-sm text-success">
                          <CheckCircle2 size={22} />
                        </div>
                        <p className="text-secondary fw-bold mb-0 leading-relaxed">{problem}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="operacion" className="py-7">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="display-4 mb-4">Una sola capa visible para tu equipo comercial</h2>
              <p className="lead text-secondary mb-5">
                Detrás conectamos inbox, automatización, ERP y datos para que cada conversación
                dispare procesos reales.
              </p>
              <div className="d-grid gap-3">
                {operatingLayers.map((layer) => (
                  <div key={layer.title} className="d-flex align-items-start gap-3 p-3 bg-soft rounded-3xl border border-light">
                    <div className="bg-white p-2 rounded-3xl shadow-sm text-success">{layer.icon}</div>
                    <div>
                      <div className="fw-black">{layer.title}</div>
                      <div className="small text-secondary fw-bold leading-relaxed">{layer.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="h-100 p-5 rounded-4xl border border-light shadow-sm bg-white position-relative overflow-hidden">
                <div className="badge bg-success-subtle text-success mb-4 px-3 py-2 rounded-pill small fw-black tracking-widest">
                  Flujo operativo
                </div>
                <h3 className="display-5 mb-4">Del lead al cierre sin salir del sistema</h3>
                <div className="d-grid gap-3">
                  {[
                    'Campaña o landing captura el lead.',
                    'WhatsApp abre conversación y clasifica intención.',
                    'IA resume contexto y propone siguiente acción.',
                    'Workflow crea tarea, seguimiento o cotización.',
                    'Pipeline y ERP reciben el estado final del negocio.',
                  ].map((step, index) => (
                    <div key={step} className="d-flex align-items-center justify-content-between p-3 rounded-3xl bg-soft">
                      <div className="d-flex align-items-center gap-3">
                        <div className="rounded-circle bg-black text-white fw-black d-flex align-items-center justify-content-center flow-step">
                          {index + 1}
                        </div>
                        <span className="fw-bold">{step}</span>
                      </div>
                      <ArrowRight size={18} className="text-success" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sectores" className="py-7">
        <div className="container">
          <div className="row justify-content-center text-center mb-6">
            <div className="col-lg-8">
              <h2 className="display-4 mb-4">Hecho para equipos que venden por conversación</h2>
              <p className="lead text-secondary mb-0">
                Funciona en sectores donde el lead necesita seguimiento, contexto y coordinación entre
                personas, automatizaciones y sistemas internos.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {sectors.map((sector) => (
              <div key={sector.name} className="col-md-6 col-xl-3">
                <div className="h-100 p-4 rounded-4xl bg-soft text-center hover-lift">
                  <div className="d-inline-flex p-3 rounded-circle bg-white shadow-sm text-success mb-3">
                    {sector.icon}
                  </div>
                  <h3 className="h5 fw-black mb-0">{sector.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="diferencial" className="py-7">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="badge-premium mb-4">Diferencial real</div>
              <h2 className="display-4 mb-4">No vendemos bots. Implementamos operación comercial.</h2>
              <p className="lead text-secondary mb-0">
                El valor no está en agregar otro chatbot. Está en diseñar el sistema completo que
                convierte conversaciones en pipeline, seguimiento, revenue y ejecución.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                {differentiators.map((item) => (
                  <div key={item} className="col-md-6">
                    <div className="h-100 p-4 rounded-4xl border border-light bg-white shadow-sm">
                      <div className="d-flex align-items-start gap-3">
                        <div className="bg-success-subtle p-2 rounded-3xl text-success">
                          <CheckCircle2 size={22} />
                        </div>
                        <p className="mb-0 text-secondary fw-bold leading-relaxed">{item}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-7 text-center">
        <div className="container">
          <div className="max-w-3xl mx-auto p-5 p-lg-6 rounded-4xl bg-black text-white">
            <div className="badge bg-white text-black mb-4 px-3 py-2 rounded-pill small fw-black tracking-widest">
              Smarter Funnel OS
            </div>
            <h2 className="display-3 mb-4 text-white">Pasa de responder chats a operar ventas</h2>
            <p className="lead text-white-50 mb-5">
              Si ya generas conversaciones por WhatsApp, el siguiente paso no es comprar otro bot.
              Es implementar una plataforma operacional que conecte marketing, ventas y ejecución.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <Link href="/register" className="btn btn-success-premium btn-cta-dynamic px-5 py-4 fs-5">
                Agendar demo
              </Link>
              <Link href="/login" className="btn btn-outline-light rounded-pill px-5 py-4 fw-black uppercase tracking-widest">
                Ir al login
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .rounded-4xl { border-radius: 2.5rem !important; }
        .bg-success-subtle { background-color: rgba(16, 185, 129, 0.1); }
        .text-success { color: #10b981 !important; }
        .max-w-3xl { max-width: 860px; }
        .leading-relaxed { line-height: 1.6; }
        .space-y-2 > li + li { margin-top: 0.5rem; }
        .flow-step {
          width: 2rem;
          height: 2rem;
          min-width: 2rem;
        }
      `}</style>
    </div>
  );
}
