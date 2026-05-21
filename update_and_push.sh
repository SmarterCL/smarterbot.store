#!/bin/bash

# Script para hacer push de cambios al repositorio GitHub desde un submódulo

echo "🚀 Iniciando proceso para hacer push al repositorio GitHub..."
echo ""

# Verificar si estamos en el directorio correcto
if [ ! -f ".git" ] || [ "$(cat .git | grep 'gitdir:')" ]; then
    echo "⚠️  Este directorio está configurado como submódulo"
    echo ""
fi

# Crear backup de los cambios locales
echo "📦 Creando backup de los cambios locales..."
mkdir -p ~/smarterbot_store_backup_$(date +%Y%m%d_%H%M%S)
cp -r .[^.]* * ~/smarterbot_store_backup_$(date +%Y%m%d_%H%M%S)/ 2>/dev/null
echo "✅ Backup creado en: ~/smarterbot_store_backup_$(date +%Y%m%d_%H%M%S)"
echo ""

# Ir al directorio padre
cd ..

# Eliminar el directorio del submódulo
echo "🗑️  Eliminando directorio del submódulo..."
rm -rf smarterbot.store
echo ""

# Clonar el repositorio directamente desde GitHub
echo "📥 Clonando el repositorio desde GitHub..."
git clone https://github.com/SmarterCL/smarterbot.store.git
echo ""

# Entrar al directorio clonado
cd smarterbot.store

# Copiar los cambios desde el backup
echo "🔄 Copiando cambios locales al repositorio clonado..."
cp -r ~/smarterbot_store_backup_*/.[^.]* ~/smarterbot_store_backup_*/[^.]* ./ 2>/dev/null

# Mostrar estado actual
echo "📊 Estado actual del repositorio:"
git status
echo ""

# Agregar cambios
echo "📝 Agregando cambios..."
git add .
echo ""

# Verificar si hay cambios para hacer commit
if [[ -n $(git status --porcelain) ]]; then
    echo "💾 Haciendo commit de los cambios locales..."
    git commit -m "Actualización de cambios locales"
    echo ""
    
    echo "📤 Haciendo push al repositorio remoto..."
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "╔════════════════════════════════════════════════════════════╗"
        echo "║                                                            ║"
        echo "║              ✅ PUSH EXITOSO AL REPOSITORIO! ✅            ║"
        echo "║                                                            ║"
        echo "╚════════════════════════════════════════════════════════════╝"
        echo ""
        echo "🎉 Tus cambios están ahora en el repositorio GitHub:"
        echo "📍 https://github.com/SmarterCL/smarterbot.store"
        echo ""
        
        # Limpiar backups después de éxito
        rm -rf ~/smarterbot_store_backup_*/
        echo "🧹 Backups eliminados"
    else
        echo ""
        echo "❌ Error al hacer push"
        echo ""
        echo "Puede que necesites configurar tus credenciales de GitHub o verificar el estado del repositorio"
        echo "Manteniendo los backups en: ~/smarterbot_store_backup_*/"
    fi
else
    echo "✅ No hay cambios nuevos para hacer commit"
    echo ""
    echo "🎉 El repositorio ha sido actualizado desde GitHub"
    echo "📍 https://github.com/SmarterCL/smarterbot.store"
    echo ""
    
    # Limpiar backups
    rm -rf ~/smarterbot_store_backup_*/
    echo "🧹 Backups eliminados"
fi