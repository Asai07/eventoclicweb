'use client';

import { motion, Variants } from 'framer-motion';
import { CheckCircle2, ArrowUpRight, Mountain, Star, Gem, Crown, Sparkles } from 'lucide-react';

const PRICING_PLANS = [
    {
        id: "plus",
        name: "Plus",
        icon: Star,
        price: "399",
        promise: "Organizar confirmaciones",
        features: [
            "Importación de lista de invitados",
            "Gestión centralizada en panel",
            "Confirmaciones vía WhatsApp",
            "Atención y soporte básico"
        ],
        theme: "light"
    },
    {
        id: "prime",
        name: "Prime",
        icon: Gem,
        price: "899",
        promise: "Control anti-colados",
        features: [
            "Todo lo del plan Plus",
            "Códigos únicos por invitado",
            "Pases estrictamente limitados",
            "Tickets digitales con código QR",
            "Modo recepción (Escaneo el evento)"
        ],
        theme: "light",
        popular: true
    },
    {
        id: "premium",
        name: "Premium",
        icon: Sparkles,
        price: "1,499",
        promise: "Confirmaciones + Invitación",
        features: [
            "Todo lo del plan Plus (sin QR)",
            "Invitación digital web interactiva",
            "Diseño premium con tus colores",
            "Cuenta regresiva e itinerario",
            "Mesa de regalos e información"
        ],
        theme: "light"
    },
    {
        id: "elite",
        name: "Elite",
        icon: Crown,
        price: "2,999",
        promise: "Control total + Diseño exclusivo",
        features: [
            "Todo el control anti-colados (Prime)",
            "Invitación digital 100% personalizada",
            "Diseño exclusivo desde cero",
            "Dominio web personalizado",
            "Soporte VIP y asistencia el día"
        ],
        theme: "terracotta"
    }
];

// Tipado explícito para evitar el error de TypeScript
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }
    }
};

export default function PricingSection() {
    return (
        // Regresamos al fondo #FAFAF9 para mantener la limpieza editorial
        <section className="w-full bg-[#FAFAF9] relative py-32 px-6 overflow-hidden">

            {/* Resplandor decorativo de fondo para dar profundidad */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-[#ce5a4e]/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* Cabecera de la sección */}
                <div className="text-center max-w-3xl mx-auto mb-24 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white border border-black/5 shadow-sm px-5 py-2 rounded-full flex items-center gap-2 mb-8"
                    >
                        {/* El icono de la montañita que pediste */}
                        <Mountain size={16} className="text-[#ce5a4e]" strokeWidth={2} />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2a1714]/80 mt-0.5">
                            Escalera de Valor
                        </span>
                    </motion.div>

                    <h2 className="text-5xl md:text-[4.5rem] font-serif font-medium leading-[1.05] tracking-tight mb-8 text-[#2a1714]">
                        Una inversión en tu <span className="italic font-light text-[#ce5a4e]">tranquilidad.</span>
                    </h2>
                    <p className="text-xl text-[#2a1714]/70 leading-relaxed max-w-2xl mx-auto">
                        Elige el nivel de experiencia y control que tu evento merece. Planes transparentes, sin cargos sorpresa.
                    </p>
                </div>

                {/* Grid de Precios */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch pt-4"
                >
                    {PRICING_PLANS.map((plan) => {
                        const Icon = plan.icon;
                        const isTerracotta = plan.theme === 'terracotta';

                        return (
                            <motion.div
                                key={plan.id}
                                variants={cardVariants}
                                // Efecto Hover: La tarjeta flota hacia arriba
                                whileHover={{ y: -10 }}
                                className={`relative flex flex-col h-full rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 
                                ${isTerracotta
                                        // Diseño Elite: Degradado terracota, más alto, sombra con brillo de color
                                        ? 'bg-gradient-to-b from-[#ce5a4e] to-[#b84c41] text-white shadow-[0_20px_50px_rgba(206,90,78,0.3)] lg:scale-[1.05] lg:-translate-y-4 border border-[#ce5a4e]'
                                        // Diseño Normal: Blanco prístino, sombra sutil, borde ultra fino
                                        : 'bg-white border border-black/5 text-[#2a1714] shadow-xl hover:shadow-2xl'
                                    }`}
                            >
                                {/* Badge Más Popular - Estilo premium superpuesto */}
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2a1714] text-white px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg z-10">
                                        Más Popular
                                    </div>
                                )}

                                {/* Icono y Nombre del Plan */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-inner
                                        ${isTerracotta ? 'bg-white/20' : 'bg-[#ce5a4e]/10'}
                                    `}>
                                        <Icon className={isTerracotta ? 'text-white' : 'text-[#ce5a4e]'} size={24} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-serif font-medium">{plan.name}</h3>
                                </div>

                                {/* Precio y Promesa */}
                                <div className="mb-8">
                                    <div className={`text-[10px] uppercase tracking-widest font-bold mb-2 ${isTerracotta ? 'text-white/60' : 'text-[#2a1714]/40'}`}>
                                        Pago Único
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-2xl font-sans ${isTerracotta ? 'text-white/80' : 'text-[#2a1714]/60'}`}>$</span>
                                        <span className="text-5xl md:text-[3.5rem] font-serif font-medium tracking-tight">{plan.price}</span>
                                        <span className={`text-sm font-sans font-medium ml-2 ${isTerracotta ? 'text-white/60' : 'text-[#2a1714]/40'}`}>MXN</span>
                                    </div>
                                    <div className={`mt-4 text-[13px] font-bold uppercase tracking-wide ${isTerracotta ? 'text-[#fcdbd0]' : 'text-[#ce5a4e]'}`}>
                                        {plan.promise}
                                    </div>
                                </div>

                                {/* Línea Divisoria */}
                                <div className={`w-full h-[1px] mb-8 ${isTerracotta ? 'bg-white/20' : 'bg-black/5'}`}></div>

                                {/* Lista de Beneficios */}
                                <ul className="flex-1 space-y-4 mb-10">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2
                                                size={18}
                                                className={`shrink-0 mt-0.5 ${isTerracotta ? 'text-white' : 'text-[#ce5a4e]'}`}
                                                strokeWidth={2}
                                            />
                                            <span className={`text-[15px] leading-relaxed font-medium ${isTerracotta ? 'text-white/90' : 'text-[#2a1714]/70'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Botón */}
                                <button className={`w-full py-4 rounded-full flex items-center justify-center gap-3 text-[15px] font-bold transition-all group mt-auto
                                    ${isTerracotta
                                        ? 'bg-white text-[#ce5a4e] shadow-xl hover:bg-[#FAFAF9]'
                                        : 'bg-transparent border-2 border-[#2a1714]/10 text-[#2a1714] hover:border-[#ce5a4e] hover:bg-[#ce5a4e] hover:text-white'
                                    }
                                `}>
                                    Elegir {plan.name}
                                    <ArrowUpRight size={18} strokeWidth={2.5} className="transition-transform group-hover:rotate-45" />
                                </button>

                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}