export function Header() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-text-dark font-poppins">Jadoo</span>
          </a>


          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="/#" 
              className="text-text-gray hover:text-text-dark transition-colors duration-200 font-medium"
            >
              Destinations
            </a>
            <a 
              href="/#" 
              className="text-text-gray hover:text-text-dark transition-colors duration-200 font-medium"
            >
              Hotels
            </a>
            <a 
              href="/#" 
              className="text-text-gray hover:text-text-dark transition-colors duration-200 font-medium"
            >
              Flights
            </a>
            <a 
              href="/#" 
              className="text-text-gray hover:text-text-dark transition-colors duration-200 font-medium"
            >
              Bookings
            </a>
          </nav>


          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="/#" 
              className="text-text-gray hover:text-text-dark transition-colors duration-200 font-medium"
            >
              Login
            </a>
            <a 
              href="/#" 
              className="bg-white border border-text-dark text-text-dark px-6 py-2 rounded-md hover:bg-text-dark hover:text-white transition-colors duration-200 font-medium"
            >
              Sign up
            </a>
            <div className="flex items-center text-text-gray">
              <span className="font-medium">EN</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>


          <button className="md:hidden p-2" title="Open menu">
            <svg className="w-6 h-6 text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
