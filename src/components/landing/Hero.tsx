"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Initial fade-in animation for content (staggered)
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
      
      tl.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
      });

      // 2. Parallax effect for the image on scroll
      gsap.to(imageRef.current, {
        y: 100, // Move down while scrolling down gives the parallax feel
        scale: 0.95,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      style={{
        paddingTop: 180,
        paddingBottom: 0,
        background: "var(--sage-100)",
        textAlign: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="container-main">
        {/* Main heading */}
        <h1
          ref={headlineRef}
          className="hero-reveal"
          style={{
            maxWidth: 700,
            margin: "0 auto 24px",
            color: "var(--text-dark)",
          }}
        >
          La Mejor Forma de Controlar el Acceso a tu Evento
        </h1>

        <p
          className="hero-reveal"
          style={{
            maxWidth: 560,
            margin: "0 auto 40px",
            fontSize: "1.1rem",
            color: "var(--text-muted)",
          }}
        >
          Anti-Colados es un sistema de control de invitados que te permite
          administrar bodas, XV años y eventos sociales con códigos QR y
          monitoreo en tiempo real.
        </p>

        {/* CTA Buttons */}
        <div
          className="hero-reveal"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            flexWrap: "wrap",
            marginBottom: 60,
          }}
        >
          <a href="#contacto" className="btn-primary" style={{ padding: "16px 36px", fontSize: "1.05rem", background: "var(--lime-accent)", color: "var(--forest-900)" }}>
            Comenzar
          </a>
          <a href="#soluciones" style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: "1.05rem",
            color: "var(--text-dark)",
            textDecoration: "none",
          }}>
            <span
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "var(--white)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.9rem",
                boxShadow: "0 4px 14px rgba(0,0,0,0.05)"
              }}
            >
              ▶
            </span>
            Ver Cómo Funciona
          </a>
        </div>

        {/* Hero Image */}
        <div
          className="hero-reveal"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 1100,
            margin: "0 auto",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            aspectRatio: "16/9",
            zIndex: 2,
          }}
        >
          <div ref={imageRef} style={{ width: "100%", height: "115%", position: "absolute", top: "-5%" }}>
            <Image
              src="/images/hero.png"
              alt="Sistema Anti-Colados en acción - Control digital de invitados"
              fill
              style={{ objectFit: "cover" }}
              priority
              sizes="(max-width: 768px) 100vw, 1100px"
            />
          </div>
        </div>

        {/* Trusted By Bar */}
        <div
          className="hero-reveal"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 40,
            padding: "48px 0 40px",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-light)",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}
          >
            Confiado por organizadores de eventos
          </p>
          <a href="#contacto" className="btn-secondary" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
            <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--lime-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", color: "var(--forest-900)" }}>↗</span>
            Agenda una Demo
          </a>
          {["🎊 Bodas", "🎂 XV Años", "🎉 Fiestas", "🏢 Corporativos", "🎭 Galas"].map(
            (item) => (
              <span
                key={item}
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  opacity: 0.5,
                  fontFamily: "var(--font-serif)",
                }}
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>

      {/* Curved Divider */}
      <div
        style={{
          width: "100%",
          height: 80,
          background: "linear-gradient(to bottom, var(--sage-100), var(--lime-bg))",
          borderRadius: "0 0 50% 50% / 0 0 100% 100%",
          position: "relative",
          zIndex: 3,
        }}
      />
    </section>
  );
}
