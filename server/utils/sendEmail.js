import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ name, email, subject, message }) => {
  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev', // ✅ no display name
      to: process.env.TO_EMAIL,
      subject: subject || 'New Contact Form Submission',
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("✅ Email sent:", response); // 🪵 Add this
    return response;
  } catch (err) {
    console.error("❌ Error sending email:", err); // 🪵 Log full error
    throw err;
  }
};


export default sendEmail;
