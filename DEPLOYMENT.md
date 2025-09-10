# Deployment Guide

This portfolio demonstrates a complete full-stack + DevOps implementation, from development to production deployment on a self-hosted infrastructure.

## Architecture Overview

```
Internet → Cloudflare → Home Router → Unraid Server → Docker Container
         [SSL/DNS]    [Port Forward]  [Nginx Proxy]   [SvelteKit App]
```

## Technology Stack

### Frontend
- **SvelteKit** - Full-stack framework with SSR
- **TypeScript** - Type-safe development
- **SASS/SCSS** - Advanced styling with variables and mixins
- **Docker** - Containerized deployment

### Infrastructure
- **Unraid Server** - 38TB home lab server running Docker
- **Nginx Proxy Manager** - Reverse proxy with SSL termination
- **Cloudflare** - DNS management and SSL certificates
- **Cloudflare DDNS** - Dynamic DNS updates for home IP

### DevOps
- **Docker** - Application containerization
- **Node.js Alpine** - Lightweight production runtime
- **Environment-based configuration** - Secure credential management
- **Health checks** - Container monitoring and restart policies

## Local Development

1. **Clone and install dependencies**
   ```bash
   git clone [repository-url]
   cd vak-portfolio-v2
   npm install
   ```

2. **Environment setup**
   ```bash
   cp .env.example .env.production
   # Edit .env.production with your actual SMTP credentials
   ```

3. **Development server**
   ```bash
   npm run dev
   ```

## Production Deployment

### Prerequisites
- Unraid server with Docker support
- Domain name configured with Cloudflare
- SMTP credentials for contact form

### Build Process
1. **Local build**
   ```bash
   npm run build
   ```

2. **Transfer to server**
   ```bash
   # Copy entire project to Unraid appdata directory
   cp -r . /mnt/user/appdata/vak-portfolio/
   ```

3. **Docker deployment**
   ```bash
   cd /mnt/user/appdata/vak-portfolio
   
   # Build image
   docker build -t vak-portfolio .
   
   # Run container
   docker run -d \
     --name vak-portfolio \
     --restart unless-stopped \
     -p 3000:3000 \
     -e SMTP_HOST=smtp.gmail.com \
     -e SMTP_PORT=587 \
     -e SMTP_USER=your-email@gmail.com \
     -e SMTP_PASS=your-app-password \
     -e DESTINATION_EMAIL=destination@email.com \
     vak-portfolio
   ```

### Infrastructure Configuration

#### 1. Nginx Proxy Manager
- **Proxy Host**: `imvak.com` → `192.168.x.x:3000`
- **SSL Certificate**: Cloudflare origin certificate
- **Force SSL**: Enabled
- **HTTP/2**: Enabled

#### 2. Cloudflare Settings
- **DNS A Record**: `imvak.com` → Home public IP
- **Proxy Status**: Proxied (orange cloud)
- **SSL/TLS**: Full (strict)
- **Edge Certificates**: Universal SSL enabled

#### 3. Cloudflare DDNS
```yaml
# Docker container for dynamic DNS updates
cloudflare-ddns:
  image: oznu/cloudflare-ddns
  environment:
    - API_KEY=your-cloudflare-api-key
    - ZONE=imvak.com
    - SUBDOMAIN=@
```

## Container Management

### Health Monitoring
```bash
# Check container status
docker ps

# View logs
docker logs vak-portfolio

# Container health check
docker exec vak-portfolio wget --spider http://localhost:3000
```

### Updates
```bash
# Stop and remove old container
docker stop vak-portfolio
docker rm vak-portfolio

# Rebuild with updated code
docker build -t vak-portfolio .
docker run -d [same options as above]
```

## Security Considerations

- **Environment Variables**: Sensitive data stored in environment variables, never in code
- **SSL/TLS**: End-to-end encryption via Cloudflare
- **Container Isolation**: Application runs in isolated Docker container
- **Firewall**: Only necessary ports exposed through router configuration
- **Regular Updates**: Container and base image updates for security patches

## Monitoring & Maintenance

- **Container Health**: Automated health checks with restart policies
- **Log Management**: Docker log rotation and monitoring
- **SSL Renewal**: Automatic via Cloudflare
- **DNS Updates**: Automated via Cloudflare DDNS container
- **Backup Strategy**: Regular snapshots of Unraid array

## Performance Optimizations

- **Alpine Linux**: Minimal base image for smaller container size
- **Multi-stage Build**: Optimized Docker layers
- **Asset Optimization**: SvelteKit's built-in optimizations
- **HTTP/2**: Enabled via Nginx Proxy Manager
- **Cloudflare CDN**: Global content delivery and caching

This deployment showcases practical DevOps skills including containerization, reverse proxy configuration, SSL management, and automated infrastructure management in a production environment.