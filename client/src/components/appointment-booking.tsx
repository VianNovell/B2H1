import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertAppointmentSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import type { z } from "zod";

type AppointmentFormData = z.infer<typeof insertAppointmentSchema>;

export default function AppointmentBooking() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const clearForm = () => {
    form.reset({
      name: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
  };

  // Clear form when component mounts
  useEffect(() => {
    clearForm();
  }, []);

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  const services = [
    "Chiropractic",
    "Physiotherapy",
    "Massage Therapy",
    "PEMF Therapy",
    "Qigong and Breathwork",
    "Diabetes & Weight Loss Programs",
    "Corporate Wellness",
  ];

  const timeSlots = [
    "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
    "5:00 PM", "5:30 PM"
  ];

  const submitMutation = useMutation({
    mutationFn: async (data: AppointmentFormData) => {
      const response = await apiRequest("POST", "/api/appointments", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Appointment Requested!",
        description: "Thank you for booking with us! We'll contact you shortly to confirm your appointment time.",
      });
      form.reset({
        name: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
    },
    onError: (error) => {
      toast({
        title: "Booking Failed",
        description: "Failed to submit appointment request. Please try again or call us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: AppointmentFormData) => {
    setIsSubmitting(true);
    await submitMutation.mutateAsync(data);
    setIsSubmitting(false);
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="text-[hsl(var(--wellness-blue))] w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--neutral-dark))]">
              Book Your Appointment
            </h2>
          </div>
          <div className="w-24 h-1 bg-[hsl(var(--wellness-blue))] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards optimal wellness. Schedule your consultation today.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-white px-8 py-6 border-b border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
              Schedule Your Wellness Journey
            </h3>
            <p className="text-gray-700 text-lg font-medium">
              Our team will contact you within 24 hours to confirm your appointment
            </p>
          </div>

          <div className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <User className="w-4 h-4 mr-2 text-[hsl(var(--wellness-blue))]" />
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="focus:ring-[hsl(var(--wellness-blue))] focus:border-[hsl(var(--wellness-blue))] h-12"
                            placeholder="Enter your full name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-[hsl(var(--wellness-blue))]" />
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            className="focus:ring-[hsl(var(--wellness-blue))] focus:border-[hsl(var(--wellness-blue))] h-12"
                            placeholder="your.email@example.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-[hsl(var(--wellness-blue))]" />
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            {...field}
                            className="focus:ring-[hsl(var(--wellness-blue))] focus:border-[hsl(var(--wellness-blue))] h-12"
                            placeholder="0758 478992"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Needed</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="focus:ring-[hsl(var(--wellness-blue))] focus:border-[hsl(var(--wellness-blue))] h-12">
                              <SelectValue placeholder="Select a service..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service.toLowerCase()}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="preferredDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-[hsl(var(--wellness-blue))]" />
                          Preferred Date
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            {...field}
                            min={today}
                            className="focus:ring-[hsl(var(--wellness-blue))] focus:border-[hsl(var(--wellness-blue))] h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="preferredTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-[hsl(var(--wellness-blue))]" />
                          Preferred Time
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="focus:ring-[hsl(var(--wellness-blue))] focus:border-[hsl(var(--wellness-blue))] h-12">
                              <SelectValue placeholder="Select time..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2 text-[hsl(var(--wellness-blue))]" />
                        Additional Information (Optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          placeholder="Tell us about your health concerns, goals, or any specific requirements..."
                          className="focus:ring-[hsl(var(--wellness-blue))] focus:border-[hsl(var(--wellness-blue))]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-[hsl(var(--wellness-blue))] to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-8 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Booking...
                      </>
                    ) : (
                      <>
                        <Calendar className="mr-3 h-5 w-5" />
                        Book Appointment
                      </>
                    )}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      window.open("tel:0758478992", "_self");
                    }}
                    className="border-2 border-[hsl(var(--wellness-blue))] text-[hsl(var(--wellness-blue))] hover:bg-[hsl(var(--wellness-blue))] hover:text-white py-4 px-8 text-lg font-semibold rounded-xl transition-all duration-300"
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    Call Instead
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}