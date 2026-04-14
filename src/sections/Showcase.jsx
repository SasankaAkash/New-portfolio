import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../constants';

gsap.registerPlugin(ScrollTrigger);

/* ── Project Card ───────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Tilt on mouse move
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -8;
    const rotY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    setHovered(false);
  };

  const isLarge = project.size === 'large';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      style={{
        gridColumn: isLarge ? 'span 2' : 'span 1',
        background: 'rgba(17,17,50,0.7)',
        border: `1px solid ${hovered ? 'rgba(79,142,255,0.5)' : 'rgba(79,142,255,0.15)'}`,
        borderRadius: '1.25rem',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? '0 20px 60px rgba(79,142,255,0.15)' : 'none',
        backdropFilter: 'blur(12px)',
        position: 'relative',
      }}
    >
      {/* Project image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: isLarge ? 260 : 190 }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
          }}
          loading="lazy"
        />
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: hovered
            ? 'linear-gradient(to bottom, rgba(5,8,22,0.2), rgba(5,8,22,0.8))'
            : 'linear-gradient(to bottom, transparent 40%, rgba(5,8,22,0.9))',
          transition: 'background 0.3s ease',
        }} />

        {/* Featured badge */}
        {project.featured && (
          <div style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.25rem 0.75rem',
            background: 'linear-gradient(135deg, #4f8eff, #a855f7)',
            borderRadius: 50,
            fontSize: '0.7rem',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '0.05em',
          }}>
            FEATURED
          </div>
        )}
      </div>

      {/* Card content */}
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f0f4ff', marginBottom: '0.5rem' }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.87rem', color: '#8892b0', lineHeight: 1.6, marginBottom: '1rem' }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tech-badge">{tag}</span>
          ))}
        </div>

        {/* Action links */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '0.8rem', padding: '0.5rem 1.1rem' }}
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: '0.8rem', padding: '0.45rem 1.1rem' }}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Showcase Section ───────────────────────────────────────── */
export default function Showcase() {
  const headingRef = useRef(null);
  const gridRef = useRef(null);

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

      const cards = gridRef.current?.querySelectorAll('[data-card]');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 75%' },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="showcase" style={{ background: '#050816' }}>
      <div className="max-container section-padding">
        {/* Section heading */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-label">Portfolio</p>
          <div className="section-divider" style={{ margin: '0.75rem auto 1.5rem' }} />
          <h2 className="heading-lg">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: '#8892b0', maxWidth: 500, margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.7 }}>
            A selection of real-world applications I've designed, built, and shipped.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
          }}
          className="bento-grid"
        >
          {projects.map((project, i) => (
            <div key={project.id} data-card>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .bento-grid { grid-template-columns: 1fr !important; }
          .bento-grid > div > div { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
