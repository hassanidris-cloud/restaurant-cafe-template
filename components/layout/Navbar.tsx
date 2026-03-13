"use client";

import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#signatures", label: "Signatures" },
  { href: "#gallery", label: "Space" },
  { href: "#reservation", label: "Reserve" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const close = () => setIsOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <div className="section-shell pt-4">
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="glass-panel flex items-center justify-between px-6 py-3 sm:px-7 sm:py-4"
          >
            {/* Brand */}
            <Link href="#top" onClick={close} className="flex items-baseline gap-2.5 group">
              <span className="font-display text-lg tracking-[0.28em] uppercase transition group-hover:text-caramel">
                Aurelia
              </span>
              <span className="text-[0.68rem] uppercase tracking-[0.22em] text-espresso/55">
                Café &amp; Bakery
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-8 text-[0.72rem] uppercase tracking-[0.23em] text-espresso/65 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative transition hover:text-espresso group"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-caramel transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <Link href="#reservation" className="btn-secondary">
                Reserve
              </Link>
            </div>

            {/* Mobile: Reserve + Hamburger */}
            <div className="flex items-center gap-3 md:hidden">
              <Link href="#reservation" onClick={close} className="btn-secondary px-4 py-2 text-[0.68rem]">
                Reserve
              </Link>
              <button
                onClick={() => setIsOpen((v) => !v)}
                aria-label="Toggle menu"
                className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full border border-espresso/15 bg-cream/70 backdrop-blur transition hover:border-espresso/30"
              >
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block h-px w-5 bg-espresso"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block h-px w-5 bg-espresso origin-center"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block h-px w-5 bg-espresso"
                />
              </button>
            </div>
          </motion.nav>
        </div>
      </header>

      {/* Mobile fullscreen overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-cream/97 backdrop-blur-2xl md:hidden"
          >
            {/* Brand watermark */}
            <p className="absolute top-8 left-1/2 -translate-x-1/2 font-display text-[0.7rem] uppercase tracking-[0.35em] text-espresso/25">
              Aurelia Café
            </p>

            <nav className="flex flex-col items-center gap-8 text-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.07 }}
                  className="font-display text-4xl tracking-wide text-espresso transition hover:text-caramel"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.4 }}
              className="mt-14 flex flex-col items-center gap-4"
            >
              <Link href="#reservation" onClick={close} className="btn-primary">
                Reserve a table
              </Link>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-espresso/45">
                Walk-ins always welcome
              </p>
            </motion.div>

            {/* Bottom ambient glow */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-64 -translate-x-1/2 rounded-full bg-golden/20 blur-3xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
