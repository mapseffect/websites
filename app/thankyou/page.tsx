import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <CheckCircle className="w-20 h-20 text-[#22c55e] mx-auto" />

        <h1 className="text-4xl md:text-5xl font-bold text-white">Thank You!</h1>

        <p className="text-xl text-gray-300 leading-relaxed">
          We've received your quote request and will get back to you within 24 hours with your free quote.
        </p>

        <div className="bg-[#0f0f10] border border-white/10 rounded-lg p-6">
          <p className="text-white mb-4">Need immediate assistance?</p>
          <a
            href="tel:+12146901941"
            className="text-[#22c55e] text-2xl font-bold hover:text-[#16a34a] transition-colors"
          >
            (214) 690-1941
          </a>
        </div>

        <Button asChild size="lg" className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </main>
  )
}
