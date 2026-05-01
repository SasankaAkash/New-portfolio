import { Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Showcase from './sections/Showcase';
import Experience from './sections/Experience';
import TechStack from './sections/TechStack';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

/* ── Loading fallback ───────────────────────────────────────── */
function PageLoader() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#050816',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <div style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        border: '3px solid rgba(79,142,255,0.2)',
        borderTop: '3px solid #4f8eff',
        animation: 'spin-slow 1s linear infinite',
      }} />
      <p style={{ color: '#8892b0', fontSize: '0.9rem' }}>Loading portfolio…</p>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ background: '#050816', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Hero />
          <Showcase />
          <Experience />
          <TechStack />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
