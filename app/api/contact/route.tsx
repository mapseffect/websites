import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error("[v0] RESEND_API_KEY is not configured")
      return NextResponse.json({ error: "Email service is not configured" }, { status: 500 })
    }

    const resend = new Resend(resendApiKey)

    const body = await request.json()
    const {
      fullName,
      email,
      service,
      phone,
      message,
      preferredCommunication,
      hearAboutUs,
      panelInGarage,
      atticAccess,
      panelImage,
      smsOptIn,
    } = body

    // Send notification email to business
    const businessEmail = await resend.emails.send({
      from: "ABR Electric <onboarding@resend.dev>",
      to: ["support@abrelectric.com", "mapseffect@gmail.com"],
      subject: "New Form Submission on abrelectric.com site",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22c55e;">New Contact Form Submission</h2>
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
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${service || "Not specified"}</td>
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
            ${
              panelInGarage
                ? `
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Panel in Garage</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${panelInGarage}</td>
            </tr>
            `
                : ""
            }
            ${
              atticAccess
                ? `
            <tr style="background-color: #f3f4f6;">
              <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Attic Access</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${atticAccess}</td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">SMS Opt-In</td>
              <td style="padding: 12px; border: 1px solid #e5e7eb;">${smsOptIn ? "Yes" : "No"}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
            Submitted on ${new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })}
          </p>
        </div>
      `,
      ...(panelImage && {
        attachments: [
          {
            filename: "panel-image.jpg",
            content: panelImage,
          },
        ],
      }),
    })

    // Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: "ABR Electric <onboarding@resend.dev>",
      to: email,
      subject: "ABR Electric: We've Received Your Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22c55e;">Thank You for Contacting ABR Electric!</h2>
          <p style="font-size: 16px; color: #374151;">
            Hi ${fullName},
          </p>
          <p style="font-size: 16px; color: #374151;">
            We've received your request and one of our licensed electricians will be in touch with you shortly.
          </p>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #111827; margin-top: 0;">Your Submission Details:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Service:</td>
                <td style="padding: 8px 0; color: #111827;">${service || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0; color: #111827;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280; font-weight: bold;">Preferred Contact:</td>
                <td style="padding: 8px 0; color: #111827;">${preferredCommunication || "Not specified"}</td>
              </tr>
            </table>
          </div>
          <p style="font-size: 16px; color: #374151;">
            If you have any urgent questions, feel free to call us at <strong style="color: #22c55e;">214-690-1941</strong>.
          </p>
          <p style="font-size: 14px; color: #6b7280; margin-top: 30px;">
            Best regards,<br>
            <strong>ABR Electric Team</strong><br>
            Licensed Electricians in Collin County, TX
          </p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      businessEmailId: businessEmail.data?.id,
      customerEmailId: customerEmail.data?.id,
    })
  } catch (error) {
    console.error("[v0] Error sending emails:", error)
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 })
  }
}
