import defaultConfig from 'tailwindcss/defaultConfig';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Dark Theme
        'dark-primary': '#0B0F19',
        'dark-secondary': '#1a1f35',
        'dark-card': '#16213e',
        'dark-border': '#2d3e5f',
        
        // Vibrant Accents
        'accent-orange': '#ff6b35',
        'accent-orange-light': '#ff8c5a',
        'accent-purple': '#7c3aed',
        'accent-blue': '#3b82f6',
        'accent-pink': '#ec4899',
        
        // Gradient colors
        'gradient-from': '#ff6b35',
        'gradient-to': '#7c3aed',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glow-orange': 'radial-gradient(circle at center, rgba(255, 107, 53, 0.2), transparent)',
        'glow-purple': 'radial-gradient(circle at center, rgba(124, 58, 237, 0.2), transparent)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(255, 107, 53, 0.3)',
        'glow-lg': '0 0 60px rgba(255, 107, 53, 0.4)',
        'glow-purple': '0 0 30px rgba(124, 58, 237, 0.3)',
        'neon': '0 0 20px rgba(255, 107, 53, 0.5), 0 0 40px rgba(124, 58, 237, 0.2)',
      },
      backdropBlur: {
        'xl': '32px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'slide-in': 'slide-in 0.5s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
