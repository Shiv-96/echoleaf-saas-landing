/**
 * App
 * Composes the landing page sections in reading order.
 * The skip link lets keyboard users jump past the header straight to the content.
 */
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import LogoStrip from './components/sections/LogoStrip.jsx';
import Features from './components/sections/Features.jsx';
import HowItWorks from './components/sections/HowItWorks.jsx';
import Pricing from './components/sections/Pricing.jsx';
import Testimonials from './components/sections/Testimonials.jsx';
import Faq from './components/sections/Faq.jsx';
import FinalCta from './components/sections/FinalCta.jsx';
import Signup from './components/sections/Signup.jsx';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-control bg-primary px-4 py-2 font-semibold text-on-primary focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <LogoStrip />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Faq />
        <FinalCta />
        <Signup />
      </main>

      <Footer />
    </>
  );
}
