# Smarterbot.store Consolidation Plan

## Objective

Consolidate SmarterOS commercial runtime, API, and MCP control plane under `smarterbot.store` as the only active domain and deployment target.

This plan assumes:

- `smarterbot.store` is the operational mono-repo
- `.cl` domains are deprecated and removed from future architecture
- `Smarter-SPECS` becomes the contract source
- `smarteros-runtime-validator` becomes the validation suite
- `api.smarterbot.store` is absorbed as an internal app/module, not a separate platform

## Target Architecture

```text
smarterbot.store
├── apps/
│   ├── web/                  # Commercial frontend
│   ├── api/                  # Public backend for CRM/mobile/web
│   └── mcp/                  # Central MCP control plane
├── packages/
│   ├── specs/                # Imported/adapted contracts from Smarter-SPECS
│   └── runtime-validator/    # Imported/adapted checks from smarteros-runtime-validator
├── ops/
│   ├── docker/               # Compose, images, deploy manifests
│   ├── systemd/              # VPS services
│   └── scripts/              # restart/status/logs helpers
└── docs/
    ├── architecture/
    ├── migration/
    └── operations/
```

## Operating Model

### Control plane

`smarterbot-mcp` on VPS is the only critical MCP server.

Responsibilities:

- service health
- service logs
- service restart
- n8n workflow execution
- tunnel status
- CRM operation hooks

### Client plane

Mac, Codex, and other operator tools are MCP clients only.

They must not be part of the critical production path.

### Application plane

Kotlin CRM and external clients call the backend API only.

They must not talk to MCP directly.

## Canonical Flow

```text
Kotlin CRM / Web / Mobile
        ↓
smarterbot-api
        ↓
smarterbot-mcp
        ↓
n8n / postgres / redis / cloudflared / internal services
```

Operator flow:

```text
Codex / Mac
    ↓
MCP client config
    ↓
smarterbot-mcp on VPS
    ↓
ops scripts / docker / systemd
```

## Repository Decisions

### 1. Domain policy

- Keep only `.store`
- Remove `.cl` from docs, env vars, deployment targets, and routes
- Redirect or sunset old `.cl` assets outside this repo as an infrastructure task

### 2. Repo policy

- `smarterbot.store` is the deployable repo
- `Smarter-SPECS` is upstream reference material for contracts
- `smarteros-runtime-validator` is upstream reference material for runtime validation
- `api.smarterbot.store` functionality moves into `apps/api`

### 3. MCP policy

- Keep one MCP implementation as authority
- Remove duplicated MCP roles over time
- Local MCPs like Pencil stay optional and non-critical

## Service Layout

Production runtime should converge on:

- `smarterbot-web`
- `smarterbot-api`
- `smarterbot-mcp`
- `postgres`
- `redis`
- `n8n`
- `cloudflared` or reverse proxy

Optional adjuncts:

- `runtime-validator`
- observability stack
- tenant import/export jobs

## Phase Plan

### Phase 0: Freeze and inventory

- Stop adding new `.cl` references
- Inventory all existing `.store` and `.cl` URLs
- Inventory all MCP implementations in the repo
- Inventory all VPS services and ports

Deliverables:

- domain inventory
- service inventory
- MCP inventory

### Phase 1: Naming and structure

- Create `apps/`, `packages/`, and `ops/` structure
- Move current website into `apps/web`
- Move FastAPI MCP engine into `apps/mcp` or split it cleanly from backend responsibilities
- Define `apps/api` as the only public integration layer

Deliverables:

- normalized tree
- migration mapping from old paths to new paths

### Phase 2: MCP centralization

- Choose one MCP authority based on the current FastAPI engine
- Remove secrets from source code
- Move all provider tokens to env/secret storage
- Replace ad hoc proxy behavior with explicit tools:
  - `health`
  - `docker_status`
  - `logs`
  - `restart_service`
  - `n8n_workflow`
  - `tunnel_status`

Deliverables:

- `apps/mcp`
- MCP tool contract
- env template

### Phase 3: API absorption

- Pull `api.smarterbot.store` behavior into `apps/api`
- Expose stable endpoints for Kotlin CRM:
  - `POST /api/workflows/execute`
  - `GET /api/ops/health`
  - `GET /api/ops/status`
  - `POST /api/crm/hooks/...`
- Keep MCP internal behind API

Deliverables:

- public API contract
- CRM integration guide

### Phase 4: Runtime validation

- Import or port validator checks from `smarteros-runtime-validator`
- Validate:
  - compose integrity
  - service health endpoints
  - port collisions
  - required env vars
  - MCP availability
  - n8n reachability

Deliverables:

- `packages/runtime-validator`
- predeploy and postdeploy checks

### Phase 5: VPS operations hardening

- Standardize `ops/scripts`:
  - `smarteros-status`
  - `smarteros-logs`
  - `smarteros-restart`
  - `smarteros-deploy`
- Run them through MCP or SSH fallback
- Keep SSH as break-glass path only

Deliverables:

- scripts
- systemd units
- runbooks

### Phase 6: `.cl` retirement

- Remove `.cl` references from:
  - docs
  - frontend links
  - deployment scripts
  - env files
  - reverse proxy config
- Leave explicit redirect plan as infra action

Deliverables:

- no `.cl` references in active codepaths

## Immediate Technical Priorities

1. Stop treating local MCPs as production dependencies
2. Make `smarterbot-mcp` part of the deployable runtime
3. Remove hardcoded secrets from `mcp-gateway`
4. Define `apps/api` as the only CRM integration surface
5. Expand compose to match the real production stack

## Non-Goals

- Direct Kotlin CRM to MCP communication
- Multiple critical MCP servers with overlapping authority
- Dynamic-port local tooling in production workflows
- Continued split between `.cl` and `.store`

## Success Criteria

- `smarterbot.store` is the only active domain in code and docs
- one deployable repo contains web, api, and mcp
- one MCP server controls operations on VPS
- Kotlin CRM uses backend API only
- runtime validator blocks broken deploys before release
