# 🚀 Premium Developer Portfolio

A stunning, modern, and feature-rich portfolio website built with React, Tailwind CSS, and Framer Motion. Designed to impress recruiters and showcase your work with premium aesthetics.

## ✨ Features

### 🎨 Design
- **Dark-First Theme**: Deep navy and black base with vibrant orange and pink accents
- **Glassmorphism**: Modern glass effect with backdrop blur
- **Neumorphism**: Subtle 3D depth effects
- **Gradient Animations**: Smooth, flowing gradient text and backgrounds
- **Glow Effects**: Soft glow and shadow effects for premium feel

### 🧩 Components
- **Hero Section**: Animated typing effect, floating badges, responsive split layout
- **Stats Section**: Animated counters with icons
- **Skills Section**: Circular progress indicators and skill cards
- **Projects**: Interactive hover effects with image reveal
- **Services**: Service cards with hover animations
- **About**: Timeline and storytelling layout
- **Testimonials**: Carousel with smooth transitions
- **Contact**: Form with floating labels
- **Navbar**: Sticky with blur effect and mobile menu
- **Footer**: Comprehensive with social links

### ⚡ Animations & Interactions
- **Framer Motion**: Smooth scroll animations and transitions
- **Hover Effects**: Scale, glow, and tilt animations
- **Typing Effect**: Animated role/profession text
- **Scroll-Based**: Fade and slide animations on scroll
- **Micro-interactions**: Subtle button and card interactions
- **Cursor Glow**: Dynamic glow following mouse movement

### 📱 Responsive
- **Mobile-First**: Designed for all screen sizes
- **Breakpoints**: Full responsive design from mobile to 4K displays
- **Touch-Friendly**: Optimized for touch interactions

### 🎯 Performance
- **Vite Build Tool**: Fast development and optimized production builds
- **Code Splitting**: Efficient component loading
- **Tailwind CSS**: Optimized CSS with purging

## 🛠 Tech Stack

- **React 18**: Modern UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Vite**: Next-generation build tool
- **React Scroll**: Smooth scrolling
- **React Icons**: Icon library

## 📋 Prerequisites

- Node.js 16+ or higher
- npm or yarn package manager

## 🚀 Getting Started

### 1. Installation

```bash
# Clone or navigate to the repository
cd path/to/portfolio

# Install dependencies
npm install
```

### 2. Development

```bash
# Start the development server
npm run dev

# Open your browser and visit http://localhost:3000
```

### 3. Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   └── effects/
│       ├── CursorGlow.jsx
│       └── FloatingElements.jsx
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```js
colors: {
  'accent-orange': '#ff6b35',
  'accent-purple': '#7c3aed',
  'accent-blue': '#3b82f6',
  // ...more colors
}
```

### Fonts
Customize fonts in `tailwind.config.js`:
```js
fontFamily: {
  'poppins': ['Poppins', 'sans-serif'],
  'sora': ['Sora', 'sans-serif'],
  // ...more fonts
}
```

### Content
Update portfolio content in respective component files and replace images in the `images/` folder.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### GitHub Pages
```bash
npm run build
# Upload 'dist' folder to GitHub Pages
```

## 📝 Sections Customization

### Hero Section
- Edit typing roles in `src/components/sections/Hero.jsx`
- Replace profile image in `./images/me.jpeg`
- Update social links

### Projects Section
- Add/remove projects in the `projects` array
- Update project images and links
- Customize tags

### Skills Section
- Update technical skills progress percentages
- Add/remove soft skills
- Modify technology list

### Contact Section
- Update contact information
- Integrate email service (EmailJS, Formspree, etc.)
- Add more contact methods

## 🔧 Configuration Files

- `tailwind.config.js`: Tailwind CSS configuration with custom colors and animations
- `vite.config.js`: Vite build tool configuration
- `postcss.config.js`: PostCSS configuration for Tailwind
- `package.json`: Project dependencies and scripts

## 📚 Animations Library

All animations use Framer Motion. Common variants:
- `fadeInUp`: Fade with upward motion
- `slideIn`: Slide from left animation
- `scaleHover`: Scale on hover
- `glow`: Glow animation

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3001
```

### Module not found errors
```bash
rm -rf node_modules
npm install
```

### Build issues
```bash
npm run build -- --analyze
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 About

Created by **Pradip Khanal** - A passionate web developer crafting beautiful digital experiences.

- 🌐 Website: [Your Portfolio URL]
- 💼 LinkedIn: [Your LinkedIn URL]
- 🐙 GitHub: [Your GitHub URL]
- 📧 Email: khanalpradip66@gmail.com

## 🙏 Acknowledgments

- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Vite for blazing fast development
- React community for amazing tools

---

**Made with ❤️ and ☕**
