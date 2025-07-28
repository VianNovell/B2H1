import { MapPin, Clock, Phone, Mail, Navigation, Car, Bus, Plane } from "lucide-react";

export default function LocationDetailsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="text-[hsl(var(--wellness-green))] w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))]">
              Visit Our Clinics
            </h2>
          </div>
          <div className="w-24 h-1 bg-[hsl(var(--wellness-green))] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located to serve you better. Find the clinic nearest to you and plan your visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Main Clinic - Bukoto */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-green-100">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[hsl(var(--wellness-green))] to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--neutral-dark))] mb-2">
                Main Clinic - Bukoto
              </h3>
              <p className="text-[hsl(var(--wellness-green))] font-semibold">Primary Healthcare Center</p>
            </div>

            <div className="space-y-6">
              <div className="text-center py-8">
                <p className="text-lg text-gray-600 mb-4">
                  Professional healthcare services available at our main location
                </p>
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="text-[hsl(var(--wellness-green))] w-8 h-8" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">Extended Hours</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Phone className="text-[hsl(var(--wellness-blue))] w-8 h-8" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">24/7 Support</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Car className="text-yellow-600 w-8 h-8" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">Easy Access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Branch Clinic - Entebbe */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--neutral-dark))] mb-2">
                Branch Clinic - Entebbe
              </h3>
              <p className="text-[hsl(var(--wellness-blue))] font-semibold">Specialized Services</p>
            </div>

            <div className="space-y-6">
              <div className="text-center py-8">
                <p className="text-lg text-gray-600 mb-4">
                  Specialized treatment services and wellness programs
                </p>
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Mail className="text-[hsl(var(--wellness-green))] w-8 h-8" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">Online Booking</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Navigation className="text-[hsl(var(--wellness-blue))] w-8 h-8" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">Convenient Location</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Plane className="text-purple-600 w-8 h-8" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">Travel Friendly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[hsl(var(--wellness-green))] to-[hsl(var(--wellness-blue))] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Visit Us?</h3>
            <p className="text-lg mb-6 opacity-90">
              Book your appointment today and take the first step towards better health
            </p>
            <button
              onClick={() => {
                document.getElementById('appointment')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="bg-white text-[hsl(var(--wellness-green))] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}