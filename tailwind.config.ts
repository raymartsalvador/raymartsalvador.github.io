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
        heading: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#12100E',
          900: '#1C1917',
          800: '#292524',
          700: '#44403C',
        },
        paper: {
          DEFAULT: '#F4EFE6',
          100: '#FAF7F2',
          200: '#EBE4D8',
        },
        // DEFAULT AA on paper. soft AA on ink (~7:1). 400 decorative only.
        run: {
          DEFAULT: '#8F3D14',
          600: '#6F2E0E',
          400: '#C45C26',
          soft: '#E8A878',
        },
      },
      maxWidth: {
        measure: '38rem',
      },
      letterSpacing: {
        label: '0.12em',
      },
    },
  },
  plugins: [],
};

export default config;
