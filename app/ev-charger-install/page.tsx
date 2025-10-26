import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceAreasSection from "@/components/service-areas-section"
import Link from "next/link"
import { CheckCircle, Zap } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export const metadata = {
  title: "ABR Electric EV Charger Installation Collin County | Tesla Certified",
  description:
    "Professional EV charger installation in Collin County. Tesla-certified electricians for Level 2 charger setup, dedicated circuits, and smart charger configuration. Call (214) 690-1941 for expert EV charging solutions.",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do I need a permit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, and ABR Electric takes care of it for you. We manage all city permits, so your install is 100% legal, inspected, and stress-free.",
          },
        },
        {
          "@type": "Question",
          name: "How long does installation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most installs are done in a single visit. Permits can take 2–5 days depending on the city.",
          },
        },
        {
          "@type": "Question",
          name: "Can you install Tesla / Rivian / Lucid chargers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we install all Level 2 EVSE equipment and dedicated circuits — including the ChargePoint HomeFlex Level 2 EV Charger.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to install an EV charger in my garage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Installation costs typically range from $800-$1,500, but the final price depends on several factors: Depending on the actual distance from the panel and access, cost may vary. Each city has its own permitting costs and inspection requirements that would affect the total cost of the project. We highly recommend following the city's guidelines for electrical permits and inspections. Contact us for a free, detailed quote specific to your installation needs.",
          },
        },
      ],
    }),
  },
}

export default function EVChargerInstallPage() {
  const benefits = [
    "Tesla-certified installation expertise",
    "Level 2 charger installation (240V)",
    "Dedicated circuit and panel upgrades",
    "Indoor and outdoor installations",
    "Smart charger setup and configuration",
    "Permit handling and code compliance",
  ]

  const chargerTypes = [
    "Tesla Wall Connector",
    "ChargePoint Home Flex",
    "JuiceBox Pro Series",
    "Grizzl-E EV Charger",
    "ClipperCreek HCS Series",
    "Emporia Vue Smart Charger",
    "Universal J1772 chargers",
    "240V NEMA outlets",
  ]

  const installationProcess = [
    "Electrical panel assessment",
    "Load calculation and permits",
    "240V circuit installation",
    "Charger mounting and wiring",
    "Testing and commissioning",
    "Smart features setup",
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
                <div className="inline-flex items-center gap-2 bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-full px-4 py-2 mb-6">
                  <Zap className="w-4 h-4 text-[#22c55e]" />
                  <span className="text-[#22c55e] text-sm font-medium">Official Tesla Expertise</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Certified Tesla Installers
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Professional EV charger installation for Tesla and all electric vehicles. Expert setup with official
                  Tesla expertise — installed the right way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#quote-form"
                    className="bg-[#22c55e] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Get Free Quote
                  </Link>
                  <a
                    href="tel:+12146901941"
                    className="border-2 border-[#22c55e] text-[#22c55e] px-8 py-4 rounded-lg font-semibold hover:bg-[#22c55e] hover:text-black transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Call: (214) 690-1941
                  </a>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px]">
                <Image
                  src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/ba079863-ae0a-4264-eb2b-c58fafc02c00/public"
                  alt="Tesla EV Charger Installation"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Why Choose ABR Electric for EV Charger Installation?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-[#1a2332] p-6 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Charger Types Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                EV Charger Types We Install
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {chargerTypes.map((charger, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#1a2332] p-4 rounded-lg border border-[#22c55e]/20 hover:border-[#22c55e]/50 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{charger}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-16 bg-gradient-to-br from-black via-[#0a0a1a] to-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Installation Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {installationProcess.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-[#0f0f10]/80 backdrop-blur-sm border border-white/10 p-6 rounded-lg"
                  >
                    <CheckCircle className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-1" />
                    <p className="text-gray-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Parallax Background Section */}
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "url('https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/35c25d94-022b-4da2-05c2-5157f5ad4d00/public')",
            }}
          />
          <div className="absolute inset-0 bg-black/80" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Professional Installation You Can Trust
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Our certified electricians ensure your EV charger is installed safely, efficiently, and up to code.
                    We handle everything from permits to final testing.
                  </p>
                  <Link
                    href="/#quote-form"
                    className="bg-[#22c55e] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors inline-flex items-center gap-2"
                  >
                    Schedule Installation
                  </Link>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/45b16e15-a5b5-417c-ab4c-2b4d0bd39800/public"
                    alt="EV Charger Installation"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Process Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Fast & Clear: Our 3-Step Process
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="bg-[#22c55e] text-black font-bold text-3xl w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    1
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4">Gather Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We gather details about your vehicle, preferred charger brand, and electrical panel location, then
                    perform an on-site inspection to determine the best installation plan.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#22c55e] text-black font-bold text-3xl w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    2
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4">Professional Installation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    ABR Electric handles the full setup—running wiring, managing permits, and ensuring everything meets
                    code.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#22c55e] text-black font-bold text-3xl w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    3
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4">Testing & Approval</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Once installed, we thoroughly test your charger and confirm it's ready to power your vehicle
                    reliably.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-white text-xl mb-6">Ready to get started?</p>
                <Link
                  href="/#quote-form"
                  className="bg-[#22c55e] text-black px-10 py-4 rounded-lg font-semibold text-lg hover:bg-[#16a34a] transition-colors inline-flex items-center gap-2"
                >
                  Get a FREE Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 text-lg">Get answers to common EV charger installation questions</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="bg-[#1a2332] border border-[#22c55e]/20 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    Do I need a permit?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Yes, and ABR Electric takes care of it for you. We manage all city permits, so your install is 100%
                    legal, inspected, and stress-free.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#1a2332] border border-[#22c55e]/20 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    How long does installation take?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Most installs are done in a single visit. Permits can take 2–5 days depending on the city.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#1a2332] border border-[#22c55e]/20 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    Can you install Tesla / Rivian / Lucid chargers?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    Yes, we install all Level 2 EVSE equipment and dedicated circuits — including the ChargePoint
                    HomeFlex Level 2 EV Charger.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#1a2332] border border-[#22c55e]/20 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    How much does it cost to install an EV charger in my garage?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    <div className="space-y-3">
                      <p>
                        Installation costs typically range from $800-$1,500, but the final price depends on several
                        factors:
                      </p>
                      <p className="font-semibold">Please Note:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Depending on the actual distance from the panel and access, cost may vary</li>
                        <li>
                          Each city has its own permitting costs and inspection requirements that would affect the total
                          cost of the project
                        </li>
                        <li>
                          We highly recommend following the city's guidelines for electrical permits and inspections
                        </li>
                      </ul>
                      <p>Contact us for a free, detailed quote specific to your installation needs.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* ChargePoint Certification Section */}
        <section className="py-16 bg-black border-t border-[#22c55e]/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#1a2332] to-[#0f1419] border border-[#22c55e]/30 rounded-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="bg-[#22c55e]/10 border-2 border-[#22c55e] rounded-full p-6">
                      <CheckCircle className="w-16 h-16 text-[#22c55e]" />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ChargePoint Certified Installers</h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      ABR Electric is an official{" "}
                      <span className="text-[#22c55e] font-semibold">ChargePoint Certified Installer</span>, ensuring
                      your ChargePoint Home Flex and other EV charging systems are installed to the highest industry
                      standards.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      Our certification means you get expert installation backed by ChargePoint's rigorous training
                      program, giving you peace of mind that your charging station is installed safely, efficiently, and
                      ready to power your electric vehicle for years to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-black to-[#0a1a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Install Your EV Charger?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free quote today and join the electric vehicle revolution with professional installation from ABR
                Electric.
              </p>
              <Link
                href="/#quote-form"
                className="bg-[#22c55e] text-black px-10 py-5 rounded-lg font-semibold text-lg hover:bg-[#16a34a] transition-colors inline-flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <ServiceAreasSection />
      </main>
      <Footer />
    </>
  )
}
