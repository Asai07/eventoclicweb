"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ProblemSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Create a timeline that spans the scroll distance of the pinned section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%", // Scroll for 1.5x the viewport height
          pin: true,     // Pin the entire section
          scrub: 1,      // Smooth scrubbing
        },
      });

      // Simple parallax/scale effect on the image while pinned
      tl.to(
        imageRef.current,
        {
          scale: 1.05,
          y: -20,
          ease: "none",
        },
        0
      );

      // Fade out the badge, fade in the heading, etc. (Staggered read effect)
      const texts = gsap.utils.toArray(".problem-text");
      
      // Initially hide elements except the badge
      gsap.set(texts, { opacity: 0, y: 30 });
      gsap.set(".problem-badge", { opacity: 1 });

      tl.to(".problem-badge", { opacity: 0.2, y: -20, duration: 1 }, 0)
        .to(texts[0] as Element, { opacity: 1, y: 0, duration: 1 }, 0.5)
        .to(texts[1] as Element, { opacity: 1, y: 0, duration: 1 }, 1.5)
        .to(texts[2] as Element, { opacity: 1, y: 0, duration: 1 }, 2.5);
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--lime-bg)",
        overflow: "hidden",
      }}
    >
      <div className="container-main" style={{ width: "100%" }}>
        <div className="grid-problem">
          {/* Text Column */}
          <div ref={textGroupRef}>
            <span className="badge-pill problem-badge" style={{ marginBottom: 24, display: "inline-flex" }}>
              📋 El Problema
            </span>

            <h2 className="problem-text" style={{ marginBottom: 24, maxWidth: 500 }}>
              Las Listas en Papel ya no Funcionan
            </h2>

            <p className="problem-text" style={{ marginBottom: 40, fontSize: "1.05rem", maxWidth: 450 }}>
              Deja atrás el caos de las listas manuales, los nombres
              repetidos y los colados que arruinan la experiencia de tu
              evento. Es hora de modernizar tu control de acceso.
            </p>

            <div className="problem-text">
              <a href="#soluciones" className="btn-primary">
                <span className="btn-icon">↗</span>
                Ver Solución
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div
            style={{
              position: "relative",
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              aspectRatio: "4/3",
            }}
          >
            <div ref={imageRef} style={{ width: "100%", height: "100%" }}>
              <Image
                src="/images/problem.png"
                alt="Organizador estresado con listas de invitados en papel"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
