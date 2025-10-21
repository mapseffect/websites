import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"
import type { Metadata } from "next"
import { Shield, Award, BookOpen, Briefcase } from "lucide-react"

export const metadata: Metadata = {
  title: "ABR Electric Residential Wireman Course Collin County | Career Training",
  description:
    "Career development track for aspiring electricians in McKinney, TX. Test prep training focused on residential wiring careers with hands-on guidance and practice quizzes.",
}

export default function WiremanCoursePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-[#1a0a0a] to-[#2d0a0a] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Residential Wireman Course</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Career development track for aspiring electricians
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Launch Your Electrical Career</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                ABR Electric's Residential Wireman Course is a comprehensive career development program designed for
                individuals pursuing a professional career in the electrical trade. This intensive training prepares you
                for the Texas Residential Wireman License examination while providing practical, hands-on experience
                with residential electrical systems. Our course covers the National Electrical Code (NEC), residential
                wiring methods, load calculations, service installations, and safety protocols required for professional
                electricians.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                As a veteran-owned electrical company serving Collin County since our founding, ABR Electric brings
                real-world expertise to our training programs. Our instructors are licensed master electricians with
                extensive field experience in residential electrical work throughout McKinney, Frisco, Plano, Allen, and
                surrounding communities. We provide test preparation materials, practice exams, codebook navigation
                training, and ongoing support to help you succeed in your electrical career. Whether you're starting
                fresh or advancing your existing skills, our Residential Wireman Course provides the foundation you need
                for a successful career in the electrical industry.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <Shield className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Licensed Instructors</h3>
                  <p className="text-gray-400 text-sm">Master electricians teaching</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <BookOpen className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Test Prep Focus</h3>
                  <p className="text-gray-400 text-sm">Pass your license exam</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <Briefcase className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Career Support</h3>
                  <p className="text-gray-400 text-sm">Job placement assistance</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <Award className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Veteran Owned</h3>
                  <p className="text-gray-400 text-sm">Supporting our community</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 bg-gradient-to-br from-[#0a1a0a] via-black to-[#1a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Enroll in Course</h2>
              <p className="text-gray-300 text-center mb-8">
                Start your electrical career today. Fill out the form below to enroll in our Residential Wireman Course.
                Call (214) 690-1941 for course details and availability.
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
