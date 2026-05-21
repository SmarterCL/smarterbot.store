#!/bin/bash

# Script para convertir temporalmente el submódulo en un repositorio independiente y hacer push

echo "Convirtiendo submódulo en repositorio independiente temporalmente..."

# Guardar el archivo .git actual
mv .git .git_backup

# Inicializar nuevo repositorio git
git init

# Agregar el origen remoto del repositorio GitHub
git remote add origin https://github.com/SmarterCL/smarterbot.store.git

# Restaurar el estado actual
git add .

# Hacer commit de los cambios (si los hay)
if [[ -n $(git status --porcelain) ]]; then
    echo "Haciendo commit de los cambios locales..."
    git add .
    git commit -m "Actualización desde submódulo"
else
    echo "No hay cambios para hacer commit."
fi

# Hacer push al repositorio remoto
echo "Haciendo push al repositorio remoto..."
git push -u origin main

# Devolver el estado original (restaurar como submódulo)
rm -rf .git
mv .git_backup .git

echo "Operación completada. Repositorio restaurado como submódulo."