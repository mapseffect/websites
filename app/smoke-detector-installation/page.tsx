import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Check, Shield, Bell, Zap, Home, AlertTriangle, Battery, Wifi } from "lucide-react"

export const metadata = {
  title: "ABR Electric Smoke Detector Installation Collin County | Hardwired & Interconnected Systems",
  description:
    "Professional smoke detector installation in Collin County. Hardwired, interconnected alarm systems with battery backup. Code-compliant placement and smart smoke detectors. Call (214) 690-1941 for fire safety protection.",
}

export default function SmokeDetectorInstallationPage() {
  const services = [
    { icon: Zap, title: "Hardwired smoke detectors", description: "Reliable power from your home's electrical system" },
    { icon: Bell, title: "Interconnected alarm systems", description: "All alarms sound when one detects smoke" },
    { icon: AlertTriangle, title: "Combination smoke/CO detectors", description: "Dual protection in one unit" },
    { icon: Battery, title: "Battery backup systems", description: "Protection even during power outages" },
    { icon: Wifi, title: "Smart smoke detectors", description: "Mobile alerts and remote monitoring" },
    { icon: Home, title: "Code-compliant placement", description: "Proper positioning per local codes" },
    { icon: Shield, title: "System testing and certification", description: "Verified operation and documentation" },
    { icon: Check, title: "Maintenance and replacement", description: "Ongoing service and upgrades" },
  ]

  const codeRequirements = [
    "Bedroom and hallway placement",
    "Interconnected system required",
    "Battery backup mandatory",
    "10-year sealed battery units",
    "Professional installation",
    "Inspection and testing",
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-[#1a0a0a] to-[#2d0a0a] py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Smoke Detector Installation
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Professional smoke detector installation and hardwired smoke alarm systems for maximum fire safety
                  protection in Collin County.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#quote-form"
                    className="bg-[#22c55e] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors text-center"
                  >
                    Get Free Quote
                  </Link>
                  <a
                    href="tel:+12146901941"
                    className="border-2 border-[#22c55e] text-[#22c55e] px-8 py-4 rounded-lg font-semibold hover:bg-[#22c55e] hover:text-black transition-colors text-center"
                  >
                    Call: (214) 690-1941
                  </a>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/956cc6d8-ec23-4c52-a24b-277df30b3500/public"
                  alt="Smoke detector installation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About ABR Electric */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                Professional Smoke Detector Installation
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                ABR Electric is a veteran-owned electrical company serving Collin County with professional smoke
                detector installation services. Our licensed electricians specialize in hardwired smoke alarm systems
                that provide reliable fire protection for your home and family. We install interconnected smoke
                detectors that meet all local building codes and safety requirements, ensuring your home has the best
                possible fire detection system. With years of experience serving McKinney, Frisco, Plano, Allen, and
                surrounding communities, we understand the importance of properly installed and maintained smoke
                detection systems.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Our smoke detector installation service includes a comprehensive assessment of your home's layout to
                determine optimal detector placement, professional installation of hardwired units with battery backup,
                interconnection of all detectors so they all sound when one is triggered, and thorough testing to ensure
                proper operation. We work with the latest smart smoke detector technology that can send alerts to your
                phone and integrate with your home automation system. Whether you're building a new home, upgrading an
                older system, or need to bring your property up to current code requirements, ABR Electric provides
                expert smoke detector installation with upfront pricing and guaranteed workmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Smoke Detector Services */}
        <section className="py-16 bg-gradient-to-br from-[#0a1a0a] via-black to-[#1a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Smoke Detector Services</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => {
                  const Icon = service.icon
                  return (
                    <div
                      key={index}
                      className="bg-[#1a2332] rounded-lg p-6 border border-gray-800 hover:border-[#22c55e]/30 transition-all duration-300"
                    >
                      <Icon className="w-10 h-10 text-[#22c55e] mb-4" />
                      <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Code Requirements */}
        <section className="py-16 bg-gradient-to-br from-[#0a1a0a] via-black to-[#1a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Code Requirements</h2>
              <div className="bg-[#1a2332] rounded-lg p-8 border border-gray-800">
                <div className="grid md:grid-cols-2 gap-6">
                  {codeRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-1" />
                      <p className="text-gray-300 text-lg">{requirement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Life-Saving Fire Protection CTA */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="w-16 h-16 text-[#22c55e] mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Life-Saving Fire Protection</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional smoke detector installation for your family's safety and peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#quote-form"
                  className="bg-[#22c55e] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors"
                >
                  Schedule Installation
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
