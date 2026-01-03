"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-6 md:py-8 glass transition-all duration-300">
                {/* Left - Navigation Links (Desktop) */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-dark/70 flex-1">
                    <Link href="#" className="hover:text-brand-purple transition-colors">Mon Approche</Link>
                    <Link href="#" className="hover:text-brand-purple transition-colors">Témoignages</Link>
                    <Link href="#" className="hover:text-brand-purple transition-colors">FAQ</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden w-10 h-10 flex items-center justify-center"
                >
                    <div className="space-y-1.5">
                        <motion.div
                            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 6 : 0 }}
                            className="w-6 h-0.5 bg-brand-dark"
                        />
                        <motion.div
                            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                            className="w-6 h-0.5 bg-brand-dark"
                        />
                        <motion.div
                            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -6 : 0 }}
                            className="w-6 h-0.5 bg-brand-dark"
                        />
                    </div>
                </button>

                <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
                    <img
                        src="/branding/icon.svg"
                        alt="PurpleLine"
                        className="h-16 md:h-20 w-auto"
                    />
                </Link>

                {/* Right - CTA */}
                <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end">
                    <Link href="#" className="text-sm font-medium hover:text-brand-purple transition-colors px-3 py-2 hidden md:block">
                        Contact
                    </Link>
                    <button className="bg-brand-dark text-white text-xs md:text-sm font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-full hover:bg-brand-purple transition-all shadow-lg">
                        Réserver
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-2xl font-semibold text-brand-dark">
                            <Link href="#" onClick={() => setMobileMenuOpen(false)} className="py-4 border-b border-brand-dark/5">Mon Approche</Link>
                            <Link href="#" onClick={() => setMobileMenuOpen(false)} className="py-4 border-b border-brand-dark/5">Témoignages</Link>
                            <Link href="#" onClick={() => setMobileMenuOpen(false)} className="py-4 border-b border-brand-dark/5">FAQ</Link>
                            <Link href="#" onClick={() => setMobileMenuOpen(false)} className="py-4 border-b border-brand-dark/5">Contact</Link>
                        </div>
                        <button className="mt-10 w-full bg-brand-purple text-white py-4 rounded-full font-bold text-lg">
                            Réserver ma consultation
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
