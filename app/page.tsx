import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import TestimonialsSection from "@/components/testimonials-section"
import TeslaCertificationSection from "@/components/tesla-certification-section"
import ServicesSection from "@/components/services-section"
import GeneracSection from "@/components/generac-section"
import FAQSection from "@/components/faq-section"
import ServiceAreasSection from "@/components/service-areas-section"
import Footer from "@/components/footer"
import PermitsSection from "@/components/permits-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <TeslaCertificationSection />
      <ServicesSection />
      <GeneracSection />
      <PermitsSection />
      <FAQSection />
      <ServiceAreasSection />
      <Footer />
    </main>
  )
}
