import React, { useState } from 'react';

export default function DentalServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Best Dental Implants",
      description: "Advanced implant solutions for permanent tooth replacement with natural-looking results"
    },
    {
      title: "All on x dental implants",
      description: "Full arch restoration with multiple implants for a complete smile transformation"
    },
    {
      title: "Dental and Orthodontics",
      description: "Comprehensive orthodontic treatments including braces and aligners for perfect alignment"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-teal-700 text-xs sm:text-sm font-medium uppercase tracking-wider mb-3">
            Lorem ipsum dolor sit
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
            <span className="text-teal-700">Expert Care</span>{" "}
            <span className="text-black">for Every Smile</span>
          </h2>
        </div>

        {/* Services Section */}
        <div className="bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="px-6 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
            {/* Services List */}
            <div className="space-y-0">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="border-b border-teal-500/30 last:border-b-0">
                    <div className="flex items-center justify-between py-8 sm:py-10 lg:py-12 cursor-pointer transition-all duration-300">
                      {/* Service Title */}
                      <div className="flex-1">
                        <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold group-hover:translate-x-4 transition-transform duration-300">
                          {service.title}
                        </h3>
                        
                        {/* Description - Shows on hover */}
                        <div className={`overflow-hidden transition-all duration-500 ${
                          hoveredIndex === index ? 'max-h-24 opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}>
                          <p className="text-teal-100 text-sm sm:text-base lg:text-lg max-w-2xl">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Arrow Icon */}
                      <div className="ml-6 flex-shrink-0">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full transition-all duration-300 ${
                          hoveredIndex === index 
                            ? 'bg-white scale-110 rotate-45' 
                            : 'bg-teal-600/50 group-hover:bg-teal-500/70'
                        }`}>
                          <svg 
                            className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 transition-all duration-300 ${
                              hoveredIndex === index 
                                ? 'text-teal-700' 
                                : 'text-white'
                            }`}
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth={2.5}
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              d="M7 17L17 7M17 7H7M17 7V17" 
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent pointer-events-none transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>
              ))}
            </div>

            {/* View All Services Button */}
            <div className="mt-12 sm:mt-16 lg:mt-20 flex justify-center">
              <button className="group relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-semibold px-10 sm:px-12 lg:px-14 py-4 sm:py-5 rounded-full text-sm sm:text-base lg:text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  View All Services
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="relative mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal-700 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-teal-600 animate-pulse delay-100"></div>
          <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
}