import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] API route called")

    // Parse request body
    const body = await request.json()
    console.log("[v0] Request body received:", Object.keys(body))

    const { fullName, email, service, phone, message, preferredCommunication, hearAboutUs, smsOptIn } = body

    // Validate required fields
    if (!fullName || !email || !phone) {
      console.log("[v0] Missing required fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check for API key
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.log("[v0] RESEND_API_KEY not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const resend = new Resend(apiKey)
    console.log("[v0] Resend client initialized")

    // Format service list
    const serviceList = Array.isArray(service) ? service.join(", ") : service

    // Create HTML email content
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #22c55e;">New Form Submission from abrelectric.com</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #f3f4f6;">
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Full Name</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${email}</td>
          </tr>
          <tr style="background-color: #f3f4f6;">
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Phone</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Service</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${serviceList || "Not specified"}</td>
          </tr>
          <tr style="background-color: #f3f4f6;">
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Message</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${message || "No message provided"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Preferred Communication</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${preferredCommunication || "Not specified"}</td>
          </tr>
          <tr style="background-color: #f3f4f6;">
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">How They Heard About Us</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${hearAboutUs || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">SMS Opt-in</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${smsOptIn ? "Yes" : "No"}</td>
          </tr>
        </table>
      </div>
    `

    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #22c55e;">Thank You for Contacting ABR Electric!</h2>
        <p>Hi ${fullName},</p>
        <p>We've received your request and will get back to you shortly. Here's a copy of what you submitted:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #f3f4f6;">
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Service</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${serviceList || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Phone</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${phone}</td>
          </tr>
          <tr style="background-color: #f3f4f6;">
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Message</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${message || "No message provided"}</td>
          </tr>
        </table>
        <p style="margin-top: 20px;">If you have any urgent questions, feel free to call us at <strong>214-690-1941</strong>.</p>
        <p>Best regards,<br>ABR Electric Team</p>
      </div>
    `

    // Send business notification emails
    console.log("[v0] Sending business notification emails...")
    const businessEmails = await Promise.all([
      resend.emails.send({
        from: "ABR Electric <onboarding@resend.dev>",
        to: "support@abrelectric.com",
        subject: "New Form Submission on abrelectric.com",
        html: businessEmailHtml,
      }),
      resend.emails.send({
        from: "ABR Electric <onboarding@resend.dev>",
        to: "mapseffect@gmail.com",
        subject: "New Form Submission on abrelectric.com",
        html: businessEmailHtml,
      }),
    ])

    console.log(
      "[v0] Business emails sent:",
      businessEmails.map((e) => e.data?.id),
    )

    // Send customer confirmation email
    console.log("[v0] Sending customer confirmation email...")
    const customerEmail = await resend.emails.send({
      from: "ABR Electric <onboarding@resend.dev>",
      to: email,
      subject: "ABR Electric: We've Received Your Request",
      html: customerEmailHtml,
    })

    console.log("[v0] Customer email sent:", customerEmail.data?.id)

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
      emailIds: [...businessEmails.map((e) => e.data?.id), customerEmail.data?.id],
    })
  } catch (error) {
    console.error("[v0] Email error:", error)
    return NextResponse.json(
      {
        error: "Failed to send emails",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
