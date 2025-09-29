import React, { useState } from 'react';

export default function DentalTeamSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      name: "Syed Z. Sayeedi",
      role: "DDS",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop",
      description: "Lorem ipsum dolor sit amet consectetur. Id sapien egestas purus."
    },
    {
      name: "Manmeet Virk",
      role: "DDS",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
      description: "Lorem ipsum dolor sit amet consectetur. Id sapien egestas purus."
    },
    {
      name: "Laiba Sayeedi",
      role: "RDH",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop",
      description: "Lorem ipsum dolor sit amet consectetur. Id sapien egestas purus."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-teal-200 text-xs sm:text-sm font-medium uppercase tracking-wider mb-4">
            Lorem ipsum dolor sit
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            Our Team
          </h2>
          <p className="text-teal-50 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Cursus vitae leo ac diam quam. Fusce aenean blandit varius faucibus sed ornare tristique interdum in.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-3">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-200 aspect-[4/5]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-teal-700/80 via-teal-700/40 to-transparent transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-teal-700 opacity-90" style={{
                    clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
                  }}></div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-8">
                  {/* Name and Role */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-1 group-hover:text-teal-700 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-teal-700 text-sm sm:text-base font-semibold uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>

                  {/* Description and Arrow Button Container */}
                  <div className="flex items-end justify-between gap-4">
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {member.description}
                    </p>

                    {/* Arrow Button */}
                    <button className={`flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === index
                        ? 'bg-teal-700 border-teal-700 scale-110 rotate-45'
                        : 'bg-transparent border-teal-700 hover:bg-teal-50'
                    }`}>
                      <svg 
                        className={`w-5 h-5 transition-all duration-300 ${
                          hoveredCard === index ? 'text-white' : 'text-teal-700'
                        }`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2.5}
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className={`h-1.5 bg-gradient-to-r from-teal-700 to-teal-500 transition-all duration-500 ${
                  hoveredCard === index ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-16 flex justify-center gap-3">
          <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-teal-300 animate-pulse" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 rounded-full bg-teal-200 animate-pulse" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}