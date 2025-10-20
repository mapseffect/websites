import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    const {
      fullName,
      email,
      services,
      phone,
      message,
      preferredCommunication,
      referralSource,
      smsConsent,
      panelInGarage,
      atticAccess,
      panelImage,
    } = formData

    // Format services (could be array or string)
    const serviceText = Array.isArray(services) ? services.join(", ") : services || "Not specified"

    // 1. Send notification to BOTH business emails
    await resend.emails.send({
      from: "support@abrelectric.com",
      to: ["support@abrelectric.com", "mapseffect@gmail.com"],
      subject: "New Form Submission on abrelectric.com site",
      html: `
        <p>You have a new lead from ABR Electric Home Page:</p>
        <br>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Full Name</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">What service are you looking for?</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${serviceText}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${phone || "Not provided"}</td>
          </tr>
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Message</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${message}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Preferred way of communication</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${preferredCommunication || "Not specified"}</td>
          </tr>
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">How did you hear about us?</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${referralSource || "Not specified"}</td>
          </tr>
          ${
            panelInGarage
              ? `
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Is your electrical panel in the garage?</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${panelInGarage}</td>
          </tr>
          `
              : ""
          }
          ${
            atticAccess
              ? `
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Is there attic access directly over the garage?</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${atticAccess}</td>
          </tr>
          `
              : ""
          }
          ${
            panelImage
              ? `
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Panel Image</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Image attached</td>
          </tr>
          `
              : ""
          }
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">SMS Opt-in</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${smsConsent ? "✓ Yes" : "No"}</td>
          </tr>
        </table>
      `,
      attachments: panelImage
        ? [
            {
              filename: "electrical-panel.jpg",
              content: panelImage,
            },
          ]
        : [],
    })

    // 2. Send confirmation to customer
    await resend.emails.send({
      from: "support@abrelectric.com",
      to: email,
      subject: "ABR Electric: We've Received Your Request",
      html: `
        <p>Thank you for submitting your request to ABR Electric. We appreciate the opportunity to serve you.</p>
        <br>
        <p>Please note: This is an automated response to confirm that we have received your message. Our team will review your request and get back to you as soon as possible.</p>
        <br>
        <p>Thank you for choosing ABR Electric.</p>
        <br>
        <p><strong>ABR Electric Team</strong></p>
        <br>
        <hr style="border: 1px solid #ddd; margin: 20px 0;">
        <br>
        <p><strong>YOUR SUBMISSION:</strong></p>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px; margin-top: 10px;">
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Full Name</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">What service are you looking for?</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${serviceText}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${phone || "Not provided"}</td>
          </tr>
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Message</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${message}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Preferred way of communication</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${preferredCommunication || "Not specified"}</td>
          </tr>
          <tr style="background-color: #f5f5f5;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">How did you hear about us?</td>
            <td style="padding: 12px; border: 1px solid #ddd;">${referralSource || "Not specified"}</td>
          </tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Email error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
