'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const FOOTER_LINKS = [
    {
        title: "Plataforma",
        links: ["Soluciones", "Cómo funciona", "Precios"]
    },
    {
        title: "Soporte",
        links: ["Contacto", "Preguntas Frecuentes"]
    },
    {
        title: "Legal",
        links: ["Aviso de Privacidad", "Términos y Condiciones"]
    }
];

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#ce5a4e] text-[#FAFAF9] pt-24 pb-8 overflow-hidden rounded-t-[3rem] md:rounded-t-[4rem] -mt-10 z-30">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24">

                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">

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
                            className="bg-white hover:bg-[#FAFAF9] transition-colors text-[#ce5a4e] rounded-full pl-7 pr-3 py-3 flex items-center gap-5 font-bold cursor-pointer shadow-xl text-lg group"
                        >
                            Organizar mi evento
                            <div className="bg-[#ce5a4e] text-white rounded-full p-2 flex items-center justify-center transition-transform group-hover:rotate-45">
                                <ArrowUpRight size={20} strokeWidth={2.5} />
                            </div>
                        </motion.button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-[400px] flex flex-col gap-6"
                    >
                        <h4 className="text-white text-xl font-medium tracking-wide">Únete a la lista VIP</h4>
                        <p className="text-white/80 leading-relaxed font-medium">
                            Recibe tips exclusivos de organización y novedades de nuestra plataforma. Sin spam, lo prometemos.
                        </p>
                        <div className="relative mt-4">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="w-full bg-transparent border-b border-white/40 pb-4 text-base text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
                            />
                            <button className="absolute right-0 top-0 text-white hover:opacity-70 transition-opacity pb-4 uppercase tracking-widest text-xs font-bold cursor-pointer">
                                Suscribirme
                            </button>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 mb-24 border-t border-white/20 pt-16">
                    {FOOTER_LINKS.map((col, idx) => (
                        <motion.div
                            key={col.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="flex flex-col gap-6"
                        >
                            <h5 className="font-bold text-white/60 uppercase tracking-widest text-xs">
                                {col.title}
                            </h5>
                            <ul className="flex flex-col gap-4">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <Link
                                            href="#"
                                            className="text-white/90 hover:text-white transition-colors text-base relative group inline-flex font-medium"
                                        >
                                            <span className="relative z-10">{link}</span>
                                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col items-center border-t border-white/20 pt-12 relative">

                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 mb-16 text-white text-sm font-medium">
                        <p className="text-white/80">© {new Date().getFullYear()} Evento Clic. Todos los derechos reservados.</p>
                        <div className="flex items-center gap-6">
                            <Link href="#" className="hover:opacity-70 transition-opacity">Instagram</Link>
                            <Link href="#" className="hover:opacity-70 transition-opacity">Facebook</Link>
                            <Link href="#" className="hover:opacity-70 transition-opacity">TikTok</Link>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full flex justify-center py-4"
                    >
                        <Image
                            src="/logo-mievento.png"
                            alt="Evento Clic"
                            width={300}
                            height={100}
                            quality={100}
                            className="w-full max-w-[220px] md:max-w-[280px] object-contain opacity-80 hover:opacity-100 transition-opacity duration-500 brightness-0 invert"
                        />
                    </motion.div>
                </div>

            </div>
        </footer>
    );
}