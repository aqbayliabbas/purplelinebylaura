"use client";

import { motion } from "framer-motion";

export function TrustBar() {
    const brands = ["HEC PARIS", "ESSEC", "GOLDMAN SACHS", "MCKINSEY", "L'ORÉAL", "DELOITTE", "BOSTON CONSULTING GROUP", "APPLE"];

    return (
        <section className="py-12 md:py-24 border-y border-brand-dark/5 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-16 text-center">
                <div className="text-[9px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-brand-dark/30 max-w-xs md:max-w-none mx-auto">
                    Diplômés des plus grandes écoles et leaders en entreprises
                </div>
            </div>

            <div className="flex relative overflow-hidden group">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex shrink-0 items-center"
                >
                    {[...brands, ...brands].map((brand, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center px-8 md:px-24 text-lg md:text-3xl font-black tracking-tighter text-brand-dark/5 hover:text-brand-purple/20 transition-all duration-700 cursor-default select-none whitespace-nowrap"
                        >
                            {brand}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
