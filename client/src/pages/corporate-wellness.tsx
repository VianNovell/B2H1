import { useEffect } from "react";
import { CheckCircle, Users, Target, Heart, Clock, Shield, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function CorporateWellness() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const programs = [
    {
      icon: Users,
      title: "Ergonomic Training",
      description: "Our Wellness program provides a course on office Ergonomics and Manual Lifting and Handling in order to reduce risk of workplace injury. As well as workplace activity and exercise advice and training."
    },
    {
      icon: Heart,
      title: "Stress Management",
      description: "Wellness isn't just about physical fitness. Depression and stress, in particular, have proved to be major sources of lost productivity. Our unique program includes various techniques that can be utilised for stress management including; breathing, meditation and Qigong."
    },
    {
      icon: Target,
      title: "Diet and Nutrition",
      description: "Small lifestyle changes can make a big impact on overall health and wellness. Diet and Nutrition are intricately involved in health and disease. Conditions such as Diabetes, Obesity, Heart disease, High Cholesterol, High blood pressure are all connected to what we consume. Many of these diseases can be prevented and / or reversed through changes to our diet. We will provide insights into what and when to eat for maximum health benefits."
    },
    {
      icon: Clock,
      title: "Sleep Hygiene",
      description: "A good night's sleep is vital for our physical and emotional wellbeing. There are basic protocols that can help the majority of people to improve their sleep and wake up feeling revitalised."
    },
    {
      icon: Shield,
      title: "Exercise",
      description: "We don't all benefit from the same exercise protocols. But everyone benefits from some form of exercise or activity. Often it feels as if our life gets in the way and there is never enough time to get the activity necessary for wellbeing. This course will help recognise how to create the changes necessary to increase activity levels and enjoy exercise."
    },
    {
      icon: Briefcase,
      title: "First Aid in the workplace",
      description: "Taught by a certified instructor our first aid course will deliver basic and practical first aid training. In work settings, first aid refers to the urgent, temporary care given to a person immediately after an injury occurs. It utilizes emergency aid measures to stabilize the employee's condition while waiting for a healthcare provider to arrive. It can prevent accidents and injuries from getting worse and ultimately save lives."
    }
  ];

  const therapeuticServices = [
    "Chiropractic",
    "Physiotherapy", 
    "Therapeutic Massage",
    "Reflexology",
    "Breathing, Meditation and Qigong"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Corporate Wellness Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Our programs are designed to create a healthy and content workforce. The program will look into multiple aspects of health and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="text-blue-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </div>
              );
            })}
          </div>

          {/* Therapeutic Services Section */}
          <div className="bg-blue-50 rounded-3xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Therapeutic Services
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Alongside all of these education and training benefits, your employees will also have the chance to experience the therapeutic services and benefits provided by our Doctors at Back 2 Health. These include individual and group sessions in one or more of the following:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {therapeuticServices.map((service, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                  <CheckCircle className="text-blue-600 w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Customization Section */}
          <div className="text-center bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tailored to Your Needs
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              The program can be tailored to company requirements and goals. We work with you to create a comprehensive wellness strategy that fits your organization's unique needs and culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.href = "/#appointment"}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.href = "/#contact"}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300"
              >
                Contact for Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}