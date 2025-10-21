import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"
import type { Metadata } from "next"
import { Shield, Award, BookOpen, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "ABR Electric Texas RAIL Workshop Collin County | License Prep",
  description:
    "Master the Texas Residential Appliance Installer License test with hands-on training in McKinney, TX. Expert guidance, codebook navigation, and real-life application. Limited spots available.",
}

export default function TexasRailWorkshopPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-[#1a0a0a] to-[#2d0a0a] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Texas RAIL Workshop</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Master the Texas Residential Appliance Installer License test
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Pass Your RAIL License Exam</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                ABR Electric's Texas RAIL (Residential Appliance Installer License) Workshop is specifically designed to
                help you pass the Texas state licensing examination on your first attempt. This focused training program
                covers all aspects of the RAIL exam including the National Electrical Code requirements for residential
                appliance installation, proper wiring methods, safety protocols, and code compliance. Our experienced
                instructors provide expert guidance on codebook navigation, test-taking strategies, and real-world
                application of electrical principles.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                As a veteran-owned electrical company based in McKinney, Texas, ABR Electric has been serving Collin
                County with professional electrical services and training for years. Our RAIL Workshop instructors are
                licensed master electricians who understand exactly what it takes to pass the state exam. We provide
                comprehensive study materials, practice quizzes, hands-on demonstrations, and personalized coaching to
                ensure you're fully prepared. The workshop includes detailed coverage of residential appliance circuits,
                load calculations, grounding requirements, and installation standards. Limited spots are available to
                maintain small class sizes and provide individual attention to each student.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <Shield className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Expert Instructors</h3>
                  <p className="text-gray-400 text-sm">Licensed master electricians</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <BookOpen className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Exam Focused</h3>
                  <p className="text-gray-400 text-sm">Pass on first attempt</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <CheckCircle className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Hands-On Training</h3>
                  <p className="text-gray-400 text-sm">Real-world applications</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <Award className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Veteran Owned</h3>
                  <p className="text-gray-400 text-sm">Serving Collin County</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 bg-gradient-to-br from-[#0a1a0a] via-black to-[#1a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Register for Workshop</h2>
              <p className="text-gray-300 text-center mb-8">
                Get your RAIL license with expert training. Fill out the form below to register for our next workshop.
                Call (214) 690-1941 for workshop dates and pricing.
              </p>
              <div className="bg-[#1a2332] rounded-lg p-8 border border-white/10">
                <iframe
                  id="formnx-11gi40-peiz9bbg"
                  src="https://fill.formnx.com/f/abr-electric-s-rail-and-residential-wireman-course-11gi40?iframe=true"
                  frameBorder="0"
                  style={{ width: "1px", minWidth: "100%", border: "none" }}
                  className="min-h-[600px]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script src="https://formnx.com/js/iframeResizer.js" strategy="lazyOnload" />
      <Script src="https://formnx.com/js/widget.js" strategy="lazyOnload" />
    </>
  )
}
