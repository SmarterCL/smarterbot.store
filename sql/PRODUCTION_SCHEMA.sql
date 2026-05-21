-- =================================================================
-- 🚀 SMARTEROS PRODUCTION SCHEMA (SUPABASE)
-- =================================================================
-- Versión: 2.1.0
-- Características: Multi-tenant, RLS, Agent Memory, Analytics
-- =================================================================

-- 1. EXTENSIONES
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. TABLAS NÚCLEO

-- Tabla de Eventos MCP (Rastreo de decisiones)
CREATE TABLE IF NOT EXISTS mcp_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id TEXT NOT NULL,
    correlation_id TEXT,
    intent TEXT,
    payload JSONB,
    decision JSONB,
    status TEXT DEFAULT 'pending', -- pending, executed, failed
    trust_score FLOAT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    executed_at TIMESTAMP WITH TIME ZONE
);

-- Memoria del Agente (Persistencia de contexto)
CREATE TABLE IF NOT EXISTS agent_memory (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id TEXT NOT NULL,
    key TEXT NOT NULL,
    value JSONB,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(tenant_id, key)
);

-- Registro de Ejecución de Herramientas (Debug)
CREATE TABLE IF NOT EXISTS tool_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID REFERENCES mcp_events(id),
    tool_name TEXT NOT NULL,
    input_data JSONB,
    output_data JSONB,
    error_message TEXT,
    duration_ms INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. FUNCIONES DE APOYO

-- Función para obtener el Tenant ID actual (Simulado para este ejemplo)
CREATE OR REPLACE FUNCTION get_current_tenant() 
RETURNS TEXT AS $$
  SELECT current_setting('app.current_tenant', true);
$$ LANGUAGE sql STABLE;

-- Función para registrar una decisión atómicamente
CREATE OR REPLACE FUNCTION log_mcp_decision(
    p_tenant_id TEXT,
    p_intent TEXT,
    p_payload JSONB,
    p_decision JSONB,
    p_trust_score FLOAT
) RETURNS UUID AS $$
DECLARE
    v_event_id UUID;
BEGIN
    INSERT INTO mcp_events (tenant_id, intent, payload, decision, trust_score, status)
    VALUES (p_tenant_id, p_intent, p_payload, p_decision, p_trust_score, 'decided')
    RETURNING id INTO v_event_id;
    
    RETURN v_event_id;
END;
$$ LANGUAGE plpgsql;

-- 4. VISTAS ANALÍTICAS

-- Salud del Sistema por Tenant
CREATE OR REPLACE VIEW v_tenant_health AS
SELECT 
    tenant_id,
    COUNT(*) as total_events,
    COUNT(*) FILTER (WHERE status = 'executed') as success_count,
    COUNT(*) FILTER (WHERE status = 'failed') as error_count,
    ROUND(AVG(trust_score)::numeric, 2) as avg_trust
FROM mcp_events
GROUP BY tenant_id;

-- Recientes Decisiones Críticas
CREATE OR REPLACE VIEW v_critical_decisions AS
SELECT * 
FROM mcp_events 
WHERE (decision->>'priority') = 'high'
ORDER BY created_at DESC
LIMIT 50;

-- 5. SEGURIDAD (RLS)

-- Habilitar RLS
ALTER TABLE mcp_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_memory ENABLE ROW LEVEL SECURITY;
ALTER TABLE tool_logs ENABLE ROW LEVEL SECURITY;

-- Políticas (Simplificadas: asumen que el tenant_id está en el JWT o variable de sesión)
CREATE POLICY tenant_isolation_mcp_events ON mcp_events
    FOR ALL USING (tenant_id = get_current_tenant());

CREATE POLICY tenant_isolation_memory ON agent_memory
    FOR ALL USING (tenant_id = get_current_tenant());

-- 6. ÍNDICES PARA PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_mcp_events_tenant ON mcp_events(tenant_id);
CREATE INDEX IF NOT EXISTS idx_mcp_events_created ON mcp_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_agent_memory_key ON agent_memory(tenant_id, key);
