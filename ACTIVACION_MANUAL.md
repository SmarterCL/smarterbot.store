# 🔧 Guía de Activación de Workflows Pendientes

**Fecha:** 2026-03-28  
**Estado:** 4 workflows activos, 3 pendientes de configuración

---

## 📊 Estado Actual

### ✅ Workflows Activos (4)
- SmarterOS - Ingesta Universal
- SmarterOS - Respuesta Automática B2B
- SmarterOS - Picoclaw Onboarding
- SmarterOS - Email Ingestion (Mailgun)

### ⏸️ Workflows Pendientes (3)
- SmarterOS - MCP Decision Engine
- SmarterOS - CRON Auto-Actualización
- SmarterOS - Facturación Electrónica DTE

**Motivo:** Requieren credencial PostgreSQL configurada en nodos Supabase

---

## 🎯 PASOS PARA ACTIVAR (5 minutos)

### Paso 1: Ir a n8n Settings

```
https://n8n.smarterbot.cl/settings/credentials
```

### Paso 2: Crear Credencial PostgreSQL

1. Click en **"Add Credential"**
2. Buscar **"PostgreSQL"**
3. Completar datos:

| Campo | Valor |
|-------|-------|
| **Host** | `smarteros-postgres` |
| **Database** | `smarteros` |
| **User** | `postgres` |
| **Password** | `postgres` |
| **Port** | `5432` |
| **SSL** | `false` (o `true` si está habilitado) |

4. Click en **"Save"**

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

## 🔒 Supabase Vault (Opcional - Producción)

Para producción, usar Supabase Vault en lugar de credenciales fijas:

### SQL para crear Vault

```sql
-- Habilitar extensión
create extension if not exists vault;

-- Guardar credencial
select vault.create_secret(
  'tu-host.supabase.co',
  'postgres',
  'postgres',
  'password-seguro',
  '5432'
);
```

### MCP para acceder a Vault

```json
{
  "mcpServers": {
    "supabase-vault": {
      "command": "npx",
      "args": ["-y", "@smarteros/mcp-supabase"],
      "env": {
        "SUPABASE_URL": "https://tu-projecto.supabase.co",
        "SUPABASE_SERVICE_KEY": "eyJ...tu-service-key"
      }
    }
  }
}
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
