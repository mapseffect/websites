import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Check, Shield, Zap, Home, Cpu, Tv, Heart } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "ABR Electric Whole House Surge Protection Collin County | Panel-Mounted Surge Devices",
  description:
    "Professional whole-house surge protection installation in Collin County. Protect appliances, electronics, and HVAC systems from power surges. Panel-mounted surge devices and lightning protection. Call (214) 690-1941.",
}

export default function SurgeProtectionPage() {
  const services = [
    "Whole house surge protectors",
    "Panel-mounted surge devices",
    "Point-of-use protection",
    "Generator surge protection",
    "HVAC surge protection",
    "Smart home device protection",
    "Lightning protection systems",
    "Surge protection monitoring",
  ]

  const whatWeProtect = [
    { icon: Cpu, text: "Electronics and computers" },
    { icon: Home, text: "Kitchen appliances" },
    { icon: Zap, text: "HVAC systems" },
    { icon: Home, text: "Smart home devices" },
    { icon: Tv, text: "Entertainment systems" },
    { icon: Heart, text: "Medical equipment" },
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
                Whole House Surge Protection
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protect your valuable appliances and electrical systems from power surges with professional whole-house
                surge protection installation.
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
                src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/c22bf1c8-b178-4931-a997-95bb0334b100/public"
                alt="Whole house surge protection"
                width={1200}
                height={600}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Surge Protection Services */}
        <section className="py-16 bg-gradient-to-br from-[#0a1a0a] via-black to-[#1a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Surge Protection Services</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-3 bg-[#1a2332] p-4 rounded-lg">
                    <Shield className="text-[#22c55e] flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-300">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Protect Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">What We Protect</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whatWeProtect.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-center gap-4 bg-[#1a2332] p-6 rounded-lg">
                      <Check className="text-[#22c55e] flex-shrink-0" size={24} />
                      <div className="flex items-center gap-3">
                        <Icon className="text-gray-400" size={20} />
                        <p className="text-gray-300">{item.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* About ABR Electric Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                Why Choose ABR Electric for Surge Protection
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                ABR Electric is a veteran-owned electrical company based in McKinney, Texas, serving all of Collin
                County with professional whole-house surge protection installation. Our licensed electricians have
                extensive experience protecting homes and businesses from damaging power surges caused by lightning
                strikes, utility grid fluctuations, and large appliance cycling. We install high-quality panel-mounted
                surge protection devices that safeguard your entire electrical system, along with point-of-use surge
                protectors for sensitive electronics and equipment.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Power surges can destroy expensive appliances, electronics, HVAC systems, and smart home devices in an
                instant. Our whole-house surge protection systems provide the first line of defense at your electrical
                panel, preventing damaging voltage spikes from entering your home's wiring. We serve homeowners and
                businesses throughout McKinney, Frisco, Plano, Allen, Prosper, and surrounding areas with expert surge
                protection solutions. Our installations include comprehensive testing, warranty coverage, and ongoing
                support to ensure your valuable equipment stays protected. With upfront pricing and professional
                service, ABR Electric makes it easy to protect your investment in home electronics and appliances.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-black to-[#0a1a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Protect Your Investment</h2>
              <p className="text-xl text-gray-300 mb-8">
                Professional surge protection installation to safeguard your valuable electronics.
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
