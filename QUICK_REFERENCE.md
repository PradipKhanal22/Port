# ⚡ Quick Reference Guide

## 🚀 Start Here

```bash
# 1. Navigate to project
cd "c:\Users\Hp\Desktop\Port"

# 2. Install dependencies (first time only)
npm install

# 3. Start development server
npm run dev

# 4. Open browser (auto-opens on http://localhost:3000)
```

---

## 📝 Common Tasks

### Update Your Information

**Hero Section** (`src/components/sections/Hero.jsx`)
```js
const roles = ['Web Developer', 'Your Role 1', 'Your Role 2'];
```

**Contact Info** (`src/components/sections/Contact.jsx`)
```js
{ label: 'Email', value: 'your-email@example.com' }
```

**Social Links** (`src/components/Navbar.jsx`)
```js
{ href: 'https://github.com/your-username' }
```

### Add Projects

**Projects** (`src/components/sections/Projects.jsx`)
```js
{
  title: 'Your Project',
  description: 'Description',
  image: './images/project.png',
  tags: ['Tag1', 'Tag2'],
  link: 'https://...',
}
```

### Update Skills

**Skills** (`src/components/sections/Skills.jsx`)
```js
{ name: 'Your Skill', level: 85 }
```

### Replace Images

1. Place images in `images/` folder
2. Use in components:
   ```jsx
   <img src="./images/filename.png" alt="description" />
   ```

### Customize Colors

**tailwind.config.js**
```js
colors: {
  'accent-orange': '#your-color',
}
```

---

## 🛠 Development Commands

```bash
npm run dev          # Start dev server (port 3000)
npm run build        # Create production build
npm run preview      # Preview production build
npm run lint         # Check code quality
npm install          # Install dependencies
npm update           # Update all packages
npm audit            # Check for vulnerabilities
```

---

## 📂 File Locations

| Task | File |
|------|------|
| Main app | `src/App.jsx` |
| Global styles | `src/styles/globals.css` |
| Tailwind config | `tailwind.config.js` |
| Vite config | `vite.config.js` |
| HTML template | `index.html` |
| Navbar | `src/components/Navbar.jsx` |
| Hero | `src/components/sections/Hero.jsx` |
| Projects | `src/components/sections/Projects.jsx` |
| Contact | `src/components/sections/Contact.jsx` |

---

## 🎨 Component Map

```
App.jsx
├── Navbar           ← Navigation & menu
├── Hero             ← Main intro
├── Stats            ← Achievements
├── Skills           ← Technical & soft skills
├── Projects         ← Featured work
├── Services         ← Services offered
├── About            ← Bio & timeline
├── Testimonials     ← Client reviews
├── Contact          ← Contact form & info
└── Footer           ← Links & social

Effects
├── CursorGlow       ← Mouse glow
└── FloatingElements ← Background blobs
```

---

## 🎯 Customization Priority

### Tier 1 (Essential)
1. Hero roles
2. Contact information  
3. Projects
4. Profile images
5. Social links

### Tier 2 (Important)
1. Skills & proficiencies
2. Experience timeline
3. Services
4. About text
5. CV file

### Tier 3 (Optional)
1. Color scheme
2. Fonts
3. Animation speeds
4. Testimonials
5. Additional content

---

## 🚀 Deployment

### Vercel (30 seconds)
```bash
npm install -g vercel
vercel login
vercel
```

### Netlify
```bash
npm run build
# Drag dist folder to netlify.com
```

### Manual
```bash
npm run build
# Upload dist folder to hosting
```

---

## 🐛 Quick Fixes

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `npm run dev -- --port 3001` |
| Module errors | `rm -rf node_modules && npm install` |
| Styles not applied | Clear browser cache (`Ctrl+Shift+R`) |
| Images not showing | Check file path: `./images/filename` |
| Build fails | Run `npm audit fix` |

---

## 📊 File Structure at a Glance

```
src/
├── components/          # React components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── sections/       # Page sections
│       ├── Hero.jsx
│       ├── Stats.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Services.jsx
│       ├── About.jsx
│       ├── Testimonials.jsx
│       └── Contact.jsx
├── styles/
│   └── globals.css     # Global styles
├── App.jsx             # Main app
└── main.jsx            # Entry point

Config files in root:
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── package.json
└── index.html
```

---

## 🎨 Theme Quick Reference

### Colors
```
Orange:  #ff6b35
Pink:    #ec4899
Purple:  #7c3aed
Dark:    #0B0F19
```

### Fonts
```
Headings: Poppins, Sora, Space Grotesk
Body:     Inter, DM Sans
```

### Sizes
```
sm:  < 640px
md:  640px - 1024px
lg:  1024px - 1536px
xl:  > 1536px
```

---

## 📱 Responsive Classes

```jsx
// Mobile first (default)
<div className="text-sm">

// Tablet and up
<div className="md:text-base">

// Desktop and up
<div className="lg:text-lg">

// 4K and up
<div className="xl:text-xl">
```

---

## 🎬 Animation Classes

```jsx
// Fade in
animate-fade-in

// Slide in
animate-slide-in

// Glow
animate-glow

// Float
animate-float

// Bounce
animate-bounce-slow
```

---

## 🔗 Important Links

- **React Docs**: https://react.dev
- **Tailwind**: https://tailwindcss.com
- **Framer Motion**: https://framer.com/motion
- **Vite**: https://vitejs.dev
- **GitHub**: https://github.com

---

## 💾 Git Commands

```bash
# Clone (if needed)
git clone <url>

# Save changes
git add .
git commit -m "Update portfolio"
git push origin main

# Create branch
git checkout -b feature/new-section
```

---

## 🎯 Performance Tips

```bash
# Check bundle size
npm run build

# Optimize images
# Use TinyPNG or similar

# Update packages
npm update

# Audit security
npm audit fix
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+C` | Stop dev server |
| `Ctrl+Shift+R` | Hard refresh browser |
| `F12` | Open DevTools |
| `Cmd+Shift+R` | Hard refresh (Mac) |

---

## 📞 When You Need Help

1. **Check docs** - README.md, SETUP.md, FEATURES.md
2. **Review code comments** - In component files
3. **Google the issue** - StackOverflow, GitHub Issues
4. **Framework docs** - React, Tailwind, Vite
5. **Community** - Reddit r/webdev, Dev.to

---

## ✅ Pre-Launch Checklist

- [ ] All content updated
- [ ] Images replaced
- [ ] Links tested
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Animations smooth
- [ ] Contact form works
- [ ] Performance good
- [ ] Analytics setup
- [ ] Domain ready

---

**That's it! You're ready to go! 🚀**

*Quick Reference v1.0 - May 2026*
