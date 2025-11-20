import { Resend } from "resend"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Log the API key (first few characters only for security)
    const apiKey = process.env.RESEND_API_KEY || ""
    console.log("API Key available:", apiKey ? "Yes (starts with " + apiKey.substring(0, 3) + "...)" : "No")

    // Initialize Resend
    const resend = new Resend(apiKey)

    // Try sending with the default sender
    const { data, error } = await resend.emails.send({
      from: "Shepherd Space Systems <onboarding@resend.dev>",
      to: ["shepherd.kruse@shepherdspacesystems.com"],
      subject: "Test Email from Default Sender",
      html: "<p>This is a test email using the default Resend sender.</p>",
    })

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({
      success: true,
      message: "Test email sent successfully!",
      data,
    })
  } catch (error) {
    console.error("Exception sending email:", error)
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
