import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useLocation } from "wouter";

export default function DiabetesPrograms() {
  const [, setLocation] = useLocation();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const scrollToAppointment = () => {
    // Navigate to home page with hash
    window.location.href = "/#appointment";
  };

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
              Back 2 Health has designed a course for people with Type II Diabetes and Prediabetes to aid in a greater understanding of your diabetes status and give you the <span className="bg-yellow-300 font-semibold px-1 rounded">tools to be as healthy as possible</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Program Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* TYPE II DIABETES & PREDIABETES MANAGEMENT */}
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 uppercase tracking-wide">
              TYPE II DIABETES & PREDIABETES MANAGEMENT
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Back 2 Health has designed a course for people with Type II Diabetes and Prediabetes to aid in a greater understanding of your diabetes status and give you the <span className="bg-yellow-300 font-semibold px-1 rounded">tools to be as healthy as possible</span>. The course aims to provide patients with a good foundation and practical skills to begin self-management of their diabetes. It empowers them to self-manage by providing a working understanding of their illness and through addressing issues around the initiation and sustaining of motivation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It is also useful as a <span className="bg-yellow-300 font-semibold px-1 rounded">weight loss program for those suffering from obesity</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The program may aid in reduction of cholesterol levels.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="bg-yellow-300 font-semibold px-1 rounded">Ultimately the course will improve overall health parameters for the majority</span>.
            </p>
          </div>
          {/* How does it work? */}
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How does it work?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The course will take place in groups as it is suggested that having peers to share the experience improves outcomes. Groups of up to 10 people will meet with the course leader weekly where there will be an educational presentation and a group discussion as well as individual assessment and instruction.
            </p>
          </div>

          {/* Goals of the course */}
          <div className="bg-blue-50 rounded-3xl p-8 shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Goals of the course
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">Improving knowledge, health beliefs and lifestyle changes.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">Improving patient outcomes - weight, Diabetes status(HbA1c), lipid levels and psychosocial changes, such as quality of life and levels of depression.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">Improving levels of physical activity.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">Reducing the need for medication.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our diabetes and weight loss program and take control of your health with expert guidance and peer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToAppointment}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                onClick={scrollToAppointment}
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