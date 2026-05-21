#!/bin/bash

# 🚀 SmarterBOT.store - Push to GitHub
# Repository: https://github.com/SmarterCL

echo "╔════════════════════════════════════════════════════════════╗"
echo "║                                                            ║"
echo "║       🚀 PUSH TO GITHUB - SmarterBOT.store 🚀             ║"
echo "║                                                            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Check if repository exists
echo "⚠️  IMPORTANTE: Primero debes crear el repositorio en GitHub"
echo ""
echo "📋 PASOS PARA CREAR EL REPOSITORIO:"
echo "───────────────────────────────────────────────────────────"
echo ""
echo "1. Ve a: https://github.com/SmarterCL"
echo ""
echo "2. Click en el botón verde 'New' o '+ New repository'"
echo ""
echo "3. Configuración del repositorio:"
echo "   ├── Repository name: smarterbot-store"
echo "   ├── Description: SmarterBOT.store - Automation Workflows & Business Solutions"
echo "   ├── Visibility: Public (o Private si prefieres)"
echo "   └── ⚠️  NO marques 'Initialize this repository with:'"
echo "       ├── ❌ NO añadas README"
echo "       ├── ❌ NO añadas .gitignore"
echo "       └── ❌ NO añadas license"
echo ""
echo "4. Click 'Create repository'"
echo ""
echo "───────────────────────────────────────────────────────────"
echo ""
read -p "¿Ya creaste el repositorio? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "Por favor crea el repositorio primero y vuelve a ejecutar este script."
    echo ""
    exit 1
fi

echo ""
echo "✅ Perfecto! Procediendo con el push..."
echo ""

# Show current status
echo "📊 Estado actual del repositorio local:"
echo "───────────────────────────────────────────────────────────"
git log --oneline -3
echo ""
git status
echo ""

# Push to GitHub
echo "🚀 Haciendo push a GitHub..."
echo "───────────────────────────────────────────────────────────"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "╔════════════════════════════════════════════════════════════╗"
    echo "║                                                            ║"
    echo "║                  ✅ PUSH EXITOSO! ✅                       ║"
    echo "║                                                            ║"
    echo "╚════════════════════════════════════════════════════════════╝"
    echo ""
    echo "🎉 Tu código está ahora en GitHub!"
    echo ""
    echo "📍 Repositorio: https://github.com/SmarterCL/smarterbot-store"
    echo ""
    echo "📋 PRÓXIMOS PASOS:"
    echo "───────────────────────────────────────────────────────────"
    echo ""
    echo "1. 🐳 CONFIGURAR DOKPLOY"
    echo "   • Accede a tu panel de Dokploy"
    echo "   • Crea nueva aplicación"
    echo "   • Conecta el repositorio: https://github.com/SmarterCL/smarterbot-store"
    echo "   • Branch: main"
    echo "   • Dockerfile: ./Dockerfile.caddy (recomendado para Dokploy)"
    echo "   • Deploy!"
    echo ""
    echo "2. 🌐 CONFIGURAR DOMINIO (Hostinger)"
    echo "   • Login a Hostinger"
    echo "   • DNS de smarterbot.store"
    echo "   • Añade registro A → IP de Dokploy"
    echo ""
    echo "3. 🔐 HABILITAR SSL"
    echo "   • En Dokploy: Domains → smarterbot.store"
    echo "   • Enable Auto SSL"
    echo ""
    echo "4. ✅ VERIFICAR"
    echo "   • Visita: https://smarterbot.store"
    echo ""
    echo "📚 Para más detalles, lee: DEPLOYMENT.md"
    echo ""
else
    echo ""
    echo "❌ Error al hacer push"
    echo ""
    echo "Posibles soluciones:"
    echo "  1. Verifica que el repositorio existe: https://github.com/SmarterCL/smarterbot-store"
    echo "  2. Verifica tus credenciales de GitHub"
    echo "  3. Si es privado, configura SSH keys o Personal Access Token"
    echo ""
fi
