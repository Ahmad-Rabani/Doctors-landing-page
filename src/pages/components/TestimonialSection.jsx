import React, { useState } from 'react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet consectetur. Massa laoreet velit mauris nisl accumsan. Nec id maecenas eu tellus risus. Tellus elit sociis purus amet tristique. Sed rutrum.",
      name: "Sophie Carter",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur. Massa laoreet velit mauris nisl accumsan. Nec id maecenas eu tellus risus. Tellus elit sociis purus amet tristique. Sed rutrum.",
      name: "James Bennett",
      location: "Toronto, Canada",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      quote: "Lorem ipsum dolor sit amet consectetur. Massa laoreet velit mauris nisl accumsan. Nec id maecenas eu tellus risus. Tellus elit sociis purus amet tristique. Sed rutrum.",
      name: "Sophie Carter",
      location: "New York, USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      quote: "The dental implant procedure was seamless and pain-free. Dr. Sayeedi's expertise with the Yomi robot gave me complete confidence. I'm thrilled with my new smile!",
      name: "Michael Rodriguez",
      location: "San Francisco, USA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      quote: "Outstanding service and cutting-edge technology. The team made me feel comfortable throughout the entire process. Highly recommend Noble Dental Care!",
      name: "Emily Thompson",
      location: "Seattle, USA",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
    }
  ];

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentSlide + i) % testimonials.length]);
    }
    return visible;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-50 py-16 sm:py-20 lg:py-24 xl:py-28">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-teal-700 text-xs sm:text-sm font-medium uppercase tracking-wider mb-4">
            Lorem ipsum dolor sit
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
            What Our Customers Say About Us
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-12 lg:mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={`${currentSlide}-${index}`}
                className="group bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 rounded-2xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  animation: 'fadeIn 0.5s ease-in-out',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Quote Icon */}
                <div className="mb-6 sm:mb-8">
                  <svg 
                    className="w-12 h-12 sm:w-16 sm:h-16 text-white opacity-90" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-white text-sm sm:text-base leading-relaxed mb-8 sm:mb-12 min-h-[120px]">
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-teal-500/30 pt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-3 border-white shadow-lg"
                  />
                  <div>
                    <h4 className="text-white font-bold text-base sm:text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-yellow-300 text-xs sm:text-sm font-medium">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-teal-800/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-teal-700 hover:text-white transition-all duration-300 group"
            aria-label="Previous testimonials"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-white transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-teal-700 hover:text-white transition-all duration-300 group"
            aria-label="Next testimonials"
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:text-white transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-teal-700'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}