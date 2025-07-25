import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is collaborative care and how does it benefit me?",
      answer: "Our collaborative care model brings together multiple healthcare professionals including chiropractors, naturopaths, massage therapists, and nutritionists to work as a unified team. This means you benefit from the combined knowledge and expertise of all our specialists, ensuring comprehensive and personalized treatment plans that address your whole health picture."
    },
    {
      question: "Do I need a referral to book an appointment?",
      answer: "No referral is needed for most of our services. You can book directly with us for chiropractic care, massage therapy, naturopathy, and wellness consultations. However, some insurance plans may require a referral for coverage, so we recommend checking with your provider."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit includes a comprehensive health assessment where we discuss your health history, current concerns, and wellness goals. We may perform physical examinations, movement assessments, and discuss treatment options. This typically takes 60-90 minutes to ensure we understand your complete health picture."
    },
    {
      question: "Do you accept insurance?",
      answer: "We accept most major insurance plans for covered services. Coverage varies by plan and service type. We recommend contacting your insurance provider to understand your specific benefits. Our team can also help verify coverage and submit claims on your behalf."
    },
    {
      question: "How long does treatment typically take?",
      answer: "Treatment duration varies based on your individual condition and goals. Some patients experience relief after just a few sessions, while others with chronic conditions may benefit from longer-term care. We'll discuss expected timelines during your consultation and adjust as needed based on your progress."
    },
    {
      question: "Can you help with chronic pain conditions?",
      answer: "Yes, we specialize in treating chronic pain conditions including fibromyalgia, chronic fatigue syndrome, arthritis, and persistent back or neck pain. Our holistic approach combines multiple therapies to address both symptoms and underlying causes for lasting relief."
    },
    {
      question: "Do you offer corporate wellness programs?",
      answer: "Absolutely! Our corporate wellness programs include on-site consultations, ergonomic assessments, stress management workshops, and group wellness sessions. These programs are designed to improve employee health, reduce workplace injuries, and increase productivity."
    },
    {
      question: "Are your practitioners licensed and certified?",
      answer: "Yes, all our practitioners are fully licensed and certified in their respective fields. Our team includes licensed chiropractors, registered massage therapists, naturopathic doctors, and certified nutritionists. We maintain the highest standards of professional excellence and continuing education."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="text-[hsl(var(--wellness-green))] w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="w-24 h-1 bg-[hsl(var(--wellness-green))] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our services, treatments, and what to expect
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[hsl(var(--wellness-green))] focus:ring-offset-2 rounded-xl"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-[hsl(var(--neutral-dark))] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[hsl(var(--wellness-green))]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[hsl(var(--wellness-green))]" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed mt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}