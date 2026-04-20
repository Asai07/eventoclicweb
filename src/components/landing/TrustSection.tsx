"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { number: "+500", label: "Eventos realizados exitosamente" },
  { number: "99.9%", label: "Precisión en el control de acceso" },
  { number: "+10K", label: "Invitados administrados con éxito" },
];

const steps = [
  {
    step: "01",
    title: "Crea tu Evento",
    description:
      "Registra tu evento en minutos. Personaliza los detalles, fechas y capacidad desde nuestro panel intuitivo.",
  },
  {
    step: "02",
    title: "Agrega Invitados",
    description:
      "Importa tu lista de invitados o agrégalos manualmente. Cada uno recibe un código QR único e invitación digital.",
  },
  {
    step: "03",
    title: "¡Listo para el Evento!",
    description:
      "Escanea los códigos al llegar y disfruta de un control de acceso fluido. Sin filas, sin estrés, sin colados.",
  },
];

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(2.5rem, 5vw, 4rem)",
        fontWeight: 700,
        fontStyle: "italic",
        color: "var(--lime-light)",
        display: "block",
        lineHeight: 1,
        marginBottom: 8,
      }}
    >
      {target}{suffix}
    </motion.span>
  );
}

export default function TrustSection() {
  return (
    <section
      id="como-funciona"
      style={{
        background: "var(--forest-900)",
        overflow: "hidden",
      }}
    >
      {/* Stats Row */}
      <div
        style={{
          padding: "80px 0",
          position: "relative",
        }}
      >
        {/* Background image overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/imagenes-horizontales/11.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
            pointerEvents: "none",
          }}
        />
        <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <h2 style={{ color: "var(--white)", marginBottom: 60, maxWidth: 500 }}>
              Por Qué Nos Eligen los Organizadores
            </h2>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 48,
            }}
          >
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.15}>
                <div>
                  <AnimatedCounter target={stat.number} />
                  <p
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.95rem",
                      maxWidth: 260,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div
        style={{
          padding: "0 0 var(--section-padding)",
        }}
      >
        <div className="container-main">
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span
                className="badge-pill"
                style={{
                  marginBottom: 24,
                  background: "rgba(200, 217, 111, 0.15)",
                  borderColor: "rgba(252, 118, 67, 0.2)",
                  color: "var(--lime-accent)",
                }}
              >
                🚀 Cómo Empezar
              </span>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {steps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.15}>
                <div
                  className="card"
                  style={{
                    textAlign: "center",
                    padding: "48px 36px",
                    height: "100%",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2.5rem",
                      fontWeight: 300,
                      color: "var(--text-light)",
                      display: "block",
                      marginBottom: 16,
                      fontStyle: "italic",
                    }}
                  >
                    {step.step}
                  </span>
                  <h3
                    style={{
                      marginBottom: 16,
                      fontSize: "1.6rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "0.92rem" }}>{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
