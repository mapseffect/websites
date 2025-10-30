import Header from "@/components/header"
import LocationHeroSection from "@/components/location-hero-section"
import LocationServicesSection from "@/components/location-services-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationCTASection from "@/components/location-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric | Licensed Electricians in Melissa, Anna, McKinney",
  description:
    "ABR Electric provides trusted, licensed electricians in Melissa, Anna, and McKinney. Reliable electrical repair, installation, and service — call today!",
}

export default function MelissaPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LocationHeroSection city="Melissa" />
      <LocationServicesSection city="Melissa" />
      <TestimonialsSection />
      <LocationCTASection city="Melissa" />
      <Footer />
    </main>
  )
}
