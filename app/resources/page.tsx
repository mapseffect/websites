import Link from "next/link"
import {
  Snowflake,
  Wrench,
  Home,
  Sprout,
  Bug,
  Sparkles,
  Hammer,
  PaintBucket,
  Layers,
  Warehouse,
  HardHat,
  Shield,
  PenTool as Tool,
  AlertCircle,
  Key,
  DoorOpen,
  Truck,
} from "lucide-react"

export default function ResourcesPage() {
  const serviceCategories = [
    {
      icon: Snowflake,
      title: "HVAC Services",
      description: "Heating, ventilation, and air conditioning installation, repair, and maintenance.",
      links: [
        { text: "All HVAC Companies", href: "#" },
        { text: "HVAC Maintenance Tips", href: "#" },
      ],
    },
    {
      icon: Wrench,
      title: "Plumbing Services",
      description: "Professional plumbing for repairs, installations, drain cleaning, and water heater repairs.",
      links: [
        { text: "Find Plumbers", href: "#" },
        { text: "Plumbing & Repair Services", href: "#" },
      ],
    },
    {
      icon: Home,
      title: "Roofing Services",
      description: "Roofing installation, repair, and maintenance services.",
      links: [
        { text: "Roofing Services", href: "https://caroofing.ca/" },
        { text: "CA Roofing Consultants", href: "#" },
        { text: "Unlimited Roof Refurbishing", href: "#" },
      ],
    },
    {
      icon: Sprout,
      title: "Landscaping & Lawn Care",
      description: "Professional landscaping, lawn maintenance, and outdoor design services.",
      links: [
        { text: "All Landscapers", href: "#" },
        { text: "Lawn Care Services", href: "#" },
      ],
    },
    {
      icon: Bug,
      title: "Pest Control",
      description: "Pest prevention, extermination, and inspection services for homes and businesses.",
      links: [
        { text: "City Pest Control", href: "#" },
        { text: "Insect Inspection Services", href: "#" },
      ],
    },
    {
      icon: Sparkles,
      title: "Cleaning Services",
      description: "Professional house cleaning services, window cleaning, and carpet cleaning services.",
      links: [
        { text: "Find Cleaners", href: "#" },
        { text: "Cleaning & Services", href: "#" },
      ],
    },
    {
      icon: Hammer,
      title: "Handyman Services",
      description: "General repairs, maintenance, and home improvement services.",
      links: [
        { text: "Local Handyman", href: "#" },
        { text: "Home Repair Services", href: "#" },
      ],
    },
    {
      icon: PaintBucket,
      title: "Painting Services",
      description: "Interior and exterior painting, staining, and finishing services.",
      links: [
        { text: "CA Painters", href: "#" },
        { text: "Interior Painting Services", href: "#" },
      ],
    },
    {
      icon: Layers,
      title: "Flooring Services",
      description: "Flooring installation, refinishing, repair, tile, hardwood, laminate, and carpet services.",
      links: [
        { text: "CA Flooring Consultants", href: "#" },
        { text: "Hardwood Floor Refurbishing", href: "#" },
      ],
    },
    {
      icon: Warehouse,
      title: "Garage Door Services",
      description: "Garage door installation, repair, and maintenance services.",
      links: [
        { text: "Ranger Garage Door", href: "https://rangergaragedoor.com/" },
        { text: "Burges Garage Door Repair – Downey, TX", href: "#" },
        { text: "Garage Door Repairs", href: "#" },
      ],
    },
    {
      icon: HardHat,
      title: "Remodeling & Renovation",
      description: "Complete home remodeling, kitchen, bathroom, and basement renovation services.",
      links: [
        { text: "Latop Renovation", href: "https://latoprenovation.com/" },
        { text: "LA Bay Renovation – Los Angeles, CA", href: "#" },
        { text: "Kitchen Remodeling Services", href: "#" },
      ],
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "Home security system installation, monitoring, and smart home integration.",
      links: [
        { text: "Find Security Companies", href: "#" },
        { text: "Smart Home Services", href: "#" },
      ],
    },
    {
      icon: Tool,
      title: "Roof Services",
      description: "Roof maintenance, repair, cleaning, and installation services.",
      links: [
        { text: "Roof Services", href: "#" },
        { text: "Roof Maintenance Services", href: "#" },
      ],
    },
    {
      icon: AlertCircle,
      title: "Appliance Repair",
      description: "Repair services for refrigerators, washers, dryers, and other appliances.",
      links: [
        { text: "Appliance Repair", href: "#" },
        { text: "Refrigerator Repair Services", href: "#" },
      ],
    },
    {
      icon: Key,
      title: "Locksmith Services",
      description: "Emergency locksmith, rekeying, and keyless services.",
      links: [
        { text: "Find Locksmiths", href: "#" },
        { text: "Locksmith Services", href: "#" },
      ],
    },
    {
      icon: DoorOpen,
      title: "Window & Door Services",
      description: "Window and door installation, repair, and replacement services.",
      links: [
        { text: "All Window Companies", href: "#" },
        { text: "Door Installation Services", href: "#" },
      ],
    },
    {
      icon: Truck,
      title: "RV Repair Services",
      description: "Comprehensive RV repair, maintenance, tire, and design services.",
      links: [
        { text: "Wrap4Car", href: "https://wrap4car.com/" },
        { text: "ServiCar - Mobile Shop Specialists", href: "#" },
        { text: "Camper Design Services", href: "#" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl">Home Service Resources</h1>
          <p className="mb-8 text-lg text-gray-300">
            A directory of home service categories for homeowners. Browse various service types to find information
            about HVAC, plumbing, roofing, and other home services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#categories"
              className="rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Connect with Experts
            </Link>
            <Link
              href="/"
              className="rounded-md border border-gray-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800"
            >
              See Electrical Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="categories" className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">Home Service Categories</h2>
            <p className="text-gray-300">
              Discover home service categories to find information about different types of services available for your
              home.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="rounded-lg border border-gray-700 bg-[#0f1f3a] p-6 transition-all hover:border-emerald-600"
                >
                  <div className="mb-4 flex items-start gap-4">
                    <div className="rounded-lg bg-emerald-600/10 p-3">
                      <Icon className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold text-white">{category.title}</h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="flex items-start gap-2">
                        <span className="mt-1 text-emerald-500">→</span>
                        <Link
                          href={link.href}
                          className="text-sm text-emerald-400 hover:text-emerald-300 hover:underline"
                          {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-gray-800 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">About This Directory</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-lg bg-emerald-600/10 p-4">
                  <Layers className="h-8 w-8 text-emerald-500" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Service Categories</h3>
              <p className="text-gray-400">
                This directory lists common home service categories that homeowners may need for maintenance and
                repairs.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-lg bg-emerald-600/10 p-4">
                  <AlertCircle className="h-8 w-8 text-emerald-500" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Homeowner Resource</h3>
              <p className="text-gray-400">
                Information organized to help homeowners find and understand different types of home services.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-lg bg-emerald-600/10 p-4">
                  <Shield className="h-8 w-8 text-emerald-500" />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">Service Information</h3>
              <p className="text-gray-400">
                Browse categories to learn about different types of home services and maintenance options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-gray-800 px-4 py-12 text-center">
        <h2 className="mb-4 text-2xl font-bold text-white">Need Electrical Services?</h2>
        <p className="mb-6 text-gray-300">ABR Electric provides professional electrical services for your home.</p>
        <Link
          href="/"
          className="inline-block rounded-md bg-emerald-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
        >
          Visit ABR Electric
        </Link>
      </section>
    </div>
  )
}
