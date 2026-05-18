import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarClock,
  CheckCheck,
  CircleDollarSign,
  Clock3,
  GitBranch,
  LayoutPanelTop,
  MessageSquareText,
  PhoneCall,
  PlugZap,
  Rocket,
  ScanSearch,
  Send,
  Sparkles,
  Target,
  WalletCards,
} from 'lucide-react';

export type Metric = {
  title: string;
  value: string;
  delta: string;
  detail: string;
  icon: LucideIcon;
  tone: 'emerald' | 'amber' | 'slate' | 'blue';
};

export type PipelineStage = {
  name: string;
  leads: number;
  value: string;
  change: string;
  temperature: 'cold' | 'warm' | 'hot';
};

export type Conversation = {
  account: string;
  customer: string;
  channel: string;
  intent: string;
  owner: string;
  status: 'Nuevo' | 'En curso' | 'Esperando pago' | 'Escalado';
  waitTime: string;
  sentiment: 'Alta' | 'Media' | 'Crítica';
};

export type Automation = {
  name: string;
  description: string;
  throughput: string;
  successRate: string;
  status: 'Activo' | 'Observación' | 'Borrador';
  icon: LucideIcon;
};

export type QuickAction = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export type TimelineEvent = {
  title: string;
  timestamp: string;
  description: string;
  icon: LucideIcon;
};

export type IntegrationStatus = {
  name: string;
  latency: string;
  uptime: string;
  status: 'Operativo' | 'Lento' | 'Atención';
};

export const metrics: Metric[] = [
  {
    title: 'Pipeline activo',
    value: '$128.4K',
    delta: '+18.2%',
    detail: '62 oportunidades moviéndose en 4 etapas',
    icon: CircleDollarSign,
    tone: 'emerald',
  },
  {
    title: 'Conversaciones abiertas',
    value: '284',
    delta: '+34',
    detail: 'WhatsApp, Instagram y web inbox unificados',
    icon: MessageSquareText,
    tone: 'blue',
  },
  {
    title: 'Automatizaciones ejecutadas',
    value: '1,942',
    delta: '97.8%',
    detail: 'Tasa de éxito durante las últimas 24 horas',
    icon: GitBranch,
    tone: 'slate',
  },
  {
    title: 'Tiempo medio de primera respuesta',
    value: '2m 14s',
    delta: '-41%',
    detail: 'Mejora contra la semana pasada',
    icon: Clock3,
    tone: 'amber',
  },
];

export const pipeline: PipelineStage[] = [
  { name: 'Lead entrante', leads: 148, value: '$34K', change: '+12 hoy', temperature: 'warm' },
  { name: 'Calificación IA', leads: 96, value: '$52K', change: '84% completos', temperature: 'cold' },
  { name: 'Demo agendada', leads: 44, value: '$27K', change: '+9 esta semana', temperature: 'warm' },
  { name: 'Negociación', leads: 21, value: '$15.4K', change: '6 cierres probables', temperature: 'hot' },
];

export const conversations: Conversation[] = [
  {
    account: 'Clínica Andes',
    customer: 'María Soto',
    channel: 'WhatsApp',
    intent: 'Reagendar demo + plan Growth',
    owner: 'Valentina',
    status: 'En curso',
    waitTime: '40s',
    sentiment: 'Alta',
  },
  {
    account: 'Inmobiliaria Norte',
    customer: 'Jorge Peña',
    channel: 'Instagram',
    intent: 'Cotización embudo con chatbot',
    owner: 'IA + SDR',
    status: 'Nuevo',
    waitTime: '2m',
    sentiment: 'Media',
  },
  {
    account: 'Turismo Falabella Partner',
    customer: 'Carla Díaz',
    channel: 'WhatsApp',
    intent: 'Pago pendiente onboarding',
    owner: 'Finanzas',
    status: 'Esperando pago',
    waitTime: '11m',
    sentiment: 'Alta',
  },
  {
    account: 'Logística Ruta 5',
    customer: 'Eduardo Melo',
    channel: 'Web chat',
    intent: 'Incidente integración WAHA',
    owner: 'Soporte L2',
    status: 'Escalado',
    waitTime: '6m',
    sentiment: 'Crítica',
  },
];

export const automations: Automation[] = [
  {
    name: 'Lead scoring + routing',
    description: 'Clasifica intención, presupuesto y urgencia, luego asigna al inbox correcto.',
    throughput: '438 contactos hoy',
    successRate: '99.1%',
    status: 'Activo',
    icon: ScanSearch,
  },
  {
    name: 'Seguimiento post-demo',
    description: 'Envía recap, propuesta y agenda un próximo toque comercial automáticamente.',
    throughput: '86 secuencias',
    successRate: '96.4%',
    status: 'Activo',
    icon: Send,
  },
  {
    name: 'Recuperación de leads fríos',
    description: 'Reactiva conversaciones inactivas con IA y oferta contextual según vertical.',
    throughput: '122 reactivaciones',
    successRate: '74.8%',
    status: 'Observación',
    icon: Rocket,
  },
  {
    name: 'Sincronización CRM -> ERP',
    description: 'Empuja negocio ganado, contacto y orden a la capa operacional.',
    throughput: '31 negocios',
    successRate: 'Configurando',
    status: 'Borrador',
    icon: BriefcaseBusiness,
  },
];

export const quickActions: QuickAction[] = [
  {
    title: 'Lanzar campaña',
    description: 'Crear una secuencia de captación con destino a WhatsApp.',
    icon: Target,
    href: '#',
  },
  {
    title: 'Abrir inbox prioritario',
    description: 'Revisar conversaciones con SLA cerca de vencer.',
    icon: PhoneCall,
    href: '#',
  },
  {
    title: 'Diseñar workflow',
    description: 'Añadir una automatización nueva para onboarding o cobro.',
    icon: PlugZap,
    href: '#',
  },
  {
    title: 'Revisar copiloto IA',
    description: 'Validar respuestas sugeridas, reglas y contexto comercial.',
    icon: BrainCircuit,
    href: '#',
  },
];

export const timeline: TimelineEvent[] = [
  {
    title: 'Nuevo deal ganado en segmento salud',
    timestamp: 'Hace 8 min',
    description: 'Plan Enterprise cerrado por $3.200 mensual con upsell de onboarding.',
    icon: WalletCards,
  },
  {
    title: 'Automatización recuperó 12 leads',
    timestamp: 'Hace 21 min',
    description: 'Secuencia reactivation-02 generó 4 respuestas calificadas.',
    icon: Sparkles,
  },
  {
    title: 'SLA inbox premium en objetivo',
    timestamp: 'Hace 36 min',
    description: 'Tiempo medio de primera respuesta cayó bajo los 3 minutos.',
    icon: CheckCheck,
  },
  {
    title: 'Demo grupal agendada desde calendario',
    timestamp: 'Hace 1 h',
    description: 'Equipo comercial y cliente coordinados para mañana 09:30.',
    icon: CalendarClock,
  },
];

export const integrations: IntegrationStatus[] = [
  { name: 'Chatwoot inbox', latency: '132 ms', uptime: '99.98%', status: 'Operativo' },
  { name: 'WAHA / WhatsApp bridge', latency: '248 ms', uptime: '99.64%', status: 'Lento' },
  { name: 'n8n orchestration', latency: '89 ms', uptime: '99.99%', status: 'Operativo' },
  { name: 'Odoo revenue sync', latency: '410 ms', uptime: '98.72%', status: 'Atención' },
];

export const dashboardHighlights = [
  {
    label: 'Control tower',
    value: 'Ventas conversacionales',
    icon: LayoutPanelTop,
  },
  {
    label: 'Copiloto',
    value: 'IA activa en 6 playbooks',
    icon: Bot,
  },
  {
    label: 'Ritmo',
    value: '17 tareas críticas hoy',
    icon: Activity,
  },
];
