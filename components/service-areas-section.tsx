import { MapPin, Phone, Globe } from "lucide-react"
import Link from "next/link"

export default function ServiceAreasSection() {
  const serviceAreas = [
    { name: "ABR Electric of McKinney", href: "/mckinney" },
    { name: "ABR Electric of Allen", href: "/allen" },
    { name: "ABR Electric of Frisco", href: "/frisco" },
    { name: "ABR Electric of Plano", href: "/plano" },
    { name: "ABR Electric of Prosper", href: "/prosper" },
    { name: "ABR Electric of Wylie", href: "/wylie" },
    { name: "ABR Electric of Murphy", href: "/murphy" },
    { name: "ABR Electric of Fairview", href: "/fairview" },
    { name: "ABR Electric of Princeton", href: "/princeton" },
    { name: "ABR Electric of Anna", href: "/anna" },
    { name: "ABR Electric of Melissa", href: "/melissa" },
    { name: "ABR Electric of Celina", href: "/celina" },
  ]

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Service Areas</h2>
        <p className="text-gray-300 text-lg mb-12">Ready to get started? Contact us today for your free quote!</p>

        <div className="mb-12">
          <h3 className="text-[#22c55e] text-2xl font-semibold mb-6">Get In Touch</h3>

          <div className="space-y-4 max-w-2xl">
            <div className="flex items-start gap-4">
              <div className="bg-[#22c55e] rounded-full p-2 mt-1">
                <MapPin className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Address</p>
                <p className="text-gray-300">1971 Univ Business Dr #106, McKinney, TX 75071</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#22c55e] rounded-full p-2 mt-1">
                <Phone className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Phone</p>
                <a href="tel:+12146901941" className="text-gray-300 hover:text-[#22c55e] transition-colors">
                  +1 214-690-1941
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#22c55e] rounded-full p-2 mt-1">
                <Globe className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Website</p>
                <a
                  href="https://abrelectric.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#22c55e] transition-colors"
                >
                  https://abrelectric.com/
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-[#22c55e] text-2xl font-semibold mb-6">Service Areas</h3>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
            {serviceAreas.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="bg-[#1a2332] text-white py-4 px-6 rounded-lg hover:bg-[#22c55e] hover:text-black transition-all duration-300 font-medium text-left block"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
