import {
  BookingSection,
  DestinationsSection,
  Footer,
  Header,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
} from "./components";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <DestinationsSection />
      <BookingSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
