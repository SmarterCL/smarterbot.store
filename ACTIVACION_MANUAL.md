# 🔧 Guía de Activación de Workflows Pendientes

**Fecha:** 2026-03-28  
**Estado:** 4 workflows activos, 3 pendientes de configuración

---

## 🚨 ERROR ACTUAL

**Problema:** Los workflows tienen referencia a credencial `supabase-smarteros` que no existe.

**Solución:** Actualizar manualmente los nodos para usar `Supabase account` (ID: DjZe7OmCMXyKoqxa)

---

## 🎯 PASOS PARA ACTIVAR (10 minutos)

### Paso 1: Abrir Workflow

1. Ir a: https://n8n.smarterbot.cl/workflows
2. Buscar workflow pendiente (ej: "SmarterOS - Respuesta Automática B2B")
3. Click para editar

### Paso 2: Actualizar Credenciales en Nodos

Para cada nodo que usa PostgreSQL/Supabase:

1. Click en el nodo (ej: "Fetch Eventos Pendientes")
2. En **Credential**, cambiar de `supabase-smarteros` a `Supabase account`
3. Click en "Save"

**Nodos a actualizar por workflow:**

#### SmarterOS - Respuesta Automática B2B (5FTYtHeoLEVLrcFT)
- [ ] Fetch Eventos Pendientes → Cambiar a `Supabase account`
- [ ] Actualizar Evento a Respondido → Cambiar a `Supabase account`

#### SmarterOS - MCP Decision Engine (jRWHFYLwR2VxD3pY)
- [ ] Actualizar en Supabase → Cambiar a `Supabase account`

#### SmarterOS - CRON Auto-Actualización (JKsfUHfTJuf4a2z5)
- [ ] Obtener eventos nuevos → Cambiar a `Supabase account`
- [ ] Guardar en Supabase → Cambiar a `Supabase account`

#### SmarterOS - Facturación Electrónica DTE (lKXLlxZNFijhFfSH)
- [ ] Actualizar en Supabase → Cambiar a `Supabase account`

### Paso 3: Activar Workflow

1. Click en toggle **"Inactive"** (esquina superior derecha)
2. Cambiar a **"Active"**
3. Verificar que no haya errores

### Paso 3: Actualizar Workflows

Para cada workflow pendiente:

#### 3.1 MCP Decision Engine

1. Ir a: https://n8n.smarterbot.cl/workflow/jRWHFYLwR2VxD3pY
2. Click en nodo **"Actualizar en Supabase"**
3. En **Credential**, seleccionar `supabase-smarteros`
4. Click en nodo **"Preparar actualización"**
5. Verificar que tenga credencial asignada
6. Click en **"Activate"** (toggle superior derecho)

#### 3.2 CRON Auto-Actualización

1. Ir a: https://n8n.smarterbot.cl/workflow/JKsfUHfTJuf4a2z5
2. Click en nodo **"Obtener eventos nuevos"**
3. En **Credential**, seleccionar `supabase-smarteros`
4. Click en nodo **"Guardar en Supabase"**
5. Verificar credencial
6. Click en **"Activate"**

#### 3.3 Facturación Electrónica DTE

1. Ir a: https://n8n.smarterbot.cl/workflow/lKXLlxZNFijhFfSH
2. Click en nodo **"Actualizar en Supabase"**
3. En **Credential**, seleccionar `supabase-smarteros`
4. Click en **"Activate"**

---

## ✅ Verificación

### Test MCP Decision Engine

```bash
curl -X POST "https://n8n.smarterbot.cl/webhook/mcp-decision" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": {
      "source_box_id": "CHATWOOT-001",
      "territory": "CL-RM",
      "correlation_id": "test-001"
    },
    "payload": {
      "entity": "Message",
      "action": "customer_inquiry",
      "data": {
        "intent": "pricing_request",
        "customer_id": "123",
        "phone": "+56912345678",
        "email": "test@example.com"
      }
    },
    "trust_score": 0.85
  }'
```

**Respuesta esperada:**
```json
{
  "success": true,
  "event_id": "...",
  "decision": {...}
}
```

### Test CRON Auto-Actualización

1. Ir a **Executions** en n8n
2. Filtrar por workflow "CRON Auto-Actualización"
3. Verificar que se ejecute cada 5 minutos

---

## 🔒 Supabase Vault (Recomendado para Producción)

Para producción, usar **Supabase Vault** para almacenar credenciales de forma segura:

### SQL para crear Vault

```sql
-- Conectarse a Supabase → SQL Editor
-- Habilitar extensión
create extension if not exists vault;

-- Guardar credencial de PostgreSQL
select vault.create_secret(
  'db.rjfcmmzjlguiititkmyh.supabase.co',  -- host
  'postgres',                              -- database
  'postgres',                              -- user
  'tu-password-seguro',                    -- password
  '5432'                                   -- port
);
```

### MCP para acceder a Vault

En tu configuración de MCP (`~/.qwen/mcp.json`):

```json
{
  "mcpServers": {
    "supabase-vault": {
      "command": "npx",
      "args": ["-y", "@smarteros/mcp-supabase"],
      "env": {
        "SUPABASE_URL": "https://rjfcmmzjlguiititkmyh.supabase.co",
        "SUPABASE_SERVICE_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZmNtbXpqbGd1aWl0aXRrbXloIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTc5OTczNSwiZXhwIjoyMDc3Mzc1NzM1fQ.euZnn-7AVUMwuVX1ayA9Vpl1sYfkrKbuh4NZIrgRmwg"
      }
    }
  }
}
```

### Tablas requeridas en Supabase

```sql
-- Schema SmarterOS
create schema if not exists smarteros;

-- Tabla de eventos
create table if not exists smarter_events (
  id bigint primary key generated always as identity,
  metadata jsonb,
  payload jsonb,
  trust_score numeric,
  timestamp timestamptz,
  lifecycle text,
  decision jsonb,
  decided_at timestamptz,
  created_at timestamptz default now()
);

-- Tabla de patrones
create table if not exists smarter_patterns (
  id bigint primary key generated always as identity,
  pattern_name text,
  pattern_data jsonb,
  confidence numeric,
  created_at timestamptz default now()
);

-- Índices para rendimiento
create index idx_events_lifecycle on smarter_events(lifecycle);
create index idx_events_timestamp on smarter_events(timestamp desc);
create index idx_patterns_confidence on smarter_patterns(confidence desc);
```

---

## 📞 Soporte

Si hay errores:

1. **Missing credentials:** Verificar que el nodo tenga credencial asignada
2. **Connection timeout:** Verificar que `smarteros-postgres` esté accesible
3. **Authentication failed:** Revisar usuario/password en credencial

### Logs de PostgreSQL

```bash
docker logs smarteros-postgres -f
```

### Logs de n8n

```bash
docker logs n8n-server -f
```

---

## 📄 Checklist Final

- [ ] Credencial PostgreSQL creada en n8n
- [ ] MCP Decision Engine activado
- [ ] CRON Auto-Actualización activado
- [ ] Facturación DTE activado
- [ ] Test de webhooks exitoso
- [ ] Executions sin errores
- [ ] Exportar workflows actualizados a GitHub

---

**Actualizado:** 2026-03-28  
**Próxima revisión:** 2026-04-04
