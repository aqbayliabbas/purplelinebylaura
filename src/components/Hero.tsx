"use client";

import { motion } from "framer-motion";

const avatars = [
    { src: "https://i.pravatar.cc/150?u=laura", x: "12%", y: "15%", rotate: -10, delay: 0 },
    { src: "https://i.pravatar.cc/150?u=exec1", x: "88%", y: "22%", rotate: 10, delay: 0.2 },
    { src: "https://i.pravatar.cc/150?u=exec2", x: "18%", y: "75%", rotate: 5, delay: 0.1 },
    { src: "https://i.pravatar.cc/150?u=exec3", x: "82%", y: "80%", rotate: -8, delay: 0.3 },
];

export function Hero() {
    return (
        <section className="relative min-h-screen md:min-h-[95vh] flex flex-col items-center justify-center pt-48 md:pt-56 pb-16 md:pb-20 overflow-hidden grid-pattern bg-gradient-to-b from-brand-bg to-white px-4">
            {/* Floating Avatars - Desktop only */}
            {avatars.map((avatar, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -20, 0],
                    }}
                    transition={{
                        opacity: { delay: avatar.delay, duration: 0.5 },
                        scale: { delay: avatar.delay, duration: 0.5 },
                        y: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: avatar.delay
                        }
                    }}
                    style={{ left: avatar.x, top: avatar.y, rotate: avatar.rotate }}
                    className="absolute hidden xl:block z-0"
                >
                    <div className="relative group cursor-pointer shadow-2xl rounded-full">
                        <motion.div
                            className="absolute inset-0 bg-brand-purple rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <img
                            src={avatar.src}
                            alt="Avatar"
                            className="w-16 h-16 rounded-full border-4 border-white relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </motion.div>
            ))}

            <div className="text-center max-w-5xl mx-auto z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 md:px-6 py-2 rounded-full bg-white border border-brand-purple/10 shadow-xl text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-brand-purple mb-8 md:mb-12"
                >
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-brand-purple animate-pulse shadow-[0_0_10px_#7c4dff]" />
                    Accompagnement 1-1
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-brand-dark mb-6 md:mb-10 leading-[1.1]"
                >
                    Retrouvez du sens <br />
                    <span className="text-brand-purple">en moins de 90 jours</span>
                </motion.h1>

                {/* Animated underline */}
                <motion.div
                    className="flex justify-center -mt-2 md:-mt-6 mb-8 md:mb-10"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="w-48 sm:w-64 md:w-80 lg:w-[500px] h-1.5 md:h-2 bg-brand-purple rounded-full origin-left" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-dark/70 max-w-2xl lg:max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed font-medium px-2"
                >
                    Je vous aide à gagner en clarté et déployer une stratégie d'action capable de transformer votre vie professionnelle et personnelle.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
                >
                    <button className="group w-full sm:w-auto bg-brand-dark text-white rounded-full px-8 md:px-12 py-4 md:py-6 font-bold text-base md:text-lg hover:bg-brand-purple transition-all transform hover:scale-105 shadow-2xl hover:shadow-brand-purple/40 relative overflow-hidden">
                        <span className="relative z-10">Réserver ma consultation</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shimmer" />
                    </button>
                    <button className="w-full sm:w-auto bg-white text-brand-dark border-2 border-brand-dark/5 rounded-full px-8 md:px-12 py-4 md:py-6 font-bold text-base md:text-lg hover:bg-zinc-50 transition-all transform hover:scale-105 shadow-md">
                        Découvrir ma méthode
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
