export function Footer() {
  const companyLogos = [
    { name: "Axon", logo: "🏢" },
    { name: "Jetstar", logo: "✈️" },
    { name: "Expedia", logo: "🌐" },
    { name: "Qantas", logo: "🦘" },
    { name: "Alitalia", logo: "🇮🇹" }
  ];

  return (
    <footer className="bg-white">
      <div className="py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-16 opacity-60">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-2xl grayscale hover:grayscale-0 transition-all duration-300">
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text-dark font-poppins mb-8">
              Subscribe to get information, latest news and other interesting offers about Jadoo
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <div className="relative flex-1 w-full">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                />
              </div>
              <button className="bg-brand-orange text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <a href="/" className="flex items-center mb-6">
                <span className="text-2xl font-bold text-text-dark font-poppins">Jadoo.</span>
              </a>
              <p className="text-text-gray leading-relaxed mb-6">
                Book your trip in minute, get full Control for much longer.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors duration-200">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors duration-200">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors duration-200">
                  <span className="text-sm">t</span>
                </a>
              </div>
            </div>


            <div>
              <h4 className="font-bold text-text-dark mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="/#" className="text-text-gray hover:text-text-dark transition-colors">About</a></li>
                <li><a href="/#" className="text-text-gray hover:text-text-dark transition-colors">Careers</a></li>
                <li><a href="/#" className="text-text-gray hover:text-text-dark transition-colors">Mobile</a></li>
              </ul>
            </div>


            <div>
              <h4 className="font-bold text-text-dark mb-6">Contact</h4>
              <ul className="space-y-3">
                <li><a href="/#" className="text-text-gray hover:text-text-dark transition-colors">Help/FAQ</a></li>
                <li><a href="/#" className="text-text-gray hover:text-text-dark transition-colors">Press</a></li>
                <li><a href="/#" className="text-text-gray hover:text-text-dark transition-colors">Affiliates</a></li>
              </ul>
            </div>


            <div>
              <h4 className="font-bold text-text-dark mb-6">More</h4>
              <ul className="space-y-3">
                <li><a href="/#" className="text-text-gray hover:text-text-dark transition-colors">Airlinesfees</a></li>
                <li><a href="/#" className="text-text-gray hover:text-text-dark transition-colors">Airline</a></li>
                <li><a href="/#" className="text-text-gray hover:text-text-dark transition-colors">Low fare tips</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8">
            <p className="text-center text-text-gray">
              All rights reserved@jadoo.co
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
