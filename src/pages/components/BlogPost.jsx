import React, { useState } from 'react';

export default function BlogPostsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop",
      title: "Lorem Lpsum",
      description: "Lorem ipsum dolor sit amet consectetur. Quam proin platea nisl a non rhoncus. Risus ut laoreet.",
      author: {
        name: "Sophie Carter",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop",
        date: "April 12, 2025"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
      title: "Lorem Lpsum",
      description: "Lorem ipsum dolor sit amet consectetur. Quam proin platea nisl a non rhoncus. Risus ut laoreet.",
      author: {
        name: "Sophie Carter",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop",
        date: "April 12, 2025"
      }
    },
    {
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop",
      title: "Lorem Lpsum",
      description: "Lorem ipsum dolor sit amet consectetur. Quam proin platea nisl a non rhoncus. Risus ut laoreet.",
      author: {
        name: "Sophie Carter",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop",
        date: "April 12, 2025"
      }
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
            Lorem ipsum dolor sit amet
          </h2>
          {/* Decorative underline */}
          <div className="flex justify-center mt-6">
            <div className="w-24 h-1 bg-teal-700 rounded-full"></div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-teal-700/90 via-teal-700/50 to-transparent transition-opacity duration-500 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className={`transform transition-all duration-500 ${
                        hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
                        <span className="inline-block bg-white text-teal-700 text-xs font-semibold px-4 py-2 rounded-full">
                          Read More
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-8">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 group-hover:text-teal-700 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {post.description}
                  </p>

                  {/* Author Info and Arrow */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-teal-700"
                      />
                      <div>
                        <p className="text-black font-semibold text-sm">
                          {post.author.name}
                        </p>
                        <div className="flex items-center gap-2 text-teal-700 text-xs">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span>{post.author.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Button */}
                    <button className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      hoveredCard === index
                        ? 'bg-teal-700 border-teal-700 scale-110 rotate-45'
                        : 'bg-transparent border-gray-300 hover:border-teal-700'
                    }`}>
                      <svg 
                        className={`w-5 h-5 transition-colors duration-300 ${
                          hoveredCard === index ? 'text-white' : 'text-gray-600'
                        }`}
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-teal-700 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}