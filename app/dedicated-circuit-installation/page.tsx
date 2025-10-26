import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Check } from "lucide-react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric Dedicated Circuit Installation Collin County | High-Power Appliances",
  description:
    "Professional dedicated circuit installation for high-power appliances in Collin County. Kitchen appliances, HVAC, EV chargers, and more. Licensed electricians serving McKinney and surrounding areas.",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What appliances need dedicated circuits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Refrigerators, microwaves, dishwashers, garbage disposals, electric ranges, washers, dryers, HVAC systems, water heaters, and EV chargers all require dedicated circuits. Any appliance drawing significant power should have its own circuit to prevent overloads.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a dedicated circuit cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dedicated circuit installation typically ranges from $300-$800 depending on distance from the panel, wire gauge needed, and complexity of the installation. We provide upfront pricing after assessing your specific needs.",
          },
        },
        {
          "@type": "Question",
          name: "Can I add a dedicated circuit to an old panel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on available capacity in your panel. We perform a load calculation to determine if your panel can handle additional circuits. If not, we may recommend a panel upgrade or subpanel installation.",
          },
        },
        {
          "@type": "Question",
          name: "What size breaker do I need for a dedicated circuit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Breaker size depends on the appliance requirements. Most kitchen appliances need 15-20 amp circuits, electric dryers need 30 amps, electric ranges need 40-50 amps, and EV chargers typically need 40-60 amps. We size circuits according to NEC code requirements.",
          },
        },
        {
          "@type": "Question",
          name: "How long does dedicated circuit installation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most dedicated circuit installations take 2-4 hours depending on wire run distance and accessibility. Complex installations requiring drywall work or long wire runs may take longer. We provide accurate time estimates during our initial assessment.",
          },
        },
      ],
    }),
  },
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

        {/* FAQ Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-300 mb-8">
                Common questions about dedicated circuit installation from our licensed electricians.
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
                    What appliances need dedicated circuits?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Refrigerators, microwaves, dishwashers, garbage disposals, electric ranges, washers, dryers, HVAC
                    systems, water heaters, and EV chargers all require dedicated circuits. Any appliance drawing
                    significant power should have its own circuit to prevent overloads.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    How much does a dedicated circuit cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Dedicated circuit installation typically ranges from $300-$800 depending on distance from the panel,
                    wire gauge needed, and complexity of the installation. We provide upfront pricing after assessing
                    your specific needs.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    Can I add a dedicated circuit to an old panel?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    It depends on available capacity in your panel. We perform a load calculation to determine if your
                    panel can handle additional circuits. If not, we may recommend a panel upgrade or subpanel
                    installation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    What size breaker do I need for a dedicated circuit?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Breaker size depends on the appliance requirements. Most kitchen appliances need 15-20 amp circuits,
                    electric dryers need 30 amps, electric ranges need 40-50 amps, and EV chargers typically need 40-60
                    amps. We size circuits according to NEC code requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    How long does dedicated circuit installation take?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Most dedicated circuit installations take 2-4 hours depending on wire run distance and
                    accessibility. Complex installations requiring drywall work or long wire runs may take longer. We
                    provide accurate time estimates during our initial assessment.
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
