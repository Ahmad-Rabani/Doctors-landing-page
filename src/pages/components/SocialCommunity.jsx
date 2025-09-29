import React, { useState } from 'react';

export default function SocialMediaCommunitySection() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 lg:mb-8">
              <span className="text-yellow-400">Join Our Online Community</span>
              <br />
              <span>and See What Others Say</span>
              <br />
              <span>About Us!</span>
            </h2>

            <p className="text-teal-50 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 lg:mb-10 max-w-2xl">
              Follow us on Instagram to stay updated with the latest news, promotions, and dental care tips. Join our vibrant online community and be part of the Noble Dental Care family to discover more about our dentist, patients, and their experiences.
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-black font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-8 lg:mb-10">
              <span className="text-sm sm:text-base">Schedule an Appointment</span>
            </button>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIcon('facebook')}
                onMouseLeave={() => setHoveredIcon(null)}
                className={`w-12 h-12 bg-teal-600 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredIcon === 'facebook' ? 'scale-110' : ''
                }`}
              >
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  hoveredIcon === 'facebook' ? 'text-teal-700' : 'text-white'
                }`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIcon('instagram')}
                onMouseLeave={() => setHoveredIcon(null)}
                className={`w-12 h-12 bg-teal-600 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredIcon === 'instagram' ? 'scale-110' : ''
                }`}
              >
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  hoveredIcon === 'instagram' ? 'text-teal-700' : 'text-white'
                }`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIcon('google')}
                onMouseLeave={() => setHoveredIcon(null)}
                className={`w-12 h-12 bg-teal-600 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredIcon === 'google' ? 'scale-110' : ''
                }`}
              >
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  hoveredIcon === 'google' ? 'text-teal-700' : 'text-white'
                }`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIcon('linkedin')}
                onMouseLeave={() => setHoveredIcon(null)}
                className={`w-12 h-12 bg-teal-600 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredIcon === 'linkedin' ? 'scale-110' : ''
                }`}
              >
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  hoveredIcon === 'linkedin' ? 'text-teal-700' : 'text-white'
                }`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              {/* Main phone mockup container */}
              <div className="relative" style={{ paddingBottom: '120%' }}>
                {/* Background phone frames with offset */}
                <div className="absolute top-8 left-0 w-3/5 h-4/5 bg-white rounded-3xl shadow-2xl transform rotate-6 opacity-40"></div>
                <div className="absolute top-0 right-0 w-3/5 h-4/5 bg-white rounded-3xl shadow-2xl transform -rotate-6 opacity-40"></div>
                
                {/* Main center phone */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3/4 h-5/6 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
                  {/* Phone content mockup */}
                  <div className="w-full h-full bg-white p-4 overflow-hidden">
                    {/* Social media page mockup */}
                    <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-4 h-full">
                      {/* Profile header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-16 h-16 bg-teal-700 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-sm text-gray-900">Noble Dental Care</h3>
                          <p className="text-xs text-gray-500">1.2k Likes • 141 Reviews</p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-xs text-gray-600 mb-3">
                        Dedicated to helping patients achieve the sense of wellbeing and increased confidence...
                      </p>
                      
                      {/* Buttons */}
                      <div className="flex gap-2 mb-4">
                        <div className="flex-1 bg-blue-500 text-white text-xs py-2 rounded text-center font-semibold">Like</div>
                        <div className="flex-1 bg-gray-100 text-gray-700 text-xs py-2 rounded text-center font-semibold">WhatsApp</div>
                      </div>
                      
                      {/* Image grid */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="aspect-square bg-gradient-to-br from-teal-400 to-teal-600 rounded"></div>
                        <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded"></div>
                        <div className="aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded"></div>
                        <div className="aspect-square bg-gradient-to-br from-pink-400 to-pink-600 rounded"></div>
                        <div className="aspect-square bg-gradient-to-br from-yellow-400 to-yellow-600 rounded"></div>
                        <div className="aspect-square bg-gradient-to-br from-green-400 to-green-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instagram icon badges */}
                <div className="absolute top-12 right-4 w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>

                <div className="absolute bottom-16 right-8 w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg" style={{ animationDelay: '0.5s' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}