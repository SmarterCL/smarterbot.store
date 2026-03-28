# 🤖 n8n Workflows - SmarterBot Store

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![n8n Version](https://img.shields.io/badge/n8n-2.13-blue.svg)](https://n8n.io)

Workflows de automatización para SmarterBot Store con **MCP (Model Context Protocol)** habilitado.

---

## 📦 Workflows Disponibles

### 1. 📥 SmarterOS - Ingesta Universal
| Propiedad | Valor |
|-----------|-------|
| **Archivo** | `smarteros_-_ingesta_universal.json` |
| **Webhook** | `/webhook/smarter-ingest` |
| **MCP** | ✅ Habilitado |
| **Descripción** | Normaliza eventos de múltiples fuentes al schema de SmarterOS |

**Fuentes soportadas:**
- Chatwoot (mensajes entrantes)
- Google Maps (scraper de leads)
- Odoo (eventos de partner/venta)
- Mailgun (clicks/respuestas de email)
- Picoclaw (validación SMS)

---

### 2. 🧠 SmarterOS - MCP Decision Engine
| Propiedad | Valor |
|-----------|-------|
| **Archivo** | `smarteros_-_mcp_decision_engine.json` |
| **Webhook** | `/webhook/mcp-decision` |
| **MCP** | ✅ Habilitado |
| **Descripción** | Analiza intención del cliente y decide acción automática |

**Matriz de decisión:**
| Intención | Acción | Tool MCP | Auto-ejecutar |
|-----------|--------|----------|---------------|
| `purchase_urgent` | create_sale | odoo_create_sale_order | ✅ |
| `pricing_request` | send_quote | odoo_create_quotation | ✅ |
| `support` | create_ticket | chatwoot_create_conversation | ❌ |
| `general_inquiry` | nurture | mailgun_send_info | ✅ |

---

### 3. ⏰ SmarterOS - CRON Auto-Actualización
| Propiedad | Valor |
|-----------|-------|
| **Archivo** | `smarteros_-_cron_auto_actualizacion.json` |
| **Trigger** | Cada 5 minutos |
| **MCP** | ✅ Habilitado |
| **Descripción** | Analiza patrones y actualiza prompts MCP |

**Funciones:**
- Consulta eventos nuevos en Supabase
- Detecta patrones de comportamiento
- Actualiza prompts del MCP server
- Envía alertas a Telegram

---

### 4. 📧 SmarterOS - Email Ingestion (Mailgun)
| Propiedad | Valor |
|-----------|-------|
| **Archivo** | `smarteros_-_email_ingestion_mailgun.json` |
| **Webhook** | `/webhook/mailgun` |
| **MCP** | ✅ Habilitado |
| **Descripción** | Procesa eventos de email (clicks, opens, bounces) |

---

### 5. 📱 SmarterOS - Picoclaw Onboarding
| Propiedad | Valor |
|-----------|-------|
| **Archivo** | `smarteros_-_picoclaw_onboarding.json` |
| **MCP** | ✅ Habilitado |
| **Descripción** | Flujo de onboarding y validación de clientes |

---

### 6. 📄 SmarterOS - Facturación Electrónica DTE
| Propiedad | Valor |
|-----------|-------|
| **Archivo** | `smarteros_-_facturacion_electronica_dte.json` |
| **MCP** | ✅ Habilitado |
| **Descripción** | Genera y envía DTE al SII |

---

### 7. 💬 SmarterOS - Respuesta Automática B2B
| Propiedad | Valor |
|-----------|-------|
| **Archivo** | `smarteros_-_respuesta_automatica_b2b.json` |
| **MCP** | ✅ Habilitado |
| **Descripción** | Respuestas automáticas para leads B2B calificadas |

---

## ⚙️ Configuración Requerida

### 1. 🔐 Supabase (Base de Datos)

Los workflows usan **Supabase cloud** como base de datos PostgreSQL.

#### Datos de Conexión

```
Host: db.rjfcmmzjlguiititkmyh.supabase.co
Database: postgres
User: postgres
Port: 5432
SSL: true
```

#### Paso 1: Crear Tablas en Supabase

Ir a **Supabase Dashboard → SQL Editor** y ejecutar:

```sql
-- Habilitar extensión vault
create extension if not exists vault;

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

#### Paso 2: Configurar Credencial en n8n

1. Ir a **n8n → Settings → Credentials**
2. Click **Add Credential** → Buscar **PostgreSQL**
3. Configurar:
   - **Host:** `db.rjfcmmzjlguiititkmyh.supabase.co`
   - **Database:** `postgres`
   - **User:** `postgres`
   - **Password:** *(tu password de Supabase)*
   - **Port:** `5432`
   - **SSL:** `true` ✅
   - **Reject Unauthorized:** `false`
4. Guardar como: `supabase-smarteros`

> ⚠️ **Importante:** El password se obtiene desde Supabase Dashboard → Settings → Database

---

### 2. 📱 Picoclaw (Agente Autónomo)

Picoclaw es el agente para validación de clientes vía SMS/Telegram.

#### Paso 1: Instalar Picoclaw

```bash
cd /root
git clone https://github.com/sipeed/picoclaw.git
cd picoclaw
docker compose --profile gateway up -d
```

#### Paso 2: Configurar `.env`

```bash
# /root/picoclaw/.env
OPENROUTER_API_KEY=sk-or-...
TELEGRAM_BOT_TOKEN=123456:ABC-...
TELEGRAM_CHAT_ID=-1001234567890
SUPABASE_URL=https://rjfcmmzjlguiititkmyh.supabase.co
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

#### Paso 3: Configurar `config.json`

```json
{
  "llm": {
    "provider": "openrouter",
    "model": "meta-llama/llama-3-70b-instruct"
  },
  "telegram": {
    "enabled": true,
    "bot_token": "${TELEGRAM_BOT_TOKEN}",
    "chat_id": "${TELEGRAM_CHAT_ID}"
  },
  "supabase": {
    "url": "${SUPABASE_URL}",
    "key": "${SUPABASE_SERVICE_KEY}"
  },
  "workspace": {
    "path": "/root/.picoclaw/workspace"
  }
}
```

#### Paso 4: Integrar con n8n

En el workflow **Picoclaw Onboarding**:

1. Nodo HTTP Request → Picoclaw API
2. URL: `http://picoclaw-gateway:18790/validate`
3. Headers: `Authorization: Bearer ${PICOLAW_API_KEY}`
4. Body:
```json
{
  "phone": "{{ $json.phone }}",
  "action": "validate_sms"
}
```

---

### 3. 🔗 MCP Server Integration

#### MCP Servers Disponibles

| Server | Propósito | Configuración |
|--------|-----------|---------------|
| `supabase-vault` | Credenciales seguras | `@smarteros/mcp-supabase` |
| `n8n-mcp` | Control de workflows | HTTP endpoint |
| `clerk-mcp` | Autenticación | `@smarteros/mcp-clerk` |
| `docker-mcp` | Gestión de contenedores | `@smarteros/mcp-docker` |

#### Configurar MCP en n8n

1. En n8n, ve a **Settings → MCP**
2. Agrega servidor MCP:
   - **Name:** `supabase-vault`
   - **Type:** `HTTP`
   - **URL:** `http://localhost:4000/mcp`
   - **Headers:** `Authorization: Bearer ${MCP_TOKEN}`

#### Configurar MCP Client (~/.qwen/mcp.json)

```json
{
  "mcpServers": {
    "supabase-vault": {
      "command": "npx",
      "args": ["-y", "@smarteros/mcp-supabase"],
      "env": {
        "SUPABASE_URL": "https://rjfcmmzjlguiititkmyh.supabase.co",
        "SUPABASE_SERVICE_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
      }
    },
    "n8n-mcp": {
      "type": "http",
      "url": "https://n8n.smarterbot.cl/webhook/mcp-server/http",
      "headers": {
        "Authorization": "Bearer <JWT_TOKEN>"
      }
    }
  }
}
```

---

## 📥 Importar Workflow

### Método 1: Desde UI (Recomendado)

1. Ir a **n8n → Workflows → Import**
2. Seleccionar archivo JSON
3. Configurar credenciales requeridas:
   - PostgreSQL/Supabase
   - HTTP Request (si aplica)
4. Activar workflow (toggle en esquina superior derecha)

### Método 2: Desde API

```bash
curl -X POST "https://n8n.smarterbot.cl/api/v1/workflows" \
  -H "X-N8N-API-KEY: tu-api-key" \
  -H "Content-Type: application/json" \
  -d @smarteros_-_ingesta_universal.json
```

### Método 3: Desde CLI

```bash
n8n import:workflow --input=smarteros_-_ingesta_universal.json
n8n activate:workflow --id=<workflow-id>
```

---

## 🔗 URLs de Webhooks

| Workflow | Path | Método |
|----------|------|--------|
| Ingesta Universal | `/webhook/smarter-ingest` | POST |
| MCP Decision Engine | `/webhook/mcp-decision` | POST |
| Email Ingestion | `/webhook/mailgun` | POST |
| Picoclaw Onboarding | `/webhook/picoclaw/onboard` | POST |

**URL completa:** `https://n8n.smarterbot.cl/webhook/<path>`

---

## 🔒 Seguridad

### Credenciales Eliminadas

Estos workflows están publicados **sin credenciales** por seguridad:
- ❌ No incluyen passwords
- ❌ No incluyen API Keys
- ❌ No incluyen tokens de acceso

### Qué debes configurar

1. ✅ Credencial PostgreSQL/Supabase en n8n
2. ✅ Variables de entorno para URLs
3. ✅ Tokens MCP en vault
4. ✅ API Keys de servicios externos (Mailgun, Telegram, etc.)

---

## 🧪 Testing

### Test Ingesta Universal

```bash
curl -X POST "https://n8n.smarterbot.cl/webhook/smarter-ingest" \
  -H "Content-Type: application/json" \
  -d '{
    "source": "chatwoot",
    "message_type": "incoming",
    "content": "Hola, quiero información sobre precios",
    "conversation": {
      "metadata": {
        "territory": "CL-RM"
      }
    }
  }'
```

### Test MCP Decision

```bash
curl -X POST "https://n8n.smarterbot.cl/webhook/mcp-decision" \
  -H "Content-Type: application/json" \
  -d '{
    "metadata": {
      "source_box_id": "CHATWOOT-001",
      "territory": "CL-RM",
      "correlation_id": "test-123"
    },
    "payload": {
      "entity": "Message",
      "action": "customer_inquiry",
      "data": {
        "intent": "pricing_request",
        "customer_id": "12345",
        "phone": "+56912345678",
        "email": "cliente@example.com"
      }
    },
    "trust_score": 0.85
  }'
```

---

## 📊 Monitorización

### Ver ejecuciones en n8n

1. Ir a **n8n → Executions**
2. Filtrar por workflow
3. Ver logs y errores

### Logs de MCP

```bash
# Ver logs del MCP server
docker logs mcp-server -f

# Ver logs de Supabase
docker logs supabase-db -f
```

---

## 🚀 Producción

### Checklist Pre-Producción

- [ ] Credencial Supabase configurada en n8n
- [ ] Webhooks probados con datos reales
- [ ] MCP servers operativos
- [ ] Supabase Vault configurado
- [ ] Picoclaw validando correctamente
- [ ] Alertas de Telegram configuradas
- [ ] Backups de workflows exportados

### URLs de Producción

| Servicio | URL |
|----------|-----|
| n8n | https://n8n.smarterbot.cl |
| API | https://api.smarterbot.cl |
| Supabase | https://rjfcmmzjlguiititkmyh.supabase.co |

---

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para detalles.

---

## 🤝 Contribuir

1. Fork el repositorio
2. Crea rama de feature (`git checkout -b feature/amazing-feature`)
3. Commit cambios (`git commit -m 'Add amazing feature'`)
4. Push a rama (`git push origin feature/amazing-feature`)
5. Abre Pull Request

---

## 📞 Soporte

- **Documentación:** https://docs.smarterbot.cl
- **Issues:** https://github.com/SmarterCL/smarterbot.store/issues
- **Email:** soporte@smarterbot.cl

---

**Hecho con ❤️ por SmarterCL**
