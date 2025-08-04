import { CheckCircle } from "lucide-react";
import greggBioImage from "@assets/gregg bio pic_1754285613528.jpg";

export default function AboutSection() {
  const features = [
    "Expert Team",
    "Holistic Approach",
    "Modern Facilities",
    "Personalized Care",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-4">
            About Back 2 Health
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--wellness-blue))] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={greggBioImage}
              alt="Dr. Gregg - Back 2 Health Specialist"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[hsl(var(--neutral-dark))] mb-6">
              Specialist Chiropractic & Holistic Healthcare
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Back 2 Health is a specialist Chiropractic and Holistic Healthcare
              clinic. We provide medical and alternative solutions for optimal
              wellness through our unique collaborative care model.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold text-[hsl(var(--neutral-dark))] mb-3">
                Our Collaborative Care Model
              </h4>
              <p className="text-gray-600">
                Our innovative approach brings together multiple healthcare
                professionals to work as a unified team. This means patients
                benefit from the combined knowledge, experience, and expertise
                of all our doctors and therapists, ensuring comprehensive and
                personalized treatment plans.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mt-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-[hsl(var(--wellness-blue))] mr-2 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
