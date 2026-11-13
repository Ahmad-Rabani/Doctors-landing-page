import React from "react";

const quickLinks = [
  { name: "Home", href: "#top" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function FooterSection() {
  return (
    <footer className="bg-[var(--brand-deep)] text-white">
      <div className="container-site py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl">Noble Dental Care</h3>
            <p className="mt-2 text-sm text-white/65">Family, cosmetic & implant dentistry</p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
              Advanced care with a personal touch—serving Union City, Newark, and Hayward with
              precision implants and comprehensive dentistry.
            </p>
            <a
              href="tel:5104932130"
              className="mt-6 inline-flex items-center gap-3 border border-white/20 px-4 py-3 transition hover:bg-white/10"
            >
              <span className="text-xs uppercase tracking-[0.14em] text-white/55">Call</span>
              <span className="text-lg font-semibold">(510) 493-2130</span>
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">Quick links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-white/80 transition hover:text-white sm:text-base">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">Locations</h4>
            <div className="mt-5 space-y-4 text-sm text-white/75 sm:text-base">
              <p>
                <span className="block font-medium text-white">Main office</span>
                34603 Alvarado-Niles Rd, Union City, CA 94587
              </p>
              <p>
                <span className="block font-medium text-white">Also serving</span>
                Newark · Hayward
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Noble Dental Care. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-auto flex h-10 w-10 items-center justify-center border border-white/25 text-white transition hover:bg-white hover:text-[var(--brand-deep)] sm:ml-2"
              aria-label="Scroll to top"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}