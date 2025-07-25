import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function LocationHoursSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-4">
            Visit Our Clinics
          </h2>
          <div className="w-24 h-1 bg-[hsl(var(--wellness-green))] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have two convenient locations to serve you better
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Clinic - Bukoto */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[hsl(var(--wellness-green)_/_10%)] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-[hsl(var(--wellness-green))] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--neutral-dark))] mb-2">
                Main Clinic
              </h3>
              <p className="text-[hsl(var(--wellness-green))] font-semibold text-lg">
                Bukoto, Kampala
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-[hsl(var(--wellness-green))] w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium">Address</p>
                  <p className="text-gray-600">Moyo Close, Bukoto</p>
                  <p className="text-gray-600">Kampala, Uganda</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-[hsl(var(--wellness-blue))] w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium">Operating Hours</p>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: By Appointment Only</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="text-[hsl(var(--wellness-green))] w-5 h-5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium">Phone</p>
                  <a href="tel:0758478992" className="text-[hsl(var(--wellness-green))] hover:underline">
                    0758 478992
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Branch - Entebbe */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[hsl(var(--wellness-blue)_/_10%)] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-[hsl(var(--wellness-blue))] w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[hsl(var(--neutral-dark))] mb-2">
                Branch Clinic
              </h3>
              <p className="text-[hsl(var(--wellness-blue))] font-semibold text-lg">
                Entebbe Road
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-[hsl(var(--wellness-blue))] w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium">Address</p>
                  <p className="text-gray-600">Entebbe Road</p>
                  <p className="text-gray-600">Entebbe, Uganda</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-[hsl(var(--wellness-green))] w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium">Operating Hours</p>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: By Appointment Only</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="text-[hsl(var(--wellness-blue))] w-5 h-5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-800 font-medium">Phone</p>
                  <a href="tel:0758478992" className="text-[hsl(var(--wellness-blue))] hover:underline">
                    0758 478992
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-md p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Mail className="text-[hsl(var(--wellness-green))] w-6 h-6 mr-2" />
              <h4 className="text-lg font-semibold text-[hsl(var(--neutral-dark))]">
                General Inquiries
              </h4>
            </div>
            <a 
              href="mailto:info@back2health.com" 
              className="text-[hsl(var(--wellness-green))] hover:underline text-lg"
            >
              info@back2health.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}