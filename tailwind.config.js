/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono:    ['DM Mono', 'monospace'],
      },
      colors: {
        canvas: '#F7F5F2',
        crimson: {
          50:  '#fdf2f4',
          100: '#fce7eb',
          200: '#f9c0cb',
          500: '#9b1535',
          600: '#6A1022',
          700: '#540d1b',
          800: '#3e0a14',
          900: '#2a060d',
        },
        gold: {
          300: '#d4b87a',
          400: '#c9a55e',
          500: '#B58D4F',
          600: '#9a7640',
          700: '#7d5f32',
        },
        taupe: {
          100: '#f0ede9',
          200: '#e2ddd7',
          300: '#C1B8AD',
          400: '#a09890',
          500: '#7d7670',
          600: '#5c5650',
        },
        navy: {
          700: '#3a3f4d',
          800: '#2B2F3A',
          900: '#1e2129',
          950: '#13151b',
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.04'/%3E%3C/svg%3E\")",
        'hero-lines': "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.03) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255,255,255,0.03) 80px)",
        'brand-shine': 'linear-gradient(135deg, #6A1022 0%, #B58D4F 100%)',
      },
      boxShadow: {
        'warm-sm':   '0 1px 3px 0 rgba(43,47,58,0.07), 0 1px 2px -1px rgba(43,47,58,0.05)',
        'warm-md':   '0 4px 16px -2px rgba(43,47,58,0.11), 0 2px 6px -2px rgba(43,47,58,0.07)',
        'warm-lg':   '0 12px 40px -6px rgba(43,47,58,0.15), 0 4px 12px -4px rgba(43,47,58,0.09)',
        'crimson-glow': '0 0 0 2px rgba(106,16,34,0.18), 0 8px 24px -4px rgba(106,16,34,0.14)',
        'gold-glow':    '0 0 0 2px rgba(181,141,79,0.22), 0 8px 24px -4px rgba(181,141,79,0.14)',
        'dark-lift':    '0 2px 12px 0 rgba(0,0,0,0.45), 0 1px 3px -1px rgba(0,0,0,0.32)',
      },
    },
  },
  plugins: [],
};
