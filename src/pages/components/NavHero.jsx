import React from 'react';

export default function DentalCareHero() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="bg-teal-700 px-6 py-3 flex items-center gap-2">
                <div className="text-white">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <div className="text-white">
                  <div className="text-sm font-bold leading-tight">NOBLE DENTAL CARE</div>
                  <div className="text-[10px] leading-tight">IMPLANT AND COMPREHENSIVE DENTISTRY</div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-900 hover:text-teal-700 font-medium text-sm">HOME</a>
              <a href="#" className="text-gray-700 hover:text-teal-700 text-sm">ABOUT US</a>
              <a href="#" className="text-gray-700 hover:text-teal-700 text-sm">SERVICES</a>
              <a href="#" className="text-gray-700 hover:text-teal-700 text-sm">TESTIMONIALS</a>
              <a href="#" className="text-gray-700 hover:text-teal-700 text-sm">BLOGS</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-teal-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-[1920px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Content */}
          <div className="bg-gray-100 px-4 sm:px-6 lg:px-12 xl:px-16 py-12 lg:py-20 xl:py-28 flex items-center">
            <div className="w-full max-w-2xl">
              {/* Subtitle */}
              <p className="text-teal-700 text-xs sm:text-sm font-medium uppercase tracking-wide mb-6">
                IMPLANT & COMPREHENSIVE DENTISTRY - UNION CITY, CA
              </p>

              {/* Main Heading */}
              <h1 className="mb-8">
                <div className="text-teal-700 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2">
                  DELIVERING ADVANCED CARE,
                </div>
                <div className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-2">
                  WITH CUTTING-EDGE
                </div>
                <div className="text-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  TECHNOLOGY
                </div>
              </h1>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base mb-10 max-w-xl">
                Experience professional and compassionate dental care with our expert team.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3.5 text-sm font-medium transition-colors duration-200">
                  Schedule an Appointment
                </button>
                <button className="bg-transparent hover:bg-gray-200 text-gray-900 px-8 py-3.5 text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-200">
                  Contact Us
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative bg-teal-700 min-h-[400px] lg:min-h-[600px] xl:min-h-[700px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80"
              alt="Dentist consulting with a patient in a modern clinic"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-teal-900/35 via-teal-800/20 to-transparent" />

            {/* Large "DENTIST" text watermark */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-15 pointer-events-none hidden xl:block">
              <div className="text-white text-9xl font-black tracking-wider" style={{ fontSize: '200px', lineHeight: '1' }}>
                DENTIST
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}