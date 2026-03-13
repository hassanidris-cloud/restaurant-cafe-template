"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.72, ease: "easeOut", delay }
});

export function AboutStory() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="story" className="overflow-hidden py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-14 md:grid-cols-[1.05fr,0.95fr] md:gap-16 lg:gap-20">

          {/* ── Left: editorial text ── */}
          <div className="flex flex-col justify-center space-y-8">
            <motion.div
              {...(shouldReduceMotion ? {} : fadeUp(0))}
              className="pill-label self-start"
            >
              <span className="h-[1px] w-5 bg-espresso/30" />
              Our Story
            </motion.div>

            <motion.h2
              {...(shouldReduceMotion ? {} : fadeUp(0.06))}
              className="font-display text-3xl leading-tight tracking-wide text-espresso md:text-4xl lg:text-[2.7rem]"
            >
              A small, sunlit room<br />
              where the city<br />
              <em className="text-caramel">slows down.</em>
            </motion.h2>

            <motion.div
              {...(shouldReduceMotion ? {} : fadeUp(0.1))}
              className="space-y-5 text-[0.94rem] leading-[1.82] text-espresso/80"
            >
              <p>
                Aurelia Café began as a sketch in the margin of a notebook—a place where the
                sound of steaming milk and clinking porcelain could soften the edges of the
                day. Founder and baker{" "}
                <span className="font-semibold text-espresso">Elena Rossi</span> imagined a
                room that felt more like a friend&apos;s apartment than a café: linen-draped
                tables, shelves of cookbooks, and light that moves slowly across the walls.
              </p>
              <p>
                Our menu is guided by the markets and the seasons. We work with small roasters
                and nearby farms, milling flour on site and proofing dough overnight. Every
                plate is meant to feel composed but never fussy—simple ingredients treated
                with the attention you reserve for guests at your own table.
              </p>
              <p>
                Mornings are for cappuccinos and barely cooled pastries. Afternoons shift into
                crisp salads, warm grains, and espresso over ice. By evening, the lights dim,
                candles appear, and Aurelia becomes a quiet hideaway for unhurried
                conversations and a final glass.
              </p>
            </motion.div>

            {/* Decorative divider note */}
            <motion.div
              {...(shouldReduceMotion ? {} : fadeUp(0.15))}
              className="flex items-center gap-5 pt-2"
            >
              <div className="h-px w-10 bg-espresso/20" />
              <p className="text-[0.75rem] uppercase tracking-[0.24em] text-espresso/50">
                No Wi‑Fi on weekends · stay present
              </p>
            </motion.div>
          </div>

          {/* ── Right: layered images ── */}
          <div className="relative pt-6 md:pt-10">
            {/* Main portrait image */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="texture-overlay relative ml-auto h-80 w-[90%] overflow-hidden rounded-[2rem] border border-espresso/10 bg-espresso/90 shadow-soft-elevated sm:h-96"
            >
              <Image
                src="/images/story/interior.jpg"
                alt="Cozy Aurelia Café interior with pastries, warm light, and linen accents — photo by ly on Pexels"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent" />
            </motion.div>

            {/* Small secondary image — floats bottom-left, partially overlapping */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -20, y: 10 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}
              className="absolute -bottom-6 left-0 z-10 h-44 w-36 overflow-hidden rounded-2xl border border-espresso/10 bg-espresso/90 shadow-xl sm:h-52 sm:w-40"
            >
              <Image
                src="/images/story/curtains.jpg"
                alt="Warm sunlight streaming through linen curtains at Aurelia — photo by cottonbro studio on Pexels"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Founder quote glass card */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.3 }}
              className="glass-panel absolute -bottom-12 right-2 z-20 max-w-[230px] px-4 py-4 sm:max-w-xs sm:px-5"
            >
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.26em] text-espresso/50">
                Elena&apos;s note
              </p>
              <p className="mt-2 text-[0.82rem] italic leading-snug text-espresso/85">
                &ldquo;We built Aurelia for the in‑between moments—after the meeting, before the
                train, somewhere to take a breath.&rdquo;
              </p>
            </motion.div>

            {/* Ambient glow */}
            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-golden/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
