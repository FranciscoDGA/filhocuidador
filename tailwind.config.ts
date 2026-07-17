import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)'],
        body: ['var(--font-inter)'],
      },
      colors: {
        // Brand colors - Refined to match Foks (minimalist/monochrome)
        'brand-primary': '#111827', // very dark gray/black
        'brand-secondary': '#4b5563', // medium gray
        'brand-accent': '#000000', // black
        'brand-dark': '#111827', 

        // Gradients (less used in Foks, but kept neutral)
        'gradient-start': '#374151',
        'gradient-end': '#111827',

        // Neutrals
        'cream': '#ffffff', // pure white for Foks
        'text-dark': '#111827', // almost black
        'text-light': '#6b7280', // softer gray
        'border-light': '#f3f4f6', // very soft gray

        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
      },
      fontSize: {
        base: '17px',
      },
      spacing: {
        'safe': 'max(1rem, env(safe-area-inset-left))',
      },
    },
  },
  plugins: [],
}
export default config
