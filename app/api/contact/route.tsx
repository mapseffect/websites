import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] API route called")

    // Parse request body
    const body = await request.json()
    console.log("[v0] Request body:", JSON.stringify(body, null, 2))

    const { fullName, email, services, phone, message, preferredCommunication, referralSource, smsConsent } = body

    // Check if API key exists
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("[v0] RESEND_API_KEY not found in environment variables")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    console.log("[v0] Initializing Resend client")
    const resend = new Resend(apiKey)

    // Format services for email
    const servicesList = Array.isArray(services) ? services.join(", ") : services

    // Create email HTML for business notification
    const businessEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #22c55e;">New Form Submission on abrelectric.com</h2>
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
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${phone || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Services</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${servicesList || "Not specified"}</td>
          </tr>
          <tr style="background-color: #f3f4f6;">
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Message</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${message}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Preferred Communication</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${preferredCommunication || "Not specified"}</td>
          </tr>
          <tr style="background-color: #f3f4f6;">
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">How They Heard About Us</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${referralSource || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">SMS Consent</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${smsConsent ? "Yes" : "No"}</td>
          </tr>
        </table>
      </div>
    `

    // Create customer confirmation email
    const customerEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #22c55e;">Thank You for Contacting ABR Electric!</h2>
        <p>Hi ${fullName},</p>
        <p>We've received your request and will get back to you within 24 hours.</p>
        <h3 style="color: #1f2937; margin-top: 30px;">Your Submission Details:</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="background-color: #f3f4f6;">
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Services Requested</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${servicesList || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Message</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${message}</td>
          </tr>
        </table>
        <p style="margin-top: 30px;">If you have any urgent questions, feel free to call us at <strong>214-690-1941</strong>.</p>
        <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
          Best regards,<br/>
          ABR Electric Team<br/>
          1971 Univ Business Dr #106, McKinney, TX 75071
        </p>
      </div>
    `

    console.log("[v0] Sending emails via Resend")

    // Send both emails
    const [businessEmail, customerEmail] = await Promise.all([
      // Business notification email
      resend.emails.send({
        from: "ABR Electric <onboarding@resend.dev>",
        to: ["support@abrelectric.com", "mapseffect@gmail.com"],
        subject: "New Form Submission on abrelectric.com site",
        html: businessEmailHtml,
      }),
      // Customer confirmation email
      resend.emails.send({
        from: "ABR Electric <onboarding@resend.dev>",
        to: email,
        subject: "ABR Electric: We've Received Your Request",
        html: customerEmailHtml,
      }),
    ])

    console.log("[v0] Business email result:", businessEmail)
    console.log("[v0] Customer email result:", customerEmail)

    return NextResponse.json({
      success: true,
      businessEmailId: businessEmail.data?.id,
      customerEmailId: customerEmail.data?.id,
    })
  } catch (error) {
    console.error("[v0] Error in API route:", error)
    return NextResponse.json(
      {
        error: "Failed to send emails",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
