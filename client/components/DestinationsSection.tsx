export function DestinationsSection() {
  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop",
      city: "Rome, Italy",
      price: "$5.42k",
      duration: "10 Days Trip"
    },
    {
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop",
      city: "London, UK", 
      price: "$4.2k",
      duration: "12 Days Trip"
    },
    {
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop",
      city: "Full Europe",
      price: "$15k", 
      duration: "28 Days Trip"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-text-gray text-lg font-medium mb-2">Top Selling</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-dark font-volkhov">
            Top Destinations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image}
                  alt={destination.city}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>


              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium text-text-dark">
                    {destination.city}
                  </h3>
                  <span className="text-text-gray font-medium">
                    {destination.price}
                  </span>
                </div>

                <div className="flex items-center text-text-gray">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                  <span className="text-sm">
                    {destination.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
