import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is this dental service right for me?",
      answer: "Our comprehensive dental services are designed for patients of all ages and dental needs. Whether you need routine cleanings, advanced implant procedures, or cosmetic dentistry, our experienced team can help. We offer personalized consultations to assess your specific needs and recommend the best treatment plan for your oral health goals."
    },
    {
      question: "What is cosmetic dentistry?",
      answer: "Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and smile. This includes procedures like teeth whitening, veneers, bonding, and smile makeovers. Our cosmetic treatments not only enhance aesthetics but also improve your overall dental health and confidence."
    },
    {
      question: "Can I use my dental insurance for this service?",
      answer: "Yes, we accept most major dental insurance plans and will work with your provider to maximize your benefits. Our team will verify your coverage and provide a detailed breakdown of costs before any treatment. We also offer flexible payment plans for services not fully covered by insurance."
    },
    {
      question: "What is your policy on dental treatment refunds?",
      answer: "We stand behind the quality of our work. If you're not satisfied with your treatment results, please contact us within 30 days. We'll review your case and work with you to address any concerns. Refund eligibility depends on the specific treatment and circumstances, which we'll discuss on a case-by-case basis."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 sm:mb-16">
            <p className="text-teal-700 text-xs sm:text-sm font-medium uppercase tracking-wider mb-4">
              Lorem ipsum dolor sit
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
              Answers to our most common dental questions
            </h2>
            {/* Decorative underline */}
            <div className="mt-6">
              <div className="w-24 h-1 bg-teal-700 rounded-full"></div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b-2 border-gray-200 last:border-b-0"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between gap-4 text-left group hover:bg-gray-50 transition-colors duration-200 px-4 sm:px-6"
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-black group-hover:text-teal-700 transition-colors duration-200 flex-1">
                    {faq.question}
                  </h3>
                  
                  {/* Arrow Icon */}
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-teal-700 border-teal-700 rotate-180'
                      : 'bg-transparent border-gray-300 group-hover:border-teal-700'
                  }`}>
                    <svg
                      className={`w-5 h-5 transition-colors duration-300 ${
                        openIndex === index ? 'text-white' : 'text-gray-600 group-hover:text-teal-700'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-6 sm:pb-8">
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 sm:mt-16 text-center bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 sm:p-10">
            <p className="text-gray-700 text-base sm:text-lg mb-6">
              Still have questions? We're here to help!
            </p>
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span>Contact Us Today</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}