import React, { useState } from 'react';

export default function FooterSection() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Contact Us', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-900 text-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-20">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                {/* Logo Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-teal-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3v3c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V9c0-1.66-1.34-3-3-3V4c0-1.1-.9-2-2-2zm0 2c.55 0 1 .45 1 1v1h-2V5c0-.55.45-1 1-1zM8 9c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v3H8V9z"/>
                    <path d="M7 15c-1.66 0-3 1.34-3 3v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2c0-1.66-1.34-3-3-3H7z"/>
                  </svg>
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">
                    NOBLE DENTAL CARE
                  </h3>
                  <p className="text-teal-100 text-xs sm:text-sm">
                    Family, Cosmetic and Implant Dentistry
                  </p>
                </div>
              </div>
            </div>

            <p className="text-teal-50 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              Amet quis rhoncus turpis phasellus ut dui. Volutpat turpis tortor!
            </p>

            {/* Emergency Contact */}
            <div className="flex items-center gap-3 bg-teal-600/50 rounded-lg p-4 hover:bg-teal-600/70 transition-colors duration-300">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-teal-700" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-teal-100 text-xs font-medium">Emergency 24h:</p>
                <a href="tel:5104932130" className="text-white text-lg font-bold hover:text-yellow-300 transition-colors">
                  (510) 493-2130
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="text-teal-50 hover:text-white text-sm sm:text-base transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        hoveredLink === index ? 'translate-x-1' : ''
                      }`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Locations */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Locations</h4>
            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <p className="font-semibold text-white mb-1">Main Office:</p>
                <p className="text-teal-50 leading-relaxed">
                  34603 Alvarado-Niles Rd, Union City, CA 94587
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Office #2:</p>
                <p className="text-teal-50">Dentist in Newark</p>
              </div>
              <div>
                <p className="font-semibold text-white">Office #3:</p>
                <p className="text-teal-50">Dentist in Hayward</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-teal-600 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-teal-100 text-center md:text-left">
            © 2025 NOBLE DENTAL CARE | all rights Reserved | Powered By: Vigorant, Inc.
          </p>
          
          {/* Footer Links and Arrow Button */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="text-teal-100 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-teal-100 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-teal-100 hover:text-white transition-colors">
              Cookies Settings
            </a>
            
            {/* Scroll to Top Button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-teal-100 transition-all duration-300 hover:scale-110 shadow-lg ml-2"
              aria-label="Scroll to top"
            >
              <svg className="w-6 h-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}