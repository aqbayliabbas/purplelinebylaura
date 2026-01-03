"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
    return (
        <section className="bg-brand-purple py-16 md:py-24 px-6 md:px-10 mx-4 md:mx-6 rounded-[2rem] md:rounded-[4rem] mb-[-5rem] md:mb-[-5rem] relative z-20 shadow-[0_30px_60px_-20px_rgba(124,77,255,0.4)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 relative z-10">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight md:tracking-tighter leading-[1.1]">
                        Prêt(e) à changer de trajectoire ?
                    </h2>
                    <div className="text-xl md:text-3xl font-medium text-white/80">
                        Votre nouvelle vie commence par un appel.
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full lg:w-auto">
                    <button className="w-full sm:w-auto bg-white text-brand-purple px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-base md:text-lg hover:scale-105 transition-all shadow-2xl">
                        Réserver ma consultation
                    </button>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="pt-32 md:pt-40 pb-12 md:pb-20 bg-brand-dark text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-20 mb-20 md:mb-32">
                    <div className="sm:col-span-2 space-y-6 md:space-y-10">
                        <div className="flex items-center gap-4">
                            <img
                                src="/branding/icon.svg"
                                alt="PurpleLine"
                                className="h-10 md:h-12 w-auto brightness-0 invert"
                            />
                            <div className="font-black text-2xl md:text-3xl tracking-tighter">
                                PurpleLine
                            </div>
                        </div>
                        <div className="text-white/40 text-base md:text-lg max-w-sm leading-relaxed font-medium">
                            Transformez votre carrière et retrouvez votre équilibre avec un accompagnement sur-mesure.
                        </div>
                        <div className="flex gap-4 md:gap-6">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-purple hover:border-brand-purple transition-all cursor-pointer group shadow-xl">
                                    <div className="w-4 h-4 md:w-5 md:h-5 bg-white/40 group-hover:bg-white rounded-sm" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-3">
                        <div>
                            <div className="font-bold text-[9px] md:text-[10px] mb-6 md:mb-10 uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/20">Programme</div>
                            <ul className="space-y-4 md:space-y-6 text-sm md:text-base text-white/60 font-medium">
                                <li className="hover:text-brand-purple transition-colors cursor-pointer">Ma Méthode</li>
                                <li className="hover:text-brand-purple transition-colors cursor-pointer">Pour qui ?</li>
                                <li className="hover:text-brand-purple transition-colors cursor-pointer">Résultats</li>
                                <li className="hover:text-brand-purple transition-colors cursor-pointer">Tarifs</li>
                            </ul>
                        </div>

                        <div>
                            <div className="font-bold text-[9px] md:text-[10px] mb-6 md:mb-10 uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/20">À Propos</div>
                            <ul className="space-y-4 md:space-y-6 text-sm md:text-base text-white/60 font-medium">
                                <li className="hover:text-brand-purple transition-colors cursor-pointer">Mon Histoire</li>
                                <li className="hover:text-brand-purple transition-colors cursor-pointer">Témoignages</li>
                                <li className="hover:text-brand-purple transition-colors cursor-pointer">Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-[9px] md:text-[10px] text-white/20 uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-center md:text-left">
                    <div>© 2024 PurpleLine by Laura.</div>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        <span className="hover:text-brand-purple transition-colors cursor-pointer">Mentions Légales</span>
                        <span className="hover:text-brand-purple transition-colors cursor-pointer">Confidentialité</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
