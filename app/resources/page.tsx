import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Home Service Resources | ABR Electric",
  description:
    "Directory of home service categories for homeowners. Find HVAC, plumbing, roofing, and other home service information.",
  alternates: {
    canonical: "https://abrelectric.com/resources",
  },
}

const resourceCategories = [
  {
    title: "HVAC Services",
    description: "Heating, cooling, and air conditioning installation, repair, and maintenance.",
    icon: "❄️",
    links: [
      { name: "Find HVAC Contractors", url: "#" },
      { name: "HVAC Maintenance Tips", url: "#" },
    ],
  },
  {
    title: "Plumbing Services",
    description: "Professional plumbers for repairs, installations, drain cleaning, and water heaters.",
    icon: "🚰",
    links: [
      { name: "Find Plumbers", url: "#" },
      { name: "Emergency Plumbing Services", url: "#" },
    ],
  },
  {
    title: "Roofing Services",
    description: "Roof repair, replacement, inspection, and maintenance for residential properties.",
    icon: "🏠",
    links: [
      { name: "Find Roofers", url: "#" },
      { name: "Roof Inspection Services", url: "#" },
    ],
  },
  {
    title: "Landscaping & Lawn Care",
    description: "Lawn maintenance, tree service, irrigation, and landscape design.",
    icon: "🌳",
    links: [
      { name: "Find Landscapers", url: "#" },
      { name: "Lawn Care Services", url: "#" },
    ],
  },
  {
    title: "Pest Control",
    description: "Extermination, prevention, and inspection services for all types of pests.",
    icon: "🐛",
    links: [
      { name: "Find Pest Control", url: "#" },
      { name: "Termite Inspection Services", url: "#" },
    ],
  },
  {
    title: "Cleaning Services",
    description: "House cleaning, carpet cleaning, window cleaning, and deep cleaning services.",
    icon: "🧹",
    links: [
      { name: "Find Cleaners", url: "#" },
      { name: "Carpet Cleaning Services", url: "#" },
    ],
  },
  {
    title: "Handyman Services",
    description: "General repairs, maintenance, and home improvement projects.",
    icon: "🔧",
    links: [
      { name: "Find Handyman", url: "#" },
      { name: "Home Repair Services", url: "#" },
    ],
  },
  {
    title: "Painting Services",
    description: "Interior and exterior painting, staining, and finishing services.",
    icon: "🎨",
    links: [
      { name: "Find Painters", url: "#" },
      { name: "Interior Painting Services", url: "#" },
    ],
  },
  {
    title: "Flooring Services",
    description: "Flooring installation, refinishing, repair for hardwood, tile, and carpet.",
    icon: "🪵",
    links: [
      { name: "Find Flooring Contractors", url: "#" },
      { name: "Hardwood Floor Refinishing", url: "#" },
    ],
  },
  {
    title: "Garage Door Services",
    description: "Garage door repair, installation, and maintenance services.",
    icon: "🚪",
    links: [
      { name: "Ranger Garage Door Repair - Houston, TX", url: "https://rangergaragedoor.com/" },
      { name: "Garage Door Repair", url: "#" },
    ],
  },
  {
    title: "Remodeling & Renovation",
    description: "Kitchen remodeling, bathroom renovation, and home improvement services.",
    icon: "🏗️",
    links: [
      { name: "LA Top Renovation - Los Angeles, CA", url: "https://latoprenovation.com/" },
      { name: "Kitchen Remodeling Services", url: "#" },
    ],
  },
  {
    title: "Security Systems",
    description: "Home security system installation, monitoring, and smart home integration.",
    icon: "🔒",
    links: [
      { name: "Find Security Companies", url: "#" },
      { name: "Smart Home Security", url: "#" },
    ],
  },
  {
    title: "Pool Services",
    description: "Pool maintenance, repair, cleaning, and equipment installation.",
    icon: "🏊",
    links: [
      { name: "Find Pool Services", url: "#" },
      { name: "Pool Maintenance Services", url: "#" },
    ],
  },
  {
    title: "Appliance Repair",
    description: "Repair services for refrigerators, washers, dryers, and other appliances.",
    icon: "🔌",
    links: [
      { name: "Find Appliance Repair", url: "#" },
      { name: "Refrigerator Repair Services", url: "#" },
    ],
  },
  {
    title: "Locksmith Services",
    description: "Lock installation, repair, rekeying, and emergency lockout services.",
    icon: "🔑",
    links: [
      { name: "Find Locksmiths", url: "#" },
      { name: "Emergency Locksmith Services", url: "#" },
    ],
  },
  {
    title: "Window & Door Services",
    description: "Window and door installation, repair, and replacement services.",
    icon: "🪟",
    links: [
      { name: "Find Window Contractors", url: "#" },
      { name: "Door Installation Services", url: "#" },
    ],
  },
]

export default function ResourcesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Home Service Resources",
    description: "Home service directory for homeowners",
    provider: {
      "@type": "LocalBusiness",
      name: "ABR Electric",
      url: "https://abrelectric.com",
    },
    about: {
      "@type": "Service",
      serviceType: "Home Services Directory",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main className="min-h-screen bg-[#0a1628]">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Home Service Resources</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A directory of home service categories for homeowners. Browse various service types to find information
              about HVAC, plumbing, roofing, and other home services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#22c55e] hover:bg-[#16a34a] text-white">
                <Link href="/contactus">Contact ABR Electric</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
              >
                <Link href="/services">Our Electrical Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Home Service Categories</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Browse home service categories to find information about different types of services available for your
                home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourceCategories.map((category, index) => (
                <Card key={index} className="bg-[#1a2332] border-gray-700 hover:border-[#22c55e] transition-colors">
                  <CardHeader>
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                    <CardDescription className="text-gray-400">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.url}
                          className="block text-[#22c55e] hover:text-[#16a34a] text-sm transition-colors"
                        >
                          → {link.name}
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-[#1a2332]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">About This Directory</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="text-3xl mb-3">📋</div>
                <h3 className="text-xl font-semibold text-white mb-2">Service Categories</h3>
                <p className="text-gray-300">
                  This directory lists common home service categories that homeowners may need for property maintenance
                  and repairs.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🏘️</div>
                <h3 className="text-xl font-semibold text-white mb-2">Homeowner Resource</h3>
                <p className="text-gray-300">
                  Information organized to help homeowners find and understand different types of home services.
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">Service Information</h3>
                <p className="text-gray-300">
                  Browse categories to learn about different types of home services and what they typically include.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Electrical Services?</h2>
            <p className="text-xl text-gray-300 mb-8">ABR Electric provides professional electrical services.</p>
            <Button asChild size="lg" className="bg-[#22c55e] hover:bg-[#16a34a] text-white">
              <Link href="/contactus">Get Your Free Quote Today</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
