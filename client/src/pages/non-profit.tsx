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
            <p className="text-xl text-white max-w-3xl mx-auto">
              Our clinicians are all involved with a non-profit organisation located in Jinja, Uganda. Where we give back our time and expertise. Please see <a href="https://handbackhealth.org/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-100 underline font-semibold">HERE</a> for more information about Hand Back Health.
            </p>
          </div>
        </div>
      </section>

      {/* New Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 mb-6">
              Our clinicians are all involved with a non-profit organisation located in Jinja, Uganda. Where we give back our time and expertise. Please see <a href="https://handbackhealth.org/" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--wellness-blue))] hover:underline font-semibold">HERE</a> for more information about Hand Back Health.
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--neutral-dark))] mb-6 text-center">
              WE NEED YOUR HELP to bring our newest project to fruition
            </h2>
            <h3 className="text-xl font-semibold text-[hsl(var(--wellness-blue))] mb-6 text-center">
              Massage training centre for Blind girls and women
            </h3>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-4">
                Hand Back Health is piloting an economic empowerment project to skill young adult females with visual impairment in professional massage therapy rendering them highly employable and leading to economic independence.
              </p>
              <p>
                The project will focus on young adult women with visual impairment due to the inherent difficulties for this portion of the population to gain employment. A person with a disability is almost twice as likely to be unemployed and women are at an even greater disadvantage. This pilot project aims to increase employment opportunities for visually impaired women by providing vocational training in a skill that is applicable to their disability, provides a multitude of employment and self-employed possibilities whilst also providing a community wellness service need.
              </p>
            </div>
            <div className="text-center mt-8">
              <a
                href="https://handbackhealth.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-[hsl(var(--wellness-blue))] hover:bg-blue-700 text-white px-8 py-3">
                  Learn More About Hand Back Health
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}