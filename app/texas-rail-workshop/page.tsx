import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"

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

        {/* Form Section */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
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
