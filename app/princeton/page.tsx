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
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://electriciannearme.netlify.app",
          name: "ABR Electric - Princeton Electrician",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Main St",
            addressLocality: "Princeton",
            addressRegion: "TX",
            postalCode: "75775",
            addressCountry: "US",
          },
          telephone: "+1-555-123-4567",
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
          },
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 32.9897,
              longitude: -96.7534,
            },
            radius: "10000",
          },
        },
      ],
    }),
  },
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
