import chikua from "./assets/hero.png"

export function HeroSection() {
  return (
    <section className="relative bg-white pt-20 pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <circle cx="200" cy="200" r="150" fill="#F1A501" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-brand-pink font-bold text-lg tracking-wide uppercase">
                BEST DESTINATIONS AROUND THE WORLD
              </p>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-text-dark font-volkhov leading-tight">
                Travel, enjoy and live a new and full life
              </h1>

              <p className="text-text-gray text-lg leading-relaxed max-w-md">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <button className="bg-brand-orange text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200 shadow-lg">
                Find out more
              </button>

              <button className="flex items-center space-x-3 text-text-gray hover:text-text-dark transition-colors duration-200">
                <div className="w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="font-medium">Play Demo</span>
              </button>
            </div>
          </div>


          <div className="relative">
            <div className="relative z-10">
              <img
                src={chikua}
                alt="Woman with backpack sitting on suitcase"
                className="w-full max-w-lg mx-auto"
              />
            </div>


            <div className="absolute top-20 -right-8 w-24 h-24 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon points="50,10 90,90 10,90" fill="#F1A501" />
              </svg>
            </div>

            <div className="absolute bottom-20 -left-8 w-16 h-16 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="#006CE4" />
              </svg>
            </div>

            <div className="absolute top-40 left-8 w-12 h-12 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect x="25" y="25" width="50" height="50" fill="#DF6951" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
