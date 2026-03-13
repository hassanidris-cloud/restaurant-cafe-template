"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "../common/SectionShell";
import { galleryImages } from "../../lib/menu-data";

// Desktop staggered heights: col-left has [tall, short], col-right has [short, tall]
const heights = ["h-[440px]", "h-[270px]", "h-[270px]", "h-[440px]"];

export function GallerySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="gallery"
      eyebrow="The space"
      title="Warm wood, linen, and brass—designed to soften the day."
      align="center"
    >
      {/* ── Desktop: staggered 2×2 editorial grid ── */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-5 lg:gap-6">
        {galleryImages.map((image, index) => (
          <motion.figure
            key={image.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: index % 2 === 0 ? 32 : 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.09 }}
            className={`group relative overflow-hidden rounded-[2rem] border border-espresso/10 bg-espresso/90 shadow-soft-elevated ${heights[index]}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/65 via-espresso/10 to-transparent" />

            {/* Caption — slides up on hover */}
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 px-5 pb-5 pt-16 opacity-80 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <span className="block font-mono text-[0.62rem] uppercase tracking-[0.28em] text-golden/90">
                Aurelia Café
              </span>
              <span className="mt-0.5 block text-[0.88rem] text-cream/95">{image.label}</span>
            </figcaption>

            {/* Corner accent on hover */}
            <div className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-golden/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </motion.figure>
        ))}
      </div>

      {/* ── Mobile: horizontal scroll ── */}
      <div className="relative md:hidden">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hide-scrollbar -mx-6 flex gap-4 overflow-x-auto px-6 pb-4 pt-1"
        >
          {galleryImages.map((image, index) => (
            <motion.figure
              key={image.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.07 }}
              className="relative h-64 min-w-[78%] shrink-0 overflow-hidden rounded-[2rem] border border-espresso/15 bg-espresso/90 shadow-soft-elevated sm:min-w-[320px]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-black/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-4 pt-10">
                <span className="block font-mono text-[0.62rem] uppercase tracking-[0.28em] text-golden/85">
                  Aurelia Café
                </span>
                <span className="block text-[0.84rem] text-cream/90">{image.label}</span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-cream to-transparent" />
      </div>
    </SectionShell>
  );
}
