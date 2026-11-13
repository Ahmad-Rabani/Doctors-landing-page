import React, { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function DentalCareHero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative min-h-[100svh] overflow-hidden text-white">
      {/* Full-bleed hero media */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
          alt="Modern dental treatment room at Noble Dental Care"
          className="hero-media h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,66,64,0.92)_0%,rgba(8,66,64,0.72)_42%,rgba(8,66,64,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(184,149,108,0.18),transparent_45%)]" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[color-mix(in_srgb,var(--brand-deep)_92%,transparent)] shadow-[0_10px_40px_rgba(8,66,64,0.25)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide flex h-20 items-center justify-between">
          <a href="#top" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-white/40 bg-white/10 transition group-hover:bg-white/20">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C8.5 2 6 4.8 6 8.2c0 2.4 1.1 4.4 2.6 6.1.9 1 1.7 2.1 2.1 3.4h2.6c.4-1.3 1.2-2.4 2.1-3.4C16.9 12.6 18 10.6 18 8.2 18 4.8 15.5 2 12 2zm0 3.2c1.4 0 2.5 1.2 2.5 2.7S13.4 10.6 12 10.6 9.5 9.4 9.5 7.9 10.6 5.2 12 5.2z" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg tracking-wide">Noble Dental Care</span>
              <span className="hidden text-[10px] uppercase tracking-[0.18em] text-white/70 sm:block">
                Implant & Comprehensive Dentistry
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/80 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="border border-white/50 bg-white px-5 py-2.5 text-sm font-semibold text-[var(--brand-deep)] transition hover:bg-[var(--accent-soft)]"
            >
              Book Visit
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/40 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[var(--brand-deep)] lg:hidden">
            <div className="container-wide flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-1 py-3 text-sm font-medium text-white/85"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 bg-white px-4 py-3 text-center text-sm font-semibold text-[var(--brand-deep)]"
                onClick={() => setMenuOpen(false)}
              >
                Book Visit
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero content — brand first, tight budget */}
      <div id="top" className="relative z-10 flex min-h-[100svh] items-end pb-16 pt-28 sm:items-center sm:pb-24 sm:pt-24">
        <div className="container-wide w-full max-w-3xl">
          <p className="hero-animate eyebrow text-[var(--accent-soft)]">Union City · Newark · Hayward</p>

          <h1 className="hero-animate hero-animate-delay-1 mt-5 font-display text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.95] tracking-tight text-balance">
            Noble Dental Care
          </h1>

          <p className="hero-animate hero-animate-delay-2 mt-5 max-w-xl text-lg text-white/85 sm:text-xl">
            Advanced implant and comprehensive dentistry, delivered with calm precision.
          </p>

          <div className="hero-animate hero-animate-delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--ink)] transition hover:brightness-110"
            >
              Schedule an Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/45 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Explore Care
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}