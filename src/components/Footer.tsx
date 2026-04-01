'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const FOOTER_LINKS = [
    {
        title: "Plataforma",
        links: ["Funciones", "Centro de Control", "Recepción QR", "Precios"]
    },
    {
        title: "Compañía",
        links: ["Sobre Nosotros", "Contacto", "Únete al equipo", "Prensa"]
    },
    {
        title: "Recursos",
        links: ["Blog de Eventos", "Casos de Éxito", "Centro de Ayuda", "Guías de Uso"]
    },
    {
        title: "Legal",
        links: ["Aviso de Privacidad", "Términos y Condiciones", "Política de Cookies"]
    }
];

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#113227] text-white pt-24 pb-8 overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] -mt-10 z-30">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24">

                {/* Sección Superior: CTA & Newsletter */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
                    {/* Izquierda: Gran CTA */}
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-white font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mb-8"
                        >
                            ¿Listo para organizar<br />tu evento sin estrés?
                        </motion.h2>
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#E07A5F] hover:bg-[#c96950] transition-colors text-white rounded-full pl-6 pr-4 py-3 flex items-center gap-4 font-bold cursor-pointer shadow-xl text-lg group"
                        >
                            Crear mi cuenta
                            <div className="bg-white text-[#E07A5F] rounded-full p-2 flex items-center justify-center transition-transform group-hover:rotate-45">
                                <ArrowUpRight size={20} strokeWidth={2.5} />
                            </div>
                        </motion.button>
                    </div>

                    {/* Derecha: Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-[400px] flex flex-col gap-6"
                    >
                        <h4 className="text-white text-xl font-medium tracking-wide">Únete a nuestro newsletter</h4>
                        <p className="text-white/60 leading-relaxed font-medium">
                            Recibe tips exclusivos de organización, tendencias de eventos y actualizaciones de la plataforma directamente en tu correo.
                        </p>
                        <div className="relative mt-4">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="w-full bg-transparent border-b border-white/20 pb-4 text-base text-white placeholder-white/40 focus:outline-none focus:border-[#eef67a] transition-colors"
                            />
                            <button className="absolute right-0 top-0 text-white/50 hover:text-[#eef67a] transition-colors pb-4 uppercase tracking-widest text-xs font-bold cursor-pointer">
                                Suscribirme
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Sección Media: Grid de Enlaces */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 border-t border-white/10 pt-16">
                    {FOOTER_LINKS.map((col, idx) => (
                        <motion.div
                            key={col.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="flex flex-col gap-6"
                        >
                            <h5 className="font-bold text-[#eef67a]/70 uppercase tracking-widest text-xs">
                                {col.title}
                            </h5>
                            <ul className="flex flex-col gap-4">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <Link
                                            href="#"
                                            className="text-white/80 hover:text-white transition-colors text-base md:text-lg relative group inline-flex font-medium"
                                        >
                                            <span className="relative z-10">{link}</span>
                                            {/* Subrayado animado estilo Awwwards */}
                                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#E07A5F] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Sección Inferior: Tipografía Masiva & Copyright */}
                <div className="flex flex-col items-center border-t border-white/10 pt-12 relative">

                    {/* Fila superior de copyright antes del texto masivo */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mb-12 text-white/50 text-sm font-medium">
                        <p>© {new Date().getFullYear()} Evento Clic. Todos los derechos reservados.</p>
                        <div className="flex items-center gap-6">
                            <Link href="#" className="hover:text-[#eef67a] transition-colors">Instagram</Link>
                            <Link href="#" className="hover:text-[#eef67a] transition-colors">Facebook</Link>
                            <Link href="#" className="hover:text-[#eef67a] transition-colors">TikTok</Link>
                        </div>
                    </div>

                    {/* Tipografía Masiva */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full flex justify-center overflow-hidden"
                    >
                        {/* Texto responsivo ajustado para EVENTO CLIC */}
                        <h1 className="font-serif text-[12vw] md:text-[11vw] leading-none tracking-tight text-[#eef67a] select-none text-center">
                            EVENTO CLIC
                        </h1>
                    </motion.div>
                </div>

            </div>
        </footer>
    );
}