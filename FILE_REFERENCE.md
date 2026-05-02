# 📊 Complete Project Structure & File Reference

## 🎯 Quick Navigation

```
PORT PROJECT ROOT
c:\Users\Hp\Desktop\Port\
│
├── 📍 START HERE
│   └── 00_START_HERE.md ⭐ (Read this first!)
│
├── 📚 DOCUMENTATION (5 guides)
│   ├── README.md (Project overview)
│   ├── SETUP.md (Installation & customization)
│   ├── FEATURES.md (Design specifications)
│   ├── DEPLOYMENT.md (How to deploy)
│   └── QUICK_REFERENCE.md (Quick commands)
│
├── ⚙️ CONFIGURATION
│   ├── package.json (Dependencies)
│   ├── tailwind.config.js (Colors & animations)
│   ├── vite.config.js (Build settings)
│   ├── postcss.config.js (PostCSS config)
│   ├── .eslintrc.json (Code quality)
│   ├── .gitignore (Git ignore)
│   └── index.html (React template)
│
├── 💻 SOURCE CODE (src/)
│   ├── App.jsx (Main app component)
│   ├── main.jsx (React entry point)
│   │
│   ├── styles/
│   │   └── globals.css (Global styles & animations)
│   │
│   ├── components/
│   │   ├── Navbar.jsx ✨ (Sticky nav with menu)
│   │   ├── Footer.jsx (Comprehensive footer)
│   │   │
│   │   ├── sections/ (8 page sections)
│   │   │   ├── Hero.jsx ✨ (Intro with typing)
│   │   │   ├── Stats.jsx (Animated counters)
│   │   │   ├── Skills.jsx (Progress indicators)
│   │   │   ├── Projects.jsx ✨ (Interactive cards)
│   │   │   ├── Services.jsx (Service offerings)
│   │   │   ├── About.jsx (Timeline & bio)
│   │   │   ├── Testimonials.jsx (Carousel)
│   │   │   └── Contact.jsx (Form & info)
│   │   │
│   │   └── effects/ (Advanced effects)
│   │       ├── CursorGlow.jsx ✨ (Mouse glow)
│   │       └── FloatingElements.jsx ✨ (Animations)
│   │
│   └── data/ (For future data files)
│
├── 🖼️ MEDIA
│   ├── images/
│   │   ├── me.jpeg (Profile image)
│   │   ├── me2.jpg (About image)
│   │   ├── s1.png (Project images)
│   │   ├── s3.png
│   │   ├── image*.png (More projects)
│   │   └── ... (Additional images)
│   │
│   └── favicon_io/ (Favicon files)
│
├── 📄 EXTRAS
│   ├── Pradip_Khanal_CV (1).pdf (CV file)
│   ├── CNAME (Domain config)
│   ├── index.html.backup (Old HTML)
│   └── create-rounded-favicon.html
│
└── 📦 NODE MODULES (after npm install)
    └── node_modules/ (Auto-generated)
```

---

## 📋 File Reference Table

| File | Type | Purpose | Edit? |
|------|------|---------|-------|
| 00_START_HERE.md | Doc | Main setup guide | ❌ |
| README.md | Doc | Project overview | ❌ |
| SETUP.md | Doc | Installation guide | ❌ |
| FEATURES.md | Doc | Design specs | ❌ |
| DEPLOYMENT.md | Doc | Deployment guide | ❌ |
| QUICK_REFERENCE.md | Doc | Quick commands | ❌ |
| package.json | Config | Dependencies | ⚠️ Advanced |
| tailwind.config.js | Config | Colors/animations | ✅ Yes |
| vite.config.js | Config | Build settings | ⚠️ Advanced |
| postcss.config.js | Config | PostCSS | ❌ |
| .eslintrc.json | Config | Linting | ❌ |
| index.html | Template | React mount | ⚠️ Careful |
| App.jsx | Component | Main app | ⚠️ Advanced |
| globals.css | Styles | Global CSS | ✅ Yes |
| Navbar.jsx | Component | Navigation | ✅ Yes |
| Hero.jsx | Component | Hero section | ✅ Yes |
| Stats.jsx | Component | Statistics | ✅ Yes |
| Skills.jsx | Component | Skills | ✅ Yes |
| Projects.jsx | Component | Projects | ✅ Yes |
| Services.jsx | Component | Services | ✅ Yes |
| About.jsx | Component | About | ✅ Yes |
| Testimonials.jsx | Component | Testimonials | ✅ Yes |
| Contact.jsx | Component | Contact form | ✅ Yes |
| CursorGlow.jsx | Effect | Mouse glow | ⚠️ Advanced |
| FloatingElements.jsx | Effect | Animations | ⚠️ Advanced |

---

## 🎯 What Each File Does

### Configuration Files

**package.json**
- Lists all dependencies
- Defines npm scripts (dev, build, etc.)
- Project metadata

**tailwind.config.js**
- Defines color scheme
- Custom animations
- Theme extensions
- Breakpoints

**index.html**
- React mount point
- Meta tags
- Google Analytics setup

### Component Files

**Navbar.jsx**
- Sticky navigation bar
- Mobile hamburger menu
- Smooth scroll links
- Dark/light toggle

**Hero.jsx**
- Main intro section
- Typing animation
- Floating badges
- CTA buttons
- Profile image

**Stats.jsx**
- Animated counters
- Achievement metrics
- Icon animations

**Skills.jsx**
- Technical skills with SVG progress
- Soft skills cards
- Technology tags

**Projects.jsx**
- 6 featured projects
- Interactive hover effects
- Project details overlay
- Tags and buttons

**Services.jsx**
- 6 services offered
- Service cards
- Icon animations

**About.jsx**
- Professional timeline
- Bio section
- CV download
- Profile images

**Testimonials.jsx**
- Client testimonials carousel
- Star ratings
- Navigation controls

**Contact.jsx**
- Contact form
- Form validation
- Contact information
- Social links

**Footer.jsx**
- Footer navigation
- Social media links
- Copyright info

### Effect Components

**CursorGlow.jsx**
- Tracks mouse position
- Renders glow element
- Follows cursor

**FloatingElements.jsx**
- Animated background blobs
- Parallax movement
- Various sizes/colors

### Style Files

**globals.css**
- Global Tailwind directives
- Custom animations
- Utility classes
- Scrollbar styling

---

## 🔍 Component Hierarchy

```
App.jsx
├── Navbar
│   ├── Logo/Brand
│   ├── Navigation Links
│   ├── Mobile Menu
│   └── CTA Button
│
├── Hero
│   ├── Greeting
│   ├── Animated Text
│   ├── Description
│   ├── CTA Buttons
│   ├── Social Links
│   └── Profile Image
│
├── Stats
│   ├── Counter 1 (Projects)
│   ├── Counter 2 (Clients)
│   ├── Counter 3 (Experience)
│   └── Counter 4 (Quality)
│
├── Skills
│   ├── Technical Skills (Circular Progress)
│   ├── Soft Skills Cards
│   └── Tech Stack Tags
│
├── Projects
│   ├── Project Card 1
│   ├── Project Card 2
│   ├── Project Card 3
│   ├── Project Card 4
│   ├── Project Card 5
│   └── Project Card 6
│
├── Services
│   ├── Service Card 1
│   ├── Service Card 2
│   ├── Service Card 3
│   ├── Service Card 4
│   ├── Service Card 5
│   └── Service Card 6
│
├── About
│   ├── Profile Image
│   ├── Bio Text
│   ├── Timeline Events
│   ├── Contact Info
│   └── CV Download
│
├── Testimonials
│   ├── Carousel Container
│   ├── Testimonial 1
│   ├── Testimonial 2
│   ├── Testimonial 3
│   └── Navigation Controls
│
├── Contact
│   ├── Contact Information
│   ├── Contact Form
│   └── Social Links
│
├── Footer
│   ├── Brand Info
│   ├── Quick Links
│   ├── Social Links
│   └── Copyright
│
├── CursorGlow (Effect)
└── FloatingElements (Effect)
```

---

## 📝 File Sizes & Stats

```
React Components:        12 files
Total JSX Lines:         ~2,000 lines
CSS Lines:              ~300 lines
Config Files:           6 files
Documentation:          6 files
Total Project:          ~50+ files

Estimated Build Size:   ~80KB (gzipped)
Uncompressed Size:      ~250KB
```

---

## 🛠 Development Workflow

### 1. First Time Setup
```bash
# Install dependencies
npm install                    # Creates node_modules/
```

### 2. Development
```bash
# Start dev server
npm run dev                    # Opens http://localhost:3000

# Make changes to components
# Browser auto-refreshes (HMR)

# Check code quality
npm run lint                   # ESLint
```

### 3. Customization
```bash
Edit these files:
- Hero.jsx (typing roles)
- Contact.jsx (contact info)
- Navbar.jsx (social links)
- Projects.jsx (your projects)
- Skills.jsx (your skills)
- About.jsx (your experience)

Replace images:
- images/me.jpeg
- images/me2.jpg
- images/project*.png
```

### 4. Building
```bash
# Create production build
npm run build                  # Creates dist/

# Preview production
npm run preview                # Test build locally
```

### 5. Deployment
```bash
# Deploy to Vercel/Netlify/GitHub
# See DEPLOYMENT.md for instructions
```

---

## 🎨 Customization Map

| Section | File | What to Edit |
|---------|------|--------------|
| Navbar Roles | Hero.jsx | `const roles = [...]` |
| Contact Email | Contact.jsx | `contactInfo` array |
| Social Links | Navbar.jsx | Social link URLs |
| Projects | Projects.jsx | `projects` array |
| Skills | Skills.jsx | `technicalSkills` array |
| Services | Services.jsx | `services` array |
| Timeline | About.jsx | `timeline` array |
| Colors | tailwind.config.js | Color values |
| Fonts | tailwind.config.js | fontFamily |
| Animations | globals.css | @keyframes |

---

## 🔄 Import Dependencies

**Key Imports Used Across Components:**
```jsx
import React from 'react'
import { motion } from 'framer-motion'        // Animations
import { FiIcon } from 'react-icons/fi'       // Icons
import { Link } from 'react-scroll'           // Smooth scroll
import { useInView } from 'framer-motion'     // Scroll detect
```

---

## 📊 Dependencies Breakdown

```
Production Dependencies:
- react@18.2.0              (UI Framework)
- react-dom@18.2.0          (React DOM)
- framer-motion@10.16.4     (Animations)
- react-icons@4.11.0        (Icons)
- react-scroll@1.8.10       (Scroll navigation)

Development Dependencies:
- vite@4.4.0                (Build tool)
- tailwindcss@3.3.0         (CSS Framework)
- postcss@8.4.24            (CSS processor)
- autoprefixer@10.4.14      (Vendor prefixes)
- eslint@8.45.0             (Code quality)
- @vitejs/plugin-react      (React plugin)
```

---

## ✅ Pre-Launch Checklist by File

- [ ] **index.html** - Contains your name and GA ID
- [ ] **package.json** - All dependencies installed
- [ ] **Hero.jsx** - Your typing roles updated
- [ ] **Contact.jsx** - Your contact info updated
- [ ] **Navbar.jsx** - Your social links updated
- [ ] **Projects.jsx** - Your projects added
- [ ] **Skills.jsx** - Your skills updated
- [ ] **About.jsx** - Your timeline updated
- [ ] **images/** - All images replaced
- [ ] **tailwind.config.js** - Colors match your brand

---

## 🚀 Deployment Files

```
For Vercel:
- vite.config.js (auto-configured)
- package.json (auto-detected)

For Netlify:
- vite.config.js (auto-configured)
- netlify.toml (optional, auto-created)

For GitHub Pages:
- vite.config.js (base: '/repo-name/')
- dist/ folder (created by build)
```

---

## 📞 Quick File Lookup

| Need to... | Edit this file |
|-----------|-----------------|
| Change colors | tailwind.config.js |
| Update hero | Hero.jsx |
| Add projects | Projects.jsx |
| Update skills | Skills.jsx |
| Change fonts | tailwind.config.js |
| Update contact | Contact.jsx |
| Add testimonials | Testimonials.jsx |
| Change animations | globals.css |
| Update social | Navbar.jsx, Footer.jsx |
| Add services | Services.jsx |
| Update about | About.jsx |
| Modify stats | Stats.jsx |
| Build settings | vite.config.js |
| Dependencies | package.json |

---

**That's your complete file reference! 🎯**

Happy coding! If you have any questions about what a file does, refer back to this guide.
