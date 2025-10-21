import Header from "@/components/header"
import LocationHeroSection from "@/components/location-hero-section"
import LocationServicesSection from "@/components/location-services-section"
import TestimonialsSection from "@/components/testimonials-section"
import LocationCTASection from "@/components/location-cta-section"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ABR Electric | Licensed Electricians in Frisco, Plano, Prosper",
  description:
    "ABR Electric provides trusted, licensed electricians in Frisco, Plano, and Prosper. Reliable electrical repair, installation, and service — call today!",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://electriciannearme.netlify.app",
          name: "ABR Electric - Frisco Electrician",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Main St",
            addressLocality: "Frisco",
            addressRegion: "TX",
            postalCode: "75034",
            addressCountry: "US",
          },
          telephone: "+1234567890",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "17:00",
            },
          ],
          priceRange: "$$$",
          url: "https://electriciannearme.netlify.app/frisco",
          sameAs: [
            "https://www.facebook.com/abrelectric",
            "https://www.twitter.com/abrelectric",
            "https://www.instagram.com/abrelectric",
          ],
        },
      ],
    }),
  },
}

export default function FriscoPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <LocationHeroSection city="Frisco" />
      <LocationServicesSection city="Frisco" />
      <TestimonialsSection />
      <LocationCTASection city="Frisco" />
      <Footer />
    </main>
  )
}
