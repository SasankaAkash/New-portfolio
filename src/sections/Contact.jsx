import { useRef, useEffect, useState, Suspense, lazy } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { socialLinks } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const DesktopCanvas = lazy(() => import('../components/canvas/DesktopCanvas'));

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, delay: 0.2,
          scrollTrigger: { trigger: formRef.current, start: 'top 80%' } }
      );
    });
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ background: '#050816' }}>
      <div className="max-container section-padding">
        {/* Heading */}
        <div ref={headingRef} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-label">Say Hello</p>
          <div className="section-divider" style={{ margin: '0.75rem auto 1.5rem' }} />
          <h2 className="heading-lg">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p style={{ color: '#8892b0', maxWidth: 430, margin: '1rem auto 0', fontSize: '0.95rem', lineHeight: 1.7 }}>
            Have a project in mind? Let's build something great together.
          </p>
        </div>

        {/* 2-col layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
        }}
          className="contact-grid"
        >
          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Info card */}
            <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '0.5rem' }}>
              <h3 style={{ fontWeight: 700, color: '#f0f4ff', marginBottom: '0.5rem' }}>Let's work together</h3>
              <p style={{ color: '#8892b0', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                I'm currently open to new opportunities — freelance, contract, or full-time roles. Drop me a message and I'll get back to you within 24 hours.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: '#8892b0',
                      textDecoration: 'none',
                      fontSize: '0.82rem',
                      padding: '0.35rem 0.85rem',
                      border: '1px solid rgba(79,142,255,0.2)',
                      borderRadius: 50,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#4f8eff';
                      e.currentTarget.style.borderColor = 'rgba(79,142,255,0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#8892b0';
                      e.currentTarget.style.borderColor = 'rgba(79,142,255,0.2)';
                    }}
                  >
                    {s.icon} {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#8892b0', marginBottom: '0.4rem' }}>
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#8892b0', marginBottom: '0.4rem' }}>
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            {/* Message */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#8892b0', marginBottom: '0.4rem' }}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
                className="form-input"
                style={{ resize: 'vertical', minHeight: 130 }}
              />
            </div>

            {/* Submit */}
            <button
              id="contact-submit"
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
              {status !== 'sending' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                </svg>
              )}
            </button>

            {/* Feedback */}
            {status === 'success' && (
              <div style={{
                padding: '0.75rem 1rem',
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: '0.75rem',
                color: '#22c55e',
                fontSize: '0.875rem',
                textAlign: 'center',
              }}>
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div style={{
                padding: '0.75rem 1rem',
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: '0.75rem',
                color: '#ef4444',
                fontSize: '0.875rem',
                textAlign: 'center',
              }}>
                ❌ Something went wrong. Please try again or email me directly.
              </div>
            )}
          </form>

          {/* 3D Canvas */}
          <div style={{ height: 480 }} className="contact-canvas">
            <Suspense fallback={
              <div style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#8892b0',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    border: '3px solid rgba(79,142,255,0.3)',
                    borderTop: '3px solid #4f8eff',
                    borderRadius: '50%',
                    animation: 'spin-slow 1s linear infinite',
                    margin: '0 auto 0.75rem',
                  }} />
                  Loading 3D model…
                </div>
              </div>
            }>
              <DesktopCanvas />
            </Suspense>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-canvas { height: 300px !important; order: -1; }
        }
      `}</style>
    </section>
  );
}
