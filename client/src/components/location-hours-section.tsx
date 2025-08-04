import { MapPin, Clock, Phone, Mail, Navigation, Star, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function LocationHoursSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[hsl(var(--wellness-blue))] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[hsl(var(--wellness-blue))] rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg animate-bounce">
              <Clock className="text-white w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[hsl(var(--neutral-dark))] to-gray-700 bg-clip-text text-transparent">
              Operating Hours
            </h2>
          </div>
          <div className="flex items-center justify-center mb-8">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[hsl(var(--wellness-blue))] rounded-full"></div>
            <div className="h-1 w-24 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-[hsl(var(--wellness-blue))] rounded-full mx-2"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-transparent rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're here when you need us most, 
            <span className="text-[hsl(var(--wellness-blue))] font-semibold"> committed to your health and wellness</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Operating Hours Card */}
          <div 
            className="group relative bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Featured Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
              <Clock className="w-3 h-3 mr-1 fill-current" />
              Open Daily
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-600 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <Clock className="text-[hsl(var(--wellness-blue))] w-8 h-8" />
                  </div>
                  {hoveredCard === 0 && (
                    <div className="absolute -inset-2 bg-[hsl(var(--wellness-blue))] rounded-full opacity-20 animate-ping"></div>
                  )}
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[hsl(var(--neutral-dark))] to-gray-700 bg-clip-text text-transparent mb-3">
                  Operating Hours
                </h3>
                <p className="text-gray-500 text-sm">We're here when you need us</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start group/item">
                  <div className="w-10 h-10 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-md group-hover/item:scale-110 transition-transform duration-200">
                    <Clock className="text-white w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold mb-2">Weekly Schedule</p>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: By Appointment Only</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center group/item">
                  <div className="w-10 h-10 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-md group-hover/item:scale-110 transition-transform duration-200">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold mb-1">Contact</p>
                    <a href="tel:0758478992" className="text-[hsl(var(--wellness-blue))] hover:text-blue-700 font-medium text-lg transition-colors duration-200 hover:underline">
                      0758 478992
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Button */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="w-full bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-600 text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group/btn">
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information Card */}
          <div 
            className="group relative bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Contact Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
              <Mail className="w-3 h-3 mr-1" />
              Contact Us
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-600 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <Mail className="text-[hsl(var(--wellness-blue))] w-8 h-8" />
                  </div>
                  {hoveredCard === 1 && (
                    <div className="absolute -inset-2 bg-[hsl(var(--wellness-blue))] rounded-full opacity-20 animate-ping"></div>
                  )}
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[hsl(var(--neutral-dark))] to-gray-700 bg-clip-text text-transparent mb-3">
                  Contact Us
                </h3>
                <p className="text-gray-500 text-sm">Ready to help you</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start group/item">
                  <div className="w-10 h-10 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-md group-hover/item:scale-110 transition-transform duration-200">
                    <Mail className="text-white w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold mb-1">Email</p>
                    <a href="mailto:info@back2health.com" className="text-[hsl(var(--wellness-blue))] hover:text-blue-700 font-medium text-lg transition-colors duration-200 hover:underline">
                      info@back2health.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center group/item">
                  <div className="w-10 h-10 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-md group-hover/item:scale-110 transition-transform duration-200">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-semibold mb-1">Phone</p>
                    <a href="tel:0758478992" className="text-[hsl(var(--wellness-blue))] hover:text-blue-700 font-medium text-lg transition-colors duration-200 hover:underline">
                      0758 478992
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Button */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button className="w-full bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-600 text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group/btn">
                  Send Message
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md mx-auto border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                <Mail className="text-white w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--neutral-dark))] to-gray-700 bg-clip-text text-transparent">
                General Inquiries
              </h4>
            </div>
            <a 
              href="mailto:info@back2health.com" 
              className="text-[hsl(var(--wellness-blue))] hover:text-blue-700 text-xl font-semibold transition-colors duration-200 hover:underline flex items-center justify-center group"
            >
              info@back2health.com
              <ArrowRight className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}