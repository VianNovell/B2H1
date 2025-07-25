import { CheckCircle, Star, Award, Users, Heart } from "lucide-react";
import Navigation from "@/components/navigation";
import greggPhoto from "@assets/gregg bio pic_1753331348993.jpg";
import joelPhoto from "@assets/joel pic_1753331346323.jpg";

export default function Doctors() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our Doctors
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Our experienced healthcare professionals bring together decades of expertise in chiropractic care, physiotherapy, and holistic wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Dr. Gregg Salzman */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-100 mx-4 lg:mx-0">
              <div className="p-8">
                {/* Centered circular image */}
                <div className="text-center mb-6">
                  <img
                    src={greggPhoto}
                    alt="Dr. Gregg Salzman - Chiropractor"
                    className="w-36 h-36 rounded-full object-cover border-4 border-blue-200 shadow-lg mx-auto"
                  />
                </div>
                
                {/* Doctor info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-700 mb-2">
                    Dr. Gregg Salzman
                  </h3>
                  <p className="text-lg font-bold text-blue-600 mb-3">
                    Chiropractor, 30+ Years Experience
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-lg">👨‍⚕️</span>
                    <span className="text-sm font-semibold text-gray-700">MSc DC - Gonstead Specialist</span>
                  </div>
                  
                  {/* Bio in shorter paragraphs */}
                  <div className="space-y-3 text-gray-700 text-left">
                    <p className="leading-relaxed">
                      Dr. Gregg Salzman grew up in New Jersey, United States and graduated as a Chiropractor from Life University in 1997.
                    </p>
                    <p className="leading-relaxed">
                      After adjusting to the African way of life, he found his rhythm within Uganda as both a business owner and Chiropractor.
                    </p>
                    <p className="leading-relaxed">
                      His vision is to give the best care to those seeking treatment. He is newly appointed co-director of the Chiropractic NGO Hand Back Health of Uganda.
                    </p>
                  </div>
                  
                  {/* Key accomplishments */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-bold text-blue-700 mb-3 flex items-center justify-center gap-2">
                      <Award className="h-4 w-4" />
                      Key Specializations
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2 text-left">
                      <li>• Gonstead Chiropractic Technique</li>
                      <li>• Holistic individualized treatment</li>
                      <li>• Community outreach programs</li>
                      <li>• 30+ years clinical experience</li>
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-6">
                    <button 
                      onClick={() => window.location.href = "/#appointment"}
                      className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      Book With Dr. Gregg
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Joel Muyambi */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-gray-100 mx-4 lg:mx-0">
              <div className="p-8">
                {/* Centered circular image */}
                <div className="text-center mb-6">
                  <img
                    src={joelPhoto}
                    alt="Joel Muyambi - Physiotherapist"
                    className="w-36 h-36 rounded-full object-cover border-4 border-green-200 shadow-lg mx-auto"
                  />
                </div>
                
                {/* Doctor info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-green-700 mb-2">
                    Joel Muyambi
                  </h3>
                  <p className="text-lg font-bold text-green-600 mb-3">
                    Physiotherapist, Sports Medicine Specialist
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-lg">⭐</span>
                    <span className="text-sm font-semibold text-gray-700">DPT - Rugby Team Specialist</span>
                  </div>
                  
                  {/* Bio in shorter paragraphs */}
                  <div className="space-y-3 text-gray-700 text-left">
                    <p className="leading-relaxed">
                      Joel gained his certificate in Clinical Medicine from the Global Health Institute in Kampala and graduated in Physiotherapy in 2015.
                    </p>
                    <p className="leading-relaxed">
                      He's an all-round physiotherapist who has worked with children with special needs and in Orthopaedic Clinics.
                    </p>
                    <p className="leading-relaxed">
                      Now with Hand Back Health NGO in Jinja, Uganda, he's passionate about sports injury treatment and serves as the 16th member of Jinja Hippos Rugby Team.
                    </p>
                  </div>
                  
                  {/* Key accomplishments */}
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-bold text-green-700 mb-3 flex items-center justify-center gap-2">
                      <Award className="h-4 w-4" />
                      Key Achievements
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2 text-left">
                      <li>• Dry Needling & Joint Mobilisation</li>
                      <li>• National Women's Rugby Team Physiotherapist</li>
                      <li>• Pediatric & Special Needs Care</li>
                      <li>• Sports Injury Treatment Expert</li>
                    </ul>
                    <div className="mt-3 p-2 bg-yellow-100 rounded text-xs text-yellow-800 text-center">
                      🎉 Recently became a father - Congratulations!
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-6">
                    <button 
                      onClick={() => window.location.href = "/#appointment"}
                      className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      Schedule With Joel
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Both practitioners share a dedication to providing the highest quality care and making a positive impact in their communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[hsl(var(--neutral-dark))] mb-2">
                Compassionate Care
              </h3>
              <p className="text-gray-600">
                Dedicated to providing individualized treatment with genuine care for each patient's well-being.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[hsl(var(--neutral-dark))] mb-2">
                Professional Excellence
              </h3>
              <p className="text-gray-600">
                Combining decades of experience with continuous education and advanced techniques.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[hsl(var(--neutral-dark))] mb-2">
                Community Impact
              </h3>
              <p className="text-gray-600">
                Actively contributing to community health through NGO work and outreach programs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}