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
      question: "What is collaborative care?",
      answer: "Collaborative care is our unique approach where multiple healthcare professionals work together to develop the most effective treatment plan for each patient. Our team of chiropractors, physiotherapists, and massage therapists collaborate to ensure you receive comprehensive, coordinated care tailored to your specific needs."
    },
    {
      question: "What should I expect during my first visit?",
      answer: "Your first visit will include a detailed consultation and physical assessment. We will discuss treatment options. You may be referred for imaging or further diagnostics if required. We will explain the cause of your primary condition and provide treatment when possible."
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
      answer: "Yes all our practitioners are fully licensed and certified in their respective field. Our team includes highly qualified Chiropractors, Physiotherapists and Massage therapists. We maintain the highest standards of professional excellence and continuing education."
    },
    {
      question: "Is Chiropractic Safe?",
      answer: "It's one of the most common questions people ask when considering care.\n\nWhen it comes to managing back and neck pain, all treatments carry some level of risk. To help you make informed decisions, here's how chiropractic compares with other common interventions…\n\nChiropractic treatment: serious side effects occur in 1 in 476,000 treatments (Chu et al., 2023). No strokes or cauda equina reported.\n\nSpinal surgery: 3–5 in 100 risk complications\n\nOpioids: up to 1 in 4 risk long-term dependence\n\nParacetamol: limited benefit, 1–4 in 100 risk of liver stress\n\nChiropractors in Uganda are regulated by the Allied Health Professions Council (AHPC) and complete years of training to ensure safe, evidence-based care.\n\nPlease ensure that the Chiropractor you choose to receive treatment from is registered with the AHPC as a qualified Chiropractor. There are a number of unqualified professionals advertising themselves as Chiropractors without the requisite qualifications. All Chiropractors at B2H are duly qualified and registered."
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
                    {faq.question === "Is Chiropractic Safe?" ? (
                      <div className="text-gray-700 leading-relaxed mt-4 space-y-4">
                        <p>It's one of the most common questions people ask when considering care.</p>
                        
                        <p>When it comes to managing back and neck pain, all treatments carry some level of risk. To help you make informed decisions, here's how chiropractic compares with other common interventions:</p>
                        
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start">
                            <span className="text-[hsl(var(--wellness-blue))] mr-2">•</span>
                            <span><strong>Chiropractic treatment:</strong> serious side effects occur in 1 in 476,000 treatments (Chu et al., 2023). No strokes or cauda equina reported.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[hsl(var(--wellness-blue))] mr-2">•</span>
                            <span><strong>Spinal surgery:</strong> 3–5 in 100 risk complications</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[hsl(var(--wellness-blue))] mr-2">•</span>
                            <span><strong>Opioids:</strong> up to 1 in 4 risk long-term dependence</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[hsl(var(--wellness-blue))] mr-2">•</span>
                            <span><strong>Paracetamol:</strong> limited benefit, 1–4 in 100 risk of liver stress</span>
                          </li>
                        </ul>
                        
                        <p className="italic text-gray-600 bg-blue-50 p-4 rounded-lg">
                          Chiropractors in Uganda are regulated by the Allied Health Professions Council (AHPC) and complete years of training to ensure safe, evidence-based care.
                        </p>
                        
                        <p className="font-medium">
                          Please ensure that the Chiropractor you choose is registered with the AHPC as a qualified Chiropractor. All Chiropractors at B2H are duly qualified and registered.
                        </p>
                        
                        <p className="font-semibold text-gray-800">
                          What most patients notice?
                        </p>
                        <p>
                          Temporary muscle soreness — like the ache after exercise — followed by a sense of relief and freedom to move again.
                        </p>
                        
                        <p className="text-gray-600">
                          No healthcare option is completely risk-free, but the data shows chiropractic is a low-risk, effective choice for many. Explore your options, ask questions, and make the decision that feels right for you. We are happy to discuss best treatment options for every individual.
                        </p>
                      </div>
                    ) : (
                      <p className="text-gray-700 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    )}
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