import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"

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

        {/* Form Section */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
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
