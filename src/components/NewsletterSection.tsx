"use client";

import { motion } from "framer-motion";

export function NewsletterSection() {
    return (
        <section className="py-40 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative rounded-[5rem] bg-brand-bg border border-brand-purple/10 p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20 shadow-2xl overflow-hidden group">
                    {/* Decorative Background Aura */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-purple/10 transition-colors duration-1000" />

                    <div className="flex-1 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="w-16 h-16 bg-brand-purple text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:rotate-12 transition-transform"
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>
                        <h2 className="text-4xl md:text-7xl font-black text-brand-dark mb-8 tracking-tighter leading-[1]">
                            Recevez ma <span className="text-brand-purple">Masterclass</span> offerte
                        </h2>
                        <p className="text-xl md:text-2xl text-brand-dark/50 leading-relaxed font-medium mb-12 max-w-xl">
                            Les 3 leviers psychologiques pour passer de l'épuisement à la clarté stratégique en moins de 30 minutes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                            <input
                                type="email"
                                placeholder="Votre email professionnel"
                                className="flex-1 bg-white border-2 border-brand-dark/5 focus:border-brand-purple rounded-full px-8 py-5 outline-none font-bold text-lg transition-all shadow-sm"
                            />
                            <button className="bg-brand-dark text-white px-10 py-5 rounded-full font-black text-lg hover:bg-brand-purple transition-all shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap">
                                Regarder maintenant
                            </button>
                        </div>
                        <p className="mt-6 text-xs font-bold text-brand-dark/20 uppercase tracking-[0.3em]">
                            Zéro spam. Uniquement de la valeur.
                        </p>
                    </div>

                    <div className="flex-1 relative z-10 w-full lg:max-w-md">
                        <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group-hover:rotate-3 transition-transform duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                                alt="Masterclass Laura"
                                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex items-center gap-4 text-white">
                                    <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center animate-pulse">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-sm font-black uppercase tracking-widest">Masterclass Vidéo</div>
                                        <div className="text-[10px] text-white/60 font-medium">Durée: 24:15 min</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
