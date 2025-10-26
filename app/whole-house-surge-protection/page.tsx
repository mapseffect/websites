import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Check, Shield, Zap, Home, Cpu, Tv, Heart } from "lucide-react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric Whole House Surge Protection Collin County | Panel-Mounted Surge Devices",
  description:
    "Professional whole-house surge protection installation in Collin County. Protect appliances, electronics, and HVAC systems from power surges. Panel-mounted surge devices and lightning protection. Call (214) 690-1941.",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does whole house surge protection work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A whole-house surge protector installs at your electrical panel and diverts excess voltage to ground before it enters your home's wiring. It protects against surges from lightning strikes, utility grid fluctuations, and large appliances cycling on and off.",
          },
        },
        {
          "@type": "Question",
          name: "Will a surge protector protect against lightning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Whole-house surge protectors provide significant protection against lightning-induced surges, but no device can guarantee 100% protection from a direct lightning strike. We recommend combining whole-house protection with point-of-use surge protectors for sensitive electronics.",
          },
        },
        {
          "@type": "Question",
          name: "How much does whole house surge protection cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional installation of a quality whole-house surge protector typically ranges from $400-$800 including the device and labor. This is a small investment compared to the thousands of dollars in potential damage to appliances, HVAC systems, and electronics.",
          },
        },
        {
          "@type": "Question",
          name: "Do I still need plug-in surge protectors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we recommend a layered approach. Whole-house protection handles large surges at the panel, while point-of-use surge protectors provide additional protection for sensitive electronics like computers, TVs, and home theater equipment.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a surge protector last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Quality whole-house surge protectors typically last 5-10 years or until they absorb a major surge. Many models have indicator lights showing when they need replacement. We install units with monitoring capabilities and provide guidance on maintenance.",
          },
        },
      ],
    }),
  },
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

        {/* FAQ Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-300 mb-8">
                Expert answers about whole-house surge protection from our licensed electricians.
              </p>
              <div className="mt-8">
                <Link href="/contactus">
                  <Button size="lg" className="bg-[#22c55e] hover:bg-[#16a34a] text-black px-8 py-3">
                    Get a Free Quote
                  </Button>
                </Link>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-16">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    How does whole house surge protection work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    A whole-house surge protector installs at your electrical panel and diverts excess voltage to ground
                    before it enters your home's wiring. It protects against surges from lightning strikes, utility grid
                    fluctuations, and large appliances cycling on and off.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    Will a surge protector protect against lightning?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Whole-house surge protectors provide significant protection against lightning-induced surges, but no
                    device can guarantee 100% protection from a direct lightning strike. We recommend combining
                    whole-house protection with point-of-use surge protectors for sensitive electronics.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    How much does whole house surge protection cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Professional installation of a quality whole-house surge protector typically ranges from $400-$800
                    including the device and labor. This is a small investment compared to the thousands of dollars in
                    potential damage to appliances, HVAC systems, and electronics.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    Do I still need plug-in surge protectors?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Yes, we recommend a layered approach. Whole-house protection handles large surges at the panel,
                    while point-of-use surge protectors provide additional protection for sensitive electronics like
                    computers, TVs, and home theater equipment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    How long does a surge protector last?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Quality whole-house surge protectors typically last 5-10 years or until they absorb a major surge.
                    Many models have indicator lights showing when they need replacement. We install units with
                    monitoring capabilities and provide guidance on maintenance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
