"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollReveal from "./ScrollReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const pills = [
  "Códigos QR",
  "Invitaciones Digitales",
  "Control en Tiempo Real",
  "Sin Colados",
  "Dashboard Intuitivo",
  "Soporte 24/7",
  "Reportes Detallados",
  "Multi-Evento",
  "WhatsApp Integration",
  "Verificación Instantánea",
];

export default function CTASection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Create a seamless infinite marquee with GSAP
      const track = marqueeRef.current;
      if (!track) return;
      
      const width = track.scrollWidth / 2;
      
      gsap.to(track, {
        x: -width,
        ease: "none",
        duration: 25, // Time to loop
        repeat: -1,   // Infinite loop
      });
    },
    { scope: marqueeRef }
  );

  return (
    <section
      id="contacto"
      style={{
        padding: "var(--section-padding) 0 60px",
        background: "var(--sage-100)",
        overflow: "hidden",
      }}
    >
      <div className="container-main">
        {/* Floating Avatars + Heading */}
        <div style={{ textAlign: "center", marginBottom: 48, position: "relative" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: -8,
              marginBottom: 40,
            }}
          >
            {["👩‍💼", "🧑‍💻", "👨‍🍳"].map((emoji, i) => (
              <div
                key={i}
                className="floating"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "var(--lime-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  border: "3px solid var(--sage-100)",
                  marginLeft: i > 0 ? -12 : 0,
                  boxShadow: "0 4px 16px rgba(27,67,50,0.1)",
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                {emoji}
              </div>
            ))}
          </div>

          <ScrollReveal>
            <h2
              style={{
                maxWidth: 650,
                margin: "0 auto 20px",
              }}
            >
              Controla tu Próximo Evento con Nosotros
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p
              style={{
                maxWidth: 550,
                margin: "0 auto",
                fontSize: "1.05rem",
              }}
            >
              Agenda una reunión personalizada con nuestro equipo y descubre
              cómo Anti-Colados puede transformar la experiencia de tus eventos.
            </p>
          </ScrollReveal>
        </div>

        {/* CTA Card */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              background: "var(--lime-light)",
              borderRadius: "var(--radius-xl)",
              padding: "48px 40px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 32,
              marginBottom: 48,
            }}
          >
            <div style={{ maxWidth: 500 }}>
              <h3 style={{ marginBottom: 12, fontSize: "1.5rem" }}>
                Organiza Eventos Perfectos sin Preocupaciones
              </h3>
              <p style={{ fontSize: "0.95rem" }}>
                Nuestro equipo te guiará con una demo en vivo del producto,
                con soluciones adaptadas a tu tipo de evento.
              </p>
            </div>
            <a href="#" className="btn-primary">
              <span className="btn-icon">↗</span>
              Comenzar Ahora
            </a>
          </div>
        </ScrollReveal>

        {/* GSAP Marquee Pills */}
        <div
          style={{
            overflow: "hidden",
            borderRadius: 999,
            padding: "4px 0",
            width: "100%",
            position: "relative",
          }}
        >
          <div 
            ref={marqueeRef}
            style={{ 
              display: "flex", 
              width: "fit-content",
              whiteSpace: "nowrap"
            }}
          >
            {/* We duplicate the pills 3 times to ensure a smooth infinite loop regardless of screen width */}
            {[...pills, ...pills, ...pills].map((pill, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  borderRadius: 999,
                  background: "rgba(200, 217, 111, 0.25)",
                  border: "1px solid rgba(200, 217, 111, 0.4)",
                  color: "var(--text-dark)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  marginRight: 16,
                  fontFamily: "var(--font-sans)",
                }}
              >
                <span style={{ fontSize: "0.75rem", opacity: 0.6 }}>◆</span>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
