import Header from "@/components/header"
import LocationHeroSection from "@/components/location-hero-section"
import LocationServicesSection from "@/components/location-services-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationCTASection from "@/components/location-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric | Licensed Electricians in Murphy, Wylie, Plano",
  description:
    "ABR Electric provides trusted, licensed electricians in Murphy, Wylie, and Plano. Reliable electrical repair, installation, and service — call today!",
}

export default function MurphyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LocationHeroSection city="Murphy" />
      <LocationServicesSection city="Murphy" />
      <TestimonialsSection />
      <LocationCTASection city="Murphy" />
      <Footer />
    </main>
  )
}
