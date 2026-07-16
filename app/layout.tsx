import type { Metadata } from 'next';
import { Archivo, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const description =
  'Raymart Salvador — Full-stack developer. I build and ship production web apps end-to-end, from enterprise systems at an 8,000-employee manufacturer to independent SaaS products like Certify+ and Peyg.';

export const metadata: Metadata = {
  metadataBase: new URL('https://raymartsalvador.github.io'),
  title: 'Raymart Salvador — Full-Stack Developer',
  description,
  authors: [{ name: 'Raymart Salvador' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/rm-monogram.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    title: 'Raymart Salvador — Full-Stack Developer',
    description:
      'I build and ship production web apps end-to-end — enterprise systems and independent SaaS products.',
    url: 'https://raymartsalvador.github.io',
    images: [
      {
        url: '/assets/images/og.png',
        width: 1200,
        height: 630,
        alt: 'Raymart Salvador — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raymart Salvador — Full-Stack Developer',
    description:
      'I build and ship production web apps end-to-end — enterprise systems and independent SaaS products.',
    images: ['/assets/images/og.png'],
  },
};

// Person schema for rich search results.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Raymart Salvador',
  url: 'https://raymartsalvador.github.io',
  email: 'mailto:raymartgsalvador@gmail.com',
  jobTitle: 'Full-Stack Developer',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Biñan',
    addressRegion: 'Laguna',
    addressCountry: 'PH',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Polytechnic University of the Philippines',
  },
  sameAs: [
    'https://github.com/raymartsalvador',
    'https://linkedin.com/in/raymartsalvador',
  ],
};

// Runs before paint to avoid a light/dark flash on load.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');if(s==='light')document.documentElement.classList.remove('dark');else document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${archivo.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-white text-ink-900 dark:bg-ink-950 dark:text-slate-100 font-body antialiased selection:bg-run/30">
        {children}
      </body>
    </html>
  );
}
