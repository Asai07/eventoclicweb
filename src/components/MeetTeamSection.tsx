'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

// Avatares orbitando simulando confirmaciones en tiempo real
const ROTATING_AVATARS = [
    {
        id: 1,
        orbitSize: "w-[300px] h-[300px] md:w-[450px] md:h-[450px]",
        duration: 25,
        startAngle: 0,
        img: "/circulos-girando/1.png",
        status: "Acaba de confirmar",
        positionClass: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
    },
    {
        id: 2,
        orbitSize: "w-[450px] h-[450px] md:w-[650px] md:h-[650px]",
        duration: 35,
        startAngle: 120,
        img: "/circulos-girando/2.png",
        status: "Asistirá con 3 invitados",
        positionClass: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
    },
    {
        id: 3,
        orbitSize: "w-[600px] h-[600px] md:w-[850px] md:h-[850px]",
        duration: 45,
        startAngle: 240,
        img: "/circulos-girando/3.png",
        status: "Declinó asistencia",
        positionClass: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"
    },
    {
        id: 4,
        orbitSize: "w-[750px] h-[750px] md:w-[1050px] md:h-[1050px]",
        duration: 55,
        startAngle: 60,
        img: "/circulos-girando/4.png",
        status: "Asignado a Mesa 3",
        positionClass: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
    }
];

// Beneficios para el scroll infinito
const MARQUEE_ITEMS = [
    "Pases Digitales con QR",
    "Confirmaciones vía WhatsApp",
    "Gestión de Alergias y Menús",
    "Cero Colados",
    "Control de Mesas Intuitivo",
    "Actualizaciones en Tiempo Real"
];

// Duplicamos el array para el efecto marquee infinito
const MARQUEE_TRACK = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function LiveExperienceSection() {
    return (
        <section className="relative w-full bg-white overflow-hidden pt-32 pb-24 flex flex-col items-center">

            {/* ======================= ARRIBA: AVATARES ORBITANDO (Simulación Visual) ======================= */}
            <div className="relative w-full max-w-[1400px] min-h-[500px] md:min-h-[700px] flex items-center justify-center mb-12">

                {/* Contenido Central Fijo */}
                <div className="relative z-10 text-center max-w-2xl px-6 bg-white/80 backdrop-blur-sm rounded-full py-12 shadow-[0_0_40px_rgba(255,255,255,1)]">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-[#ce5a4e] font-serif text-5xl md:text-[5rem] leading-[1.05] tracking-tight mb-6"
                    >
                        Mira cómo tu lista<br className="hidden md:block" /> cobra vida
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-base md:text-xl font-medium max-w-md mx-auto leading-relaxed"
                    >
                        Imagina abrir tu Centro de Control y ver cómo las confirmaciones llegan solas. Cada invitado en su lugar, sin estrés ni listas desordenadas.
                    </motion.p>
                </div>

                {/* Círculos y Avatares Orbitando */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    {ROTATING_AVATARS.map((avatar) => (
                        <motion.div
                            key={`orbit-${avatar.id}`}
                            animate={{ rotate: 360 }}
                            transition={{ duration: avatar.duration, repeat: Infinity, ease: "linear" }}
                            className={`absolute border border-gray-100 rounded-full ${avatar.orbitSize} flex items-center justify-center`}
                        >
                            {/* Contenedor del avatar que contra-rota */}
                            <motion.div
                                className={`absolute ${avatar.positionClass} pointer-events-auto flex flex-col items-center gap-2`}
                                animate={{ rotate: -360 }}
                                transition={{ duration: avatar.duration, repeat: Infinity, ease: "linear" }}
                            >
                                <img
                                    src={avatar.img}
                                    alt={`Invitado ${avatar.id}`}
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] object-cover"
                                />
                                {/* Tooltip de Estado */}
                                <div className="bg-white px-3 py-1.5 rounded-full shadow-lg border border-gray-100 flex items-center gap-2 whitespace-nowrap">
                                    {avatar.status.includes('Declinó') ? (
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
                                    ) : avatar.status.includes('Mesa') ? (
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#fc7643]" />
                                    ) : (
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                    )}
                                    <span className="text-xs md:text-sm font-bold text-[#ce5a4e]">{avatar.status}</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ======================= ABAJO: CAJA CTA & MARQUEE (RESTRUCTURADO) ======================= */}
            <div className="relative z-20 w-full px-6 md:px-12 lg:px-16 xl:px-24">

                {/* MAIN ROUNDED GREEN BOX
                    - background: #ce5a4e
                    - rounded: [3rem]
                    - overflow-hidden (CRUCIAL: needed for the marquee to hide as it goes to edge)
                    - flex flex-col (to stack top content and bottom marquee)
                    - pt-8 md:pt-16 (Padding only top, content on sides will align with standard page px padding)
                */}
                <div className="bg-[#ce5a4e] rounded-[3rem] overflow-hidden w-full max-w-[1400px] mx-auto flex flex-col shadow-2xl relative pt-8 md:pt-16">

                    {/* Acento visual difuminado de fondo */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#fcdbd0]/10 rounded-full blur-[100px] pointer-events-none"></div>

                    {/* TOP CONTENT (TEXT & BUTTON)
                        - px-8 md:px-16 (Internal content padding for text/button alignment)
                        - mb-16 (gap before marquee)
                    */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 px-8 md:px-16 mb-16 relative z-10 w-full">
                        <div className="max-w-2xl">
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-white font-serif text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-tight mb-6"
                            >
                                Organiza tu próximo evento <br className="hidden lg:block" />
                                como un profesional
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-white/80 text-base md:text-lg max-w-lg leading-relaxed font-medium"
                            >
                                Crea tu cuenta hoy mismo, sube tu lista de invitados y descubre la paz mental de tener cada detalle bajo control.
                            </motion.p>
                        </div>

                        {/* Botón CTA Primario within text container */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#fc7643] hover:bg-[#d95a2b] transition-colors text-white rounded-full pl-5 pr-7 py-3.5 flex items-center gap-4 font-bold text-lg cursor-pointer shadow-xl shrink-0 group"
                        >
                            <div className="bg-white text-[#fc7643] rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:rotate-45">
                                <ArrowUpRight size={20} strokeWidth={2.5} />
                            </div>
                            Organizar mis invitados
                        </motion.button>
                    </div>

                    {/* MARQUEE WRAPPER (EL FIX)
                        - w-full relative py-8
                        - mt-auto (pushes to bottom if flex content is sparse, though not needed here with mt-16 split)
                        - border-t border-white/10
                        - bg-black/20
                        - NO side padding or negative margins. It naturally extends to the edge.
                    */}
                    <div className="w-full relative py-8 border-t border-white/10 flex items-center overflow-hidden bg-black/20 px-0 mt-auto">

                        {/* Gradientes laterales - Fades *right at the edge* against the rounded box */}
                        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#ce5a4e] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#ce5a4e] to-transparent z-10 pointer-events-none" />

                        <motion.div
                            className="flex gap-4 whitespace-nowrap min-w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        >
                            {MARQUEE_TRACK.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-sm"
                                >
                                    <CheckCircle2 size={18} className="text-[#fcdbd0]" />
                                    <span className="text-white/90 text-sm md:text-base font-semibold tracking-wide">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}