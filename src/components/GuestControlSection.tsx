'use client';

import { motion } from 'framer-motion';
import { Fingerprint, Users, ClipboardCheck, QrCode, ArrowUpRight, Sparkles } from 'lucide-react';

export default function GuestControlSection() {
    return (
        <div className="w-full flex flex-col bg-[#FAFAF9]">
            {/* 1. TEXTOS SUPERIORES */}
            <section className="pt-32 pb-16 relative z-30 flex flex-col items-center text-center px-6">

                {/* Badge "Super Wow" animado y rediseñado */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-black/5 shadow-sm px-5 py-2 rounded-full flex items-center gap-2 mb-8"
                >
                    <Sparkles size={16} className="text-[#ce5a4e]" strokeWidth={2} />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2a1714]/80 mt-0.5">
                        El Efecto Wow
                    </span>
                </motion.div>

                {/* Título con énfasis editorial en "colados" */}
                <h2 className="text-5xl md:text-[5rem] font-serif font-medium leading-[1.05] tracking-tight mb-8 max-w-4xl text-[#2a1714]">
                    El sistema que evita <span className="italic font-light text-[#ce5a4e]">colados</span> en tu evento.
                </h2>

                <p className="text-xl font-medium text-[#2a1714] max-w-3xl leading-relaxed mx-auto mb-4">
                    Tu evento es privado. Y cada invitación merece ser respetada.
                </p>
                <p className="text-lg text-[#2a1714]/60 max-w-2xl leading-relaxed mx-auto">
                    Nuestra tecnología utiliza códigos únicos y pases asignados para garantizar que solo asistan quienes tú decidas.
                </p>

                {/* CTA #2 SECUNDARIO - Estilo premium delineado */}
                <button className="mt-10 border border-[#2a1714]/30 text-[#2a1714] px-6 py-2.5 rounded-full flex items-center gap-3 font-bold hover:bg-[#ce5a4e] hover:border-[#ce5a4e] hover:text-white transition-all group shadow-sm shrink-0 cursor-pointer">
                    Ver cómo funciona
                    <div className="transition-transform group-hover:rotate-45">
                        <ArrowUpRight size={18} strokeWidth={2.5} />
                    </div>
                </button>
            </section>

            {/* 2. SECCIÓN PRINCIPAL */}
            <section className="relative w-full">

                {/* LA MAGIA STICKY */}
                <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
                    <div className="sticky top-0 w-full h-[100dvh] flex justify-center items-end">
                        <img
                            src="/mano.png"
                            alt="Mockup App Control de Invitados"
                            className="w-auto h-[75vh] md:h-[85vh] object-contain object-bottom drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
                        />
                    </div>
                </div>

                <div className="relative z-10 flex flex-col w-full">

                    {/* A. GRID DE FOTOS */}
                    <div className="max-w-[1400px] mx-auto w-full px-6 pb-24 pt-[25vh] md:pt-[15vh]">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                            <div className="h-[60vh] lg:h-[75vh] rounded-[2rem] overflow-hidden bg-gray-200">
                                <img src="/imagenes-verticales/5.png" alt="Evento elegante" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-[60vh] lg:h-[75vh] rounded-[2rem] overflow-hidden bg-gray-200">
                                <img src="/imagenes-verticales/2.png" alt="Invitados" className="w-full h-full object-cover" />
                            </div>

                            {/* EL HUECO VACÍO CENTRAL */}
                            <div className="hidden md:block"></div>

                            <div className="h-[60vh] lg:h-[75vh] rounded-[2rem] overflow-hidden bg-gray-200">
                                <img src="/imagenes-verticales/3.png" alt="Celebración" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-[60vh] lg:h-[75vh] rounded-[2rem] overflow-hidden bg-gray-200">
                                <img src="/imagenes-verticales/4.png" alt="Brindis" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* B. SECCIÓN TERRACOTA (TARJETAS) */}
                    <div className="bg-[#ce5a4e] pt-20 pb-32 px-6 w-full">
                        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">

                            {/* COLUMNA IZQUIERDA */}
                            <div className="flex flex-col gap-6 lg:gap-10">

                                {/* Tarjeta 1 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-xl flex flex-col"
                                >
                                    <div className="w-14 h-14 bg-[#ce5a4e]/10 rounded-full flex items-center justify-center mb-6">
                                        <Fingerprint className="text-[#ce5a4e]" size={28} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-3xl font-serif font-medium mb-4 text-[#2a1714]">Código único por invitación</h4>
                                    <p className="text-[#2a1714]/70 leading-relaxed font-medium">Cada familia o invitado recibe un código exclusivo para confirmar asistencia. Esto permite identificar exactamente quién responde a cada invitación.</p>
                                </motion.div>

                                {/* Tarjeta 2 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                    className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-xl flex flex-col"
                                >
                                    <div className="w-14 h-14 bg-[#ce5a4e]/10 rounded-full flex items-center justify-center mb-6">
                                        <Users className="text-[#ce5a4e]" size={28} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-3xl font-serif font-medium mb-4 text-[#2a1714]">Pases limitados por invitado</h4>
                                    <p className="text-[#2a1714]/70 leading-relaxed font-medium">Cada invitación tiene un número de pases asignados. Así puedes controlar con precisión cuántas personas pueden asistir bajo cada invitación.</p>
                                </motion.div>

                            </div>

                            {/* COLUMNA CENTRAL (Totalmente vacía para que baje el teléfono) */}
                            <div className="hidden md:block pointer-events-none"></div>

                            {/* COLUMNA DERECHA */}
                            <div className="flex flex-col gap-6 lg:gap-10 md:pt-32">

                                {/* Tarjeta 3 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-xl flex flex-col"
                                >
                                    <div className="w-14 h-14 bg-[#ce5a4e]/10 rounded-full flex items-center justify-center mb-6">
                                        <ClipboardCheck className="text-[#ce5a4e]" size={28} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-3xl font-serif font-medium mb-4 text-[#2a1714]">Confirmación validada</h4>
                                    <p className="text-[#2a1714]/70 leading-relaxed font-medium">El sistema registra automáticamente cada confirmación. Sabes quién confirmó, cuántas personas asistirán y quién aún no responde en tiempo real.</p>
                                </motion.div>

                                {/* Tarjeta 4 con CTA Principal actualizado */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                    className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-xl flex flex-col"
                                >
                                    <div className="w-14 h-14 bg-[#ce5a4e]/10 rounded-full flex items-center justify-center mb-6">
                                        <QrCode className="text-[#ce5a4e]" size={28} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-3xl font-serif font-medium mb-4 text-[#2a1714]">Acceso con QR el día</h4>
                                    <p className="text-[#2a1714]/70 leading-relaxed font-medium mb-8">Cada invitado recibe un ticket digital con código QR. El día del evento puedes escanearlo y controlar el acceso de manera ágil y segura.</p>

                                    {/* CTA #1 PRIMARIO - Mismo estilo que usamos en ProblemSection */}
                                    <button className="bg-[#ce5a4e] text-white px-7 py-3 rounded-full flex items-center gap-3 text-base md:text-lg font-bold hover:-translate-y-1 transition-transform group shadow-lg w-fit cursor-pointer">
                                        Organizar mis invitados
                                        <div className="bg-white text-[#ce5a4e] rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:rotate-45">
                                            <ArrowUpRight size={18} strokeWidth={2.5} />
                                        </div>
                                    </button>
                                </motion.div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
}