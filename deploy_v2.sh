#!/bin/bash

# =================================================================
# 🚀 SMARTEROS SAAS MULTI-TENANT ONBOARDING (V2)
# =================================================================
# Versión: 2.3.0
# Uso: ./deploy_v2.sh create-tenant <nombre_empresa>
# =================================================================

set -e

# Configuración
BASE_DIR=$(pwd)
TENANTS_FILE="$BASE_DIR/mcp-gateway/tenants.json"
SQL_FILE="$BASE_DIR/sql/PRODUCTION_SCHEMA.sql"

# Colores
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

function show_help() {
    echo -e "${BLUE}SmarterOS SaaS CLI${NC}"
    echo "Uso: $0 create-tenant <nombre>"
}

function create_tenant() {
    local NAME=$1
    if [ -z "$NAME" ]; then
        echo "Error: Debes especificar un nombre para el tenant."
        exit 1
    fi

    echo -e "${YELLOW}🛠️  Creando nuevo tenant: $NAME...${NC}"

    # 1. Generar API Key única
    local API_KEY=$(openssl rand -hex 16)
    
    # 2. Registrar en tenants.json
    if command -v jq &> /dev/null; then
        jq --arg key "$API_KEY" --arg val "$NAME" '. + {($key): $val}' "$TENANTS_FILE" > "${TENANTS_FILE}.tmp" && mv "${TENANTS_FILE}.tmp" "$TENANTS_FILE"
    else
        # Fallback rústico más seguro (evita problemas de sed -i en Mac/Linux)
        grep -v "}" "$TENANTS_FILE" > "${TENANTS_FILE}.tmp"
        echo "  , \"$API_KEY\": \"$NAME\"" >> "${TENANTS_FILE}.tmp"
        echo "}" >> "${TENANTS_FILE}.tmp"
        mv "${TENANTS_FILE}.tmp" "$TENANTS_FILE"
    fi

    # 3. Crear estructura de carpetas local
    mkdir -p "tenants/$NAME"
    echo "Tenant $NAME initialized at $(date)" > "tenants/$NAME/readme.txt"

    # 4. Seed inicial en Supabase (Opcional, requiere psql configurado)
    echo -e "${YELLOW}📝 Preparando seed para Supabase...${NC}"
    # Aquí podrías ejecutar un INSERT para inicializar la memoria del agente
    # por ejemplo: INSERT INTO agent_memory (tenant_id, key, value) VALUES ('$NAME', 'onboarding', '{"status": "ready"}');

    # 5. Resumen Ejecutivo
    echo -e "\n${GREEN}✅ TENANT CREADO EXITOSAMENTE${NC}"
    echo "--------------------------------------------------"
    echo -e "Nombre:      ${BLUE}$NAME${NC}"
    echo -e "API Key:     ${GREEN}$API_KEY${NC}"
    echo -e "Endpoint:    https://api.smarterbot.store/mcp/execute"
    echo -e "Header:      X-Tenant-ID: $NAME"
    echo "--------------------------------------------------"
    echo -e "\n${YELLOW}Próximo paso:${NC} Pasa la API Key al cliente y configura su WhatsApp en Chatwoot."
}

# Lógica de comandos
case "$1" in
    create-tenant)
        create_tenant "$2"
        ;;
    *)
        show_help
        ;;
esac
