import { Star, Quote } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getQueryFn } from "@/lib/queryClient";

export default function TestimonialsSection() {
  // Real Google reviews from actual patients
  const testimonials = [
    {
      id: 1,
      name: "Misbah Faisal",
      service: "Chiropractic Care",
      content: "I'm so grateful to have found Dr Sarah as Chiropractor after struggling with my back and shoulder pain for more than 4years I'm thrilled to report that my pain is completely gone because of her expertise, compassion and personalized care have made a huge difference in my life. She is an exceptional chiropractor who truly cares about her patients. She's not only skilled at what she does, but she's also kind, understanding, and genuinely invested in her patients' well-being. I highly recommend her to anyone seeking relief.",
      rating: 5,
    },
    {
      id: 2,
      name: "Anthony ODwyer",
      service: "Chiropractic Care",
      content: "The staff are friendly and easy to communicate and plan with. I was recommended to the clinic to Dr Sarah who worked on my upper and lower back over the course of about 8 sessions and my initial symptoms were entirely solved! Very professional and efficient in their work and I can highly recommend this clinic!",
      rating: 5,
    },
    {
      id: 3,
      name: "Louisa Rugege",
      service: "General Care",
      content: "Great service, welcoming people, good organic products, clean and airy establishment. It's a 10/10 for me and worth it all the way.",
      rating: 5,
    },
    {
      id: 4,
      name: "Zoen Harrold",
      service: "Chiropractic Care",
      content: "Great Chiropractors. Knowledgeable and they care.",
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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-4">
            What Our Patients Say
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--wellness-blue))] mx-auto mb-8"></div>
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
                <Quote className="text-[hsl(var(--wellness-blue))] w-8 h-8 mr-4 flex-shrink-0 mt-1" />
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
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--wellness-blue))] to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
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

      </div>
    </section>
  );
}