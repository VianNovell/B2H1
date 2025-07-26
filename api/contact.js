import { storage } from "../server/storage.js";
import { insertContactSubmissionSchema } from "../shared/schema.js";
import { sendContactFormNotification } from "../server/email.js";
import { z } from "zod";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
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
  } else if (req.method === 'GET') {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contact submissions" 
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
