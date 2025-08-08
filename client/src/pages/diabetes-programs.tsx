import { Users, Target, Heart, TrendingUp, Activity, Pill, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function DiabetesPrograms() {
  const goals = [
    {
      icon: Heart,
      title: "Improving knowledge, health beliefs and lifestyle changes",
      description: "Comprehensive education to empower you with understanding and sustainable habit formation"
    },
    {
      icon: TrendingUp,
      title: "Improving patient outcomes",
      description: "Weight reduction, improved Diabetes status (HbA1c), better lipid levels and psychosocial changes, such as quality of life and reduced depression levels"
    },
    {
      icon: Activity,
      title: "Improving levels of physical activity",
      description: "Structured guidance to help you incorporate sustainable exercise and movement into your daily routine"
    },
    {
      icon: Pill,
      title: "Reducing the need for medication",
      description: "Through lifestyle modifications and improved self-management, potentially reduce dependency on medications"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Diabetes & Weight Loss Programs
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Back 2 Health has designed a course for people with Type II Diabetes and Prediabetes to aid in a greater understanding of your diabetes status and give you the tools to be as healthy as possible.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How does it work?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Users className="text-blue-600 w-8 h-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Group-Based Learning</h3>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              The course will take place in groups as it is suggested that having peers to share the experience improves outcomes. Groups of up to 10 people will meet with the course leader weekly where there will be an educational presentation and a group discussion as well as individual assessment and instruction.
            </p>
          </div>

          {/* Who Can Join Section */}
          <div className="bg-blue-50 rounded-3xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Who can join?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              Anyone. Those with Prediabetes or recently diagnosed diabetes are most likely to go into remission. However anyone with Type II Diabetes could realise decreases in diabetes markers and reduction in need for medication. It may also be useful for anyone with predisposing factors (age, family history, obesity).
            </p>
          </div>

          {/* Goals Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Goals of the course
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {goals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="text-blue-600 w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{goal.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{goal.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Additional Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-green-600 w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Weight Loss Program</h3>
                <p className="text-gray-600">Also useful as a weight loss program for those suffering from obesity</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-purple-600 w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cholesterol Reduction</h3>
                <p className="text-gray-600">The program may aid in reduction of cholesterol levels</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Overall Health</h3>
                <p className="text-gray-600">Ultimately the course will improve overall health parameters for the majority</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our diabetes and weight loss program and take control of your health with expert guidance and peer support.
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
                Contact for Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}