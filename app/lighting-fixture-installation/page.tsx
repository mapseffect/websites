import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"

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
      </main>
      <Footer />
    </>
  )
}
