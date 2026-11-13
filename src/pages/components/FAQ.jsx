import React, { useState } from "react";

const faqs = [
  {
    question: "Is this dental service right for me?",
    answer:
      "Our comprehensive services cover routine cleanings through advanced implant care. A consultation helps us match treatment to your goals, timeline, and oral health.",
  },
  {
    question: "What is cosmetic dentistry?",
    answer:
      "Cosmetic dentistry improves the look of your teeth and smile—whitening, veneers, bonding, and smile design—while supporting healthy function.",
  },
  {
    question: "Can I use my dental insurance?",
    answer:
      "We work with most major dental plans and will verify benefits before treatment. Flexible payment options are available when coverage is partial.",
  },
  {
    question: "What if I have questions after treatment?",
    answer:
      "You will leave with aftercare guidance and direct access to our team. We review concerns promptly and adjust follow-up care when needed.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-pad bg-[var(--paper)]">
      <div className="container-site">
        <div className="mx-auto max-w-3xl">
          <div className="reveal">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] text-[var(--ink)] text-balance">
              Answers to common dental questions
            </h2>
          </div>

          <div className="reveal reveal-delay-1 mt-12 border-t border-[var(--line)]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="border-b border-[var(--line)]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                  >
                    <h3 className="font-display text-lg text-[var(--ink)] sm:text-xl">{faq.question}</h3>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center border transition ${
                        isOpen
                          ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                          : "border-[var(--line)] text-[var(--ink)]"
                      }`}
                    >
                      <svg
                        className={`h-4 w-4 transition ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pb-7 text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="reveal reveal-delay-2 mt-12 flex flex-col items-start gap-4 border border-[var(--line)] bg-[var(--brand-mist)] p-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-base text-[var(--ink)]">Still deciding? We are happy to talk it through.</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-deep)]"
            >
              Contact us
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}