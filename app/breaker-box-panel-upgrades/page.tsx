import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceAreasSection from "@/components/service-areas-section"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric Electrical Panel Upgrades Collin County | Licensed Electricians",
  description:
    "Professional electrical panel upgrades in Collin County. Replace outdated Federal Pacific, Zinsco, or Bulldog panels. Licensed master electricians serving McKinney, Allen, Frisco, and Plano. Call (214) 690-1941.",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I know if my electrical panel needs replacement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Older or recalled panels (like Federal Pacific or Zinsco) are common reasons for replacement. If your panel is outdated, undersized, or has visible issues, it's best to have it inspected. Please fill out our form and send pictures if possible, then contact us at support@abrelectric.com or 214-690-1941.",
          },
        },
        {
          "@type": "Question",
          name: "Can you replace or change breakers in the panel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, ABR Electric can replace faulty breakers or adjust amperage where code allows. Each situation requires an inspection to ensure safety and compliance. Reach out at support@abrelectric.com or 214-690-1941 for details.",
          },
        },
        {
          "@type": "Question",
          name: "Why does my breaker keep tripping?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Frequent tripping may indicate a bad breaker, overloaded circuit, or appliance issue. A licensed electrician should inspect before replacement. Please fill out a form and send panel photos if possible, then call us at 214-690-1941.",
          },
        },
        {
          "@type": "Question",
          name: "What's involved in relocating an electrical panel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Moving a panel requires rewiring, permits, and code compliance. ABR Electric handles all steps, including inspection. Contact us at support@abrelectric.com or 214-690-1941 to discuss your project.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need surge protection or grounding upgrades with my panel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many homeowners add whole-home surge protection and grounding when upgrading panels. ABR Electric can include these in your project. Email support@abrelectric.com or call 214-690-1941 for recommendations.",
          },
        },
      ],
    }),
  },
}

export default function PanelUpgradesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-[#1a0a0a] to-[#2d0a0a] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Electrical Panel Upgrades</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Upgrade your home's electrical panel to handle modern power demands safely and efficiently in Collin
                County.
              </p>
              <Link
                href="/#quote-form"
                className="inline-block bg-[#22c55e] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* When to Replace Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Electrical Panel Upgrades in Collin County, TX
              </h2>
              <h3 className="text-2xl font-semibold text-[#22c55e] mb-8 text-center">When to Replace Your Panel?</h3>
              <div className="bg-[#1a2332] rounded-lg p-8 border border-gray-700">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-1" />
                    <span className="text-lg">If your panel is over 40–50 years old</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-1" />
                    <span className="text-lg">
                      If it's one of the following brands, it's time for an upgrade:{" "}
                      <strong className="text-white">Federal Pacific, Zinsco, Bulldog Push Matic</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0 mt-1" />
                    <span className="text-lg">
                      If your panel feels hot to the touch or is making a humming sound, it's a clear sign that
                      replacement is needed.
                    </span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link
                    href="/#quote-form"
                    className="inline-block bg-[#22c55e] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Load Check Section */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-black to-[#0a1a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Can Your Electrical Panel Handle the Load?
              </h2>
              <h3 className="text-2xl font-semibold text-[#22c55e] mb-6">Don't Overload — Get It Checked</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Today's homes are pulling more power than ever before — think EV chargers, backup generators, smart
                appliances, and even backyard spas. But is your panel ready for that kind of strain?
              </p>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Learn About Panel Upgrades
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Panel Upgrade Video */}
                <div className="bg-[#1a2332] rounded-lg overflow-hidden border border-gray-700">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/Cuv1FJIl1sg?start=2"
                      title="Panel Upgrade Process"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Panel Upgrade Process</h3>
                    <p className="text-gray-300">See how we upgrade electrical panels safely and efficiently.</p>
                  </div>
                </div>

                {/* Best Panel Video */}
                <div className="bg-[#1a2332] rounded-lg overflow-hidden border border-gray-700">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/B8joUORkjoI"
                      title="What is the Best Panel?"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">What is the Best Panel?</h3>
                    <p className="text-gray-300">Learn about the best electrical panels for your home.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Electrical Panel FAQ – ABR Electric</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    How do I know if my electrical panel needs replacement?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    Older or recalled panels (like Federal Pacific or Zinsco) are common reasons for replacement. If
                    your panel is outdated, undersized, or has visible issues, it's best to have it inspected. Please
                    fill out our form and send pictures if possible, then contact us at{" "}
                    <a href="mailto:support@abrelectric.com" className="text-[#22c55e] hover:underline">
                      support@abrelectric.com
                    </a>{" "}
                    or{" "}
                    <a href="tel:+12146901941" className="text-[#22c55e] hover:underline">
                      214-690-1941
                    </a>
                    .
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    Can you replace or change breakers in the panel?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    Yes, ABR Electric can replace faulty breakers or adjust amperage where code allows. Each situation
                    requires an inspection to ensure safety and compliance. Reach out at{" "}
                    <a href="mailto:support@abrelectric.com" className="text-[#22c55e] hover:underline">
                      support@abrelectric.com
                    </a>{" "}
                    or{" "}
                    <a href="tel:+12146901941" className="text-[#22c55e] hover:underline">
                      214-690-1941
                    </a>{" "}
                    for details.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    Why does my breaker keep tripping?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    Frequent tripping may indicate a bad breaker, overloaded circuit, or appliance issue. A licensed
                    electrician should inspect before replacement. Please fill out a form and send panel photos if
                    possible, then call us at{" "}
                    <a href="tel:+12146901941" className="text-[#22c55e] hover:underline">
                      214-690-1941
                    </a>
                    .
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    What's involved in relocating an electrical panel?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    Moving a panel requires rewiring, permits, and code compliance. ABR Electric handles all steps,
                    including inspection. Contact us at{" "}
                    <a href="mailto:support@abrelectric.com" className="text-[#22c55e] hover:underline">
                      support@abrelectric.com
                    </a>{" "}
                    or{" "}
                    <a href="tel:+12146901941" className="text-[#22c55e] hover:underline">
                      214-690-1941
                    </a>{" "}
                    to discuss your project.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    Do I need surge protection or grounding upgrades with my panel?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    Many homeowners add whole-home surge protection and grounding when upgrading panels. ABR Electric
                    can include these in your project. Email{" "}
                    <a href="mailto:support@abrelectric.com" className="text-[#22c55e] hover:underline">
                      support@abrelectric.com
                    </a>{" "}
                    or call{" "}
                    <a href="tel:+12146901941" className="text-[#22c55e] hover:underline">
                      214-690-1941
                    </a>{" "}
                    for recommendations.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-black to-[#0a1a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Upgrade Your Panel?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact ABR Electric today for a professional electrical panel assessment and free quote.
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

        {/* Service Areas Section */}
        <ServiceAreasSection />
      </main>
      <Footer />
    </>
  )
}
