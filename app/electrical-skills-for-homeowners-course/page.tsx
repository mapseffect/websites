import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"
import type { Metadata } from "next"
import { Shield, Award, Users, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "ABR Electric Homeowners Electrical Workshop Collin County | DIY Training",
  description:
    "Safe DIY electrical work fundamentals for homeowners in McKinney, TX. Learn basic electrical skills, safe tool usage, and hands-on practice. Perfect for confident homeowners.",
}

export default function HomeownersCoursePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-[#1a0a0a] to-[#2d0a0a] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Homeowners Electrical Workshop</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Safe DIY electrical work fundamentals for confident homeowners
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">About ABR Electric Training</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                ABR Electric is a veteran-owned electrical company serving Collin County with professional electrical
                services and comprehensive training programs. Our Homeowners Electrical Workshop is designed to empower
                homeowners with the knowledge and skills to safely perform basic electrical work in their homes. Led by
                licensed electricians with years of field experience, our hands-on training covers essential electrical
                safety, proper tool usage, and code-compliant practices.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Located in McKinney, Texas, we serve homeowners throughout Collin County including Frisco, Plano, Allen,
                Prosper, and surrounding communities. Our workshop provides practical, real-world training that helps
                you understand your home's electrical system, identify potential hazards, and complete simple electrical
                projects with confidence. Whether you're looking to replace outlets, install light fixtures, or simply
                understand how your electrical panel works, our expert instructors provide the guidance you need.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <Shield className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Licensed Instructors</h3>
                  <p className="text-gray-400 text-sm">Taught by certified electricians</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <Award className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Veteran Owned</h3>
                  <p className="text-gray-400 text-sm">Proudly serving our community</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <Users className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Small Class Sizes</h3>
                  <p className="text-gray-400 text-sm">Personalized attention</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <Clock className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Flexible Schedule</h3>
                  <p className="text-gray-400 text-sm">Evening and weekend options</p>
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
                Fill out the form below to register for our next Homeowners Electrical Workshop. Limited spots
                available. Call (214) 690-1941 for immediate assistance.
              </p>
              <div className="bg-[#1a2332] rounded-lg p-8 border border-white/10">
                <iframe
                  id="formnx-12dh14-uud12ri2"
                  src="https://fill.formnx.com/f/abr-electric-workshops-12dh14?iframe=true"
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
