import { Building2, Target, ArrowRight, Calendar, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProgramsSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const programs = [
    {
      icon: Building2,
      title: "Corporate Wellness",
      subtitle: "Workplace Health Solutions",
      description: "Do you want happy, healthy employees, improved workplace morale, reduced sick days, and improved productivity? Research proves that wellness programs save companies money. Healthy employees cost you less.",
      features: [
        "Individual therapy consultations",
        "Group programs for diabetes, obesity, cholesterol",
        "Qi gong, breathwork and meditation sessions",
        "Exercise rehabilitation for back and neck pain",
        "Corporate wellness workshops and presentations",
        "Ergonomic training and stress management",
        "Diet, nutrition and sleep hygiene education"
      ],
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      iconBg: "bg-blue-100",
      duration: "Tailored programs",
      price: "Contact for pricing"
    },
    {
      icon: Target,
      title: "Diabetes & Weight Loss Programs",
      subtitle: "Type II Diabetes & Prediabetes Management",
      description: "Designed for people with Type II Diabetes and Prediabetes to provide greater understanding and practical tools for self-management. The course empowers patients through education and motivation for sustainable lifestyle changes.",
      features: [
        "Weekly group sessions (up to 10 people)",
        "Educational presentations and discussions",
        "Individual assessment and instruction",
        "Weight reduction and cholesterol improvement",
        "Reduced need for medication",
        "Improved quality of life outcomes"
      ],
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      iconBg: "bg-blue-100",
      duration: "Group-based program",
      price: "Contact for details"
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
                    onClick={scrollToServices}
                    className={`w-full bg-gradient-to-r ${program.gradient} hover:shadow-lg text-white font-semibold py-3 md:py-4 px-6 rounded-lg md:rounded-xl transition-all duration-300 group-hover:scale-105 text-sm md:text-base min-h-[48px] touch-manipulation`}
                  >
                    Learn More
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
