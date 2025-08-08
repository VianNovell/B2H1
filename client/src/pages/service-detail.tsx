import { useParams } from "wouter";
import { Calendar, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Link } from "wouter";

// Import service images
import physiotherapyImage from "@assets/Physiotherapy.png";
import spineImage from "@assets/Spine.png";
import therapeuticImage from "@assets/Therapeuticimage.png";
import doctorImage from "@assets/Doctor.png";
import diabetesWeightLossImage from "@assets/diabetes-weight-loss.png";

export default function ServiceDetail() {
  const { slug } = useParams();

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  // Service data mapping
  const serviceData: Record<string, any> = {
    "chiropractic": {
      title: "Chiropractic",
      shortDescription: "Comprehensive spinal care and nervous system health",
      fullDescription: "Chiropractic is based on the scientific fact that your body is a self-regulating, self-healing organism. We focus on the nervous system and its relationship to your body, specializing in diagnosis, treatment and prevention of neuromusculoskeletal disorders with emphasis on manual techniques and joint adjustment.",
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
        "Spinal manipulation and adjustment",
        "Soft tissue therapy",
        "Posture correction",
        "Exercise rehabilitation",
        "Lifestyle counseling"
      ]
    },
    "physiotherapy": {
      title: "Physiotherapy",
      shortDescription: "Evidence-based rehabilitation and movement therapy",
      fullDescription: "Physiotherapy is a science-based, personalised approach to restoring movement, improving function, and enhancing quality of life. Through hands-on techniques, tailored exercise programs, and education, we help alleviate pain, restore strength and flexibility, prevent further injury, and improve movement mechanics.",
      image: physiotherapyImage,
      imageAlt: "Physiotherapy treatment session",
      benefits: [
        "Restored movement and function",
        "Pain reduction and management",
        "Improved strength and flexibility",
        "Faster injury recovery",
        "Prevention of future injuries",
        "Enhanced athletic performance"
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
      fullDescription: "Therapeutic massage, also known as Medical massage, is tailored to your health needs. A targeted approach to relieve stress, reduce pain, and restore balance using techniques specific to your individual needs. Benefits include relief from muscle tension, improved circulation and flexibility, stress reduction, and support for injury recovery.",
      image: therapeuticImage,
      imageAlt: "Therapeutic massage treatment",
      benefits: [
        "Relief from muscle tension",
        "Improved circulation",
        "Enhanced flexibility",
        "Stress reduction",
        "Better sleep quality",
        "Faster injury recovery"
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
      shortDescription: "Pulsed Electromagnetic Field Therapy for cellular healing",
      fullDescription: "Pulsed Electromagnetic Field Therapy uses targeted electromagnetic fields to stimulate cellular repair and regeneration. This non-invasive treatment helps reduce pain and inflammation, improves circulation, and accelerates healing at the cellular level.",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      imageAlt: "PEMF therapy equipment",
      benefits: [
        "Cellular repair and regeneration",
        "Pain and inflammation reduction",
        "Improved circulation",
        "Accelerated healing",
        "Better sleep quality",
        "Enhanced energy levels"
      ],
      conditions: [
        "Chronic pain",
        "Arthritis",
        "Bone healing",
        "Sports injuries",
        "Fibromyalgia",
        "Sleep disorders"
      ],
      techniques: [
        "Low-frequency PEMF",
        "High-intensity PEMF",
        "Targeted field application",
        "Full-body treatment",
        "Localized therapy"
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
        "Blood sugar monitoring",
        "Behavioral modification"
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
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{service.fullDescription}</p>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {service.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Treatment Techniques</h3>
              <ul className="space-y-2 mb-8">
                {service.techniques.map((technique: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">{technique}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
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

      {/* Appointment Section - Hidden but with ID for scrolling */}
      <section id="appointment" className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Book Your {service.title} Appointment</h2>
          <p className="text-blue-100 mb-8">Take the first step towards better health and wellness.</p>
          <div className="flex justify-center">
            <Link href="/#appointment">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
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