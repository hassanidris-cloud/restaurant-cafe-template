 "use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SectionShellProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  align?: "left" | "center";
  children: ReactNode;
}

export function SectionShell({ id, eyebrow, title, align = "left", children }: SectionShellProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id={id} className="py-16 md:py-24">
      <div className="section-shell">
        {(eyebrow || title) && (
          <div
            className={`mb-10 space-y-4 ${align === "center" ? "max-w-3xl text-center mx-auto" : "max-w-xl"}`}
          >
            {eyebrow && (
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pill-label"
              >
                <span className="h-[1px] w-5 bg-espresso/30" />
                <span>{eyebrow}</span>
              </motion.div>
            )}
            {title && (
              <motion.h2
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="font-display text-3xl md:text-4xl lg:text-[2.6rem] leading-tight tracking-wide"
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

