import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, Users, Clock, CheckCircle } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric About Us Collin County | Veteran-Owned Electricians",
  description:
    "Learn about ABR Electric, a veteran-owned electrical contractor serving Collin County since 2010. Licensed master electricians providing quality electrical services in McKinney, Allen, Frisco, and Plano.",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section
          className="relative py-20"
          style={{
            background:
              "radial-gradient(60% 60% at 75% 20%, rgba(139, 15, 23, 0.35) 0%, transparent 100%), linear-gradient(180deg, #000 0%, #120303 50%, #000 100%)",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">About ABR Electric</h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Veteran-owned electrical contractor serving Collin County with integrity, experience, and exceptional
                  service
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/a1da6d44-4bac-4a24-c457-54105bb75b00/public"
                  alt="ABR Electric Master Electrician with electrical panel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/00d5bff6-9afa-496e-e615-c9b95cd0e400/public')",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Story</h2>

              <div className="bg-gradient-to-r from-[#22c55e]/20 to-[#1e3a5f]/20 border-2 border-[#22c55e]/30 rounded-lg p-8 mb-12 backdrop-blur-sm">
                <p className="text-xl text-white text-center italic leading-relaxed">
                  "Do it right, make a positive memory, and have fun."
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Founder's Journey</h3>
                  <p className="text-gray-300 leading-relaxed">
                    James has been doing electrical work since the '90s—long time like back when you had to rewind
                    videotapes before returning them to Blockbuster. With a vision of the primary business is people,
                    and electrical work is a side job James Started ABR Electric in 2010.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#1e3a5f]/80 to-[#0f1f3f]/80 backdrop-blur-sm border-2 border-[#22c55e] rounded-lg p-8">
                  <p className="text-gray-300 leading-relaxed italic mb-4">
                    "Our customers' feedback is the greatest affirmation we can receive. It's not just about maintaining
                    our status as licensed master electricians—it's about the relationships we build and the trust we
                    earn. Everyone at ABR Electric, from the newest apprentice to my longest-serving electricians,
                    shares this commitment to excellence and customer care."
                  </p>
                  <p className="text-[#22c55e] font-semibold">— James Adams, Master Electrician</p>
                </div>
              </div>

              {/* Value Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-[#22c55e]/20 to-[#16a34a]/20 backdrop-blur-sm border-2 border-[#22c55e]/50 rounded-lg p-6 text-center">
                  <div className="bg-[#22c55e] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">Licensed & Insured</h3>
                  <p className="text-gray-300 text-sm">Fully licensed and insured for your peace of mind</p>
                </div>

                <div className="bg-gradient-to-br from-[#3b82f6]/20 to-[#2563eb]/20 backdrop-blur-sm border-2 border-[#3b82f6]/50 rounded-lg p-6 text-center">
                  <div className="bg-[#3b82f6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">Family Owned</h3>
                  <p className="text-gray-300 text-sm">Local family business serving our community</p>
                </div>

                <div className="bg-gradient-to-br from-[#eab308]/20 to-[#ca8a04]/20 backdrop-blur-sm border-2 border-[#eab308]/50 rounded-lg p-6 text-center">
                  <div className="bg-[#eab308] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">Reliable Service</h3>
                  <p className="text-gray-300 text-sm">On-time service you can count on</p>
                </div>

                <div className="bg-gradient-to-br from-[#dc2626]/20 to-[#b91c1c]/20 backdrop-blur-sm border-2 border-[#dc2626]/50 rounded-lg p-6 text-center">
                  <div className="bg-[#dc2626] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">Quality Guaranteed</h3>
                  <p className="text-gray-300 text-sm">We stand behind all our work</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YouTube Section */}
        <section className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Find out what 10,000+ homeowners already know
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Join McKinney's trusted electricians as we show behind-the-scenes footage of EV charger installs,
                    panel upgrades, lighting makeovers, and more — all done the right way.
                  </p>
                  <a
                    href="https://www.youtube.com/@ABRElectric"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#ff0000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#cc0000] transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Subscribe to Our Channel
                  </a>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/oJNbBP5MNE8"
                    title="ABR Electric YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Veteran Owned Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <Image
                  src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/ca16ff62-2990-4438-8145-780e5bad0400/public"
                  alt="Veteran Owned Business Badge"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proudly <span className="text-[#22c55e]">Veteran Owned</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                ABR Electric is proudly veteran owned and operated. We bring the same dedication, discipline, and
                commitment to excellence that we learned in service to every electrical project we undertake.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
