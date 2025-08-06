import { Calendar, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import spineImage from "@assets/Spine.png";
import holisticImage from "@assets/Holistic.png";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const callNow = () => {
    window.open("tel:0758478992", "_self");
  };

  const slides = [
    {
      title: "Are you looking for relief from injury or everyday aches and pains?",
      subtitle: "OR trying to maintain a healthy, active lifestyle? We can help.",
      backgroundImage: spineImage,
      imageAlt: "Spine X-ray anatomy showing vertebrae and spinal structure",
      highlight: "We Can Help"
    },
    {
      title: "Expert Chiropractic and Physiotherapy",
      subtitle: "Comprehensive treatment for pain relief, injury recovery and optimal wellness in Kampala and Entebbe.",
      backgroundImage: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
      imageAlt: "Professional healthcare treatment",
      highlight: "Expert Care"
    },
    {
      title: "Holistic Wellness Programs",
      subtitle: "From massage therapy to corporate wellness programs - complete solutions for your health journey.",
      backgroundImage: holisticImage,
      imageAlt: "Holistic wellness and therapeutic programs",
      highlight: "Holistic Wellness"
    }
  ];

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-width Background Image Slider */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
              }}
            />
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
            {/* Gradient overlay for additional depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent md:from-black/50 md:via-black/30 md:to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh] md:min-h-[80vh]">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 max-w-3xl mx-auto lg:mx-0">
            <div className="space-y-4 md:space-y-6 animate-fade-in-up">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white text-shadow-strong px-2">
                <span className="block">
                  {slides[currentSlide].title.split(slides[currentSlide].highlight)[0]}
                </span>
                <span className="block bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent animate-text-glow">
                  {slides[currentSlide].highlight}
                </span>
                <span className="block">
                  {slides[currentSlide].title.split(slides[currentSlide].highlight)[1]}
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed text-shadow-medium max-w-2xl px-2">
                {slides[currentSlide].subtitle}
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 md:pt-6 px-4">
              <Button
                onClick={scrollToAppointment}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 md:px-12 py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 rounded-full border-2 border-white/20 backdrop-blur-sm min-h-[48px] touch-manipulation"
              >
                <Calendar className="mr-2 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                Book an Appointment
              </Button>
              <Button
                onClick={callNow}
                variant="outline"
                className="border-3 border-white/80 text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 md:px-12 py-4 md:py-5 text-base sm:text-lg md:text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-full bg-white/10 backdrop-blur-sm min-h-[48px] touch-manipulation"
              >
                <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                Call Now
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-6 md:pt-8 text-center lg:text-left px-4 max-w-md mx-auto lg:mx-0">
              <div className="text-white">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 drop-shadow-lg">1000+</div>
                <div className="text-xs sm:text-sm text-white/80">Happy Patients</div>
              </div>
              <div className="text-white">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 drop-shadow-lg">20+</div>
                <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right side floating elements for larger screens */}
          <div className="hidden lg:flex justify-end items-center relative">
            <div className="space-y-8">
              {/* Floating wellness cards */}
              <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 animate-float">
                <div className="text-2xl font-bold text-green-400">✨</div>
                <div className="text-sm font-semibold">Holistic Healing</div>
                <div className="text-xs text-white/80">Mind, Body & Spirit</div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-bold text-green-400">🌿</div>
                <div className="text-sm font-semibold">Natural Medicine</div>
                <div className="text-xs text-white/80">Proven Therapies</div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-2xl font-bold text-green-400">🤝</div>
                <div className="text-sm font-semibold">Expert Care</div>
                <div className="text-xs text-white/80">Collaborative Team</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute left-2 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 lg:p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
          </button>
        </div>
        
        <div className="absolute right-2 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20">
          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-3 lg:p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full border border-white/40 ${
                index === currentSlide
                  ? "w-16 h-4 bg-green-400"
                  : "w-4 h-4 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
