"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
    {
        q: "Est-ce que cet accompagnement est fait pour moi ?",
        a: "Si vous êtes une personne engagée (cadre, dirigeant, entrepreneur), que vous avez réussi sur le papier mais que vous ressentez un vide ou une perte de sens profonde, alors oui. L'accompagnement est sélectif pour garantir des résultats rapides."
    },
    {
        q: "Combien de temps dois-je y consacrer par semaine ?",
        a: "Le programme est conçu pour des agendas chargés. Comptez environ 1h30 à 2h par semaine, sessions d'accompagnement et exercices de mise en pratique inclus. C'est un investissement sur le long terme."
    },
    {
        q: "Quelle est la différence avec une thérapie classique ?",
        a: "La thérapie regarde souvent vers le passé pour comprendre 'pourquoi'. Le coaching PurpleLine regarde vers le futur pour définir 'comment'. C'est une approche pragmatique, orientée action et résultats."
    },
    {
        q: "Les sessions se font-elles en présentiel ou à distance ?",
        a: "La majorité des coachings se font en visioconférence pour s'adapter à votre flexibilité géographique. Des sessions intensives en présentiel peuvent être organisées selon les besoins."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 md:py-40 bg-zinc-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 md:mb-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-brand-purple font-bold mb-4 md:mb-6 uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px]"
                        >
                            Questions Fréquentes
                        </motion.div>
                        <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-brand-dark mb-6 md:mb-10 tracking-tighter leading-[1.1]">
                            Levons vos <span className="text-brand-purple">derniers doutes</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-500 overflow-hidden ${openIndex === i ? 'bg-white border-brand-purple/20 shadow-2xl shadow-brand-purple/5' : 'bg-transparent border-brand-dark/5 hover:border-brand-purple/10 cursor-pointer'}`}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <div className="p-6 md:p-10 flex items-center justify-between gap-4 md:gap-6">
                                    <h4 className={`text-lg md:text-2xl font-bold tracking-tight ${openIndex === i ? 'text-brand-purple' : 'text-brand-dark'}`}>
                                        {faq.q}
                                    </h4>
                                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${openIndex === i ? 'bg-brand-purple text-white rotate-45' : 'bg-brand-dark/5 text-brand-dark'}`}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="md:w-[24px] md:h-[24px]">
                                            <path d="M12 5V19M5 12H19" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        >
                                            <div className="px-6 md:px-10 pb-8 md:pb-10 text-brand-dark/50 text-base md:text-lg leading-relaxed font-medium border-t border-brand-dark/5 pt-6 md:pt-8">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-12 md:mt-20 p-8 md:p-10 rounded-2xl md:rounded-[3rem] bg-brand-dark text-white flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-2xl"
                    >
                        <div className="text-center md:text-left">
                            <h4 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">Vous avez une question spécifique ?</h4>
                            <p className="text-white/40 font-medium text-sm md:text-base">Je réponds personnellement à toutes vos interrogations.</p>
                        </div>
                        <button className="w-full md:w-auto bg-brand-purple text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold hover:scale-105 transition-all shadow-xl">
                            Réserver ma consultation
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
