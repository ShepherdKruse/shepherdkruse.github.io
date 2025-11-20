"use server"

import { Resend } from "resend"

// Initialize Resend with your API key
// You'll need to add RESEND_API_KEY to your environment variables
const resend = new Resend(process.env.RESEND_API_KEY || "")

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = (formData.get("company") as string) || "Not provided"
    const interest = formData.get("interest") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !interest || !message) {
      return {
        success: false,
        message: "Please fill in all required fields",
      }
    }

    // Create email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Shepherd Space Systems <onboarding@resend.dev>", // Keep this as is for now
      to: ["shepherd.kruse@shepherdspacesystems.com"], // Updated recipient email
      subject: `New Contact Form Submission: ${interest}`,
      html: emailContent,
      reply_to: email,
    })

    if (error) {
      console.error("Error sending email:", error)
      throw new Error("Failed to send email")
    }

    return {
      success: true,
      message: "Your message has been sent successfully!",
    }
  } catch (error) {
    console.error("Error in contact form submission:", error)

    // Provide a more helpful error message
    return {
      success: false,
      message:
        "We couldn't send your message. Please try again or contact us directly at shepherd.kruse@shepherdspacesystems.com",
    }
  }
}
