import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function OutletReplacementPage() {
  const outletTypes = [
    {
      title: "USB Outlets",
      description: "Charge your devices directly from the outlet, eliminating the need for bulky adapters.",
      icon: "🔌",
    },
    {
      title: "GFCI Outlets",
      description:
        "Required in kitchens and bathrooms, these outlets help prevent electrical shock by cutting off power when moisture is detected.",
      icon: "💧",
    },
    {
      title: "Recessed Outlets",
      description: "Ideal for placing behind furniture, recessed outlets keep plugs flush with the wall.",
      icon: "📐",
    },
    {
      title: "AFCI Outlets",
      description: "These outlets provide arc fault protection, reducing the risk of electrical fires.",
      icon: "🔥",
    },
    {
      title: "Smart Outlets",
      description: "Control your appliances remotely and integrate with smart home systems.",
      icon: "📱",
    },
    {
      title: "Tamper-Resistant Outlets",
      description: "Protect children from electrical shocks by preventing objects from being inserted.",
      icon: "🛡️",
    },
  ]

  const upgradeReasons = [
    "Two-prong outlets",
    "Loose or damaged outlets",
    "No GFCI protection in wet areas",
    "Need more USB charging",
    "Insufficient outlet capacity",
    "Smart home integration",
  ]

  const upgradeOptions = [
    "GFCI outlet installation",
    "USB charging outlets",
    "Smart outlets with WiFi",
    "20-amp outlet upgrades",
    "Weatherproof outdoor outlets",
    "Tamper-resistant outlets",
    "Switch and outlet combinations",
    "Floor outlet installation",
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
                Outlet Replacement & Upgrades
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional outlet replacement and upgrade services including GFCI, USB, and smart outlets throughout
                Collin County.
              </p>
              <Link
                href="/#quote-form"
                className="inline-block bg-[#22c55e] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors"
              >
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Outlet Upgrade Options */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Outlet Upgrade Options</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {upgradeOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-[#1a2332] rounded-lg p-4 border border-gray-700 hover:border-[#22c55e]/30 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-[#22c55e] text-xl">•</div>
                      <p className="text-gray-300">{option}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* When to Upgrade */}
        <section className="py-16 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">When to Upgrade Outlets</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {upgradeReasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 bg-[#1a2332] rounded-lg p-6">
                    <div className="text-[#22c55e] text-2xl flex-shrink-0">✓</div>
                    <p className="text-gray-300 text-lg">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Videos Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Learn About Outlet Safety & Installation
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/uC1191otRvk"
                    title="Outlet Installation Video 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/zTEMQKIwhWQ"
                    title="Outlet Installation Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Outlets */}
        <section className="py-16 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Types of Outlets We Install
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {outletTypes.map((outlet, index) => (
                  <div
                    key={index}
                    className="bg-[#1a2332] rounded-lg p-6 border border-gray-700 hover:border-[#22c55e]/30 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{outlet.icon}</div>
                    <h3 className="text-[#22c55e] font-semibold text-xl mb-3">{outlet.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{outlet.description}</p>
                  </div>
                ))}
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
                Safety-first troubleshooting: We don't just swap devices—we find the failure point (loose backstabs,
                shared neutrals, arcing, miswired travelers).
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
                    Switch won't turn/disposal on - what's going on?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Common culprits are failed switches, loose terminations, or a miswired disposal switch/loop. We test
                    voltage at the switch, verify the feed, and re-terminate to screw-lugs before replacing the device
                    if needed.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    GFCI trips or won't reset—even after I replaced it
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    This usually points to a downstream fault, a shared neutral, or line/load reversal. We identify the
                    first device in the chain, isolate the load, correct line/load, and fix the true fault—not just the
                    face device.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    3-way/4-way acts weird (works only from one side)
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Likely a traveler miswire or a failed 3-way device. We identify the common, map travelers between
                    boxes, re-terminate properly, and replace any failed switch.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    LED dimmer buzz or flicker
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Often the dimmer isn't LED-rated or the neutral/config is off. We install a compatible dimmer,
                    confirm neutral where required, and tune trim levels.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    Lights flicker & crackle after new A/C
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4 space-y-3">
                    <p>
                      <strong>Likely scenario:</strong> After an HVAC upgrade, the higher startup current exposes a weak
                      connection, causing den lights to flicker and a switch to crackle.
                    </p>
                    <p>
                      <strong>What we do:</strong> Shut off the breaker, pull the switch, and inspect for heat
                      damage—often a discolored backstab or a loose neutral.
                    </p>
                    <p>
                      <strong>Fix:</strong> Move conductors from backstab to screw lugs, replace the switch with a
                      spec-grade device, and tighten/repair the nearby neutral.
                    </p>
                    <p>
                      <strong>Verify:</strong> Perform arc and load tests; infrared check confirms normal temps; no
                      voltage drop or flicker on A/C startup.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    Why does my brand-new GFCI still trip?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Likely a downstream fault, shared neutral, or line/load reversal. We test the whole chain, not just
                    the face device.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    My 3-way switch works only from one side—why?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    Usually a miswired traveler or failed 3-way device. We identify the common, map travelers, and
                    correct it.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    What if I hear crackling at a switch?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    That's arcing—cut power at the breaker and call us. We'll find and eliminate the heat source.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="bg-[#1a2332] rounded-lg border-gray-700">
                  <AccordionTrigger className="text-xl font-bold text-white px-6 py-4 hover:no-underline">
                    Can I keep backstabbed connections?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    I don't keep backstabbers in my house—they're flaky friends. I only hang with screw-lugs… they
                    really know how to commit. No seriously, we strongly recommend moving to screw-lug terminations for
                    longevity and safety.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-black to-[#0a1a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Upgrade Your Outlets?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact ABR Electric today for professional outlet replacement and upgrade services.
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
