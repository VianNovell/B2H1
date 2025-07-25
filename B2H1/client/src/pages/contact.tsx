import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-500">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Get in touch to book your appointment or learn more about our services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[hsl(var(--neutral-dark))] mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <Phone className="h-6 w-6 text-[hsl(var(--wellness-green))]" />
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--neutral-dark))]">Phone</h3>
                    <p className="text-gray-600">0758</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <Mail className="h-6 w-6 text-[hsl(var(--wellness-green))]" />
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--neutral-dark))]">Email</h3>
                    <p className="text-gray-600">back2healthug@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <MapPin className="h-6 w-6 text-[hsl(var(--wellness-green))]" />
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--neutral-dark))]">Locations</h3>
                    <p className="text-gray-600">Bukoto & Entebbe</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="h-6 w-6 text-[hsl(var(--wellness-green))]" />
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--neutral-dark))]">Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[hsl(var(--neutral-dark))] mb-6">
                Book an Appointment
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select a service</option>
                    <option>Chiropractic Care</option>
                    <option>Physiotherapy</option>
                    <option>Massage Therapy</option>
                    <option>PEMF Therapy</option>
                    <option>Qigong and Breathwork</option>
                    <option>Corporate Wellness</option>
                    <option>Diabetes & Weight Loss</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your condition or what you'd like help with..."
                  />
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}