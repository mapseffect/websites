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
  alternates: {
    canonical: "https://abrelectric.com/plano",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://electriciannearme.netlify.app",
          name: "ABR Electric - Plano Electrician",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Electric St",
            addressLocality: "Plano",
            addressRegion: "TX",
            postalCode: "75074",
            addressCountry: "US",
          },
          telephone: "+1-800-123-4567",
          url: "https://electriciannearme.netlify.app/plano",
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
          },
        },
      ],
    }),
  },
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
