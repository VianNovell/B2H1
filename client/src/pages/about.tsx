import { CheckCircle, Award, Users, Heart } from "lucide-react";
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

    </div>
  );
}