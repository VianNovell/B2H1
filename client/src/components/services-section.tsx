import {
  Dumbbell,
  Hand,
  Zap,
  Activity,
  Target,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import spineImage from "@assets/Spine.png";
import massageImage from "@assets/pexels-funkcines-terapijos-centras-927573878-20860619_1753688160058.jpg";
import doctorImage from "@assets/Doctor.png";
import diabetesWeightLossImage from "@assets/diabetes-weight-loss.png";

export default function ServicesSection() {
  const [, setLocation] = useLocation();

  const handleLearnMore = (serviceTitle: string) => {
    if (serviceTitle === "Corporate Wellness") {
      setLocation('/programs');
    } else {
      const serviceSlug = serviceTitle.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
      setLocation(`/services/${serviceSlug}`);
    }
  };

  const services = [
    {
      icon: Activity,
      title: "Chiropractic",
      description: "Chiropractic is based on the scientific fact that your body is a self-regulating, self-healing organism. We focus on the nervous system and its relationship to your body, specializing in diagnosis, treatment and prevention of neuromusculoskeletal disorders with emphasis on manual techniques and joint adjustment.",
      color: "wellness-blue",
      image: spineImage,
    },
    {
      icon: Dumbbell,
      title: "Physiotherapy",
      description: "Physiotherapy is a science-based, personalised approach to restoring movement, improving function, and enhancing quality of life. Through hands-on techniques, tailored exercise programs, and education, we help alleviate pain, restore strength and flexibility, prevent further injury, and improve movement mechanics.",
      color: "wellness-blue",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
    },
    {
      icon: Hand,
      title: "Therapeutic Massage",
      description: "Therapeutic massage, also known as Medical massage, is tailored to your health needs. A targeted approach to relieve stress, reduce pain, and restore balance using techniques specific to your individual needs. Benefits include relief from muscle tension, improved circulation and flexibility, stress reduction, and support for injury recovery.",
      color: "wellness-blue",
      image: massageImage,
    },
    {
      icon: Zap,
      title: "PEMF Therapy",
      description: "Pulsed Electromagnetic Field Therapy for cellular healing and pain relief",
      color: "wellness-blue",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    },
    {
      icon: Target,
      title: "Diabetes & Weight Loss Programs",
      description: "Comprehensive programs for metabolic health and sustainable weight management. Personalized nutrition plans, exercise therapy programs, and lifestyle modification coaching to help you achieve your health goals and improve your quality of life.",
      color: "wellness-blue",
      image: diabetesWeightLossImage,
    },
    {
      icon: Activity,
      title: "Complex Cases and Second Opinions",
      description: "Specialized expertise for challenging cases and comprehensive second opinion consultations. Our experienced team collaborates to provide thorough evaluations and innovative treatment approaches for complex health conditions.",
      color: "wellness-blue",
      image: doctorImage,
    },
    {
      icon: Building2,
      title: "Corporate Wellness",
      description: "Comprehensive workplace health solutions designed to create healthy, productive employees. Our programs include group wellness presentations, one-to-one consultations, mini massage sessions, Qi Gong classes, nutrition presentations, ergonomic assessments, and exercise rehabilitation programs tailored to your company's needs.",
      color: "wellness-blue",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300",
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
            Natural and non-invasive forms of Healthcare
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
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
                    onClick={() => handleLearnMore(service.title)}
                    variant="outline"
                    size="sm"
                    className={`border-2 border-[hsl(var(--wellness-blue))] text-[hsl(var(--wellness-blue))] hover:bg-[hsl(var(--wellness-blue))] hover:text-white transition-colors duration-200`}
                  >
                    Learn More
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
