import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "GFCI Protection for Pools: The Silent Lifesaver | ABR Electric",
  description:
    "Pool electrical safety is non-negotiable. Learn how GFCI protection prevents electrocution, pool wiring requirements, and essential safety measures every pool owner must know.",
  alternates: {
    canonical: "https://abrelectric.com/blog/gfci-protection-pools-safety",
  },
}

export default function GFCIPoolSafetyPost() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "GFCI Protection for Pools: The Silent Lifesaver",
    description:
      "Essential guide to pool electrical safety, GFCI protection requirements, and preventing electrocution hazards around swimming pools.",
    image: "https://abrelectric.com/pool-gfci-electrical-safety.jpg",
    datePublished: "2025-09-14",
    dateModified: "2025-09-14",
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
            src="/pool-gfci-electrical-safety.jpg"
            alt="Swimming pool with proper GFCI electrical protection"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full mb-4">
              Pool Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              GFCI Protection for Pools: The Silent Lifesaver
            </h1>
            <p className="text-xl text-gray-300">Why proper electrical protection is critical for pool safety</p>
            <div className="flex items-center justify-center gap-4 mt-6 text-gray-400 text-sm">
              <span>September 14, 2025</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
          </div>
        </section>

        <article className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="text-gray-300 space-y-6 mb-12">
                <p className="text-xl leading-relaxed">
                  Water and electricity are a deadly combination. Every year, dozens of people are electrocuted in
                  swimming pools and spas due to faulty electrical systems. The good news? These tragedies are almost
                  entirely preventable with proper GFCI protection and electrical safety measures.
                </p>
                <p className="leading-relaxed">
                  Ground Fault Circuit Interrupter (GFCI) devices are your first line of defense against electrical
                  shock in and around pools. Understanding how they work, where they're required, and how to maintain
                  them can literally save lives. This comprehensive guide covers everything pool owners need to know
                  about electrical safety.
                </p>
              </div>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">What is a GFCI and How Does It Work?</h2>
                <div className="bg-[#1a2332] border border-blue-500 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">The Life-Saving Technology</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    A GFCI constantly monitors the electrical current flowing through a circuit. It compares the amount
                    of current going to an appliance with the amount returning. If there's even a tiny difference (as
                    little as 4-6 milliamps), the GFCI assumes current is "leaking" somewhere—potentially through a
                    person—and shuts off power in as little as 1/40th of a second.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    This lightning-fast response is crucial because it takes only 10-20 milliamps of current to cause
                    muscle paralysis, preventing a person from letting go of an electrical source. At 100-200 milliamps,
                    electrical current can cause ventricular fibrillation and death. GFCIs interrupt the circuit long
                    before dangerous levels of current can flow through a person's body.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-[#1a2332] border-gray-700">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">⚡</div>
                      <h4 className="text-white font-semibold mb-2">4-6 mA</h4>
                      <p className="text-gray-400 text-sm">GFCI trip threshold - safe level</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#1a2332] border-gray-700">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">⚠️</div>
                      <h4 className="text-white font-semibold mb-2">10-20 mA</h4>
                      <p className="text-gray-400 text-sm">Muscle paralysis - can't let go</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#1a2332] border-gray-700">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">💀</div>
                      <h4 className="text-white font-semibold mb-2">100-200 mA</h4>
                      <p className="text-gray-400 text-sm">Ventricular fibrillation - fatal</p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">NEC Requirements for Pool GFCI Protection</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The National Electrical Code (NEC) Article 680 specifically addresses swimming pools, spas, hot tubs,
                  and fountains. These requirements are comprehensive and strictly enforced because the stakes are so
                  high.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-[#1a2332] border border-blue-500 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      NEC 680.5 - Ground Fault Circuit Interrupters
                    </h3>
                    <p className="text-gray-300 mb-4">
                      All electrical equipment associated with pools must have GFCI protection, including:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>
                          <strong>Pool pumps and motors:</strong> Must be protected by GFCI breakers (NEC 680.21)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>
                          <strong>Underwater lighting:</strong> All pool lights require GFCI protection (NEC 680.23)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>
                          <strong>Receptacles:</strong> All outlets within 20 feet of pool edge (NEC 680.22)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>
                          <strong>Heaters and heat pumps:</strong> GFCI required for all pool heating equipment
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>
                          <strong>Automatic pool covers:</strong> Motors must have GFCI protection
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1a2332] border border-blue-500 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">NEC 680.22 - Receptacle Requirements</h3>
                    <p className="text-gray-300 mb-4">
                      Outlet placement around pools is strictly regulated for safety:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>
                          <strong>Minimum distance:</strong> No receptacles within 6 feet of pool edge
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>
                          <strong>Required outlet:</strong> At least one 120V GFCI outlet between 6-20 feet from pool
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>
                          <strong>All outlets within 20 feet:</strong> Must have GFCI protection
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>
                          <strong>Locking covers:</strong> Outlets within 10 feet must have weatherproof covers
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#1a2332] border border-blue-500 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">NEC 680.26 - Equipotential Bonding</h3>
                    <p className="text-gray-300 mb-4">
                      All metal components within 5 feet of the pool must be bonded together to prevent voltage
                      differences:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Pool shell (rebar or metal components)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Pump motors, heaters, and other equipment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Metal fences, handrails, and ladders</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Metal conduit and junction boxes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>Bonding wire must be solid copper, minimum 8 AWG</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Types of GFCI Protection for Pools</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card className="bg-[#1a2332] border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">GFCI Circuit Breakers</h3>
                      <p className="text-gray-300 mb-4">
                        Installed in your electrical panel, GFCI breakers protect entire circuits. This is the preferred
                        method for pool equipment like pumps and heaters.
                      </p>
                      <p className="text-sm text-gray-400 mb-3">
                        <strong>Advantages:</strong>
                      </p>
                      <ul className="space-y-1 text-gray-400 text-sm mb-3">
                        <li>• Protects all outlets on the circuit</li>
                        <li>• Can't be bypassed or removed</li>
                        <li>• Centralized testing location</li>
                        <li>• Required for hardwired equipment</li>
                      </ul>
                      <p className="text-sm text-gray-400">
                        <strong>Cost:</strong> $40-$80 per breaker
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#1a2332] border-gray-700">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-4">GFCI Receptacles</h3>
                      <p className="text-gray-300 mb-4">
                        GFCI outlets with built-in protection, commonly used for convenience outlets around pool areas.
                      </p>
                      <p className="text-sm text-gray-400 mb-3">
                        <strong>Advantages:</strong>
                      </p>
                      <ul className="space-y-1 text-gray-400 text-sm mb-3">
                        <li>• Easy to test and reset</li>
                        <li>• Can protect downstream outlets</li>
                        <li>• Visible indicator of protection</li>
                        <li>• Good for existing installations</li>
                      </ul>
                      <p className="text-sm text-gray-400">
                        <strong>Cost:</strong> $15-$30 per outlet
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Common Pool Electrical Hazards</h2>
                <div className="space-y-4">
                  <div className="bg-red-900/20 border border-red-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-400 mb-3">⚠️ Faulty Pool Lights</h3>
                    <p className="text-gray-300 mb-3">
                      Underwater pool lights are a common source of electrical shock. Cracks in the light housing,
                      deteriorated gaskets, or improper installation can allow water to reach electrical components. All
                      pool lights must be GFCI protected per NEC 680.23, and lights should be inspected annually for
                      damage.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Warning signs:</strong> Flickering lights, visible cracks in lens, water inside light
                      fixture, or GFCI tripping when lights are turned on.
                    </p>
                  </div>

                  <div className="bg-red-900/20 border border-red-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-400 mb-3">⚠️ Damaged Extension Cords</h3>
                    <p className="text-gray-300 mb-3">
                      Using extension cords around pools is extremely dangerous. Damaged insulation, frayed wires, or
                      cords lying in water create direct electrocution hazards. Extension cords should never be used for
                      permanent pool equipment, and temporary use should be avoided whenever possible.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Safe alternative:</strong> Install permanent GFCI-protected outlets at appropriate
                      distances per NEC 680.22.
                    </p>
                  </div>

                  <div className="bg-red-900/20 border border-red-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-400 mb-3">⚠️ Improper Bonding</h3>
                    <p className="text-gray-300 mb-3">
                      Voltage gradients in and around pools can occur when metal components aren't properly bonded
                      together. This creates a situation where touching two different metal objects simultaneously (like
                      a ladder and handrail) can result in shock, even without a ground fault.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Solution:</strong> All metal within 5 feet of pool must be bonded with 8 AWG solid copper
                      wire per NEC 680.26.
                    </p>
                  </div>

                  <div className="bg-red-900/20 border border-red-700 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-red-400 mb-3">⚠️ Overhead Power Lines</h3>
                    <p className="text-gray-300 mb-3">
                      Overhead electrical lines near pools pose serious hazards. NEC 680.8 requires specific clearances:
                      22.5 feet for lines up to 15kV, and greater distances for higher voltages. Pool equipment like
                      cleaning poles and covers can contact overhead lines if clearances aren't maintained.
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Important:</strong> Never install a pool under or near overhead power lines. Contact your
                      utility company if lines are too close.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Testing and Maintaining GFCI Protection</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  GFCI devices can fail over time, leaving you unprotected. Regular testing is essential for safety.
                </p>
                <div className="bg-[#1a2332] border border-blue-500 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Monthly Testing Procedure</h3>
                  <ol className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-400 font-bold mr-3">1.</span>
                      <span>
                        <strong className="text-white">For GFCI Outlets:</strong> Press the "TEST" button. The "RESET"
                        button should pop out and power should shut off. Press "RESET" to restore power.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 font-bold mr-3">2.</span>
                      <span>
                        <strong className="text-white">For GFCI Breakers:</strong> Press the "TEST" button on the
                        breaker. The breaker should trip to the off position. Reset the breaker to restore power.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 font-bold mr-3">3.</span>
                      <span>
                        <strong className="text-white">If GFCI doesn't trip:</strong> The device has failed and must be
                        replaced immediately. Do not use the circuit until a licensed electrician replaces the GFCI.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 font-bold mr-3">4.</span>
                      <span>
                        <strong className="text-white">Document testing:</strong> Keep a log of monthly tests. This is
                        important for insurance and liability purposes.
                      </span>
                    </li>
                  </ol>
                </div>
                <div className="bg-amber-900/20 border border-amber-700 rounded-lg p-6">
                  <h4 className="text-amber-400 font-semibold mb-2 flex items-center">
                    <span className="text-2xl mr-2">💡</span>
                    Pro Tip
                  </h4>
                  <p className="text-gray-300">
                    Test GFCIs at the beginning of pool season and monthly during use. Replace any GFCI that's more than
                    10 years old, even if it still tests properly. Internal components degrade over time and may not
                    provide adequate protection.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Pool Electrical Safety Checklist</h2>
                <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" />
                      <span className="text-gray-300">
                        All pool equipment has GFCI protection (pumps, lights, heaters)
                      </span>
                    </div>
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" />
                      <span className="text-gray-300">No outlets within 6 feet of pool edge</span>
                    </div>
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" />
                      <span className="text-gray-300">At least one GFCI outlet between 6-20 feet from pool</span>
                    </div>
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" />
                      <span className="text-gray-300">All metal components within 5 feet are properly bonded</span>
                    </div>
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" />
                      <span className="text-gray-300">
                        Pool lights are in good condition with no cracks or water intrusion
                      </span>
                    </div>
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" />
                      <span className="text-gray-300">GFCIs are tested monthly and documented</span>
                    </div>
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" />
                      <span className="text-gray-300">No extension cords used around pool area</span>
                    </div>
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" />
                      <span className="text-gray-300">Overhead power line clearances meet NEC 680.8 requirements</span>
                    </div>
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" />
                      <span className="text-gray-300">Annual electrical inspection by licensed electrician</span>
                    </div>
                    <div className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-3" />
                      <span className="text-gray-300">
                        All electrical work has proper permits and passed inspections
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">When to Call a Licensed Electrician</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Pool electrical work is not DIY territory. The combination of water and electricity requires
                  professional expertise and strict code compliance. Call a licensed electrician for:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">✓ New pool installations</h4>
                    <p className="text-gray-400 text-sm">
                      Complete electrical design and installation per NEC Article 680
                    </p>
                  </div>
                  <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">✓ GFCI installation or replacement</h4>
                    <p className="text-gray-400 text-sm">Proper sizing and installation of GFCI breakers and outlets</p>
                  </div>
                  <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">✓ Pool equipment upgrades</h4>
                    <p className="text-gray-400 text-sm">New pumps, heaters, or lighting systems</p>
                  </div>
                  <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">✓ Bonding and grounding</h4>
                    <p className="text-gray-400 text-sm">Equipotential bonding of all metal components</p>
                  </div>
                  <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">✓ Annual safety inspections</h4>
                    <p className="text-gray-400 text-sm">Professional testing and verification of all safety systems</p>
                  </div>
                  <div className="bg-[#1a2332] border border-gray-700 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">✓ Troubleshooting GFCI trips</h4>
                    <p className="text-gray-400 text-sm">Identifying and repairing ground faults</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">The Bottom Line</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    GFCI protection is not optional—it's a life-saving requirement that every pool owner must take
                    seriously. The combination of water and electricity is inherently dangerous, but proper GFCI
                    protection, regular testing, and professional installation can virtually eliminate the risk of
                    electrocution.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Don't wait for a close call or tragedy to address pool electrical safety. Have a licensed
                    electrician inspect your pool's electrical system annually, test your GFCIs monthly, and never
                    compromise on safety to save a few dollars. Your family's lives depend on it.
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 bg-gradient-to-r from-[#1a2332] to-[#0a1628] border border-blue-500 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Need a Pool Electrical Safety Inspection?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                ABR Electric specializes in pool electrical safety. We'll inspect your entire pool electrical system,
                test all GFCI devices, verify bonding and grounding, and ensure your pool meets all NEC safety
                requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                  <Link href="/contactus">Schedule Pool Safety Inspection</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                >
                  <Link href="/services">View Electrical Services</Link>
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
