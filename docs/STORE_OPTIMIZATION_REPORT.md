# Smarterbot.store Optimization Report

## Date

2026-05-01

## Executive Summary

The repo already contains the seeds of the final architecture, but they are not yet unified into a single deployable control plane.

Current state:

- commercial website exists
- MCP FastAPI engine exists
- MCP gateway proxy exists
- systemd service definition exists
- compose runtime does not yet include MCP/API components as first-class production services

Main architectural issue:

There is no single authoritative production control plane. The repo currently mixes:

- website runtime
- MCP execution engine
- multi-tenant MCP proxy
- local/operator-oriented assumptions

That creates duplication and unclear responsibilities.

## Findings

### 1. Domain strategy is inconsistent

The requested target is `.store` only, but the repo and surrounding ecosystem still imply mixed-domain history.

Impact:

- branding drift
- infra drift
- link drift
- deployment ambiguity

### 2. MCP implementation is duplicated

Two separate MCP-related implementations exist:

- `api/mcp_server.py`
- `mcp-gateway/index.mjs`

Impact:

- overlapping responsibility
- higher maintenance cost
- unclear production authority

### 3. Compose does not represent the intended stack

The current `docker-compose.yml` only runs the frontend web container.

Impact:

- MCP is not part of the production runtime model
- API is not modeled as a service
- ops and deploy docs can drift from reality

### 4. Gateway secrets are embedded in source

The current gateway includes bearer tokens inline in code.

Impact:

- direct credential exposure risk
- difficult rotation
- unsafe repository state

### 5. Kotlin CRM integration surface is not formalized

The intended operating model requires Kotlin to use backend API only, but the repo does not yet clearly define that contract.

Impact:

- risk of accidental coupling to MCP
- unstable mobile/CRM integration path

## Repo Assets Worth Keeping

### Keep and evolve

- `api/mcp_server.py`
  - best candidate to become central MCP authority
- `api/mcp.service`
  - useful production unit baseline
- `mcp-gateway/`
  - useful only if reduced to a controlled adapter role
- `docker-compose.yml`
  - useful as a starting point, but incomplete

### Refactor aggressively

- hardcoded provider proxy logic
- mixed docs that imply multiple production domains
- deploy scripts that do not align with the target runtime

## Recommended Consolidation Model

### Final responsibility split

- `apps/web`
  - marketing/commercial frontend
- `apps/api`
  - public backend contract
- `apps/mcp`
  - internal control plane
- `packages/specs`
  - imported/adapted specs from `Smarter-SPECS`
- `packages/runtime-validator`
  - imported/adapted checks from `smarteros-runtime-validator`

### Final runtime split

- `smarterbot-web`
- `smarterbot-api`
- `smarterbot-mcp`
- `postgres`
- `redis`
- `n8n`
- `cloudflared`

## Migration Backlog

### P0

- remove hardcoded tokens from `mcp-gateway`
- define `.store` as only active domain
- choose one MCP implementation as authority
- model API and MCP inside deploy runtime

### P1

- create normalized repo structure
- migrate `api.smarterbot.store` logic into `apps/api`
- define CRM-facing endpoints
- add validator entrypoints

### P2

- unify deployment scripts
- add SSH fallback wrappers
- add runbooks and incident flows
- add smoke tests and health checks

## Risks

- touching `api/` and `tenants/` blindly could overwrite in-progress local work
- migrating structure without freezing domain policy will create churn
- preserving both MCP implementations for too long will keep authority ambiguous

## Recommended Next Implementation Step

Implement the repo skeleton first, then migrate code into it.

Order:

1. `apps/web`
2. `apps/api`
3. `apps/mcp`
4. `packages/specs`
5. `packages/runtime-validator`
6. `ops/docker`
7. `ops/systemd`

## Decision

`smarterbot.store` should become the only active deployable platform.

`Smarter-SPECS`, `smarteros-runtime-validator`, and `api.smarterbot.store` should be treated as inputs to consolidate into this repo, not as permanent parallel production systems.
