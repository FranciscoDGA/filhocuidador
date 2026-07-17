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
        // Brand colors - Refined
        'brand-primary': '#2563eb', // azul vibrante
        'brand-secondary': '#10b981', // verde esmeralda
        'brand-accent': '#f59e0b', // âmbar ouro
        'brand-dark': '#1f2937', // charcoal

        // Gradients - complementary colors
        'gradient-start': '#667eea',
        'gradient-end': '#764ba2',

        // Neutrals
        'cream': '#f9fafb', // branco puro
        'text-dark': '#1f2937', // charcoal
        'text-light': '#6b7280', // cinza médio
        'border-light': '#e5e7eb',

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
