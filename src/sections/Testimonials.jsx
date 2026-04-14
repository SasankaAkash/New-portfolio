import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { testimonials } from '../constants';

gsap.registerPlugin(ScrollTrigger);

function StarRating({ count = 5 }) {
  return (
    <div style={{ display: 'flex', gap: '2px', marginBottom: '0.75rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#f59e0b', fontSize: '0.9rem' }}>★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '1.75rem',
        background: hovered
          ? 'rgba(17,17,50,0.9)'
          : 'rgba(17,17,50,0.6)',
        border: `1px solid ${hovered ? 'rgba(79,142,255,0.4)' : 'rgba(79,142,255,0.12)'}`,
        borderRadius: '1.25rem',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.35s ease',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 50px rgba(79,142,255,0.12)' : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Quote mark */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        right: '1.5rem',
        fontSize: '5rem',
        lineHeight: 1,
        color: 'rgba(79,142,255,0.08)',
        fontFamily: 'Georgia, serif',
        userSelect: 'none',
      }}>
        "
      </div>

      {/* Gradient top accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: `linear-gradient(90deg, #4f8eff, #a855f7)`,
        borderRadius: '1.25rem 1.25rem 0 0',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }} />

      {/* Stars */}
      <StarRating count={item.rating} />

      {/* Feedback text */}
      <p style={{
        color: '#ccd6f6',
        fontSize: '0.88rem',
        lineHeight: 1.75,
        marginBottom: '1.5rem',
        fontStyle: 'italic',
      }}>
        "{item.feedback}"
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {/* Avatar */}
        <div style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: `linear-gradient(135deg, #4f8eff, #a855f7)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: '0.9rem',
          color: '#fff',
          flexShrink: 0,
          boxShadow: '0 0 12px rgba(79,142,255,0.3)',
        }}>
          {item.avatar}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f0f4ff' }}>{item.name}</div>
          <div style={{ fontSize: '0.78rem', color: '#8892b0' }}>{item.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' } }
      );

      const cards = gridRef.current?.querySelectorAll('[data-t-card]');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 75%' },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" style={{
      background: 'linear-gradient(180deg, #090325 0%, #050816 100%)',
    }}>
      <div className="max-container section-padding">
        {/* Heading */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-label">Social Proof</p>
          <div className="section-divider" style={{ margin: '0.75rem auto 1.5rem' }} />
          <h2 className="heading-lg">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p style={{ color: '#8892b0', maxWidth: 430, margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Honest feedback from the teams and founders I've worked with.
          </p>
        </div>

        {/* 3-column grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
          className="testimonials-grid"
        >
          {testimonials.map((item, i) => (
            <div key={item.id} data-t-card>
              <TestimonialCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
