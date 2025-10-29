export default function GeneracSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/337f2721-8962-4490-4a53-1feccb8c3400/public')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading and Description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Generator Installation & Backup Power</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Keep your home powered during outages with professional generator installation and maintenance services.
            </p>
          </div>

          {/* Product Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-abr-green/50 transition-all duration-300">
              <img
                src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/6367b213-a33c-411a-40fd-d4f1fe72b200/public"
                alt="Generac Generator Model 1"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-abr-green/50 transition-all duration-300">
              <img
                src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/b7ceec59-6f6e-4c80-c1b0-86f83ba74e00/public"
                alt="Generac Generator Model 2"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-abr-green/50 transition-all duration-300">
              <img
                src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/8224f94b-e766-416c-8da9-0e3e11dacf00/public"
                alt="Generac Generator Model 3"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="/generators"
              className="inline-block bg-abr-green hover:bg-abr-green/90 text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] text-lg"
            >
              Get the right generator
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
