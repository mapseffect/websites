import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ServiceAreasSection from "@/components/service-areas-section"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "ABR Electric Outdoor Lighting Installation Collin County",
  description:
    "Professional outdoor and landscape lighting installation in Collin County. ABR Electric installs path lighting, security lighting, LED fixtures, and motion-activated systems. Licensed electrician serving McKinney, Allen, Frisco. Call 214-690-1941.",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you install outdoor and landscape lighting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ABR Electric installs low-voltage and line-voltage lighting for pathways, gardens, patios, and architectural features. Please fill out our form, send photos if possible, and contact support@abrelectric.com or 214-690-1941.",
          },
        },
        {
          "@type": "Question",
          name: "Can you install motion-activated security lighting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We install motion-sensor and dusk-to-dawn lights around driveways, garages, and backyards for added safety. Fill out our form with the areas you'd like covered, then call 214-690-1941.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer energy-efficient LED options?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We install LED fixtures designed for outdoor use that save energy and reduce maintenance. Email support@abrelectric.com or call 214-690-1941 for recommendations.",
          },
        },
        {
          "@type": "Question",
          name: "Can you upgrade my existing outdoor lighting system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We replace outdated or faulty fixtures, upgrade transformers, and convert older systems to LED. Send photos of your current setup using our form for an accurate estimate.",
          },
        },
        {
          "@type": "Question",
          name: "Is outdoor lighting safe to install near gardens or pools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We follow code requirements for weatherproof and GFCI-protected circuits. ABR Electric ensures all outdoor lighting is safe in wet locations. Contact us for a site evaluation.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide design advice for landscape lighting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We help highlight architectural features, trees, and pathways to balance safety with aesthetics. Please fill out our form and upload photos of your yard for tailored suggestions.",
          },
        },
        {
          "@type": "Question",
          name: "How much does outdoor or security lighting installation cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cost depends on the number of fixtures, wiring length, and whether trenching or new circuits are required. For an accurate quote, fill out our form, send pictures, and call 214-690-1941.",
          },
        },
      ],
    }),
  },
}

export default function OutdoorLightingPage() {
  const faqs = [
    {
      question: "Do you install outdoor and landscape lighting?",
      answer:
        "Yes. ABR Electric installs low-voltage and line-voltage lighting for pathways, gardens, patios, and architectural features. Please fill out our form, send photos if possible, and contact support@abrelectric.com or 214-690-1941.",
    },
    {
      question: "Can you install motion-activated security lighting?",
      answer:
        "Yes. We install motion-sensor and dusk-to-dawn lights around driveways, garages, and backyards for added safety. Fill out our form with the areas you'd like covered, then call 214-690-1941.",
    },
    {
      question: "Do you offer energy-efficient LED options?",
      answer:
        "Yes. We install LED fixtures designed for outdoor use that save energy and reduce maintenance. Email support@abrelectric.com or call 214-690-1941 for recommendations.",
    },
    {
      question: "Can you upgrade my existing outdoor lighting system?",
      answer:
        "Yes. We replace outdated or faulty fixtures, upgrade transformers, and convert older systems to LED. Send photos of your current setup using our form for an accurate estimate.",
    },
    {
      question: "Is outdoor lighting safe to install near gardens or pools?",
      answer:
        "Yes. We follow code requirements for weatherproof and GFCI-protected circuits. ABR Electric ensures all outdoor lighting is safe in wet locations. Contact us for a site evaluation.",
    },
    {
      question: "Do you provide design advice for landscape lighting?",
      answer:
        "Yes. We help highlight architectural features, trees, and pathways to balance safety with aesthetics. Please fill out our form and upload photos of your yard for tailored suggestions.",
    },
    {
      question: "How much does outdoor or security lighting installation cost?",
      answer:
        "Cost depends on the number of fixtures, wiring length, and whether trenching or new circuits are required. For an accurate quote, fill out our form, send pictures, and call 214-690-1941.",
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section with Parallax Background */}
        <section className="relative min-h-[600px] flex items-center overflow-hidden">
          {/* Parallax Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "url('https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/fa50ab18-1c6c-46bb-e187-38bb55fffb00/public')",
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Text Content */}
              <div className="text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Outdoor Lighting</h1>

                <div className="space-y-6 bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#22c55e] mb-3">What Do You Want to See?</h2>
                    <p className="text-gray-200 leading-relaxed">
                      Before focusing on fixtures, consider what parts of your outdoor space you want to highlight at
                      night. Whether it's architectural features, garden elements, or creating a sense of security,
                      start by asking yourself what's most important.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold text-[#22c55e] mb-3">
                      How Do You Want to Feel About the Space?
                    </h2>
                    <p className="text-gray-200 leading-relaxed">
                      Landscape lighting isn't just about brightness—it's about creating ambiance. Consider how you want
                      to feel about the space once it's lit. Lighting can transform your home's exterior into a
                      welcoming and dramatic scene without making it look like a floodlit stadium.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: YouTube Video */}
              <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/3l3pYpqzL24"
                    title="Outdoor Lighting Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lighting Types Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Types of Outdoor Lighting We Install
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Path Lighting */}
              <div className="group relative overflow-hidden rounded-lg border border-gray-800 hover:border-[#22c55e]/50 transition-all duration-300">
                <div className="relative h-[400px]">
                  <img
                    src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/64040c88-4e92-45b5-8617-5a7fff25d600/public"
                    alt="Path Lighting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Path Lighting</h3>
                    <p className="text-gray-300">
                      Illuminate walkways and garden paths for safety and aesthetic appeal with low-voltage LED path
                      lights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fence & Security Lighting */}
              <div className="group relative overflow-hidden rounded-lg border border-gray-800 hover:border-[#22c55e]/50 transition-all duration-300">
                <div className="relative h-[400px]">
                  <img
                    src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/eb0a6992-7572-4cb8-f68c-c7f4d8b10300/public"
                    alt="Fence and Security Lighting"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Fence & Security Lighting</h3>
                    <p className="text-gray-300">
                      Motion-activated and dusk-to-dawn security lighting to protect your property and enhance safety
                      around perimeters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-[#0a0a0a] via-black to-[#0a1a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Lighting FAQ – ABR Electric
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-[#1a2332] border border-gray-800 rounded-lg px-6 data-[state=open]:border-[#22c55e]/30"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-[#22c55e] hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-4 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* CTA Box */}
              <div className="mt-8 bg-[#111] border border-gray-800 rounded-lg p-6 text-center">
                <p className="text-gray-300">
                  <strong className="text-white">Next step:</strong>{" "}
                  <Link href="/contactus" className="text-[#22c55e] hover:text-[#16a34a] font-semibold">
                    Fill out our form
                  </Link>{" "}
                  and upload photos if possible. Questions? Email{" "}
                  <a
                    href="mailto:support@abrelectric.com"
                    className="text-[#22c55e] hover:text-[#16a34a] font-semibold"
                  >
                    support@abrelectric.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:12146901941" className="text-[#22c55e] hover:text-[#16a34a] font-semibold">
                    214-690-1941
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Outdoor Space?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact ABR Electric today for professional outdoor and landscape lighting installation.
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

        {/* Service Areas Section */}
        <ServiceAreasSection />
      </main>
      <Footer />
    </>
  )
}
