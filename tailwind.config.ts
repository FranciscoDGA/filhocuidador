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
        // Cores do Briefing
        'brand-primary': '#4A7B9D', // azul-ardósia suave
        'brand-secondary': '#7A9E7E', // verde-salvia
        'brand-accent': '#C47B5A', // terracota suave
        'bg-base': '#FAFAF7', // branco-creme
        'text-base': '#2D3748', // cinza-chumbo
        'border-base': '#E8E8E0', // bordas e divisores

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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
