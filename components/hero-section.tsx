import QuoteForm from "@/components/quote-form"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
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
                ABR Electric | McKinney Electricians
                <br />
                <span className="block mt-2">
                  Serving <span className="text-[#22c55e]">Allen, Frisco & Plano</span>
                </span>
              </h1>
            </div>

            <div className="hidden md:block border-[3px] border-[#F5F5DC] rounded-lg p-8 max-w-xl mb-12">
              <p className="text-white text-center text-lg leading-relaxed">
                We live by a simple yet powerful motto:
                <br />
                <span className="font-bold">&ldquo;Do it right, make a positive memory, and have fun.&rdquo;</span>
              </p>
            </div>

            <div className="hidden md:block space-y-6 mb-12">
              <div className="grid grid-cols-3 gap-4 max-w-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#22c55e] mb-2">5★</div>
                  <div className="text-sm text-white/80">Google Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#22c55e] mb-2">5★</div>
                  <div className="text-sm text-white/80">Yelp Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#22c55e] mb-2">5★</div>
                  <div className="text-sm text-white/80">Nextdoor Rating</div>
                </div>
              </div>
            </div>

            <div className="hidden md:block space-y-4 mb-12 max-w-xl">
              <div className="flex items-start gap-3">
                <div className="text-[#22c55e] text-xl mt-1">✓</div>
                <div className="text-white">
                  <span className="font-semibold">Licensed & Insured</span> - Fully certified electricians
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#22c55e] text-xl mt-1">✓</div>
                <div className="text-white">
                  <span className="font-semibold">Veteran Owned</span> - Proudly serving our community
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#22c55e] text-xl mt-1">✓</div>
                <div className="text-white">
                  <span className="font-semibold">Same-Day Service</span> - Fast response times
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-[#22c55e] text-xl mt-1">✓</div>
                <div className="text-white">
                  <span className="font-semibold">Upfront Pricing</span> - No hidden fees or surprises
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-start gap-6 max-w-xl mb-12">
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
