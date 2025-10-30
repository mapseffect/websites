import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Check } from "lucide-react"
import Image from "next/image"

export default function WorkshopsPage() {
  const workshops = [
    {
      title: "Homeowners Electrical Workshop",
      slug: "electrical-skills-for-homeowners-course",
      description:
        "Safe DIY electrical work fundamentals. Perfect for homeowners who want to handle basic electrical tasks confidently and safely.",
      features: ["Fundamental electrical skills", "Safe tool usage", "Hands-on practice"],
      price: "$325",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      image: "/homeowners-workshop-image.jpg",
    },
    {
      title: "Residential Wireman Course",
      slug: "residential-wireman-course",
      description:
        "Career development track for aspiring electricians. Test prep training focused on residential wiring careers.",
      features: ["Codebook navigation", "Hands-on guidance", "Practice quizzes"],
      price: "$325",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      image: "/wireman-course-image.jpg",
    },
    {
      title: "Texas RAIL Workshop",
      slug: "texas-rail-workshop",
      description:
        "Master the Texas Residential Appliance Installer License test with hands-on training and expert guidance.",
      features: ["Codebook navigation", "Hands-on guidance", "Real-life application"],
      price: "$325",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
      image: "/rail-workshop-image.jpg",
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Choose Your Path</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                All workshops include hands-on training and expert guidance
              </p>
            </div>
          </div>
        </section>

        {/* Workshop Cards Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {workshops.map((workshop, index) => (
                <div
                  key={index}
                  className="bg-[#1a2332] rounded-lg overflow-hidden border border-white/10 hover:border-[#22c55e]/30 transition-all duration-300"
                >
                  <div className="relative">
                    <Image
                      src={workshop.image || "/placeholder.svg"}
                      alt={workshop.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Limited: 5 Spots
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{workshop.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{workshop.description}</p>
                    <ul className="space-y-3 mb-6">
                      {workshop.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <Check className="w-5 h-5 text-[#22c55e] flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mb-4">
                      <p className="text-gray-400 text-sm mb-1">Investment</p>
                      <p className="text-[#22c55e] text-3xl font-bold">{workshop.price}</p>
                    </div>
                    <Link
                      href={`/${workshop.slug}`}
                      className={`block text-center ${workshop.buttonColor} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                    >
                      Register →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section for Larger Crews */}
        <section className="py-16 bg-gradient-to-r from-[#0a3a2a] via-[#1a2a4a] to-[#2a1a5a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Appliance Training for a Larger Crew?
              </h2>
              <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                If your business — like a pool company, maintenance service, or large facility team — needs a Texas
                RAIL-certified class for more than five employees, we've got you covered.
              </p>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Our expanded training sessions are designed for real-world electrical applications, helping your team
                stay compliant, efficient, and confident on every job.
              </p>
              <p className="text-white font-semibold text-xl mb-4">Get in touch today:</p>
              <a
                href="mailto:support@abrelectric.com"
                className="inline-block bg-[#22c55e] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors text-lg"
              >
                support@abrelectric.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
