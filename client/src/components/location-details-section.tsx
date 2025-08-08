import { MapPin, Clock, Phone, Mail, Navigation, Car, Bus, Plane } from "lucide-react";

export default function LocationDetailsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="text-[hsl(var(--wellness-blue))] w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))]">
              Visit Our Clinic
            </h2>
          </div>
          <div className="w-24 h-1 bg-[hsl(var(--wellness-blue))] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located in Bukoto, Kampala and Entebbe. Consultation is by appointment only.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Kampala Clinic */}
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--neutral-dark))] mb-1">
                Kampala
              </h3>
              <p className="text-[hsl(var(--wellness-blue))] font-semibold text-sm">Mukasa Road, Bukoto</p>
            </div>

            <div className="space-y-4">
              {/* Contact */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Phone className="text-yellow-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--neutral-dark))] mb-1 text-sm">Contact</h4>
                  <p className="text-gray-600 text-sm">📞 0758 478992</p>
                  <p className="text-gray-600 text-sm">
                    ✉️ <a 
                      href="mailto:info@back2health.com" 
                      className="text-[hsl(var(--wellness-blue))] hover:text-blue-700 hover:underline transition-colors duration-200"
                    >
                      info@back2health.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Entebbe Clinic */}
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-blue-100">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="text-white w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[hsl(var(--neutral-dark))] mb-1">
                Entebbe
              </h3>
              <p className="text-[hsl(var(--wellness-blue))] font-semibold text-sm">Entebbe Location</p>
            </div>

            <div className="space-y-4">
              {/* Contact */}
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Phone className="text-yellow-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-[hsl(var(--neutral-dark))] mb-1 text-sm">Contact</h4>
                  <p className="text-gray-600 text-sm">📞 0758 478992</p>
                  <p className="text-gray-600 text-sm">
                    ✉️ <a 
                      href="mailto:info@back2health.com" 
                      className="text-[hsl(var(--wellness-blue))] hover:text-blue-700 hover:underline transition-colors duration-200"
                    >
                      info@back2health.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}