# 🚀 Deployment & Maintenance Guide

## Pre-Deployment Checklist

- [ ] All content is updated (name, email, projects, skills)
- [ ] Images are replaced in `images/` folder
- [ ] Social media links are correct
- [ ] Contact form email is configured
- [ ] Analytics ID updated (if using)
- [ ] No console errors: `npm run build`
- [ ] Mobile responsiveness tested
- [ ] All links tested
- [ ] Performance optimized

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Advantages:**
- Free for personal projects
- Auto-deploy on git push
- Edge functions support
- Analytics included
- Custom domain support
- SSL automatic

**Steps:**
1. Push code to GitHub
2. Visit https://vercel.com
3. Click "New Project"
4. Select your repository
5. Framework: Vite
6. Build command: `npm run build`
7. Output directory: `dist`
8. Deploy!

**Connect Domain:**
1. Go to project settings
2. Domains tab
3. Add custom domain
4. Update DNS records

### Option 2: Netlify

**Advantages:**
- Free tier
- Form handling built-in
- Lambda functions
- Good analytics
- Split testing

**Steps:**
1. Visit https://netlify.com
2. Click "New site from Git"
3. Select repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### Option 3: GitHub Pages

**Advantages:**
- Free
- Built-in version control
- GitHub Actions CI/CD
- Simple setup

**Steps:**
1. Create `gh-pages` branch
2. Update `vite.config.js`:
```js
export default {
  base: '/your-repo-name/',
}
```
3. Add npm script in `package.json`:
```json
{
  "deploy": "npm run build && gh-pages -d dist"
}
```
4. Run: `npm run deploy`
5. Enable GitHub Pages in repo settings

### Option 4: Self-Hosted (Advanced)

**Requirements:**
- Server/VPS (DigitalOcean, AWS, Linode)
- SSH access
- Nginx or Apache
- SSL certificate (Let's Encrypt)

**Steps:**
1. SSH into server
2. Install Node.js and npm
3. Clone repository
4. Install dependencies: `npm install`
5. Build: `npm run build`
6. Configure Nginx:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        root /var/www/portfolio/dist;
        try_files $uri /index.html;
    }
}
```
7. Set up SSL with Let's Encrypt
8. Enable auto-deployments with Git hooks

## Post-Deployment Tasks

### 1. Test Your Site
```
✓ Check all pages load correctly
✓ Test all links and buttons
✓ Test forms
✓ Test mobile responsiveness
✓ Test on different browsers
✓ Check images load
✓ Test animations
```

### 2. Set Up Analytics
```js
// Already configured in index.html for Google Analytics
// Update GA ID: G-3G5Q9ML4FY
// Add your GA ID to index.html
```

### 3. Configure Contact Form
Options:
- **EmailJS**: https://www.emailjs.com/
- **Formspree**: https://formspree.io/
- **Basin**: https://usebasin.com/
- **Netlify Forms**: (if on Netlify)

### 4. Set Up Domain
```
1. Register domain (GoDaddy, Namecheap, etc.)
2. Point DNS to:
   - Vercel: Use nameservers
   - Netlify: Use nameservers
   - GitHub Pages: Use A records
3. Wait for DNS propagation (up to 48 hours)
4. Update social media links
```

### 5. SSL Certificate
- Vercel/Netlify: Automatic (free)
- Self-hosted: Use Let's Encrypt
```bash
sudo certbot certonly --standalone -d your-domain.com
```

## Maintenance & Updates

### Regular Updates
```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Audit for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Updating Content

#### 1. Projects
Edit `src/components/sections/Projects.jsx`
```js
const projects = [
  {
    title: 'New Project',
    description: '...',
    image: './images/new-project.png',
    tags: ['React', 'Tailwind'],
    link: 'https://...',
  }
]
```

#### 2. Skills
Edit `src/components/sections/Skills.jsx`
```js
technicalSkills: [
  { name: 'New Skill', level: 85 }
]
```

#### 3. Experience
Edit `src/components/sections/About.jsx`
```js
const timeline = [
  {
    year: '2024-Present',
    title: 'New Position',
    company: 'Company Name',
    description: 'Description'
  }
]
```

### Testing After Updates
```bash
# Development
npm run dev

# Check for errors
npm run lint

# Build
npm run build

# Preview
npm run preview
```

## Performance Optimization

### Image Optimization
1. Compress images:
   - Use TinyPNG, ImageOptim
   - Target: < 500KB per image
2. Use modern formats:
   - WebP for modern browsers
   - PNG/JPG fallback

### Code Optimization
1. Remove unused dependencies
2. Check bundle size: `npm run build -- --analyze`
3. Enable gzip compression on server
4. Minify and uglify (automatic with Vite)

### SEO Optimization
1. Add meta tags in `index.html`
2. Create `public/sitemap.xml`
3. Create `public/robots.txt`
4. Submit to Google Search Console
5. Monitor Google Analytics

### PageSpeed Optimization
1. Check: https://pagespeed.web.dev/
2. Optimize images
3. Minimize CSS/JS
4. Enable caching headers
5. Use CDN

## Monitoring & Analytics

### Google Analytics
1. Create account at https://analytics.google.com/
2. Get tracking ID (G-XXXXXXXXXX)
3. Update in `index.html`
4. Monitor traffic and user behavior

### Uptime Monitoring
Services:
- Uptimerobot.com (free)
- Statuspage.io
- Freshping

### Error Tracking
Options:
- Sentry.io
- Rollbar.com
- Bugsnag.com

## Backup Strategy

```bash
# Local backup
cp -r . ~/backups/portfolio-$(date +%Y%m%d)

# Cloud backup
git push origin main  # GitHub is your backup
```

## Security Best Practices

1. **Dependencies**
   - Keep npm packages updated
   - Run `npm audit` regularly
   - Use lock file (package-lock.json)

2. **Secrets**
   - Never commit API keys
   - Use `.env` for secrets
   - Add `.env` to `.gitignore`

3. **HTTPS**
   - Always use SSL/TLS
   - Redirect HTTP to HTTPS

4. **Headers**
   - Set security headers
   - Enable CORS properly
   - Add CSP headers

## Troubleshooting Deployment

### Issue: Page shows 404
**Solution**: Check build output directory and base URL

### Issue: Images not loading
**Solution**: Verify image paths and CORS settings

### Issue: Styles not applied
**Solution**: Clear browser cache, rebuild

### Issue: Forms not working
**Solution**: Check form service configuration

### Issue: Slow loading
**Solution**: Compress images, enable gzip, optimize code

## Automated Deployment (CI/CD)

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-artifact@v2
        with:
          name: dist
          path: dist/
```

## Support & Help

**Official Documentation:**
- React: https://react.dev/
- Vite: https://vitejs.dev/
- Tailwind: https://tailwindcss.com/
- Framer Motion: https://www.framer.com/motion/

**Community:**
- Stack Overflow
- GitHub Discussions
- Dev.to
- Reddit r/webdev

## Performance Benchmark

**Target Metrics:**
- ✅ Lighthouse Score: 90+
- ✅ Page Load: < 2 seconds
- ✅ First Paint: < 1 second
- ✅ TTI: < 3 seconds

**Check With:**
```
Chrome DevTools → Lighthouse
PageSpeed Insights: https://pagespeed.web.dev/
WebPageTest: https://www.webpagetest.org/
```

## Renewal Reminders

| Task | Frequency | Next Date |
|------|-----------|-----------|
| Domain Renewal | Annual | ___/___/___ |
| SSL Certificate | Auto/Annual | ___/___/___ |
| Hosting Plan | Varies | ___/___/___ |
| Dependency Updates | Quarterly | ___/___/___ |
| Content Update | Monthly | ___/___/___ |

---

## Quick Deployment Commands

```bash
# For Vercel
npm run build && vercel deploy --prod

# For Netlify
npm run build && netlify deploy --prod --dir=dist

# For GitHub Pages
npm run build && gh-pages -d dist

# General build
npm run build
```

---

**Your portfolio is live! 🎉 Monitor it regularly and keep it updated.**
