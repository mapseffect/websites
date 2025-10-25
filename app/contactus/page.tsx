import Header from "@/components/header"
import Footer from "@/components/footer"
import QuoteForm from "@/components/quote-form"
import { MapPin, Phone, Mail, Clock, Shield, Award, Zap } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric Contact Us Collin County | Free Quote",
  description:
    "Contact ABR Electric for professional electrical services in Collin County. Call (214) 690-1941 for a free quote. Serving McKinney, Allen, Frisco, Plano, and surrounding areas.",
  alternates: {
    canonical: "https://abrelectric.com/contactus",
  },
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-[#1a0a0a] to-[#2d0a0a] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Contact ABR Electric</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Get in touch with us for a free quote or to schedule your electrical service.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form Section */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#22c55e] rounded-full p-3 mt-1">
                      <MapPin className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">Address</h3>
                      <p className="text-gray-300">1971 Univ Business Dr #106</p>
                      <p className="text-gray-300">McKinney, TX 75071</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#22c55e] rounded-full p-3 mt-1">
                      <Phone className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
                      <a
                        href="tel:+12146901941"
                        className="text-[#22c55e] text-xl hover:text-[#16a34a] transition-colors"
                      >
                        +1 214-690-1941
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#22c55e] rounded-full p-3 mt-1">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
                      <a
                        href="mailto:support@abrelectric.com"
                        className="text-[#22c55e] hover:text-[#16a34a] transition-colors"
                      >
                        support@abrelectric.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#22c55e] rounded-full p-3 mt-1">
                      <Clock className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">Business Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-gray-300">Sunday: Closed</p>
                      <p className="text-[#22c55e] mt-2">Emergency services available 24/7</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose ABR Electric?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Licensed & Insured</h4>
                        <p className="text-gray-400 text-sm">
                          Fully licensed electricians with comprehensive insurance coverage for your peace of mind.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Veteran Owned</h4>
                        <p className="text-gray-400 text-sm">
                          Proudly veteran-owned and operated, bringing military precision to every job.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-[#22c55e] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Fast Response Time</h4>
                        <p className="text-gray-400 text-sm">
                          Same-day service available for most electrical needs. Emergency services 24/7.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                  <h3 className="text-2xl font-bold text-white mb-4">Service Areas</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    We proudly serve McKinney, Allen, Frisco, Plano, Prosper, Wylie, Murphy, Fairview, Princeton, Anna,
                    Melissa, Celina, and surrounding areas in Collin County.
                  </p>
                  <p className="text-gray-400 text-sm">
                    Not sure if we service your area? Give us a call at{" "}
                    <a href="tel:+12146901941" className="text-[#22c55e] hover:text-[#16a34a]">
                      (214) 690-1941
                    </a>{" "}
                    and we'll be happy to help!
                  </p>
                </div>
              </div>

              {/* Quote Form */}
              <div>
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
