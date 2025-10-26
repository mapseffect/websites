import Link from "next/link"

interface LocationServicesSectionProps {
  city: string
}

export default function LocationServicesSection({ city }: LocationServicesSectionProps) {
  const services = [
    {
      icon: "⚡",
      title: "EV Charging",
      description: "Fast, future-ready EV charger installations for your home or garage.",
      href: "/ev-charger-install",
    },
    {
      icon: "🔌",
      title: "Outlets & Switches",
      description: "Modern, safe outlet and switch upgrades and replacements.",
      href: "/outlet-replacement-and-upgrades",
    },
    {
      icon: "📦",
      title: "Electrical Panel",
      description: "Upgrade your panel to handle today's electrical demands.",
      href: "/breaker-box-panel-upgrades",
    },
    {
      icon: "🌳",
      title: "Landscape Lighting",
      description: "Low-voltage outdoor lighting to boost curb appeal and safety.",
      href: "/outdoorlighting",
    },
    {
      icon: "🔋",
      title: "Generator Installation",
      description: "Whole-home backup generators for reliable power protection.",
      href: "/generators",
    },
    {
      icon: "🎯",
      title: "Dedicated Circuits",
      description: "Power heavy appliances with dedicated wiring and breakers.",
      href: "/dedicated-circuit-installation",
    },
    {
      icon: "💧",
      title: "Surge Protection",
      description: "Protect your entire home from electrical surges and spikes.",
      href: "/whole-house-surge-protection",
    },
    {
      icon: "💡",
      title: "Lighting & Fixtures",
      description: "Install modern fixtures for recessed, pendant, or statement lighting.",
      href: "/lighting-fixture-installation",
    },
    {
      icon: "🔥",
      title: "Smoke Detectors",
      description: "Keep your family safe with up-to-code smoke detector installs.",
      href: "/smoke-detector-installation",
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Electrical Services We Offer</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          From panel upgrades to EV chargers, we provide comprehensive electrical services to {city} homeowners and
          businesses.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-[#1a2332] rounded-lg p-6 hover:bg-[#1f2937] transition-all duration-300 border border-transparent hover:border-[#22c55e]/30 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <h3 className="text-[#22c55e] font-semibold text-lg mb-2 group-hover:text-[#16a34a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
