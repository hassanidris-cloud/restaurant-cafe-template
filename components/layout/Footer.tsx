import Link from "next/link";

const navLinks = [
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#signatures", label: "Signatures" },
  { href: "#gallery", label: "The Space" },
  { href: "#reservation", label: "Reserve" },
  { href: "#location", label: "Visit Us" }
];

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Pinterest" },
  { href: "#", label: "Behance" }
];

export function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-espresso text-cream">
      <div className="section-shell py-12 md:py-16">
        {/* Main grid */}
        <div className="grid gap-10 md:grid-cols-[2fr,1fr,1fr,1fr] md:gap-12">
          {/* Brand column */}
          <div className="space-y-5">
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.32em] text-golden/75">
                Aurelia Café &amp; Bakery
              </p>
              <p className="mt-3 font-display text-xl leading-snug tracking-wide">
                A quiet corner for slow mornings and unhurried conversations.
              </p>
            </div>
            <p className="max-w-xs text-[0.84rem] leading-relaxed text-cream/60">
              Crafted coffee, seasonal pastries, and a linen-and-wood interior
              inspired by sunlit European cafés.
            </p>
            <div className="flex gap-4 text-[0.76rem] text-cream/50">
              {socialLinks.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="transition hover:text-golden"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-golden/80">
              Navigate
            </h3>
            <ul className="space-y-2.5 text-[0.84rem] text-cream/60">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="transition hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit */}
          <div className="space-y-4">
            <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-golden/80">
              Visit
            </h3>
            <p className="text-[0.84rem] leading-relaxed text-cream/65">
              17 Aurelia Lane
              <br />
              Old Quarter
              <br />
              Florence District
            </p>
            <p className="text-[0.84rem] text-cream/55">+39 (000) 417 23 89</p>
            <p className="text-[0.84rem] text-cream/55">hello@aureliacafe.com</p>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-golden/80">
              Hours
            </h3>
            <div className="space-y-2 text-[0.84rem]">
              <p className="text-cream/65">
                Mon–Fri
                <br />
                <span className="font-semibold text-cream/85">7:30 – 20:00</span>
              </p>
              <p className="text-cream/65">
                Sat–Sun
                <br />
                <span className="font-semibold text-cream/85">8:00 – 21:00</span>
              </p>
            </div>
            <p className="text-[0.72rem] text-cream/40">
              Kitchen closes one hour before closing
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 flex items-center gap-4">
          <div className="flex-1 border-t border-cream/10" />
          <span className="text-[0.5rem] text-cream/20">◆</span>
          <div className="flex-1 border-t border-cream/10" />
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-start justify-between gap-4 text-[0.68rem] text-cream/35 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Aurelia Café. All rights reserved.</p>
          <p className="text-right">
            Concept website crafted for portfolio use.
            <br className="sm:hidden" />
            {" "}Imagery shown for art direction only.
          </p>
        </div>
      </div>
    </footer>
  );
}
