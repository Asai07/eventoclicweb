"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // We register globally here if needed, or in a separate config
    gsap.registerPlugin(ScrollTrigger);

    // Optional: Refresh ScrollTrigger when Lenis scrolls, handled automatically by lenis/react in latest versions usually
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
