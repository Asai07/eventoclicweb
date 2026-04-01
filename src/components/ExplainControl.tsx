'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet, Send, PieChart, ArrowUpRight, CheckCircle2, MessageCircle, FileUp, Bell } from 'lucide-react';

const STEPS_DATA = [
    {
        id: 0,
        num: "01",
        title: "Importa tu lista de invitados",
        description: "Sube tu lista de invitados fácilmente desde Excel o agrégala manualmente. El sistema organizará automáticamente a cada invitado con su código.",
        icon: FileSpreadsheet
    },
    {
        id: 1,
        num: "02",
        title: "Envía tus invitaciones",
        description: "Comparte tu invitación o tarjeta digital con cada invitado mediante WhatsApp. Cada invitación incluye su código único para confirmar asistencia.",
        icon: Send
    },
    {
        id: 2,
        num: "03",
        title: "Visualiza las confirmaciones",
        description: "Tus invitados registran su asistencia y el sistema actualiza automáticamente las confirmaciones en tu Centro de Control. Así siempre sabrás quién asistirá.",
        icon: PieChart
    }
];

// --- MOCKUPS VISUALES DINÁMICOS ---

const VisualStep1 = () => (
    <motion.div
        key="step1"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.05, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-full flex flex-col items-center justify-center relative p-8"
    >
        <div className="absolute inset-0 bg-[#eef67a]/10 rounded-[3rem] blur-3xl"></div>

        {/* Simulación de subida de archivo y base de datos */}
        <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="w-24 h-24 bg-white rounded-2xl shadow-2xl flex items-center justify-center mb-6 border border-gray-100 z-20"
            >
                <FileSpreadsheet size={48} className="text-[#16554a]" strokeWidth={1.5} />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#eef67a] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <FileUp size={20} className="text-[#113227]" />
                </div>
            </motion.div>

            <div className="w-full bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 space-y-3">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-2">Procesando Lista...</div>
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="w-full bg-gray-50 rounded-xl p-3 flex justify-between items-center border border-gray-100"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#113227]/10 flex items-center justify-center text-[10px] font-bold text-[#113227]">0{i}</div>
                            <div className="h-2 w-24 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="bg-[#eef67a] px-2 py-1 rounded text-[10px] font-bold text-[#113227]">EV-X{i}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.div>
);

const VisualStep2 = () => (
    <motion.div
        key="step2"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.05, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-full flex items-center justify-center relative p-8"
    >
        <div className="absolute inset-0 bg-[#E07A5F]/10 rounded-[3rem] blur-3xl"></div>

        {/* Simulación de WhatsApp y Tarjeta */}
        <div className="relative z-10 w-full max-w-sm flex flex-col gap-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="bg-white p-5 rounded-2xl rounded-tl-none shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-gray-100 relative"
            >
                <div className="absolute -left-4 -top-4 w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg border-4 border-[#f1f7ed]">
                    <MessageCircle size={20} className="text-white" />
                </div>
                <div className="text-sm text-gray-700 leading-relaxed font-medium mb-3">
                    ¡Nos casamos! Nos encantaría que nos acompañes. Confirma tu asistencia aquí:
                </div>
                <div className="bg-[#f1f7ed] border border-[#113227]/10 p-3 rounded-xl flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#113227] rounded-lg flex items-center justify-center shrink-0">
                        <Send size={18} className="text-[#eef67a]" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-[#113227]">Invitación Digital</div>
                        <div className="text-[10px] text-[#E07A5F] font-medium">clic.bo/boda/EV-X1</div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20, rotate: -5 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ delay: 0.5 }}
                className="self-end w-4/5 bg-[#113227] p-5 rounded-2xl rounded-br-none shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#E07A5F] rounded-full blur-2xl -translate-y-1/2 translate-x-1/4 opacity-50"></div>
                <div className="flex items-center gap-2 text-[#eef67a] mb-2">
                    <CheckCircle2 size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">Asistiré</span>
                </div>
                <div className="text-white/80 text-xs">Confirmación enviada con el código <span className="text-white font-mono bg-white/10 px-1 py-0.5 rounded">EV-X1</span></div>
            </motion.div>
        </div>
    </motion.div>
);

const VisualStep3 = () => (
    <motion.div
        key="step3"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.05, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-full flex flex-col items-center justify-center relative p-8"
    >
        <div className="absolute inset-0 bg-[#113227]/5 rounded-[3rem] blur-3xl"></div>

        {/* Simulación de Dashboard Actualizándose */}
        <div className="relative z-10 w-full max-w-sm flex flex-col gap-4">
            <div className="bg-white p-6 rounded-[2rem] shadow-2xl border border-gray-100 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#eef67a] rounded-full blur-xl opacity-60"></div>
                <PieChart size={40} className="text-[#113227] mb-4" strokeWidth={1.5} />
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Asistencia Total</div>
                <div className="text-5xl font-bold text-[#113227] mb-4">145 <span className="text-xl text-gray-400 font-medium">/ 150</span></div>

                <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden relative">
                    <motion.div
                        initial={{ width: "0%" }} animate={{ width: "95%" }} transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full bg-[#E07A5F] rounded-full"
                    ></motion.div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-[#113227] rounded-2xl p-4 text-white shadow-lg">
                    <Bell size={18} className="text-[#eef67a] mb-2" />
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider font-bold">Nuevas hoy</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-lg">
                    <CheckCircle2 size={18} className="text-[#E07A5F] mb-2" />
                    <div className="text-2xl font-bold text-[#113227]">100%</div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Mesas Listas</div>
                </motion.div>
            </div>
        </div>
    </motion.div>
);


export default function HowItWorksSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Cambiar el paso activo basado en el progreso del scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.33) setActiveStep(0);
        else if (latest >= 0.33 && latest < 0.66) setActiveStep(1);
        else setActiveStep(2);
    });

    return (
        <div className="w-full bg-[#f1f7ed] flex flex-col relative pb-32">

            {/* TÍTULO DE LA SECCIÓN */}
            <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
                <span className="border border-[#1a3831]/20 bg-[#eef67a] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-[#1a3831] shadow-sm">
                    Explicación Rápida
                </span>
                <h2 className="text-5xl md:text-7xl font-serif font-medium leading-[1.05] tracking-tight mb-6 text-[#113227]">
                    Organizar tus invitados es más fácil de lo que imaginas
                </h2>
                <p className="text-xl md:text-2xl text-[#113227]/80 max-w-3xl leading-relaxed mx-auto">
                    Con el Centro de Control puedes gestionar todo tu evento en solo tres pasos.
                </p>
            </section>

            {/* ZONA STICKY DE SCROLL */}
            <div ref={containerRef} className="relative w-full h-[300vh] max-w-[1400px] mx-auto px-6">

                <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24 pt-[10vh] pb-[10vh]">

                    {/* COLUMNA IZQUIERDA: Textos que cambian (Opacidad) */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-12 lg:pr-10 relative z-20">
                        {STEPS_DATA.map((step, index) => {
                            const isActive = activeStep === index;
                            return (
                                <div
                                    key={step.id}
                                    className={`transition-all duration-500 ease-in-out ${isActive ? 'opacity-100 translate-x-0' : 'opacity-30 lg:-translate-x-4'}`}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`text-2xl md:text-3xl font-serif font-bold transition-colors ${isActive ? 'text-[#E07A5F]' : 'text-gray-300'}`}>
                                            {step.num}
                                        </div>
                                        <h3 className={`text-3xl md:text-4xl font-serif font-medium transition-colors ${isActive ? 'text-[#113227]' : 'text-gray-400'}`}>
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className={`text-lg md:text-xl leading-relaxed transition-colors pl-12 md:pl-14 ${isActive ? 'text-[#113227]/80' : 'text-gray-400'}`}>
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* COLUMNA DERECHA: Mockup Visual Sticky */}
                    <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh] max-h-[600px] relative z-10 flex items-center justify-center">
                        <div className="w-full h-full bg-white/50 border border-white rounded-[3rem] shadow-[0_40px_100px_rgba(17,50,39,0.08)] relative overflow-hidden flex items-center justify-center backdrop-blur-sm">
                            <AnimatePresence mode="wait">
                                {activeStep === 0 && <VisualStep1 />}
                                {activeStep === 1 && <VisualStep2 />}
                                {activeStep === 2 && <VisualStep3 />}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>

            {/* SECCIÓN FINAL DE CTAS */}
            <section className="relative z-20 pt-16 px-6">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-5 items-center justify-center w-full sm:w-auto">
                    {/* CTA #1 */}
                    <button className="bg-[#113227] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 text-lg font-bold hover:bg-[#1a4a3a] hover:-translate-y-1 transition-all group shadow-xl w-full sm:w-fit cursor-pointer">
                        Organizar mis invitados
                        <div className="bg-[#eef67a] text-[#113227] p-1 rounded-full transition-transform group-hover:rotate-45">
                            <ArrowUpRight size={16} strokeWidth={3} />
                        </div>
                    </button>

                    {/* CTA #2 */}
                    <button className="bg-transparent border-2 border-[#113227]/20 text-[#113227] px-8 py-4 rounded-full flex items-center justify-center gap-3 text-lg font-semibold hover:bg-[#113227]/5 transition-colors w-full sm:w-fit cursor-pointer">
                        Ver cómo funciona
                    </button>
                </div>
            </section>

        </div>
    );
}