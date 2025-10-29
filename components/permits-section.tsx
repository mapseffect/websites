import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PermitsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/7978c9ce-e45f-4816-6b59-69d25b3e4900/public)",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Electrical Services with Permits & Inspections
          </h2>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Adding a generator, upgrading your electrical panel, or installing EV charging in Collin County? ABR
            Electric handles the paperwork, pulls permits, and schedules inspections across McKinney, Plano, Frisco,
            Allen, Wylie, Prosper, and Murphy. We keep your project compliant and moving.
          </p>
        </div>

        {/* Three Step Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 - Green */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border-2 border-green-500/50 hover:border-green-500 transition-colors">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-green-500 mb-4 text-center">Permits & Pre-Install Checks</h3>
            <p className="text-gray-300 leading-relaxed">
              We file permit applications through your city's portal (McKinney, Plano, Frisco, Allen, and beyond) and
              confirm approval timelines. At the same time, our licensed electricians check your service, grounding, and
              panel capacity so installation day goes smoothly.
            </p>
          </div>

          {/* Step 2 - Blue */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border-2 border-blue-500/50 hover:border-blue-500 transition-colors">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-blue-500 mb-4 text-center">Professional Installation</h3>
            <p className="text-gray-300 leading-relaxed">
              Once permits are approved, our team installs your equipment with precision. We use quality materials,
              follow code requirements, and take photos to document compliance for the upcoming inspection.
            </p>
          </div>

          {/* Step 3 - Yellow */}
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 border-2 border-yellow-500/50 hover:border-yellow-500 transition-colors">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-yellow-500 mb-4 text-center">City Inspection & Final Sign-Off</h3>
            <p className="text-gray-300 leading-relaxed">
              We schedule inspections with the city, meet with inspectors, and handle any corrections if required. The
              result: a fully compliant project with official approval and peace of mind.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-black font-semibold text-lg px-8 py-6"
          >
            <Link href="tel:214-690-1941">
              <Phone className="mr-2 h-5 w-5" />
              214-690-1941
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
