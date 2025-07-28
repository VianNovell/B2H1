import { MapPin, Clock, Phone, Mail, Navigation, Car, Bus, Plane } from "lucide-react";

export default function LocationDetailsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="text-[hsl(var(--wellness-green))] w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))]">
              Visit Our Clinic
            </h2>
          </div>
          <div className="w-24 h-1 bg-[hsl(var(--wellness-green))] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located in Entebbe to serve you better. Plan your visit to our healthcare facility.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Clinic - Entebbe */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--neutral-dark))] mb-2">
                Our Clinic - Entebbe
              </h3>
              <p className="text-[hsl(var(--wellness-blue))] font-semibold">Comprehensive Healthcare Services</p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-[hsl(var(--wellness-green))] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--neutral-dark))] mb-1">Address</h4>
                  <p className="text-gray-600">Entebbe Road</p>
                  <p className="text-gray-600">Entebbe, Uganda</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="text-[hsl(var(--wellness-blue))] w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--neutral-dark))] mb-1">Opening Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p><span className="font-medium">Mon - Fri:</span> 9:00 AM - 5:00 PM</p>
                    <p><span className="font-medium">Saturday:</span> 10:00 AM - 3:00 PM</p>
                    <p><span className="font-medium">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-yellow-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--neutral-dark))] mb-1">Contact</h4>
                  <p className="text-gray-600">📞 0758 478992</p>
                  <p className="text-gray-600">✉️ entebbe@back2health.com</p>
                </div>
              </div>

              {/* Transportation */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Navigation className="text-purple-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--neutral-dark))] mb-1">Getting There</h4>
                  <div className="text-gray-600 space-y-1">
                    <div className="flex items-center">
                      <Car className="w-4 h-4 mr-2" />
                      <span>Street parking available</span>
                    </div>
                    <div className="flex items-center">
                      <Plane className="w-4 h-4 mr-2" />
                      <span>15 mins from Entebbe Airport</span>
                    </div>
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