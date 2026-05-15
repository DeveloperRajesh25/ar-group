import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1F2A44',
          deep: '#141C32',
        },
        beige: {
          DEFAULT: '#E8DCC8',
          warm: '#F1E8D6',
          soft: '#FAF5EC',
        },
        gold: {
          DEFAULT: '#C6A75E',
          deep: '#A88947',
          soft: '#E2C98A',
        },
        cream: '#FFFFFF',
        muted: '#6B6657',
        line: '#D4C6AC',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '1.5' }],
        'sm': ['14px', { lineHeight: '1.6' }],
        'base': ['16px', { lineHeight: '1.7' }],
        'lg': ['18px', { lineHeight: '1.7' }],
        'xl': ['20px', { lineHeight: '1.5' }],
        '2xl': ['28px', { lineHeight: '1.3' }],
        '3xl': ['36px', { lineHeight: '1.2' }],
        '4xl': ['48px', { lineHeight: '1.15' }],
        '5xl': ['64px', { lineHeight: '1.1' }],
        '6xl': ['80px', { lineHeight: '1.05' }],
        '7xl': ['96px', { lineHeight: '1' }],
        '8xl': ['112px', { lineHeight: '1' }],
      },
      letterSpacing: {
        widest: '0.3em',
        ultra: '0.4em',
      },
      maxWidth: {
        container: '1440px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        'float-down': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.08)', opacity: '0.85' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'slow-zoom': 'slow-zoom 8s ease-in-out infinite alternate',
        'float-down': 'float-down 2.4s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
