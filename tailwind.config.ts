import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1440px',
      },
      fontFamily: {
        'crimson': ['Crimson Text', 'serif'],
        'instrument': ['Instrument Serif', 'serif'],
        'dm': ['DM Sans', 'sans-serif'],
        'neue': ['Neue Haas Grotesk Display Pro', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          orange: '#E79A01',
          'orange-red': '#E76C01',
        },
        background: {
          dark: '#131416',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'stagger': 'stagger 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        stagger: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        'container-sm': 'clamp(1rem, 5vw, 2rem)',
        'container-md': 'clamp(2rem, 8vw, 4rem)',
        'container-lg': 'clamp(3rem, 10vw, 6rem)',
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}

export default config
