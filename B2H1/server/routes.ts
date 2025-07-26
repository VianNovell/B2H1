import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertAppointmentSchema, insertTestimonialSchema } from "@shared/schema";
import { sendAppointmentConfirmation, sendContactFormNotification } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // Send notification email to admin
      const emailResult = await sendContactFormNotification({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || '',
        service: validatedData.service || '',
        message: validatedData.message,
      });
      
      if (emailResult.success) {
        console.log('✅ Contact form notification email sent successfully');
      } else {
        console.error('❌ Failed to send contact form notification:', emailResult.error);
      }
      
      res.status(201).json({ success: true, id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contact submissions" 
      });
    }
  });

  // Appointment booking endpoints
  app.post("/api/appointments", async (req, res) => {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(validatedData);
      
      // Send confirmation emails
      const emailResult = await sendAppointmentConfirmation({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || '',
        service: validatedData.service,
        preferredDate: validatedData.preferredDate,
        preferredTime: validatedData.preferredTime,
        message: validatedData.message,
      });
      
      if (emailResult.success) {
        console.log('✅ Appointment emails sent successfully');
      } else {
        console.error('❌ Failed to send appointment emails:', emailResult.error);
      }
      
      res.status(201).json({ success: true, id: appointment.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid appointment data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to book appointment" 
        });
      }
    }
  });

  app.get("/api/appointments", async (req, res) => {
    try {
      const appointments = await storage.getAppointments();
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve appointments" 
      });
    }
  });

  // Testimonials endpoints
  app.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.status(201).json({ success: true, id: testimonial.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid testimonial data",
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to submit testimonial" 
        });
      }
    }
  });

  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve testimonials" 
      });
    }
  });

  // Email test endpoint
  app.post("/api/test-email", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ success: false, message: "Email address required" });
      }

      // Test email using the appointment confirmation function
      const testResult = await sendAppointmentConfirmation({
        name: "Test User",
        email: email,
        phone: "0758478992",
        service: "Chiropractic",
        preferredDate: "2025-07-25",
        preferredTime: "10:00 AM",
        message: "This is a test email to verify the email system is working properly."
      });

      if (testResult.success) {
        res.json({ 
          success: true, 
          message: "Test email sent successfully!",
          details: "Check your inbox and spam folder"
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send test email",
          error: testResult.error
        });
      }
    } catch (error) {
      console.error('Email test error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Email test failed",
        error: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
