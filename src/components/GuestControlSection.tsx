'use client';

import { motion } from 'framer-motion';
import { Fingerprint, Users, ClipboardCheck, QrCode, ArrowUpRight } from 'lucide-react';

export default function GuestControlSection() {
    return (
        <div className="w-full flex flex-col bg-[#f1f7ed]">

            {/* 1. TEXTOS SUPERIORES */}
            <section className="pt-32 pb-16 relative z-30 flex flex-col items-center text-center px-6">
                <span className="border border-[#1a3831]/20 bg-[#eef67a] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 flex items-center gap-2 text-[#1a3831]">
                    <span className="text-[10px]">⎋</span> El Primer "Wow"
                </span>
                <h2 className="text-5xl md:text-7xl font-serif font-medium leading-[1.05] tracking-tight mb-8 max-w-4xl text-[#1a3831]">
                    El sistema que evita colados en tu evento
                </h2>
                <p className="text-xl font-medium text-[#1a3831] max-w-3xl leading-relaxed mx-auto mb-4">
                    Tu evento es privado. Y cada invitación merece ser respetada.
                </p>
                {/* Texto "amarillo" adaptado y resumido para no ser redundante */}
                <p className="text-lg text-[#1a3831]/70 max-w-2xl leading-relaxed mx-auto">
                    Nuestra tecnología utiliza códigos únicos y pases asignados para garantizar que solo asistan quienes tú decidas.
                </p>

                {/* CTA #2 SECUNDARIO */}
                <button className="mt-8 border-2 border-[#1a3831] text-[#1a3831] px-6 py-2.5 rounded-full flex items-center gap-3 font-semibold text-sm hover:bg-[#1a3831] hover:text-white transition-all group shrink-0 cursor-pointer">
                    Ver cómo funciona
                    <ArrowUpRight size={18} strokeWidth={2.5} className="transition-transform group-hover:rotate-45" />
                </button>
            </section>

            {/* 2. SECCIÓN PRINCIPAL */}
            <section className="relative w-full">

                {/* LA MAGIA STICKY */}
                <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
                    <div className="sticky top-0 w-full h-[100dvh] flex justify-center items-end">
                        <img
                            src="/images/telefono.png"
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
                                <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop" alt="Evento elegante" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-[60vh] lg:h-[75vh] rounded-[2rem] overflow-hidden bg-gray-200">
                                <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop" alt="Invitados" className="w-full h-full object-cover" />
                            </div>

                            {/* EL HUECO VACÍO CENTRAL */}
                            <div className="hidden md:block"></div>

                            <div className="h-[60vh] lg:h-[75vh] rounded-[2rem] overflow-hidden bg-gray-200">
                                <img src="https://images.unsplash.com/photo-1530103862676-de8892ebe6c4?q=80&w=800&auto=format&fit=crop" alt="Celebración" className="w-full h-full object-cover" />
                            </div>
                            <div className="h-[60vh] lg:h-[75vh] rounded-[2rem] overflow-hidden bg-gray-200">
                                <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop" alt="Brindis" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* B. SECCIÓN VERDE OSCURO (TARJETAS) */}
                    <div className="bg-[#113227] pt-20 pb-32 px-6 w-full">
                        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">

                            {/* COLUMNA IZQUIERDA */}
                            <div className="flex flex-col gap-6 lg:gap-10">

                                {/* Tarjeta 1 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-2xl flex flex-col"
                                >
                                    <div className="w-14 h-14 bg-[#eef67a] rounded-full flex items-center justify-center mb-6">
                                        <Fingerprint className="text-[#113227]" size={28} />
                                    </div>
                                    <h4 className="text-3xl font-serif font-medium mb-4 text-[#113227]">Código único por invitación</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">Cada familia o invitado recibe un código exclusivo para confirmar asistencia. Esto permite identificar exactamente quién responde a cada invitación.</p>
                                </motion.div>

                                {/* Tarjeta 2 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                    className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-2xl flex flex-col"
                                >
                                    <div className="w-14 h-14 bg-[#eef67a] rounded-full flex items-center justify-center mb-6">
                                        <Users className="text-[#113227]" size={28} />
                                    </div>
                                    <h4 className="text-3xl font-serif font-medium mb-4 text-[#113227]">Pases limitados por invitado</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">Cada invitación tiene un número de pases asignados. Así puedes controlar con precisión cuántas personas pueden asistir bajo cada invitación.</p>
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
                                    className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-2xl flex flex-col"
                                >
                                    <div className="w-14 h-14 bg-[#eef67a] rounded-full flex items-center justify-center mb-6">
                                        <ClipboardCheck className="text-[#113227]" size={28} />
                                    </div>
                                    <h4 className="text-3xl font-serif font-medium mb-4 text-[#113227]">Confirmación validada</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium">El sistema registra automáticamente cada confirmación. Sabes quién confirmó, cuántas personas asistirán y quién aún no responde en tiempo real.</p>
                                </motion.div>

                                {/* Tarjeta 4 con CTA Principal */}
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                    className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-2xl flex flex-col"
                                >
                                    <div className="w-14 h-14 bg-[#eef67a] rounded-full flex items-center justify-center mb-6">
                                        <QrCode className="text-[#113227]" size={28} />
                                    </div>
                                    <h4 className="text-3xl font-serif font-medium mb-4 text-[#113227]">Acceso con QR el día del evento</h4>
                                    <p className="text-gray-600 leading-relaxed font-medium mb-8">Cada invitado recibe un ticket digital con código QR. El día del evento puedes escanearlo y controlar el acceso de manera ágil y segura.</p>

                                    {/* CTA #1 PRIMARIO */}
                                    <button className="w-fit py-3.5 px-7 bg-[#E07A5F] text-white rounded-full hover:bg-[#c96950] transition-colors flex items-center justify-center gap-2 font-bold text-sm md:text-base group shadow-lg cursor-pointer">
                                        Organizar mis invitados
                                        <ArrowUpRight size={18} className="opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={2.5} />
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