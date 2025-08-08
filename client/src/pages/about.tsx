import { CheckCircle, Award, Users, Heart, Globe, GraduationCap, Building, Stethoscope, Target, HandHeart } from "lucide-react";
import Navigation from "@/components/navigation";

export default function About() {
  const features = [
    "Expert Team",
    "Modern Equipment",
    "Holistic Approach",
    "Personalized Care",
    "Evidence-Based",
    "Community Focus"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Back 2 Health
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your trusted partner in holistic healthcare and wellness in Kampala and Entebbe, Uganda
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Mission Statement */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-6">
                Our Goal
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Back 2 Health, we are committed to providing exceptional healthcare services that address the root causes of pain and dysfunction. Our collaborative care model combines traditional chiropractic techniques with modern physiotherapy and holistic wellness approaches to help our patients achieve optimal health and wellbeing.
              </p>
            </div>

            {/* Our Story */}
            <div className="mb-16">
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether it's back pain, a sports injury, sciatica, or something more complex, we'll match you with the clinician who's the best fit for your body, your goals, and your journey, regardless of their professional title.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Every member of our team is trained to the same high standards. Every clinician is skilled, collaborative, and focused on getting you better; not selling a profession, but solving your problem.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are experts who listen, explain, and guide you forward, together. If any of our clinicians believe that you would be better suited with another therapist they will refer you so that you receive the best possible individual care.
              </p>
            </div>

            {/* Our Approach */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--neutral-dark))] mb-6">
                Our Approach
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="text-[hsl(var(--wellness-blue))] h-6 w-6 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <Award className="h-12 w-12 text-[hsl(var(--wellness-blue))] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-[hsl(var(--neutral-dark))] mb-3">Excellence</h4>
                <p className="text-gray-600">
                  We maintain the highest standards in healthcare delivery and continuously update our skills and knowledge.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <Heart className="h-12 w-12 text-[hsl(var(--wellness-blue))] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-[hsl(var(--neutral-dark))] mb-3">Compassion</h4>
                <p className="text-gray-600">
                  Every patient receives personalized care with empathy, respect, and understanding of their unique needs.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <Users className="h-12 w-12 text-[hsl(var(--wellness-blue))] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-[hsl(var(--neutral-dark))] mb-3">Community</h4>
                <p className="text-gray-600">
                  We are deeply committed to serving our local community and improving health outcomes for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Hand Back Health Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-6">
                About Hand Back Health
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Hand Back Health (HBH) is a non-profit organization dedicated to improving healthcare access and outcomes in underserved communities through sustainable programs and capacity building initiatives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our mission is to empower local healthcare providers with the knowledge, skills, and resources needed to deliver quality care to their communities while building long-term sustainability.
              </p>
              <a
                href="https://handbackhealth.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[hsl(var(--wellness-blue))] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <Globe className="h-5 w-5 mr-2" />
                Visit HBH Website
              </a>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-[hsl(var(--wellness-blue))] mr-3" />
                  <h3 className="text-2xl font-bold text-[hsl(var(--neutral-dark))]">Compassionate Care</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Providing healthcare services with dignity and respect for all patients, regardless of their economic status.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-8 w-8 text-[hsl(var(--wellness-blue))] mr-3" />
                  <h3 className="text-2xl font-bold text-[hsl(var(--neutral-dark))]">Community Empowerment</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Building local capacity through education and skill development programs for healthcare providers.
                </p>
              </div>
            </div>

            {/* Our Collaboration Projects */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-[hsl(var(--neutral-dark))] text-center mb-12">
                Our Collaboration Projects
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-8 w-8 text-[hsl(var(--wellness-blue))] mr-3" />
                    <h4 className="text-xl font-bold text-[hsl(var(--neutral-dark))]">Healthcare Provider Training</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Comprehensive training programs for local healthcare providers, focusing on evidence-based practices and sustainable healthcare delivery.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[hsl(var(--wellness-blue))] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Clinical skills development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[hsl(var(--wellness-blue))] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Best practice protocols</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[hsl(var(--wellness-blue))] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Quality assurance training</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[hsl(var(--wellness-blue))] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Continuing education support</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Stethoscope className="h-8 w-8 text-[hsl(var(--wellness-blue))] mr-3" />
                    <h4 className="text-xl font-bold text-[hsl(var(--neutral-dark))]">Community Health Outreach</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Mobile health clinics and community education programs to reach underserved populations in remote areas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[hsl(var(--wellness-blue))] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Mobile clinic services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[hsl(var(--wellness-blue))] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Health education workshops</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[hsl(var(--wellness-blue))] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Preventive care programs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[hsl(var(--wellness-blue))] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Community health assessments</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Building className="h-8 w-8 text-[hsl(var(--wellness-blue))] mr-3" />
                    <h4 className="text-xl font-bold text-[hsl(var(--neutral-dark))]">Sustainable Healthcare Systems</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Building long-term healthcare infrastructure and systems that communities can maintain independently.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[hsl(var(--wellness-blue))] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Infrastructure development</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[hsl(var(--wellness-blue))] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Equipment provision</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[hsl(var(--wellness-blue))] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Local capacity building</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-[hsl(var(--wellness-blue))] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Partnership development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Join Our Mission */}
            <div className="text-center bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[hsl(var(--neutral-dark))] mb-4">
                Join Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Together, we can make quality healthcare accessible to all. Learn more about our partnership with Hand Back Health and how you can support our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://handbackhealth.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[hsl(var(--wellness-blue))] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <HandHeart className="h-5 w-5 mr-2" />
                  Learn More About HBH
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center border-2 border-[hsl(var(--wellness-blue))] text-[hsl(var(--wellness-blue))] hover:bg-[hsl(var(--wellness-blue))] hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}