import Header from "@/components/header"
import LocationHeroSection from "@/components/location-hero-section"
import LocationServicesSection from "@/components/location-services-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationCTASection from "@/components/location-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric | Licensed Electricians in Wylie, Murphy, Plano",
  description:
    "ABR Electric provides trusted, licensed electricians in Wylie, Murphy, and Plano. Reliable electrical repair, installation, and service — call today!",
}

export default function WyliePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LocationHeroSection city="Wylie" />
      <LocationServicesSection city="Wylie" />
      <TestimonialsSection />
      <LocationCTASection city="Wylie" />
      <Footer />
    </main>
  )
}
