"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionShell } from "../common/SectionShell";

const hoursData = [
  { days: "Monday – Friday", hours: "7:30 – 20:00" },
  { days: "Saturday", hours: "8:00 – 21:00" },
  { days: "Sunday", hours: "8:00 – 21:00" }
];

export function LocationHours() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionShell
      id="location"
      eyebrow="Visit us"
      title="Tucked just off the main street, easy to find—hard to leave."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr),minmax(0,0.95fr)]">
        {/* ── Left: descriptive copy ── */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.72, ease: "easeOut" }}
          className="space-y-5 text-[0.93rem] leading-[1.82] text-espresso/78"
        >
          <p>
            You&apos;ll find Aurelia on a quiet side street of the Florence District, a few
            doors down from the bookshop with the green awning. In the mornings, follow
            the scent of butter and espresso; in the evenings, look for the glow of
            candles in the front window.
          </p>
          <p>
            We&apos;re a short walk from the river tram stop and easily reached by bicycle.
            There is limited street parking in the neighbourhood—if you can, we recommend
            arriving on foot and letting the pace of the city slow as you approach.
          </p>

          <div className="flex items-center gap-5 pt-1">
            <div className="h-px w-8 bg-espresso/20" />
            <p className="text-[0.72rem] uppercase tracking-[0.24em] text-espresso/45">
              Dogs welcome on the terrace · children welcome at all hours
            </p>
          </div>
        </motion.div>

        {/* ── Right: info cards + map placeholder ── */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
          className="space-y-5"
        >
          {/* Address + Hours card */}
          <div className="glass-panel grid gap-6 px-6 py-6 sm:grid-cols-2 sm:px-7 sm:py-7">
            <div className="space-y-3">
              <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-espresso/55">
                Address
              </h3>
              <p className="text-sm leading-relaxed text-espresso/85">
                17 Aurelia Lane
                <br />
                Old Quarter · Florence District
              </p>
              <p className="text-sm text-espresso/60">+39 (000) 417 23 89</p>
              <p className="text-sm text-espresso/60">hello@aureliacafe.com</p>
            </div>

            <div className="space-y-3">
              <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-espresso/55">
                Hours
              </h3>
              <ul className="space-y-2">
                {hoursData.map((h) => (
                  <li key={h.days} className="text-sm">
                    <span className="text-espresso/60">{h.days}</span>
                    <br />
                    <span className="font-semibold text-espresso/85">{h.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[0.7rem] text-espresso/50">
                Kitchen closes one hour before closing
              </p>
            </div>
          </div>

          {/* Illustrative map placeholder */}
          <div className="relative overflow-hidden rounded-3xl border border-espresso/10 bg-gradient-to-br from-[#f0e0cc] via-[#eddcc8] to-espresso/15 shadow-soft-elevated">
            <div className="px-6 py-8">
              {/* Decorative grid lines */}
              <div className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "linear-gradient(#3B2F2F 1px, transparent 1px), linear-gradient(90deg, #3B2F2F 1px, transparent 1px)",
                  backgroundSize: "28px 28px"
                }}
              />
              <div className="relative space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-caramel shadow-md" />
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.26em] text-espresso/60">
                    17 Aurelia Lane
                  </span>
                </div>
                <p className="text-[0.78rem] text-espresso/55 max-w-xs">
                  Florence District · Old Quarter · near the river tram stop and the bookshop with the green awning.
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-espresso/15 bg-cream/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.22em] text-espresso/55 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-caramel/80" />
                    Map embed goes here
                  </span>
                </div>
              </div>
            </div>
            <div className="h-3 bg-gradient-to-t from-espresso/5 to-transparent" />
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
