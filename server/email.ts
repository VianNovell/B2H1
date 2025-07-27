import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface AppointmentEmailData {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

export async function sendAppointmentConfirmation(appointmentData: AppointmentEmailData) {
  try {
    // Send confirmation email to the patient
    const patientEmail = await resend.emails.send({
      from: 'Back 2 Health <onboarding@resend.dev>',
      to: [appointmentData.email],
      subject: 'Appointment Request Confirmed - Back 2 Health',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Back 2 Health</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Holistic Wellness Center</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <h2 style="color: #374151; margin-bottom: 20px;">Thank you for your appointment request!</h2>
            
            <p style="color: #6b7280; line-height: 1.6;">
              Dear ${appointmentData.name},
            </p>
            
            <p style="color: #6b7280; line-height: 1.6;">
              We have received your appointment request and will contact you within 24 hours to confirm your appointment time.
            </p>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Appointment Details:</h3>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Service:</strong> ${appointmentData.service}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Preferred Date:</strong> ${appointmentData.preferredDate}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Preferred Time:</strong> ${appointmentData.preferredTime}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Phone:</strong> ${appointmentData.phone}</p>
              ${appointmentData.message ? `<p style="margin: 5px 0; color: #6b7280;"><strong>Message:</strong> ${appointmentData.message}</p>` : ''}
            </div>
            
            <p style="color: #6b7280; line-height: 1.6;">
              If you have any questions or need to make changes, please contact us at:
            </p>
            
            <div style="background: #f0fdf4; padding: 15px; border-radius: 6px; margin: 20px 0;">
              <p style="margin: 5px 0; color: #166534;"><strong>📞 Phone:</strong> 0758 478992</p>
              <p style="margin: 5px 0; color: #166534;"><strong>📧 Email:</strong> viankamanzi5@gmail.com</p>
              <p style="margin: 5px 0; color: #166534;"><strong>📍 Address:</strong> Moyo Cl, Kampala, Uganda</p>
            </div>
            
            <p style="color: #6b7280; line-height: 1.6;">
              We look forward to helping you on your wellness journey!
            </p>
            
            <p style="color: #6b7280; line-height: 1.6;">
              Best regards,<br>
              The Back 2 Health Team
            </p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 12px;">
            <p>Back 2 Health - Holistic Wellness Center</p>
            <p>Phone: 0758 478992 | Email: info@back2health.com</p>
          </div>
        </div>
      `,
    });

    // Send onboarding notification to clinic admin
    const adminEmail = await resend.emails.send({
      from: 'Back 2 Health <onboarding@resend.dev>',
      to: ['viankamanzi5@gmail.com'],
      subject: 'New Appointment Request - Back 2 Health',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Appointment Request</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Back 2 Health Admin Panel</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <h2 style="color: #374151; margin-bottom: 20px;">New Patient Appointment Request</h2>
            
            <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #374151; margin-top: 0;">Patient Information:</h3>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Name:</strong> ${appointmentData.name}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Email:</strong> ${appointmentData.email}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Phone:</strong> ${appointmentData.phone}</p>
            </div>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Appointment Details:</h3>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Service:</strong> ${appointmentData.service}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Preferred Date:</strong> ${appointmentData.preferredDate}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Preferred Time:</strong> ${appointmentData.preferredTime}</p>
              ${appointmentData.message ? `<p style="margin: 5px 0; color: #6b7280;"><strong>Message:</strong> ${appointmentData.message}</p>` : ''}
            </div>
            
            <div style="background: #fef3c7; padding: 15px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e;"><strong>Action Required:</strong> Please contact the patient within 24 hours to confirm the appointment.</p>
            </div>
            
            <p style="color: #6b7280; line-height: 1.6;">
              This is an automated notification from the Back 2 Health website appointment booking system.
            </p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 12px;">
            <p>Back 2 Health Admin Notification System</p>
            <p>Moyo Cl, Kampala, Uganda | Phone: 0758 478992</p>
          </div>
        </div>
      `,
    });

    console.log('✅ Appointment confirmation email sent to patient:', patientEmail);
    console.log('✅ Onboarding notification email sent to admin:', adminEmail);
    
    return {
      success: true,
      patientEmailId: patientEmail.data?.id,
      adminEmailId: adminEmail.data?.id,
    };
  } catch (error) {
    console.error('❌ Error sending appointment emails:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export async function sendContactFormNotification(contactData: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) {
  try {
    // Send notification to clinic admin
    const adminEmail = await resend.emails.send({
      from: 'Back 2 Health <onboarding@resend.dev>',
      to: ['viankamanzi5@gmail.com'],
      subject: 'New Contact Form Submission - Back 2 Health',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Back 2 Health Website</p>
          </div>
          
          <div style="padding: 30px; background: white;">
            <h2 style="color: #374151; margin-bottom: 20px;">New Contact Form Message</h2>
            
            <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22c55e;">
              <h3 style="color: #374151; margin-top: 0;">Contact Information:</h3>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Name:</strong> ${contactData.name}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Email:</strong> ${contactData.email}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Phone:</strong> ${contactData.phone}</p>
              <p style="margin: 5px 0; color: #6b7280;"><strong>Service Interest:</strong> ${contactData.service}</p>
            </div>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Message:</h3>
              <p style="margin: 5px 0; color: #6b7280; white-space: pre-wrap;">${contactData.message}</p>
            </div>
            
            <p style="color: #6b7280; line-height: 1.6;">
              This is an automated notification from the Back 2 Health website contact form.
            </p>
          </div>
          
          <div style="background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 12px;">
            <p>Back 2 Health Contact Form System</p>
            <p>Moyo Cl, Kampala, Uganda | Phone: 0758 478992</p>
          </div>
        </div>
      `,
    });

    console.log('✅ Contact form notification email sent to admin:', adminEmail);
    
    return {
      success: true,
      adminEmailId: adminEmail.data?.id,
    };
  } catch (error) {
    console.error('❌ Error sending contact form notification:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}