import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Check } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric Dedicated Circuit Installation Collin County | High-Power Appliances",
  description:
    "Professional dedicated circuit installation for high-power appliances in Collin County. Kitchen appliances, HVAC, EV chargers, and more. Licensed electricians serving McKinney and surrounding areas.",
}

export default function DedicatedCircuitPage() {
  const whenYouNeed = [
    "Kitchen appliances (refrigerator, microwave)",
    "Laundry equipment (washer, dryer)",
    "HVAC systems",
    "Hot water heaters",
    "Garage door openers",
    "Home office equipment",
    "Workshop tools",
    "Pool equipment",
  ]

  const installationProcess = [
    "Load calculation and circuit planning",
    "Panel capacity assessment",
    "Wire routing and installation",
    "Breaker and outlet installation",
    "Testing and safety verification",
    "Code compliance inspection",
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-[#1a0a0a] to-[#2d0a0a] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Dedicated Circuit Installation
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional dedicated circuit installation for high-power appliances and equipment that require their
                own electrical circuit.
              </p>
              <Link
                href="/#quote-form"
                className="inline-block bg-[#22c55e] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Image
                src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/1da84b89-ee3b-4361-c377-addc5cdbe100/public"
                alt="Dedicated circuit installation"
                width={1200}
                height={600}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* When You Need Section */}
        <section className="py-16 bg-gradient-to-br from-[#0a1a0a] via-black to-[#1a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                When You Need Dedicated Circuits
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {whenYouNeed.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-[#1a2332] p-4 rounded-lg">
                    <div className="text-[#22c55e] mt-1">•</div>
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Our Installation Process</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {installationProcess.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-[#1a2332] p-4 rounded-lg">
                    <Check className="text-[#22c55e] flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-black to-[#0a1a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Safe Dedicated Circuit Installation</h2>
              <p className="text-xl text-gray-300 mb-8">
                Prevent overloads and ensure optimal performance with dedicated circuits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#quote-form"
                  className="bg-[#22c55e] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+12146901941"
                  className="border-2 border-[#22c55e] text-[#22c55e] px-8 py-4 rounded-lg font-semibold hover:bg-[#22c55e] hover:text-black transition-colors"
                >
                  Call: (214) 690-1941
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
