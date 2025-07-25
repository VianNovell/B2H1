import { useState } from "react";
import { Activity, Heart, Users, Zap, Eye, Baby, Dumbbell, Brain, Stethoscope, Scissors, Waves, Target, ChevronDown, ChevronUp, X } from "lucide-react";
import Navigation from "@/components/navigation";

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };
  const services = [
    {
      icon: Activity,
      title: "Chiropractic",
      description: "Comprehensive spinal adjustments and musculoskeletal treatments",
      subservices: [
        "Spinal adjustments and manipulation",
        "Gonstead Technique",
        "Diversified Technique",
        "Activator Method",
        "Pregnancy and pediatric chiropractic"
      ],
      detailedInfo: "Chiropractic care focuses on diagnosing and treating neuromuscular disorders, with emphasis on treatment through manual adjustment and/or manipulation of the spine. Our chiropractors use various techniques including Gonstead, Diversified, and Activator methods to restore proper alignment and function to the spine and nervous system. We provide safe, effective treatment for patients of all ages, including specialized care for pregnant women and children."
    },
    {
      icon: Heart,
      title: "Physiotherapy",
      description: "Evidence-based rehabilitation and movement therapy",
      subservices: [
        "Manual therapy and joint mobilization",
        "Exercise prescription and rehabilitation",
        "Sports injury management",
        "Post-surgical rehabilitation",
        "Balance and gait training"
      ],
      detailedInfo: "Physiotherapy helps restore movement and function when someone is affected by injury, illness or disability. Our physiotherapists use evidence-based techniques including manual therapy, therapeutic exercises, and specialized equipment to help patients recover from injuries, manage chronic conditions, and improve their overall physical function. We work with athletes, post-surgical patients, and anyone looking to improve their mobility and strength."
    },
    {
      icon: Waves,
      title: "Massage Therapy",
      description: "Therapeutic massage for relaxation and healing",
      subservices: [
        "Swedish massage",
        "Deep tissue massage",
        "Sports massage",
        "Prenatal massage",
        "Trigger point therapy"
      ],
      detailedInfo: "Massage therapy involves the manipulation of soft tissues to enhance healing, reduce stress, and promote overall wellness. Our licensed massage therapists offer various techniques from relaxing Swedish massage to therapeutic deep tissue work. Sports massage helps athletes prepare for and recover from physical activity, while prenatal massage provides safe, comfortable treatment for expectant mothers."
    },
    {
      icon: Zap,
      title: "PEMF Therapy",
      description: "Pulsed Electromagnetic Field Therapy for cellular healing",
      subservices: [
        "Pain reduction and inflammation control",
        "Improved circulation and oxygenation",
        "Enhanced cellular repair and recovery",
        "Bone healing acceleration",
        "Sleep and mood improvement"
      ],
      detailedInfo: "PEMF (Pulsed Electromagnetic Field) therapy uses electromagnetic fields to stimulate cellular repair and regeneration. This non-invasive treatment helps reduce pain and inflammation, improves circulation, and accelerates healing at the cellular level. PEMF therapy is particularly effective for chronic pain conditions, arthritis, bone healing, and overall wellness enhancement."
    },
    {
      icon: Brain,
      title: "Qigong and Breathwork",
      description: "Ancient practices for mind-body wellness",
      subservices: [
        "Stress reduction and relaxation",
        "Improved energy and vitality",
        "Better sleep quality",
        "Enhanced mental clarity",
        "Emotional balance and wellbeing"
      ],
      detailedInfo: "Qigong is an ancient Chinese practice that combines gentle movements, breathing techniques, and meditation to cultivate and balance life energy (qi). Our breathwork sessions focus on conscious breathing patterns to reduce stress, improve mental clarity, and enhance overall wellbeing. These practices help regulate the nervous system, improve sleep, and promote emotional balance."
    },
    {
      icon: Users,
      title: "Corporate Wellness",
      description: "Workplace wellness programs for businesses",
      subservices: [
        "On-site ergonomic assessments",
        "Workplace injury prevention",
        "Employee wellness workshops",
        "Stress management programs",
        "Health screenings and consultations"
      ],
      detailedInfo: "Our corporate wellness programs are designed to improve employee health, reduce workplace injuries, and increase productivity. We offer on-site services including ergonomic assessments, injury prevention workshops, stress management training, and health screenings. These programs help companies create healthier work environments and reduce healthcare costs while improving employee satisfaction and retention."
    },
    {
      icon: Target,
      title: "Diabetes & Weight Loss Programs",
      description: "Comprehensive programs for metabolic health",
      subservices: [
        "Personalized nutrition counseling",
        "Exercise prescription for diabetes",
        "Weight management coaching",
        "Blood sugar monitoring support",
        "Lifestyle modification guidance"
      ],
      detailedInfo: "Our comprehensive diabetes and weight loss programs combine medical expertise with lifestyle coaching to help patients achieve sustainable health improvements. We provide personalized nutrition counseling, safe exercise programs for diabetic patients, weight management strategies, and ongoing support for blood sugar control. Our holistic approach addresses both the medical and lifestyle factors that contribute to metabolic health."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Comprehensive healthcare solutions tailored to your unique needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[hsl(var(--neutral-dark))]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-[hsl(var(--neutral-dark))] mb-3">Services Include:</h4>
                    <ul className="space-y-2">
                      {service.subservices.map((subservice, subIndex) => (
                        <li key={subIndex} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-[hsl(var(--wellness-green))] rounded-full mt-2 flex-shrink-0"></span>
                          {subservice}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    onClick={() => toggleService(index)}
                    className="flex items-center gap-2 text-[hsl(var(--wellness-green))] font-semibold hover:text-blue-600 transition-colors duration-200"
                  >
                    Learn More
                    {expandedService === index ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {/* Expanded detailed information */}
                  {expandedService === index && (
                    <div className="mt-6 p-6 bg-blue-50 rounded-lg border-l-4 border-[hsl(var(--wellness-green))] animate-in slide-in-from-top duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-lg font-bold text-[hsl(var(--neutral-dark))]">
                          About {service.title}
                        </h4>
                        <button 
                          onClick={() => setExpandedService(null)}
                          className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {service.detailedInfo}
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <a 
                          href="/contact" 
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200"
                        >
                          Book This Service
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Conditions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-6">
              Common Conditions We Treat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team provides effective treatment for a wide range of conditions
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Low Back Pain", "Sciatica", "Neck Pain", "Headaches", "Arm Pain",
              "Sports Injuries", "Pregnancy Care", "Arthritis", "Muscle Strains",
              "Joint Stiffness", "Chronic Pain", "Posture Problems", "Whiplash",
              "Tennis Elbow", "Carpal Tunnel", "Fibromyalgia"
            ].map((condition, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors duration-200">
                <span className="text-gray-700 font-medium">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your consultation and take the first step towards better health.
          </p>
          <button 
            onClick={() => window.location.href = "/#appointment"}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Book Appointment
          </button>
        </div>
      </section>
    </div>
  );
}