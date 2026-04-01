"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Cómo Funciona", href: "#como-funciona" },
  { label: "Testimonios", href: "#testimonios" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          padding: "16px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "rgba(216, 229, 191, 0.85)" // Matching the header background closely
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0, 0, 0, 0.05)"
            : "1px solid transparent",
          transition: "background 0.3s, backdrop-filter 0.3s",
        }}
      >
        {/* Left: Logo (2/12 ratio conceptually, align left) */}
        <div style={{ flex: 1 }}>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              fontFamily: "var(--font-serif)",
              fontSize: "1.4rem",
              fontWeight: 600,
              color: "var(--text-dark)",
              letterSpacing: "-0.01em",
            }}
          >
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "var(--forest-900)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.85rem",
              }}
            >
              🛡️
            </span>
            Anti-Colados
          </a>
        </div>

        {/* Center: Links (8/12 ratio conceptually, grouped in center) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
            flex: 2,
          }}
          className="desktop-only"
        >
          {navLinks.map((link) => (
            <div key={link.label} style={{ position: "relative", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
              <a
                href={link.href}
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "var(--text-dark)",
                  textDecoration: "none",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {link.label}
              </a>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
          <div style={{ position: "relative", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
             <a
                href="#contacto"
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "var(--text-dark)",
                  textDecoration: "none",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Contacto
              </a>
          </div>
        </div>

        {/* Right: CTA Buttons (2/12 ratio conceptually, align right) */}
        <div style={{ flex: 1, justifyContent: "flex-end", gap: 12 }} className="desktop-only">
          <a
            href="#contacto"
            className="btn-secondary"
            style={{
              padding: "10px 24px",
              fontSize: "0.9rem",
              background: "transparent",
              color: "var(--text-dark)",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: 999,
            }}
          >
            Agenda una Demo
          </a>
          <a
            href="#contacto"
            className="btn-primary"
            style={{
              padding: "10px 24px",
              fontSize: "0.9rem",
              background: "var(--lime-accent)",
              color: "var(--forest-900)",
              border: "none",
              borderRadius: 999,
            }}
          >
            Comenzar
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-only"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: 5,
            zIndex: 1001,
          }}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            style={{ width: 24, height: 2, background: "var(--text-dark)", display: "block" }}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            style={{ width: 24, height: 2, background: "var(--text-dark)", display: "block" }}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            style={{ width: 24, height: 2, background: "var(--text-dark)", display: "block" }}
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Full Screen Overlay - JoinImmediate Style */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              zIndex: 999,
              background: "var(--sage-100)",
              display: "flex",
              flexDirection: "column",
              padding: "100px 40px 40px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 32, flex: 1 }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontSize: "2rem",
                    fontWeight: 500,
                    color: "var(--text-dark)",
                    textDecoration: "none",
                    fontFamily: "var(--font-sans)",
                    borderBottom: "1px solid rgba(0,0,0,0.05)",
                    paddingBottom: 16,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <a href="#contacto" className="btn-secondary" style={{ textAlign: "center", borderRadius: 8 }}>Agenda una Demo</a>
              <a href="#contacto" className="btn-primary" style={{ textAlign: "center", borderRadius: 8 }}>Comenzar</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
