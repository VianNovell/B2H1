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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to community healthcare and wellness initiatives.
            </p>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}