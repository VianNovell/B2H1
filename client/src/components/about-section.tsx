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
              <p className="text-gray-600 leading-relaxed mb-4">
                Back 2 Health Chiropractic and Wellness Centre is dedicated to providing <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">natural and drug free solutions</span> to disease and pain while promoting <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-medium">Wellness</span>.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe in <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-medium">addressing the root cause</span> of health issues rather than just treating symptoms. We maintain that everyone deserves to <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">live free from pain</span>—without relying on painkillers or being limited in doing what they love.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We deliver a <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">professional, highly specialised and patient centred approach</span>; combining <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-medium">individually tailored healthcare plans</span> with the most effective, long-term treatment available.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                We see people from all walks of life, from <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-medium">2-week old babies to pensioners in their 90s</span>, from pregnant women to office workers to professional athletes to <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">improve movement and function, reduce pain and enhance wellbeing</span>.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you are looking for <span className="bg-red-100 text-red-800 px-2 py-1 rounded font-medium">relief from injury or chronic pain</span>, or trying to <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-medium">maintain a healthy, active lifestyle</span> we can help.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                With locations in <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-medium">Bukoto and Entebbe</span>, we serve the greater Kampala area and beyond, providing <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">accessible, high-quality healthcare</span> that focuses on your overall wellbeing and long-term health goals.
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
