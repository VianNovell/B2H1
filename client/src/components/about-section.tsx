import { CheckCircle } from "lucide-react";

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
          <div className="w-24 h-1 bg-[hsl(var(--wellness-green))] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional chiropractic care"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[hsl(var(--neutral-dark))] mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Back 2 Health was established with a vision to provide comprehensive, 
              natural healthcare solutions that address the root causes of pain and 
              illness. Our team of experienced practitioners combines traditional 
              chiropractic care with innovative holistic therapies to help patients 
              achieve optimal health and wellness. We believe in treating the whole 
              person, not just symptoms, through personalized care plans that promote 
              natural healing and long-term wellness.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-[hsl(var(--wellness-green))] mr-2 h-5 w-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
