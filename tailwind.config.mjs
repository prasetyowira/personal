/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'monospace'],
      },
      fontWeight: {
        light: 200,
        normal: 400,
        semibold: 500,
        bold: 700,
      },
      colors: {
        background: '#121212',
        primary: '#e0e0e0',
        secondary: '#a0a0a0',
        accent: {
          green: '#00FF85',
          amber: '#FFCA28',
          blue: '#4A9FFF',
        },
        terminal: {
          bg: '#121212',
          text: '#e0e0e0',
          textSecondary: '#a0a0a0',
          green: '#00FF85',
          amber: '#FFCA28',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
        'blink': 'blink 1s step-end infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'highlight': 'highlight 2s infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        highlight: {
          'from': { opacity: '0.1' },
          'to': { opacity: '0.3' },
        },
      },
      borderColor: {
        'terminal': 'var(--border-color)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e0e0e0',
            a: {
              color: '#00FF85',
              '&:hover': {
                color: '#FFCA28',
              },
            },
            h1: {
              color: '#00FF85',
              fontFamily: '"JetBrains Mono Variable", "JetBrains Mono", monospace',
              fontWeight: 500,
            },
            h2: {
              color: '#00FF85',
              fontFamily: '"JetBrains Mono Variable", "JetBrains Mono", monospace',
              fontWeight: 500,
            },
            h3: {
              color: '#00FF85',
              fontFamily: '"JetBrains Mono Variable", "JetBrains Mono", monospace',
              fontWeight: 500,
            },
            h4: {
              color: '#00FF85',
              fontFamily: '"JetBrains Mono Variable", "JetBrains Mono", monospace',
              fontWeight: 500,
            },
            code: {
              color: '#FFCA28',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontFamily: '"JetBrains Mono", monospace',
            },
            pre: {
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              fontFamily: '"JetBrains Mono", monospace',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}; 