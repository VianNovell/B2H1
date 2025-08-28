import { useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { Calendar, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link } from "wouter";

// Import service images
import physiotherapyImage from "@assets/Physio.png";
import spineImage from "@assets/Spine.png";
import massageImage from "@assets/Massage.png";
import doctorImage from "@assets/Complex v.png";
import diabetesWeightLossImage from "@assets/diabetes-weight-loss.png";
import pregnancyPaediatricImage from "@assets/Pregna.png";
import pemfImage from "@assets/PEmf.png";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [, setLocation] = useLocation();

  // Scroll to top when page loads or service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const scrollToAppointment = () => {
    // Navigate to home page with hash
    window.location.href = "/#appointment";
  };


  // Service data mapping
  const serviceData: Record<string, any> = {
    "chiropractic": {
      title: "Chiropractic",
      shortDescription: "Comprehensive neuromusculoskeletal diagnosis and treatment",
      fullDescription: "Chiropractic is based on the scientific fact that your body is a self-regulating, self-healing organism. All the important functions of the body are controlled by the nervous system, comprising of the brain, spinal cord, and nerves. Chiropractic focuses on the nervous system and its relationship to your body. Chiropractic is a health care profession concerned with the diagnosis, treatment, and prevention of neuromusculoskeletal disorders, and the effects of these disorders on the nervous system and general health. There is an emphasis on manual techniques, including joint adjustment and/or manipulation, with a particular focus on joint subluxation/dysfunction.",
      image: spineImage,
      imageAlt: "Spine X-ray showing vertebrae and spinal structure",
      benefits: [
        "Pain relief and improved mobility",
        "Better nervous system function",
        "Improved posture and alignment",
        "Enhanced body's natural healing",
        "Reduced inflammation",
        "Better sleep quality"
      ],
      conditions: [
        "Back and neck pain",
        "Headaches and migraines",
        "Sciatica",
        "Joint pain",
        "Sports injuries",
        "Postural problems"
      ],
      techniques: [
        "Spinal adjustment and manipulation",
        "Soft tissue and fascia releases",
        "Multiple Chiropractic Specific techniques",
        "Pregnancy and paediatric Chiropractic",
        "Sport Injury prevention and treatments"
      ]
    },
    "physiotherapy": {
      title: "Physiotherapy",
      shortDescription: "Evidence-based rehabilitation and movement therapy",
      fullDescription: "Physiotherapy is a science-based, personalised approach to restoring movement, improving function, and enhancing quality of life. Whether you're recovering from surgery, dealing with chronic pain, or facing a sports injury, our licensed physiotherapist is here to support your journey to recovery and long-term wellness. Through a combination of hands-on techniques, tailored exercise programs, and education, physiotherapy can help alleviate pain and inflammation, restore strength, flexibility, and mobility, prevent further injury or complications, and improve posture and movement mechanics. We treat a wide range of conditions, including musculoskeletal injuries, neurological disorders, post-operative rehabilitation, and more. Every treatment plan is customised to meet your unique goals and lifestyle. Start moving better, feeling stronger, and living more fully—book your physiotherapy session today.",
      image: physiotherapyImage,
      imageAlt: "Physiotherapy treatment session",
      benefits: [
        "Alleviate pain and inflammation",
        "Restore strength, flexibility, and mobility",
        "Prevent further injury or complications",
        "Improve posture and movement mechanics"
      ],
      conditions: [
        "Sports injuries",
        "Post-surgical rehabilitation",
        "Arthritis and joint conditions",
        "Stroke recovery",
        "Balance disorders",
        "Chronic pain conditions"
      ],
      techniques: [
        "Manual therapy",
        "Exercise prescription",
        "Electrotherapy",
        "Movement re-education",
        "Balance training"
      ]
    },
    "therapeutic-massage": {
      title: "Therapeutic Massage",
      shortDescription: "Medical massage tailored to your health needs",
      fullDescription: "Therapeutic massage is also known as Medical massage, it is tailored to your health needs. At Back 2 Health, discover the healing power of therapeutic massage. A targeted approach to relieve stress, reduce pain, and restore balance to your body and mind. Unlike a simple relaxation massage, therapeutic massage focuses on specific areas of tension and discomfort, using techniques tailored to your individual needs. Whether you're recovering from an injury, managing chronic pain, or simply looking to improve your overall wellness, our trained massage therapists are here to help you feel your best.",
      image: massageImage,
      imageAlt: "Therapeutic massage treatment",
      benefits: [
        "Relief from muscle tension and soreness",
        "Improved circulation and flexibility",
        "Stress and anxiety reduction",
        "Support for injury recovery and posture improvement"
      ],
      conditions: [
        "Muscle tension and knots",
        "Stress and anxiety",
        "Sports injuries",
        "Chronic pain",
        "Circulation problems",
        "Recovery support"
      ],
      techniques: [
        "Deep tissue massage",
        "Trigger point therapy",
        "Swedish massage",
        "Sports massage",
        "Myofascial release"
      ]
    },
    "pemf-therapy": {
      title: "PEMF Therapy",
      shortDescription: "Pulsed Electromagnetic Field Therapy for cellular healing and accelerated recovery",
      fullDescription: "A strong magnetic energy field of electrons is channeled through your body to promote its natural healing process and accelerate recovery through improved micro-circulation and neuro-musculo activation.\n\nBack 2 Health (Entebbe) is equipped with modern technology to provide PEMF therapy. After understanding your needs and conditions, our qualified and experienced professionals provide the gentle magnetic pulses for a stipulated time. It often induces a relaxed feeling, such as a massage.",
      image: pemfImage,
      imageAlt: "PEMF therapy equipment",
      benefits: [
        "Accelerates Injury Recovery Time",
        "Enhances Wound Healing",
        "Reduces Fibrous Tissue Scars & Breaks Up Adhesions",
        "Promotes Bone Repair and Regeneration",
        "Enhances Joint Healing",
        "Reduces Pain, Swelling, Oedema, Inflammation",
        "Improves Sleep",
        "Enhances Brain Function",
        "Stimulates Release of Endorphins & Promotes Wellbeing",
        "Reduces General Stress & Anxiety",
        "Promotes healthy Cell Metabolism",
        "Optimises Blood & Tissue Oxygenation",
        "Strengthens Blood Circulation",
        "Boost Immune System",
        "Improves Lymph Circulation",
        "Slows ageing effects via neutralisation of free radicals",
        "Promotes Superior Performance & Endurance",
        "Boosts Energy (maximises ATP production)",
        "Faster Recovery after Exercise"
      ],
      conditions: [
        "Chronic pain and inflammation",
        "Sports injuries and muscle strain",
        "Bone healing and regeneration",
        "Joint problems and arthritis",
        "Fibrous tissue scars and adhesions",
        "Sleep disorders and insomnia",
        "Nervous irritability and anxiety",
        "Poor circulation",
        "Immune system weakness",
        "Athletic performance enhancement",
        "Anti-aging and cellular regeneration",
        "Wound healing",
        "General stress and fatigue"
      ],
      techniques: [
        "Low-frequency PEMF for deep tissue healing",
        "High-intensity PEMF for acute conditions",
        "Targeted field application for specific areas",
        "Full-body treatment for systemic healing",
        "Localized therapy for injury sites",
        "Frequency-specific protocols",
        "Duration-adjusted sessions based on condition"
      ]
    },
    "spinal-rehabilitation": {
      title: "Spinal Rehabilitation",
      shortDescription: "Targeted exercises and therapies for spine health",
      fullDescription: "Targeted exercises and therapies for spine health and back pain relief. Our comprehensive approach combines manual therapy, exercise prescription, and education to restore spinal function and prevent future problems.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "Spinal rehabilitation exercises",
      benefits: [
        "Improved spinal function",
        "Reduced back pain",
        "Better posture",
        "Increased mobility",
        "Stronger core muscles",
        "Prevention of future injuries"
      ],
      conditions: [
        "Back pain",
        "Disc problems",
        "Posture issues",
        "Spinal stenosis",
        "Scoliosis",
        "Post-surgical recovery"
      ],
      techniques: [
        "Therapeutic exercises",
        "Manual therapy",
        "Postural training",
        "Core strengthening",
        "Movement education"
      ]
    },
    "diabetes-and-weight-loss-programs": {
      title: "Diabetes & Weight Loss Programs",
      shortDescription: "Comprehensive programs for metabolic health",
      fullDescription: "Comprehensive programs for metabolic health and sustainable weight management. Personalized nutrition plans, exercise therapy programs, and lifestyle modification coaching to help you achieve your health goals and improve your quality of life.",
      image: diabetesWeightLossImage,
      imageAlt: "Diabetes and weight loss program",
      benefits: [
        "Better blood sugar control",
        "Sustainable weight loss",
        "Improved energy levels",
        "Reduced health risks",
        "Enhanced quality of life",
        "Long-term lifestyle changes"
      ],
      conditions: [
        "Type 2 diabetes",
        "Pre-diabetes",
        "Obesity",
        "Metabolic syndrome",
        "High blood pressure",
        "High cholesterol"
      ],
      techniques: [
        "Nutritional counseling",
        "Exercise prescription",
        "Lifestyle coaching",
        "Behavioral modification"
      ]
    },
    "complex-cases-and-second-opinions": {
      title: "Complex Cases and Second opinions",
      shortDescription: "Expert guidance for chronic or unresolved musculoskeletal conditions",
      fullDescription: "We specialise in guiding patients through the complexity of chronic or unresolved musculoskeletal conditions. If you've been living with persistent pain, received conflicting diagnoses, or found previous treatments ineffective, our expert second opinions can provide the clarity and direction you need. With extensive experience in managing complex musculoskeletal conditions, our clinic is uniquely positioned to offer clear, expert insights—particularly for individuals who have seen multiple clinicians without finding lasting solutions. We provide thorough second opinions that help clarify the next steps, whether that involves further treatment within our team or referral to another specialist. Patients are encouraged to bring any relevant scans or medical records. During the consultation, a comprehensive assessment is carried out, including a detailed review of medical history and symptoms. With a meticulous and evidence-based approach, we aim to identify the root cause of the issue and outline a clear path forward. Following the appointment, you will be provided a summarised clinical opinion and recommended next steps. This may include further imaging, treatment recommendations, or onward referral—empowering you to make informed decisions about your care and recovery.",
      image: doctorImage,
      imageAlt: "Medical consultation for complex cases",
      benefits: [
        "Clear expert insights for complex conditions",
        "Comprehensive assessment and review",
        "Evidence-based approach to diagnosis",
        "Detailed clinical opinion and next steps",
        "Referral guidance when needed",
        "Informed decision-making support"
      ],
      conditions: [
        "Persistent chronic pain",
        "Conflicting previous diagnoses",
        "Unresolved musculoskeletal conditions",
        "Failed previous treatments",
        "Complex multi-system issues",
        "Need for specialist referral"
      ],
      techniques: [
        "Comprehensive medical history review",
        "Detailed symptom assessment",
        "Medical record and scan analysis",
        "Evidence-based diagnosis",
        "Clinical opinion documentation",
        "Referral coordination"
      ]
    },
    "pregnancy-and-paediatric-care": {
      title: "Pregnancy and Paediatric Care",
      shortDescription: "Specialized chiropractic care for mothers and babies",
      fullDescription: "Chiropractic treatment aims to help keep you as comfortable as possible and optimise In-Utero Foetal positioning aiding the birth process. Our Chiropractors are also trained in treating infants and babies; common problems including sleep and feeding difficulties, colic and constipation are common paediatric complaints in a Chiropractor's office. We provide gentle, safe, and effective care tailored specifically for pregnancy and early childhood development.",
      image: pregnancyPaediatricImage,
      imageAlt: "Pregnancy and paediatric chiropractic care",
      benefits: [
        "Improved comfort during pregnancy",
        "Optimal foetal positioning for birth",
        "Reduced pregnancy-related back pain",
        "Better sleep quality for mothers",
        "Enhanced nervous system function in babies",
        "Relief from colic and digestive issues",
        "Improved feeding patterns in infants",
        "Support for natural development"
      ],
      conditions: [
        "Pregnancy-related back pain",
        "Pelvic pain during pregnancy",
        "Breech presentation",
        "Infant colic and crying",
        "Sleep difficulties in babies",
        "Feeding problems",
        "Constipation in infants",
        "Developmental concerns",
        "Birth trauma recovery"
      ],
      techniques: [
        "Webster Technique for optimal foetal positioning",
        "Gentle pregnancy-specific adjustments",
        "Infant craniosacral therapy",
        "Soft tissue work for pregnant mothers",
        "Paediatric chiropractic techniques",
        "Postural support and education",
        "Breathing and relaxation techniques"
      ]
    }
  };

  const service = serviceData[slug || ''];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/#services">
                <Button variant="outline" className="mb-6 text-white border-2 border-white bg-white/10 hover:bg-white hover:text-blue-600 shadow-lg backdrop-blur-sm font-semibold px-6 py-3">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Services
                </Button>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-blue-100 mb-8">{service.shortDescription}</p>
              <div>
                <Button
                  onClick={scrollToAppointment}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Description */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About {service.title}</h2>
              {slug === 'diabetes-and-weight-loss-programs' ? (
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {service.fullDescription} Learn more about our{' '}
                  <a href="/programs" className="text-blue-600 hover:text-blue-800 underline">
                    Programs
                  </a>.
                </p>
              ) : (
                <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.fullDescription}</p>
              )}
              
              {/* Benefits Section for Therapeutic Massage */}
              {slug === 'therapeutic-massage' && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Benefits</h3>
                  <ul className="space-y-3 text-lg text-gray-600 mb-6">
                    <li>• Relief from muscle tension and soreness</li>
                    <li>• Improved circulation and flexibility</li>
                    <li>• Stress and anxiety reduction</li>
                    <li>• Support for injury recovery and posture improvement</li>
                  </ul>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Let therapeutic massage be a part of your self-care journey. Book your session today and take a step toward better health.
                  </p>
                </div>
              )}

              {/* PEMF Specific Content */}
              {slug === 'pemf-therapy' && (
                <div className="mb-8">
                  {/* What is PEMF? */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">What is PEMF?</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                      Pulsed electromagnetic fields (PEMFs) is a safe and non-invasive technique that works by eliciting a biological tissue and cellular response that repairs the body naturally. PEMF uses Pulsating magnetic fields generated by electromagnets with particular frequencies, waveforms and intensities using specially designed apparatus for therapeutic, rejuvenative or performance enhancement benefits.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                      It improves blood supply and causes an increase in oxygen pressure, activating and regenerating cells.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4">
                      This treatment concept is far from new; Academic study of PEMF began as early as 1932 when researchers from Yale University discovered that depleted electrical energy from the body caused dis-ease. However, pulsed electromagnetic fields were able to donate energy, helping cells to repair, rebuild, and regenerate naturally.
                    </p>
                  </div>

                  {/* Benefits of PEMF */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Benefits of PEMF</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Scientists have observed that a healthy cell has a higher electrical charge than an unhealthy one. This higher charge permits it to function optimally. It has been established that tissues including blood, muscle, ligaments, bone and cartilage and nerves all respond to these biomagnetic fields.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-blue-800 mb-3">HEALING & REPAIR</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Accelerates Injury Recovery Time</li>
                          <li>• Enhance Wound Healing</li>
                          <li>• Reduces Fibrous Tissue Scars & Breaks Up Adhesions</li>
                          <li>• Promotes Bone Repair and Regeneration</li>
                          <li>• Enhances Joint Healing</li>
                          <li>• Reduces Pain, Swelling, Oedema, Inflammation</li>
                          <li>• Reduces Ligament & Tendon Strain & Pain</li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-purple-800 mb-3">NEUROLOGICAL</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Improves Sleep</li>
                          <li>• Reduces Nervous Irritability</li>
                          <li>• Enhances Brain Function</li>
                          <li>• Stimulates Release of Endorphins & Promotes Wellbeing</li>
                          <li>• Reduces General Stress & Anxiety</li>
                          <li>• Improves Mood</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-green-800 mb-3">METABOLISM</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Promotes healthy Cell Metabolism</li>
                          <li>• Balances Cell Membrane Charge</li>
                          <li>• Stimulates Inter-Cellular Communication</li>
                          <li>• Improves Nutrient Intake & Cellular Detoxification</li>
                          <li>• Benefits the Anti-Oxidant System</li>
                        </ul>
                      </div>

                      <div className="bg-red-50 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-red-800 mb-3">CARDIOVASCULAR SYSTEM</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Optimises Blood & Tissue Oxygenation</li>
                          <li>• Strengthens Blood Circulation</li>
                        </ul>
                      </div>

                      <div className="bg-indigo-50 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-indigo-800 mb-3">IMMUNE SYSTEM</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Boost Immune System</li>
                          <li>• Improves Lymph Circulation</li>
                          <li>• Enhances Cellular Detoxification</li>
                        </ul>
                      </div>

                      <div className="bg-pink-50 p-6 rounded-lg">
                        <h4 className="text-xl font-bold text-pink-800 mb-3">BEAUTY & ANTI-AGING</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Slows ageing effects via neutralisation of free radicals</li>
                          <li>• Stimulates Collagen Synthesis</li>
                          <li>• Boosts Cellular Regeneration & Repair</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg mb-6">
                      <h4 className="text-xl font-bold text-orange-800 mb-3">ATHLETIC PERFORMANCE</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Promotes Superior Performance & Endurance</li>
                          <li>• Boosts Energy (maximises ATP production)</li>
                          <li>• Reduces Anxiety & Stress</li>
                          <li>• Relaxes Muscle Tension</li>
                          <li>• Enhances Muscle Functions</li>
                          <li>• Regulates Cellular Metabolism</li>
                        </ul>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Benefits RNA & DNA Synthesis</li>
                          <li>• Faster Recovery after Exercise</li>
                          <li>• Promotes lactic Acid Excretion</li>
                          <li>• Accelerates Healing of Sore, Stiff Muscles</li>
                          <li>• Reduces Pain caused by Spasms & Adhesions</li>
                          <li>• Reduces Swelling & Inflammation</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                      <p className="text-gray-700 font-medium">Used by NASA on astronauts returning from space to regenerate bone and muscle loss.</p>
                    </div>
                  </div>

                  {/* Who can have PEMF therapy? */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Who can have PEMF therapy?</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      PEMF therapy is suitable for adults with multiple conditions.
                    </p>
                    
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      A few people may experience some symptoms following a therapy session due to the Healing reaction. This may present as mild symptoms of an old injury, detoxing reactions, mild nausea, headaches, stiffness, general aches, or digestive disturbance. These symptoms are signs of healing. Fortunately, these side effects if felt at all, are only temporary and are due to increased blood flow and oxygenation. To Limit these effects make sure you drink plenty of water before and after treatment.
                    </p>

                    <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                      <h4 className="text-xl font-bold text-red-800 mb-3">*This Therapy is NOT Suitable if you:-</h4>
                      <ul className="space-y-2 text-red-700">
                        <li>• Have a Pacemaker fitted</li>
                        <li>• Have an Insulin Pump fitted</li>
                        <li>• Are Pregnant</li>
                        <li>• Have had an organ transplant and are on immune suppressant medications</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
                      <p className="text-yellow-700">
                        Please tell your therapist if you have any metal implants like replacement joints or stents, dental implants, mechanical heart valves, or staples in your body before treatment.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {slug !== 'pemf-therapy' && (
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Conditions We Treat</h3>
                  <ul className="space-y-2">
                    {service.conditions.map((condition: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-700 text-sm">{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">Book your appointment today and take the first step towards better health.</p>
                <div className="space-y-3">
                  <Button
                    onClick={scrollToAppointment}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for Chiropractic */}
      {slug === 'chiropractic' && (
        <section className="py-6 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What is Chiropractic?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Chiropractic specialises in the diagnosis, treatment and prevention of conditions which are due to mechanical dysfunction of the muscles, joints and in particular the spine and their effects upon the nervous system.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What do Chiropractors do?</h3>
                <p className="text-gray-600 leading-relaxed">
                  In Chiropractic, the emphasis is on prevention and 'adjustment'. According to the condition being treated, one or more of a whole range of different chiropractic adjusting techniques can be used. With these your chiropractor effects an improvement in your joint's mobility, as well as nerve and muscle function. Your body's own healing process (which we normally recognise in its ability to heal bruises, cuts and broken bones) will then be able to continue the task of restoring normal function.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What will happen when you visit a chiropractor?</h3>
                <p className="text-gray-600 leading-relaxed">
                  A visit to the chiropractor is very similar to visiting your medical doctor; he or she is a primary healthcare professional. The difference is that the process and treatment of your complaint is always done from a holistic, drug free perspective. On the first visit the chiropractor will take your medical history carry out a full examination. This includes orthopaedic and neurological tests whereby muscle strength, nerve function, joint function, as well as body balance and alignment are assessed.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What does treatment involve?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Using skilled manipulation and quick, comfortable adjustment techniques, with just the right amount of pressure, Chiropractors gently unlock the stiff joints to restore proper function and mobility. This in turn helps to settle the pain. The vulnerable area is then stabilised with further treatments. When you have experienced the benefits of chiropractic treatment in reducing pain and discomfort, the next step is to help you get active again. Following treatment rehabilitation and exercise are essential to speed your body's natural healing process and strengthen your muscles to prevent recurrence of the condition.
                </p>
                <p className="text-gray-600 font-semibold mb-3">Alongside the traditional chiropractic adjustment, chiropractors utilize adjunctive therapies:</p>
                <ul className="text-gray-600 space-y-2">
                  <li>• Spinal and peripheral joint mobilization</li>
                  <li>• Muscle, nerve and fascia release techniques</li>
                  <li>• Therapeutic instrument techniques and modalities</li>
                  <li>• Exercise, rehabilitative programs and other forms of active care</li>
                  <li>• Nutrition and dietary interventions</li>
                  <li>• Psychosocial aspects of patient management</li>
                  <li>• Patient education on spinal health, posture, ergonomics, nutrition and other lifestyle modifications</li>
                  <li>• Emergency treatment and acute pain management procedures as indicated</li>
                  <li>• Other supportive measures, which may include the use of taping, back supports and orthotics</li>
                  <li>• Recognition of contraindications and risk management procedures, the limitations of chiropractic care, and of the need for protocols relating to referral to other health professionals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}



      {/* Appointment Section - Hidden but with ID for scrolling */}
      <section id="appointment" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Book Your {service.title} Appointment</h2>
          <p className="text-blue-100 mb-8">Take the first step towards better health and wellness.</p>
          <div className="flex justify-center">
            <Link href="/#appointment">
              <Button
                className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 border-2 border-white px-8 py-3 text-lg font-semibold shadow-lg"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Online Booking
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}