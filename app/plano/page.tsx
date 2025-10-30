import Header from "@/components/header"
import LocationHeroSection from "@/components/location-hero-section"
import LocationServicesSection from "@/components/location-services-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationCTASection from "@/components/location-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric | Licensed Electricians in Plano, Frisco, McKinney",
  description:
    "ABR Electric provides trusted, licensed electricians in Plano, Frisco, and McKinney. Reliable electrical repair, installation, and service — call today!",
}

export default function PlanoPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LocationHeroSection city="Plano" />
      <LocationServicesSection city="Plano" />
      <TestimonialsSection />
      <LocationCTASection city="Plano" />
      <Footer />
    </main>
  )
}
