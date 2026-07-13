import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Stack from '@/components/Stack';
import Speaking from '@/components/Speaking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-run focus:text-ink-950 focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Stack />
        <Speaking />
        <Contact />
      </main>

      <Footer />
      <RevealObserver />
    </>
  );
}
