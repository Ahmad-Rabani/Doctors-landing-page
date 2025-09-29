import React, { useState } from 'react';

export default function DentalTechnologySection() {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="bg-white py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* First Section - Image Right */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-20 sm:mb-24 lg:mb-32">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-teal-700 text-xs sm:text-sm font-medium uppercase tracking-wider mb-4">
              Latest Technology
            </p>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight mb-6 lg:mb-8">
              Revolutionizing Dental Implants with Cutting Edge Robotics Technology
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              We are proud to offer the Yomi robot, a cutting-edge technology that enhances the precision and accuracy of our implant procedures.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              With Yomi's advanced capabilities, we eliminate the potential for error, ensuring that each implant is placed with unmatched accuracy and predictability.
            </p>

            {/* Button */}
            <button
              onMouseEnter={() => setHoveredButton('first')}
              onMouseLeave={() => setHoveredButton(null)}
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-black rounded-full text-black font-medium text-sm sm:text-base hover:bg-black hover:text-white transition-all duration-300"
            >
              <span>Lorem ipsum</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${
                  hoveredButton === 'first' ? 'translate-x-1' : ''
                }`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Teal accent border */}
              <div className="absolute -top-4 -right-4 w-full h-full bg-teal-700 rounded-2xl"></div>
              
              {/* Main image */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop"
                  alt="Dental robotics technology"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Full Width Content */}
        <div className="max-w-6xl mx-auto px-0">
          {/* Heading */}
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight mb-4 sm:mb-6 lg:mb-8">
            Lorem ipsum dolor sit amet consectetur. Mollis sagittis nam elit in elementum.
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
            This state-of-the-art robotic system allows Syed Z. Sayeedi, DDS to create exceptional results, giving patients confidence in their long-lasting smiles. By integrating Yomi into our practice, we are committed to delivering superior dental care that exceeds expectations.
          </p>

          {/* Button */}
          <div className="flex">
            <button
              onMouseEnter={() => setHoveredButton('second')}
              onMouseLeave={() => setHoveredButton(null)}
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-black rounded-full text-black font-medium text-sm sm:text-base hover:bg-black hover:text-white transition-all duration-300"
            >
              <span>Lorem ipsum</span>
              <svg 
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                  hoveredButton === 'second' ? 'translate-x-1' : ''
                }`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-16 lg:mt-20 flex justify-center">
          <div className="flex gap-2">
            <div className="w-12 h-1 bg-teal-700 rounded-full"></div>
            <div className="w-8 h-1 bg-teal-500 rounded-full"></div>
            <div className="w-4 h-1 bg-teal-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}