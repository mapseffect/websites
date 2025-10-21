"use client"

import { useState, useEffect, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

interface QuoteFormProps {
  logo?: string
  cityName?: string
}

const services = [
  "EV CHARGING",
  "OUTLETS & SWITCHES",
  "ELECTRICAL PANEL",
  "LANDSCAPE LIGHTING",
  "GENERATOR",
  "DEDICATED CIRCUIT",
  "SURGE PROTECTOR",
  "LIGHTING and FIXTURES",
  "SMOKE DETECTORS",
  "OTHER",
]

const spamKeywords = [
  "seo",
  "guest post",
  "backlink",
  "link building",
  "virtual assistant",
  "marketing services",
  "increase traffic",
  "improve your ranking",
  "website optimization",
  "google ranking",
  "hire us",
  "offshore",
  "improve your website",
  "boost your sales",
  "lead generation service",
  "outsource",
  "digital marketing agency",
  "web design service",
  "contact our team",
  "schedule a call",
  "free consultation",
]

export default function QuoteForm({ logo, cityName }: QuoteFormProps) {
  const router = useRouter()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    services: [] as string[],
    phone: "",
    message: "",
    preferredCommunication: "",
    referralSource: "",
    smsConsent: false,
    company: "", // Honeypot field
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStartTime, setFormStartTime] = useState<number | null>(null)
  const [formStarted, setFormStarted] = useState(false)

  // Track form start
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (formStarted && !isSubmitting) {
        const progress = calculateProgress()
        if (window.gtag) {
          window.gtag("event", "form_abandon", {
            form_name: "quote_request",
            progress_percentage: progress,
          })
        }
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [formStarted, isSubmitting])

  const handleFormStart = () => {
    if (!formStarted) {
      setFormStarted(true)
      setFormStartTime(Date.now())
      if (window.gtag) {
        window.gtag("event", "form_start", {
          form_name: "quote_request",
        })
      }
    }
  }

  const calculateProgress = () => {
    let filled = 0
    const required = 3 // fullName, email, message
    if (formData.fullName.trim()) filled++
    if (formData.email.trim()) filled++
    if (formData.message.trim()) filled++
    return Math.round((filled / required) * 100)
  }

  const handleServiceToggle = (service: string) => {
    const newServices = formData.services.includes(service)
      ? formData.services.filter((s) => s !== service)
      : [...formData.services, service]

    setFormData({ ...formData, services: newServices })

    if (window.gtag) {
      window.gtag("event", "service_selected", {
        service_name: service,
        action: newServices.includes(service) ? "selected" : "deselected",
      })
    }
  }

  const handleReferralChange = (value: string) => {
    setFormData({ ...formData, referralSource: value })
    if (window.gtag) {
      window.gtag("event", "referral_source_selected", {
        source: value,
      })
    }
  }

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const containsSpam = (text: string) => {
    const lowerText = text.toLowerCase()
    return spamKeywords.some((keyword) => lowerText.includes(keyword))
  }

  const handleSubmit = async (e: FormEvent) => {
    // Honeypot check
    if (formData.company) {
      e.preventDefault()
      return
    }

    // Time-based validation
    if (formStartTime && Date.now() - formStartTime < 3000) {
      e.preventDefault()
      return
    }

    // Spam keyword detection
    if (containsSpam(formData.message)) {
      e.preventDefault()
      return
    }

    // Validation
    if (!formData.fullName.trim()) {
      e.preventDefault()
      toast({
        title: "Error",
        description: "Please enter your full name.",
        variant: "destructive",
      })
      return
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      e.preventDefault()
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    if (!formData.message.trim()) {
      e.preventDefault()
      toast({
        title: "Error",
        description: "Please enter a message.",
        variant: "destructive",
      })
      return
    }

    if (formData.preferredCommunication === "Text message" && !formData.smsConsent) {
      e.preventDefault()
      toast({
        title: "Error",
        description: "Please consent to receive SMS messages.",
        variant: "destructive",
      })
      return
    }

    // Track successful submission
    if (window.gtag) {
      window.gtag("event", "form_submit", {
        form_name: "quote_request",
      })
      window.gtag("event", "generate_lead", {
        value: 500,
        currency: "USD",
      })
    }

    // Allow native form submission to Web3Forms
    setIsSubmitting(true)
  }

  return (
    <div
      className="relative rounded-2xl p-8 shadow-2xl"
      style={{
        background: "rgba(0, 0, 0, 0.85)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 8px 32px rgba(220, 38, 38, 0.2), 0 0 0 1px rgba(255,255,255,0.08)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(220, 38, 38, 0.65), 0 0 0 1px rgba(255,255,255,0.08)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(220, 38, 38, 0.2), 0 0 0 1px rgba(255,255,255,0.08)"
      }}
    >
      <div className="text-center mb-6 pb-6 border-b border-white/10">
        <h3 className="text-[#22c55e] text-xl font-bold mb-2">Easy Quote Request</h3>
        <p className="text-white font-bold text-lg">5-Star Reviews ⭐ on Google & Yelp</p>
      </div>

      <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="access_key" value="812b622e-c9d7-49ce-b706-3985f6f6906f" />
        <input type="hidden" name="from_name" value="ABR Electric" />
        <input type="hidden" name="subject" value="New Lead from ABR Electric Website" />
        <input type="hidden" name="redirect" value="https://abrelectric.com/thankyou" />
        <input
          type="hidden"
          name="autoresponse"
          value="Thank you for submitting your request to ABR Electric. We appreciate the opportunity to serve you.&#10;&#10;This is an automated response to confirm that we have received your message. Our team will review your request and get back to you as soon as possible.&#10;&#10;Thank you for choosing ABR Electric.&#10;&#10;ABR Electric Team"
        />

<<<<<<< HEAD
        <form
          name="contact"
          // method="POST"
          // data-netlify="true"
          // data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          // className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
=======
        <input type="hidden" name="services" value={formData.services.join(", ")} />
        <input type="hidden" name="preferred_communication" value={formData.preferredCommunication} />
        <input type="hidden" name="referral_source" value={formData.referralSource} />
        <input type="hidden" name="sms_consent" value={formData.smsConsent ? "yes" : "no"} />
        <input type="hidden" name="city_name" value={cityName || ""} />
>>>>>>> 4e279ec132fb3c93fcd72cab9e468d482d7c95ba

        {/* Honeypot field for spam protection */}
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName" className="text-white mb-2 block">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              onFocus={handleFormStart}
              placeholder="Full Name"
              className="bg-white text-black border-[#e5e5e5] rounded-lg h-12 text-base"
              autoComplete="name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-white mb-2 block">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={handleFormStart}
              placeholder="Email"
              className="bg-white text-black border-[#e5e5e5] rounded-lg h-12 text-base"
              autoComplete="email"
              required
            />
          </div>
        </div>

        <div>
          <Label className="text-white mb-3 block">What service are you looking for?</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {services.map((service) => (
              <label
                key={service}
                className="flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-all"
                style={{
                  background: formData.services.includes(service) ? "rgba(30, 41, 59, 0.8)" : "rgba(30, 41, 59, 0.6)",
                  border: formData.services.includes(service)
                    ? "2px solid #22c55e"
                    : "1px solid rgba(71, 85, 105, 0.5)",
                }}
                onMouseEnter={(e) => {
                  if (!formData.services.includes(service)) {
                    e.currentTarget.style.background = "rgba(30, 41, 59, 0.9)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (!formData.services.includes(service)) {
                    e.currentTarget.style.background = "rgba(30, 41, 59, 0.6)"
                  }
                }}
              >
                <Checkbox
                  checked={formData.services.includes(service)}
                  onCheckedChange={() => handleServiceToggle(service)}
                  className="border-white data-[state=checked]:bg-[#22c55e] data-[state=checked]:border-[#22c55e]"
                />
                <span className="text-white text-sm">{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="phone" className="text-white mb-2 block">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            onFocus={handleFormStart}
            placeholder="+1 201-555-0123"
            className="bg-white text-black border-[#e5e5e5] rounded-lg h-12 text-base"
            autoComplete="tel"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-white mb-2 block">
            Message <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            onFocus={handleFormStart}
            placeholder="Tell us about your project..."
            className="bg-white text-black border-[#e5e5e5] rounded-lg min-h-[120px] text-base resize-none"
            required
          />
        </div>

        <div>
          <Label htmlFor="preferredCommunication" className="text-white mb-2 block">
            Preferred way of communication
          </Label>
          <Select
            value={formData.preferredCommunication}
            onValueChange={(value) => setFormData({ ...formData, preferredCommunication: value })}
          >
            <SelectTrigger className="bg-white text-black border-[#e5e5e5] rounded-lg h-12 text-base">
              <SelectValue placeholder="optional" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Email">Email</SelectItem>
              <SelectItem value="Phone call">Phone call</SelectItem>
              <SelectItem value="Text message">Text message</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="referralSource" className="text-white mb-2 block">
            How did you hear about us?
          </Label>
          <Select value={formData.referralSource} onValueChange={handleReferralChange}>
            <SelectTrigger className="bg-white text-black border-[#e5e5e5] rounded-lg h-12 text-base">
              <SelectValue placeholder="optional" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Google">Google</SelectItem>
              <SelectItem value="Yelp">Yelp</SelectItem>
              <SelectItem value="Facebook">Facebook</SelectItem>
              <SelectItem value="Nextdoor">Nextdoor</SelectItem>
              <SelectItem value="Referral">Referral</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="smsConsent"
            checked={formData.smsConsent}
            onCheckedChange={(checked) => setFormData({ ...formData, smsConsent: checked as boolean })}
            className="mt-1 border-white data-[state=checked]:bg-[#22c55e] data-[state=checked]:border-[#22c55e]"
          />
          <Label htmlFor="smsConsent" className="text-white text-sm leading-relaxed cursor-pointer">
            By checking this box you agree to receive SMS from ABR Electric. Reply Stop to opt out from text messages at
            any time
          </Label>
        </div>

        <div className="text-center text-xs text-[#a3a3a3] mb-4">
          <a href="/privacy_policy" className="hover:text-white transition-colors">
            our privacy policy
          </a>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="mx-auto block w-[70%] bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-base h-12 rounded-xl shadow-lg disabled:bg-[#6b7280]"
          style={{
            boxShadow: "0 4px 14px rgba(34, 197, 94, 0.35)",
          }}
        >
          {isSubmitting ? "Sending..." : '👉 "Get My Free Quote"'}
        </Button>
      </form>
    </div>
  )
}
