import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I need a referral to book an appointment?",
      answer: "No. You do not need a referral to see any of our practitioners. You can book directly through our website or call us."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit will include a detailed consultation and physical assessment. We will discuss treatment options and may refer you for imaging or further diagnostics if needed. We will explain the cause of your condition and provide treatment when possible."
    },
    {
      question: "How many treatment sessions will I need?",
      answer: "This depends on your condition, its severity, and your health goals. Some patients feel relief after just one or two sessions, while others may benefit from a structured care plan over several weeks."
    },
    {
      question: "Can you help with chronic pain conditions?",
      answer: "Yes. We specialise in managing chronic pain using natural and non-invasive methods. Our treatments are tailored to each individual's condition and response to care."
    },
    {
      question: "Do you offer corporate wellness programs?",
      answer: "Yes. We offer a range of wellness services for companies, including workshops, ergonomic assessments, group therapies, and stress management programs. See the \"Programs\" tab for more details."
    },
    {
      question: "Are your practitioners licensed?",
      answer: "Yes. All our practitioners are fully licensed and certified in their respective fields. Our team includes Chiropractors, Physiotherapists, and Massage Therapists committed to the highest standards of care and ongoing education."
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
            <HelpCircle className="text-[hsl(var(--wellness-blue))] w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="w-24 h-1 bg-[hsl(var(--wellness-blue))] mx-auto mb-8"></div>
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
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[hsl(var(--wellness-blue))] focus:ring-offset-2 rounded-xl"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-[hsl(var(--neutral-dark))] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[hsl(var(--wellness-blue))]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[hsl(var(--wellness-blue))]" />
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