import React from 'react';

export default function ClinicHoursSection() {
  const scheduleData = [
    { day: 'Monday', hours: '9:00am – 6:00pm', closed: false },
    { day: 'Tuesday', hours: '9:00am – 6:00pm', closed: false },
    { day: 'Wednesday', hours: '9:00am – 6:00pm', closed: false },
    { day: 'Thursday', hours: '9:00am – 6:00pm', closed: false },
    { day: 'Friday', hours: 'Closed', closed: true },
    { day: 'Saturday', hours: '9:00am – 3:00pm', closed: false },
    { day: 'Sunday', hours: 'Closed', closed: true }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <div className="max-w-4xl mx-auto">
          {/* Dashed Border Container */}
          <div className="relative bg-white rounded-3xl p-8 sm:p-10 lg:p-12 xl:p-16 shadow-lg" style={{
            border: '3px dashed #0f766e',
            borderRadius: '2rem'
          }}>
            
            {/* Header */}
            <div className="text-center mb-10 sm:mb-12 lg:mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-700 mb-4">
                CLINIC HOURS
              </h2>
              {/* Decorative underline */}
              <div className="flex justify-center">
                <svg width="200" height="20" viewBox="0 0 200 20" className="text-teal-700">
                  <path 
                    d="M 10 10 Q 100 20 190 10" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Schedule List */}
            <div className="space-y-4 sm:space-y-5 max-w-2xl mx-auto">
              {scheduleData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0 group hover:bg-teal-50/50 transition-colors duration-200 px-4 rounded-lg"
                >
                  {/* Day with Clock Icon */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                      <svg 
                        className="w-5 h-5 sm:w-6 sm:h-6 text-teal-700" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
                      {item.day}
                    </span>
                  </div>

                  {/* Dotted Line */}
                  <div className="flex-1 mx-4 sm:mx-6 border-b-2 border-dotted border-gray-300"></div>

                  {/* Hours */}
                  <div className="flex-shrink-0">
                    <span className={`text-base sm:text-lg lg:text-xl font-medium ${
                      item.closed ? 'text-red-600' : 'text-teal-700'
                    }`}>
                      {item.hours}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="mt-10 sm:mt-12 text-center">
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                *Hours may vary during holidays. Please call ahead to confirm.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call to Schedule</span>
              </button>
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute top-6 left-6 w-8 h-8 border-l-4 border-t-4 border-teal-700 rounded-tl-lg opacity-30"></div>
            <div className="absolute top-6 right-6 w-8 h-8 border-r-4 border-t-4 border-teal-700 rounded-tr-lg opacity-30"></div>
            <div className="absolute bottom-6 left-6 w-8 h-8 border-l-4 border-b-4 border-teal-700 rounded-bl-lg opacity-30"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 border-r-4 border-b-4 border-teal-700 rounded-br-lg opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}