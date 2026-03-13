"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "../common/SectionShell";

export function ReservationSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="reservation" className="relative overflow-hidden py-20 md:py-28">
      {/* Subtle warm background wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cream via-cream to-espresso/[0.04]" />
      <div className="pointer-events-none absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-golden/15 blur-[90px]" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-48 w-48 rounded-full bg-caramel/12 blur-[80px]" />

      <div className="section-shell">
        {/* Section header */}
        <div className="mb-12 space-y-4">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="pill-label"
          >
            <span className="h-[1px] w-5 bg-espresso/30" />
            Reservations
          </motion.div>
          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.72, ease: "easeOut" }}
            className="font-display text-3xl leading-tight tracking-wide md:text-4xl"
          >
            Set the time.
            <br />
            We&apos;ll keep a table waiting.
          </motion.h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          {/* ── Form ── */}
          <motion.form
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="glass-panel space-y-5 px-6 py-7 sm:px-8 sm:py-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-[0.7rem] uppercase tracking-[0.22em] text-espresso/65">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Guest name"
                  className="w-full rounded-full border border-espresso/15 bg-cream/60 px-4 py-2.5 text-sm text-espresso/90 outline-none placeholder:text-espresso/35 focus:border-espresso/35 focus:bg-cream focus:ring-2 focus:ring-espresso/10 transition"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[0.7rem] uppercase tracking-[0.22em] text-espresso/65">
                  Guests
                </label>
                <select defaultValue={2} className="w-full rounded-full border border-espresso/15 bg-cream/60 px-4 py-2.5 text-sm text-espresso/80 outline-none focus:border-espresso/35 focus:ring-2 focus:ring-espresso/10 transition appearance-none cursor-pointer">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="block text-[0.7rem] uppercase tracking-[0.22em] text-espresso/65">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-full border border-espresso/15 bg-cream/60 px-4 py-2.5 text-sm text-espresso/80 outline-none focus:border-espresso/35 focus:ring-2 focus:ring-espresso/10 transition"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[0.7rem] uppercase tracking-[0.22em] text-espresso/65">
                  Time
                </label>
                <select className="w-full rounded-full border border-espresso/15 bg-cream/60 px-4 py-2.5 text-sm text-espresso/80 outline-none focus:border-espresso/35 focus:ring-2 focus:ring-espresso/10 transition appearance-none cursor-pointer">
                  {["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "18:00", "19:00", "20:00"].map(
                    (t) => (
                      <option key={t}>{t}</option>
                    )
                  )}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[0.7rem] uppercase tracking-[0.22em] text-espresso/65">
                Notes
              </label>
              <textarea
                rows={3}
                placeholder="Allergies, special occasions, or seating preferences."
                className="w-full rounded-2xl border border-espresso/15 bg-cream/60 px-4 py-3 text-sm text-espresso/90 outline-none placeholder:text-espresso/35 focus:border-espresso/35 focus:bg-cream focus:ring-2 focus:ring-espresso/10 transition resize-none"
              />
            </div>

            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.99 }}
              type="submit"
              className="btn-primary w-full justify-center"
            >
              Request reservation
            </motion.button>

            <p className="text-center text-[0.68rem] text-espresso/45">
              Visual prototype · In a live build, requests would be confirmed by email.
            </p>
          </motion.form>

          {/* ── Right: copy + info cards ── */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-[0.93rem] leading-[1.82] text-espresso/78">
              <p>
                We hold a number of tables each day for walk‑ins, especially
                during the softer hours of the afternoon. Reservations are
                recommended for brunch and for groups of four or more.
              </p>
              <p>
                For private gatherings, we can reserve our long marble table by
                the window—perfect for a small celebration, editorial meeting, or
                launch breakfast with great coffee within reach.
              </p>
            </div>

            {/* Info badges */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Brunch", detail: "Sat–Sun · 9 – 13:00" },
                { label: "Walk-ins", detail: "Always welcome" },
                { label: "Private table", detail: "Up to 10 guests" },
                { label: "Events", detail: "events@aureliacafe.com" }
              ].map((info) => (
                <div
                  key={info.label}
                  className="rounded-2xl border border-espresso/10 bg-cream/70 px-4 py-3"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-espresso/50">
                    {info.label}
                  </p>
                  <p className="mt-1 text-[0.82rem] text-espresso/80">{info.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
