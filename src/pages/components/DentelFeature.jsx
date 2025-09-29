import React, { useState } from 'react';

export default function DentalFeaturesGrid() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. At ipsum pharetra molestie augue tortor tincidunt. Lorem ipsum dolor sit amet consectetur. At ipsum pharetra molestie."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. At ipsum pharetra molestie augue tortor tincidunt. Lorem ipsum dolor sit amet consectetur. At ipsum pharetra molestie."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. At ipsum pharetra molestie augue tortor tincidunt. Lorem ipsum dolor sit amet consectetur. At ipsum pharetra molestie."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. At ipsum pharetra molestie augue tortor tincidunt. Lorem ipsum dolor sit amet consectetur. At ipsum pharetra molestie."
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-teal-700 text-xs sm:text-sm font-medium uppercase tracking-wider mb-4">
            Lorem ipsum dolor sit
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Amet.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className={`relative bg-white border-2 rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                hoveredCard === index 
                  ? 'border-teal-700 shadow-xl shadow-teal-100 -translate-y-2' 
                  : 'border-gray-200 shadow-md hover:shadow-lg'
              }`}>
                {/* Icon */}
                <div className="flex items-start gap-5 mb-5">
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredCard === index 
                      ? 'bg-teal-700 scale-110 rotate-6' 
                      : 'bg-teal-700'
                  }`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="flex-1 pt-1">
                    <h3 className={`text-lg sm:text-xl font-semibold text-black leading-snug transition-colors duration-300 ${
                      hoveredCard === index ? 'text-teal-700' : ''
                    }`}>
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-0">
                  {feature.description}
                </p>

                {/* Decorative corner element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-50 to-transparent rounded-tr-2xl transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`}></div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-teal-700 to-teal-400 rounded-b-2xl transition-all duration-300 ${
                  hoveredCard === index ? 'w-full' : 'w-0'
                }`}></div>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/20 to-teal-600/20 blur-xl transition-opacity duration-300 -z-10 ${
                hoveredCard === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-2">
            <div className="w-16 h-1 bg-teal-700 rounded-full"></div>
            <div className="w-8 h-1 bg-teal-400 rounded-full"></div>
            <div className="w-4 h-1 bg-teal-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}