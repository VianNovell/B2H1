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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Back 2 Health
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your trusted partner in holistic healthcare and wellness in Jinja, Uganda
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
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Back 2 Health, we are committed to providing exceptional healthcare services that address the root causes of pain and dysfunction. Our collaborative care model combines traditional chiropractic techniques with modern physiotherapy and holistic wellness approaches to help our patients achieve optimal health and wellbeing.
              </p>
            </div>

            {/* Our Story */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--neutral-dark))] mb-6">
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Back 2 Health is a chiropractic and specialist holistic therapy wellness centre dedicated to providing natural and drug-free solutions to disease, pain, and promoting wellness. We believe in addressing the root causes of health issues rather than just treating symptoms.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you're looking for relief from injury or everyday aches and pains, or trying to maintain a healthy, active lifestyle, we can help. Our comprehensive approach combines traditional chiropractic care with modern physiotherapy, massage therapy, PEMF therapy, and holistic wellness programs.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With locations in Bukoto and Entebbe, we serve the greater Kampala area and beyond, providing accessible, high-quality healthcare that focuses on your overall wellbeing and long-term health goals.
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
                    <CheckCircle className="text-[hsl(var(--wellness-green))] h-6 w-6 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <Award className="h-12 w-12 text-[hsl(var(--wellness-green))] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-[hsl(var(--neutral-dark))] mb-3">Excellence</h4>
                <p className="text-gray-600">
                  We maintain the highest standards in healthcare delivery and continuously update our skills and knowledge.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <Heart className="h-12 w-12 text-[hsl(var(--wellness-green))] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-[hsl(var(--neutral-dark))] mb-3">Compassion</h4>
                <p className="text-gray-600">
                  Every patient receives personalized care with empathy, respect, and understanding of their unique needs.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <Users className="h-12 w-12 text-[hsl(var(--wellness-green))] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-[hsl(var(--neutral-dark))] mb-3">Community</h4>
                <p className="text-gray-600">
                  We are deeply committed to serving our local community and improving health outcomes for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-profit Collaboration Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-6">
              Non-profit Collaboration: Hand Back Health
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Back 2 Health proudly collaborates with Hand Back Health NGO, a non-profit organization founded in 2004 
              by Dr. Sarah Worthington. This partnership allows us to extend our reach and provide essential healthcare 
              services to underserved communities in Uganda.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--wellness-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--neutral-dark))] mb-2">Community Outreach</h3>
                <p className="text-gray-600">Providing healthcare services to rural and underserved communities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--wellness-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--neutral-dark))] mb-2">Training Programs</h3>
                <p className="text-gray-600">Education and training for local healthcare providers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(var(--wellness-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--neutral-dark))] mb-2">Sustainable Impact</h3>
                <p className="text-gray-600">Creating lasting positive change in community health outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}