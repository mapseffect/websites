import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import type { Metadata } from "next"
import { Zap, FileCheck, Shield, Phone, ExternalLink, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Is Your Garage Door Opener on a Shared Circuit? | ABR Electric Blog",
  description:
    "Learn about electrical requirements for garage door openers, when you need permits, and why dedicated circuits matter for safety. Expert electrical advice from ABR Electric.",
  alternates: {
    canonical: "https://abrelectric.com/blog/is-your-garage-door-opener-on-a-shared-circuit",
  },
}

export default function GarageDoorCircuitBlogPost() {
  return (
    <>
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/garage-door-night.jpg" alt="Garage door at night" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 via-[#0a1628]/80 to-[#0a1628]" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#00ff9d] hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <div className="inline-block bg-[#00ff9d]/10 text-[#00ff9d] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Electrical Safety
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Is Your Garage Door Opener on a Shared Circuit?
            </h1>
            <p className="text-xl text-gray-300 mb-8 text-pretty max-w-3xl">
              Understanding electrical requirements, permits, and safety considerations for your garage door opener
              installation
            </p>
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>Published by ABR Electric</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>Electrical Safety</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-invert max-w-none mb-12">
              <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-[#00ff9d]" />
                  Understanding Garage Door Opener Circuits
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Many homeowners don't realize that their garage door opener might be sharing an electrical circuit
                  with other devices in their home. While this is common in older homes, it can lead to tripped
                  breakers, reduced performance, and potential safety hazards.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Modern garage door openers, especially those with smart features, LED lighting, and battery backup
                  systems, draw more power than older models. A dedicated circuit ensures your opener has the consistent
                  power it needs to operate safely and reliably.
                </p>
              </div>

              {/* Permit Requirements */}
              <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <FileCheck className="h-6 w-6 text-[#00ff9d]" />
                  When Do You Need a Permit?
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Understanding permit requirements can save you time, money, and potential legal issues. You may need a
                  permit if:
                </p>

                <div className="space-y-4 mb-6">
                  <Card className="bg-[#0a1628] border-gray-700 p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">New Electrical Wiring</h3>
                    <p className="text-gray-400">
                      You're installing a garage door opener with new electrical wiring or adding a dedicated circuit
                    </p>
                  </Card>

                  <Card className="bg-[#0a1628] border-gray-700 p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Structural Changes</h3>
                    <p className="text-gray-400">
                      You're changing the size of the door opening, which affects the structural framing
                    </p>
                  </Card>

                  <Card className="bg-[#0a1628] border-gray-700 p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Space Conversion</h3>
                    <p className="text-gray-400">
                      You're converting a space into a garage with a new door installation
                    </p>
                  </Card>

                  <Card className="bg-[#0a1628] border-gray-700 p-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Local Requirements</h3>
                    <p className="text-gray-400">
                      Your local jurisdiction has specific requirements for garage door installations
                    </p>
                  </Card>
                </div>

                <div className="bg-[#00ff9d]/10 border border-[#00ff9d]/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-[#00ff9d] mb-3">Best Practices:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-[#00ff9d] mt-1">✓</span>
                      <span>
                        Check with your local building department to be sure - requirements vary by city and county
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#00ff9d] mt-1">✓</span>
                      <span>
                        If you're hiring a professional installer, they often know local requirements and can advise you
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#00ff9d] mt-1">✓</span>
                      <span>Some homeowners associations (HOAs) may also have rules about garage door changes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#00ff9d] mt-1">✓</span>
                      <span>
                        For a simple door replacement without structural or electrical changes, you can usually proceed
                        without a permit
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-300 leading-relaxed mt-6">
                  A quick call to your local building department in McKinney, Texas can give you peace of mind and
                  ensure you're in compliance with all regulations.
                </p>
              </div>

              {/* Dedicated Circuits and Safety */}
              <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-[#00ff9d]" />
                  Dedicated Lines and Safety
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Installing a dedicated circuit for your garage door opener isn't just about convenience—it's about
                  safety. A dedicated 20-amp circuit ensures your opener has consistent power without competing with
                  other devices, reducing the risk of overheating, electrical fires, and premature equipment failure.
                </p>

                <div className="bg-[#0a1628] border border-[#00ff9d]/30 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Benefits of a Dedicated Circuit:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-[#00ff9d] mt-0.5 flex-shrink-0" />
                      <span>Prevents circuit overloads and tripped breakers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-[#00ff9d] mt-0.5 flex-shrink-0" />
                      <span>Ensures consistent power for smart features and battery backup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-[#00ff9d] mt-0.5 flex-shrink-0" />
                      <span>Reduces wear and tear on your garage door opener</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-[#00ff9d] mt-0.5 flex-shrink-0" />
                      <span>Meets modern electrical code requirements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Zap className="h-5 w-5 text-[#00ff9d] mt-0.5 flex-shrink-0" />
                      <span>Improves overall home electrical safety</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Whether you need electrical work for your garage door opener or the door mechanism itself needs
                  attention, working with qualified professionals ensures the job is done safely and correctly.
                </p>

                {/* Link to Ranger Garage Door */}
                <div className="bg-gradient-to-br from-[#00ff9d]/10 to-[#00ff9d]/5 border border-[#00ff9d]/30 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#00ff9d]/20 p-3 rounded-lg">
                      <ExternalLink className="h-6 w-6 text-[#00ff9d]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">Need Professional Garage Door Service?</h3>
                      <p className="text-gray-300 mb-4">
                        For garage door installation, repair, and maintenance, consider working with experienced
                        professionals who understand both the mechanical and electrical aspects of garage door systems.
                      </p>
                      <a
                        href="https://rangergaragedoor.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#00ff9d] hover:text-white transition-colors font-semibold group"
                      >
                        <span>Garage Door Repair Experts</span>
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-sm text-gray-400 mb-2">
                          <strong className="text-white">Ranger Garage Door Repair</strong> - Veteran-owned company
                          based in Houston, TX
                        </p>
                        <p className="text-sm text-gray-400 mb-3">
                          For 15+ years, Ranger Garage Door Repair has been the name Houston homeowners and businesses
                          trust for expert garage door and gate installation, repair, and dependable service.
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <span className="text-[#00ff9d] font-semibold">Same-Day & 24/7 Emergency Service</span>
                          <a
                            href="tel:2817672482"
                            className="inline-flex items-center gap-2 text-white hover:text-[#00ff9d] transition-colors"
                          >
                            <Phone className="h-4 w-4" />
                            (281) 767-2482
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#00ff9d]/10 to-[#00ff9d]/5 border border-[#00ff9d]/30 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Need Electrical Work for Your Garage?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                ABR Electric specializes in dedicated circuit installation, garage electrical upgrades, and ensuring
                your home's electrical system meets all safety codes. Licensed, insured, and ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#00ff9d] text-[#0a1628] hover:bg-[#00ff9d]/90">
                  <Link href="/contactus">Get a Free Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#00ff9d] text-[#00ff9d] hover:bg-[#00ff9d]/10 bg-transparent"
                >
                  <Link href="/dedicated-circuit-installation">Learn About Dedicated Circuits</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#1a2332]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Related Electrical Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-[#0a1628] border-gray-700 p-6 hover:border-[#00ff9d]/50 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">
                  <Link href="/dedicated-circuit-installation" className="hover:text-[#00ff9d] transition-colors">
                    Dedicated Circuit Installation
                  </Link>
                </h3>
                <p className="text-gray-400 text-sm">
                  Professional installation of dedicated circuits for garage door openers and other high-power
                  appliances.
                </p>
              </Card>

              <Card className="bg-[#0a1628] border-gray-700 p-6 hover:border-[#00ff9d]/50 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">
                  <Link href="/breaker-box-panel-upgrades" className="hover:text-[#00ff9d] transition-colors">
                    Electrical Panel Upgrades
                  </Link>
                </h3>
                <p className="text-gray-400 text-sm">
                  Upgrade your electrical panel to support modern appliances and additional circuits safely.
                </p>
              </Card>

              <Card className="bg-[#0a1628] border-gray-700 p-6 hover:border-[#00ff9d]/50 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">
                  <Link href="/outlet-replacement-and-upgrades" className="hover:text-[#00ff9d] transition-colors">
                    Outlet Installation
                  </Link>
                </h3>
                <p className="text-gray-400 text-sm">
                  Add new outlets in your garage for tools, EV chargers, and other equipment.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
