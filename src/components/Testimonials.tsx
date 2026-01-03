"use client";

import { motion } from "framer-motion";

export function Testimonial() {
    return (
        <section className="py-20 md:py-40 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl lg:max-w-5xl text-center">
                <div className="text-brand-dark mb-10 md:mb-16">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="mx-auto mb-8 md:mb-12 text-brand-purple opacity-20 md:w-[60px] md:h-[60px]">
                        <path d="M10 11L8 16H5L7 11V7H11V11H10ZM18 11L16 16H13L15 11V7H19V11H18Z" fill="currentColor" />
                    </svg>
                    <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.3] tracking-tight px-2">
                        "Laura m'a permis de poser les mots sur un épuisement que je n'osais pas m'avouer. Aujourd'hui, j'ai une direction claire."
                    </h3>
                </div>

                <div className="flex flex-col items-center gap-4 md:gap-6">
                    <img src="https://i.pravatar.cc/100?u=jean" className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-brand-accent shadow-2xl" />
                    <div>
                        <div className="font-bold text-lg md:text-xl text-brand-dark">Jean-Baptiste D.</div>
                        <div className="text-[9px] md:text-[10px] text-brand-dark/40 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mt-1">Directeur Opérationnel - CAC 40</div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-10 md:mt-16"
                >
                    <button className="w-full sm:w-auto bg-brand-purple text-white rounded-full px-8 md:px-12 py-4 md:py-5 font-bold text-sm md:text-base hover:scale-105 transition-all shadow-xl hover:shadow-brand-purple/30">
                        Obtenir les mêmes résultats
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

export function Stats() {
    const stats = [
        { label: "Années d'Expérience", value: "10+" },
        { label: "Clients Accompagnés", value: "250+" },
        { label: "Taux de Satisfaction", value: "100%" },
    ];

    return (
        <section className="py-16 md:py-24 bg-brand-bg border-y border-brand-dark/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-20 text-center">
                    {stats.map((stat, i) => (
                        <div key={i} className="group">
                            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-brand-dark mb-2 md:mb-4 tracking-tighter group-hover:text-brand-purple transition-colors duration-500">
                                {stat.value}
                            </div>
                            <div className="text-[10px] md:text-[12px] font-bold text-brand-dark/30 uppercase tracking-[0.3em] md:tracking-[0.4em]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
