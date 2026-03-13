"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export function CallToAction() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-espresso py-28 md:py-36">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/evening.jpg"
          alt="Warm candlelit evening at Aurelia — photo by cottonbro studio on Pexels"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/95 via-espresso/85 to-espresso/70" />
      </div>

      {/* Ambient blobs */}
      <motion.div
        animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-golden/25 blur-3xl"
      />
      <motion.div
        animate={shouldReduceMotion ? {} : { scale: [1, 1.15, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 13, repeat: Infinity, delay: 3, ease: "easeInOut" }}
        className="pointer-events-none absolute right-12 top-10 h-48 w-48 rounded-full bg-caramel/20 blur-3xl"
      />

      {/* Content */}
      <div className="relative z-10 section-shell text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65 }}
          className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-cream/70 backdrop-blur"
        >
          <span className="h-[1px] w-4 bg-cream/30" />
          For designers &amp; hosts
        </motion.div>

        <motion.h2
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.78, ease: "easeOut", delay: 0.07 }}
          className="mx-auto mt-6 max-w-3xl font-display text-3xl leading-[1.15] tracking-wide text-cream sm:text-4xl md:text-[2.8rem]"
        >
          Imagine your brand
          <br className="hidden sm:block" />
          living in a space like this.
        </motion.h2>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.14 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/65"
        >
          Aurelia Café is a fully art‑directed concept crafted to feel like real client
          work—warm, layered, and ready to adapt to restaurants, bakeries, wine bars,
          boutique hotels, and hospitality brands of all kinds.
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="#reservation" className="btn-light">
            Reserve a table
          </Link>
          <Link href="#menu" className="btn-light-outline">
            Explore the menu
          </Link>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="mx-auto mt-16 flex items-center gap-4 max-w-xs"
        >
          <div className="flex-1 border-t border-cream/15" />
          <span className="text-[0.6rem] text-cream/25">◆</span>
          <div className="flex-1 border-t border-cream/15" />
        </motion.div>

        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5 text-[0.68rem] uppercase tracking-[0.28em] text-cream/30"
        >
          Aurelia Café · Florence District · Est. 2024
        </motion.p>
      </div>
    </section>
  );
}
