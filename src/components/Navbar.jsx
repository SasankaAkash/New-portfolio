import { useEffect, useRef, useState } from "react";
import { navLinks } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Track scroll for glassmorphism + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Determine active section
      const sections = navLinks
        .map((l) => document.getElementById(l.id))
        .filter(Boolean);
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1rem 2rem",
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(5, 8, 22, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(79,142,255,0.15)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundImage: "url('assets/logo.png')",
              backgroundSize: "cover",
              backgroundPosition: "center", 
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
           
          </div>
          <span
            style={{
              color: "#f0f4ff",
              fontWeight: 700,
              fontSize: "1.1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Sasanka<span style={{ color: "#4f8eff" }}> Akash</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            gap: "0.25rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.5rem 1rem",
                  borderRadius: "50px",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: activeSection === link.id ? "#4f8eff" : "#8892b0",
                  backgroundColor:
                    activeSection === link.id
                      ? "rgba(79,142,255,0.1)"
                      : "transparent",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== link.id)
                    e.target.style.color = "#f0f4ff";
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== link.id)
                    e.target.style.color = "#8892b0";
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:akashsasanka480@gmail.com"
          className="btn-primary"
          style={{
            fontSize: "0.85rem",
            padding: "0.6rem 1.4rem",
            display: window.innerWidth < 768 ? "none" : "inline-flex",
          }}
        >
          Hire Me
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "1px solid rgba(79,142,255,0.3)",
            borderRadius: 8,
            padding: "0.4rem 0.6rem",
            cursor: "pointer",
            color: "#f0f4ff",
            fontSize: "1.2rem",
          }}
          className="hamburger-btn"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(5,8,22,0.97)",
            borderBottom: "1px solid rgba(79,142,255,0.15)",
            backdropFilter: "blur(20px)",
            padding: "1rem 2rem 2rem",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.75rem 0",
                fontSize: "1rem",
                fontWeight: 500,
                color: activeSection === link.id ? "#4f8eff" : "#8892b0",
                borderBottom: "1px solid rgba(79,142,255,0.08)",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
