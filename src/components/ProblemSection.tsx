'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, XCircle, AlertCircle } from 'lucide-react';

const PAIN_POINTS = [
    "No sabes quién vendrá",
    "No sabes cuántos lugares preparar",
    "Aparecen invitados no contemplados",
    "Ajustes de último momento: más mesas, más platillos y logística"
];

export default function ProblemSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"]
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const imageScale = useTransform(smoothProgress, [0, 1], [1.1, 1]);

    return (
        <section className="relative z-20 bg-[#16554a] w-full pb-32 pt-12 text-white" ref={sectionRef}>
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

                {/* Top Banner */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/20 pb-10">
                    <p className="text-white font-sans text-2xl lg:text-3xl font-light tracking-wide max-w-xl leading-tight">
                        Cuando no tienes claridad sobre tus invitados, todo el evento pierde orden… y <span className="font-semibold text-[#E07A5F]">presupuesto.</span>
                    </p>

                    {/* CTA #2 SECUNDARIO */}
                    <button className="bg-white/10 border border-white/30 text-white px-6 py-2.5 rounded-full flex items-center gap-3 font-semibold text-sm hover:bg-white/20 transition-all group shrink-0 cursor-pointer backdrop-blur-sm">
                        Ver cómo funciona
                        <div className="text-[#E07A5F] transition-transform group-hover:rotate-45">
                            <ArrowUpRight size={18} strokeWidth={2.5} />
                        </div>
                    </button>
                </div>

                {/* Main Content Grid */}
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

                    {/* Left Typography & List Column (7 cols wide) */}
                    <div className="lg:col-span-7 pr-0 lg:pr-8">
                        <h2 className="text-white text-4xl md:text-[3.25rem] font-serif leading-[1.1] tracking-tight mb-2">
                            Invitar es fácil.
                        </h2>
                        <h3 className="text-white/90 text-4xl md:text-[3.25rem] font-serif italic font-light leading-[1.1] tracking-tight mb-6">
                            Saber quién realmente vendrá… <br className="hidden lg:block" />
                            no tanto.
                        </h3>

                        <p className="text-lg md:text-xl font-sans text-white/80 mb-8 max-w-lg">
                            Cuando las confirmaciones llegan tarde — o no llegan — todo se vuelve incierto:
                        </p>

                        <ul className="flex flex-col gap-4 mb-10">
                            {PAIN_POINTS.map((point, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="flex items-start gap-4 text-lg md:text-xl font-sans text-white/90"
                                >
                                    <XCircle size={24} className="text-[#E07A5F] shrink-0 mt-0.5" strokeWidth={1.5} />
                                    <span>{point}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Bloque Destacado */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-black/20 border-l-4 border-[#E07A5F] p-5 rounded-r-2xl mb-12 backdrop-blur-md"
                        >
                            <div className="flex gap-3 items-start">
                                <AlertCircle size={24} className="text-[#E07A5F] shrink-0 mt-1" strokeWidth={2} />
                                <div>
                                    <p className="text-white/80 text-sm md:text-base font-sans mb-1">
                                        Y cuando se acerca la fecha del evento, aún queda una pregunta sin respuesta:
                                    </p>
                                    <p className="text-white font-serif text-xl md:text-2xl font-medium italic">
                                        ¿Cuántas personas asistirán realmente?
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA #1 PRIMARIO */}
                        <button className="bg-white text-[#16554a] px-8 py-3.5 rounded-full flex items-center gap-3 text-lg font-bold hover:-translate-y-1 transition-transform group shadow-xl w-fit cursor-pointer">
                            Organizar mis invitados
                            <div className="bg-[#E07A5F] text-white rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:rotate-45">
                                <ArrowUpRight size={18} strokeWidth={2.5} />
                            </div>
                        </button>
                    </div>

                    {/* Right Image Column (5 cols wide) */}
                    <div className="lg:col-span-5 w-full relative">
                        <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative bg-black/10">
                            <motion.div
                                style={{ scale: imageScale }}
                                className="w-full h-full origin-center"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                                    alt="Persona organizando invitados en un evento"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}