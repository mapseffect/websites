import Link from "next/link"

interface LocationServicesSectionProps {
  city: string
}

export default function LocationServicesSection({ city }: LocationServicesSectionProps) {
  const services = [
    {
      icon: "⚡",
      title: "EV Charging Installation",
      description: `Professional Tesla and universal EV charger installation for ${city} homes.`,
      href: "/ev-charger-install",
    },
    {
      icon: "📦",
      title: "Electrical Panel Upgrades",
      description: `Upgrade your ${city} home's electrical panel to handle modern power demands.`,
      href: "/breaker-box-panel-upgrades",
    },
    {
      icon: "🔋",
      title: "Generator Installation",
      description: `Authorized Generac dealer providing backup power solutions in ${city}.`,
      href: "/generators",
    },
    {
      icon: "🔌",
      title: "Outlets & Switches",
      description: `Modern outlet and switch upgrades for ${city} homes and businesses.`,
      href: "/outlet-replacement-and-upgrades",
    },
    {
      icon: "🌳",
      title: "Landscape Lighting",
      description: `Transform your ${city} property with professional outdoor lighting.`,
      href: "/outdoorlighting",
    },
    {
      icon: "💡",
      title: "Lighting & Fixtures",
      description: `Expert lighting fixture installation and design for ${city} residents.`,
      href: "/lighting-fixture-installation",
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Electrical Services in {city}</h2>
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
