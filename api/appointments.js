import { storage } from "../server/storage.js";
import { insertAppointmentSchema } from "../shared/schema.js";
import { sendAppointmentConfirmation } from "../server/email.js";
import { z } from "zod";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(validatedData);
      
      const emailResult = await sendAppointmentConfirmation({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || '',
        service: validatedData.service,
        preferredDate: validatedData.preferredDate,
        preferredTime: validatedData.preferredTime,
        message: validatedData.message || '',
      });
      
      if (emailResult.success) {
        console.log('✅ Appointment confirmation email sent successfully');
      } else {
        console.error('❌ Failed to send appointment confirmation:', emailResult.error);
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
  } else if (req.method === 'GET') {
    try {
      const appointments = await storage.getAppointments();
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve appointments" 
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
