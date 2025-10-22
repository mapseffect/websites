import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"
import type { Metadata } from "next"
import { Shield, Award, BookOpen, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "ABR Electric Texas RAIL Workshop Collin County | License Prep",
  description:
    "Master the Texas Residential Appliance Installer License test with hands-on training in McKinney, TX. Expert guidance, codebook navigation, and real-life application. Limited spots available.",
}

export default function TexasRailWorkshopPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Texas RAIL Exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'The "Texas RAIL exam" refers to the Residential Appliance Installer (RAIL) license exam. It\'s an open-book test for individuals looking to install residential appliances in Texas. The exam is administered at a state-approved testing center after processing your license application and fees.',
        },
      },
      {
        "@type": "Question",
        name: "What are the key exam details?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "- **Passing Score**: 70% or higher\n- **Number of Questions**: 80\n- **Time Limit**: 240 minutes\n- **Exam Type**: Open-book\n- **Cost**: $64 (exam fee)\n- **Administrator**: PSI (after approval from the Texas Department of Licensing and Regulation, or TDLR)",
        },
      },
      {
        "@type": "Question",
        name: "Who is eligible to take the RAIL exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To be eligible, you must submit a completed application and fee to the Texas Department of Licensing and Regulation (TDLR) for the Residential Appliance Installer license. There are no prior experience requirements for this license.",
        },
      },
      {
        "@type": "Question",
        name: "How can I prepare for the RAIL exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Effective preparation includes:\n- **Study the National Electrical Code (NEC)**: The exam is heavily based on the latest edition of the NEC, so focus on building a thorough understanding of the code.\n- **Take practice tests**: Use available resources to simulate the exam and pinpoint weak areas.\n- **Enroll in a prep course**: Consider in-person or online classes from schools specializing in RAIL exam preparation.",
        },
      },
      {
        "@type": "Question",
        name: "How do I take the RAIL exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Follow these steps:\n1. Apply for the Residential Appliance Installer license with the TDLR.\n2. Once your application is approved, PSI will email you instructions to schedule the exam.\n3. Take the exam at a PSI testing center.\n4. Achieve a passing score of 70% or higher to succeed.\n\nFor the most current information, visit the [TDLR website](https://www.tdlr.texas.gov/) or contact PSI directly.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-[#1a0a0a] to-[#2d0a0a] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Texas RAIL Workshop</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Master the Texas Residential Appliance Installer License test
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Pass Your RAIL License Exam</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                ABR Electric's Texas RAIL (Residential Appliance Installer License) Workshop is specifically designed to
                help you pass the Texas state licensing examination on your first attempt. This focused training program
                covers all aspects of the RAIL exam including the National Electrical Code requirements for residential
                appliance installation, proper wiring methods, safety protocols, and code compliance. Our experienced
                instructors provide expert guidance on codebook navigation, test-taking strategies, and real-world
                application of electrical principles.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                As a veteran-owned electrical company based in McKinney, Texas, ABR Electric has been serving Collin
                County with professional electrical services and training for years. Our RAIL Workshop instructors are
                licensed master electricians who understand exactly what it takes to pass the state exam. We provide
                comprehensive study materials, practice quizzes, hands-on demonstrations, and personalized coaching to
                ensure you're fully prepared. The workshop includes detailed coverage of residential appliance circuits,
                load calculations, grounding requirements, and installation standards. Limited spots are available to
                maintain small class sizes and provide individual attention to each student.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <Shield className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Expert Instructors</h3>
                  <p className="text-gray-400 text-sm">Licensed master electricians</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <BookOpen className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Exam Focused</h3>
                  <p className="text-gray-400 text-sm">Pass on first attempt</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <CheckCircle className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Hands-On Training</h3>
                  <p className="text-gray-400 text-sm">Real-world applications</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <Award className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Veteran Owned</h3>
                  <p className="text-gray-400 text-sm">Serving Collin County</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Texas Residential Appliance Installer (RAIL) License Exam FAQ
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    What is the Texas RAIL Exam?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    The "Texas RAIL exam" refers to the Residential Appliance Installer (RAIL) license exam. It's an
                    open-book test for individuals looking to install residential appliances in Texas. The exam is
                    administered at a state-approved testing center after processing your license application and fees.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    What are the key exam details?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <ul className="space-y-2">
                      <li>
                        <strong className="text-white">Passing Score:</strong> 70% or higher
                      </li>
                      <li>
                        <strong className="text-white">Number of Questions:</strong> 80
                      </li>
                      <li>
                        <strong className="text-white">Time Limit:</strong> 240 minutes
                      </li>
                      <li>
                        <strong className="text-white">Exam Type:</strong> Open-book
                      </li>
                      <li>
                        <strong className="text-white">Cost:</strong> $64 (exam fee)
                      </li>
                      <li>
                        <strong className="text-white">Administrator:</strong> PSI (after approval from the Texas
                        Department of Licensing and Regulation, or TDLR)
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    Who is eligible to take the RAIL exam?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    To be eligible, you must submit a completed application and fee to the Texas Department of Licensing
                    and Regulation (TDLR) for the Residential Appliance Installer license. There are no prior experience
                    requirements for this license.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    How can I prepare for the RAIL exam?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <p className="mb-3">Effective preparation includes:</p>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        <strong className="text-white">Study the National Electrical Code (NEC):</strong> The exam is
                        heavily based on the latest edition of the NEC, so focus on building a thorough understanding of
                        the code.
                      </li>
                      <li>
                        <strong className="text-white">Take practice tests:</strong> Use available resources to simulate
                        the exam and pinpoint weak areas.
                      </li>
                      <li>
                        <strong className="text-white">Enroll in a prep course:</strong> Consider in-person or online
                        classes from schools specializing in RAIL exam preparation.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    How do I take the RAIL exam?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    <p className="mb-3">Follow these steps:</p>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li>Apply for the Residential Appliance Installer license with the TDLR.</li>
                      <li>Once your application is approved, PSI will email you instructions to schedule the exam.</li>
                      <li>Take the exam at a PSI testing center.</li>
                      <li>Achieve a passing score of 70% or higher to succeed.</li>
                    </ol>
                    <p className="mt-4">
                      For the most current information, visit the{" "}
                      <a
                        href="https://www.tdlr.texas.gov/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#22c55e] hover:underline"
                      >
                        TDLR website
                      </a>{" "}
                      or contact PSI directly.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 bg-gradient-to-br from-[#0a1a0a] via-black to-[#1a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Register for Workshop</h2>
              <p className="text-gray-300 text-center mb-8">
                Get your RAIL license with expert training. Fill out the form below to register for our next workshop.
                Call (214) 690-1941 for workshop dates and pricing.
              </p>
              <div className="bg-[#1a2332] rounded-lg p-8 border border-white/10">
                <iframe
                  id="formnx-11gi40-peiz9bbg"
                  src="https://fill.formnx.com/f/abr-electric-s-rail-and-residential-wireman-course-11gi40?iframe=true"
                  frameBorder="0"
                  style={{ width: "1px", minWidth: "100%", border: "none" }}
                  className="min-h-[600px]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script src="https://formnx.com/js/iframeResizer.js" strategy="lazyOnload" />
      <Script src="https://formnx.com/js/widget.js" strategy="lazyOnload" />
    </>
  )
}
