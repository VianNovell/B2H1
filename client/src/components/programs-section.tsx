import { Building2, Target, ArrowRight, Calendar, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProgramsSection() {
  const programs = [
    {
      icon: Building2,
      title: "Corporate Wellness",
      subtitle: "Workplace Health Solutions",
      description: "Comprehensive programs designed to boost employee health and productivity.",
      features: [
        "On-site consultations",
        "Stress management workshops",
        "Health screening programs",
        "Employee wellness coaching"
      ],
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      iconBg: "bg-blue-100",
      duration: "Custom programs",
      price: "Contact for pricing"
    },
    {
      icon: Target,
      title: "Diabetes & Weight Loss Programs",
      subtitle: "Metabolic Health Solutions",
      description: "Comprehensive programs for metabolic health and sustainable weight management.",
      features: [
        "Personalized nutrition plans",
        "Blood sugar monitoring",
        "Exercise therapy programs",
        "Lifestyle modification coaching"
      ],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      iconBg: "bg-blue-100",
      duration: "12-16 weeks",
      price: "Starting at $200"
    },
  ];

  const scrollToAppointments = () => {
    const element = document.getElementById("appointments");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Wellness Programs
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Choose the perfect wellness journey tailored to your lifestyle and health goals
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-4xl mx-auto">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className={`group relative ${program.bgColor} rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`${program.iconBg} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`${program.textColor} w-8 h-8 md:w-10 md:h-10`} />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className={`${program.textColor} font-semibold text-xs md:text-sm uppercase tracking-wide mb-3 md:mb-4`}>
                    {program.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm md:text-base text-gray-700">
                        <CheckCircle className={`${program.textColor} w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex-shrink-0`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Duration & Price */}
                  <div className="flex items-center justify-between mb-4 md:mb-6 p-3 md:p-4 bg-white/60 rounded-lg md:rounded-xl">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-xs md:text-sm font-medium">{program.duration}</span>
                    </div>
                    <div className={`${program.textColor} font-bold text-sm md:text-base`}>
                      {program.price}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={scrollToAppointments}
                    className={`w-full bg-gradient-to-r ${program.gradient} hover:shadow-lg text-white font-semibold py-3 md:py-4 px-6 rounded-lg md:rounded-xl transition-all duration-300 group-hover:scale-105 text-sm md:text-base min-h-[48px] touch-manipulation`}
                  >
                    Book Now
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-20">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
              Not sure which program is right for you?
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed px-2">
              Schedule a free consultation to discuss your wellness goals and find the perfect program
            </p>
            <Button
              onClick={scrollToAppointments}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-blue-600 hover:to-emerald-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base min-h-[48px] touch-manipulation"
            >
              <Calendar className="mr-2 w-4 h-4 md:w-5 md:h-5" />
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
