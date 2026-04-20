"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const slides = [
  {
    title: "La Forma Fácil de Gestionar Invitados",
    description:
      "Simplifica la gestión de tus invitados: crea listas, envía invitaciones digitales y lleva el control sin complicaciones.",
    image: "/imagenes-horizontales/QR-EVENTOCLIC.png",
    cta: "Agenda una Demo",
  },
  {
    title: "La Forma Segura de Controlar el Acceso",
    description:
      "Mantén tu evento libre de colados con verificación por QR, validación en tiempo real y alertas instantáneas.",
    image: "/imagenes-horizontales/MENSAJES-EVENTOCLIC.png",
    cta: "Agenda una Demo",
  },
  {
    title: "La Forma Rápida de Organizar Eventos",
    description:
      "Potencia tu organización con herramientas de gestión modernas que se adaptan a cualquier tipo de evento social.",
    image: "/imagenes-horizontales/GESTION-CENTRALIZADA-EVENTOCLIC.png",
    cta: "Agenda una Demo",
  },
];

export default function CarouselSection() {
  const containerRef = useRef<HTMLElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = scrollTrackRef.current;
      if (!track) return;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center",
          end: "+=200%", // Scroll distance
          pin: true,
          scrub: 1, // Smooth interaction
        },
      });

      // Calculate how far to translate X based on children widths.
      // Usually, it's track width minus viewport width
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + window.innerWidth * 0.1); 

      tl.to(track, {
        x: getScrollAmount,
        ease: "none",
      });

    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      style={{
        padding: "var(--section-padding) 0",
        background: "var(--sage-100)",
        overflow: "hidden", // Hide the overflowing horizontal track
      }}
    >
      <div className="container-main" style={{ marginBottom: 40 }}>
        <ScrollReveal>
          <span className="badge-pill" style={{ marginBottom: 16, display: "inline-flex" }}>
             🔄 Flujo de Trabajo
          </span>
          <h2 style={{ maxWidth: 600 }}>Descubre cómo transformamos tu evento</h2>
        </ScrollReveal>
      </div>

      <div
        ref={scrollTrackRef}
        style={{
          display: "flex",
          gap: 32,
          paddingLeft: "var(--container-padding, 48px)",
          paddingRight: "var(--container-padding, 48px)",
          width: "fit-content",
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="carousel-card"
            style={{
              flex: "0 0 auto",
              borderRadius: "var(--radius-xl)",
              background: "var(--forest-900)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              border: "1px solid rgba(200,217,111,0.1)",
              transition: "transform 0.4s ease",
            }}
          >
            {/* Card Content */}
            <div style={{ padding: "48px 40px 32px", flexGrow: 1 }}>
              <h3
                style={{
                  color: "var(--lime-light)",
                  marginBottom: 16,
                  fontSize: "1.8rem",
                  lineHeight: 1.2,
                }}
              >
                {slide.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "1rem",
                  marginBottom: 32,
                  lineHeight: 1.6,
                }}
              >
                {slide.description}
              </p>
              <a
                href="#contacto"
                className="btn-light"
                style={{ padding: "10px 24px", fontSize: "0.9rem" }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "var(--forest-900)",
                    color: "var(--lime-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.7rem",
                  }}
                >
                  ↗
                </span>
                {slide.cta}
              </a>
            </div>

            {/* Card Image */}
            <div
              style={{
                position: "relative",
                height: 320,
                borderRadius: "20px 20px 0 0",
                overflow: "hidden",
                margin: "0 20px",
              }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="600px"
              />
              {/* Floating overlay card */}
              <div
                className="floating"
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  background: "white",
                  borderRadius: 16,
                  padding: "16px 20px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--forest-900)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>✅</span>
                Acceso Verificado
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
