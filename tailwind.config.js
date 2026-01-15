/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1565C0',
          'blue-dark': '#0D47A1',
          'blue-light': '#42A5F5',
          yellow: '#FFC107',
          'yellow-dark': '#FFA000',
          'yellow-light': '#FFCA28',
          red: '#E53935',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          secondary: '#1A1A1A',
          tertiary: '#2A2A2A',
        },
        light: {
          DEFAULT: '#F5F5F5',
          secondary: '#FAFAFA',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero-lg': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero-md': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-sm': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1565C0 0%, #0D47A1 100%)',
        'gradient-primary-reverse': 'linear-gradient(135deg, #0D47A1 0%, #1565C0 100%)',
        'gradient-accent': 'linear-gradient(135deg, #FFC107 0%, #FFA000 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(21,101,192,0.05) 0%, rgba(255,255,255,0) 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1565C0 0%, #0A0A0A 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'radial-gradient(at 40% 20%, #1565C0 0px, transparent 50%), radial-gradient(at 80% 0%, #FFC107 0px, transparent 50%), radial-gradient(at 0% 50%, #42A5F5 0px, transparent 50%)',
        'dot-pattern': 'radial-gradient(circle at 2px 2px, rgba(21, 101, 192, 0.1) 1px, transparent 0)',
        'stripe-diagonal': 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(21, 101, 192, 0.03) 10px, rgba(21, 101, 192, 0.03) 20px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'scale-pulse': 'scale-pulse 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'draw-line': 'draw-line 2s ease-out forwards',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(21, 101, 192, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(21, 101, 192, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'scale-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'premium': '0 4px 6px -1px rgba(21, 101, 192, 0.1), 0 2px 4px -1px rgba(21, 101, 192, 0.06), 0 20px 25px -5px rgba(21, 101, 192, 0.1), 0 10px 10px -5px rgba(21, 101, 192, 0.04)',
        'glow-blue': '0 0 40px rgba(21, 101, 192, 0.3)',
        'glow-yellow': '0 0 40px rgba(255, 193, 7, 0.3)',
        'glow-white': '0 0 40px rgba(255, 255, 255, 0.2)',
        'inner-glow': 'inset 0 0 60px rgba(21, 101, 192, 0.1)',
        '3d': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      rotate: {
        '15': '15deg',
        '-15': '-15deg',
      },
      skew: {
        '3': '3deg',
        '-3': '-3deg',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}
