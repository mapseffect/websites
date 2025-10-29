import Link from "next/link"
import Image from "next/image"

export default function ServicesSection() {
  const services = [
    {
      icon: "⚡",
      title: "EV Charging",
      description: "Professional Tesla and ChargePoint EV charger installations for your home or garage.",
      href: "/ev-charger-install",
    },
    {
      icon: "🔌",
      title: "Outlets & Switches",
      description: "Premium Leviton and Lutron outlet and switch upgrades and replacements.",
      href: "/outlet-replacement-and-upgrades",
    },
    {
      icon: "📦",
      title: "Electrical Panel",
      description: "Upgrade your panel with Square D or Eaton systems to handle today's electrical demands.",
      href: "/breaker-box-panel-upgrades",
    },
    {
      icon: "🌳",
      title: "Landscape Lighting",
      description: "Professional Kichler or FX Luminaire low-voltage outdoor lighting installations.",
      href: "/outdoorlighting",
    },
    {
      icon: "🔋",
      title: "Generator Installation",
      description: "Certified Generac whole-home backup generator installations.",
      href: "/generators",
    },
    {
      icon: "🎯",
      title: "Dedicated Circuits",
      description: "Power heavy appliances with Eaton or Siemens dedicated wiring and breakers.",
      href: "/dedicated-circuit-installation",
    },
    {
      icon: "💧",
      title: "Surge Protection",
      description: "Protect your home with Eaton or APC whole-house surge protection systems.",
      href: "/whole-house-surge-protection",
    },
    {
      icon: "💡",
      title: "Lighting & Fixtures",
      description: "Install premium Kichler or Philips Hue fixtures for recessed, pendant, or statement lighting.",
      href: "/lighting-fixture-installation",
    },
    {
      icon: "🔥",
      title: "Smoke Detectors",
      description: "Keep your family safe with Kidde or First Alert up-to-code smoke detector installs.",
      href: "/smoke-detector-installation",
    },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Local Electrician Services in McKinney
          </h2>
          <Image
            src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/420f5ec1-2956-4da7-9632-cfd2b31f4f00/public"
            alt="ABR Electric Logo"
            width={200}
            height={80}
            className="mb-3"
          />
          <p className="text-gray-300 text-center text-lg">ABR Electric Authorized Generac Dealer</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
      </div>
    </section>
  )
}
