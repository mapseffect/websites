import Header from "@/components/header"
import LocationHeroSection from "@/components/location-hero-section"
import LocationServicesSection from "@/components/location-services-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationCTASection from "@/components/location-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric | Licensed Electricians in Celina, Prosper, Frisco",
  description:
    "ABR Electric provides trusted, licensed electricians in Celina, Prosper, and Frisco. Reliable electrical repair, installation, and service — call today!",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://electriciannearme.netlify.app",
          name: "ABR Electric - Celina Electrician",
        },
      ],
    }),
  },
}

export default function CelinaPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LocationHeroSection city="Celina" />
      <LocationServicesSection city="Celina" />
      <TestimonialsSection />
      <LocationCTASection city="Celina" />
      <Footer />
    </main>
  )
}
