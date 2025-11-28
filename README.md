# 🚀 SmarterBOT.store

**Automation Workflows & Business Solutions Platform**

Deploy powerful n8n workflows, integrate Odoo & scale with VPS hosting, and supercharge your marketing with Meta Ads. 4,343+ production-ready workflows.

## ✨ Features

- 🔄 **4,343+ n8n Workflows** - Production-ready automation workflows
- 🛍️ **E-commerce Integration** - Seamless Odoo connections
- 📊 **Meta Ads Automation** - Powerful marketing campaign management
- 🖥️ **VPS Hosting** - Enterprise-grade hosting with Hostinger
- 🌐 **Domain Services** - Premium domain registration and management
- 💼 **Custom Development** - Tailored automation solutions

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Styling**: Custom CSS with Design System
- **Deployment**: Docker + Nginx

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build manually
docker build -t smarterbot-store .
docker run -p 80:80 smarterbot-store
```

## 📦 Deployment to Dokploy

### Prerequisites

1. Dokploy instance running
2. Domain configured in Hostinger
3. Git repository set up

### Deployment Steps

1. **Initialize Git repository** (if not done):
```bash
git init
git add .
git commit -m "Initial commit: SmarterBOT.store platform"
```

2. **Add remote repository**:
```bash
git remote add origin <your-git-repo-url>
git push -u origin main
```

3. **Configure Dokploy**:
   - Log in to your Dokploy dashboard
   - Create a new application
   - Select "Deploy from Git"
   - Connect your repository
   - Set build command: `npm run build`
   - Set start command: Uses Dockerfile automatically
   - Configure environment variables if needed

4. **Domain Configuration**:
   - In Hostinger, point your domain to Dokploy server IP
   - In Dokploy, add your domain to the application
   - Enable SSL/TLS certificate

## 🌐 Environment Variables

Create a `.env` file for local development:

```env
VITE_API_URL=https://api.smarterbot.store
VITE_GITHUB_REPO=https://n8n.smarterbot.store
```

## 📁 Project Structure

```
smarterbot-store/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── Workflows.tsx
│   │   ├── Services.tsx
│   │   └── Contact.tsx
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles & design system
├── public/              # Static assets
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose configuration
├── nginx.conf          # Nginx server configuration
└── package.json        # Dependencies
```

## 🎨 Design System

The application uses a custom design system with:

- **Dark Mode Premium Theme**
- **Gradient Accents** - Purple, Pink, Cyan gradients
- **Glass Morphism** - Frosted glass effects
- **Smooth Animations** - Micro-interactions throughout
- **Responsive Design** - Mobile-first approach

## 🔗 Integration with n8n Workflows

This platform showcases workflows from the [n8n platform](https://n8n.smarterbot.store):

- 4,343 Production-Ready Workflows
- 365 Unique Integrations
- 29,445 Total Nodes
- Organized in 15 Categories

## 📊 Services Offered

1. **VPS Hosting** - Starting at $9.99/month
2. **Domain Registration** - Starting at $0.99/year
3. **n8n Automation** - Starting at $19.99/month
4. **Custom Development** - Custom quotes
5. **Marketing Automation** - Starting at $49.99/month
6. **Enterprise Support** - Custom plans

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved © 2025 SmarterBOT.store

## 📞 Contact

- **Website**: [smarterbot.store](https://smarterbot.store)
- **Email**: smarterbotcl@gmail.com
- **GitHub**: [@SmarterCL](https://github.com/SmarterCL)

## 🙏 Acknowledgments

- [n8n](https://n8n.io) - Workflow automation platform
- [Hostinger](https://hostinger.com) - Hosting infrastructure
- [Dokploy](https://dokploy.com) - Deployment platform
- The amazing open-source community

---

**Made with ❤️ by the SmarterBOT team**

⭐ Star us on GitHub — it motivates us a lot!
