export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-text-gray text-lg font-medium mb-4">TESTIMONIALS</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-text-dark font-volkhov mb-12">
              What People Say About Us.
            </h2>
            
            {/* Navigation dots */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-text-dark rounded-full"></div>
              <div className="w-3 h-3 bg-text-light rounded-full"></div>
              <div className="w-3 h-3 bg-text-light rounded-full"></div>
            </div>
          </div>

          {/* Right Content - Testimonial Cards */}
          <div className="relative">
            {/* Main testimonial card */}
            <div className="bg-white rounded-lg shadow-lg p-8 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612e29b?w=80&h=80&fit=crop&crop=face"
                alt="Mike Taylor"
                className="w-16 h-16 rounded-full mb-6"
              />
              
              <p className="text-text-gray leading-relaxed mb-6">
                "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
              </p>
              
              <div>
                <h4 className="font-bold text-text-dark">Mike Taylor</h4>
                <p className="text-text-gray text-sm">Lahore, Pakistan</p>
              </div>
            </div>

            {/* Background testimonial card */}
            <div className="absolute top-8 -left-8 bg-white rounded-lg shadow-lg p-8 opacity-50 transform -rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                alt="Chris Thomas"
                className="w-16 h-16 rounded-full mb-6"
              />
              
              <p className="text-text-gray leading-relaxed mb-6">
                "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."
              </p>
              
              <div>
                <h4 className="font-bold text-text-dark">Chris Thomas</h4>
                <p className="text-text-gray text-sm">CEO of Red Button</p>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4 text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4 text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
