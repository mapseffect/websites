import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      title: "Roofing Services",
      description: "Professional roofing services for residential and commercial properties.",
      url: "https://caroofing.ca/",
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Helpful Resources</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Trusted partners and resources for your home improvement needs.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {resources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1a2332] rounded-lg p-6 hover:bg-[#1f2937] transition-all duration-300 border border-transparent hover:border-[#22c55e]/30 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-[#22c55e] font-semibold text-lg mb-2 group-hover:text-[#16a34a] transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">{resource.description}</p>
                      <span className="text-gray-400 text-xs break-all">{resource.url}</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#22c55e] transition-colors flex-shrink-0" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-black to-[#0a1a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Electrical Services?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact ABR Electric today for professional electrical services in McKinney and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
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
