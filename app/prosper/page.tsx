import Header from "@/components/header"
import LocationHeroSection from "@/components/location-hero-section"
import LocationServicesSection from "@/components/location-services-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationCTASection from "@/components/location-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric | Licensed Electricians in Prosper, Frisco, Celina",
  description:
    "ABR Electric provides trusted, licensed electricians in Prosper, Frisco, and Celina. Reliable electrical repair, installation, and service — call today!",
}

export default function ProsperPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LocationHeroSection city="Prosper" />
      <LocationServicesSection city="Prosper" />
      <TestimonialsSection />
      <LocationCTASection city="Prosper" />
      <Footer />
    </main>
  )
}
