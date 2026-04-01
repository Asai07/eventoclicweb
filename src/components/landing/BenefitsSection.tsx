"use client";

import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    icon: "🛡️",
    title: "Sin Colados",
    description:
      "Cada invitado tiene un código único e intransferible. Nuestro sistema detecta duplicados, códigos falsos y accesos no autorizados al instante.",
  },
  {
    icon: "💎",
    title: "100% Digital",
    description:
      "Olvídate del papel. Todo se gestiona desde tu dashboard: listas, invitaciones, códigos QR y reportes en tiempo real desde cualquier dispositivo.",
  },
  {
    icon: "👥",
    title: "Soporte Personalizado",
    description:
      "Nuestro equipo de soporte te acompaña antes, durante y después de tu evento. Respuestas en menos de 10 minutos y asistencia técnica dedicada.",
  },
];

export default function BenefitsSection() {
  return (
    <section
      id="beneficios"
      style={{
        padding: "var(--section-padding) 0",
        background: "var(--lime-bg)",
      }}
    >
      <div className="container-main">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <ScrollReveal>
            <span className="badge-pill" style={{ marginBottom: 24 }}>
              🏆 Ventajas Competitivas
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              style={{
                maxWidth: 650,
                margin: "0 auto",
              }}
            >
              Disfruta los Beneficios sin Costos Adicionales
            </h2>
          </ScrollReveal>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {benefits.map((benefit, i) => (
            <ScrollReveal key={benefit.title} delay={i * 0.15}>
              <div className="card" style={{ height: "100%" }}>
                <div className="card-icon">{benefit.icon}</div>
                <h3
                  style={{
                    marginBottom: 14,
                    fontSize: "1.8rem",
                  }}
                >
                  {benefit.title}
                </h3>
                <p style={{ fontSize: "0.95rem" }}>{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
