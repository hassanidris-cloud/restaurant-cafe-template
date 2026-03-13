"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "../common/SectionShell";
import { signatureItems } from "../../lib/menu-data";

export function SignatureDishes() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="signatures"
      eyebrow="Signatures"
      title="Three reasons our regulars keep a standing table."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {signatureItems.map((item, index) => (
          <motion.article
            key={item.id}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: index * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-[2rem] border border-espresso/10 bg-cream/90 shadow-soft-elevated"
          >
            {/* Image */}
            <div className="relative h-60 overflow-hidden">
              <Image
                src={item.image ?? "/images/signatures/placeholder.jpg"}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/45 via-espresso/10 to-transparent" />

              {/* Signature badge */}
              <div className="absolute left-4 top-4 rounded-full bg-cream/92 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-espresso/70 shadow-md backdrop-blur-sm">
                Signature
              </div>

              {/* Price overlay on image */}
              <div className="absolute bottom-4 right-4 rounded-full bg-espresso/80 px-3.5 py-1.5 text-[0.72rem] font-semibold tracking-[0.18em] text-cream/90 backdrop-blur-sm">
                €{item.price}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="font-display text-xl tracking-wide text-espresso">
                {item.name}
              </h3>

              {/* Decorative line */}
              <div className="my-3 flex items-center gap-3">
                <div className="h-px flex-1 bg-espresso/12" />
                <span className="text-[0.5rem] text-espresso/25">◆</span>
                <div className="h-px flex-1 bg-espresso/12" />
              </div>

              <p className="text-[0.88rem] leading-relaxed text-espresso/75">
                {item.description}
              </p>

              {item.highlight && (
                <p className="mt-3 text-[0.68rem] uppercase tracking-[0.24em] text-caramel">
                  {item.highlight}
                </p>
              )}

              {/* Hover reveal link */}
              <div className="mt-4 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[0.7rem] uppercase tracking-[0.22em] text-espresso/50 underline underline-offset-2">
                  See full description ↓
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
