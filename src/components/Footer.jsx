import { socialLinks } from '../constants';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(79,142,255,0.12)',
      padding: '2.5rem 2rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Social links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#8892b0',
                textDecoration: 'none',
                fontSize: '0.9rem',
                padding: '0.4rem 1rem',
                border: '1px solid rgba(79,142,255,0.2)',
                borderRadius: 50,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#4f8eff';
                e.currentTarget.style.borderColor = 'rgba(79,142,255,0.5)';
                e.currentTarget.style.background = 'rgba(79,142,255,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#8892b0';
                e.currentTarget.style.borderColor = 'rgba(79,142,255,0.2)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <span>{s.icon}</span> {s.name}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{
          width: 60,
          height: 2,
          background: 'linear-gradient(90deg, #4f8eff, #a855f7)',
          margin: '0 auto 1.5rem',
          borderRadius: 2,
        }} />

        <p style={{ color: '#8892b0', fontSize: '0.85rem' }}>
          Designed & built by{' '}
          <span className="gradient-text" style={{ fontWeight: 600 }}>Sasanka Akash</span>
        </p>
        <p style={{ color: '#4a5568', fontSize: '0.8rem', marginTop: '0.4rem' }}>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
