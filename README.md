# Smarter Funnel OS

Landing, login y dashboard base para una plataforma operacional de ventas conversacionales por WhatsApp.

## Stack

- Next.js 16
- React 19
- Bootstrap 5
- Supabase Auth (`@supabase/supabase-js` + `@supabase/ssr`)
- Dashboard con fallback entre datos reales de Supabase y datos mock

## Rutas principales

- `/` landing comercial
- `/login` acceso con Google vía Supabase
- `/auth/callback` callback OAuth
- `/dashboard` panel operativo
- `/register` demo + acceso
- `/contact`, `/support`, `/terminos`, `/privacidad`

## Variables de entorno

Base mínima:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Para datos reales del dashboard desde el servidor:

```env
SUPABASE_SERVICE_ROLE_KEY=
```

Opcionales:

```env
NEXT_PUBLIC_CLAW_API_URL=https://n8n.smarterbot.store
NEXT_PUBLIC_CHATWOOT_BASE_URL=
NEXT_PUBLIC_ODOO_BASE_URL=
NEXT_PUBLIC_TELEGRAM_BOT_NAME=SmarterChat_bot
NEXT_PUBLIC_FB_APP_ID=
NEXT_PUBLIC_FB_API_VERSION=v21.0
```

## Desarrollo

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm exec tsc --noEmit
pnpm build
```

## Deploy en Vercel

1. Importa el repo en Vercel.
2. Framework preset: `Next.js`.
3. Define las variables de entorno listadas arriba.
4. Si quieres proteger `/dashboard` con sesión real, necesitas al menos:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
5. Si quieres que el dashboard lea métricas reales del esquema `mcp_events` / `tool_logs` / `agent_memory`, agrega también:
   - `SUPABASE_SERVICE_ROLE_KEY`
6. Ejecuta deploy.

## Nota sobre datos reales

El dashboard intenta leer estas fuentes si existe `SUPABASE_SERVICE_ROLE_KEY`:

- `mcp_events`
- `tool_logs`
- `agent_memory`
- `v_tenant_health`

Si no hay acceso server-side o las tablas no responden, cae automáticamente a datos mock sin romper la UI.
