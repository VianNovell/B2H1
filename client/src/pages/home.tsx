import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ProgramsSection from "@/components/programs-section";
import ConditionsSection from "@/components/conditions-section";
import TestimonialsSection from "@/components/testimonials-section";
import AppointmentBooking from "@/components/appointment-booking";
import FAQSection from "@/components/faq-section";

import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProgramsSection />
      <ConditionsSection />
      <TestimonialsSection />
      <AppointmentBooking />
      <FAQSection />

      <Footer />
    </div>
  );
}
