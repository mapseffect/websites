import Header from "@/components/header"
import LocationHeroSection from "@/components/location-hero-section"
import LocationServicesSection from "@/components/location-services-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationCTASection from "@/components/location-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric Allen TX | Licensed Electrician Services",
  description:
    "ABR Electric provides trusted, licensed electrician services in Allen, TX. Professional electrical repair, installation, and maintenance. Call (214) 690-1941 for reliable service in Allen and surrounding areas.",
}

export default function AllenPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LocationHeroSection city="Allen" />
      <LocationServicesSection city="Allen" />
      <TestimonialsSection />
      <LocationCTASection city="Allen" />
      <Footer />
    </main>
  )
}
