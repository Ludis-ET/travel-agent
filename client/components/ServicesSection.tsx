export function ServicesSection() {
  const services = [
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" fill="#F1A501" opacity="0.1"/>
          <path d="M32 8C18.7 8 8 18.7 8 32s10.7 24 24 24 24-10.7 24-24S45.3 8 32 8zm0 4c11.1 0 20 8.9 20 20s-8.9 20-20 20-20-8.9-20-20 8.9-20 20-20z" fill="#F1A501"/>
          <path d="M32 16c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zm0 28c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z" fill="#F1A501"/>
        </svg>
      ),
      title: "Calculated Weather",
      description: "Built Wicket longer admire do barton vanity itself do in it."
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" fill="#006CE4" opacity="0.1"/>
          <path d="M48 20H16c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V24c0-2.2-1.8-4-4-4zm0 4v4H16v-4h32zm0 20H16v-12h32v12z" fill="#006CE4"/>
          <path d="M20 32h8v4h-8v-4zm12 0h8v4h-8v-4z" fill="#006CE4"/>
        </svg>
      ),
      title: "Best Flights",
      description: "Engrossed listening. Park gate sell they west hard for the."
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" fill="#DF6951" opacity="0.1"/>
          <path d="M32 12c-8.8 0-16 7.2-16 16 0 12 16 24 16 24s16-12 16-24c0-8.8-7.2-16-16-16zm0 22c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" fill="#DF6951"/>
        </svg>
      ),
      title: "Local Events",
      description: "Barton vanity itself do in it. Preferred to men it engrossed listening."
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="30" fill="#84829A" opacity="0.1"/>
          <path d="M32 12c-2.2 0-4 1.8-4 4v12l-8-8c-1.6-1.6-4.1-1.6-5.7 0s-1.6 4.1 0 5.7l8 8H10c-2.2 0-4 1.8-4 4s1.8 4 4 4h12.3l-8 8c-1.6 1.6-1.6 4.1 0 5.7s4.1 1.6 5.7 0l8-8v12c0 2.2 1.8 4 4 4s4-1.8 4-4V40l8 8c1.6 1.6 4.1 1.6 5.7 0s1.6-4.1 0-5.7l-8-8H54c2.2 0 4-1.8 4-4s-1.8-4-4-4H41.7l8-8c1.6-1.6 1.6-4.1 0-5.7s-4.1-1.6-5.7 0l-8 8V16c0-2.2-1.8-4-4-4z" fill="#84829A"/>
        </svg>
      ),
      title: "Customization",
      description: "We deliver outsourced aviation services for reliable connectivity."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-text-gray text-lg font-medium mb-2">CATEGORY</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-dark font-volkhov">
            We Offer Best Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text-dark mb-4 font-poppins">
                {service.title}
              </h3>
              
              <p className="text-text-gray leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect background */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
