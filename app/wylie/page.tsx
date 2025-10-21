import Header from "@/components/header"
import LocationHeroSection from "@/components/location-hero-section"
import LocationServicesSection from "@/components/location-services-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationCTASection from "@/components/location-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric | Licensed Electricians in Wylie, Murphy, Plano",
  description:
    "ABR Electric provides trusted, licensed electricians in Wylie, Murphy, and Plano. Reliable electrical repair, installation, and service — call today!",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://electriciannearme.netlify.app",
          name: "ABR Electric - Wylie Electrician",
          image: "https://electriciannearme.netlify.app/images/wylie.jpg",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Electric St",
            addressLocality: "Wylie",
            addressRegion: "TX",
            postalCode: "75098",
            addressCountry: "US",
          },
          telephone: "+1-972-555-1234",
          url: "https://electriciannearme.netlify.app/wylie",
          priceRange: "$$$",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "17:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.5",
            reviewCount: "100",
          },
        },
      ],
    }),
  },
}

export default function WyliePage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LocationHeroSection city="Wylie" />
      <LocationServicesSection city="Wylie" />
      <TestimonialsSection />
      <LocationCTASection city="Wylie" />
      <Footer />
    </main>
  )
}
