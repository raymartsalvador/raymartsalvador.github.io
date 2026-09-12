import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
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
        className="absolute left-4 top-4 z-50 -translate-y-16 rounded bg-run px-4 py-2 font-medium text-paper focus:translate-y-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-run"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Work />
        <Testimonials />
        <About />
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
