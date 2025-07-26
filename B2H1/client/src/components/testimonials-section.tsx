import { Star, Quote } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getQueryFn } from "@/lib/queryClient";

export default function TestimonialsSection() {
  // For now, using placeholder data - will integrate with backend when testimonials are added
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      service: "Chiropractic Care",
      content: "After years of chronic back pain, the team at Back 2 Health helped me find relief through their collaborative approach. The combination of chiropractic care and naturopathy has transformed my quality of life.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      service: "Holistic Wellness Program",
      content: "The comprehensive wellness program exceeded my expectations. From nutrition counseling to massage therapy, every aspect of my health was addressed with genuine care and expertise.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      service: "Sports Rehabilitation",
      content: "As a professional athlete, I needed specialized care for my injury. Their rehabilitation program got me back to peak performance faster than I thought possible.",
      rating: 5,
    },
    {
      id: 4,
      name: "David Thompson",
      service: "Corporate Wellness",
      content: "Our company's wellness program with Back 2 Health has significantly improved employee satisfaction and reduced sick days. Highly recommend their corporate services.",
      rating: 5,
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-4">
            What Our Patients Say
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--wellness-green))] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who have experienced the healing power
            of our collaborative care approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
            >
              <div className="flex items-start mb-6">
                <Quote className="text-[hsl(var(--wellness-green))] w-8 h-8 mr-4 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--wellness-green))] to-green-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--neutral-dark))]">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[hsl(var(--wellness-green))] mb-2">
                500+
              </div>
              <p className="text-gray-600">Happy Patients</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[hsl(var(--wellness-green))] mb-2">
                15+
              </div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-[hsl(var(--wellness-green))] mb-2">
                98%
              </div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}