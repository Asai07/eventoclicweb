"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Anti-Colados nos salvó la boda. Teníamos 350 invitados y ni un solo colado logró entrar. El control fue impecable y la experiencia para nuestros invitados fue increíble.",
    name: "María García",
    role: "Organizadora de Bodas",
    emoji: "👰",
  },
  {
    quote:
      "Organizamos los XV años de mi hija y fue la primera vez que no tuvimos problemas con gente no invitada. El sistema de QR es súper intuitivo y los reportes en tiempo real son geniales.",
    name: "Roberto Hernández",
    role: "Padre de la Quinceañera",
    emoji: "🎂",
  },
  {
    quote:
      "Como wedding planner, he probado muchos sistemas pero Anti-Colados es el mejor. Mis clientes están encantados y yo puedo monitorear todo desde mi celular sin estrés.",
    name: "Ana Martínez",
    role: "Wedding Planner Profesional",
    emoji: "💐",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimonios"
      style={{
        padding: "var(--section-padding) 0",
        background: "var(--lime-bg)",
      }}
    >
      <div className="container-main">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <ScrollReveal>
            <span className="badge-pill" style={{ marginBottom: 24 }}>
              ⭐ Testimonios
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              style={{
                maxWidth: 550,
                margin: "0 auto",
              }}
            >
              Clientes Felices, Eventos Exitosos
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonials Carousel */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              maxWidth: 800,
              margin: "0 auto",
              position: "relative",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="card"
                style={{
                  textAlign: "center",
                  padding: "48px 40px",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    background: "var(--lime-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    margin: "0 auto 24px",
                    border: "3px solid var(--sage-100)",
                    boxShadow: "0 4px 16px rgba(27,67,50,0.1)",
                  }}
                >
                  {testimonials[active].emoji}
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: 1.8,
                    color: "var(--text-dark)",
                    marginBottom: 24,
                    fontStyle: "italic",
                    maxWidth: 600,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  &ldquo;{testimonials[active].quote}&rdquo;
                </p>

                {/* Author */}
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--text-dark)",
                    marginBottom: 4,
                  }}
                >
                  {testimonials[active].name}
                </p>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-light)",
                  }}
                >
                  {testimonials[active].role}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 10,
                marginTop: 32,
              }}
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? 32 : 10,
                    height: 10,
                    borderRadius: 999,
                    background:
                      i === active
                        ? "var(--forest-900)"
                        : "rgba(27,67,50,0.2)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
