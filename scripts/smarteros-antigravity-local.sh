#!/bin/zsh
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
TUNNEL_SCRIPT="/Users/mac/.agents/start-smarteros-vps-tunnel.sh"
SERVER_SCRIPT="$REPO_ROOT/scripts/smarteros-mcp-server.mjs"

if [[ ! -x "$TUNNEL_SCRIPT" ]]; then
  echo "Missing tunnel script: $TUNNEL_SCRIPT" >&2
  exit 1
fi

if [[ ! -f "$SERVER_SCRIPT" ]]; then
  echo "Missing MCP server script: $SERVER_SCRIPT" >&2
  exit 1
fi

"$TUNNEL_SCRIPT" >/dev/null 2>&1 || true

cd "$REPO_ROOT"

export SMARTER_TENANTS_FILE="$REPO_ROOT/mcp-gateway/tenants.json"
export SMARTER_TENANTS_DIR="$REPO_ROOT/tenants"
export SMARTER_WORKFLOWS_DIR="$REPO_ROOT"
export SMARTER_MCP_ENGINE_URL="${SMARTER_MCP_ENGINE_URL:-http://127.0.0.1:33005/mcp/execute}"
export SMARTER_MCP_ENGINE_HOST_HEADER="${SMARTER_MCP_ENGINE_HOST_HEADER:-api.smarterbot.store}"
export SMARTER_MCP_ENGINE_TIMEOUT_MS="${SMARTER_MCP_ENGINE_TIMEOUT_MS:-10000}"
export SMARTER_MCP_TENANT="${SMARTER_MCP_TENANT:-default}"

exec node "$SERVER_SCRIPT"
