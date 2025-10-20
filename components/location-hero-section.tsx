import QuoteForm from "@/components/quote-form"
import { Button } from "@/components/ui/button"

interface LocationHeroSectionProps {
  city: string
  county?: string
}

export default function LocationHeroSection({ city, county = "Collin County" }: LocationHeroSectionProps) {
  return (
    <section
      className="relative pt-32 pb-16 overflow-hidden"
      style={{
        background:
          "radial-gradient(60% 60% at 75% 20%, rgba(139, 15, 23, 0.35) 0%, transparent 100%), linear-gradient(180deg, #000 0%, #120303 50%, #000 100%)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-[2.625rem] font-bold text-white mb-4 leading-tight">
                ABR Electric of <span className="text-[#22c55e]">{city}</span>
                <br />
                <span className="block mt-2 text-xl md:text-2xl">Licensed Electricians Serving {city}, TX</span>
              </h1>
              <p className="text-gray-300 text-lg mt-4">
                Veteran-owned electrical contractor providing expert service to {city} and surrounding {county} areas.
              </p>
            </div>

            <div className="border-[3px] border-[#F5F5DC] rounded-lg p-6 max-w-xl">
              <p className="text-white text-center text-lg leading-relaxed">
                We live by a simple yet powerful motto:
                <br />
                <span className="font-bold">&ldquo;Do it right, make a positive memory, and have fun.&rdquo;</span>
              </p>
            </div>

            <div className="flex items-center justify-start gap-6 max-w-xl">
              <img
                src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/781dc659-56b3-4b47-4c68-b9b7c07d8c00/public"
                alt="ABR Electric Service Van"
                className="w-[200px] h-auto rounded-lg"
              />
              <img
                src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/37eb80aa-f733-4150-bfcc-93b30c863300/public"
                alt="Veteran Owned Business"
                className="h-[120px] w-[120px] bg-white/90 rounded-lg p-1"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e] hover:text-white bg-transparent text-base font-bold"
              >
                <a href="tel:+12146901941">Call Now: (214) 690-1941</a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#22c55e] hover:bg-[#22c55e] text-white text-base font-bold shadow-lg shadow-[#22c55e]/35"
              >
                <a href="#quote-form">Get Free Quote</a>
              </Button>
            </div>
          </div>

          {/* Right Column - Quote Form */}
          <div id="quote-form">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  )
}
