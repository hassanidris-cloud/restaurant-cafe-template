"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { menuCategories, type MenuCategoryId } from "../../lib/menu-data";

const categoryTabs: { id: MenuCategoryId; icon: string }[] = [
  { id: "breakfast", icon: "☕" },
  { id: "lunch", icon: "🫒" },
  { id: "pastries", icon: "🥐" },
  { id: "coffee", icon: "✦" }
];

export function MenuPreview() {
  const shouldReduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState<MenuCategoryId>("breakfast");

  const activeCategory = menuCategories.find((c) => c.id === activeId)!;

  return (
    <section id="menu" className="py-20 md:py-28">
      <div className="section-shell">
        {/* Header */}
        <div className="mb-12 grid gap-8 md:grid-cols-[1fr,auto] md:items-end">
          <div className="space-y-4">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6 }}
              className="pill-label"
            >
              <span className="h-[1px] w-5 bg-espresso/30" />
              Menu
            </motion.div>
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-display text-3xl leading-tight tracking-wide md:text-4xl lg:text-[2.6rem]"
            >
              A quiet balance of<br className="hidden sm:block" />
              comfort and brightness.
            </motion.h2>
          </div>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[0.72rem] uppercase tracking-[0.28em] text-espresso/35"
          >
            Spring · 2026
          </motion.p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          {/* ── Menu Card ── */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="menu-card overflow-hidden"
          >
            {/* Category tab bar */}
            <div className="flex border-b border-espresso/10">
              {categoryTabs.map((tab) => {
                const cat = menuCategories.find((c) => c.id === tab.id)!;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveId(tab.id)}
                    className={`relative flex-1 py-4 text-center text-[0.68rem] uppercase tracking-[0.22em] transition
                      ${activeId === tab.id
                        ? "text-espresso"
                        : "text-espresso/45 hover:text-espresso/75"
                      }`}
                  >
                    <span className="block text-base mb-0.5">{tab.icon}</span>
                    <span className="hidden sm:inline">{cat.label}</span>
                    {activeId === tab.id && (
                      <motion.div
                        layoutId="tab-indicator"
                        className="absolute inset-x-0 bottom-0 h-[2px] bg-caramel"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active category content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="p-6 sm:p-7"
              >
                {/* Category header */}
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-[0.22em]">
                      {activeCategory.label}
                    </h3>
                    <p className="mt-1 text-[0.72rem] italic tracking-wide text-espresso/55">
                      {activeCategory.description}
                    </p>
                  </div>
                  <span className="hidden text-[0.65rem] uppercase tracking-[0.22em] text-espresso/35 sm:inline">
                    Sample selection
                  </span>
                </div>

                {/* Decorative rule */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex-1 border-t border-espresso/10" />
                  <span className="text-[0.55rem] text-espresso/25">◆</span>
                  <div className="flex-1 border-t border-espresso/10" />
                </div>

                {/* Items */}
                <dl className="space-y-5">
                  {activeCategory.items.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.07 }}
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <dt className="font-display text-[1rem] tracking-wide text-espresso">
                          {item.name}
                        </dt>
                        <dd className="shrink-0 font-mono text-[0.78rem] font-semibold tracking-[0.15em] text-espresso/70">
                          €{item.price}
                        </dd>
                      </div>
                      <p className="mt-1 text-[0.84rem] leading-relaxed text-espresso/65">
                        {item.description}
                      </p>
                      {item.highlight && (
                        <p className="mt-1.5 text-[0.68rem] uppercase tracking-[0.2em] text-caramel">
                          {item.highlight}
                        </p>
                      )}
                      {i < activeCategory.items.length - 1 && (
                        <div className="mt-5 border-t border-espresso/8" />
                      )}
                    </motion.div>
                  ))}
                </dl>

                {/* Footer note */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex-1 border-t border-espresso/10" />
                  <span className="text-[0.55rem] text-espresso/25">◆</span>
                  <div className="flex-1 border-t border-espresso/10" />
                </div>
                <p className="mt-4 text-center text-[0.68rem] uppercase tracking-[0.22em] text-espresso/40">
                  Full menu available in the café
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ── Right panel: editorial copy ── */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="space-y-8 lg:pt-4"
          >
            <div className="space-y-5 text-[0.93rem] leading-[1.82] text-espresso/78">
              <p>
                The menu at Aurelia shifts gently with the market: first
                strawberries, late‑summer figs, the last good tomatoes. We keep
                a small collection of dishes and pastries we know our guests
                love, and layer the rest in slowly.
              </p>
              <p>
                Coffee is pulled on a two‑group Italian machine, calibrated each
                morning. Our bar team works with a rotating single origin alongside
                the house blend, adjusting the grind as the day warms.
              </p>
            </div>

            {/* Seasonal note */}
            <div className="rounded-2xl border border-espresso/10 bg-espresso/[0.03] px-5 py-5">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-espresso/40">
                Seasonal note
              </p>
              <p className="mt-2 font-display text-lg italic leading-snug tracking-wide text-espresso/80">
                &ldquo;Spring brings our favourite things: rhubarb tarts, elderflower
                tonics, and the first open windows.&rdquo;
              </p>
              <p className="mt-3 text-[0.72rem] text-espresso/50">— Elena, Head Baker</p>
            </div>

            {/* Dietary note */}
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-espresso/45">
              Vegetarian &amp; gluten‑friendly options always marked on the printed menu.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
