import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Heart, Users, Target, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NonProfitCollaboration() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--neutral-dark))] mb-6">
              Non Profit Collaboration
            </h1>
            <div className="w-24 h-1 bg-[hsl(var(--wellness-blue))] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partnering with Hand Back Health (HBH) to provide sustainable healthcare solutions and training programs in underserved communities.
            </p>
          </div>
        </div>
      </section>

      {/* About HBH Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-6">
                About Hand Back Health
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Hand Back Health (HBH) is a non-profit organization dedicated to improving healthcare access and outcomes in underserved communities through sustainable programs and capacity building initiatives.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to empower local healthcare providers with the knowledge, skills, and resources needed to deliver quality care to their communities while building long-term sustainability.
              </p>
              <a
                href="https://handbackhealth.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Button className="bg-[hsl(var(--wellness-blue))] hover:bg-blue-700 text-white">
                  Visit HBH Website
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <Heart className="text-[hsl(var(--wellness-blue))] w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold text-[hsl(var(--neutral-dark))] mb-2">
                  Compassionate Care
                </h3>
                <p className="text-gray-600">
                  Providing healthcare services with dignity and respect for all patients, regardless of their economic status.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <Users className="text-green-600 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold text-[hsl(var(--neutral-dark))] mb-2">
                  Community Empowerment
                </h3>
                <p className="text-gray-600">
                  Building local capacity through education and skill development programs for healthcare providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-6">
              Our Collaboration Projects
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--wellness-blue))] mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare Training */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Target className="text-[hsl(var(--wellness-blue))] w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">
                Healthcare Provider Training
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive training programs for local healthcare providers, focusing on evidence-based practices and sustainable healthcare delivery.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Clinical skills development</li>
                <li>• Best practice protocols</li>
                <li>• Quality assurance training</li>
                <li>• Continuing education support</li>
              </ul>
            </div>

            {/* Community Outreach */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Users className="text-green-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">
                Community Health Outreach
              </h3>
              <p className="text-gray-600 mb-4">
                Mobile health clinics and community education programs to reach underserved populations in remote areas.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Mobile clinic services</li>
                <li>• Health education workshops</li>
                <li>• Preventive care programs</li>
                <li>• Community health assessments</li>
              </ul>
            </div>

            {/* Sustainable Development */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Globe className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-[hsl(var(--neutral-dark))] mb-4">
                Sustainable Healthcare Systems
              </h3>
              <p className="text-gray-600 mb-4">
                Building long-term healthcare infrastructure and systems that communities can maintain independently.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Infrastructure development</li>
                <li>• Equipment provision</li>
                <li>• Local capacity building</li>
                <li>• Partnership development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[hsl(var(--wellness-blue))] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Together, we can make quality healthcare accessible to all. Learn more about our partnership with Hand Back Health and how you can support our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://handbackhealth.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-[hsl(var(--wellness-blue))] hover:bg-gray-100 px-8 py-3">
                Learn More About HBH
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <Button 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[hsl(var(--wellness-blue))] px-8 py-3"
              onClick={() => {
                const element = document.getElementById("appointment");
                if (element) {
                  window.location.href = "/#appointment";
                }
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}