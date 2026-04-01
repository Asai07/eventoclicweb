'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function VideoReveal() {
    const videoContainerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: videoContainerRef,
        offset: ["start end", "center center"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scale = useTransform(smoothProgress, [0, 1], [0.85, 1]);

    return (
        <div className="relative w-full pt-10" ref={videoContainerRef}>
            <motion.div
                style={{ scale }}
                className="relative z-20 w-full max-w-[1100px] mx-auto px-4 pb-20 will-change-transform"
            >
                <div className="aspect-[16/9] bg-[#0f1c19] rounded-[2rem] overflow-hidden shadow-2xl relative">
                    <video
                        autoPlay loop muted playsInline
                        className="w-full h-full object-cover opacity-90"
                        poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    >
                        <source src="https://www.pexels.com/es-es/download/video/1394254/" type="video/mp4" />
                    </video>
                </div>
            </motion.div>

            {/* CONTENEDOR DE LA CURVA VERDE OSCURO */}
            <div className="absolute top-[30%] left-0 w-full h-[150%] overflow-hidden z-10 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250%] md:w-[120%] h-[1500px] bg-[#16554a] rounded-t-[100%]"></div>
            </div>
        </div>
    );
}