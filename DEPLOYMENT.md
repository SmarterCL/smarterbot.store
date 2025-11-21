# 🚀 Deployment Guide for SmarterBOT.store on Dokploy

## 📋 Prerequisites

- [x] Project built and committed to Git
- [ ] Dokploy instance running
- [ ] Domain configured in Hostinger (pointing to Dokploy server)
- [ ] Git repository (GitHub/GitLab/Gitea)

## 🔧 Step-by-Step Deployment

### 1️⃣ Create Git Repository

If you haven't already created a remote repository:

```bash
# Create a new repository on GitHub/GitLab
# Then add the remote:

git remote add origin https://github.com/YOUR_USERNAME/smarterbot-store.git
# OR for GitLab:
# git remote add origin https://gitlab.com/YOUR_USERNAME/smarterbot-store.git

# Push the code
git branch -M main
git push -u origin main
```

### 2️⃣ Configure Dokploy

1. **Access Dokploy Dashboard**
   - Navigate to your Dokploy instance (e.g., https://dokploy.yourdomain.com)
   - Log in with your credentials

2. **Create New Application**
   - Click "Create Application" or "New Project"
   - Choose "Git Repository" as source
   - Name: `smarterbot-store`

3. **Connect Repository**
   - Repository URL: `https://github.com/YOUR_USERNAME/smarterbot-store.git`
   - Branch: `main`
   - Add SSH key or Personal Access Token if private repo

4. **Build Configuration**
   - Build Type: **Docker**
   - Dockerfile Path: `./Dockerfile`
   - Docker Compose: `./docker-compose.yml` (optional)
   - Build Context: `.` (root)

5. **Environment Variables** (if needed)
   ```env
   NODE_ENV=production
   VITE_API_URL=https://api.smarterbot.store
   ```

6. **Port Configuration**
   - Container Port: `80`
   - Public Port: `80` (or auto-assign)

### 3️⃣ Domain Configuration in Hostinger

1. **DNS Settings**
   - Log in to Hostinger
   - Go to Domains → Manage
   - Select `smarterbot.store`
   - Navigate to DNS/Name Servers

2. **Add A Record**
   ```
   Type: A
   Name: @ (or www)
   Points to: [YOUR_DOKPLOY_SERVER_IP]
   TTL: 14400 (or default)
   ```

3. **Optional: Add CNAME for www**
   ```
   Type: CNAME
   Name: www
   Points to: smarterbot.store
   TTL: 14400
   ```

### 4️⃣ SSL/TLS Configuration

In Dokploy:
1. Go to your application settings
2. Navigate to "Domains" or "SSL"
3. Add domain: `smarterbot.store`
4. Enable "Auto SSL" (Let's Encrypt)
5. Wait for certificate generation (2-5 minutes)

### 5️⃣ Deploy

1. In Dokploy dashboard, click **"Deploy"** or **"Build & Deploy"**
2. Monitor the build logs
3. Wait for deployment to complete (3-5 minutes)

### 6️⃣ Verify Deployment

```bash
# Check if site is accessible
curl -I https://smarterbot.store

# Or visit in browser:
# https://smarterbot.store
```

## 🔄 Auto-Deployment (CI/CD)

### Enable Webhook

1. In Dokploy, go to Application Settings
2. Find "Webhooks" section
3. Copy the webhook URL
4. Add to GitHub repository:
   - Settings → Webhooks → Add webhook
   - Payload URL: [Dokploy webhook URL]
   - Content type: `application/json`
   - Events: Push events

Now every push to `main` will trigger automatic deployment! 🎉

## 🐛 Troubleshooting

### Build Fails

```bash
# Check Dokploy logs
# Look for errors in build phase

# Common issues:
# - Node version mismatch → Update Dockerfile
# - Missing dependencies → Check package.json
# - Memory issues → Increase build resources in Dokploy
```

### Site Not Accessible

```bash
# 1. Check DNS propagation
dig smarterbot.store

# 2. Verify container is running
# In Dokploy dashboard, check container status

# 3. Check nginx logs in Dokploy
```

### SSL Issues

- Wait 5-10 minutes for Let's Encrypt validation
- Ensure port 80 and 443 are open on server
- Check DNS points to correct IP
- Try manual SSL certificate generation in Dokploy

## 📊 Post-Deployment

### Monitor Performance

- Enable monitoring in Dokploy
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure alerts for downtime

### Backup Strategy

```bash
# Set up automated backups in Dokploy
# Backup frequency: Daily
# Retention: 7 days
```

### Update Process

```bash
# 1. Make changes locally
git add .
git commit -m "feat: your changes"
git push origin main

# 2. Dokploy auto-deploys (if webhook enabled)
# OR manually trigger deployment in Dokploy dashboard
```

## 🎯 Success Checklist

- [ ] Application deployed successfully
- [ ] Domain accessible via HTTPS
- [ ] SSL certificate active
- [ ] All pages loading correctly
- [ ] React Router working (no 404s on refresh)
- [ ] Static assets loading
- [ ] Responsive design working
- [ ] Auto-deployment configured

## 🆘 Need Help?

If you encounter issues:

1. Check Dokploy documentation
2. Review build logs carefully
3. Test Docker build locally:
   ```bash
   docker build -t smarterbot-test .
   docker run -p 8080:80 smarterbot-test
   # Visit http://localhost:8080
   ```

## 🎉 Congratulations!

Your **SmarterBOT.store** is now live! 🚀

Visit: https://smarterbot.store

---

**Next Steps:**
- Add Google Analytics
- Set up monitoring
- Configure CDN (Cloudflare)
- Add contact form backend
- Connect to actual n8n workflows API
