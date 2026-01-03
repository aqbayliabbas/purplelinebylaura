"use client";

import { motion } from "framer-motion";

const problems = [
    { title: "Le métier ne vous fait plus vibrer", desc: "Vous ne voyez pas comment en sortir sans risquer de tout perdre." },
    { title: "Pression & Jeux politiques", desc: "La charge de travail est infinie et le burn-out n'est plus très loin." },
    { title: "Déséquilibre Vie Pro/Perso", desc: "Votre vie personnelle passe systématiquement après tout le reste." },
    { title: "Perte de Sens Intuitive", desc: "Vous sentez que ce n'est pas cette vie-là que vous êtes censé(e) mener." }
];

export function ProblemSection() {
    return (
        <section className="py-20 md:py-40 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <div className="flex-1 w-full lg:max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-brand-purple font-bold mb-4 md:mb-6 uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]"
                        >
                            Le Constat
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-dark mb-6 md:mb-10 tracking-tight leading-[1.1]"
                        >
                            Vous avez <span className="text-brand-purple">tout coché</span>, et pourtant...
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-base md:text-xl text-brand-dark/60 leading-relaxed font-medium mb-8 md:mb-12"
                        >
                            Sur le papier, c'est une réussite totale. Mais à l'intérieur, le vide s'installe.
                        </motion.p>

                        <div className="space-y-4 md:space-y-6">
                            {problems.map((p, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 md:gap-6 p-5 md:p-8 rounded-2xl md:rounded-3xl bg-brand-bg border border-brand-dark/5 hover:border-brand-purple/20 transition-all group"
                                >
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-brand-purple/20 flex items-center justify-center shrink-0 group-hover:bg-brand-purple group-hover:border-brand-purple transition-colors">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-brand-purple group-hover:text-white transition-colors md:w-5 md:h-5">
                                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-dark mb-1 md:mb-2 text-base md:text-xl">{p.title}</h4>
                                        <p className="text-brand-dark/50 text-sm md:text-base leading-relaxed">{p.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-10 md:mt-16"
                        >
                            <button className="w-full sm:w-auto bg-brand-purple text-white rounded-full px-8 md:px-12 py-4 md:py-6 font-bold text-base md:text-lg hover:scale-105 transition-all shadow-2xl hover:shadow-brand-purple/40">
                                Réserver ma consultation
                            </button>
                        </motion.div>
                    </div>

                    <div className="flex-1 relative w-full lg:max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="aspect-square bg-brand-dark rounded-3xl md:rounded-[4rem] p-8 md:p-12 relative overflow-hidden shadow-[0_30px_60px_-20px_rgba(18,13,30,0.3)]"
                        >
                            <div className="absolute inset-0 grid-pattern opacity-10 invert" />
                            <div className="relative z-10 h-full flex flex-col justify-center">
                                <div className="text-brand-purple font-black text-4xl md:text-6xl mb-4 md:mb-6 tracking-tighter">90%</div>
                                <div className="text-white text-xl md:text-3xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
                                    des leaders ressentent un décalage entre leur statut et leur épanouissement.
                                </div>
                                <div className="w-full h-1.5 md:h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "90%" }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-brand-purple shadow-[0_0_20px_#7c4dff]"
                                    />
                                </div>
                                <div className="mt-8 md:mt-12 flex items-center gap-3 md:gap-4">
                                    <div className="flex -space-x-2 md:-space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <img key={i} src={`https://i.pravatar.cc/100?u=stat${i}`} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-brand-dark shadow-xl" />
                                        ))}
                                    </div>
                                    <div className="text-white/40 text-[8px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest">Rejoignez ceux qui ont agi</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
