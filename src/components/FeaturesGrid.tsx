"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function FeaturesGrid() {
    const [activeToggles, setActiveToggles] = useState([true, false, true]);

    const toggleSwitch = (index: number) => {
        const newToggles = [...activeToggles];
        newToggles[index] = !newToggles[index];
        setActiveToggles(newToggles);
    };

    return (
        <section className="py-20 md:py-40 bg-brand-bg">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-brand-purple font-bold mb-4 md:mb-6 uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]"
                    >
                        Le Programme
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark max-w-4xl mx-auto leading-[1.1] tracking-tight px-2"
                    >
                        Une méthode progressive vers votre nouvelle vie
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 md:mt-10 text-brand-dark/50 max-w-2xl mx-auto text-base md:text-xl lg:text-2xl font-medium px-2"
                    >
                        Un accompagnement structuré pour sortir du brouillard.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:gap-10">
                    {/* Main Card - Big */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl md:rounded-[4rem] p-6 md:p-12 lg:p-20 border border-brand-dark/5 flex flex-col lg:flex-row gap-8 lg:gap-20 overflow-hidden shadow-[0_20px_60px_-20px_rgba(18,13,30,0.05)]"
                    >
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="inline-flex px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-[9px] md:text-[10px] font-bold uppercase tracking-widest w-fit mb-6 md:mb-8">
                                Étape 01
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-8 tracking-tight">Clarté & Vision</h3>
                            <p className="text-brand-dark/60 mb-8 md:mb-12 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg">
                                Identifier vos vraies valeurs et lever les blocages qui vous empêchent d'avancer.
                            </p>
                            <button className="w-full sm:w-auto bg-brand-dark text-white rounded-full px-8 md:px-12 py-4 md:py-5 font-bold text-sm md:text-base transition-all hover:bg-brand-purple active:scale-95 shadow-xl">
                                Réserver ma consultation
                            </button>
                        </div>

                        <div className="flex-1 bg-brand-bg rounded-2xl md:rounded-[3rem] p-6 md:p-10 border border-brand-dark/5 relative min-h-[250px] md:min-h-[350px] flex flex-col overflow-hidden">
                            <div className="absolute top-4 md:top-8 right-4 md:right-8 flex -space-x-2 md:-space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <img key={i} src={`https://i.pravatar.cc/100?u=${i + 30}`} className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 md:border-4 border-white shadow-xl" />
                                ))}
                            </div>
                            <div className="text-[9px] md:text-[11px] font-bold text-brand-dark/30 mb-6 md:mb-10 uppercase tracking-[0.2em] md:tracking-[0.3em]">Niveau de Clarté</div>

                            {/* Animated Clarity Chart */}
                            <div className="flex items-end gap-2 md:gap-4 flex-1 mt-auto">
                                {[20, 35, 30, 85, 95, 100].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ delay: 0.3 + (i * 0.1), duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                        className={`flex-1 rounded-full relative ${i >= 3 ? 'bg-brand-purple shadow-[0_0_20px_rgba(124,77,255,0.3)]' : 'bg-brand-dark/5'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Two smaller cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        {/* Small Card 1 - Engagement */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#f0edff] rounded-3xl md:rounded-[3.5rem] p-6 md:p-12 border border-brand-purple/10"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-10 shadow-xl">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-brand-purple md:w-8 md:h-8">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2.5" />
                                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-4 tracking-tight">Étape 02 : Stratégie</h3>
                            <p className="text-brand-dark/60 text-sm md:text-lg mb-8 md:mb-12 leading-relaxed">
                                Définir un plan d'action pragmatique pour votre transition.
                            </p>
                            <div className="bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-8 shadow-xl border border-brand-purple/5 space-y-4 md:space-y-6">
                                {[
                                    { label: "Audit de situation", key: 0 },
                                    { label: "Plan 90 jours", key: 1 },
                                    { label: "Support WhatsApp", key: 2 },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <span className="text-xs md:text-sm font-semibold text-brand-dark/80">{item.label}</span>
                                        <button
                                            onClick={() => toggleSwitch(item.key)}
                                            className={`w-10 md:w-11 h-5 md:h-6 rounded-full relative transition-all duration-300 ${activeToggles[item.key] ? 'bg-brand-purple' : 'bg-zinc-300'}`}
                                        >
                                            <motion.div
                                                animate={{ x: activeToggles[item.key] ? 18 : 0 }}
                                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                className="absolute left-0.5 top-0.5 w-4 md:w-5 h-4 md:h-5 bg-white rounded-full shadow-md"
                                            />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Small Card 2 - Results */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-3xl md:rounded-[3.5rem] p-6 md:p-12 border border-brand-dark/5 shadow-[0_20px_60px_-20px_rgba(18,13,30,0.05)] overflow-hidden"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-accent rounded-xl md:rounded-3xl flex items-center justify-center mb-6 md:mb-10 shadow-xl">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-brand-dark md:w-8 md:h-8">
                                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-3xl font-black mb-2 md:mb-4 tracking-tight">Étape 03 : Déploiement</h3>
                            <p className="text-brand-dark/60 text-sm md:text-lg mb-8 md:mb-12 leading-relaxed">
                                Agir sur le terrain et stabiliser votre nouvel équilibre.
                            </p>
                            <div className="space-y-4 md:space-y-6">
                                {[
                                    { name: "Executive Coach", msg: "Transformation validée en 82 jours.", img: "https://i.pravatar.cc/100?u=laura", time: "Maintenant" },
                                    { name: "Client Anonyme", msg: "J'ai enfin retrouvé ma liberté.", img: "https://i.pravatar.cc/100?u=client1", time: "Hier" }
                                ].map((task, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + (i * 0.1) }}
                                        className="flex gap-3 md:gap-5 p-4 md:p-5 bg-brand-bg rounded-xl md:rounded-2xl border border-brand-dark/5"
                                    >
                                        <img src={task.img} className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0 border-2 md:border-4 border-white shadow-lg" />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-center mb-1">
                                                <div className="text-[10px] md:text-xs font-bold text-brand-dark uppercase tracking-wider truncate">{task.name}</div>
                                                <div className="text-[8px] md:text-[10px] font-bold text-brand-dark/30 shrink-0">{task.time}</div>
                                            </div>
                                            <div className="text-xs md:text-sm text-brand-dark/70 font-medium truncate">{task.msg}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
