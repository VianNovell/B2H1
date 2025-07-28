import {
  Dumbbell,
  Hand,
  Zap,
  Activity,
  Brain,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: Activity,
      title: "Chiropractic",
      description: "Spinal adjustments and manual therapy to restore proper alignment and function",
      color: "wellness-green",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
    },
    {
      icon: Dumbbell,
      title: "Physiotherapy",
      description: "Rehabilitation and movement therapy to restore function and strength",
      color: "wellness-blue",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&h=300&q=80",
    },
    {
      icon: Hand,
      title: "Massage Therapy",
      description: "Therapeutic massage to relieve tension and promote healing",
      color: "wellness-green",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
    },
    {
      icon: Zap,
      title: "PEMF Therapy",
      description: "Pulsed Electromagnetic Field Therapy for cellular healing and pain relief",
      color: "wellness-blue",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
    },
    {
      icon: Brain,
      title: "Qigong and Breathwork",
      description: "Ancient practices for mind-body wellness and stress reduction",
      color: "wellness-green",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
    },
    {
      icon: Target,
      title: "Diabetes & Weight Loss Programs",
      description: "Comprehensive programs for metabolic health and sustainable weight management",
      color: "wellness-blue",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
    },
    {
      icon: Users,
      title: "Corporate Wellness",
      description: "Workplace wellness programs for businesses and organizations",
      color: "wellness-green",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&h=300&q=80",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--wellness-green))] mx-auto mb-8"></div>
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
                    className={`absolute top-4 right-4 w-12 h-12 ${
                      service.color === "wellness-green"
                        ? "bg-[hsl(var(--wellness-green)_/_90%)]"
                        : "bg-[hsl(var(--wellness-blue)_/_90%)]"
                    } rounded-full flex items-center justify-center backdrop-blur-sm`}
                  >
                    <Icon
                      className={`${
                        service.color === "wellness-green"
                          ? "text-[hsl(var(--wellness-green))]"
                          : "text-[hsl(var(--wellness-blue))]"
                      } w-6 h-6`}
                    />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-[hsl(var(--neutral-dark))] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <a href="/services">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`border-2 ${
                        service.color === "wellness-green"
                          ? "border-[hsl(var(--wellness-green))] text-[hsl(var(--wellness-green))] hover:bg-[hsl(var(--wellness-green))] hover:text-white"
                          : "border-[hsl(var(--wellness-blue))] text-[hsl(var(--wellness-blue))] hover:bg-[hsl(var(--wellness-blue))] hover:text-white"
                      } transition-colors duration-200`}
                    >
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
