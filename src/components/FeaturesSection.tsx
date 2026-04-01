'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { LayoutGrid, UserPlus, MessageCircle, QrCode, ArrowUpRight, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';

const FEATURES = [
    {
        id: 1,
        icon: LayoutGrid,
        title: "Gestión Centralizada",
        description: "Saber con claridad quién ya confirmó y gestionar tu lista completa de invitados, mesas y detalles desde un solo lugar.",
        theme: "light",
        bgColor: "bg-white",
        textColor: "text-[#113227]",
        iconColor: "text-[#E07A5F]",
        descColor: "text-gray-600",
        tagColor: "text-gray-400"
    },
    {
        id: 2,
        icon: UserPlus,
        title: "Personalización Única",
        description: "Personaliza cada invitación con el nombre de cada familia e invitado, asignando pases con códigos exclusivos.",
        theme: "sage",
        bgColor: "bg-[#eef67a]",
        textColor: "text-[#113227]",
        iconColor: "text-[#16554a]",
        descColor: "text-[#113227]/80",
        tagColor: "text-[#16554a]/60"
    },
    {
        id: 3,
        icon: MessageCircle,
        title: "Envíos por WhatsApp",
        description: "Envía invitaciones y recordatorios fácilmente por WhatsApp, sin perder el hilo de las conversaciones.",
        theme: "dark",
        bgColor: "bg-[#16554a]",
        textColor: "text-white",
        iconColor: "text-[#eef67a]",
        descColor: "text-white/80",
        tagColor: "text-white/50"
    },
    {
        id: 4,
        icon: QrCode,
        title: "Tickets & Recepción",
        description: "Genera tickets digitales con QR y registra el ingreso el día del evento con un modo recepción especial.",
        theme: "black",
        bgColor: "bg-[#113227]",
        textColor: "text-white",
        iconColor: "text-[#E07A5F]",
        descColor: "text-white/80",
        tagColor: "text-white/50"
    }
];

// --- COMPONENTES VISUALES INTERNOS (MOCKUPS PREMIUM) ---

const VisualGestiones = ({ progress, range }: { progress: MotionValue<number>, range: number[] }) => {
    const fillWidth = useTransform(progress, range, ["0%", "85%"]);

    return (
        <div className="w-full h-full relative flex flex-col justify-center gap-4 p-4">
            <div className="bg-[#f1f7ed] rounded-2xl p-5 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#eef67a]/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                <div className="flex justify-between items-end mb-4 relative z-10">
                    <div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Confirmados</div>
                        <div className="text-4xl font-bold text-[#113227]">214 <span className="text-lg text-gray-400 font-medium">/ 250</span></div>
                    </div>
                    <div className="bg-white px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-xs font-bold text-[#113227]">
                        <CheckCircle2 size={14} className="text-[#E07A5F]" /> Listo
                    </div>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden relative z-10">
                    <motion.div style={{ width: fillWidth }} className="h-full bg-[#E07A5F] rounded-full"></motion.div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col gap-2">
                    <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center"><LayoutGrid size={14} className="text-gray-400" /></div>
                    <div className="text-xl font-bold text-[#113227]">24</div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">Mesas Asignadas</div>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex flex-col gap-2">
                    <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center"><ShieldCheck size={14} className="text-gray-400" /></div>
                    <div className="text-xl font-bold text-[#113227]">100%</div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">Dietas Revisadas</div>
                </div>
            </div>
        </div>
    );
};

const VisualPersonalizacion = ({ progress, range }: { progress: MotionValue<number>, range: number[] }) => {
    const yOffset = useTransform(progress, range, [50, 0]);
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <div className="w-full h-full flex items-center justify-center relative perspective-[1000px]">
            <motion.div
                style={{ y: yOffset, opacity, rotateY: -15, rotateX: 10 }}
                className="w-full max-w-[280px] bg-white rounded-3xl p-1 shadow-[20px_20px_60px_rgba(0,0,0,0.1)] border border-white"
            >
                <div className="bg-[#113227] rounded-[1.5rem] p-6 text-white relative overflow-hidden h-full flex flex-col justify-between gap-6 border border-[#16554a]">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E07A5F]/30 rounded-full blur-2xl"></div>
                    <div>
                        <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mb-2">Pase VIP • Intransferible</div>
                        <div className="text-2xl font-serif leading-tight text-white">Familia<br />Rodríguez Garza</div>
                    </div>
                    <div className="flex justify-between items-end border-t border-white/20 pt-4">
                        <div>
                            <div className="text-[9px] text-white/50 uppercase font-bold mb-1">Accesos</div>
                            <div className="text-xl font-bold text-[#eef67a]">4 Pases</div>
                        </div>
                        <div className="text-right">
                            <div className="text-[9px] text-white/50 uppercase font-bold mb-1">Código Único</div>
                            <div className="font-mono text-sm bg-black/30 px-2 py-1 rounded text-white/90">RDZ-24X</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const VisualWhatsApp = ({ progress, range }: { progress: MotionValue<number>, range: number[] }) => {
    const bubble1Y = useTransform(progress, range, [20, 0]);
    const bubble2Y = useTransform(progress, range, [40, 0]);
    const bubble3Y = useTransform(progress, range, [60, 0]);

    return (
        <div className="w-full h-full flex flex-col justify-center gap-4 relative p-2">
            <div className="absolute inset-0 bg-[#eef67a]/5 rounded-3xl blur-xl"></div>

            <motion.div style={{ y: bubble1Y }} className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl rounded-tl-none self-start w-[85%] shadow-lg">
                <div className="w-12 h-3 bg-white/20 rounded-full mb-3"></div>
                <div className="text-sm text-white/90 leading-relaxed">
                    ¡Hola Familia! Nos emociona invitarlos a nuestra boda. ✨
                </div>
            </motion.div>

            <motion.div style={{ y: bubble2Y }} className="bg-[#E07A5F] border border-[#E07A5F]/50 p-4 rounded-2xl rounded-tr-none self-end w-[85%] shadow-[0_10px_30px_rgba(224,122,95,0.3)]">
                <div className="text-sm text-white leading-relaxed font-medium">
                    Confirmen su asistencia y vean los detalles en este enlace único:
                </div>
                <div className="mt-3 bg-white/20 px-3 py-2 rounded-lg text-xs font-mono truncate border border-white/10 text-white/90 shadow-inner">
                    clic.bo/RDZ-24X
                </div>
            </motion.div>

            <motion.div style={{ y: bubble3Y }} className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-2xl rounded-tl-none self-start w-fit shadow-lg flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#eef67a]" />
                <span className="text-xs text-white/80 font-medium">Confirmación recibida</span>
            </motion.div>
        </div>
    );
};

const VisualQR = ({ progress, range }: { progress: MotionValue<number>, range: number[] }) => {
    const scanLineY = useTransform(progress, range, ["0%", "100%"]);
    const glowOpacity = useTransform(progress, [range[0], (range[0] + range[1]) / 2, range[1]], [0, 1, 0.5]);

    return (
        <div className="w-full h-full flex items-center justify-center relative">
            <motion.div style={{ opacity: glowOpacity }} className="absolute w-40 h-40 bg-[#eef67a]/20 rounded-full blur-3xl"></motion.div>

            <div className="relative bg-white p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col items-center gap-4">
                <div className="text-center">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Escanea al llegar</div>
                    <div className="text-lg font-serif font-bold text-[#113227]">Acceso Evento</div>
                </div>

                <div className="relative w-40 h-40 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden">
                    <QrCode size={100} className="text-[#113227] opacity-80" />

                    {/* Láser de Escaneo */}
                    <motion.div
                        style={{ top: scanLineY }}
                        className="absolute left-0 w-full h-1 bg-[#E07A5F] shadow-[0_0_15px_rgba(224,122,95,1)] z-10"
                    ></motion.div>
                </div>

                <div className="w-full bg-[#113227] text-[#eef67a] py-2 rounded-xl text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                    <Zap size={14} /> Listo para escanear
                </div>
            </div>
        </div>
    );
};

// --- TARJETA APILABLE INDIVIDUAL ---

const StackCard = ({ card, index, progress, totalCards }: { card: any; index: number; progress: MotionValue<number>; totalCards: number }) => {
    const Icon = card.icon;

    // Rango activo de la tarjeta en el scroll general
    const startRange = index / totalCards;
    const endRange = (index + 1) / totalCards;
    const scrollRange = [startRange - 0.15, startRange];

    // Animación de entrada fluida
    const y = useTransform(progress, [startRange - 0.1, startRange, 1], ["80vh", "0vh", "0vh"]);

    const isNotLast = index < totalCards - 1;
    const scale = useTransform(progress, [endRange, endRange + 0.1, 1], [1, isNotLast ? 0.95 : 1, isNotLast ? 1 - (totalCards - index) * 0.04 : 1]);

    // AJUSTE DE ESPACIADO: Empezamos más abajo (12vh) para dejar "aire" en la parte inferior al final del scroll
    const topOffset = `calc(12vh + ${index * 32}px)`;

    return (
        <motion.div
            style={{
                y,
                scale,
                top: topOffset,
                zIndex: index,
            }}
            // Altura reducida a h-[65vh] max-h-[550px] para que la tarjeta no pegue contra abajo
            className={`absolute left-1/2 -translate-x-1/2 w-[92vw] max-w-[1000px] h-[65vh] max-h-[550px] ${card.bgColor} rounded-[3rem] shadow-[0_30px_80px_rgba(0,0,0,0.12)] flex flex-col md:flex-row overflow-hidden border ${card.theme === 'light' ? 'border-gray-200' : 'border-white/10'} origin-top`}
        >
            {/* TEXTOS (Mitad Izquierda) */}
            <div className="w-full md:w-[45%] flex flex-col justify-between h-full p-8 md:p-10 order-2 md:order-1 relative z-10">
                <div>
                    <div className={`w-14 h-14 ${card.theme === 'light' || card.theme === 'sage' ? 'bg-[#f1f7ed]' : 'bg-black/20 backdrop-blur-sm'} rounded-[1.25rem] flex items-center justify-center mb-6 shadow-inner`}>
                        <Icon className={card.iconColor} size={28} strokeWidth={2} />
                    </div>
                    {/* COLORES EXPLÍCITOS PARA EVITAR QUE SE SOBRESCRIBAN */}
                    <h3 className={`text-3xl md:text-5xl font-serif font-medium leading-[1.1] tracking-tight mb-4 ${card.textColor}`}>
                        {card.title}
                    </h3>
                    <p className={`text-base md:text-lg leading-relaxed ${card.descColor}`}>
                        {card.description}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${card.iconColor}`}></div>
                    <div className={`text-xs font-bold uppercase tracking-widest ${card.tagColor}`}>
                        Módulo {index + 1}
                    </div>
                </div>
            </div>

            {/* MOCKUP VISUAL (Mitad Derecha) */}
            <div className={`w-full md:w-[55%] h-full relative order-1 md:order-2 flex items-center justify-center p-4 md:p-8 ${card.theme === 'light' ? 'bg-gray-50/50' : card.theme === 'sage' ? 'bg-[#113227]/5' : 'bg-black/10'}`}>
                {card.id === 1 && <VisualGestiones progress={progress} range={scrollRange} />}
                {card.id === 2 && <VisualPersonalizacion progress={progress} range={scrollRange} />}
                {card.id === 3 && <VisualWhatsApp progress={progress} range={scrollRange} />}
                {card.id === 4 && <VisualQR progress={progress} range={scrollRange} />}
            </div>

        </motion.div>
    );
};


export default function DashboardControlSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    return (
        <div className="w-full bg-[#f1f7ed] flex flex-col relative">

            {/* TEXTO INTRODUCTORIO FIJO */}
            <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto text-center flex flex-col items-center z-10 relative">
                <span className="border border-[#1a3831]/20 bg-[#eef67a] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-[#1a3831] shadow-sm">
                    <Zap size={14} className="text-[#E07A5F]" fill="currentColor" /> Centro de Control
                </span>
                <h2 className="text-5xl md:text-7xl font-serif font-medium leading-[1.05] tracking-tight mb-6 text-[#113227]">
                    Por fin sabrás qué está pasando con tus invitados
                </h2>
                <p className="text-xl md:text-2xl text-[#113227]/80 max-w-3xl leading-relaxed mx-auto">
                    Reunimos toda la información en un solo lugar. Actualizaciones automáticas para que organices con total tranquilidad.
                </p>
            </section>

            {/* ÁREA DE SCROLL */}
            <section ref={sectionRef} className="relative h-[450vh] w-full">

                {/* CONTENEDOR STICKY DONDE SUCEDE LA MAGIA */}
                <div className="sticky top-0 h-screen w-full overflow-hidden flex items-start justify-center">

                    <div className="relative w-full h-full">
                        {FEATURES.map((card, index) => (
                            <StackCard
                                key={card.id}
                                card={card}
                                index={index}
                                progress={scrollYProgress}
                                totalCards={FEATURES.length}
                            />
                        ))}
                    </div>

                </div>
            </section>

            {/* SECCIÓN FINAL DE CTAS - Se ajustó el padding (py-32 en lugar de pt-64) para que no haya un hueco arriba */}
            <section className="relative z-20 bg-[#113227] text-white py-32 px-6 mt-[-2px]">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <h3 className="text-4xl md:text-6xl font-serif font-medium leading-tight tracking-tight mb-10 text-white">
                        Toma el control de tu evento hoy mismo
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-5 items-center w-full sm:w-auto">
                        <button className="bg-[#E07A5F] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 text-lg font-bold hover:bg-[#c96950] hover:-translate-y-1 transition-all group shadow-xl w-full sm:w-fit cursor-pointer">
                            Organizar mis invitados
                            <ArrowUpRight size={20} strokeWidth={2.5} className="transition-transform group-hover:rotate-45" />
                        </button>

                        <button className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 text-lg font-semibold hover:bg-white/10 transition-colors w-full sm:w-fit cursor-pointer backdrop-blur-sm">
                            Ver cómo funciona
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}