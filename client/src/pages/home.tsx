import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ConditionsSection from "@/components/conditions-section";
import TestimonialsSection from "@/components/testimonials-section";
import AppointmentBooking from "@/components/appointment-booking";
import FAQSection from "@/components/faq-section";
import LocationDetailsSection from "@/components/location-details-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that section
    const hash = window.location.hash.substring(1); // Remove the # symbol
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "instant" });
        }
      }, 100); // Reduced delay for faster navigation
    }
  }, []);
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ConditionsSection />
      <TestimonialsSection />
      <AppointmentBooking />
      <FAQSection />
      <LocationDetailsSection />
      <Footer />
    </div>
  );
}
