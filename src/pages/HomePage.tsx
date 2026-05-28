import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import FloatingWhatsAppCTA from '@/components/common/FloatingWhatsAppCTA';
import HeroSection from '@/components/sections/HeroSection';
import AboutTripSection from '@/components/sections/AboutTripSection';
import DestinationsSection from '@/components/sections/DestinationsSection';
import TripTimelineSection from '@/components/sections/TripTimelineSection';
import PackageDetailsSection from '@/components/sections/PackageDetailsSection';
import GallerySection from '@/components/sections/GallerySection';
import WhyJoinSection from '@/components/sections/WhyJoinSection';
import BookingSection from '@/components/sections/BookingSection';
import CommunitySection from '@/components/sections/CommunitySection';
import RainEffect from '@/components/ui/RainEffect';

function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      <RainEffect />
      <Navbar />
      <main>
        <HeroSection />
        <section id="about" className="py-16 md:py-24 relative z-10">
          <AboutTripSection />
        </section>
        <section id="destinations" className="py-16 md:py-24 relative z-10">
          <DestinationsSection />
        </section>
        <section id="itinerary" className="py-16 md:py-24 relative z-10">
          <TripTimelineSection />
        </section>
        <section id="package" className="py-16 md:py-24 relative z-10">
          <PackageDetailsSection />
        </section>
        <section id="gallery" className="py-16 md:py-24 relative z-10">
          <GallerySection />
        </section>
        <section id="why-join" className="py-16 md:py-24 relative z-10">
          <WhyJoinSection />
        </section>
        <section id="book" className="py-16 md:py-24 relative z-10">
          <BookingSection />
        </section>
        <section id="community" className="py-16 md:py-24 relative z-10">
          <CommunitySection />
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppCTA />
    </div>
  );
}

export default HomePage;
