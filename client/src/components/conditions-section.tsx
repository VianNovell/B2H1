import { 
  ArrowDownToLine, 
  Skull, 
  Activity, 
  Flame, 
  Zap,
  Heart,
  Baby
} from "lucide-react";

export default function ConditionsSection() {
  const conditions = [
    {
      icon: ArrowDownToLine,
      title: "Back Pain",
      description: "Comprehensive treatment for acute and chronic lower back pain using chiropractic care, physiotherapy, and rehabilitation.",
      color: "wellness-blue",
    },
    {
      icon: Skull,
      title: "Neck Pain",
      description: "Specialized care for cervical spine issues, whiplash, and tension-related neck pain.",
      color: "wellness-blue",
    },
    {
      icon: Activity,
      title: "Headaches",
      description: "Treatment for tension headaches, migraines, and cervicogenic headaches using multiple therapeutic approaches.",
      color: "wellness-blue",
    },
    {
      icon: Activity,
      title: "Sports Injuries",
      description: "Rapid recovery and rehabilitation for athletic injuries with focus on return to peak performance.",
      color: "wellness-blue",
    },
    {
      icon: Flame,
      title: "Inflammatory Pain",
      description: "Natural and medical approaches to reduce inflammation and manage associated pain conditions.",
      color: "wellness-blue",
    },
    {
      icon: Zap,
      title: "Joint Pain",
      description: "Comprehensive management of shoulder, knee and other joint problems, focusing on pain relief and restoration of normal function.",
      color: "wellness-blue",
    },
    {
      icon: Baby,
      title: "Pregnancy and Paediatric Care",
      description: "Chiropractic treatment aims to help keep you as comfortable as possible and optimise In-Utero Foetal positioning aiding the birth process. Our Chiropractors are also trained in treating infants and babies; common problems including sleep and feeding difficulties, colic and constipation are common paediatric complaints in a Chiropractor's office.",
      color: "wellness-blue",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-4">
            Conditions We Treat
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--wellness-blue))] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert care for a wide range of health conditions using our
            collaborative approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition, index) => {
            const Icon = condition.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 bg-[hsl(var(--wellness-blue)_/_10%)] rounded-full flex items-center justify-center mr-4`}
                  >
                    <Icon
                      className={`text-[hsl(var(--wellness-blue))] w-6 h-6`}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--neutral-dark))]">
                    {condition.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{condition.description}</p>
              </div>
            );
          })}
          
          {/* Chronic Pain & Diseases */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[hsl(var(--wellness-blue)_/_10%)] rounded-full flex items-center justify-center mr-4">
                <Heart className="text-[hsl(var(--wellness-blue))] w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[hsl(var(--neutral-dark))]">
                Chronic Pain & Diseases
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Holistic approach to managing chronic conditions including
              fibromyalgia, chronic fatigue syndrome, and other persistent
              health challenges through our collaborative care model.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
