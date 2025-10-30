import Header from "@/components/header"
import LocationHeroSection from "@/components/location-hero-section"
import LocationServicesSection from "@/components/location-services-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationCTASection from "@/components/location-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric | Licensed Electricians in Princeton, McKinney, Anna",
  description:
    "ABR Electric provides trusted, licensed electricians in Princeton, McKinney, and Anna. Reliable electrical repair, installation, and service — call today!",
}

export default function PrincetonPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LocationHeroSection city="Princeton" />
      <LocationServicesSection city="Princeton" />
      <TestimonialsSection />
      <LocationCTASection city="Princeton" />
      <Footer />
    </main>
  )
}
