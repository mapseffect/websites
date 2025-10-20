import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

interface LocationCTASectionProps {
  city: string
}

export default function LocationCTASection({ city }: LocationCTASectionProps) {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-[#120303]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started in {city}?</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Contact ABR Electric today for fast, reliable electrical service in {city} and surrounding areas. Licensed,
          insured, and veteran-owned.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#22c55e] hover:bg-[#16a34a] text-white text-lg font-bold shadow-lg shadow-[#22c55e]/35"
          >
            <a href="tel:+12146901941">
              <Phone className="mr-2 h-5 w-5" />
              Call (214) 690-1941
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-white bg-transparent text-lg font-bold"
          >
            <a href="#quote-form">Get Free Quote</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
