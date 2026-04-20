'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const navLinks = ["Soluciones", "Sobre nosotros", "Como funciona", "Precios"];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10"
        >
            <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Image
                        src="/logo-mievento.png"
                        alt="Evento Clic"
                        width={160}
                        height={40}
                        className="h-8 lg:h-10 w-auto cursor-pointer"
                    />
                </div>

                <ul className="hidden md:flex gap-8 text-sm font-medium text-white/90">
                    {navLinks.map((link, index) => (
                        <li key={index} className="relative group cursor-pointer py-1">
                            <div className="overflow-hidden h-6">
                                <motion.div
                                    // 1. Quitamos las clases de 'transition-transform', 'duration-500', etc. de aquí
                                    className="relative flex flex-col"
                                    whileHover={{ y: "-50%" }}
                                    // 2. Le pasamos la transición directamente a Framer Motion
                                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                                >
                                    {/* Texto Normal */}
                                    <span className="flex items-center h-6">
                                        {link}
                                    </span>

                                    {/* Texto Hover */}
                                    <span className="flex items-center h-6 font-serif italic tracking-wide text-white text-[15px]">
                                        {link}
                                    </span>
                                </motion.div>
                            </div>

                            {/* La línea naranja (aquí sí dejamos las clases de Tailwind porque esta no la controla Framer Motion) */}
                            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#ce5a4e] transition-all duration-400 ease-out group-hover:w-full" />
                        </li>
                    ))}
                </ul>

                <button className="relative overflow-hidden group bg-transparent border border-white/30 text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300 cursor-pointer hover:border-[#ce5a4e]">
                    <span className="absolute left-0 bottom-0 w-full h-[150%] bg-[#ce5a4e] translate-y-full rounded-t-[100%] group-hover:translate-y-0 group-hover:rounded-t-none transition-all duration-700 ease-out z-0" />

                    <span className="relative z-10 flex items-center gap-2 text-white transition-colors duration-300">
                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:rotate-45"
                        />
                        Comenzar
                    </span>
                </button>
            </div>
        </motion.nav>
    );
}