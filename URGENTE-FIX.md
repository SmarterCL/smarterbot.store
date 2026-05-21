# 🚨 URGENTE: Fix Manual de Credenciales

## Problema

Los workflows fueron importados con referencia a credencial `supabase-smarteros` que **NO existe**.

**Credencial correcta:** `Supabase account` (ID: DjZe7OmCMXyKoqxa)

---

## ✅ Workflows Activos (pero con error de credencial)

Estos workflows están ACTIVADOS pero fallarán al ejecutarse:

### 1. SmarterOS - Respuesta Automática B2B
- **URL:** https://n8n.smarterbot.cl/workflow/5FTYtHeoLEVLrcFT
- **Estado:** ✅ Activado (pero nodos con credencial incorrecta)
- **Nodos a fixear:**
  - [ ] `Fetch Eventos Pendientes` → Cambiar credential a `Supabase account`
  - [ ] `Actualizar Evento a Respondido` → Cambiar credential a `Supabase account`

---

## ⏸️ Workflows Inactivos

### 2. SmarterOS - MCP Decision Engine
- **URL:** https://n8n.smarterbot.cl/workflow/jRWHFYLwR2VxD3pY
- **Nodos a fixear:**
  - [ ] `Actualizar en Supabase` → Cambiar credential a `Supabase account`
- **Luego:** Activar workflow

### 3. SmarterOS - CRON Auto-Actualización
- **URL:** https://n8n.smarterbot.cl/workflow/JKsfUHfTJuf4a2z5
- **Nodos a fixear:**
  - [ ] `Obtener eventos nuevos` → Cambiar credential a `Supabase account`
  - [ ] `Guardar en Supabase` → Cambiar credential a `Supabase account`
- **Luego:** Activar workflow

### 4. SmarterOS - Facturación Electrónica DTE
- **URL:** https://n8n.smarterbot.cl/workflow/lKXLlxZNFijhFfSH
- **Nodos a fixear:**
  - [ ] `Actualizar en Supabase` → Cambiar credential a `Supabase account`
- **Luego:** Activar workflow

---

## 🔧 Pasos para Fix (por cada workflow)

1. **Abrir workflow** (click en URL de arriba)

2. **Para cada nodo listado:**
   - Click en el nodo
   - En dropdown **Credential**, seleccionar `Supabase account`
   - Click en **Save**

3. **Activar workflow:**
   - Toggle en esquina superior derecha
   - Cambiar de **Inactive** a **Active**

4. **Test:**
   - Click en **Execute Workflow** (si es webhook)
   - O esperar trigger (CRON)

---

## ✅ Verificación

Después de fixear:

1. Ir a **Executions**
2. Verificar que las ejecuciones sean **exitosas** (verde)
3. Si hay error rojo, revisar logs del nodo

---

## 📞 Soporte

Si hay errores después de actualizar credenciales:

1. Revisar logs de ejecución en n8n
2. Verificar que Supabase esté accesible:
   ```bash
   curl -I https://rjfcmmzjlguiititkmyh.supabase.co
   ```
3. Checkear que la credencial `Supabase account` funcione:
   - Settings → Credentials → Supabase account → Edit → Test

---

**Actualizado:** 2026-03-28  
**Prioridad:** ALTA
