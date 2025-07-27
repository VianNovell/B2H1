import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { insertContactSubmissionSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSubmissionSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await submitMutation.mutateAsync(data);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[hsl(var(--neutral-dark))] mb-4 px-4">
            Get In Touch
          </h2>
          <div className="w-20 md:w-24 h-1 bg-[hsl(var(--wellness-green))] mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to start your journey to optimal wellness? Contact us today to
            schedule your consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[hsl(var(--wellness-green)_/_10%)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-[hsl(var(--wellness-green))] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--neutral-dark))]">
                    Phone
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">0758 478992</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[hsl(var(--wellness-blue)_/_10%)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-[hsl(var(--wellness-blue))] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--neutral-dark))]">
                    Email
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">info@back2health.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-[hsl(var(--wellness-green)_/_10%)] rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                  <MapPin className="text-[hsl(var(--wellness-green))] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--neutral-dark))]">
                    Contact Information
                  </h3>
                  <div className="text-gray-600 text-sm sm:text-base space-y-2">
                    <div>
                      <p className="font-medium text-[hsl(var(--wellness-green))]">Phone</p>
                      <p>0758 478992</p>
                    </div>
                    <div>
                      <p className="font-medium text-[hsl(var(--wellness-blue))]">Email</p>
                      <p>info@back2health.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-[hsl(var(--wellness-blue)_/_10%)] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="text-[hsl(var(--wellness-blue))] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[hsl(var(--neutral-dark))]">
                    Hours
                  </h3>
                  <div className="text-gray-600 text-sm sm:text-base space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: By Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="focus:ring-[hsl(var(--wellness-green))] focus:border-[hsl(var(--wellness-green))]"
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
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          {...field}
                          className="focus:ring-[hsl(var(--wellness-green))] focus:border-[hsl(var(--wellness-green))]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          {...field}
                          value={field.value || ""}
                          className="focus:ring-[hsl(var(--wellness-green))] focus:border-[hsl(var(--wellness-green))]"
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
                      <FormLabel>Service Interested In</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-[hsl(var(--wellness-green))] focus:border-[hsl(var(--wellness-green))]">
                            <SelectValue placeholder="Select a service..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="chiropractic">Chiropractic</SelectItem>
                          <SelectItem value="physiotherapy">Physiotherapy</SelectItem>
                          <SelectItem value="massage">Massage Therapy</SelectItem>
                          <SelectItem value="naturopathy">Naturopathy</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          placeholder="Tell us about your health concerns or questions..."
                          className="focus:ring-[hsl(var(--wellness-green))] focus:border-[hsl(var(--wellness-green))]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[hsl(var(--wellness-green))] hover:bg-[hsl(var(--wellness-accent))] text-white py-3 md:py-4 px-6 text-base md:text-lg font-semibold min-h-[48px] touch-manipulation"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
