# n8n Workflows - SmarterBot Store

Workflows de automatización para SmarterBot Store.

## 📦 Workflows Disponibles

### 1. Ingesta Universal
- **Archivo:** `smarteros_ingesta_universal.json`
- **Webhook:** `/webhook/smarter-ingest`
- **Descripción:** Normaliza eventos de múltiples fuentes (Chatwoot, Odoo, Mailgun, Picoclaw) al schema de SmarterOS

### 2. Respuesta Automática B2B
- **Archivo:** `smarteros_respuesta_automatica_b2b.json`
- **Descripción:** Respuestas automáticas para leads B2B

### 3. Picoclaw Onboarding
- **Archivo:** `smarteros_picoclaw_onboarding.json`
- **Descripción:** Flujo de onboarding de clientes vía Picoclaw

### 4. Email Ingestion (Mailgun)
- **Archivo:** `smarteros_email_ingestion_mailgun.json`
- **Descripción:** Procesa eventos de email desde Mailgun

## ⚙️ Configuración Requerida

### 1. PostgreSQL/Supabase
Los workflows requieren una credencial de PostgreSQL configurada:
- Host: tu-host.supabase.co
- Puerto: 5432
- Database: postgres
- User: postgres
- Password: ***

### 2. URLs de Webhooks
Actualizar las URLs según el entorno:
- Producción: `https://n8n.smarterbot.cl/webhook/...`
- Desarrollo: `http://localhost:5678/webhook/...`

### 3. Integraciones Opcionales
- Mailgun (para email ingestion)
- Picoclaw (para validación SMS)
- Odoo (para sincronización)

## 📥 Importar Workflow

1. Ir a n8n → Workflows → Import
2. Seleccionar archivo JSON
3. Configurar credenciales requeridas
4. Activar workflow

## 🔗 MCP Integration

Estos workflows están configurados con `availableInMCP: true` para ser ejecutables vía MCP.

## 📄 Licencia

MIT - SmarterCL
