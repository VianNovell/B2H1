import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Heart, Users, Target, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NonProfitCollaboration() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Heart className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Non Profit Collaboration
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Our clinicians are all involved with a non-profit organisation located in Jinja, Uganda. Where we give back our time and expertise. Please see <a href="https://handbackhealth.org/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 underline font-semibold transition-colors duration-300">HERE</a> for more information about Hand Back Health.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Call to Action Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 p-4 rounded-full">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                WE NEED YOUR HELP to bring our newest project to fruition
              </h2>
              <div className="bg-blue-600 text-white rounded-2xl p-6 max-w-2xl mx-auto">
                <Target className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  Massage training centre for Blind girls and women
                </h3>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Economic Empowerment</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Hand Back Health is piloting an economic empowerment project to skill young adult females with visual impairment in professional massage therapy, rendering them highly employable and leading to economic independence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Addressing Employment Gap</h4>
                    <p className="text-gray-600 leading-relaxed">
                      The project focuses on young adult women with visual impairment due to inherent employment difficulties. A person with a disability is almost twice as likely to be unemployed, and women face even greater disadvantages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">Project Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Vocational Training</h4>
                <p className="text-gray-600">Skill development applicable to visual impairment</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Employment Opportunities</h4>
                <p className="text-gray-600">Multiple employment and self-employed possibilities</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Community Service</h4>
                <p className="text-gray-600">Providing essential wellness services to the community</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join us in empowering visually impaired women through professional massage therapy training and create lasting impact in Uganda.
              </p>
              <a
                href="https://handbackhealth.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Learn More About Hand Back Health
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}