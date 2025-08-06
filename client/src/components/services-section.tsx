import {
  Dumbbell,
  Hand,
  Zap,
  Activity,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import physiotherapyImage from "@assets/pexels-funkcines-terapijos-centras-927573878-20860619_1753688160058.jpg";
import spineImage from "@assets/Spine.png";
import therapeuticImage from "@assets/Therapeuticimage.png";

export default function ServicesSection() {
  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Activity,
      title: "Chiropractic",
      description: "Spinal adjustments and manual therapy to restore proper alignment and function",
      color: "wellness-blue",
      image: spineImage,
    },
    {
      icon: Dumbbell,
      title: "Physiotherapy",
      description: "Rehabilitation and movement therapy to restore function and strength",
      color: "wellness-blue",
      image: physiotherapyImage,
    },
    {
      icon: Hand,
      title: "Therapeutic Massage",
      description: "Professional therapeutic massage to relieve tension and promote healing",
      color: "wellness-blue",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      icon: Zap,
      title: "PEMF Therapy",
      description: "Pulsed Electromagnetic Field Therapy for cellular healing and pain relief",
      color: "wellness-blue",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      icon: Activity,
      title: "Spinal Rehabilitation",
      description: "Targeted exercises and therapies for spine health and back pain relief",
      color: "wellness-blue",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      icon: Target,
      title: "Diabetes & Weight Loss Programs",
      description: "Comprehensive programs for metabolic health and sustainable weight management",
      color: "wellness-blue",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },

  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--wellness-blue))] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare solutions combining traditional medicine
            with alternative therapies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div
                    className={`absolute top-4 right-4 w-12 h-12 bg-[hsl(var(--wellness-blue)_/_90%)] rounded-full flex items-center justify-center backdrop-blur-sm`}
                  >
                    <Icon
                      className={`text-[hsl(var(--wellness-blue))] w-6 h-6`}
                    />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-[hsl(var(--neutral-dark))] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <Button
                    onClick={scrollToAppointment}
                    variant="outline"
                    size="sm"
                    className={`border-2 border-[hsl(var(--wellness-blue))] text-[hsl(var(--wellness-blue))] hover:bg-[hsl(var(--wellness-blue))] hover:text-white transition-colors duration-200`}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
