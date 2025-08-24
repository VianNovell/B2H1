import { Building2, Target, ArrowRight, Calendar, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import corporateWellnessImg from "@assets/corporate-wellness.png";

export default function ProgramsSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "instant" });
    }
  };
  const programs = [
    {
      icon: Building2,
      title: "Corporate Wellness",
      subtitle: "Workplace Health Solutions",
      description: "Do you want: Happy, Healthy employees, Improved workplace morale, Reduced days off sick, Improved productivity, Reduced company costs? Then you need to prioritise your employee's health in a preventative way. It turns out that a comprehensive, strategically designed investment in employees' social, mental, and physical health pays off. Research proves that wellness programs actually save company's money. The long and short of it: Healthy employees cost you less. Back 2 Health and their team of professionals can aid you to develop strategies to enhance the wellbeing, and productivity of your staff. We aim to provide holistic wellness services tailored to the needs of individual companies.",
      features: [
        "Group well-being, wellness and posture presentations",
        "One to one pain and injury consultations with a specialist (Physiotherapist / Chiropractor)",
        "Mini massage taster sessions",
        "Qi Gong and/or Pilates sessions",
        "Nutrition presentations",
        "Ergonomic desk assessments",
        "Exercise and Rehabilitation programs"
      ],
      corporateSubheading: "Our Corporate Programs",
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
      description: "Back 2 Health has designed a course for people with Type II Diabetes and Prediabetes to aid in a greater understanding of your diabetes status and give you the tools to be as healthy as possible. The course aims to provide patients with a good foundation and practical skills to begin self-management of their diabetes. It empowers them to self-manage by providing a working understanding of their illness and through addressing issues around the initiation and sustaining of motivation. It is also useful as a weight loss program for those suffering from obesity. The program may aid in reduction of cholesterol levels. Ultimately the course will improve overall health parameters for the majority.",
      features: [],
      whoCanJoin: "Anyone. Those with Prediabetes or recently diagnosed diabetes are most likely to go into remission. However anyone with Type II Diabetes could realise decreases in diabetes markers and reduction in need for medication. It may also be useful for anyone with predisposing factors (age, family history, obesity).",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      iconBg: "bg-blue-100",
      duration: "Group-based program",
      price: "Contact for details"
    },
  ];

  const scrollToAppointments = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "instant" });
    }
  };

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
            Programs
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
                  {/* Icon/Image */}
                  {program.title === "Corporate Wellness" ? (
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={corporateWellnessImg} 
                        alt="Corporate Wellness"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                  ) : (
                    <div className={`${program.iconBg} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`${program.textColor} w-8 h-8 md:w-10 md:h-10`} />
                    </div>
                  )}

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

                  {/* Corporate Programs Subheading */}
                  {program.title === "Corporate Wellness" && (
                    <div className="mb-4 md:mb-6">
                      <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Our Corporate Programs</h4>
                      <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Individual Therapy – Your staff can reach their health and wellness goals by consulting with one of our therapists</p>
                      <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Group programs - Join one of our carefully designed group programs to address health issues such as: Diabetes, Obesity, High cholesterol, High Blood Pressure</p>
                      <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Regular Group Sessions – Qi gong, Breathwork and Meditation sessions for stress management and wellness</p>
                      <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Exercise Rehabilitation – Addressing issues such as Low Back Pain and Neck Pain</p>
                      <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-2 md:mb-3">Corporate Wellness Workshops</h5>
                      <p className="text-sm md:text-base text-gray-600 mb-4">Our professionally created and delivered program aims to address health and wellness goals for staff members</p>
                    </div>
                  )}
                  
                  {/* Diabetes Programs Who Can Join */}
                  {program.title === "Diabetes & Weight Loss Programs" && program.whoCanJoin && (
                    <div className="mb-4 md:mb-6">
                      <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">Who can join?</h4>
                      <p className="text-sm md:text-base text-gray-600">{program.whoCanJoin}</p>
                    </div>
                  )}
                  
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
                      <span className="text-sm md:text-base font-medium">{program.duration}</span>
                    </div>
                    <div className={`${program.textColor} font-bold text-sm md:text-base text-right`}>
                      {program.price}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => {
                      if (program.title === "Corporate Wellness") {
                        window.location.href = "/corporate-wellness";
                      } else if (program.title === "Diabetes & Weight Loss Programs") {
                        window.location.href = "/programs";
                      } else {
                        scrollToServices();
                      }
                    }}
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
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base min-h-[48px] touch-manipulation"
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
