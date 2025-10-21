import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric Services Collin County | Professional Electricians",
  description:
    "Comprehensive electrical services in Collin County including EV charger installation, panel upgrades, generators, lighting, and more. Licensed master electricians serving McKinney and surrounding areas.",
}

export default function ServicesPage() {
  const services = [
    {
      title: "EV Charging",
      description: "Fast, future-ready EV charger installations for your home or garage.",
      icon: "🔌",
      href: "/ev-charger-install",
    },
    {
      title: "Outlets & Switches",
      description: "Modern, safe outlet and switch upgrades and replacements.",
      icon: "🔌",
      href: "/outlet-replacement-and-upgrades",
    },
    {
      title: "Electrical Panel",
      description: "Upgrade your panel to handle today's electrical demands.",
      icon: "📦",
      href: "/breaker-box-panel-upgrades",
    },
    {
      title: "Landscape Lighting",
      description: "Low-voltage outdoor lighting to boost curb appeal and safety.",
      icon: "🌳",
      href: "/outdoorlighting",
    },
    {
      title: "Generator Installation",
      description: "Whole-home backup generators for emergency power protection.",
      icon: "🔋",
      href: "/generators",
    },
    {
      title: "Dedicated Circuits",
      description: "Power heavy appliances with dedicated wiring and breakers.",
      icon: "🎯",
      href: "/dedicated-circuit-installation",
    },
    {
      title: "Surge Protection",
      description: "Protect your entire home from electrical surges and spikes.",
      icon: "🛡️",
      href: "/whole-house-surge-protection",
    },
    {
      title: "Lighting & Fixtures",
      description: "Install modern fixtures for recessed, pendant, or statement lighting.",
      icon: "💡",
      href: "/lighting-fixture-installation",
    },
    {
      title: "Smoke Detectors",
      description: "Keep your family safe with up-to-code smoke detector installs.",
      icon: "🔥",
      href: "/smoke-detector-installation",
    },
    {
      title: "Home Safety Inspection",
      description: "Thorough inspections to detect hazards and ensure compliance.",
      icon: "🧯",
      href: "/contactus",
    },
    {
      title: "Security Lighting",
      description: "Bright, motion-activated lighting to deter unwanted visitors.",
      icon: "🔦",
      href: "/contactus",
    },
    {
      title: "Motion Sensor Lights",
      description: "Lights that activate when motion is detected for added safety.",
      icon: "🚨",
      href: "/contact",
    },
    {
      title: "Outlet Upgrades",
      description: "Replace damaged or outdated outlets with safer modern options.",
      icon: "🧱",
      href: "/contact",
    },
    {
      title: "Accent Lighting",
      description: "Decorative lighting to highlight architectural features and artwork.",
      icon: "✨",
      href: "/contact",
    },
    {
      title: "Porch Lighting",
      description: "Welcoming entrance lighting for safety and curb appeal.",
      icon: "🏠",
      href: "/contact",
    },
    {
      title: "Shed Lighting",
      description: "Functional lighting solutions for outdoor storage buildings.",
      icon: "🏚️",
      href: "/contact",
    },
    {
      title: "Garage Lighting",
      description: "Bright, efficient lighting for workshops and parking areas.",
      icon: "🚗",
      href: "/contact",
    },
    {
      title: "Ceiling Fans",
      description: "Energy-efficient ceiling fan installation and replacement.",
      icon: "🌀",
      href: "/contact",
    },
    {
      title: "Chandelier Installation",
      description: "Professional installation of decorative lighting fixtures.",
      icon: "💎",
      href: "/contact",
    },
    {
      title: "Deck Lighting",
      description: "Safe, attractive lighting for outdoor deck areas.",
      icon: "🪵",
      href: "/contact",
    },
    {
      title: "Dedicated Kitchen Circuits",
      description: "Specialized circuits for high-power kitchen appliances.",
      icon: "🔗",
      href: "/contact",
    },
    {
      title: "Dimmers",
      description: "Install dimmer switches for customizable lighting control.",
      icon: "🎚️",
      href: "/contact",
    },
    {
      title: "Disconnects",
      description: "Safety disconnect switches for electrical equipment.",
      icon: "🔌",
      href: "/contact",
    },
    {
      title: "Electrical Code Updates",
      description: "Bring your electrical system up to current safety codes.",
      icon: "📋",
      href: "/contact",
    },
    {
      title: "Electrical Inspection Reports",
      description: "Comprehensive electrical safety inspections and reporting.",
      icon: "📊",
      href: "/contact",
    },
    {
      title: "Generator Installs & Repairs",
      description: "Complete generator services from installation to maintenance.",
      icon: "⚙️",
      href: "/contact",
    },
    {
      title: "GFCI Outlets",
      description: "Ground fault protection outlets for wet areas and safety.",
      icon: "🛡️",
      href: "/contact",
    },
    {
      title: "Hot Tub Circuit Repairs",
      description: "Specialized electrical repairs for spa and hot tub systems.",
      icon: "🛁",
      href: "/contact",
    },
    {
      title: "Large Appliance Outlets",
      description: "Heavy-duty outlets for washers, dryers, and appliances.",
      icon: "🔌",
      href: "/contact",
    },
    {
      title: "LED Lighting",
      description: "Energy-efficient LED lighting upgrades and installations.",
      icon: "💡",
      href: "/contact",
    },
    {
      title: "Light Dimmers",
      description: "Modern dimmer controls for perfect lighting ambiance.",
      icon: "🎛️",
      href: "/contact",
    },
    {
      title: "Motion Sensors",
      description: "Automatic lighting controls for convenience and security.",
      icon: "👁️",
      href: "/contact",
    },
    {
      title: "New & Dedicated Circuits",
      description: "Install new electrical circuits for additional power needs.",
      icon: "🆕",
      href: "/contact",
    },
    {
      title: "Outdoor Outlet Installation",
      description: "Weather-resistant outlets for outdoor power needs.",
      icon: "🌧️",
      href: "/contact",
    },
    {
      title: "Outdoor Lighting",
      description: "Comprehensive outdoor lighting for safety and beauty.",
      icon: "🌙",
      href: "/contact",
    },
    {
      title: "Patio Lighting",
      description: "Create perfect outdoor entertaining spaces with lighting.",
      icon: "🪑",
      href: "/contact",
    },
    {
      title: "Recessed Can Lighting",
      description: "Clean, modern recessed lighting installations.",
      icon: "⭕",
      href: "/contact",
    },
    {
      title: "Recessed Lighting",
      description: "Professional recessed lighting design and installation.",
      icon: "🔆",
      href: "/contact",
    },
    {
      title: "Replacement Breakers",
      description: "Replace old or faulty circuit breakers for safety.",
      icon: "🔄",
      href: "/contact",
    },
    {
      title: "Replacement Plugs & Switches",
      description: "Update worn outlets and switches with modern options.",
      icon: "🔁",
      href: "/contact",
    },
    {
      title: "Residential Electrical Installation",
      description: "Complete residential electrical services and installations.",
      icon: "🏡",
      href: "/contact",
    },
    {
      title: "Safety Outlets",
      description: "Install tamper-resistant and safety outlets for protection.",
      icon: "🛡️",
      href: "/contact",
    },
    {
      title: "Sensors & Timers",
      description: "Automated controls for lighting and electrical systems.",
      icon: "⏰",
      href: "/contact",
    },
    {
      title: "Smart Wiring",
      description: "Future-ready wiring for smart home technology.",
      icon: "🧠",
      href: "/contact",
    },
    {
      title: "Specialty Lighting",
      description: "Custom lighting solutions for unique applications.",
      icon: "🌟",
      href: "/contact",
    },
    {
      title: "Storage Units",
      description: "Electrical installations for storage and utility buildings.",
      icon: "📦",
      href: "/contact",
    },
    {
      title: "Sub Panels",
      description: "Additional electrical panels for expanded power distribution.",
      icon: "⚡",
      href: "/contact",
    },
    {
      title: "Subpanel Installation",
      description: "Professional subpanel installation for added capacity.",
      icon: "📋",
      href: "/contact",
    },
    {
      title: "Surge Protectors",
      description: "Individual surge protection devices for equipment safety.",
      icon: "⚡",
      href: "/contact",
    },
    {
      title: "Surge Suppression Systems",
      description: "Whole-home surge suppression for complete protection.",
      icon: "🛡️",
      href: "/contact",
    },
    {
      title: "Surround Sound",
      description: "Professional wiring for home theater and audio systems.",
      icon: "🔊",
      href: "/contact",
    },
    {
      title: "Switches & Wiring",
      description: "Complete switch installation and wiring services.",
      icon: "🔌",
      href: "/contact",
    },
    {
      title: "Timers",
      description: "Automated timer controls for lights and electrical devices.",
      icon: "⏲️",
      href: "/contact",
    },
    {
      title: "Track Lighting",
      description: "Flexible track lighting systems for versatile illumination.",
      icon: "🛤️",
      href: "/contact",
    },
    {
      title: "Under Cabinet Lighting",
      description: "Task lighting for kitchen counters and workspaces.",
      icon: "🍳",
      href: "/contact",
    },
    {
      title: "USB Outlets",
      description: "Convenient built-in USB charging outlets.",
      icon: "🔌",
      href: "/contact",
    },
    {
      title: "Wall Switches",
      description: "Modern wall switch installation and replacement.",
      icon: "🎚️",
      href: "/contact",
    },
    {
      title: "Wiring Upgrades",
      description: "Electrical system upgrades for safety and capacity.",
      icon: "🔧",
      href: "/contact",
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
                Professional Electrical Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                From EV charger installations to whole-home generators, ABR Electric provides expert electrical services
                for homes and businesses in McKinney, Allen, Frisco, Plano, and surrounding areas.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-black to-[#0a1a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Electrical Work?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact ABR Electric today for a free quote on any of our professional electrical services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contactus"
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
