import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { certifications } from '../constants';

gsap.registerPlugin(ScrollTrigger);

function CertCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '2rem',
        background: hovered ? 'rgba(17,17,50,0.95)' : 'rgba(17,17,50,0.6)',
        border: `1px solid ${hovered ? item.color + '66' : 'rgba(79,142,255,0.12)'}`,
        borderRadius: '1.25rem',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.35s ease',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: hovered ? `0 20px 50px ${item.color}22` : 'none',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      {/* Gradient top accent */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 3,
        background: `linear-gradient(90deg, ${item.color}, #a855f7)`,
        borderRadius: '1.25rem 1.25rem 0 0',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }} />

      {/* Glow blob */}
      <div style={{
        position: 'absolute',
        top: '-30%', right: '-20%',
        width: 160, height: 160,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${item.color}18 0%, transparent 70%)`,
        pointerEvents: 'none',
        transition: 'opacity 0.35s ease',
        opacity: hovered ? 1 : 0.4,
      }} />

      {/* Icon badge */}
      <div style={{
        width: 58,
        height: 58,
        borderRadius: '1rem',
        background: `linear-gradient(135deg, ${item.color}33, ${item.color}11)`,
        border: `1px solid ${item.color}44`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.7rem',
        marginBottom: '1.25rem',
        boxShadow: hovered ? `0 0 20px ${item.color}44` : 'none',
        transition: 'box-shadow 0.35s ease',
      }}>
        {item.icon}
      </div>

      {/* Category chip */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.3rem',
        padding: '0.25rem 0.75rem',
        background: `${item.color}18`,
        border: `1px solid ${item.color}33`,
        borderRadius: 50,
        fontSize: '0.7rem',
        fontWeight: 600,
        color: item.color,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        marginBottom: '0.9rem',
      }}>
        {item.category}
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '1.05rem',
        fontWeight: 700,
        color: '#f0f4ff',
        marginBottom: '0.5rem',
        lineHeight: 1.3,
      }}>
        {item.title}
      </h3>

      {/* Issuer */}
      <p style={{
        fontSize: '0.82rem',
        color: '#8892b0',
        lineHeight: 1.5,
        marginBottom: '1.25rem',
      }}>
        {item.issuer}
      </p>

      {/* Footer row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(79,142,255,0.1)',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.78rem',
          color: '#8892b0',
        }}>
          <span>📅</span> {item.date}
        </div>

        <a
          href={item.credential}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            fontSize: '0.78rem',
            fontWeight: 600,
            color: hovered ? item.color : '#4f8eff',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onClick={(e) => item.credential === '#' && e.preventDefault()}
        >
          View Credential
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Certifications() {
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' } }
      );

      const cards = gridRef.current?.querySelectorAll('[data-cert-card]');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.6, stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 78%' },
          }
        );
      }

      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7,
          scrollTrigger: { trigger: statsRef.current, start: 'top 85%' } }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      style={{ background: 'linear-gradient(180deg, #090325 0%, #050816 100%)' }}
    >
      <div className="max-container section-padding">

        {/* Heading */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-label">Credentials</p>
          <div className="section-divider" style={{ margin: '0.75rem auto 1.5rem' }} />
          <h2 className="heading-lg">
            Certifications &{' '}
            <span className="gradient-text">Licenses</span>
          </h2>
          <p style={{ color: '#8892b0', maxWidth: 460, margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Verified credentials from leading institutions, validating expertise across development and AI/ML domains.
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
          className="certs-grid"
        >
          {certifications.map((item) => (
            <div key={item.id} data-cert-card>
              <CertCard item={item} />
            </div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div
          ref={statsRef}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
            padding: '2rem',
            background: 'rgba(79,142,255,0.04)',
            border: '1px solid rgba(79,142,255,0.12)',
            borderRadius: '1rem',
            flexWrap: 'wrap',
          }}
        >
          {[
            { value: certifications.length + '', label: 'Certifications', icon: '🏅' },
            { value: '5+',  label: 'Platforms',       icon: '🏫' },
            { value: '2026', label: 'Latest Cert',    icon: '📅' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.6rem', marginBottom: '0.25rem' }}>{s.icon}</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#4f8eff', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.78rem', color: '#8892b0', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .certs-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .certs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
