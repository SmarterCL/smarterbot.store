import {
  Activity,
  AlertTriangle,
  Bot,
  CheckCheck,
  CircleDollarSign,
  Clock3,
  GitBranch,
  LayoutPanelTop,
  MessageSquareText,
  ScanSearch,
  Sparkles,
  WalletCards,
  type LucideIcon,
} from 'lucide-react';
import {
  automations as mockAutomations,
  conversations as mockConversations,
  dashboardHighlights as mockHighlights,
  integrations as mockIntegrations,
  metrics as mockMetrics,
  pipeline as mockPipeline,
  quickActions,
  timeline as mockTimeline,
  type Automation,
  type Conversation,
  type IntegrationStatus,
  type Metric,
  type PipelineStage,
  type QuickAction,
  type TimelineEvent,
} from '@/components/dashboard/mock-data';

export type DashboardData = {
  source: 'live' | 'mixed' | 'mock';
  sourceLabel: string;
  tenantId: string;
  userEmail: string | null;
  metrics: Metric[];
  pipeline: PipelineStage[];
  conversations: Conversation[];
  automations: Automation[];
  quickActions: QuickAction[];
  timeline: TimelineEvent[];
  integrations: IntegrationStatus[];
  dashboardHighlights: {
    label: string;
    value: string;
    icon: LucideIcon;
  }[];
  focusPoints: string[];
  monthlyTargetPercent: number;
  premiumSlaPercent: number;
};

type DashboardSummaryResponse = {
  tenant: string;
  user?: {
    role?: string;
  };
  plan?: string;
  waha?: {
    status?: string;
    phone?: string | null;
    session?: string;
    lastSeen?: string | null;
    qrRequired?: boolean;
  };
  chatwoot?: {
    configured?: boolean;
    openConversations?: number | null;
    contacts?: number | null;
  };
  system?: {
    status?: string;
    services?: Record<
      string,
      {
        status?: string;
        latencyMs?: number | null;
      }
    >;
  };
  automation?: {
    n8n?: string;
    executedEvents?: number;
    pendingEvents?: number;
  };
  billing?: {
    status?: string;
  };
  metrics?: {
    mcpEvents?: number;
    trustAverage?: number | null;
    agentMemoryCount?: number;
  };
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function relativeTimeLabel(value: string) {
  const timestamp = new Date(value).getTime();
  const deltaMs = Date.now() - timestamp;
  const deltaMinutes = Math.max(1, Math.round(deltaMs / 60000));

  if (deltaMinutes < 60) {
    return `Hace ${deltaMinutes} min`;
  }

  const deltaHours = Math.round(deltaMinutes / 60);
  return `Hace ${deltaHours} h`;
}

function buildMockDashboardData(tenantId: string, userEmail: string | null): DashboardData {
  return {
    source: 'mock',
    sourceLabel: 'Mock data',
    tenantId,
    userEmail,
    metrics: mockMetrics,
    pipeline: mockPipeline,
    conversations: mockConversations,
    automations: mockAutomations,
    quickActions,
    timeline: mockTimeline,
    integrations: mockIntegrations,
    dashboardHighlights: mockHighlights,
    focusPoints: [
      '11 conversaciones requieren respuesta humana antes de 15 minutos.',
      '4 oportunidades están listas para propuesta comercial.',
      '1 flujo de recuperación de leads muestra caída de conversión.',
    ],
    monthlyTargetPercent: 68,
    premiumSlaPercent: 91,
  };
}

function mapIntegrationStatus(status?: string, latencyMs?: number | null): IntegrationStatus['status'] {
  if (status === 'ok') {
    return typeof latencyMs === 'number' && latencyMs > 800 ? 'Lento' : 'Operativo';
  }

  if (status === 'degraded') {
    return 'Lento';
  }

  return 'Atención';
}

function formatLatency(latencyMs?: number | null) {
  return typeof latencyMs === 'number' ? `${latencyMs} ms` : 'n/a';
}

function formatUptime(status?: string) {
  if (status === 'ok') {
    return 'reachable';
  }

  if (status === 'degraded') {
    return 'degraded';
  }

  return 'sin respuesta';
}

function derivePipelineStages(summary: DashboardSummaryResponse): PipelineStage[] {
  const totalEvents = summary.metrics?.mcpEvents ?? 0;
  const executedEvents = summary.automation?.executedEvents ?? 0;
  const pendingEvents = summary.automation?.pendingEvents ?? 0;
  const openConversations = summary.chatwoot?.openConversations ?? 0;
  const observationCount = Math.max(0, totalEvents - executedEvents - pendingEvents);

  return [
    {
      name: 'Lead entrante',
      leads: openConversations,
      value: formatCurrency(openConversations * 120),
      change: `${openConversations} abiertos`,
      temperature: openConversations > 10 ? 'warm' : 'cold',
    },
    {
      name: 'Pendiente',
      leads: pendingEvents,
      value: formatCurrency(pendingEvents * 150),
      change: 'automatización en curso',
      temperature: pendingEvents > 0 ? 'warm' : 'cold',
    },
    {
      name: 'Ejecutado',
      leads: executedEvents,
      value: formatCurrency(executedEvents * 180),
      change: 'procesos completados',
      temperature: executedEvents > 0 ? 'warm' : 'cold',
    },
    {
      name: 'Observación',
      leads: observationCount,
      value: formatCurrency(observationCount * 90),
      change: observationCount > 0 ? 'requiere revisión' : 'sin incidentes',
      temperature: observationCount > 0 ? 'hot' : 'cold',
    },
  ];
}

function deriveMetrics(summary: DashboardSummaryResponse, tenantId: string): Metric[] {
  const trustAverage = summary.metrics?.trustAverage ?? null;
  const mcpEvents = summary.metrics?.mcpEvents ?? 0;
  const agentMemoryCount = summary.metrics?.agentMemoryCount ?? 0;
  const openConversations = summary.chatwoot?.openConversations ?? 0;
  const systemStatus = summary.system?.status ?? 'down';
  const systemServices = summary.system?.services ?? {};
  const systemSlowServices = Object.values(systemServices).filter((service) => service.status === 'degraded').length;
  const systemDownServices = Object.values(systemServices).filter((service) => service.status === 'down').length;

  return [
    {
      title: 'Eventos MCP',
      value: String(mcpEvents),
      delta: `${summary.automation?.executedEvents ?? 0} ejecutados`,
      detail: `Tenant ${tenantId} con ${summary.automation?.pendingEvents ?? 0} en curso`,
      icon: CircleDollarSign,
      tone: systemDownServices > 0 ? 'amber' : 'emerald',
    },
    {
      title: 'Memoria de agente',
      value: String(agentMemoryCount),
      delta: trustAverage === null ? 'sin trust' : `${trustAverage}/1 trust`,
      detail: 'Snapshots de contexto persistidos en Supabase',
      icon: MessageSquareText,
      tone: 'blue',
    },
    {
      title: 'Conversaciones abiertas',
      value: String(openConversations),
      delta: summary.chatwoot?.configured ? 'Chatwoot conectado' : 'Chatwoot pendiente',
      detail: 'Conversaciones operativas en inbox comercial',
      icon: GitBranch,
      tone: summary.chatwoot?.configured ? 'slate' : 'amber',
    },
    {
      title: 'Estado del sistema',
      value: systemStatus === 'ok' ? 'Operativo' : systemStatus === 'degraded' ? 'Degradado' : 'Caído',
      delta:
        systemDownServices > 0
          ? `${systemDownServices} servicio(s) caídos`
          : systemSlowServices > 0
            ? `${systemSlowServices} servicio(s) lentos`
            : 'sin incidentes',
      detail: 'Resumen operativo del gateway e integraciones',
      icon: Clock3,
      tone: systemStatus === 'ok' ? 'emerald' : 'amber',
    },
  ];
}

function deriveIntegrations(summary: DashboardSummaryResponse): IntegrationStatus[] {
  const services = summary.system?.services ?? {};
  const mapping: Array<[string, string]> = [
    ['n8n orchestration', 'n8n'],
    ['Chatwoot inbox', 'chatwoot'],
    ['Odoo revenue sync', 'odoo'],
    ['WAHA session', 'waha'],
  ];

  return mapping.map(([name, key]) => {
    const service = services[key];

    return {
      name,
      latency: formatLatency(service?.latencyMs),
      uptime: formatUptime(service?.status),
      status: mapIntegrationStatus(service?.status, service?.latencyMs),
    };
  });
}

function deriveAutomations(summary: DashboardSummaryResponse): Automation[] {
  const systemServices = summary.system?.services ?? {};
  const n8nLatency = systemServices.n8n?.latencyMs;
  const wahaLatency = systemServices.waha?.latencyMs;
  const executedEvents = summary.automation?.executedEvents ?? 0;
  const pendingEvents = summary.automation?.pendingEvents ?? 0;
  const configuredChatwoot = summary.chatwoot?.configured ?? false;

  return [
    {
      name: 'Lead scoring + routing',
      description: 'Centraliza el ruteo comercial desde WAHA y cola de automatización.',
      throughput: `${pendingEvents} pendientes`,
      successRate: `${summary.automation?.n8n ?? 'down'} · ${formatLatency(n8nLatency)}`,
      status: summary.automation?.n8n === 'ok' ? 'Activo' : 'Observación',
      icon: ScanSearch,
    },
    {
      name: 'Seguimiento post-demo',
      description: 'Mantiene continuidad de seguimiento sobre conversaciones activas.',
      throughput: `${summary.chatwoot?.openConversations ?? 0} conversaciones`,
      successRate: configuredChatwoot ? 'Chatwoot listo' : 'Chatwoot pendiente',
      status: configuredChatwoot ? 'Activo' : 'Borrador',
      icon: Sparkles,
    },
    {
      name: 'Operación WAHA',
      description: 'Monitorea la sesión de WhatsApp y su disponibilidad comercial.',
      throughput: summary.waha?.status ?? 'unknown',
      successRate: formatLatency(wahaLatency),
      status: summary.waha?.status === 'connected' ? 'Activo' : 'Observación',
      icon: CheckCheck,
    },
    {
      name: 'Billing + gating',
      description: 'Prepara estado comercial y feature gating por tenant.',
      throughput: summary.billing?.status ?? 'active',
      successRate: `${executedEvents} ejecuciones`,
      status: summary.billing?.status === 'active' ? 'Activo' : 'Observación',
      icon: WalletCards,
    },
  ];
}

function deriveTimeline(summary: DashboardSummaryResponse): TimelineEvent[] {
  const wahaStatus = summary.waha?.status ?? 'unknown';
  const wahaLastSeen = summary.waha?.lastSeen;
  const n8nStatus = summary.automation?.n8n ?? 'down';

  return [
    {
      title: `WAHA ${wahaStatus}`,
      timestamp: wahaLastSeen ? relativeTimeLabel(wahaLastSeen) : 'Sin timestamp',
      description: summary.waha?.phone ?? 'Sin número enlazado',
      icon: summary.waha?.status === 'connected' ? CheckCheck : AlertTriangle,
    },
    {
      title: 'Chatwoot inbox',
      timestamp: 'Estado actual',
      description: `${summary.chatwoot?.openConversations ?? 0} conversaciones abiertas`,
      icon: Sparkles,
    },
    {
      title: 'Automatización n8n',
      timestamp: 'Estado actual',
      description: `Motor ${n8nStatus}`,
      icon: n8nStatus === 'ok' ? CheckCheck : AlertTriangle,
    },
    {
      title: 'Billing tenant',
      timestamp: 'Estado actual',
      description: `Plan ${summary.plan ?? 'starter'} · ${summary.billing?.status ?? 'active'}`,
      icon: WalletCards,
    },
  ];
}

function deriveHighlights(summary: DashboardSummaryResponse, tenantId: string) {
  return [
    {
      label: 'Tenant',
      value: tenantId,
      icon: LayoutPanelTop,
    },
    {
      label: 'Rol',
      value: summary.user?.role ?? 'owner',
      icon: Bot,
    },
    {
      label: 'Plan',
      value: summary.plan ?? 'starter',
      icon: Activity,
    },
  ];
}

function deriveFocusPoints(summary: DashboardSummaryResponse): string[] {
  const pendingEvents = summary.automation?.pendingEvents ?? 0;
  const openConversations = summary.chatwoot?.openConversations ?? 0;
  const systemStatus = summary.system?.status ?? 'down';

  return [
    `${openConversations} conversaciones siguen abiertas en Chatwoot.`,
    `${pendingEvents} automatizaciones siguen pendientes de ejecución.`,
    `Estado global del sistema: ${systemStatus}.`,
  ];
}

async function fetchGatewayDashboardData(
  tenantId: string,
  accessToken: string
): Promise<Omit<DashboardData, 'userEmail'>> {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_GATEWAY_URL?.trim();

  if (!apiBaseUrl) {
    throw new Error('Falta NEXT_PUBLIC_API_GATEWAY_URL.');
  }

  const response = await fetch(`${apiBaseUrl}/api/v1/dashboard/summary/${tenantId}`, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Dashboard summary respondió con HTTP ${response.status}.`);
  }

  const summary = (await response.json()) as DashboardSummaryResponse;
  const metrics = deriveMetrics(summary, tenantId);
  const pipeline = derivePipelineStages(summary);
  const integrations = deriveIntegrations(summary);
  const automations = deriveAutomations(summary);
  const timeline = deriveTimeline(summary);
  const totalEvents = summary.metrics?.mcpEvents ?? 0;
  const executedEvents = summary.automation?.executedEvents ?? 0;
  const monthlyTargetPercent = Math.min(100, Math.max(12, Math.round((executedEvents / Math.max(1, totalEvents)) * 100)));
  const premiumSlaPercent = Math.min(
    100,
    Math.max(
      10,
      summary.system?.status === 'ok'
        ? 96
        : summary.system?.status === 'degraded'
          ? 78
          : 42
    )
  );

  return {
    source: 'live',
    sourceLabel: 'Gateway live',
    tenantId,
    metrics,
    pipeline,
    conversations: mockConversations,
    automations,
    quickActions,
    timeline,
    integrations,
    dashboardHighlights: deriveHighlights(summary, tenantId),
    focusPoints: deriveFocusPoints(summary),
    monthlyTargetPercent,
    premiumSlaPercent,
  };
}

export async function getDashboardData(
  tenantId: string,
  userEmail: string | null,
  accessToken: string | null
): Promise<DashboardData> {
  if (!accessToken) {
    return buildMockDashboardData(tenantId, userEmail);
  }

  try {
    const liveData = await fetchGatewayDashboardData(tenantId, accessToken);

    return {
      ...liveData,
      userEmail,
    };
  } catch {
    return {
      ...buildMockDashboardData(tenantId, userEmail),
      source: 'mixed',
      sourceLabel: 'Mock fallback',
    };
  }
}
