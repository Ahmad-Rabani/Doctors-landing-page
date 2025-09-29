import React, { useState } from 'react';

export default function DentalExperienceSection() {
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. At ipsum pharetra molestie augue tortor tincidunt."
    },
    {
      title: "Professional Care Excellence",
      description: "Delivering exceptional dental services with state-of-the-art technology and compassionate approach."
    },
    {
      title: "Patient-Centered Approach",
      description: "Your comfort and satisfaction are our top priorities with personalized treatment plans."
    }
  ];

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight mb-8 lg:mb-10">
              Redefining an Exceptional,
              <br />
              Comprehensive, and
              <br />
              Trustworthy Dental
              <br />
              Experience
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 lg:mb-12 max-w-lg">
              Lorem ipsum dolor sit amet consectetur. At ipsum pharetra molestie augue tortor tincidunt. Ante aliquam sed eget odio lectus. Eu eget amet vel nunc.
            </p>

            {/* Image with Teal Border */}
            <div className="relative inline-block">
              <div className="absolute -top-3 -left-3 w-full h-full border-8 border-teal-700"></div>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop"
                alt="Dentist with patient"
                className="relative w-full max-w-md h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="relative">
            {/* Card Stack */}
            <div className="relative">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 ${
                    index === activeCard
                      ? 'relative z-20 opacity-100'
                      : index === activeCard + 1
                      ? 'absolute top-4 right-4 z-10 opacity-60'
                      : 'absolute top-8 right-8 z-0 opacity-30'
                  }`}
                  style={{
                    transform: index > activeCard ? `translateY(${(index - activeCard) * 20}px)` : 'none'
                  }}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-100">
                    {/* Icon */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-teal-700 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {/* Navigation Arrow */}
                    {index === activeCard && (
                      <div className="flex justify-end">
                        <button
                          onClick={() => setActiveCard((activeCard + 1) % cards.length)}
                          className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-teal-700 hover:bg-teal-50 transition-all duration-200 group"
                        >
                          <svg 
                            className="w-5 h-5 text-gray-600 group-hover:text-teal-700 transition-colors" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Card Indicators */}
            <div className="flex gap-2 mt-8 lg:mt-12 justify-center lg:justify-start">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeCard
                      ? 'w-8 bg-teal-700'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}