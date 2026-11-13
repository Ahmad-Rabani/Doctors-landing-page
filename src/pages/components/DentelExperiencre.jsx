import React from "react";

const pillars = [
  {
    title: "Precision first",
    description:
      "From diagnostics to implant placement, every step is guided by technology that leaves less room for guesswork.",
  },
  {
    title: "Comfort always",
    description:
      "We plan visits around your pace—clear explanations, gentle technique, and a calm treatment room.",
  },
  {
    title: "Care that lasts",
    description:
      "Restorations and maintenance plans are built for longevity, so your smile stays strong years after treatment.",
  },
];

export default function DentalExperienceSection() {
  return (
    <section id="about" className="section-pad bg-atmosphere">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">The Noble difference</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] text-[var(--ink)] text-balance">
              A dental experience built on trust, not templates.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
              Noble Dental Care brings together implant expertise, comprehensive family dentistry, and a
              patient-first rhythm—so every visit feels intentional from the first hello.
            </p>

            <div className="mt-10 space-y-8 border-t border-[var(--line)] pt-8">
              {pillars.map((pillar, index) => (
                <div key={pillar.title} className={`reveal reveal-delay-${index + 1}`}>
                  <h3 className="font-display text-xl text-[var(--ink)] sm:text-2xl">{pillar.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative">
            <div className="absolute -inset-3 -z-10 bg-[var(--brand)]/15 translate-x-3 translate-y-3" />
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80"
              alt="Dentist consulting with a patient"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--brand-deep)]/90 to-transparent p-6 text-white sm:p-8">
              <p className="font-display text-2xl leading-tight sm:text-3xl">Caring for East Bay smiles</p>
              <p className="mt-2 text-sm text-white/75">Union City · Newark · Hayward</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}