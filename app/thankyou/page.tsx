import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Thank You - ABR Electric | Quote Request Received",
  description:
    "Thank you for contacting ABR Electric. We've received your quote request and will respond within 24 hours. For immediate assistance, call (214) 690-1941.",
  alternates: {
    canonical: "https://abrelectric.com/thankyou",
  },
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center space-y-6">
          <CheckCircle className="w-20 h-20 text-[#22c55e] mx-auto" />

          <h1 className="text-4xl md:text-5xl font-bold text-white">Thank You!</h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            We've received your quote request and will get back to you within 24 hours with your free quote.
          </p>
        </div>

        <div className="bg-[#0f0f10] border border-white/10 rounded-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white text-center mb-6">What Happens Next?</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Quick Response</h3>
                <p className="text-gray-400">
                  Our team will review your request and contact you within 24 hours to discuss your electrical needs and
                  provide a detailed quote.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Free Consultation</h3>
                <p className="text-gray-400">
                  We'll schedule a convenient time to assess your project and answer any questions you may have about
                  our electrical services.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-white font-semibold mb-1">Professional Service</h3>
                <p className="text-gray-400">
                  Our licensed electricians serve all of Collin County including McKinney, Frisco, Plano, Allen,
                  Prosper, and surrounding areas with expert electrical solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0f0f10] border border-white/10 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">About ABR Electric</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            ABR Electric is a veteran-owned electrical company proudly serving Collin County, Texas. We specialize in
            residential and commercial electrical services including panel upgrades, EV charger installation, generator
            installation, lighting, and emergency electrical repairs. Our team of licensed electricians is committed to
            providing safe, reliable, and code-compliant electrical work with upfront pricing and exceptional customer
            service.
          </p>
          <p className="text-gray-300 leading-relaxed">
            As a locally owned business based in McKinney, we understand the unique electrical needs of North Texas
            homes and businesses. We're available for same-day service and emergency calls, and we stand behind our work
            with comprehensive warranties. Whether you need a simple outlet replacement or a complete electrical system
            upgrade, ABR Electric delivers professional results you can trust.
          </p>
        </div>

        <div className="bg-[#0f0f10] border border-white/10 rounded-lg p-6 text-center">
          <p className="text-white mb-4 text-lg">Need immediate assistance?</p>
          <a
            href="tel:+12146901941"
            className="text-[#22c55e] text-2xl font-bold hover:text-[#16a34a] transition-colors"
          >
            (214) 690-1941
          </a>
          <p className="text-gray-400 mt-2">Available for emergency electrical services</p>
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
