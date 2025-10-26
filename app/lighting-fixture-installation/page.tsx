import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric Lighting Fixture Installation Collin County | Recessed Lighting & Chandeliers",
  description:
    "Expert lighting fixture installation in Collin County. Recessed lighting, ceiling fans, chandeliers, and custom lighting design. Licensed electricians for residential lighting solutions. Call (214) 690-1941.",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does recessed lighting installation cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost varies based on the number of lights, ceiling type, and whether new wiring is needed. We provide upfront pricing after assessing your space. Most installations range from $150-$300 per light including materials and labor.",
          },
        },
        {
          "@type": "Question",
          name: "Can you install a chandelier on a vaulted ceiling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We specialize in chandelier installation on vaulted and high ceilings. We ensure proper support structure, secure mounting, and safe electrical connections regardless of ceiling height or angle.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a permit for lighting installation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most lighting fixture replacements don't require permits, but new circuit installations or major modifications typically do. We handle all permit requirements and ensure code-compliant installations.",
          },
        },
        {
          "@type": "Question",
          name: "What's the difference between LED and traditional recessed lights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LED recessed lights use 75% less energy, last 25+ years vs 1-2 years for incandescent, produce less heat, and offer better dimming capabilities. We recommend LED for energy efficiency and long-term savings.",
          },
        },
        {
          "@type": "Question",
          name: "How many recessed lights do I need per room?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generally, one light per 25-30 square feet provides good illumination. We create custom lighting layouts based on room size, ceiling height, and your specific needs for task, ambient, or accent lighting.",
          },
        },
      ],
    }),
  },
}

export default function LightingFixturePage() {
  const services = [
    {
      title: "Recessed Lighting Installation",
      description:
        "ABR Electric specializes in professional recessed lighting installation that enhances both the aesthetics and functionality of your space. Our expert electricians carefully plan and install recessed lights to provide optimal illumination while maintaining a clean, modern look.",
      additionalText:
        "From kitchen task lighting to ambient living room illumination, ABR Electric delivers precise placement and professional installation that transforms your home's lighting experience.",
    },
    {
      title: "Ceiling Fan Installation",
      description:
        "ABR Electric provides expert ceiling fan installation services that combine comfort with energy efficiency. Our licensed electricians ensure proper support, secure mounting, and correct electrical connections for safe, reliable operation.",
      additionalText:
        "Whether you're installing a new fan or replacing an existing fixture, ABR Electric handles every detail with precision and professionalism.",
    },
    {
      title: "Custom Recessed Lighting Design",
      description:
        "ABR Electric creates custom recessed lighting layouts tailored to your specific needs. Our design approach considers room dimensions, ceiling height, and your lighting preferences to create the perfect ambiance.",
      additionalText:
        "With energy-efficient LED options and dimmer integration, ABR Electric delivers lighting solutions that are both beautiful and cost-effective.",
    },
    {
      title: "Living Room Lighting & TV Mounting",
      description:
        "ABR Electric transforms living spaces with integrated lighting and TV mounting solutions. Our team creates the perfect entertainment environment with properly positioned outlets, hidden wiring, and complementary lighting design.",
      additionalText:
        "From accent lighting to task illumination, ABR Electric ensures your living room is both functional and inviting.",
    },
    {
      title: "Chandelier Installation",
      description:
        "ABR Electric brings elegance to your home with professional chandelier installation. Our experienced electricians ensure proper support for heavy fixtures, secure electrical connections, and perfect positioning to showcase your beautiful lighting centerpiece.",
      additionalText:
        "Trust ABR Electric for safe, code-compliant chandelier installation that adds sophistication to any room.",
    },
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
                Lighting Fixture Installation
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your space with expert lighting solutions throughout Collin County
              </p>
              <a
                href="tel:+12146901941"
                className="inline-flex items-center gap-2 bg-[#22c55e] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors"
              >
                <Phone size={20} />
                Call Now: 214-690-1941
              </a>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Image
                src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/a907743b-32a8-4fcc-8cc5-67d408cd3a00/public"
                alt="Lighting fixture installation"
                width={1200}
                height={600}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gradient-to-br from-[#0a1a0a] via-black to-[#1a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-16">
              {services.map((service, index) => (
                <div key={index} className="bg-[#1a2332] rounded-lg p-8 border border-gray-800">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#22c55e] mb-4">{service.title}</h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.additionalText}</p>
                  <a
                    href="tel:+12146901941"
                    className="inline-flex items-center gap-2 text-[#22c55e] font-semibold hover:text-[#16a34a] transition-colors"
                  >
                    <Phone size={18} />
                    Schedule Service: 214-690-1941
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#1a2332] to-[#0f1419] rounded-lg p-12 border border-[#22c55e]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get Your Free Lighting Consultation</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact ABR Electric today for expert lighting installation services
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
                  className="border-2 border-[#22c55e] text-[#22c55e] px-8 py-4 rounded-lg font-semibold hover:bg-[#22c55e] hover:text-black transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  214-690-1941
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-[#0a1a0a] via-black to-[#1a0a0a]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-300 mb-8">
                Expert answers to common lighting installation questions from our licensed electricians.
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
                    How much does recessed lighting installation cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    The cost varies based on the number of lights, ceiling type, and whether new wiring is needed. We
                    provide upfront pricing after assessing your space. Most installations range from $150-$300 per
                    light including materials and labor.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    Can you install a chandelier on a vaulted ceiling?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Yes! We specialize in chandelier installation on vaulted and high ceilings. We ensure proper support
                    structure, secure mounting, and safe electrical connections regardless of ceiling height or angle.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    Do I need a permit for lighting installation?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Most lighting fixture replacements don't require permits, but new circuit installations or major
                    modifications typically do. We handle all permit requirements and ensure code-compliant
                    installations.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    What's the difference between LED and traditional recessed lights?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    LED recessed lights use 75% less energy, last 25+ years vs 1-2 years for incandescent, produce less
                    heat, and offer better dimming capabilities. We recommend LED for energy efficiency and long-term
                    savings.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    How many recessed lights do I need per room?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Generally, one light per 25-30 square feet provides good illumination. We create custom lighting
                    layouts based on room size, ceiling height, and your specific needs for task, ambient, or accent
                    lighting.
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
