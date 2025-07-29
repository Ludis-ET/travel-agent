export function BookingSection() {
  const steps = [
    {
      icon: "🏛️",
      color: "bg-brand-orange",
      title: "Choose Destination",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
    },
    {
      icon: "💳",
      color: "bg-brand-pink", 
      title: "Make Payment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
    },
    {
      icon: "🚗",
      color: "bg-brand-blue",
      title: "Reach Airport on Selected Date", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-12">
              <p className="text-text-gray text-lg font-medium mb-4">Easy and Fast</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-text-dark font-volkhov mb-8">
                Book Your Next Trip In 3 Easy Steps
              </h2>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-text-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto">
              <div className="relative mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1531756716853-09a60d38d820?w=400&h=200&fit=crop"
                  alt="Trip to Greece"
                  className="w-full h-40 object-cover rounded-xl"
                />
              </div>
              
              <h3 className="text-lg font-bold text-text-dark mb-2">
                Trip To Greece
              </h3>
              
              <div className="text-text-gray text-sm mb-4">
                14-29 June | by Robbin joseph
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-text-gray mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-text-gray">24 people going</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-red-500 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-text-gray text-sm">From</span>
                  <div className="text-xl font-bold text-text-dark">$1200</div>
                </div>
                <button className="bg-brand-orange text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                  Book Now
                </button>
              </div>
            </div>


            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-brand-blue rounded-full opacity-20"></div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-orange rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
