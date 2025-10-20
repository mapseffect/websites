import Header from "@/components/header"
import LocationHeroSection from "@/components/location-hero-section"
import LocationServicesSection from "@/components/location-services-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationCTASection from "@/components/location-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric | Licensed Electricians in Fairview, McKinney, Allen",
  description:
    "ABR Electric provides trusted, licensed electricians in Fairview, McKinney, and Allen. Reliable electrical repair, installation, and service — call today!",
}

export default function FairviewPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LocationHeroSection city="Fairview" />
      <LocationServicesSection city="Fairview" />
      <TestimonialsSection />
      <LocationCTASection city="Fairview" />
      <Footer />
    </main>
  )
}
