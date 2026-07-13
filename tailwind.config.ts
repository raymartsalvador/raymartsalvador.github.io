import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        body: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: { 950: '#0B0F1A', 900: '#0F172A', 800: '#1E293B', 700: '#334155' },
        run: { DEFAULT: '#22C55E', 600: '#16A34A', 400: '#4ADE80' },
      },
    },
  },
  plugins: [],
};

export default config;
