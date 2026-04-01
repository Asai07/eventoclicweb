'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    // Detectar la dirección del scroll
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        // Si bajamos más de 150px, ocultamos. Si subimos, mostramos.
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 w-full z-50 bg-[#0d4237]"
        >
            <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Image 
                        src="/images/logo.png" 
                        alt="Logo" 
                        width={140} 
                        height={40} 
                        className="object-contain"
                    />
                </div>
                <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
                    <li className="cursor-pointer hover:text-white/70 transition-colors">Soluciones</li>
                    <li className="cursor-pointer hover:text-white/70 transition-colors">Sobre nosotros</li>
                    <li className="cursor-pointer hover:text-white/70 transition-colors">Como funciona</li>
                    <li className="cursor-pointer hover:text-white/70 transition-colors">Precios</li>
                </ul>
                <button className="relative overflow-hidden group bg-transparent border border-white text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300 cursor-pointer">
                    {/* The WhatsApp style liquid fill from bottom - Slower and Terracotta */}
                    <span className="absolute left-0 bottom-0 w-full h-[150%] bg-[#E07A5F] translate-y-full rounded-t-[100%] group-hover:translate-y-0 group-hover:rounded-t-none transition-all duration-700 ease-out z-0" />
                    
                    {/* Text content stays in front */}
                    <span className="relative z-10 flex items-center gap-2 text-white transition-colors duration-300">
                        <ArrowUpRight size={16} /> Comenzar
                    </span>
                </button>
            </div>
        </motion.nav>
    );
}