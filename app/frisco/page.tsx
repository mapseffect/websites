import Header from "@/components/header"
import LocationHeroSection from "@/components/location-hero-section"
import LocationServicesSection from "@/components/location-services-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationCTASection from "@/components/location-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric | Licensed Electricians in Frisco, Plano, Prosper",
  description:
    "ABR Electric provides trusted, licensed electricians in Frisco, Plano, and Prosper. Reliable electrical repair, installation, and service — call today!",
}

export default function FriscoPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LocationHeroSection city="Frisco" />
      <LocationServicesSection city="Frisco" />
      <TestimonialsSection />
      <LocationCTASection city="Frisco" />
      <Footer />
    </main>
  )
}
