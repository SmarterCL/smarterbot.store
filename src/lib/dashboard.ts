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
import type { SupabaseClient } from '@supabase/supabase-js';
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
import { createSupabaseAdminClient } from '@/lib/supabase/server';

type HealthRow = {
  tenant_id: string;
  total_events: number;
  success_count: number;
  error_count: number;
  avg_trust: number | null;
};

type MCPEventRow = {
  id: string;
  tenant_id: string;
  intent: string | null;
  status: string | null;
  trust_score: number | null;
  created_at: string;
};

type ToolLogRow = {
  id: string;
  tool_name: string;
  error_message: string | null;
  duration_ms: number | null;
  created_at: string;
};

type AgentMemoryRow = {
  id: string;
  key: string;
  updated_at: string;
};

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

async function probeUrl(
  name: string,
  target: string | undefined,
  fallbackStatus: IntegrationStatus['status']
): Promise<IntegrationStatus> {
  if (!target) {
    return { name, latency: 'n/a', uptime: 'n/a', status: fallbackStatus };
  }

  const start = Date.now();

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2500);
    const response = await fetch(target, {
      method: 'GET',
      cache: 'no-store',
      signal: controller.signal,
    });
    clearTimeout(timer);

    const latency = `${Date.now() - start} ms`;
    const status: IntegrationStatus['status'] = response.ok
      ? Date.now() - start > 500
        ? 'Lento'
        : 'Operativo'
      : 'Atención';

    return {
      name,
      latency,
      uptime: response.ok ? 'reachable' : `http ${response.status}`,
      status,
    };
  } catch {
    return {
      name,
      latency: 'timeout',
      uptime: 'sin respuesta',
      status: 'Atención',
    };
  }
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

async function fetchLiveDashboardData(admin: SupabaseClient, tenantId: string) {
  const [healthResult, eventsResult, toolLogsResult, memoryResult, integrations] = await Promise.all([
    admin.from('v_tenant_health').select('*').eq('tenant_id', tenantId).maybeSingle<HealthRow>(),
    admin
      .from('mcp_events')
      .select('id, tenant_id, intent, status, trust_score, created_at')
      .eq('tenant_id', tenantId)
      .order('created_at', { ascending: false })
      .limit(24)
      .returns<MCPEventRow[]>(),
    admin
      .from('tool_logs')
      .select('id, tool_name, error_message, duration_ms, created_at')
      .order('created_at', { ascending: false })
      .limit(24)
      .returns<ToolLogRow[]>(),
    admin
      .from('agent_memory')
      .select('id, key, updated_at')
      .eq('tenant_id', tenantId)
      .order('updated_at', { ascending: false })
      .limit(12)
      .returns<AgentMemoryRow[]>(),
    Promise.all([
      probeUrl('n8n orchestration', process.env.NEXT_PUBLIC_CLAW_API_URL, 'Operativo'),
      probeUrl('Chatwoot inbox', process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL, 'Operativo'),
      probeUrl('Odoo revenue sync', process.env.NEXT_PUBLIC_ODOO_BASE_URL, 'Atención'),
    ]),
  ]);

  if (healthResult.error) {
    throw healthResult.error;
  }
  if (eventsResult.error) {
    throw eventsResult.error;
  }
  if (toolLogsResult.error) {
    throw toolLogsResult.error;
  }
  if (memoryResult.error) {
    throw memoryResult.error;
  }

  const health = healthResult.data;
  const events = eventsResult.data ?? [];
  const toolLogs = toolLogsResult.data ?? [];
  const memory = memoryResult.data ?? [];

  const executedEvents = events.filter((event) => event.status === 'executed').length;
  const failedEvents = events.filter((event) => event.status === 'failed').length;
  const pendingEvents = events.filter((event) => event.status !== 'executed' && event.status !== 'failed').length;
  const avgDuration =
    toolLogs.filter((item) => typeof item.duration_ms === 'number').reduce((sum, item) => sum + (item.duration_ms ?? 0), 0) /
      Math.max(1, toolLogs.filter((item) => typeof item.duration_ms === 'number').length) || 0;
  const successfulLogs = toolLogs.filter((item) => !item.error_message).length;
  const successRate = Math.round((successfulLogs / Math.max(1, toolLogs.length)) * 1000) / 10;
  const avgTrust = health?.avg_trust ?? null;
  const estimatedPipelineValue = (health?.total_events ?? events.length) * 120;

  const metrics: Metric[] = [
    {
      title: 'Eventos MCP',
      value: String(health?.total_events ?? events.length),
      delta: `${executedEvents} ejecutados`,
      detail: `Tenant ${tenantId} con ${pendingEvents} en curso y ${failedEvents} fallidos`,
      icon: CircleDollarSign,
      tone: failedEvents > 0 ? 'amber' : 'emerald',
    },
    {
      title: 'Memoria de agente',
      value: String(memory.length),
      delta: avgTrust === null ? 'sin trust' : `${avgTrust}/1 trust`,
      detail: 'Snapshots de contexto persistidos en agent_memory',
      icon: MessageSquareText,
      tone: 'blue',
    },
    {
      title: 'Tool logs',
      value: String(toolLogs.length),
      delta: `${successRate}% éxito`,
      detail: 'Ejecuciones recientes de herramientas y automatizaciones',
      icon: GitBranch,
      tone: successRate >= 95 ? 'slate' : 'amber',
    },
    {
      title: 'Duración media',
      value: `${Math.round(avgDuration)} ms`,
      delta: failedEvents > 0 ? `${failedEvents} errores` : 'sin errores recientes',
      detail: 'Promedio de duración registrado en tool_logs',
      icon: Clock3,
      tone: avgDuration > 800 ? 'amber' : 'emerald',
    },
  ];

  const pipeline: PipelineStage[] = [
    {
      name: 'Lead entrante',
      leads: pendingEvents,
      value: formatCurrency(pendingEvents * 120),
      change: `${pendingEvents} pendientes`,
      temperature: pendingEvents > 5 ? 'warm' : 'cold',
    },
    {
      name: 'Decidido',
      leads: events.filter((event) => event.status === 'decided').length,
      value: formatCurrency(events.filter((event) => event.status === 'decided').length * 150),
      change: 'routing listo',
      temperature: 'cold',
    },
    {
      name: 'Ejecutado',
      leads: executedEvents,
      value: formatCurrency(executedEvents * 180),
      change: 'automatizaciones completadas',
      temperature: executedEvents > 0 ? 'warm' : 'cold',
    },
    {
      name: 'Observación',
      leads: failedEvents,
      value: formatCurrency(failedEvents * 90),
      change: failedEvents > 0 ? 'requiere revisión' : 'sin incidentes',
      temperature: failedEvents > 0 ? 'hot' : 'warm',
    },
  ];

  const conversations: Conversation[] = events.slice(0, 4).map((event, index) => ({
    account: event.tenant_id,
    customer: event.intent || `Evento ${event.id.slice(0, 6)}`,
    channel: 'MCP',
    intent: event.intent || 'Sin intención declarada',
    owner: index % 2 === 0 ? 'IA' : 'Operación',
    status:
      event.status === 'failed'
        ? 'Escalado'
        : event.status === 'executed'
          ? 'En curso'
          : event.status === 'decided'
            ? 'Esperando pago'
            : 'Nuevo',
    waitTime: relativeTimeLabel(event.created_at),
    sentiment: event.trust_score !== null && event.trust_score < 0.5 ? 'Crítica' : 'Media',
  }));

  const toolGroups = new Map<string, ToolLogRow[]>();
  toolLogs.forEach((log) => {
    const list = toolGroups.get(log.tool_name) ?? [];
    list.push(log);
    toolGroups.set(log.tool_name, list);
  });

  const automations: Automation[] = Array.from(toolGroups.entries())
    .slice(0, 4)
    .map(([toolName, logs], index) => {
      const failures = logs.filter((log) => log.error_message).length;
      const averageDuration =
        logs.reduce((sum, log) => sum + (log.duration_ms ?? 0), 0) / Math.max(1, logs.length);

      return {
        name: toolName,
        description: failures
          ? `${failures} ejecuciones con error requieren revisión.`
          : 'Ejecuciones recientes sin errores reportados.',
        throughput: `${logs.length} ejecuciones`,
        successRate: `${Math.round(((logs.length - failures) / Math.max(1, logs.length)) * 100)}% · ${Math.round(averageDuration)} ms`,
        status: failures > 0 ? 'Observación' : 'Activo',
        icon: [ScanSearch, Sparkles, CheckCheck, WalletCards][index] ?? Sparkles,
      };
    });

  const timeline: TimelineEvent[] = toolLogs.slice(0, 4).map((log, index) => ({
    title: log.error_message ? `Error en ${log.tool_name}` : `${log.tool_name} ejecutado`,
    timestamp: relativeTimeLabel(log.created_at),
    description: log.error_message || `Duración ${log.duration_ms ?? 'n/a'} ms`,
    icon: [AlertTriangle, Sparkles, CheckCheck, WalletCards][index] ?? Activity,
  }));

  const dashboardHighlights = [
    {
      label: 'Tenant',
      value: tenantId,
      icon: LayoutPanelTop,
    },
    {
      label: 'Trust medio',
      value: avgTrust === null ? 'sin dato' : `${avgTrust}/1`,
      icon: Bot,
    },
    {
      label: 'Valor estimado',
      value: formatCurrency(estimatedPipelineValue),
      icon: Activity,
    },
  ];

  const focusPoints = [
    `${pendingEvents} eventos siguen pendientes de ejecución.`,
    `${failedEvents} eventos fallidos necesitan revisión operativa.`,
    `${memory.length} registros de memoria disponibles para contexto.`,
  ];

  return {
    source: 'live' as const,
    sourceLabel: 'Supabase live',
    tenantId,
    metrics,
    pipeline,
    conversations: conversations.length > 0 ? conversations : mockConversations,
    automations: automations.length > 0 ? automations : mockAutomations,
    quickActions,
    timeline: timeline.length > 0 ? timeline : mockTimeline,
    integrations: integrations.filter((item) => item.latency !== 'n/a').length > 0 ? integrations : mockIntegrations,
    dashboardHighlights,
    focusPoints,
    monthlyTargetPercent: Math.min(100, Math.max(12, Math.round((executedEvents / Math.max(1, health?.total_events ?? 1)) * 100))),
    premiumSlaPercent: Math.min(100, Math.max(10, Math.round(successRate))),
  };
}

export async function getDashboardData(
  tenantId: string,
  userEmail: string | null
): Promise<DashboardData> {
  const admin = createSupabaseAdminClient();

  if (!admin) {
    return buildMockDashboardData(tenantId, userEmail);
  }

  try {
    const liveData = await fetchLiveDashboardData(admin, tenantId);

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
