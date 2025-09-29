import React, { useState } from 'react';

export default function AppointmentContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    date: '',
    communication: '',
    reason: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Appointment request submitted successfully!');
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          
          {/* Left Side - Contact Info */}
          <div className="bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 rounded-3xl p-8 sm:p-10 lg:p-12 xl:p-16 shadow-2xl text-white flex flex-col justify-between">
            
            {/* Header */}
            <div className="mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Searching for an Outstanding, Comprehensive Dentist Near You?
              </h2>
              <p className="text-teal-50 text-base sm:text-lg leading-relaxed">
                Contact our office today to join the Noble Dental Care family!
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-white group-hover:text-teal-700 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
                    34603 Alvarado-Niles Rd, Union City, CA 94587 | Dentist in Newark | Dentist in Hayward
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-white group-hover:text-teal-700 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <a href="tel:5104932130" className="text-white text-xl sm:text-2xl font-bold hover:text-yellow-300 transition-colors">
                    (510) 493-2130
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <svg className="w-6 h-6 text-white group-hover:text-teal-700 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <a href="https://nobledentalcares.com/" target="_blank" rel="noopener noreferrer" className="text-white text-base sm:text-lg font-medium hover:text-yellow-300 transition-colors break-all">
                    https://nobledentalcares.com/
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="mt-12 flex gap-3">
              <div className="w-16 h-1 bg-white rounded-full"></div>
              <div className="w-8 h-1 bg-teal-400 rounded-full"></div>
              <div className="w-4 h-1 bg-teal-300 rounded-full"></div>
            </div>
          </div>

          {/* Right Side - Appointment Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl">
            
            {/* Form Header */}
            <div className="mb-8">
              <p className="text-teal-700 text-xs sm:text-sm font-medium uppercase tracking-wider mb-2">
                Appointment
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
                Make An Appointment Now
              </h3>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              
              {/* Name Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Full Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('firstName')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3.5 rounded-lg border-2 transition-all duration-300 ${
                      focusedField === 'firstName' 
                        ? 'border-teal-700 bg-teal-50/50' 
                        : 'border-gray-200 bg-gray-50'
                    } focus:outline-none focus:border-teal-700 focus:bg-teal-50/50`}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('lastName')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3.5 rounded-lg border-2 transition-all duration-300 ${
                      focusedField === 'lastName' 
                        ? 'border-teal-700 bg-teal-50/50' 
                        : 'border-gray-200 bg-gray-50'
                    } focus:outline-none focus:border-teal-700 focus:bg-teal-50/50`}
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3.5 rounded-lg border-2 transition-all duration-300 ${
                      focusedField === 'phone' 
                        ? 'border-teal-700 bg-teal-50/50' 
                        : 'border-gray-200 bg-gray-50'
                    } focus:outline-none focus:border-teal-700 focus:bg-teal-50/50`}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3.5 rounded-lg border-2 transition-all duration-300 ${
                      focusedField === 'email' 
                        ? 'border-teal-700 bg-teal-50/50' 
                        : 'border-gray-200 bg-gray-50'
                    } focus:outline-none focus:border-teal-700 focus:bg-teal-50/50`}
                  />
                </div>
              </div>

              {/* Date and Communication Method */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-teal-700 text-xs font-medium mb-2">
                    Desired Consult date*
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('date')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3.5 rounded-lg border-2 transition-all duration-300 ${
                      focusedField === 'date' 
                        ? 'border-teal-700 bg-teal-50/50' 
                        : 'border-gray-200 bg-gray-50'
                    } focus:outline-none focus:border-teal-700 focus:bg-teal-50/50`}
                  />
                </div>
                <div>
                  <label className="block text-teal-700 text-xs font-medium mb-2">
                    Preferred Method of Communication*
                  </label>
                  <input
                    type="text"
                    name="communication"
                    placeholder="Text"
                    value={formData.communication}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('communication')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3.5 rounded-lg border-2 transition-all duration-300 ${
                      focusedField === 'communication' 
                        ? 'border-teal-700 bg-teal-50/50' 
                        : 'border-gray-200 bg-gray-50'
                    } focus:outline-none focus:border-teal-700 focus:bg-teal-50/50`}
                  />
                </div>
              </div>

              {/* Reason for Visit */}
              <div>
                <textarea
                  name="reason"
                  placeholder="Reason For Your Visit"
                  value={formData.reason}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('reason')}
                  onBlur={() => setFocusedField(null)}
                  rows="4"
                  className={`w-full px-4 py-3.5 rounded-lg border-2 transition-all duration-300 resize-none ${
                    focusedField === 'reason' 
                      ? 'border-teal-700 bg-teal-50/50' 
                      : 'border-gray-200 bg-gray-50'
                  } focus:outline-none focus:border-teal-700 focus:bg-teal-50/50`}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto px-10 py-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Submit Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}