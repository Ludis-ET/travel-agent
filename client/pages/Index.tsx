import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { DestinationsSection } from '../components/DestinationsSection';
import { BookingSection } from '../components/BookingSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Footer } from '../components/Footer';

export default function Index() {
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
