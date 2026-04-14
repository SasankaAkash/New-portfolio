import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '../constants';

gsap.registerPlugin(ScrollTrigger);

function ExperienceCard({ item, index, isLeft }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, x: isLeft ? -60 : 60 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 82%',
        },
      }
    );
  }, [isLeft]);

  return (
    <div
      ref={cardRef}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        gap: '1.5rem',
        alignItems: 'flex-start',
        marginBottom: '3rem',
      }}
      className="timeline-row"
    >
      {/* Left card slot */}
      {isLeft ? (
        <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'right' }}>
          <CardContent item={item} right />
        </div>
      ) : <div />}

      {/* Centre dot */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}>
        <div style={{
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4f8eff, #a855f7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
          zIndex: 2,
          boxShadow: '0 0 20px rgba(79,142,255,0.4)',
          flexShrink: 0,
        }}>
          {item.icon}
        </div>
        <div style={{
          width: 2,
          height: 60,
          background: 'linear-gradient(180deg, rgba(79,142,255,0.5), transparent)',
          marginTop: 4,
        }} />
      </div>

      {/* Right card slot */}
      {!isLeft ? (
        <div className="glass-card" style={{ padding: '1.5rem' }}>
          <CardContent item={item} />
        </div>
      ) : <div />}
    </div>
  );
}

function CardContent({ item, right }) {
  return (
    <>
      <div style={{ marginBottom: '0.5rem' }}>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: item.type === 'education' ? '#a855f7' : '#4f8eff',
          padding: '0.2rem 0.6rem',
          background: item.type === 'education' ? 'rgba(168,85,247,0.1)' : 'rgba(79,142,255,0.1)',
          borderRadius: 50,
        }}>
          {item.type}
        </span>
      </div>
      <h3 style={{
        fontSize: '1.05rem',
        fontWeight: 700,
        color: '#f0f4ff',
        marginBottom: '0.25rem',
        textAlign: right ? 'right' : 'left',
      }}>
        {item.role}
      </h3>
      <p style={{
        color: '#4f8eff',
        fontWeight: 600,
        fontSize: '0.875rem',
        textAlign: right ? 'right' : 'left',
        marginBottom: '0.25rem',
      }}>
        {item.organization}
      </p>
      <p style={{
        color: '#8892b0',
        fontSize: '0.8rem',
        textAlign: right ? 'right' : 'left',
        marginBottom: '1rem',
      }}>
        {item.period}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {item.points.map((point, i) => (
          <li key={i} style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'flex-start',
            color: '#8892b0',
            fontSize: '0.85rem',
            lineHeight: 1.6,
            marginBottom: '0.4rem',
            flexDirection: right ? 'row-reverse' : 'row',
          }}>
            <span style={{ color: '#4f8eff', flexShrink: 0, marginTop: '0.35rem' }}>▸</span>
            {point}
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Experience() {
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" style={{ background: 'linear-gradient(180deg, #050816 0%, #090325 100%)' }}>
      <div className="max-container section-padding">
        {/* Heading */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="section-label">Career</p>
          <div className="section-divider" style={{ margin: '0.75rem auto 1.5rem' }} />
          <h2 className="heading-lg">
            Experience &amp; <span className="gradient-text">Timeline</span>
          </h2>
          <p style={{ color: '#8892b0', maxWidth: 480, margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.7 }}>
            My professional journey — from student to senior engineer.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}>
          {/* Central line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: 2,
            transform: 'translateX(-50%)',
            background: 'linear-gradient(180deg, #4f8eff 0%, #a855f7 50%, rgba(168,85,247,0.1) 100%)',
          }} className="timeline-center-line" />

          {experiences.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} isLeft={i % 2 === 0} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-row {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
          .timeline-center-line { display: none !important; }
          .timeline-row > div:nth-child(1):empty,
          .timeline-row > div:nth-child(3):empty { display: none; }
          .timeline-row > div:nth-child(2) { justify-content: flex-start !important; }
        }
      `}</style>
    </section>
  );
}
