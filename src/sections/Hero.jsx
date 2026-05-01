import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import HeroCanvas from '../components/canvas/HeroCanvas';

export default function Hero() {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered text reveal
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.3 }
      );

      // Split heading into characters for stagger
      const headingEl = headingRef.current;
      if (headingEl) {
        const words = headingEl.querySelectorAll('.word');
        gsap.fromTo(
          words,
          { opacity: 0, y: 60, rotationX: -45 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power4.out',
            delay: 0.5,
          }
        );
      }

      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.2 }
      );

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.7)', delay: 1.6 }
      );


    });

    return () => ctx.revert();
  }, []);

  const scrollToShowcase = () => {
    document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(79,142,255,0.15) 0%, transparent 70%), #050816',
      }}
    >
      {/* Background gradient orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79,142,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="max-container section-padding" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          minHeight: '85vh',
        }}
          className="hero-grid"
        >
          {/* Left — Text Content */}
          <div style={{ paddingTop: '5rem' }}>
            {/* Available badge */}
            <div ref={badgeRef} style={{ marginBottom: '1.5rem', opacity: 0 }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                background: 'rgba(79,142,255,0.1)',
                border: '1px solid rgba(79,142,255,0.3)',
                borderRadius: 50,
                fontSize: '0.82rem',
                fontWeight: 500,
                color: '#4f8eff',
              }}>
                <span style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#22c55e',
                  animation: 'pulse-glow 2s ease-in-out infinite',
                  boxShadow: '0 0 6px #22c55e',
                }} />
                Available for work
              </span>
            </div>

            {/* Main heading */}
            <div ref={headingRef} className="heading-xl" style={{ marginBottom: '1rem', perspective: 600 }}>
              <div style={{ overflow: 'hidden' }}>
                <span className="word" style={{ display: 'inline-block', marginRight: '0.3em', color: '#f0f4ff' }}>Hi,</span>
                <span className="word" style={{ display: 'inline-block', marginRight: '0.3em', color: '#f0f4ff' }}>I'm</span>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <span className="word gradient-text" style={{ display: 'inline-block' }}>Sasanka Akash</span>
              </div>
            </div>

            {/* Role */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h2 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                fontWeight: 600,
                color: '#8892b0',
              }}>
                Full Stack Developer &{' '}
                <span style={{ color: '#a855f7' }}>AI/ML Enthusiast</span>
              </h2>
            </div>

            {/* Subtitle */}
            <p ref={subRef} style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: '#8892b0',
              lineHeight: 1.8,
              maxWidth: 480,
              marginBottom: '2.5rem',
              opacity: 0,
            }}>
              IT undergraduate with 6 months of hands-on internship experience in full-stack
              development using MERN stack, React Native, Spring Boot & Next.js.
              Certified AI/ML Engineer (SLIIT) currently conducting research in the field.
            </p>

            {/* CTA Row */}
            <div ref={ctaRef} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', opacity: 0 }}>
              <button className="btn-primary" onClick={scrollToShowcase}>
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <a href="#contact" className="btn-outline" onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Get In Touch
              </a>
            </div>

            {/* Stats row */}
            <div style={{
              display: 'flex',
              gap: '2.5rem',
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(79,142,255,0.12)',
            }}>
              {[
                { value: '6mo', label: 'Internship Exp.' },
                { value: '4+', label: 'Projects' },
                { value: '2+', label: 'Certifications' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#4f8eff', lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#8892b0', marginTop: '0.25rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Three.js Shader Animation */}
          <div style={{ height: '600px', position: 'relative' }} className="hero-canvas">
            <HeroCanvas />
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#8892b0',
          fontSize: '0.75rem',
          cursor: 'pointer',
        }} onClick={scrollToShowcase}>
          <span>Scroll down</span>
          <div style={{
            width: 24,
            height: 40,
            border: '2px solid rgba(79,142,255,0.4)',
            borderRadius: 12,
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 6,
          }}>
            <div style={{
              width: 4,
              height: 10,
              borderRadius: 2,
              background: '#4f8eff',
              animation: 'float 1.5s ease-in-out infinite',
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-canvas { height: 380px !important; order: -1; }
        }
      `}</style>
    </section>
  );
}
