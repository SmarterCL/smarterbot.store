# 🌐 Web Server Options

SmarterBOT.store provides **two deployment options** for serving the application:

## Option 1: Nginx (Default) ✅

**Files:**
- `Dockerfile` - Main Dockerfile
- `nginx.conf` - Nginx configuration
- `docker-compose.yml` - Docker Compose

**Use this if:**
- You want the most battle-tested web server
- You need maximum performance
- You're familiar with Nginx configuration

**Deploy:**
```bash
# Build with Docker
docker build -t smarterbot-store .

# Or use Docker Compose
docker-compose up -d
```

## Option 2: Caddy 🚀

**Files:**
- `Dockerfile.caddy` - Caddy-based Dockerfile
- `Caddyfile` - Caddy configuration
- `docker-compose.caddy.yml` - Caddy Docker Compose

**Use this if:**
- You're deploying on Dokploy (uses Caddy)
- You want automatic HTTPS (with Caddy's auto cert)
- You prefer simpler configuration syntax

**Deploy:**
```bash
# Build with Caddy Dockerfile
docker build -f Dockerfile.caddy -t smarterbot-store-caddy .

# Or use Caddy Docker Compose
docker-compose -f docker-compose.caddy.yml up -d
```

## Dokploy Deployment 🐳

**Dokploy works with BOTH options!**

### Using Nginx (Recommended for Docker):
1. In Dokploy: Set Dockerfile path to `./Dockerfile`
2. Deploy normally

### Using Caddy (Better Dokploy Integration):
1. In Dokploy: Set Dockerfile path to `./Dockerfile.caddy`
2. Deploy normally
3. Caddy inside container + Caddy reverse proxy = Great compatibility!

## Comparison

| Feature | Nginx | Caddy |
|---------|-------|-------|
| Performance | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐ Very Good |
| Configuration | More complex | Simpler |
| Auto HTTPS | Manual setup | Automatic |
| Docker Image Size | ~50MB | ~60MB |
| Memory Usage | Lower | Slightly higher |
| Dokploy Integration | ✅ Good | ✅ Better |

## Testing Locally

**Test Nginx version:**
```bash
docker build -t test-nginx .
docker run -p 8080:80 test-nginx
# Visit: http://localhost:8080
```

**Test Caddy version:**
```bash
docker build -f Dockerfile.caddy -t test-caddy .
docker run -p 8081:80 test-caddy
# Visit: http://localhost:8081
```

## Recommendation

- **For Dokploy:** Use **Caddy** (`Dockerfile.caddy`)
- **For other deployments:** Use **Nginx** (`Dockerfile`)
- **Not sure?** Use **Nginx** (default)

Both work perfectly! Choose based on your preference.

---

**Note:** Dokploy handles SSL/TLS at the reverse proxy level, so both options work securely with HTTPS once deployed.
