import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "When to Call an Electrician vs. an Appliance Repair Tech | ABR Electric",
  description:
    "Learn the clear boundaries between electrical and appliance repairs. Understand when to call an electrician versus an appliance repair technician to avoid costly mistakes.",
  alternates: {
    canonical: "https://abrelectric.com/blog/electrician-vs-appliance-repair",
  },
}

export default function ElectricianVsApplianceRepairPost() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "When to Call an Electrician vs. an Appliance Repair Tech",
    description:
      "Learn the clear boundaries between electrical and appliance repairs to avoid costly mistakes and ensure proper service.",
    image: "https://abrelectric.com/appliance-electrical-repair.jpg",
    datePublished: "2025-08-27",
    dateModified: "2025-08-27",
    author: {
      "@type": "Organization",
      name: "ABR Electric",
    },
    publisher: {
      "@type": "Organization",
      name: "ABR Electric",
      logo: {
        "@type": "ImageObject",
        url: "https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/3cc05301-a411-4b9f-baeb-20b8f9355b00/public",
      },
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main className="min-h-screen bg-[#0a1628]">
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <Image
            src="/appliance-electrical-repair.jpg"
            alt="Electrician working on appliance electrical connection"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-[#00ff9d] text-[#0a1628] text-sm font-semibold rounded-full mb-4">
              Appliance Repair
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              When to Call an Electrician vs. an Appliance Repair Tech
            </h1>
            <p className="text-xl text-gray-300">
              Understanding the clear boundaries between electrical and appliance repairs
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-gray-400 text-sm">
              <span>August 27, 2025</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </section>

        <article className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="text-gray-300 space-y-6 mb-12">
                <p className="text-xl leading-relaxed">
                  Your refrigerator stops cooling. Your dryer won't heat. Your dishwasher won't start. Who do you call?
                  The answer isn't always obvious, and calling the wrong professional can cost you time and money.
                </p>
                <p className="leading-relaxed">
                  Understanding the distinction between electrical issues and appliance malfunctions is crucial for
                  homeowners. While there's some overlap, electricians and appliance repair technicians have different
                  expertise, tools, and licensing. This guide will help you determine which professional you need for
                  your specific problem.
                </p>
              </div>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">The Key Difference</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card className="bg-[#1a2332] border-[#00ff9d]">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-[#00ff9d] mb-4">Licensed Electricians</h3>
                      <p className="text-gray-300 mb-4">
                        Electricians work on the electrical infrastructure that powers your home and appliances. This
                        includes:
                      </p>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start">
                          <span className="text-[#00ff9d] mr-2">⚡</span>
                          <span>Electrical panels and circuit breakers (NEC Article 408)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#00ff9d] mr-2">⚡</span>
                          <span>Wiring and circuits throughout your home (NEC Article 210)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#00ff9d] mr-2">⚡</span>
                          <span>Outlets, switches, and junction boxes (NEC Article 314)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#00ff9d] mr-2">⚡</span>
                          <span>Dedicated circuits for major appliances (NEC Article 422)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#00ff9d] mr-2">⚡</span>
                          <span>GFCI and AFCI protection devices</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#00ff9d] mr-2">⚡</span>
                          <span>Grounding and bonding systems (NEC Article 250)</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#1a2332] border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">Appliance Repair Technicians</h3>
                      <p className="text-gray-300 mb-4">
                        Appliance technicians work on the internal components and mechanisms of appliances themselves:
                      </p>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">🔧</span>
                          <span>Motors, compressors, and heating elements</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">🔧</span>
                          <span>Control boards and electronic components</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">🔧</span>
                          <span>Thermostats and temperature sensors</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">🔧</span>
                          <span>Pumps, valves, and water lines</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">🔧</span>
                          <span>Door seals, gaskets, and mechanical parts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">🔧</span>
                          <span>Diagnostic testing of appliance systems</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Call an Electrician When...</h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-[#1a2332] border border-[#00ff9d] rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">🔌 The Outlet or Circuit is the Problem</h3>
                    <p className="text-gray-300 mb-3">
                      If multiple appliances on the same circuit aren't working, or if the outlet itself shows signs of
                      damage (burn marks, loose connections, no power), you need an electrician. According to NEC
                      Article 406, outlets must be properly installed and maintained to prevent electrical hazards.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Example:</strong> Your dryer won't turn on, and you notice the 240V outlet is loose or
                      damaged. This is an electrical issue requiring a licensed electrician to repair or replace the
                      outlet and verify the circuit integrity.
                    </p>
                  </div>

                  <div className="bg-[#1a2332] border border-[#00ff9d] rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">⚡ Circuit Breakers Keep Tripping</h3>
                    <p className="text-gray-300 mb-3">
                      If your appliance causes the circuit breaker to trip repeatedly, the problem is likely with the
                      electrical circuit, not the appliance. The circuit may be overloaded (exceeding its rated amperage
                      per NEC Article 210.19), undersized for the appliance, or there may be a short circuit in the
                      wiring.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Example:</strong> Your new electric range keeps tripping the breaker. An electrician needs
                      to verify the circuit is properly sized (typically 40-50 amps for ranges per NEC Article 422.10)
                      and that the wiring gauge is adequate (usually 6 AWG or 8 AWG copper).
                    </p>
                  </div>

                  <div className="bg-[#1a2332] border border-[#00ff9d] rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">🏠 You Need a Dedicated Circuit</h3>
                    <p className="text-gray-300 mb-3">
                      Major appliances like refrigerators, dishwashers, microwaves, and garbage disposals require
                      dedicated circuits per NEC Article 422.10. If you're installing a new appliance or your existing
                      appliance is on a shared circuit causing problems, you need an electrician to install a new
                      dedicated circuit.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Example:</strong> You're installing a new dishwasher and there's no dedicated circuit
                      available. An electrician must run new wiring from your electrical panel, install a new circuit
                      breaker (typically 15-20 amps), and ensure proper GFCI protection per NEC Article 422.5.
                    </p>
                  </div>

                  <div className="bg-[#1a2332] border border-[#00ff9d] rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">🔥 You Smell Burning or See Sparks</h3>
                    <p className="text-gray-300 mb-3">
                      Any burning smell, visible sparks, or smoke coming from an outlet, switch, or electrical panel is
                      an emergency electrical issue. Shut off power at the breaker and call a licensed electrician
                      immediately. This indicates dangerous electrical arcing or overheating that could cause a fire.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Example:</strong> You plug in your washing machine and see sparks at the outlet. This is a
                      serious electrical hazard requiring immediate attention from an electrician to inspect the outlet,
                      wiring, and circuit for damage or code violations.
                    </p>
                  </div>

                  <div className="bg-[#1a2332] border border-[#00ff9d] rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">📊 Voltage Issues</h3>
                    <p className="text-gray-300 mb-3">
                      If your appliance isn't receiving the correct voltage (120V or 240V depending on the appliance),
                      that's an electrical problem. Low voltage can cause appliances to malfunction or not work at all.
                      NEC Article 210.6 specifies voltage requirements for branch circuits.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Example:</strong> Your electric dryer runs but doesn't heat properly. Testing shows it's
                      only receiving 120V instead of the required 240V. An electrician needs to diagnose why one leg of
                      the 240V circuit is not functioning properly.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Call an Appliance Repair Tech When...</h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">🔧 The Appliance Has Mechanical Issues</h3>
                    <p className="text-gray-300 mb-3">
                      If the appliance makes unusual noises, leaks water, doesn't spin, or has mechanical failures,
                      that's an appliance repair issue. The electrical supply is working, but internal components have
                      failed.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Example:</strong> Your washing machine fills with water but won't agitate or spin. The
                      motor, belt, or transmission likely needs repair or replacement—this is appliance repair work.
                    </p>
                  </div>

                  <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">🌡️ Temperature Control Problems</h3>
                    <p className="text-gray-300 mb-3">
                      If your refrigerator isn't cooling properly, your oven temperature is off, or your dryer doesn't
                      heat correctly (but has proper voltage), the issue is with the appliance's internal temperature
                      control systems, sensors, or heating elements.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Example:</strong> Your refrigerator is running but not maintaining the correct
                      temperature. The compressor, thermostat, or refrigerant system needs diagnosis by an appliance
                      technician.
                    </p>
                  </div>

                  <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">💻 Control Board or Display Issues</h3>
                    <p className="text-gray-300 mb-3">
                      Modern appliances have sophisticated control boards and digital displays. If error codes appear,
                      buttons don't respond, or the display malfunctions while the appliance has power, the internal
                      electronics need repair.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Example:</strong> Your dishwasher displays an error code and won't start a cycle. The
                      control board or sensor system needs diagnosis and repair by an appliance technician familiar with
                      that brand's error codes.
                    </p>
                  </div>

                  <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">💧 Water or Drainage Problems</h3>
                    <p className="text-gray-300 mb-3">
                      If your dishwasher won't drain, your washing machine leaks, or your refrigerator's ice maker isn't
                      working, these are plumbing and mechanical issues within the appliance itself.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Example:</strong> Your dishwasher leaves standing water at the bottom after a cycle. The
                      drain pump, filter, or drain hose needs inspection and repair by an appliance technician.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">The Gray Area: When You Might Need Both</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Some situations require both an electrician and an appliance repair technician:
                </p>
                <div className="bg-amber-900/20 border border-amber-700 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-amber-400 mb-4">Hardwired Appliance Installation</h3>
                  <p className="text-gray-300 mb-3">
                    When installing a new hardwired appliance (like a built-in oven, cooktop, or garbage disposal), you
                    typically need an electrician to run the circuit and make the electrical connection, and an
                    appliance installer to set up the appliance itself.
                  </p>
                  <p className="text-gray-400 text-sm">
                    The electrician ensures proper circuit sizing, wire gauge (per NEC Table 310.16), and connection
                    methods per NEC Article 422.16. The appliance installer handles mounting, leveling, and testing the
                    appliance functions.
                  </p>
                </div>
                <div className="bg-amber-900/20 border border-amber-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-amber-400 mb-4">Appliance Cord and Plug Replacement</h3>
                  <p className="text-gray-300 mb-3">
                    If an appliance power cord is damaged, an appliance technician can typically replace it. However, if
                    the outlet or circuit is also damaged, you'll need an electrician to repair the electrical
                    infrastructure first.
                  </p>
                  <p className="text-gray-400 text-sm">
                    For 240V appliances like dryers and ranges, the cord configuration must match your outlet type
                    (3-prong vs. 4-prong per NEC Article 250.140). An appliance tech can change the cord, but if you
                    need to upgrade the outlet, that requires an electrician.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">How to Diagnose the Problem Yourself</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Before calling anyone, try these simple diagnostic steps:
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start bg-[#1a2332] border border-gray-700 rounded-lg p-4">
                    <span className="text-2xl mr-4">1️⃣</span>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Check Other Outlets on the Same Circuit</h4>
                      <p className="text-gray-300 text-sm">
                        Plug a lamp or other device into nearby outlets. If nothing works on that circuit, it's an
                        electrical issue. If other devices work fine, it's likely an appliance problem.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-[#1a2332] border border-gray-700 rounded-lg p-4">
                    <span className="text-2xl mr-4">2️⃣</span>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Check the Circuit Breaker</h4>
                      <p className="text-gray-300 text-sm">
                        Go to your electrical panel and see if the breaker has tripped. If it trips immediately when you
                        reset it, that's an electrical issue requiring an electrician.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-[#1a2332] border border-gray-700 rounded-lg p-4">
                    <span className="text-2xl mr-4">3️⃣</span>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Test the Appliance on a Different Circuit</h4>
                      <p className="text-gray-300 text-sm">
                        If possible, plug the appliance into a different outlet (on a different circuit). If it works
                        there, the original circuit has an electrical problem. If it still doesn't work, it's an
                        appliance issue.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start bg-[#1a2332] border border-gray-700 rounded-lg p-4">
                    <span className="text-2xl mr-4">4️⃣</span>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Look for Error Codes</h4>
                      <p className="text-gray-300 text-sm">
                        Modern appliances display error codes when something goes wrong. Look up the code in your
                        owner's manual—it often indicates whether the issue is electrical or mechanical.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Cost Considerations</h2>
                <p className="text-gray-300 leading-relaxed mb-6">Understanding who to call can save you money:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Electrician Service Calls</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Diagnostic fee: $75-$150</li>
                      <li>• Outlet repair/replacement: $150-$300</li>
                      <li>• Circuit installation: $200-$500</li>
                      <li>• Panel work: $150-$400 per circuit</li>
                    </ul>
                  </div>
                  <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Appliance Repair Calls</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Diagnostic fee: $75-$125</li>
                      <li>• Minor repairs: $150-$300</li>
                      <li>• Major component replacement: $300-$600</li>
                      <li>• Control board replacement: $200-$500</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mt-6">
                  Calling the wrong professional means paying a diagnostic fee only to be told you need someone else.
                  Taking a few minutes to diagnose the issue yourself can save you time and money.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Safety First</h2>
                <div className="bg-red-900/20 border border-red-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-red-400 mb-4">
                    ⚠️ When in Doubt, Call an Electrician First
                  </h3>
                  <p className="text-gray-300 mb-4">
                    If you're unsure whether the problem is electrical or appliance-related, it's safer to call an
                    electrician first. Electrical issues can be dangerous and cause fires or electrocution. A licensed
                    electrician can quickly determine if the problem is with your home's electrical system or the
                    appliance itself.
                  </p>
                  <p className="text-gray-300">
                    Never attempt electrical repairs yourself unless you're qualified and licensed. Electrical work
                    requires permits and inspections per NEC requirements, and improper repairs can void your
                    homeowner's insurance and create serious safety hazards.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <div className="bg-[#00ff9d]/10 border border-[#00ff9d] rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Quick Decision Guide</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-[#00ff9d] font-semibold mb-3">Call an Electrician if:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start">
                          <span className="text-[#00ff9d] mr-2">✓</span>
                          <span>Multiple devices on the circuit don't work</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#00ff9d] mr-2">✓</span>
                          <span>Circuit breaker trips repeatedly</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#00ff9d] mr-2">✓</span>
                          <span>Outlet is damaged or shows burn marks</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#00ff9d] mr-2">✓</span>
                          <span>You smell burning or see sparks</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#00ff9d] mr-2">✓</span>
                          <span>Appliance needs a dedicated circuit</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#00ff9d] mr-2">✓</span>
                          <span>Voltage issues are suspected</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Call an Appliance Tech if:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">✓</span>
                          <span>Appliance has power but doesn't work properly</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">✓</span>
                          <span>Temperature control issues</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">✓</span>
                          <span>Mechanical noises or failures</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">✓</span>
                          <span>Error codes appear on display</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">✓</span>
                          <span>Water leaks or drainage problems</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gray-400 mr-2">✓</span>
                          <span>Control board or sensor issues</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-12 bg-gradient-to-r from-[#1a2332] to-[#0a1628] border border-[#00ff9d] rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need Help Diagnosing an Electrical Issue?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                ABR Electric can quickly determine if your appliance problem is electrical or mechanical. We'll diagnose
                the issue and recommend the right solution to get your appliances working safely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#00ff9d] hover:bg-[#00ff9d]/90 text-[#0a1628]">
                  <Link href="/contactus">Schedule a Diagnostic Visit</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-6">
                Licensed & Insured | TECL #27762 | Serving McKinney, Allen, and Collin County, TX
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
