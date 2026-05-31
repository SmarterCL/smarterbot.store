'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Bot, ChartNoAxesCombined, LayoutDashboard, MessageSquareShare, Smartphone } from 'lucide-react';

const templates = [
  {
    id: 'executive',
    name: 'Executive Hub',
    label: 'Dashboard principal',
    description:
      'Vista web centrada en métricas, revenue motion y foco ejecutivo. En móvil prioriza alertas, SLA y decisiones rápidas.',
    desktopImage: '/images/dashboard.png',
    desktopAlt: 'Dashboard ejecutivo en versión web',
    accent: 'emerald',
    mobileStats: [
      { label: 'Objetivo mensual', value: '68%' },
      { label: 'Conversaciones premium', value: '11' },
      { label: 'Alertas críticas', value: '2' },
    ],
  },
  {
    id: 'inbox',
    name: 'Inbox Flow',
    label: 'Atención y conversación',
    description:
      'Para agentes y supervisores. La web expone colas, contexto y macros; móvil deja responder, etiquetar y escalar sin fricción.',
    desktopImage: '/images/whatsapp.png',
    desktopAlt: 'Inbox conversacional en versión web',
    accent: 'amber',
    mobileStats: [
      { label: 'Chats sin leer', value: '7' },
      { label: 'Tiempo medio', value: '4 min' },
      { label: 'Escalados', value: '1' },
    ],
  },
  {
    id: 'pipeline',
    name: 'Pipeline Desk',
    label: 'CRM comercial',
    description:
      'Pensado para seguimiento comercial. En escritorio domina el pipeline y el scoring; en móvil muestra etapas, tareas y próximos cierres.',
    desktopImage: '/images/crm.png',
    desktopAlt: 'Pipeline CRM en versión web',
    accent: 'slate',
    mobileStats: [
      { label: 'Oportunidades hot', value: '4' },
      { label: 'Propuestas hoy', value: '3' },
      { label: 'Cierre estimado', value: '$8.4k' },
    ],
  },
  {
    id: 'automation',
    name: 'Automation Grid',
    label: 'Flujos y monitoreo',
    description:
      'La plantilla más operativa. Web para reglas, jobs y estados; móvil para incidentes, reintentos y aprobaciones rápidas.',
    desktopImage: '/images/dashboard_feature.png',
    desktopAlt: 'Automatizaciones y monitoreo en versión web',
    accent: 'blue',
    mobileStats: [
      { label: 'Flujos activos', value: '18' },
      { label: 'Errores hoy', value: '0' },
      { label: 'Reintentos', value: '2' },
    ],
  },
] as const;

const accentIcons = {
  emerald: LayoutDashboard,
  amber: MessageSquareShare,
  slate: ChartNoAxesCombined,
  blue: Bot,
} as const;

export default function DemoExperienceShowcase() {
  const [activeTemplate, setActiveTemplate] = useState<(typeof templates)[number]>(templates[0]);
  const AccentIcon = accentIcons[activeTemplate.accent];

  return (
    <section id="plantillas" className="demo-template-section">
      <div className="container">
        <div className="demo-template-header">
          <div>
            <div className="badge-premium mb-3">Plantillas de app</div>
            <h2 className="display-5 mb-3">4 opciones, cada una con versión web y móvil</h2>
            <p className="lead text-secondary mb-0">
              Todas mantienen el mismo lenguaje del dashboard: negro, emerald, datos densos y enfoque operacional.
            </p>
          </div>
        </div>

        <div className="demo-template-picker" role="tablist" aria-label="Opciones de plantilla">
          {templates.map((template) => {
            const Icon = accentIcons[template.accent];
            const isActive = activeTemplate.id === template.id;

            return (
              <button
                key={template.id}
                type="button"
                className={`demo-template-chip${isActive ? ' is-active' : ''}`}
                onClick={() => setActiveTemplate(template)}
                aria-pressed={isActive}
              >
                <Icon size={18} />
                <span>{template.name}</span>
              </button>
            );
          })}
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-xl-7">
            <article className="demo-canvas-card">
              <div className="demo-canvas-card__header">
                <div>
                  <p className="demo-canvas-card__eyebrow">Versión web</p>
                  <h3>{activeTemplate.label}</h3>
                </div>
                <div className="demo-canvas-card__badge">
                  <AccentIcon size={16} />
                  Desktop
                </div>
              </div>
              <div className="demo-canvas-card__media">
                <Image
                  src={activeTemplate.desktopImage}
                  alt={activeTemplate.desktopAlt}
                  width={1024}
                  height={1024}
                  sizes="(max-width: 1199px) 100vw, 58vw"
                  className="demo-canvas-card__image"
                />
              </div>
            </article>
          </div>

          <div className="col-xl-5">
            <article className="demo-mobile-card">
              <div className="demo-mobile-card__copy">
                <p className="demo-canvas-card__eyebrow">Versión móvil</p>
                <h3>{activeTemplate.name}</h3>
                <p>{activeTemplate.description}</p>
              </div>

              <div className="demo-mobile-shell">
                <div className="demo-mobile-shell__topbar">
                  <span className="demo-mobile-shell__dot" />
                  <span>Smarter mobile</span>
                  <Smartphone size={14} />
                </div>
                <div className="demo-mobile-shell__hero">
                  <strong>{activeTemplate.label}</strong>
                  <span>Vista resumida para decisiones y seguimiento.</span>
                </div>
                <div className="demo-mobile-shell__stats">
                  {activeTemplate.mobileStats.map((stat) => (
                    <div key={stat.label} className="demo-mobile-shell__stat">
                      <span>{stat.label}</span>
                      <strong>{stat.value}</strong>
                    </div>
                  ))}
                </div>
                <div className="demo-mobile-shell__feed">
                  <div className="demo-mobile-shell__feed-item">
                    <span>Prioridad alta</span>
                    <strong>Responder lead de campaña en menos de 10 min</strong>
                  </div>
                  <div className="demo-mobile-shell__feed-item">
                    <span>Acción rápida</span>
                    <strong>Reasignar, comentar o escalar desde el teléfono</strong>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
