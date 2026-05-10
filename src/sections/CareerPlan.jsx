import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const shortTermGoals = [
  {
    period: '0 – 6 Months',
    icon: '🚀',
    color: '#4f8eff',
    title: 'Land a Junior / Associate Role',
    items: [
      'Secure a full-time Associate or Junior Software Engineer position in a product-based company',
      'Contribute to real production codebases using MERN stack or Spring Boot',
      'Strengthen data structures & algorithms skills through daily LeetCode practice',
      'Build 2 new portfolio projects with AI/ML integration',
    ],
  },
  {
    period: '6 – 18 Months',
    icon: '⚡',
    color: '#a855f7',
    title: 'Grow as a Full-Stack Engineer',
    items: [
      'Earn AWS Cloud Practitioner or equivalent cloud certification',
      'Lead at least one feature end-to-end, from design to deployment',
      'Deepen knowledge of system design and microservices at scale',
      'Contribute to or start an open-source project',
    ],
  },
  {
    period: '18 – 36 Months',
    icon: '🧠',
    color: '#10a37f',
    title: 'Specialise in AI/ML Engineering',
    items: [
      'Complete AI/ML Engineer Stage 3 and advanced deep learning certifications',
      'Publish findings from current SLIIT AI/ML research',
      'Build and deploy at least one AI-powered SaaS product',
      'Mentor junior developers and lead technical sessions',
    ],
  },
];

const longTermVision = [
  { year: '2027', milestone: 'Mid-Level Software Engineer at a product company', icon: '💼' },
  { year: '2028', milestone: 'AI/ML Engineer or Full-Stack Tech Lead', icon: '🤖' },
  { year: '2030', milestone: 'Senior Engineer or Co-founder of a tech startup', icon: '🌟' },
];

const skillGaps = [
  { skill: 'System Design',        priority: 'High',   color: '#ef4444' },
  { skill: 'Cloud (AWS / GCP)',     priority: 'High',   color: '#ef4444' },
  { skill: 'Deep Learning (PyTorch)', priority: 'High', color: '#ef4444' },
  { skill: 'TypeScript',            priority: 'Medium', color: '#f59e0b' },
  { skill: 'CI/CD Pipelines',       priority: 'Medium', color: '#f59e0b' },
  { skill: 'GraphQL',               priority: 'Low',    color: '#22c55e' },
];

export default function CareerPlan() {
  const headingRef  = useRef(null);
  const cardsRef    = useRef(null);
  const timelineRef = useRef(null);
  const gapsRef     = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' } }
      );
      const cards = cardsRef.current?.querySelectorAll('[data-plan-card]');
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 78%' } }
        );
      }
      const dots = timelineRef.current?.querySelectorAll('[data-timeline-dot]');
      if (dots) {
        gsap.fromTo(dots,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2, ease: 'back.out(1.7)',
            scrollTrigger: { trigger: timelineRef.current, start: 'top 82%' } }
        );
      }
      gsap.fromTo(gapsRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.7,
          scrollTrigger: { trigger: gapsRef.current, start: 'top 85%' } }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="career" style={{ background: 'linear-gradient(180deg, #090325 0%, #050816 100%)' }}>
      <div className="max-container section-padding">

        {/* Heading */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-label">Future Direction</p>
          <div className="section-divider" style={{ margin: '0.75rem auto 1.5rem' }} />
          <h2 className="heading-lg">
            Career Development <span className="gradient-text">Plan</span>
          </h2>
          <p style={{ color: '#8892b0', maxWidth: 500, margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.7 }}>
            A structured roadmap from IT undergraduate to AI/ML-empowered engineer —
            broken into actionable short-term goals and a long-term vision.
          </p>
        </div>

        {/* Short-term goal cards */}
        <div
          ref={cardsRef}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}
          className="plan-grid"
        >
          {shortTermGoals.map((phase) => (
            <div
              key={phase.period}
              data-plan-card
              style={{
                padding: '2rem',
                background: 'rgba(17,17,50,0.6)',
                border: `1px solid ${phase.color}30`,
                borderRadius: '1.25rem',
                backdropFilter: 'blur(16px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top gradient bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${phase.color}, transparent)`,
                borderRadius: '1.25rem 1.25rem 0 0',
              }} />

              {/* Period badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.3rem 0.8rem',
                background: `${phase.color}18`,
                border: `1px solid ${phase.color}35`,
                borderRadius: 50, fontSize: '0.72rem', fontWeight: 700,
                color: phase.color, letterSpacing: '0.05em', textTransform: 'uppercase',
                marginBottom: '1rem',
              }}>
                🗓️ {phase.period}
              </div>

              {/* Icon + Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '0.875rem',
                  background: `${phase.color}20`, border: `1px solid ${phase.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem',
                }}>
                  {phase.icon}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f4ff', lineHeight: 1.3 }}>
                  {phase.title}
                </h3>
              </div>

              {/* Goal list */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {phase.items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <span style={{ color: phase.color, fontSize: '0.9rem', marginTop: '0.15rem', flexShrink: 0 }}>✓</span>
                    <span style={{ color: '#8892b0', fontSize: '0.84rem', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Long-term Vision Timeline */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{
            textAlign: 'center', fontSize: '1.3rem', fontWeight: 700,
            color: '#f0f4ff', marginBottom: '2.5rem',
          }}>
            Long-Term <span className="gradient-text">Vision</span>
          </h3>

          <div
            ref={timelineRef}
            style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 0, position: 'relative' }}
            className="vision-timeline"
          >
            {longTermVision.map((item, i) => (
              <div key={item.year} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                {/* Node */}
                <div data-timeline-dot style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 'none' }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(79,142,255,0.2), rgba(168,85,247,0.15))',
                    border: '2px solid rgba(79,142,255,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.6rem', boxShadow: '0 0 20px rgba(79,142,255,0.15)',
                  }}>
                    {item.icon}
                  </div>
                  <div style={{ fontWeight: 800, color: '#4f8eff', fontSize: '1rem', marginTop: '0.75rem' }}>
                    {item.year}
                  </div>
                  <div style={{
                    color: '#ccd6f6', fontSize: '0.82rem', textAlign: 'center',
                    maxWidth: 160, lineHeight: 1.5, marginTop: '0.4rem',
                  }}>
                    {item.milestone}
                  </div>
                </div>
                {/* Connector line (not after last) */}
                {i < longTermVision.length - 1 && (
                  <div style={{
                    flex: 1, height: 2,
                    background: 'linear-gradient(90deg, rgba(79,142,255,0.4), rgba(168,85,247,0.4))',
                    marginBottom: '3.5rem',
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skill Gap Analysis */}
        <div ref={gapsRef} style={{
          padding: '2rem',
          background: 'rgba(17,17,50,0.5)',
          border: '1px solid rgba(79,142,255,0.12)',
          borderRadius: '1.25rem',
          backdropFilter: 'blur(16px)',
        }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f0f4ff', marginBottom: '1.5rem' }}>
            📊 Skills to Develop (Gap Analysis)
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {skillGaps.map((s) => (
              <div key={s.skill} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.45rem 1rem',
                background: `${s.color}12`,
                border: `1px solid ${s.color}40`,
                borderRadius: 50,
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: s.color, flexShrink: 0,
                }} />
                <span style={{ fontSize: '0.83rem', fontWeight: 600, color: '#ccd6f6' }}>{s.skill}</span>
                <span style={{ fontSize: '0.7rem', color: s.color, fontWeight: 700 }}>{s.priority}</span>
              </div>
            ))}
          </div>
          <p style={{ color: '#8892b0', fontSize: '0.82rem', marginTop: '1rem', lineHeight: 1.6 }}>
            Identifying skill gaps is the first step to filling them. These are areas I am actively working on through
            personal projects, certifications, and daily practice.
          </p>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .plan-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .plan-grid { grid-template-columns: 1fr !important; }
          .vision-timeline { flex-direction: column !important; align-items: center !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
