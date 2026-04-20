'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            
            {/* Background Video */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/video-hero/EVENTOCLIC-HOME.mp4" type="video/mp4" />
            </video>

            {/* Dark Gradient / Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40 z-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

            {/* Main Content */}
            <div className="relative z-10 px-4 pt-20 flex flex-col items-center w-full max-w-[1200px]">
                
                {/* Headline */}
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-[5.5rem] text-white font-serif font-normal mb-6 leading-[1.1] tracking-tight max-w-[1000px] text-shadow-sm"
                >
                    Invita con <span className="italic">emoción.</span><br/>
                    Organiza con <span className="italic">tranquilidad.</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="max-w-[750px] mx-auto text-lg md:text-xl md:leading-relaxed text-white/95 font-medium mb-12 text-shadow-sm"
                >
                    Desde evitar colados hasta organizar a tus invitados. <br className="hidden md:block" />
                    Simplificamos el control de invitados, confirmaciones y accesos para <br className="hidden md:block" />
                    que tu evento esté completamente bajo control.
                </motion.p>

                {/* Buttons Container */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full px-4"
                >
                    {/* Button 1: Dark Green */}
                    <button className="bg-[#ce5a4e] text-white px-6 sm:px-8 py-3.5 rounded-full flex items-center justify-center gap-4 font-medium hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-full sm:w-auto overflow-hidden group cursor-pointer">
                        <span className="relative z-10 transition-transform group-hover:scale-105">Organizar mis invitados</span>
                        <div className="bg-white text-[#ce5a4e] rounded-full p-1 flex items-center justify-center transition-transform group-hover:rotate-45 relative z-10">
                            <ArrowUpRight size={18} strokeWidth={2.5} />
                        </div>
                    </button>

                    {/* Button 2: White with Terracotta */}
                    <button className="bg-white text-[#2a1714] px-6 sm:px-8 py-3.5 rounded-full flex items-center justify-center gap-4 font-medium hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-full sm:w-auto group cursor-pointer">
                        <span className="transition-transform group-hover:scale-105">Ver cómo funciona</span>
                        <div className="bg-[#fc7643] text-white rounded-full p-1 flex items-center justify-center transition-transform group-hover:rotate-45">
                            <ArrowUpRight size={18} strokeWidth={2.5} />
                        </div>
                    </button>
                </motion.div>

                {/* Bottom Tracking Text - Moved up to sit right below the buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="mt-12 w-full text-center"
                >
                    <p className="text-white/80 text-[11px] sm:text-sm tracking-[0.2em] font-medium uppercase">
                        IDEAL PARA BODAS • XV AÑOS • EVENTOS ESPECIALES
                    </p>
                </motion.div>

            </div>
        </section>
    );
}