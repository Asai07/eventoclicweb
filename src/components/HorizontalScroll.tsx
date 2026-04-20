'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Users, Utensils, Sparkles } from 'lucide-react';

const CARDS = [
    {
        id: 1,
        title: "Tu lista de invitados bajo control",
        description: "Conoce el número real de asistentes, el nombre de cada invitado confirmado y la distribución exacta entre adultos y niños.",
        image: "/imagenes-horizontales/INVITADOS-EVENTOCLICCOM.png", // Evento elegante
        icon: Users,
        widgetTitle: "ASISTENCIA REAL",
        widgetMainVal: "145",
        widgetSubVal: "/ 150",
        stats: [
            { val: "120", label: "Adultos" },
            { val: "25", label: "Niños" },
            { val: "5", label: "Pendientes" }
        ],
        btnText: "Ver lista de invitados"
    },
    {
        id: 2,
        title: "Catering sin contratiempos",
        description: "Anticípate recopilando la selección de menú de cada invitado y ten mapeadas las alergias o dietas especiales.",
        image: "/imagenes-horizontales/CATERING-EVENTOCLICCOM.png", // Comida gourmet
        icon: Utensils,
        widgetTitle: "REPORTE DE MENÚS",
        widgetMainVal: "100%",
        widgetSubVal: "Confirmado",
        stats: [
            { val: "85", label: "Pollo" },
            { val: "40", label: "Res" },
            { val: "8", label: "Alergias" }
        ],
        btnText: "Revisar dietas especiales"
    },
    {
        id: 3,
        title: "Coordinación milimétrica",
        description: "Con esta información clara, puedes coordinar cada aspecto del evento. Cuando los detalles se preparan con tiempo, la experiencia es inolvidable.",
        image: "/imagenes-horizontales/LOGISTICA-EVENTOCLICCOM.png", // Brindis / Celebración
        icon: Sparkles,
        widgetTitle: "ESTADO DEL EVENTO",
        widgetMainVal: "Listo",
        widgetSubVal: "para el gran día",
        stats: [
            { val: "100%", label: "Mesas" },
            { val: "OK", label: "Logística" },
            { val: "WOW", label: "Experiencia" }
        ],
        btnText: "Coordinar mi evento"
    }
];

export default function HorizontalScroll() {
    const targetRef = useRef<HTMLDivElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);

    // Dynamic width calculation
    useEffect(() => {
        const updateRange = () => {
            if (trackRef.current && viewportRef.current) {
                setScrollRange(trackRef.current.scrollWidth - viewportRef.current.offsetWidth);
            }
        };
        updateRange();
        window.addEventListener('resize', updateRange);
        // Small delay to ensure images load and layout settles
        setTimeout(updateRange, 100);
        return () => window.removeEventListener('resize', updateRange);
    }, []);

    // SCROLL LOGIC
    const { scrollYProgress: horizontalProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const { scrollYProgress: zoomProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end end"]
    });

    const smoothHorizontal = useSpring(horizontalProgress, { stiffness: 100, damping: 25, restDelta: 0.001 });
    const smoothZoom = useSpring(zoomProgress, { stiffness: 100, damping: 25, restDelta: 0.001 });

    const x = useTransform(smoothHorizontal, [0, 1], [0, -(scrollRange > 0 ? scrollRange : 0)]);
    const imageScale = useTransform(smoothZoom, [0, 0.8], [1.2, 1]);

    return (
        <div className="w-full bg-[#fff4ee] flex flex-col">

            {/* INTRODUCCIÓN DE LA SECCIÓN */}
            <section className="pt-24 pb-12 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
                <span className="border border-[#2a1714]/20 bg-[#fcdbd0] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 flex items-center gap-2 text-[#2a1714]">
                    <span className="text-[10px]">⎋</span> El Anfitrión Perfecto
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-medium leading-[1.1] tracking-tight mb-6 text-[#ce5a4e]">
                    El efecto wow comienza <br className="hidden md:block" /> antes del evento
                </h2>
                <p className="text-lg md:text-xl text-[#ce5a4e]/80 max-w-2xl leading-relaxed mb-8">
                    Un gran anfitrión se anticipa. Nuestro Centro de Control te permite conocer con anticipación información importante de tus invitados para que todo salga perfecto.
                </p>

                {/* CTA SECUNDARIO */}
                <button className="border-2 border-[#ce5a4e] text-[#ce5a4e] px-6 py-2.5 rounded-full flex items-center gap-3 font-semibold text-sm hover:bg-[#ce5a4e] hover:text-white transition-all group cursor-pointer">
                    Ver cómo funciona
                    <ArrowUpRight size={18} strokeWidth={2.5} className="transition-transform group-hover:rotate-45" />
                </button>
            </section>

            {/* ZONA DE SCROLL HORIZONTAL */}
            <section ref={targetRef} className="relative h-[400vh]">
                <div ref={viewportRef} className="sticky top-0 h-screen w-full overflow-hidden flex items-center">

                    <motion.div
                        ref={trackRef}
                        style={{ x }}
                        className="flex h-[80vh] min-h-[500px] items-center gap-6 md:gap-8 pl-4 md:pl-8 xl:pl-[calc(50vw-625px)] w-max"
                    >
                        {CARDS.map((card) => {
                            const Icon = card.icon;
                            return (
                                <div key={card.id} className="w-[92vw] max-w-[1250px] shrink-0 h-[80vh] max-h-[700px] bg-[#ce5a4e] rounded-[2.5rem] flex flex-col lg:flex-row relative shadow-2xl overflow-visible">

                                    {/* COLUMNA IZQUIERDA: Textos y Botón CTA PRINCIPAL */}
                                    <div className="w-full lg:w-[45%] flex flex-col justify-center items-start p-10 lg:p-16 z-10">
                                        <div className="w-12 h-12 bg-[#fcdbd0] rounded-full flex items-center justify-center mb-6">
                                            <Icon className="text-[#ce5a4e]" size={24} />
                                        </div>
                                        <h3 className="text-4xl md:text-5xl lg:text-5xl font-serif text-white font-medium leading-[1.1] tracking-tight mb-6 pr-4">
                                            {card.title}
                                        </h3>
                                        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-sm">
                                            {card.description}
                                        </p>

                                        {/* CTA PRIMARIO */}
                                        <button className="bg-[#fc7643] text-white pl-3 pr-7 py-2.5 rounded-full flex items-center gap-4 font-bold text-sm hover:bg-[#d95a2b] transition-colors shadow-lg group cursor-pointer">
                                            <div className="bg-white text-[#fc7643] rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:rotate-45">
                                                <ArrowUpRight size={18} strokeWidth={2.5} />
                                            </div>
                                            Organizar mis invitados
                                        </button>
                                    </div>

                                    {/* COLUMNA DERECHA: Imagen y Widget Flotante */}
                                    <div className="w-full lg:w-[55%] h-full relative flex items-center justify-end pr-4 lg:pr-8 pb-4 lg:pb-0">

                                        <div className="w-full md:w-[90%] h-[95%] md:h-[85%] rounded-[2rem] overflow-hidden relative shadow-2xl bg-black/20">
                                            <motion.img
                                                style={{ scale: imageScale }}
                                                src={card.image}
                                                alt={card.title}
                                                className="w-full h-full object-cover origin-center opacity-90"
                                            />
                                        </div>

                                        {/* EL WIDGET FLOTANTE (Centro de Control) */}
                                        <div className="hidden lg:flex absolute left-[-10%] top-1/2 -translate-y-1/2 bg-white rounded-[1.5rem] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.25)] w-[320px] z-20 flex-col border border-gray-100">

                                            <div className="text-center mb-4">
                                                <div className="text-[10px] font-bold text-[#fc7643] uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1">
                                                    {card.widgetTitle} <span className="w-3.5 h-3.5 rounded-full bg-[#fc7643]/10 flex items-center justify-center text-[9px] text-[#fc7643] font-serif">i</span>
                                                </div>
                                                <div className="text-4xl font-medium tracking-tight text-[#ce5a4e] flex justify-center items-baseline gap-1">
                                                    {card.widgetMainVal} <span className="text-xl text-gray-400 font-normal">{card.widgetSubVal}</span>
                                                </div>
                                            </div>

                                            {/* Estadísticas */}
                                            <div className="flex justify-between items-center border-y border-gray-100 py-3 mb-5">
                                                {card.stats.map((stat, idx) => (
                                                    <div key={idx} className={`flex-1 text-center ${idx !== 2 ? 'border-r border-gray-100' : ''}`}>
                                                        <div className="font-bold text-[#ce5a4e] text-lg leading-none">{stat.val}</div>
                                                        <div className="text-[9px] text-gray-500 uppercase font-semibold mt-1">{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Botón secundario del widget */}
                                            <button className="w-full bg-[#fff4ee] hover:bg-[#fce5db] text-[#ce5a4e] transition-colors py-3 rounded-xl font-semibold text-sm border border-[#ce5a4e]/10">
                                                {card.btnText}
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Spacer final para permitir hacer scroll completo a la última tarjeta */}
                        <div className="w-4 md:w-8 xl:w-[calc(50vw-625px)] shrink-0" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}