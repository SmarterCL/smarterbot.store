import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  LucideIcon,
  ShieldCheck,
  Sparkle,
} from 'lucide-react';
import styles from '@/app/dashboard/dashboard.module.css';
import type { DashboardData } from '@/lib/dashboard';
import WahaStatusWidget from './WahaStatusWidget';

function toneClass(tone: string) {
  return {
    emerald: styles.toneEmerald,
    amber: styles.toneAmber,
    slate: styles.toneSlate,
    blue: styles.toneBlue,
  }[tone] ?? styles.toneSlate;
}

function statusClass(status: string) {
  return {
    Activo: styles.statusGood,
    Operativo: styles.statusGood,
    Nuevo: styles.statusInfo,
    'En curso': styles.statusInfo,
    'Esperando pago': styles.statusWarn,
    Lento: styles.statusWarn,
    Observación: styles.statusWarn,
    Escalado: styles.statusDanger,
    Atención: styles.statusDanger,
    Borrador: styles.statusMuted,
  }[status] ?? styles.statusMuted;
}

function temperatureClass(temperature: string) {
  return {
    cold: styles.temperatureCold,
    warm: styles.temperatureWarm,
    hot: styles.temperatureHot,
  }[temperature] ?? styles.temperatureCold;
}

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className={styles.iconBadge}>
      <Icon size={18} />
    </div>
  );
}

function getSourceBadge(source: DashboardData['source']) {
  return {
    live: 'Live',
    mixed: 'Fallback',
    mock: 'Mock',
  }[source];
}

type SmarterDashboardProps = {
  data: DashboardData;
};

export default function SmarterDashboard({ data }: SmarterDashboardProps) {
  const {
    source,
    sourceLabel,
    tenantId,
    userEmail,
    metrics,
    pipeline,
    conversations,
    automations,
    quickActions,
    timeline,
    integrations,
    dashboardHighlights,
    focusPoints,
    monthlyTargetPercent,
    premiumSlaPercent,
  } = data;

  return (
    <div className={styles.dashboardShell}>
      <section className={styles.heroSection}>
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-xl-8">
              <div className={styles.heroCard}>
                <div className={styles.heroCopy}>
                  <span className={styles.eyebrow}>Smarter Funnel OS</span>
                  <h1 className={styles.heroTitle}>Centro operacional para ventas conversacionales.</h1>
                  <p className={styles.heroText}>
                    Unifica captación, conversaciones, automatizaciones y operación comercial
                    en una sola vista. El panel usa datos reales desde Supabase cuando existe
                    acceso server-side y cae a datos de demostración cuando la infraestructura
                    aún no está conectada.
                  </p>
                  <div className={styles.heroActions}>
                    <Link href="#" className="btn btn-success-premium">
                      Revisar pipeline
                      <ArrowRight size={18} />
                    </Link>
                    <Link href="#" className="btn btn-outline-dark cta-outline-dynamic">
                      Abrir inbox
                    </Link>
                  </div>
                </div>
                <div className={styles.heroPanel}>
                  <div className={styles.heroPanelHeader}>
                    <div>
                      <p className={styles.miniLabel}>Revenue motion</p>
                      <h2 className={styles.heroPanelTitle}>Estado del día</h2>
                    </div>
                    <div className={styles.liveBadge}>
                      <Sparkle size={14} />
                      {getSourceBadge(source)}
                    </div>
                  </div>
                  <div className={styles.heroHighlightGrid}>
                    {dashboardHighlights.map(({ label, value, icon: Icon }) => (
                      <div key={label} className={styles.heroHighlight}>
                        <div className={styles.heroHighlightIcon}>
                          <Icon size={18} />
                        </div>
                        <p className={styles.miniLabel}>{label}</p>
                        <strong>{value}</strong>
                      </div>
                    ))}
                  </div>
                  <div className={styles.heroFootnote}>
                    <ShieldCheck size={16} />
                    {sourceLabel} · tenant {tenantId}
                    {userEmail ? ` · ${userEmail}` : ''}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className={styles.sideSummaryCard}>
                <div className={styles.sideSummaryHeader}>
                  <div>
                    <p className={styles.miniLabel}>Hoy</p>
                    <h2 className={styles.sectionTitle}>Foco ejecutivo</h2>
                  </div>
                  <span className={`${styles.statusPill} ${styles.statusGood}`}>On track</span>
                </div>
                <ul className={styles.priorityList}>
                  {focusPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className={styles.progressCluster}>
                  <div>
                    <span className={styles.progressLabel}>Objetivo de cierre mensual</span>
                    <strong>{monthlyTargetPercent}%</strong>
                  </div>
                  <div className={styles.progressBar}>
                    <span style={{ width: `${monthlyTargetPercent}%` }} />
                  </div>
                </div>
                <div className={styles.progressCluster}>
                  <div>
                    <span className={styles.progressLabel}>SLA conversaciones premium</span>
                    <strong>{premiumSlaPercent}%</strong>
                  </div>
                  <div className={styles.progressBar}>
                    <span style={{ width: `${premiumSlaPercent}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionCompact}>
        <div className="container">
          <div className="row g-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div key={metric.title} className="col-sm-6 col-xl-3">
                  <article className={styles.metricCard}>
                    <div className={`${styles.metricIconWrap} ${toneClass(metric.tone)}`}>
                      <Icon size={22} />
                    </div>
                    <div className={styles.metricHeader}>
                      <span>{metric.title}</span>
                      <strong>{metric.delta}</strong>
                    </div>
                    <div className={styles.metricValue}>{metric.value}</div>
                    <p className={styles.metricDetail}>{metric.detail}</p>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.sectionCompact}>
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-7">
              <div className={styles.panelCard}>
                <div className={styles.panelHeader}>
                  <div>
                    <p className={styles.miniLabel}>Pipeline summary</p>
                    <h2 className={styles.sectionTitle}>Embudo comercial</h2>
                  </div>
                  <Link href="#" className={styles.inlineLink}>
                    Ver oportunidades
                    <ChevronRight size={16} />
                  </Link>
                </div>
                <div className={styles.pipelineGrid}>
                  {pipeline.map((stage) => (
                    <article key={stage.name} className={styles.pipelineCard}>
                      <span className={`${styles.temperatureDot} ${temperatureClass(stage.temperature)}`} />
                      <p className={styles.pipelineName}>{stage.name}</p>
                      <div className={styles.pipelineValue}>{stage.value}</div>
                      <div className={styles.pipelineMeta}>
                        <strong>{stage.leads} leads</strong>
                        <span>{stage.change}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <WahaStatusWidget tenantId={tenantId} />
              <div className={styles.panelCard}>
                <div className={styles.panelHeader}>
                  <div>
                    <p className={styles.miniLabel}>Quick actions</p>
                    <h2 className={styles.sectionTitle}>Accesos rápidos</h2>
                  </div>
                </div>
                <div className={styles.quickActionGrid}>
                  {quickActions.map((action) => {
                    const Icon = action.icon;
                    return (
                      <Link key={action.title} href={action.href} className={styles.quickActionCard}>
                        <IconBadge icon={Icon} />
                        <div>
                          <strong>{action.title}</strong>
                          <p>{action.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionCompact}>
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-8">
              <div className={styles.panelCard}>
                <div className={styles.panelHeader}>
                  <div>
                    <p className={styles.miniLabel}>Inbox load</p>
                    <h2 className={styles.sectionTitle}>Conversaciones prioritarias</h2>
                  </div>
                  <span className={`${styles.statusPill} ${styles.statusInfo}`}>284 activas</span>
                </div>
                <div className={styles.tableWrap}>
                  <table className={styles.dataTable}>
                    <thead>
                      <tr>
                        <th>Cuenta</th>
                        <th>Cliente</th>
                        <th>Canal</th>
                        <th>Intención</th>
                        <th>Owner</th>
                        <th>Espera</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {conversations.map((conversation) => (
                        <tr key={`${conversation.account}-${conversation.customer}`}>
                          <td>
                            <strong>{conversation.account}</strong>
                          </td>
                          <td>{conversation.customer}</td>
                          <td>{conversation.channel}</td>
                          <td>
                            <div className={styles.intentCell}>
                              <span>{conversation.intent}</span>
                              <small>Prioridad {conversation.sentiment}</small>
                            </div>
                          </td>
                          <td>{conversation.owner}</td>
                          <td>{conversation.waitTime}</td>
                          <td>
                            <span className={`${styles.statusPill} ${statusClass(conversation.status)}`}>
                              {conversation.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className={styles.stackColumn}>
                <div className={styles.panelCard}>
                  <div className={styles.panelHeader}>
                    <div>
                      <p className={styles.miniLabel}>Automation health</p>
                      <h2 className={styles.sectionTitle}>Playbooks activos</h2>
                    </div>
                  </div>
                  <div className={styles.automationList}>
                    {automations.map((automation) => {
                      const Icon = automation.icon;
                      return (
                        <article key={automation.name} className={styles.automationCard}>
                          <div className={styles.automationTop}>
                            <IconBadge icon={Icon} />
                            <span className={`${styles.statusPill} ${statusClass(automation.status)}`}>
                              {automation.status}
                            </span>
                          </div>
                          <strong>{automation.name}</strong>
                          <p>{automation.description}</p>
                          <div className={styles.automationMeta}>
                            <span>{automation.throughput}</span>
                            <span>{automation.successRate}</span>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.panelCard}>
                  <div className={styles.panelHeader}>
                    <div>
                      <p className={styles.miniLabel}>Recent motion</p>
                      <h2 className={styles.sectionTitle}>Actividad reciente</h2>
                    </div>
                  </div>
                  <div className={styles.timelineList}>
                    {timeline.map((event) => {
                      const Icon = event.icon;
                      return (
                        <article key={event.title} className={styles.timelineItem}>
                          <IconBadge icon={Icon} />
                          <div>
                            <div className={styles.timelineHeader}>
                              <strong>{event.title}</strong>
                              <span>{event.timestamp}</span>
                            </div>
                            <p>{event.description}</p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionCompact}>
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-6">
              <div className={`${styles.panelCard} ${styles.darkCard}`}>
                <div className={styles.panelHeader}>
                  <div>
                    <p className={styles.miniLabel}>Stack readiness</p>
                    <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>
                      Integraciones operacionales
                    </h2>
                  </div>
                </div>
                <div className={styles.integrationList}>
                  {integrations.map((integration) => (
                    <div key={integration.name} className={styles.integrationRow}>
                      <div>
                        <strong>{integration.name}</strong>
                        <p>{integration.latency} latency</p>
                      </div>
                      <div className={styles.integrationMeta}>
                        <span>{integration.uptime}</span>
                        <span className={`${styles.statusPill} ${statusClass(integration.status)}`}>
                          {integration.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className={styles.panelCard}>
                <div className={styles.panelHeader}>
                  <div>
                    <p className={styles.miniLabel}>Next steps</p>
                    <h2 className={styles.sectionTitle}>Qué conectar después</h2>
                  </div>
                </div>
                <div className={styles.nextStepsGrid}>
                  {[
                    'Reemplazar mocks por queries reales desde Supabase o APIs internas.',
                    'Conectar inbox y SLA con la capa operativa real para métricas reales.',
                    'Sincronizar pipeline con el backoffice y automatizaciones.',
                    'Agregar filtros por vertical, owner y estado operacional.',
                  ].map((step) => (
                    <div key={step} className={styles.nextStepCard}>
                      <span className={styles.stepIndex}>0{[
                        'Reemplazar mocks por queries reales desde Supabase o APIs internas.',
                        'Conectar inbox y SLA con la capa operativa real para métricas reales.',
                        'Sincronizar pipeline con el backoffice y automatizaciones.',
                        'Agregar filtros por vertical, owner y estado operacional.',
                      ].indexOf(step) + 1}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
