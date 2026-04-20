'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, QrCode } from 'lucide-react';

const CARDS_DATA = [
    {
        number: "01",
        title: "Ticket Digital",
        description: "El día del evento, cada invitado presenta su pase exclusivo con código QR desde su celular."
    },
    {
        number: "02",
        title: "Validación Rápida",
        description: "Escanea y valida el acceso en segundos directamente desde el modo recepción del Centro de Control."
    },
    {
        number: "03",
        title: "Check-in Seguro",
        description: "Un ingreso ágil y moderno que garantiza que solo tus invitados formen parte de tu gran celebración."
    }
];

export default function ReceptionQRSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Efecto Parallax para la imagen de fondo
    const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section className="relative w-full bg-[#fff4ee] py-20 px-4 md:px-8 lg:px-12">

            {/* Etiqueta Superior fuera del contenedor para dar contexto */}
            <div className="max-w-[1400px] mx-auto mb-8 px-4 flex justify-center md:justify-start">
                <span className="border border-[#2a1714]/20 bg-[#fcdbd0] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-[#2a1714] shadow-sm w-fit">
                    <QrCode size={16} className="text-[#fc7643]" /> El Gran Día
                </span>
            </div>

            {/* Contenedor Principal Redondeado (El "Lienzo") */}
            <div
                ref={containerRef}
                className="relative w-full max-w-[1400px] mx-auto rounded-[2.5rem] md:rounded-[4rem] overflow-hidden min-h-[850px] md:min-h-[900px] flex flex-col justify-between shadow-2xl"
            >
                {/* Imagen de Fondo Parallax */}
                <motion.div
                    style={{ y: imageY }}
                    className="absolute inset-0 w-full h-[140%] -top-[20%]"
                >
                    <img
                        src="/imagenes-horizontales/11.png"
                        alt="Recepción elegante de un evento"
                        className="w-full h-full object-cover"
                    />
                    {/* Gradientes oscuros para asegurar la legibilidad perfecta del texto */}
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#ce5a4e]/80 via-transparent to-[#ce5a4e]/90" />
                </motion.div>

                {/* Contenido Superior (Textos y Botón) */}
                <div className="relative z-10 w-full pt-16 md:pt-24 px-6 md:px-16 flex flex-col md:flex-row justify-between items-start gap-12">

                    {/* Izquierda: Título y CTA Principal */}
                    <div className="max-w-3xl flex flex-col items-start gap-8">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="text-white font-serif text-5xl md:text-7xl lg:text-[5rem] leading-[1.05] tracking-tight"
                        >
                            Un gran evento también comienza con una gran bienvenida
                        </motion.h2>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2">
                            {/* CTA #1 PRIMARIO */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#fc7643] hover:bg-[#d95a2b] transition-colors text-white rounded-full pl-4 pr-7 py-2.5 flex items-center gap-3 font-bold text-base cursor-pointer shadow-xl group"
                            >
                                <div className="bg-white text-[#fc7643] rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:rotate-45">
                                    <ArrowUpRight size={18} strokeWidth={2.5} />
                                </div>
                                Organizar mis invitados
                            </motion.button>

                            {/* CTA #2 SECUNDARIO (Estilo fantasma/glass) */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-colors text-white rounded-full px-7 py-3 flex items-center justify-center gap-3 font-semibold text-base cursor-pointer shadow-xl"
                            >
                                Ver cómo funciona
                            </motion.button>
                        </div>
                    </div>

                    {/* Derecha: Texto descriptivo de apoyo */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="max-w-sm md:text-right"
                    >
                        <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed">
                            Despídete de las listas de papel interminables. Asegura el orden en la puerta desde el primer segundo.
                        </p>
                    </motion.div>
                </div>

                {/* Contenido Inferior (Las 3 Tarjetas de los Pasos) */}
                <div className="relative z-10 w-full pb-8 md:pb-12 px-6 md:px-16 mt-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {CARDS_DATA.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                                transition={{ delay: index * 0.15, duration: 0.6, type: "spring", bounce: 0.3 }}
                                className="bg-white rounded-[2rem] p-8 md:p-10 flex flex-col text-left shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-white/20 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                            >
                                {/* Pequeño acento visual en la esquina superior */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#fcdbd0]/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#fc7643]/20 transition-colors duration-500"></div>

                                <span className="text-[#fc7643] font-serif text-5xl md:text-6xl font-light tracking-tighter mb-6">
                                    {card.number}
                                </span>
                                <h3 className="text-[#ce5a4e] font-serif text-3xl md:text-4xl tracking-tight mb-4 leading-none">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                                    {card.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}