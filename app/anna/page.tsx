import Header from "@/components/header"
import LocationHeroSection from "@/components/location-hero-section"
import LocationServicesSection from "@/components/location-services-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationCTASection from "@/components/location-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric | Licensed Electricians in Anna, McKinney, Melissa",
  description:
    "ABR Electric provides trusted, licensed electricians in Anna, McKinney, and Melissa. Reliable electrical repair, installation, and service — call today!",
}

export default function AnnaPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LocationHeroSection city="Anna" />
      <LocationServicesSection city="Anna" />
      <TestimonialsSection />
      <LocationCTASection city="Anna" />
      <Footer />
    </main>
  )
}
