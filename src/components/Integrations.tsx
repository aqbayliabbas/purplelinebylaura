"use client";

import { motion } from "framer-motion";

const expertise = [
    "Mindset", "Leadership", "Balance", "Carrière", "Sens", "Clarté", "Action", "Vision"
];

export function Integrations() {
    return (
        <section className="py-20 md:py-40 bg-brand-dark text-white rounded-3xl md:rounded-[4rem] mx-4 md:mx-6 mb-16 md:mb-32 overflow-hidden relative selection:bg-brand-purple selection:text-white">
            <div className="absolute inset-0 opacity-[0.05]">
                <div className="absolute inset-0 grid-pattern invert" />
            </div>

            <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/50 mb-8 md:mb-12 shadow-2xl"
                >
                    Expertise
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-10 tracking-tight leading-[1]"
                >
                    Ne subissez plus. <br />
                    <span className="text-brand-purple">Rayonnez.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-white/40 max-w-2xl lg:max-w-3xl mx-auto mb-12 md:mb-28 text-base md:text-xl lg:text-2xl leading-relaxed font-medium px-2"
                >
                    Une approche holistique mêlant psychologie, stratégie et coaching de haute performance.
                </motion.p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto">
                    {expertise.map((item, i) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: (i % 4) * 0.05 + Math.floor(i / 4) * 0.1,
                                duration: 0.5
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.05,
                                backgroundColor: "rgba(124, 77, 255, 1)",
                            }}
                            className="aspect-square bg-white/5 border border-white/10 rounded-2xl md:rounded-[2.5rem] flex items-center justify-center p-4 md:p-6 shadow-xl cursor-pointer transition-all duration-300"
                        >
                            <div className="text-white font-bold text-sm md:text-xl lg:text-2xl tracking-tight">
                                {item}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 md:mt-32 flex flex-col items-center gap-6 md:gap-10"
                >
                    <button className="w-full sm:w-auto bg-brand-purple text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-base md:text-xl hover:scale-105 transition-all shadow-2xl hover:shadow-brand-purple/50 border border-white/10">
                        Passer à l'action maintenant
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
