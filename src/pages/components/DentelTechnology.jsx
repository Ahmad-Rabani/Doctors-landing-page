import React from "react";

export default function DentalTechnologySection() {
  return (
    <section className="section-pad bg-[var(--paper)]">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal order-2 lg:order-1">
            <p className="eyebrow">Latest technology</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.1] text-[var(--ink)] text-balance">
              Implant care guided by Yomi robotics
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
              Yomi helps our team place implants with exceptional accuracy—reducing variability and
              supporting more predictable healing.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
              That means clearer planning for Dr. Sayeedi and greater confidence for every patient
              choosing a long-term smile solution.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 border-2 border-[var(--ink)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--ink)] hover:text-white"
            >
              Ask about robotic implants
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="reveal reveal-delay-1 order-1 lg:order-2 relative">
            <div className="absolute -bottom-4 -left-4 h-full w-full bg-[var(--brand)]" />
            <img
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80"
              alt="Advanced dental technology in the clinic"
              className="relative aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}