import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { technologies } from '../constants';

// Asset image imports
import imgReact        from '../assets/react.png';
import imgNextJs       from '../assets/next js.jfif';
import imgReactNative  from '../assets/react native.png';
import imgJavaScript   from '../assets/java script.png';
import imgTailwind     from '../assets/tailwind css.png';
import imgHtml5        from '../assets/html 5.png';
import imgNodeJs       from '../assets/node js.png';
import imgExpressJs    from '../assets/express js.png';
import imgSpringBoot   from '../assets/springboot.png';
import imgFastApi      from '../assets/fast api.png';
import imgPython       from '../assets/python.jfif';
import imgJava         from '../assets/java.png';
import imgMongoDB      from '../assets/mongo db.png';
import imgMySQL        from '../assets/my sql.png';
import imgDocker       from '../assets/docker.png';
import imgPostman      from '../assets/postman.svg';
import imgVsCode       from '../assets/vscode.png';
import imgGit          from '../assets/gtihub.png';

const iconMap = {
  'react.png':        imgReact,
  'next js.jfif':     imgNextJs,
  'react native.png': imgReactNative,
  'java script.png':  imgJavaScript,
  'tailwind css.png': imgTailwind,
  'html 5.png':       imgHtml5,
  'node js.png':      imgNodeJs,
  'express js.png':   imgExpressJs,
  'springboot.png':   imgSpringBoot,
  'fast api.png':     imgFastApi,
  'python.jfif':      imgPython,
  'java.png':         imgJava,
  'mongo db.png':     imgMongoDB,
  'my sql.png':       imgMySQL,
  'docker.png':       imgDocker,
  'postman.svg':      imgPostman,
  'vscode.png':       imgVsCode,
  'gtihub.png':       imgGit,
};

gsap.registerPlugin(ScrollTrigger);

const categories = ['Frontend', 'Backend', 'Database', 'Tools'];

function TechCard({ tech, index }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '1.25rem',
        background: hovered
          ? `linear-gradient(135deg, rgba(79,142,255,0.12), rgba(168,85,247,0.08))`
          : 'rgba(17,17,50,0.5)',
        border: `1px solid ${hovered ? tech.color + '60' : 'rgba(79,142,255,0.12)'}`,
        borderRadius: '1rem',
        cursor: 'default',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px) scale(1.05)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? `0 10px 30px ${tech.color}25` : 'none',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: hovered
          ? `radial-gradient(circle, ${tech.color}30, transparent)`
          : 'rgba(255,255,255,0.04)',
        border: `2px solid ${hovered ? tech.color + '80' : 'rgba(255,255,255,0.08)'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        transform: hovered ? 'rotate(10deg)' : 'rotate(0deg)',
      }}>
        <img
          src={iconMap[tech.icon]}
          alt={tech.name}
          style={{ width: 34, height: 34, objectFit: 'contain' }}
        />
      </div>

      {/* Name */}
      <span style={{
        fontSize: '0.82rem',
        fontWeight: 600,
        color: hovered ? tech.color : '#8892b0',
        transition: 'color 0.3s ease',
        textAlign: 'center',
      }}>
        {tech.name}
      </span>
    </div>
  );
}

export default function TechStack() {
  const headingRef = useRef(null);
  const tabsRef = useRef(null);
  const gridRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const filtered = technologies.filter((t) => t.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' } }
      );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.querySelectorAll('[data-tech-card]'),
      { opacity: 0, y: 30, scale: 0.92 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.07, ease: 'power2.out' }
    );
  }, [activeCategory]);

  return (
    <section id="tech" style={{ background: '#050816' }}>
      <div className="max-container section-padding">
        {/* Heading */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="section-label">Skills</p>
          <div className="section-divider" style={{ margin: '0.75rem auto 1.5rem' }} />
          <h2 className="heading-lg">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p style={{ color: '#8892b0', maxWidth: 430, margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Technologies and tools I use to build production-grade applications.
          </p>
        </div>

        {/* Category tabs */}
        <div ref={tabsRef} style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1.4rem',
                borderRadius: 50,
                border: `1px solid ${activeCategory === cat ? '#4f8eff' : 'rgba(79,142,255,0.2)'}`,
                background: activeCategory === cat
                  ? 'linear-gradient(135deg, rgba(79,142,255,0.2), rgba(168,85,247,0.15))'
                  : 'transparent',
                color: activeCategory === cat ? '#f0f4ff' : '#8892b0',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
            gap: '1rem',
            maxWidth: 800,
            margin: '0 auto',
          }}
        >
          {filtered.map((tech, i) => (
            <div key={tech.name} data-tech-card>
              <TechCard tech={tech} index={i} />
            </div>
          ))}
        </div>

        {/* Floating orbs */}
        <div style={{ position: 'relative', height: 120, marginTop: '3rem', overflow: 'hidden', opacity: 0.4, pointerEvents: 'none' }}>
          {['#4f8eff', '#a855f7', '#22d3ee', '#f59e0b', '#ec4899'].map((color, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: 8 + i * 4,
              height: 8 + i * 4,
              borderRadius: '50%',
              background: color,
              left: `${10 + i * 20}%`,
              top: `${40 + (i % 2 === 0 ? -20 : 20)}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
              boxShadow: `0 0 12px ${color}`,
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
