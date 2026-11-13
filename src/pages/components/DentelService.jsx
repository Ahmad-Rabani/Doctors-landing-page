import React, { useState } from "react";

const services = [
  {
    title: "Dental Implants",
    description:
      "Single-tooth and multi-unit implant solutions with natural esthetics and lasting bite strength.",
  },
  {
    title: "All-on-X Restorations",
    description:
      "Full-arch rehabilitation designed for stability, comfort, and a smile that feels like your own.",
  },
  {
    title: "Family & Orthodontic Care",
    description:
      "Cleanings, restorative work, and alignment options for healthier teeth at every stage of life.",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Whitening, veneers, and smile refinements that respect your facial proportions—not trends.",
  },
];

export default function DentalServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section-pad bg-atmosphere-deep text-white">
      <div className="container-site">
        <div className="reveal max-w-2xl">
          <p className="eyebrow eyebrow-light">What we offer</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] text-balance">
            Expert care for every smile
          </h2>
          <p className="mt-5 text-base text-white/75 sm:text-lg">
            Focused specialties, one cohesive practice—so your care stays coordinated from consult to follow-up.
          </p>
        </div>

        <div className="reveal reveal-delay-1 mt-12 border-t border-white/15">
          {services.map((service, index) => {
            const isOpen = active === index;
            return (
              <button
                key={service.title}
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 border-b border-white/15 py-7 text-left transition sm:gap-8 sm:py-9"
              >
                <span className="pt-1 font-display text-sm text-[var(--accent-soft)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span
                    className={`block font-display text-2xl transition sm:text-3xl lg:text-4xl ${
                      isOpen ? "text-white" : "text-white/70 group-hover:text-white"
                    }`}
                  >
                    {service.title}
                  </span>
                  <span
                    className={`block overflow-hidden text-sm leading-relaxed text-white/70 transition-all duration-500 sm:text-base ${
                      isOpen ? "mt-3 max-h-28 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    {service.description}
                  </span>
                </span>
                <span
                  className={`mt-1 flex h-10 w-10 items-center justify-center border transition ${
                    isOpen
                      ? "border-white bg-white text-[var(--brand-deep)]"
                      : "border-white/40 text-white"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>

        <div className="reveal reveal-delay-2 mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/40 px-6 py-3 text-sm font-semibold transition hover:bg-white hover:text-[var(--brand-deep)]"
          >
            View treatment options
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}