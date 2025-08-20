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
          <div className="w-24 h-1 bg-[hsl(var(--wellness-blue))] mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-600 leading-relaxed">
                Back 2 Health Chiropractic and Wellness Centre is dedicated to providing natural and drug free solutions to disease and pain while promoting Wellness. We believe in addressing the root cause of health issues rather than just treating symptoms. We maintain that everyone deserves to live free from pain—without relying on painkillers or being limited in doing what they love. We deliver a professional, highly specialised and patient centred approach; combining individually tailored healthcare plans with the most effective, long-term treatment available. We see people from all walks of life, from 4-week old babies to pensioners in their 90s, from pregnant women to office workers to professional athletes to improve movement and function, reduce pain and enhance wellbeing. Whether you are looking for relief from injury or chronic pain, or trying to maintain a healthy, active lifestyle we can help. With locations in Bukoto and Entebbe, we serve the greater Kampala area and beyond, providing accessible, high-quality healthcare that focuses on your overall wellbeing and long-term health goals.
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
