import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric Financing Options Collin County | Affordable Payment Plans",
  description:
    "ABR Electric offers flexible financing through Hearth. Get affordable monthly payment options with no dealer fees for your electrical projects in Collin County. Apply now for instant pre-qualification.",
}

export default function HearthPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-[#1a0a0a] to-[#2d0a0a] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Flexible Financing Options</h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                Make your electrical projects more affordable with convenient monthly payment plans
              </p>
              <p className="text-lg text-[#22c55e] font-semibold">
                No Dealer Fees • Quick Pre-Qualification • Flexible Terms
              </p>
            </div>
          </div>
        </section>

        {/* Financing Benefits */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="bg-[#22c55e] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-black">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">No Dealer Fees</h3>
                  <p className="text-gray-300">Keep more money in your pocket with zero dealer fees</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#22c55e] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-black">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Quick Approval</h3>
                  <p className="text-gray-300">Get pre-qualified in minutes with instant decisions</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#22c55e] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-black">💳</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Flexible Terms</h3>
                  <p className="text-gray-300">Choose payment plans that fit your budget</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hearth Financing Iframe */}
        <section className="pb-0 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white rounded-t-lg overflow-hidden" style={{ height: "100vh" }}>
                <iframe
                  src="https://app.gethearth.com/financing/45687/79409/prequalify?utm_campaign=45687&utm_content=zero_percent&utm_medium=contractor-website&utm_source=contractor&utm_term=7940"
                  style={{ width: "100%", height: "100%", border: "none" }}
                  title="Hearth Financing Application"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
