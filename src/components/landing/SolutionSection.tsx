"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const features = [
  {
    icon: "📱",
    title: "Códigos QR",
    description:
      "Genera códigos QR únicos para cada invitado. Escanea al llegar y valida su acceso al instante con la app de lectura rápida.",
    image: "/imagenes-horizontales/QR-EVENTOCLIC.png", // Reusing carousel images for demo
  },
  {
    icon: "💌",
    title: "Invitaciones Digitales",
    description:
      "Envía invitaciones personalizadas por WhatsApp con toda la información del evento y código de acceso seguro y encriptado.",
    image: "/imagenes-horizontales/MENSAJES-EVENTOCLIC.png",
  },
  {
    icon: "📊",
    title: "Control en Tiempo Real",
    description:
      "Monitorea en vivo quién ha llegado, cuántos faltan y detecta cualquier intento de acceso no autorizado directamente desde el dashboard.",
    image: "/imagenes-horizontales/GESTION-CENTRALIZADA-EVENTOCLIC.png",
  },
];

export default function SolutionSection() {
  const containerRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const texts = gsap.utils.toArray(".feature-block");

      texts.forEach((text, i) => {
        ScrollTrigger.create({
          trigger: text as Element,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveIndex(i);
              gsap.to(text as Element, { opacity: 1, duration: 0.3 });
            } else {
              gsap.to(text as Element, { opacity: 0.3, duration: 0.3 });
            }
          },
        });
      });

      // Pin the right column illustration exactly as joinimmediate does 
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: rightColRef.current,
      });

    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="soluciones"
      style={{
        background: "var(--forest-900)",
        position: "relative",
        padding: "120px 0",
      }}
    >
      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        {/* Header (Fades in normally) */}
        <div style={{ textAlign: "center", marginBottom: 120 }}>
          <ScrollReveal>
            <span
              className="badge-pill"
              style={{
                marginBottom: 24,
                background: "rgba(200, 217, 111, 0.15)",
                borderColor: "rgba(252, 118, 67, 0.2)",
                color: "var(--lime-accent)",
                display: "inline-flex",
              }}
            >
              ✨ La Solución
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              style={{
                color: "var(--white)",
                maxWidth: 700,
                margin: "0 auto 20px",
              }}
            >
              Una Plataforma que Cubre Todas tus Necesidades
            </h2>
          </ScrollReveal>
        </div>

        {/* 2-Column Sticky Scrollytelling format */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "flex-start",
          }}
          className="max-md:!grid-cols-1"
        >
          {/* Left Column (Scrolling Text) */}
          <div ref={leftColRef} style={{ paddingBottom: "50vh" }}>
            {features.map((feature, i) => (
              <div
                key={i}
                className="feature-block"
                style={{
                  minHeight: "70vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  opacity: i === 0 ? 1 : 0.3,
                  transition: "opacity 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 16,
                    background: "rgba(200, 217, 111, 0.1)",
                    border: "1px solid rgba(200, 217, 111, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2rem",
                    marginBottom: 32,
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  style={{
                    color: "var(--lime-light)",
                    marginBottom: 20,
                    fontSize: "2.5rem",
                    lineHeight: 1.1,
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    maxWidth: 450,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column (Pinned Illustration) */}
          <div
            ref={rightColRef}
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              position: "sticky",
              top: 0,
            }}
            className="max-md:!hidden"
          >
            <div
              style={{
                width: "100%",
                aspectRatio: "4/5",
                position: "relative",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(0,0,0,0.2)",
              }}
            >
              {features.map((feature, i) => (
                <Image
                  key={i}
                  src={feature.image}
                  alt={feature.title}
                  fill
                  style={{
                    objectFit: "cover",
                    opacity: activeIndex === i ? 1 : 0,
                    transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
