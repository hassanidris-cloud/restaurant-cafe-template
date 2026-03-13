"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 90]
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 40]
  );

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } }
  };

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-cream"
    >
      {/* Ambient background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-cream/95 to-espresso/8" />

      {/* Breathing ambient blobs */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : { scale: [1, 1.18, 1], opacity: [0.28, 0.45, 0.28] }
        }
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-16 top-24 h-72 w-72 rounded-full bg-golden/25 blur-[90px]"
      />
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : { scale: [1, 1.1, 1], opacity: [0.18, 0.3, 0.18] }
        }
        transition={{ duration: 14, repeat: Infinity, delay: 4, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-20 left-1/3 h-56 w-56 rounded-full bg-caramel/20 blur-[80px]"
      />

      <div className="section-shell grid min-h-screen items-center gap-10 py-28 md:grid-cols-[45fr,55fr] md:gap-12 md:py-0">
        {/* ── Text column ── */}
        <motion.div
          style={{ y: textY }}
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col justify-center space-y-7 md:py-40"
        >
          <motion.div variants={fadeUp} className="pill-label self-start bg-cream/90">
            <span className="h-[1px] w-5 bg-espresso/30" />
            Florence District · Old Quarter
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[2.6rem] leading-[1.12] tracking-wide text-espresso sm:text-5xl lg:text-[3.6rem]"
          >
            Crafted with passion.
            <br />
            <em className="font-display not-italic text-caramel">Served</em> with love.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-[38ch] text-[0.96rem] leading-[1.8] text-espresso/75"
          >
            Aurelia Café is a sunlit corner of the city where slow mornings
            stretch into golden afternoons. Single-origin espressos,
            still-warm pastries, and an open invitation to linger.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 pt-1"
          >
            <Link href="#menu" className="btn-primary">
              View menu
            </Link>
            <Link href="#reservation" className="btn-secondary">
              Reserve a table
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 pt-1"
          >
            <div className="h-px w-8 bg-espresso/25" />
            <span className="text-[0.7rem] uppercase tracking-[0.24em] text-espresso/50">
              Walk-ins always welcome
            </span>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={fadeUp}
            className="hidden flex-col gap-1.5 pt-6 md:flex"
          >
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-espresso/35">
              Scroll
            </p>
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-5 w-[1px] bg-gradient-to-b from-espresso/30 to-transparent ml-2.5"
            />
          </motion.div>
        </motion.div>

        {/* ── Image column ── */}
        <div className="relative h-[55vh] md:h-auto md:self-stretch md:flex md:items-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            style={{ y: imageY }}
            className="relative h-full w-full md:h-[82vh] overflow-hidden rounded-[2.4rem] border border-espresso/5 bg-espresso/90 shadow-soft-elevated"
          >
            <Image
              src="/images/hero-coffee.jpg"
              alt="Cappuccino with intricate latte art served on a dark marble table at Aurelia Café — photo by Jovan Popović"
              fill
              priority
              className="object-cover"
            />
            {/* Cinematic vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/35 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-cream/10" />
          </motion.div>

          {/* Floating caption card — bottom left */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.55 }}
            className="absolute bottom-6 left-5 max-w-[200px] rounded-2xl border border-espresso/10 bg-cream/92 px-4 py-3 text-xs shadow-xl backdrop-blur-md"
          >
            <p className="font-display text-[0.72rem] uppercase tracking-[0.26em] text-espresso">
              House Espresso
            </p>
            <p className="mt-1 leading-snug text-espresso/70">
              Dark chocolate · candied orange · toasted almond
            </p>
          </motion.div>

          {/* Floating time badge — top right */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.65 }}
            className="absolute -right-3 top-10 hidden rounded-2xl border border-espresso/10 bg-cream/92 px-3.5 py-3 text-xs shadow-xl backdrop-blur-md sm:block md:-right-6"
          >
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-espresso/55">
              Morning ritual
            </p>
            <p className="mt-0.5 font-semibold text-espresso/80">7:30 – 11:00</p>
          </motion.div>

          {/* Ambient glow blob */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : { scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }
            }
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-golden/35 blur-3xl"
          />
        </div>
      </div>
    </section>
  );
}
