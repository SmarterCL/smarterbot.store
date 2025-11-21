#!/bin/bash

# 🚀 Guía Rápida de Deployment - SmarterBOT.store

cat << 'EOF'

╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║          🚀 SmarterBOT.store - Deployment Guide 🚀          ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

📋 PASO 1: Crear Repositorio en GitHub
───────────────────────────────────────────────────────────────

1. Ve a: https://github.com/new
2. Nombre: smarterbot-store
3. Descripción: "SmarterBOT.store - Automation Workflows & Business Solutions"
4. Visibilidad: Public (o Private si prefieres)
5. NO inicialices con README (ya lo tenemos)
6. Click "Create repository"


📤 PASO 2: Push del Código
───────────────────────────────────────────────────────────────

Copia y ejecuta estos comandos en la terminal:

# Configura tu nombre y email de Git (si no lo has hecho)
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Cambia 'master' a 'main' (estándar de GitHub)
cd /home/smarter/smarterbot-store
git branch -M main

# Añade el repositorio remoto (reemplaza con TU URL)
git remote add origin https://github.com/TU_USUARIO/smarterbot-store.git

# Haz push del código
git push -u origin main


🐳 PASO 3: Configurar Dokploy
───────────────────────────────────────────────────────────────

1. Accede a tu panel de Dokploy
   URL: https://tu-dokploy-instance.com

2. Crea Nueva Aplicación:
   - Click en "New Application" o "Create Project"
   - Nombre: smarterbot-store
   
3. Configuración de Repositorio:
   - Fuente: Git Repository
   - URL: https://github.com/TU_USUARIO/smarterbot-store.git
   - Branch: main
   - Si es privado: Añade SSH key o token

4. Configuración de Build:
   - Build Method: Dockerfile
   - Dockerfile Path: ./Dockerfile
   - Build Context: . (raíz)
   
5. Configuración de Puerto:
   - Container Port: 80
   - Public Port: 80 (auto)

6. Variables de Entorno (opcional):
   NODE_ENV=production

7. Click "Create" o "Deploy"


🌐 PASO 4: Configurar Dominio en Hostinger
───────────────────────────────────────────────────────────────

1. Login a Hostinger (https://hostinger.com)

2. Ve a: Dominios → Gestionar → smarterbot.store

3. Click en "DNS / Nameservers"

4. Añade Registro A:
   ┌──────────────────────────────────────┐
   │ Tipo:      A                         │
   │ Nombre:    @ (o www)                 │
   │ Apunta a:  [IP_DE_TU_SERVIDOR_DOKPLOY]│
   │ TTL:       14400                     │
   └──────────────────────────────────────┘

5. Guarda cambios

6. ESPERA: La propagación DNS puede tomar 5-60 minutos


🔐 PASO 5: Configurar SSL en Dokploy
───────────────────────────────────────────────────────────────

1. En Dokploy, ve a tu aplicación

2. Sección "Domains" o "SSL":
   - Añade dominio: smarterbot.store
   - Añade también: www.smarterbot.store
   
3. Habilita "Auto SSL" (Let's Encrypt)

4. Click "Generate" o "Enable"

5. Espera 2-5 minutos para la generación


✅ PASO 6: Verificar Deployment
───────────────────────────────────────────────────────────────

# Verifica que el sitio esté accesible:
curl -I https://smarterbot.store

# O abre en navegador:
https://smarterbot.store


🔄 PASO 7: Auto-Deployment (Opcional pero Recomendado)
───────────────────────────────────────────────────────────────

1. En Dokploy, ve a Settings → Webhooks

2. Copia la URL del webhook

3. Ve a GitHub: 
   Tu repo → Settings → Webhooks → Add webhook

4. Configuración:
   - Payload URL: [URL del webhook de Dokploy]
   - Content type: application/json
   - Events: Just the push event
   - Active: ✓

5. Save webhook

Ahora cada git push activará un deployment automático! 🎉


🐛 TROUBLESHOOTING
───────────────────────────────────────────────────────────────

Problema: Build falla en Dokploy
Solución: 
  - Revisa los logs en Dokploy
  - Verifica que Dockerfile esté en la raíz
  - Prueba build local: docker build -t test .

Problema: Sitio no accesible
Solución:
  - Verifica DNS: dig smarterbot.store
  - Comprueba que el container esté running en Dokploy
  - Revisa logs de Nginx en Dokploy

Problema: SSL no funciona
Solución:
  - Espera 5-10 minutos
  - Verifica que DNS apunte correctamente
  - Asegúrate que puertos 80 y 443 estén abiertos
  - Intenta regenerar el certificado


📝 COMANDOS ÚTILES
───────────────────────────────────────────────────────────────

# Ver status de Git
git status

# Hacer cambios y deploy
git add .
git commit -m "tu mensaje"
git push origin main

# Probar Docker localmente
docker build -t smarterbot-test .
docker run -p 8080:80 smarterbot-test
# Visita: http://localhost:8080

# Ver logs de Docker
docker logs [container_id]


🎯 CHECKLIST FINAL
───────────────────────────────────────────────────────────────

Antes de considerar el deployment completo:

□ Código en GitHub
□ Dokploy aplicación creada
□ Build exitoso en Dokploy
□ Container running
□ DNS configurado en Hostinger
□ Dominio apunta a servidor Dokploy
□ SSL certificado generado
□ Sitio accesible por HTTPS
□ Todas las páginas cargan
□ Responsive design funciona
□ React Router funciona (no 404 en refresh)
□ Webhook configurado (opcional)


🎉 ¡LISTO!
───────────────────────────────────────────────────────────────

Tu SmarterBOT.store debería estar LIVE en:

    🌐 https://smarterbot.store

Si tienes problemas, consulta DEPLOYMENT.md para más detalles.

Documentación completa:
  - README.md          → Guía general del proyecto
  - DEPLOYMENT.md      → Deployment paso a paso
  - PROJECT_SUMMARY.md → Resumen del proyecto

¡Buena suerte con tu deployment! 🚀

EOF
