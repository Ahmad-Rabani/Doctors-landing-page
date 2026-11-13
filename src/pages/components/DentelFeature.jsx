import React from "react";

const features = [
  {
    title: "Thoughtful diagnostics",
    description:
      "Digital imaging and careful evaluation help us map the right plan before treatment begins.",
  },
  {
    title: "Minimally invasive options",
    description:
      "Where possible, we prioritize approaches that protect healthy tissue and shorten recovery.",
  },
  {
    title: "Transparent planning",
    description:
      "You leave with clear timelines, costs, and expectations—no surprise decisions mid-procedure.",
  },
  {
    title: "Lifelong support",
    description:
      "From hygiene visits to implant maintenance, we stay with you after the smile reveal.",
  },
];

export default function DentalFeaturesGrid() {
  return (
    <section className="section-pad bg-[var(--paper)]">
      <div className="container-site">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] text-[var(--ink)] text-balance">
            Care designed around clarity and comfort
          </h2>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`reveal reveal-delay-${(index % 2) + 1} border-t border-[var(--line)] pt-6`}
            >
              <span className="font-display text-4xl text-[var(--brand)]/25">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-2xl text-[var(--ink)]">{feature.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}