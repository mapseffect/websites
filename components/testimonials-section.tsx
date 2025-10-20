"use client"

import { Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    text: "ABR Electric's integrity and transparency were a breath of fresh air. Moving forward, I'll definitely be relying on them for any electrical needs. If you're looking for an honest company that won't take advantage of you, I highly recommend ABR Electric.",
    author: "Lenor J.",
    platform: "Yelp Review",
  },
  {
    text: "Pleased with my interaction with ABR electric and their installation of our new EV charger. Their team was very quick to respond and was patient as I requested quotes for multiple install locations. Wendii responded in great detail with what the electrician could and could not provide and the pros and cons for both options.",
    author: "Daniel M.",
    platform: "Yelp Review",
  },
  {
    text: "As a realtor, I trust James at ABR Electric above any other electrician I've met. His integrity, experience, and customer care are unmatched. I will continue to refer my clients to him.",
    author: "Joshua Dedmon",
    platform: "Google Review",
  },
  {
    text: "My overall experience with ABR Electric was outstanding from start to finish. They called ahead to confirm our appointment, and the electrician who arrived was incredibly friendly and professional. I hired them to install a home EV charger, and their communication was crystal clear throughout the entire process. What truly set them apart was their commitment to safety - ABR was the only one who encouraged pulling a permit and having the work properly inspected.",
    author: "Tim",
    platform: "Google Review",
  },
  {
    text: "I had a great experience with ABR. They were actually able to come early to the appointment and replaced the damaged outlet and were very professional and pleasant. I plan to use ABR for my future needs.",
    author: "Sammy Williams",
    platform: "Google Review",
  },
  {
    text: "Very friendly and responsive staff. They installed an EV charger in my garage and the process was very easy.",
    author: "Hayden Black",
    platform: "Google Review",
  },
]

export default function TestimonialsSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative py-16 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/7978c9ce-e45f-4816-6b59-69d25b3e4900/public')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">What Our Customers Say</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#0f0f10]/80 rounded-lg p-6 border border-white/10 hover:border-[#22c55e]/30 transition-all duration-300 backdrop-blur-sm shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed text-sm">&ldquo;{testimonial.text}&rdquo;</p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-[#a3a3a3] text-xs">{testimonial.platform}</p>
                </div>
                {testimonial.platform.includes("Yelp") && (
                  <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">Y</div>
                )}
                {testimonial.platform.includes("Google") && (
                  <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">G</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
