'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { LayoutGrid, UserPlus, MessageCircle, QrCode, ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

// PALETA REMODELADA: Progresión de claro a oscuro para un efecto de profundidad premium
const FEATURES = [
    {
        id: 1,
        icon: LayoutGrid,
        title: "Gestión Centralizada",
        description: "Saber con claridad quién ya confirmó y gestionar tu lista completa de invitados, mesas y detalles desde un solo lugar.",
        image: "/imagenes-horizontales/GESTION-CENTRALIZADA-EVENTOCLIC.png",
        theme: "light",
        bgColor: "bg-white",
        textColor: "text-[#2a1714]",
        iconColor: "text-[#ce5a4e]",
        descColor: "text-[#2a1714]/70",
        tagColor: "text-[#ce5a4e]/80",
        tagText: "Control total en tiempo real"
    },
    {
        id: 2,
        icon: UserPlus,
        title: "Personalización Única",
        description: "Personaliza cada invitación con el nombre de cada familia e invitado, asignando pases con códigos exclusivos.",
        image: "/imagenes-horizontales/INVITADOS-EVENTOCLICCOM.png",
        theme: "sand",
        bgColor: "bg-[#fdf8f6]", // Un arena muy sutil
        textColor: "text-[#2a1714]",
        iconColor: "text-[#ce5a4e]",
        descColor: "text-[#2a1714]/70",
        tagColor: "text-[#ce5a4e]/80",
        tagText: "Un pase para cada invitado"
    },
    {
        id: 3,
        icon: MessageCircle,
        title: "Envíos por WhatsApp",
        description: "Envía invitaciones y recordatorios fácilmente por WhatsApp, sin perder el hilo de las conversaciones.",
        image: "/imagenes-horizontales/MENSAJES-EVENTOCLIC.png",
        theme: "terracotta",
        bgColor: "bg-[#ce5a4e]",
        textColor: "text-white",
        iconColor: "text-[#fcdbd0]",
        descColor: "text-white/80",
        tagColor: "text-[#fcdbd0]",
        tagText: "Respuestas directas y rápidas"
    },
    {
        id: 4,
        icon: QrCode,
        title: "Tickets & Recepción",
        description: "Genera tickets digitales con QR y registra el ingreso el día del evento con un modo recepción especial.",
        image: "/imagenes-horizontales/QR-EVENTOCLIC.png",
        theme: "dark",
        bgColor: "bg-[#2a1714]", // Carbón oscuro súper elegante
        textColor: "text-white",
        iconColor: "text-[#ce5a4e]",
        descColor: "text-white/70",
        tagColor: "text-white/50",
        tagText: "Ingreso ágil sin engaños"
    }
];

// --- COMPONENTES VISUALES FLOTANTES (Se mantienen pero con ajustes sutiles de color) ---

const VisualGestiones = ({ progress, range }: { progress: MotionValue<number>, range: number[] }) => {
    const fillWidth = useTransform(progress, range, ["0%", "85%"]);
    return (
        <div className="w-full relative flex flex-col gap-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/50 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ce5a4e]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                <div className="flex justify-between items-end mb-4 relative z-10">
                    <div>
                        <div className="text-[10px] font-bold text-[#2a1714]/40 uppercase tracking-widest mb-1">Confirmados</div>
                        <div className="text-4xl font-serif font-medium text-[#ce5a4e]">214 <span className="text-lg text-[#2a1714]/30 font-sans">/ 250</span></div>
                    </div>
                    <div className="bg-[#FAFAF9] px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-xs font-bold text-[#ce5a4e] border border-black/5">
                        <CheckCircle2 size={14} className="text-[#ce5a4e]" /> Listo
                    </div>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden relative z-10">
                    <motion.div style={{ width: fillWidth }} className="h-full bg-[#ce5a4e] rounded-full"></motion.div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/50 shadow-xl flex flex-col gap-1">
                    <div className="text-xl font-serif font-medium text-[#2a1714]">24</div>
                    <div className="text-[9px] uppercase font-bold text-[#2a1714]/40">Mesas Asignadas</div>
                </div>
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/50 shadow-xl flex flex-col gap-1">
                    <div className="text-xl font-serif font-medium text-[#2a1714]">100%</div>
                    <div className="text-[9px] uppercase font-bold text-[#2a1714]/40">Dietas Revisadas</div>
                </div>
            </div>
        </div>
    );
};

const VisualPersonalizacion = () => {
    return (
        <div className="w-full flex items-center justify-start relative perspective-[1000px]">
            <motion.div
                style={{ rotateY: 10, rotateX: 5 }}
                className="w-full max-w-[280px] bg-white/40 backdrop-blur-md rounded-3xl p-1 shadow-[20px_20px_60px_rgba(0,0,0,0.15)] border border-white/50 origin-bottom-left"
            >
                <div className="bg-[#ce5a4e] rounded-[1.5rem] p-6 text-white relative overflow-hidden flex flex-col gap-6 shadow-inner">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                    <div>
                        <div className="text-[10px] text-white/60 uppercase tracking-widest font-bold mb-2 flex items-center gap-1.5">
                            <ShieldCheck size={12} /> Pase VIP
                        </div>
                        <div className="text-2xl font-serif italic text-white">Familia<br />Rodríguez Garza</div>
                    </div>
                    <div className="flex justify-between items-end border-t border-white/20 pt-4">
                        <div>
                            <div className="text-[9px] text-white/60 uppercase font-bold mb-1">Accesos</div>
                            <div className="text-xl font-medium text-white">4 Pases</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[9px] text-white/60 uppercase font-bold mb-1">Código Único</div>
                            <div className="font-mono text-sm bg-black/20 px-2 py-1 rounded text-white border border-white/10">RDZ-24X</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const VisualWhatsApp = () => {
    return (
        <div className="w-full flex flex-col justify-end gap-3 relative">
            <div className="bg-[#ce5a4e]/95 backdrop-blur-md border border-white/10 p-3.5 rounded-2xl rounded-tl-none self-start w-[85%] shadow-xl">
                <div className="text-sm text-white/90 leading-relaxed font-medium">
                    ¡Hola Familia! Nos emociona invitarlos a nuestra boda. ✨
                </div>
            </div>
            <div className="bg-[#2a1714]/95 backdrop-blur-md border border-white/10 p-4 rounded-2xl rounded-tr-none self-end w-[85%] shadow-xl">
                <div className="text-sm text-white/90 leading-relaxed font-medium">
                    Confirmen su asistencia y vean los detalles en este enlace único:
                </div>
                <div className="mt-3 bg-black/30 px-3 py-2 rounded-lg text-xs font-mono truncate border border-white/5 text-white/70">
                    clic.bo/RDZ-24X
                </div>
            </div>
            <div className="bg-white/95 backdrop-blur-md border border-black/5 p-3 rounded-2xl rounded-tl-none self-start w-fit shadow-xl flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ce5a4e]" />
                <span className="text-xs text-[#2a1714]/80 font-bold">Confirmación recibida</span>
            </div>
        </div>
    );
};

const VisualQR = ({ progress, range }: { progress: MotionValue<number>, range: number[] }) => {
    const scanLineY = useTransform(progress, range, ["0%", "100%"]);
    return (
        <div className="w-full flex items-center justify-end relative perspective-[1000px]">
            <motion.div style={{ rotateX: 5, rotateY: -10, scale: 0.85 }} className="relative bg-white p-5 rounded-[1.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col items-center gap-3 origin-bottom-right max-w-[220px]">
                <div className="text-center">
                    <div className="text-[9px] font-bold text-[#2a1714]/40 uppercase tracking-widest leading-tight">Tu ticket digital</div>
                    <div className="text-base font-serif italic font-medium text-[#2a1714] leading-tight mt-1">Familia Rodríguez</div>
                </div>
                <div className="relative w-24 h-24 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center overflow-hidden">
                    <QrCode size={64} className="text-[#2a1714] opacity-80" strokeWidth={1.5} />
                    <motion.div
                        style={{ top: scanLineY }}
                        className="absolute left-0 w-full h-0.5 bg-[#ce5a4e] shadow-[0_0_15px_rgba(206,90,78,0.8)] z-10"
                    ></motion.div>
                </div>
                <div className="w-full bg-[#ce5a4e]/10 text-[#ce5a4e] py-1.5 px-3 rounded-lg text-center text-[9px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                    <Sparkles size={12} /> Listo para escanear
                </div>
            </motion.div>
        </div>
    );
};

// --- TARJETA APILABLE INDIVIDUAL ---

const StackCard = ({ card, index, progress, totalCards }: { card: any; index: number; progress: MotionValue<number>; totalCards: number }) => {
    const Icon = card.icon;

    const startRange = index / totalCards;
    const endRange = (index + 1) / totalCards;

    // Ajustamos el rango para que la tarjeta empiece a subir un poco antes y se sienta más fluida
    const scrollRange = [Math.max(0, startRange - 0.2), startRange];

    // Animación de entrada fluida (viene desde 100vh en lugar de 80vh para que no aparezca de golpe)
    const y = useTransform(progress, scrollRange, ["100vh", "0vh"]);

    const isNotLast = index < totalCards - 1;
    // Escala más sutil (baja a 0.96 en lugar de 0.95) para que no se achique tanto
    const scale = useTransform(progress, [endRange, endRange + 0.1, 1], [1, isNotLast ? 0.96 : 1, isNotLast ? 1 - (totalCards - index) * 0.03 : 1]);

    // Top Offset dinámico (crea el efecto de cascada en la parte superior)
    const topOffset = `calc(10vh + ${index * 36}px)`;

    return (
        <motion.div
            style={{
                y,
                scale,
                top: topOffset,
                zIndex: index,
            }}
            className={`absolute left-1/2 -translate-x-1/2 w-[92vw] max-w-[1000px] h-[65vh] max-h-[550px] ${card.bgColor} rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col md:flex-row overflow-hidden border ${card.theme === 'light' || card.theme === 'sand' ? 'border-black/5' : 'border-white/10'} origin-top`}
        >
            <div className="w-full md:w-[45%] flex flex-col justify-between h-full p-8 md:p-12 order-2 md:order-1 relative z-10">
                <div>
                    <div className={`w-14 h-14 ${card.theme === 'light' || card.theme === 'sand' ? 'bg-[#ce5a4e]/10' : 'bg-white/10 backdrop-blur-sm'} rounded-[1.25rem] flex items-center justify-center mb-8`}>
                        <Icon className={card.iconColor} size={26} strokeWidth={2} />
                    </div>
                    <h3 className={`text-3xl md:text-[2.5rem] font-serif font-medium leading-[1.1] tracking-tight mb-5 ${card.textColor}`}>
                        {card.title}
                    </h3>
                    <p className={`text-base md:text-lg leading-relaxed ${card.descColor}`}>
                        {card.description}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${card.iconColor} ${card.theme === 'dark' ? 'bg-[#ce5a4e]' : 'bg-current'}`}></div>
                    <div className={`text-[10px] font-bold uppercase tracking-widest ${card.tagColor}`}>
                        {card.tagText}
                    </div>
                </div>
            </div>

            <div className={`w-full md:w-[55%] h-full relative order-1 md:order-2 flex items-center justify-center p-3 md:p-4 ${card.theme === 'light' || card.theme === 'sand' ? 'bg-black/5' : 'bg-black/20'}`}>
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-xl relative">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover object-center absolute inset-0 z-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-20 flex flex-col justify-end pointer-events-none">
                        {card.id === 1 && <VisualGestiones progress={progress} range={scrollRange} />}
                        {card.id === 2 && <VisualPersonalizacion />}
                        {card.id === 3 && <VisualWhatsApp />}
                        {card.id === 4 && <VisualQR progress={progress} range={scrollRange} />}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function FeaturesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Trackeamos el scroll
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // LA MAGIA: Pasamos el scroll raw por un resorte (spring) de físicas para que sea ultra suave y no se sienta "trabado"
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100, // Fuerza del resorte
        damping: 30,    // Fricción (evita que rebote)
        restDelta: 0.001
    });

    return (
        <div className="w-full bg-[#FAFAF9] flex flex-col relative">

            {/* TEXTO INTRODUCTORIO FIJO */}
            <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto text-center flex flex-col items-center z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-black/5 shadow-sm px-5 py-2 rounded-full flex items-center gap-2 mb-8"
                >
                    <Sparkles size={16} className="text-[#ce5a4e]" strokeWidth={2} />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2a1714]/80 mt-0.5">
                        Centro de Control
                    </span>
                </motion.div>

                <h2 className="text-5xl md:text-[5rem] font-serif font-medium leading-[1.05] tracking-tight mb-8 text-[#2a1714]">
                    Por fin sabrás qué está pasando con tus <span className="italic font-light text-[#ce5a4e]">invitados.</span>
                </h2>
                <p className="text-xl font-medium text-[#2a1714] max-w-3xl leading-relaxed mx-auto mb-4">
                    Reunimos toda la información en un solo lugar.
                </p>
                <p className="text-lg text-[#2a1714]/60 max-w-2xl leading-relaxed mx-auto">
                    Actualizaciones automáticas para que organices tu evento con total tranquilidad y sin estrés.
                </p>
            </section>

            {/* ÁREA DE SCROLL */}
            <section ref={sectionRef} className="relative h-[450vh] w-full">
                <div className="sticky top-0 h-screen w-full overflow-hidden flex items-start justify-center">
                    <div className="relative w-full h-full">
                        {FEATURES.map((card, index) => (
                            <StackCard
                                key={card.id}
                                card={card}
                                index={index}
                                progress={smoothProgress} // Pasamos el progreso suavizado aquí
                                totalCards={FEATURES.length}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN FINAL DE CTAS (Diseño Premium) */}
            <section className="relative z-20 bg-[#ce5a4e] py-32 px-6 mt-[-2px]">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <h3 className="text-4xl md:text-[4rem] font-serif font-medium leading-[1.05] tracking-tight mb-12 text-white">
                        Toma el control de tu evento <span className="italic font-light opacity-90">hoy mismo.</span>
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-5 items-center w-full sm:w-auto">
                        <button className="bg-white text-[#ce5a4e] px-7 py-3 rounded-full flex items-center justify-center gap-3 text-base md:text-lg font-bold hover:-translate-y-1 transition-transform group shadow-xl w-full sm:w-fit cursor-pointer">
                            Organizar mis invitados
                            <div className="bg-[#ce5a4e] text-white rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:rotate-45">
                                <ArrowUpRight size={18} strokeWidth={2.5} />
                            </div>
                        </button>

                        <button className="border border-white/30 text-white px-7 py-3.5 rounded-full flex items-center justify-center gap-3 text-base font-bold hover:bg-white hover:text-[#ce5a4e] transition-colors w-full sm:w-fit cursor-pointer">
                            Ver cómo funciona
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}