import Header from "@/components/header"
import LocationHeroSection from "@/components/location-hero-section"
import LocationServicesSection from "@/components/location-services-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationCTASection from "@/components/location-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric | Licensed Electricians in Murphy, Wylie, Plano",
  description:
    "ABR Electric provides trusted, licensed electricians in Murphy, Wylie, and Plano. Reliable electrical repair, installation, and service — call today!",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://electriciannearme.netlify.app",
          name: "ABR Electric - Murphy Electrician",
          image: "https://electriciannearme.netlify.app/images/logo.png",
          url: "https://electriciannearme.netlify.app/murphy",
          telephone: "+1234567890",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Electric Street",
            addressLocality: "Murphy",
            addressRegion: "TX",
            postalCode: "75090",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 32.9867,
            longitude: -96.7432,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "120",
          },
          sameAs: [
            "https://www.facebook.com/ABRElectric",
            "https://www.twitter.com/ABRElectric",
            "https://www.instagram.com/abrelectric/",
          ],
        },
      ],
    }),
  },
}

export default function MurphyPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LocationHeroSection city="Murphy" />
      <LocationServicesSection city="Murphy" />
      <TestimonialsSection />
      <LocationCTASection city="Murphy" />
      <Footer />
    </main>
  )
}
