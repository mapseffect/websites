import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "ABR Electric | McKinney Electricians Serving Allen, Frisco & Plano",
  description:
    "ABR Electric is your trusted local business for licensed & insured electricians serving McKinney, Allen, Frisco & Plano. TECL #27762. 5-star reviews. Call (214) 690-1941 for a free quote.",
  alternates: {
    canonical: "https://abrelectric.com",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Electrician"],
      "@id": "https://electriciannearme.netlify.app/",
      name: "ABR Electric",
      image: "https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/a1da6d44-4bac-4a24-c457-54105bb75b00/public",
      url: "https://abrelectric.com",
      telephone: "+12146901941",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1971 Univ Business Dr #106",
        addressLocality: "McKinney",
        addressRegion: "TX",
        postalCode: "75071",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.216704,
        longitude: -96.741969,
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          name: "Texas Electrical Contractor License",
          identifier: "TECL #27762",
          recognizedBy: {
            "@type": "Organization",
            name: "Texas Department of Licensing and Regulation",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Certified Tesla Wall Connector Installer",
          recognizedBy: {
            "@type": "Organization",
            name: "Tesla Inc.",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Authorized Generac Dealer",
          recognizedBy: {
            "@type": "Organization",
            name: "Generac Power Systems",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: "Certified ChargePoint Installer",
          recognizedBy: {
            "@type": "Organization",
            name: "ChargePoint",
          },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          name: "Texas Licensed Electrician",
          recognizedBy: {
            "@type": "Organization",
            name: "Texas Department of Licensing and Regulation",
          },
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Monday",
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Tuesday",
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Wednesday",
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Thursday",
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "08:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "15:00",
        },
      ],
      areaServed: [
        {
          "@type": "City",
          name: "McKinney",
          "@id": "https://en.wikipedia.org/wiki/McKinney,_Texas",
        },
        {
          "@type": "City",
          name: "Allen",
          "@id": "https://en.wikipedia.org/wiki/Allen,_Texas",
        },
        {
          "@type": "City",
          name: "Frisco",
          "@id": "https://en.wikipedia.org/wiki/Frisco,_Texas",
        },
        {
          "@type": "City",
          name: "Plano",
          "@id": "https://en.wikipedia.org/wiki/Plano,_Texas",
        },
        {
          "@type": "City",
          name: "Prosper",
          "@id": "https://en.wikipedia.org/wiki/Prosper,_Texas",
        },
        {
          "@type": "City",
          name: "Celina",
          "@id": "https://en.wikipedia.org/wiki/Celina,_Texas",
        },
        {
          "@type": "City",
          name: "Anna",
          "@id": "https://en.wikipedia.org/wiki/Anna,_Texas",
        },
        {
          "@type": "City",
          name: "Melissa",
          "@id": "https://en.wikipedia.org/wiki/Melissa,_Texas",
        },
        {
          "@type": "City",
          name: "Princeton",
          "@id": "https://en.wikipedia.org/wiki/Princeton,_Texas",
        },
        {
          "@type": "City",
          name: "Fairview",
          "@id": "https://en.wikipedia.org/wiki/Fairview,_Texas",
        },
        {
          "@type": "City",
          name: "Murphy",
          "@id": "https://en.wikipedia.org/wiki/Murphy,_Texas",
        },
        {
          "@type": "City",
          name: "Wylie",
          "@id": "https://en.wikipedia.org/wiki/Wylie,_Texas",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "50",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Sarah M.",
          },
          datePublished: "2024-12-15",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "ABR Electric installed our Tesla charger perfectly. Professional, on-time, and handled all the permits. Highly recommend!",
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "John D.",
          },
          datePublished: "2024-11-28",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Excellent service for our Generac generator installation. The team was knowledgeable and the work was top-notch.",
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Lisa R.",
          },
          datePublished: "2024-11-10",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Fast response for our electrical panel upgrade. Licensed, insured, and very professional. Will use again!",
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Michael T.",
          },
          datePublished: "2024-10-22",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "ABR Electric handled our whole house surge protection installation. Great communication and fair pricing.",
        },
        {
          "@type": "Review",
          author: {
            "@type": "Person",
            name: "Jennifer K.",
          },
          datePublished: "2024-10-05",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          reviewBody:
            "Certified Tesla installer made all the difference. They knew exactly what they were doing. 5 stars!",
        },
      ],
      sameAs: [
        "https://www.facebook.com/abrelectric/",
        "https://www.tiktok.com/@abrelectric",
        "https://nextdoor.com/pages/abr-electric-mckinney-tx-1/",
        "https://www.youtube.com/@abrelectric",
        "https://www.yelp.com/biz/abr-electric-allen-2",
        "https://about.me/abrelectrictx",
        "https://www.instagram.com/abrelectric.dfw/",
        "https://www.angi.com/companylist/us/tx/mckinney/abr-electric-reviews-6777108.htm",
        "https://www.indeed.com/cmp/Abr-Electric/reviews?fcountry=US&floc=McKinney%2C+TX",
        "https://www.google.com/maps/place/ABR+Electric",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://electriciannearme.netlify.app/",
      name: "ABR Electric",
      url: "https://abrelectric.com",
      logo: "https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/420f5ec1-2956-4da7-9632-cfd2b31f4f00/public",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+12146901941",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    },
    {
      "@type": "Service",
      serviceType: "Electrical Services",
      provider: {
        "@id": "https://electriciannearme.netlify.app/",
      },
      areaServed: {
        "@type": "State",
        name: "Texas",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Electrical Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "EV Charger Installation",
              description:
                "Professional Tesla and electric vehicle charger installation services by certified Tesla installers",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Generator Installation",
              description: "Generac generator installation and maintenance by authorized Generac dealers",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Breaker Box Panel Upgrades",
              description: "Electrical panel upgrades and replacements with permit coordination",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Lighting Installation",
              description: "Indoor and outdoor lighting fixture installation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Outlet Installation",
              description:
                "Outlet replacement and upgrades, including GFCI-protected outlets in closets, garages, or utility spaces",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Smoke Detector Installation",
              description:
                "Installation and testing of interconnected smoke and heat detectors meeting current safety codes",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Surge Protection",
              description: "Whole house surge protection installation",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Doorbell Installation and Repair",
              description:
                "Hardwiring and troubleshooting of smart doorbells like Ring, Blink, or Nest, including transformer repair or replacement",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Electrical Work for Remodels",
              description:
                "Wiring, outlets, and lighting for home remodeling projects in collaboration with general contractors",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ceiling Fan Installation",
              description:
                "Installation and replacement of ceiling fans on high ceilings using appropriate downrods and mounting hardware",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Burning Outlet and Circuit Repair",
              description: "Repair of burning outlets, damaged circuits, or tripped breakers to address fire hazards",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Appliance Outlet Installation",
              description:
                "Installation of dedicated outlets for HVAC equipment, water heaters, refrigerators, and other specialty appliances",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Security System Wiring Removal",
              description:
                "Safe disconnection and termination of unused security system wiring to prevent nuisance alarms",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you install Tesla Wall Chargers in McKinney?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we are certified installers for Tesla and other electric vehicle home charging systems across Collin County.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle electrical permits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our licensed electricians coordinate directly with McKinney city inspectors to ensure code compliance and permit approval.",
          },
        },
        {
          "@type": "Question",
          name: "Can you install or repair doorbells like Ring, Blink, or Nest?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ABR Electric hardwires and troubleshoots smart doorbells and their transformers. If your doorbell has lost power or isn't functioning, ABR Electric can repair or replace the transformer and wiring. Please fill out our form, send photos if possible, then contact support@abrelectric.com or 214-690-1941.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle electrical work during home remodels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ABR Electric provides wiring, outlets, and lighting for remodeling projects when general contractors need licensed electricians. Call 214-690-1941 or email support@abrelectric.com for a quote.",
          },
        },
        {
          "@type": "Question",
          name: "Can you replace or install ceiling fans on high ceilings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ABR Electric installs and replaces ceiling fans on tall ceilings using the correct downrods and safe mounting hardware. Please fill out our form and include ceiling height for an accurate quote.",
          },
        },
        {
          "@type": "Question",
          name: "Do you repair burning outlets or damaged circuits?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. If you notice a burning smell, tripped breaker, or lost power after a surge, call ABR Electric immediately. These issues can indicate fire hazards. Contact 214-690-1941 to schedule service.",
          },
        },
        {
          "@type": "Question",
          name: "Can you add outlets in closets, garages, or utility spaces?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ABR Electric safely adds outlets where needed, including GFCI-protected outlets in required areas. Please fill out our form with details and photos.",
          },
        },
        {
          "@type": "Question",
          name: "Do you install plugs or dedicated outlets for mini-split A/C or appliances?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ABR Electric installs and wires outlets for HVAC equipment, water heaters, refrigerators, and other specialty appliances. Call ABR Electric at 214-690-1941 for details.",
          },
        },
        {
          "@type": "Question",
          name: "Can you install or upgrade smoke and heat detectors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ABR Electric installs interconnected smoke and heat detectors that meet current safety codes. Email support@abrelectric.com for recommendations.",
          },
        },
        {
          "@type": "Question",
          name: "Can you disconnect old security system wiring?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. ABR Electric safely cuts and terminates unused wires from outdated security systems to stop nuisance alarms. Please fill out our form and ABR Electric will advise on next steps.",
          },
        },
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="min-h-screen bg-black">
        <Header />
        <HeroSection />
        <TestimonialsSection />
        <div className="hidden md:block">
          <TeslaCertificationSection />
        </div>
        <div className="hidden md:block">
          <ServicesSection />
        </div>
        <div className="hidden md:block">
          <GeneracSection />
        </div>
        <div className="hidden md:block">
          <PermitsSection />
        </div>
        <div className="hidden md:block">
          <FAQSection />
        </div>
        <div className="hidden md:block">
          <ServiceAreasSection />
        </div>
        <Footer />
      </main>
    </>
  )
}
