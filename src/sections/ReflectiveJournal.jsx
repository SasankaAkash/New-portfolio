import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const journalEntries = [
  {
    id: 1,
    icon: '✉️',
    title: 'Module 1 — Business Writing',
    color: '#4f8eff',
    content:
      'This module reshaped how I think about written communication in a professional context. I learned the difference between formal and informal letters — their structure, tone, salutation styles, and full-block layout. Writing complaint letters and formal responses was particularly challenging at first; I had to shift from casual writing habits to purposeful, concise phrasing where every sentence serves a function. The email etiquette guidelines — crafting clear subject lines, maintaining professional tone, and structuring messages for busy readers — are skills I now use daily, especially when communicating with internship supervisors and academic staff.',
  },
  {
    id: 2,
    icon: '🎤',
    title: 'Module 2 — Presentations & Public Speaking',
    color: '#a855f7',
    content:
      'Before this module, I relied on slides to do the talking. PPW taught me that effective presentations follow a deliberate structure: a strong introduction, a body that takes up roughly 80% of the time, and a concise conclusion. I practised controlling myself (nerves and pace), my materials (slide design and signposting language), and my audience (engagement and eye contact). Learning about non-verbal communication was a turning point — I became aware of how posture, gestures, and transitions between ideas either build or destroy audience trust. Mock presentation sessions made me significantly more confident in academic and professional settings.',
  },
  {
    id: 3,
    icon: '📞',
    title: 'Module 3 — Telephone & Customer Communication',
    color: '#10a37f',
    content:
      'This was an unexpected but very practical module. I learned that telephone communication is more nuanced than it appears — you must read cues from a caller\'s word choice, emotional state, and tone, all without visual feedback. The concept of balancing informational needs (what the caller wants to know) with emotional needs (how they feel) was insightful. I practised active listening techniques and tone management, including how to remain professional and calm even with difficult or frustrated callers. These skills proved directly useful during my internship when coordinating with clients over the phone.',
  },
  {
    id: 4,
    icon: '💼',
    title: 'Module 4 — Interview Preparation',
    color: '#f59e0b',
    content:
      'The interview preparation module was one of the most immediately impactful parts of PPW. I explored the different types of internship interviews and practised the STAR method (Situation, Task, Action, Result) for answering behavioural questions confidently and concisely. A dedicated session by a Senior Academic Fellow — "Acing Your Internship Interview" — gave real-world insight into what recruiters look for. The mock interview practice was uncomfortable at first but invaluable: I received feedback on my body language, eye contact, and the clarity of my answers. I credit this module for helping me secure my 6-month internship.',
  },
  {
    id: 5,
    icon: '📄',
    title: 'Module 5 — Report Writing',
    color: '#ec4899',
    content:
      'Report writing was covered through two comprehensive sources. The first taught a 5-chapter structure: defining an excellent report (clarity, purpose, reader focus), planning with audience analysis, organising with logical flow, presentation standards (minimum 12pt sans-serif font, consistent style, page numbers), and finishing with thorough proofreading. The second source — "A Guide to Good Business Communication" — covered everything from grammar essentials and punctuation to advanced writing scenarios like proposals, memos, and business letters. These modules together transformed my academic and technical writing, making it more reader-focused and structurally sound.',
  },
  {
    id: 6,
    icon: '📖',
    title: 'Module 6 — Language & Grammar',
    color: '#06b6d4',
    content:
      'This module refined the smallest but most important details of professional communication. I learned to adapt my language register based on audience — something I now do instinctively when writing emails vs. technical documentation. Common vocabulary pitfalls were eye-opening: preposition usage like "differ from vs. differ with" and "among vs. between" are mistakes I used to make without realising. Studying spelling lists of commonly misspelled words (liaison, supersede, tariff) and practising writing coherent paragraphs with strong topic sentences gave me a sharper editorial eye — a skill that directly improves my code documentation and project READMEs.',
  },
];

function JournalCard({ entry }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setExpanded(!expanded)}
      style={{
        padding: '1.75rem',
        background: hovered ? 'rgba(17,17,50,0.95)' : 'rgba(17,17,50,0.6)',
        border: `1px solid ${hovered ? entry.color + '55' : 'rgba(79,142,255,0.12)'}`,
        borderRadius: '1.25rem',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.35s ease',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? `0 16px 40px ${entry.color}18` : 'none',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top colour accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${entry.color}, transparent)`,
        borderRadius: '1.25rem 1.25rem 0 0',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{
          width: 50, height: 50,
          borderRadius: '0.875rem',
          background: `${entry.color}20`,
          border: `1px solid ${entry.color}40`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.5rem', flexShrink: 0,
        }}>
          {entry.icon}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f0f4ff', marginBottom: '0.25rem', lineHeight: 1.3 }}>
            {entry.title}
          </h3>
          <span style={{
            fontSize: '0.7rem', fontWeight: 600, color: entry.color,
            background: `${entry.color}15`, border: `1px solid ${entry.color}30`,
            borderRadius: 50, padding: '0.15rem 0.6rem', letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>
            PPW Reflection
          </span>
        </div>
        {/* Expand arrow */}
        <div style={{
          color: '#8892b0', fontSize: '0.8rem',
          transition: 'transform 0.3s ease',
          transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
        }}>▼</div>
      </div>

      {/* Content — clamped by default, expanded on click */}
      <p style={{
        color: '#8892b0', fontSize: '0.88rem', lineHeight: 1.8,
        display: '-webkit-box',
        WebkitLineClamp: expanded ? 'unset' : 3,
        WebkitBoxOrient: 'vertical',
        overflow: expanded ? 'visible' : 'hidden',
        transition: 'all 0.3s ease',
      }}>
        {entry.content}
      </p>

      {!expanded && (
        <span style={{ fontSize: '0.78rem', color: entry.color, marginTop: '0.5rem', display: 'block' }}>
          Click to read more →
        </span>
      )}
    </div>
  );
}

export default function ReflectiveJournal() {
  const headingRef = useRef(null);
  const quoteRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' }
        }
      );
      gsap.fromTo(quoteRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.8, delay: 0.2,
          scrollTrigger: { trigger: quoteRef.current, start: 'top 85%' }
        }
      );
      const cards = gridRef.current?.querySelectorAll('[data-journal-card]');
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 78%' }
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="journal" style={{ background: 'linear-gradient(180deg, #050816 0%, #090325 100%)' }}>
      <div className="max-container section-padding">

        {/* Heading */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p className="section-label">PPW Module</p>
          <div className="section-divider" style={{ margin: '0.75rem auto 1.5rem' }} />
          <h2 className="heading-lg">
            Reflective <span className="gradient-text">Journal</span>
          </h2>
          <p style={{ color: '#8892b0', maxWidth: 520, margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Personal reflections on key learnings from the Professional &amp; Personal Development Workshop —
            lessons that have shaped my professional identity.
          </p>
        </div>
        {/* Journal cards grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
          }}
          className="journal-grid"
        >
          {journalEntries.map((entry) => (
            <div key={entry.id} data-journal-card>
              <JournalCard entry={entry} />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .journal-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .journal-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
