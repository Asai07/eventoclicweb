'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, Transition } from 'framer-motion';
import { FileSpreadsheet, Send, PieChart, ArrowUpRight, CheckCircle2, MessageCircle, FileUp, Bell, Sparkles } from 'lucide-react';

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

// --- MOCKUPS VISUALES DINÁMICOS CON EFECTO GLASSMORPHISM ---

// Tipado explícito para que TypeScript no marque errores
const transitionPremium: Transition = { duration: 0.8, ease: [0.76, 0, 0.24, 1] };

const VisualStep1 = () => (
    <motion.div
        key="step1"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.05, y: -30 }}
        transition={transitionPremium}
        className="w-full h-full flex flex-col items-center justify-center relative p-8"
    >
        <img src="/imagenes-horizontales/8.png" alt="Importa lista" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90" />
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
            {/* Ícono superior en blanco sólido */}
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" } as Transition}
                className="w-24 h-24 bg-white rounded-[1.5rem] flex items-center justify-center mb-6 shadow-2xl relative z-20 border border-white/50"
            >
                <FileSpreadsheet size={44} className="text-[#ce5a4e]" strokeWidth={1.5} />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-[#ce5a4e] rounded-full flex items-center justify-center shadow-lg border-2 border-white/50 backdrop-blur-md">
                    <FileUp size={18} className="text-white" />
                </div>
            </motion.div>

            {/* Tarjeta de procesamiento */}
            <div className="w-full bg-white/30 backdrop-blur-xl rounded-[2rem] p-6 shadow-2xl border border-white/50">
                <div className="text-[10px] font-bold text-white uppercase tracking-widest text-center mb-5">Procesando Lista...</div>
                <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.15, ...transitionPremium } as Transition}
                            className="w-full bg-white/50 rounded-2xl p-3 px-4 flex justify-between items-center shadow-sm border border-white/40"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-sm font-bold text-[#ce5a4e]">0{i}</div>
                                <div className="h-2 w-24 bg-[#2a1714]/10 rounded-full"></div>
                            </div>
                            <div className="bg-[#ce5a4e]/10 px-3 py-1 rounded-lg text-[11px] font-bold text-[#ce5a4e]">EV-X{i}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const VisualStep2 = () => (
    <motion.div
        key="step2"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.05, y: -30 }}
        transition={transitionPremium}
        className="w-full h-full flex items-center justify-center relative p-8"
    >
        <img src="/imagenes-horizontales/9.png" alt="Enviar invitaciones" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90" />
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 w-full max-w-sm flex flex-col gap-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ...transitionPremium } as Transition}
                className="bg-white/40 backdrop-blur-xl p-6 rounded-[2rem] rounded-tl-none shadow-2xl relative border border-white/50"
            >
                <div className="absolute -left-4 -top-4 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg border-4 border-white/50 backdrop-blur-md">
                    <MessageCircle size={22} className="text-white" />
                </div>
                <div className="text-[15px] text-[#2a1714]/90 leading-relaxed font-medium mb-5 pl-2">
                    ¡Nos casamos! Nos encantaría que nos acompañes. Confirma tu asistencia aquí:
                </div>
                <div className="bg-white/50 p-3 rounded-2xl flex items-center gap-4 border border-white/40 shadow-sm">
                    <div className="w-11 h-11 bg-[#ce5a4e] rounded-xl flex items-center justify-center shrink-0 shadow-inner">
                        <Send size={18} className="text-white ml-0.5" />
                    </div>
                    <div>
                        <div className="text-[13px] font-bold text-[#2a1714]">Invitación Digital</div>
                        <div className="text-[11px] text-[#ce5a4e] font-bold mt-0.5">clic.bo/EV-X1</div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ delay: 0.4, ...transitionPremium } as Transition}
                className="self-end w-[85%] bg-[#ce5a4e]/80 backdrop-blur-xl p-5 rounded-[2rem] rounded-br-none shadow-2xl relative overflow-hidden border border-white/20"
            >
                <div className="flex items-center gap-2 text-white mb-2">
                    <CheckCircle2 size={16} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Asistiré</span>
                </div>
                <div className="text-white/80 text-xs leading-relaxed">
                    Confirmación enviada con código <span className="text-white font-mono bg-black/20 px-1.5 py-0.5 rounded shadow-inner">EV-X1</span>
                </div>
            </motion.div>
        </div>
    </motion.div>
);

const VisualStep3 = () => (
    <motion.div
        key="step3"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.05, y: -30 }}
        transition={transitionPremium}
        className="w-full h-full flex flex-col items-center justify-center relative p-8"
    >
        <img src="/imagenes-horizontales/10.png" alt="Visualiza confirmaciones" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90" />
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 w-full max-w-sm flex flex-col gap-4">
            <div className="bg-white/30 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center relative overflow-hidden border border-white/50">
                <PieChart size={36} className="text-[#ce5a4e] mb-5" strokeWidth={1.5} />
                <div className="text-[10px] font-bold text-[#2a1714]/60 uppercase tracking-widest mb-1">Asistencia Total</div>
                <div className="text-6xl font-serif font-medium text-[#2a1714] mb-6">145 <span className="text-2xl text-[#2a1714]/30 font-sans">/ 150</span></div>

                <div className="w-full h-3 bg-white/50 rounded-full overflow-hidden relative shadow-inner">
                    <motion.div
                        initial={{ width: "0%" }} animate={{ width: "95%" }} transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] } as Transition}
                        className="h-full bg-[#ce5a4e] rounded-full"
                    ></motion.div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ...transitionPremium } as Transition} className="bg-[#ce5a4e]/80 backdrop-blur-xl rounded-[2rem] p-5 text-white shadow-2xl border border-white/20">
                    <Bell size={18} className="text-white/80 mb-3" />
                    <div className="text-3xl font-serif font-medium mb-1">12</div>
                    <div className="text-[9px] text-white/60 uppercase tracking-widest font-bold">Nuevas hoy</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, ...transitionPremium } as Transition} className="bg-white/40 backdrop-blur-xl rounded-[2rem] p-5 shadow-2xl border border-white/50">
                    <CheckCircle2 size={18} className="text-[#ce5a4e] mb-3" />
                    <div className="text-3xl font-serif font-medium text-[#2a1714] mb-1">100%</div>
                    <div className="text-[9px] text-[#2a1714]/50 uppercase tracking-widest font-bold">Mesas Listas</div>
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

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.33) setActiveStep(0);
        else if (latest >= 0.33 && latest < 0.66) setActiveStep(1);
        else setActiveStep(2);
    });

    return (
        <div className="w-full bg-[#FAFAF9] flex flex-col relative pb-32">

            {/* TÍTULO DE LA SECCIÓN */}
            <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-black/5 shadow-sm px-5 py-2 rounded-full flex items-center gap-2 mb-8"
                >
                    <Sparkles size={16} className="text-[#ce5a4e]" strokeWidth={2} />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2a1714]/80 mt-0.5">
                        Explicación Rápida
                    </span>
                </motion.div>

                <h2 className="text-5xl md:text-[4.5rem] font-serif font-medium leading-[1.05] tracking-tight mb-8 text-[#2a1714]">
                    Organizar tus invitados es <span className="italic font-light text-[#ce5a4e]">más fácil</span> de lo que imaginas.
                </h2>
                <p className="text-xl md:text-2xl text-[#2a1714]/80 max-w-3xl leading-relaxed mx-auto">
                    Con el Centro de Control puedes gestionar todo tu evento en solo tres pasos.
                </p>
            </section>

            {/* ZONA STICKY DE SCROLL */}
            <div ref={containerRef} className="relative w-full h-[300vh] max-w-[1400px] mx-auto px-6">

                <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24 pt-[10vh] pb-[10vh]">

                    {/* COLUMNA IZQUIERDA: Textos */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-12 lg:pr-10 relative z-20">
                        {STEPS_DATA.map((step, index) => {
                            const isActive = activeStep === index;
                            return (
                                <div
                                    key={step.id}
                                    className={`transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${isActive ? 'opacity-100 translate-x-0' : 'opacity-30 lg:-translate-x-4'}`}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`text-2xl md:text-3xl font-serif font-bold transition-colors duration-700 ${isActive ? 'text-[#ce5a4e]' : 'text-[#2a1714]/20'}`}>
                                            {step.num}
                                        </div>
                                        <h3 className={`text-3xl md:text-4xl font-serif font-medium transition-colors duration-700 ${isActive ? 'text-[#ce5a4e]' : 'text-[#2a1714]/20'}`}>
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className={`text-lg md:text-xl leading-relaxed transition-colors duration-700 pl-12 md:pl-14 ${isActive ? 'text-[#2a1714]/70' : 'text-[#2a1714]/20'}`}>
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* COLUMNA DERECHA: Mockup Visual Sticky */}
                    <div className="w-full lg:w-1/2 h-[50vh] lg:h-[70vh] max-h-[600px] relative z-10 flex items-center justify-center">
                        <div className="w-full h-full bg-white/20 border border-white/60 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative overflow-hidden flex items-center justify-center backdrop-blur-md">
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
                    <button className="bg-[#ce5a4e] text-white px-7 py-3 rounded-full flex items-center justify-center gap-3 text-base md:text-lg font-bold hover:-translate-y-1 transition-transform group shadow-xl w-full sm:w-fit cursor-pointer">
                        Organizar mis invitados
                        <div className="bg-white text-[#ce5a4e] rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:rotate-45">
                            <ArrowUpRight size={18} strokeWidth={2.5} />
                        </div>
                    </button>

                    {/* CTA #2 */}
                    <button className="border border-[#2a1714]/20 text-[#2a1714] px-7 py-3.5 rounded-full flex items-center justify-center gap-3 text-base font-bold hover:bg-[#ce5a4e] hover:border-[#ce5a4e] hover:text-white transition-colors w-full sm:w-fit cursor-pointer">
                        Ver cómo funciona
                    </button>
                </div>
            </section>

        </div>
    );
}