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
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://electriciannearme.netlify.app",
          name: "ABR Electric - Fairview Electrician",
          image: "https://electriciannearme.netlify.app/images/fairview.jpg",
          "@sameAs": [
            "https://www.facebook.com/abrelectric/",
            "https://www.instagram.com/abrelectric/",
            "https://www.twitter.com/abrelectric/",
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Main St",
            addressLocality: "Fairview",
            addressRegion: "TX",
            postalCode: "75069",
            addressCountry: "US",
          },
          telephone: "(123) 456-7890",
          url: "https://electriciannearme.netlify.app/fairview",
          priceRange: "$$$",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Saturday"],
              opens: "09:00",
              closes: "13:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "1234",
          },
          serviceArea: {
            "@type": "AdministrativeArea",
            name: "Fairview",
          },
        },
      ],
    }),
  },
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
