import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Contact API route called")

    // Parse request body
    const body = await request.json()
    console.log("[v0] Request body received:", { ...body, email: body.email ? "REDACTED" : undefined })

    // Check if Resend API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY is not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    // Initialize Resend inside the handler
    const resend = new Resend(process.env.RESEND_API_KEY)
    console.log("[v0] Resend client initialized")

    const { fullName, email, services, phone, message, preferredCommunication, referralSource, smsConsent } = body

    // Format services array into a string
    const servicesList = Array.isArray(services) ? services.join(", ") : services || "Not specified"

    // This is required because abrelectric.com domain is not verified in Resend yet
    const fromAddress = "ABR Electric <onboarding@resend.dev>"

    console.log("[v0] Preparing to send business notification email")

    // Send business notification email
    const businessEmailResult = await resend.emails.send({
      from: fromAddress,
      to: ["support@abrelectric.com", "mapseffect@gmail.com"],
      subject: "New Form Submission on abrelectric.com site",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
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
              <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Services</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${servicesList}</td>
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
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${referralSource || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">SMS Consent</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${smsConsent ? "Yes" : "No"}</td>
            </tr>
          </table>
          
          <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
            This email was sent from the ABR Electric contact form at abrelectric.com
          </p>
        </div>
      `,
    })

    console.log("[v0] Business email sent successfully:", businessEmailResult)

    console.log("[v0] Preparing to send customer confirmation email")

    // Send customer confirmation email
    const customerEmailResult = await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: "ABR Electric: We've Received Your Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22c55e; border-bottom: 2px solid #22c55e; padding-bottom: 10px;">
            Thank You for Contacting ABR Electric!
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Hi ${fullName},
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            We've received your request and one of our licensed electricians will be in touch with you shortly.
          </p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #22c55e; margin-top: 0;">Your Submission Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Services:</td>
                <td style="padding: 8px 0; color: #374151;">${servicesList}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Phone:</td>
                <td style="padding: 8px 0; color: #374151;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #6b7280;">Preferred Contact:</td>
                <td style="padding: 8px 0; color: #374151;">${preferredCommunication || "Not specified"}</td>
              </tr>
            </table>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            In the meantime, if you have any urgent questions, feel free to call us at 
            <strong style="color: #22c55e;">214-690-1941</strong>
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #374151;">
            Best regards,<br>
            <strong>The ABR Electric Team</strong>
          </p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          
          <p style="font-size: 14px; color: #6b7280; text-align: center;">
            ABR Electric | 1971 Univ Business Dr #106, McKinney, TX 75071<br>
            <a href="https://abrelectric.com" style="color: #22c55e; text-decoration: none;">abrelectric.com</a> | 
            <a href="tel:214-690-1941" style="color: #22c55e; text-decoration: none;">214-690-1941</a>
          </p>
        </div>
      `,
    })

    console.log("[v0] Customer confirmation email sent successfully:", customerEmailResult)

    return NextResponse.json({
      success: true,
      businessEmailId: businessEmailResult.data?.id,
      customerEmailId: customerEmailResult.data?.id,
    })
  } catch (error) {
    console.error("[v0] Error in contact API route:", error)

    // Log detailed error information
    if (error instanceof Error) {
      console.error("[v0] Error message:", error.message)
      console.error("[v0] Error stack:", error.stack)
    }

    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
