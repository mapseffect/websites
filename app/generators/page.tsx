import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import GeneratorFAQ from "@/components/generator-faq"

export default function GeneratorsPage() {
  const advantages = [
    {
      title: "Automatic Backup Power",
      description:
        "Generac permanently installed generators automatically detect power outages and restore electricity within seconds.",
    },
    {
      title: "Quiet and Efficient",
      description:
        "Designed for residential use, Generac generators operate quietly and are engineered for maximum fuel efficiency.",
    },
    {
      title: "Weather-Resistant Design",
      description: "Built to withstand harsh weather conditions, ensuring long-lasting performance.",
    },
    {
      title: "Remote Monitoring",
      description:
        "Many Generac models come with Wi-Fi-enabled monitoring, allowing you to check the status of your generator from anywhere.",
    },
  ]

  const generatorModels = [
    "https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/8224f94b-e766-416c-8da9-0e3e11dacf00/public",
    "https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/b7ceec59-6f6e-4c80-c1b0-86f83ba74e00/public",
    "https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/6367b213-a33c-411a-40fd-d4f1fe72b200/public",
    "https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/555d8d13-a12b-4700-aa64-da361f492300/public",
    "https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/d95b3ba1-e817-4276-eb9c-122b71d02000/public",
  ]

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/337f2721-8962-4490-4a53-1feccb8c3400/public')",
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                ABR Electric
                <br />
                <span className="text-abr-green">Authorized Generac Dealer</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                With Generac's trusted technology and ABR's local expertise, you gain more than just backup power—you
                gain peace of mind, knowing your home and family stay safe, comfortable, and connected through any
                outage.
              </p>
              <Link
                href="/#quote-form"
                className="inline-block bg-abr-green hover:bg-abr-green/90 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] text-lg"
              >
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Video & Advantages Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* YouTube Video */}
                <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/at7MHG0KI94"
                    title="ABR Electric Generac Installation"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    ABR Electric: Authorized Generac Dealer & Installer
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Looking for backup power you can count on? We've got you covered — from automatic standby generators
                    to expert installation, we're your local pros.
                  </p>

                  <h3 className="text-2xl font-bold text-abr-green mb-6">The Generac Advantage:</h3>

                  <div className="space-y-6">
                    {advantages.map((advantage, index) => (
                      <div key={index} className="flex gap-4">
                        <CheckCircle2 className="w-6 h-6 text-abr-green flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white font-semibold text-lg mb-2">{advantage.title}</h4>
                          <p className="text-gray-400 leading-relaxed">{advantage.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Generator Models Section */}
        <section className="relative py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/76ab64fe-4183-4313-f6f0-169b15c4b100/public')",
            }}
          >
            <div className="absolute inset-0 bg-black/80" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Generac Generator Models We Install
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {generatorModels.map((model, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:border-abr-green/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                  >
                    <img
                      src={model || "/placeholder.svg"}
                      alt={`Generac Generator Model ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/#quote-form"
                  className="inline-block bg-abr-green hover:bg-abr-green/90 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] text-lg"
                >
                  Schedule Your Installation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <GeneratorFAQ />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#1a0a0a] via-black to-[#0a1a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Protect Your Home?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact ABR Electric today for a free consultation and quote on your Generac generator installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#quote-form"
                  className="bg-abr-green text-black px-8 py-4 rounded-lg font-semibold hover:bg-abr-green/90 transition-colors"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+12146901941"
                  className="border-2 border-abr-green text-abr-green px-8 py-4 rounded-lg font-semibold hover:bg-abr-green hover:text-black transition-colors"
                >
                  Call: (214) 690-1941
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
