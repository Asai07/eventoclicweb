'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const FAQ_DATA = [
    {
        question: "¿Qué es Evento Clic?",
        answer: "Evento Clic es una plataforma digital que te permite gestionar la lista de invitados de tu evento, enviar invitaciones con códigos únicos por WhatsApp y controlar el acceso el día del evento mediante escaneo de códigos QR, eliminando las listas de papel."
    },
    {
        question: "¿Mis invitados necesitan descargar alguna aplicación?",
        answer: "No. Tus invitados reciben un enlace web personalizado a través de WhatsApp. Al hacer clic, pueden confirmar su asistencia y ver su pase digital con QR directamente en el navegador de su celular, sin instalar nada."
    },
    {
        question: "¿Cómo funciona el control de accesos (QR)?",
        answer: "Desde tu Centro de Control, habilitas el 'Modo Recepción'. Al escanear el QR del pase de tu invitado con la cámara de cualquier smartphone, el sistema valida su código único y marca los pases como utilizados en tiempo real."
    },
    {
        question: "¿Puedo limitar el número de acompañantes por invitación?",
        answer: "¡Totalmente! Al crear cada invitación, tú asignas el número exacto de pases. El sistema no le permitirá al invitado confirmar a más personas de las que tú le autorizaste."
    },
    {
        question: "¿Qué pasa si cambian mis planes o los del invitado?",
        answer: "Puedes editar la información de cualquier invitado, agregar pases o cancelar invitaciones desde tu Centro de Control en cualquier momento. Todo se actualiza al instante en sus pases digitales."
    },
    {
        question: "¿Puedo subir mi lista de invitados desde Excel?",
        answer: "Sí, contamos con una función de importación masiva. Solo necesitas descargar nuestra plantilla de Excel, llenarla con los datos de tus invitados y subirla. El sistema creará las invitaciones automáticamente."
    },
    {
        question: "¿Mis datos y los de mis invitados están seguros?",
        answer: "La seguridad y privacidad son nuestra prioridad. Utilizamos encriptación de alto nivel para proteger toda la información de tu evento. Nunca compartimos ni vendemos los datos de tus invitados a terceros."
    }
];

function AccordionItem({ item, isOpen, onClick }: { item: typeof FAQ_DATA[0], isOpen: boolean, onClick: () => void }) {
    return (
        <div className="mb-4">
            <button
                onClick={onClick}
                className={`w-full flex items-center justify-between text-left p-5 md:p-6 transition-all rounded-2xl cursor-pointer border ${isOpen ? 'bg-white border-transparent shadow-lg' : 'bg-transparent border-[#113227]/10 hover:bg-white/50'}`}
            >
                <div className="flex items-center gap-4 md:gap-6">
                    <div className={`${isOpen ? 'text-[#E07A5F]' : 'text-[#113227]'} shrink-0 transition-colors`}>
                        {isOpen ? <Minus size={20} strokeWidth={2} /> : <Plus size={20} strokeWidth={2} />}
                    </div>
                    <span className="text-[#113227] font-serif font-medium text-lg md:text-xl">
                        {item.question}
                    </span>
                </div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-5 md:p-6 pt-0 mt-2 bg-transparent text-gray-600 leading-relaxed text-base border-l-2 border-[#E07A5F] ml-8 mb-2">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative w-full bg-[#f1f7ed] py-24 md:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24">

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Columna Izquierda: Títulos */}
                    <div className="w-full lg:w-[40%] sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-[#eef67a] text-[#113227] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 shadow-sm"
                        >
                            <HelpCircle size={16} className="text-[#E07A5F]" />
                            FAQ
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-[#113227] font-serif text-5xl md:text-[4rem] leading-[1.05] tracking-tight mb-6"
                        >
                            ¿Tienes dudas?<br />Aquí las resolvemos.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-[#113227]/70 text-base md:text-lg max-w-sm leading-relaxed font-medium"
                        >
                            Encuentra las respuestas a las preguntas más comunes que tienen los anfitriones al utilizar Evento Clic.
                        </motion.p>
                    </div>

                    {/* Columna Derecha: Acordeón */}
                    <div className="w-full lg:w-[60%]">
                        <div className="flex flex-col">
                            {FAQ_DATA.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <AccordionItem
                                        item={item}
                                        isOpen={openIndex === index}
                                        onClick={() => handleToggle(index)}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}