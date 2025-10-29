import Header from "@/components/header"
import Footer from "@/components/footer"
import Script from "next/script"
import type { Metadata } from "next"
import { Shield, Award, BookOpen, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Texas RAIL License | Residential Appliance Installer | ABR Electric",
  description:
    "Complete guide to the Texas Residential Appliance Installer License (RAIL). Learn exam requirements, NEC codes, and get expert training in McKinney, TX. TECL #27762.",
}

export default function ResidentialApplianceInstallerPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Texas RAIL License?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Texas RAIL (Residential Appliance Installer License) allows individuals to legally install residential appliances in Texas. This includes electric ranges, cooktops, wall ovens, dishwashers, garbage disposals, and other household appliances that require electrical connections. The license is issued by the Texas Department of Licensing and Regulation (TDLR) and requires passing an 80-question open-book exam based on the National Electrical Code (NEC).",
        },
      },
      {
        "@type": "Question",
        name: "What are the RAIL exam requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The RAIL exam consists of 80 questions with a 240-minute time limit. You need a 70% passing score. The exam is open-book, allowing you to reference the NEC codebook. The exam fee is $64 and is administered by PSI at approved testing centers. No prior electrical experience is required to apply, making it an accessible entry point into the electrical trade.",
        },
      },
      {
        "@type": "Question",
        name: "What NEC codes are covered in the RAIL exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The RAIL exam heavily focuses on NEC Article 422 (Appliances), Article 210 (Branch Circuits), Article 250 (Grounding and Bonding), Article 110 (Requirements for Electrical Installations), and Article 220 (Branch-Circuit, Feeder, and Service Load Calculations). Understanding wire sizing per NEC Table 310.16, GFCI requirements under NEC 210.8, and proper grounding methods per NEC 250.134 is essential for passing the exam.",
        },
      },
      {
        "@type": "Question",
        name: "How do I apply for the RAIL license?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Submit a completed application to the Texas Department of Licensing and Regulation (TDLR) along with the required fees. Once approved, PSI will email you instructions to schedule your exam at an approved testing center. After passing the exam with 70% or higher, TDLR will issue your RAIL license. The license must be renewed periodically according to TDLR requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can I work independently with a RAIL license?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, RAIL license holders can work independently to install residential appliances. However, the scope is limited to appliance installations covered under NEC Article 422. You cannot perform general electrical work, install new circuits, or work on service panels without higher-level licenses (Journeyman or Master Electrician). Many RAIL professionals work for appliance retailers, property management companies, or start their own appliance installation businesses.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to get a RAIL license?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The timeline varies based on your preparation and TDLR processing times. Most candidates spend 2-4 weeks studying the NEC before taking the exam. After submitting your application to TDLR, approval typically takes 2-3 weeks. Once approved, you can schedule your exam with PSI and take it within days. After passing, TDLR issues your license within 1-2 weeks. Total time from start to licensed is usually 4-8 weeks.",
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Texas Residential Appliance Installer License (RAIL)
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">Your Complete Guide to Getting Licensed in Texas</p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-12 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">What is the RAIL License?</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                The Texas Residential Appliance Installer License (RAIL) is a state-issued credential that authorizes
                individuals to install, connect, and service residential electrical appliances throughout Texas. This
                license covers the installation of electric ranges, cooktops, wall ovens, dishwashers, garbage
                disposals, trash compactors, and other household appliances requiring electrical connections per NEC
                Article 422. The RAIL license is regulated by the Texas Department of Licensing and Regulation (TDLR)
                and requires passing a comprehensive exam based on the National Electrical Code (NEC).
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Unlike higher-level electrical licenses such as Journeyman or Master Electrician, the RAIL license has
                no experience requirements, making it an excellent entry point into the electrical trade. RAIL license
                holders can work independently or as part of an electrical contracting company. The license is
                particularly valuable for appliance retailers, kitchen remodelers, property managers, and maintenance
                professionals who need to legally connect appliances to existing electrical circuits. According to NEC
                422.16, appliances must be installed in accordance with manufacturer instructions and applicable code
                requirements, which RAIL-licensed professionals are trained to follow.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <Shield className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">State Licensed</h3>
                  <p className="text-gray-400 text-sm">TDLR approved credential</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <BookOpen className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Open Book Exam</h3>
                  <p className="text-gray-400 text-sm">Use NEC codebook during test</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <CheckCircle className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">No Experience Required</h3>
                  <p className="text-gray-400 text-sm">Entry-level license</p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 text-center border border-white/10">
                  <Award className="w-12 h-12 text-[#22c55e] mx-auto mb-3" />
                  <h3 className="text-white font-semibold mb-2">Career Path</h3>
                  <p className="text-gray-400 text-sm">Step into electrical trade</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">RAIL Exam Details</h2>
              <div className="bg-[#1a2332] rounded-lg p-8 border border-white/10 mb-8">
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#22c55e] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Number of Questions:</strong> 80 multiple-choice questions
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#22c55e] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Time Limit:</strong> 240 minutes (4 hours)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#22c55e] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Passing Score:</strong> 70% or higher (56 correct answers)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#22c55e] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Exam Type:</strong> Open-book (NEC codebook allowed)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#22c55e] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Exam Fee:</strong> $64 (paid to PSI testing)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#22c55e] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Administrator:</strong> PSI Exams (after TDLR approval)
                    </div>
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Key NEC Codes for RAIL Exam</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                The RAIL exam is heavily based on the National Electrical Code (NEC). Understanding these key code
                articles is essential for passing the exam and performing safe, compliant appliance installations:
              </p>
              <div className="space-y-4 mb-8">
                <div className="bg-[#1a2332] rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">NEC Article 422 - Appliances</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The primary code section for appliance installations. Covers branch circuit requirements,
                    disconnecting means, overcurrent protection, and installation standards for fixed and portable
                    appliances. Section 422.16 requires appliances to be installed per manufacturer instructions.
                    Section 422.31 covers disconnecting means requirements for permanently connected appliances.
                  </p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">NEC Article 210 - Branch Circuits</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Defines requirements for branch circuits serving appliances. Section 210.19 covers conductor sizing
                    based on load. Section 210.20 addresses overcurrent protection. Section 210.23 specifies permissible
                    loads on branch circuits. Most kitchen appliances require dedicated 20-amp or 30-amp circuits per
                    210.52(B).
                  </p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">NEC Article 250 - Grounding and Bonding</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Critical for appliance safety. Section 250.134 covers equipment grounding conductor connections.
                    Section 250.140 addresses grounding of ranges, ovens, and dryers. Proper grounding prevents shock
                    hazards and ensures safe operation. All metal appliance frames must be grounded per 250.110.
                  </p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">NEC Article 220 - Load Calculations</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Covers calculating electrical loads for appliances. Section 220.55 provides demand factors for
                    household cooking appliances. Table 220.55 shows demand loads for ranges and ovens. Understanding
                    load calculations ensures circuits are properly sized and prevents overloading.
                  </p>
                </div>
                <div className="bg-[#1a2332] rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-3">NEC Article 110 - General Requirements</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Establishes fundamental installation requirements. Section 110.3(B) requires listed equipment to be
                    installed per listing instructions. Section 110.12 covers mechanical execution of work. Section
                    110.14 addresses conductor termination and splicing requirements for appliance connections.
                  </p>
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
                Texas RAIL License Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    What is the Texas RAIL License?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    The Texas RAIL (Residential Appliance Installer License) allows individuals to legally install
                    residential appliances in Texas. This includes electric ranges, cooktops, wall ovens, dishwashers,
                    garbage disposals, and other household appliances that require electrical connections. The license
                    is issued by the Texas Department of Licensing and Regulation (TDLR) and requires passing an
                    80-question open-book exam based on the National Electrical Code (NEC).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    What are the RAIL exam requirements?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    The RAIL exam consists of 80 questions with a 240-minute time limit. You need a 70% passing score.
                    The exam is open-book, allowing you to reference the NEC codebook. The exam fee is $64 and is
                    administered by PSI at approved testing centers. No prior electrical experience is required to
                    apply, making it an accessible entry point into the electrical trade.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    What NEC codes are covered in the RAIL exam?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    The RAIL exam heavily focuses on NEC Article 422 (Appliances), Article 210 (Branch Circuits),
                    Article 250 (Grounding and Bonding), Article 110 (Requirements for Electrical Installations), and
                    Article 220 (Branch-Circuit, Feeder, and Service Load Calculations). Understanding wire sizing per
                    NEC Table 310.16, GFCI requirements under NEC 210.8, and proper grounding methods per NEC 250.134 is
                    essential for passing the exam.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    How do I apply for the RAIL license?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    Submit a completed application to the Texas Department of Licensing and Regulation (TDLR) along with
                    the required fees. Once approved, PSI will email you instructions to schedule your exam at an
                    approved testing center. After passing the exam with 70% or higher, TDLR will issue your RAIL
                    license. The license must be renewed periodically according to TDLR requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    Can I work independently with a RAIL license?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    Yes, RAIL license holders can work independently to install residential appliances. However, the
                    scope is limited to appliance installations covered under NEC Article 422. You cannot perform
                    general electrical work, install new circuits, or work on service panels without higher-level
                    licenses (Journeyman or Master Electrician). Many RAIL professionals work for appliance retailers,
                    property management companies, or start their own appliance installation businesses.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-gray-700 rounded-lg px-6 bg-[#1a2332]">
                  <AccordionTrigger className="text-white hover:text-[#22c55e] text-left">
                    How long does it take to get a RAIL license?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pt-4">
                    The timeline varies based on your preparation and TDLR processing times. Most candidates spend 2-4
                    weeks studying the NEC before taking the exam. After submitting your application to TDLR, approval
                    typically takes 2-3 weeks. Once approved, you can schedule your exam with PSI and take it within
                    days. After passing, TDLR issues your license within 1-2 weeks. Total time from start to licensed is
                    usually 4-8 weeks.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-br from-[#0a1a0a] via-black to-[#1a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Get RAIL Licensed with ABR Electric</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                ABR Electric offers comprehensive RAIL exam preparation workshops in McKinney, TX. Our licensed master
                electricians (TECL #27762) provide expert training on NEC codes, exam strategies, and real-world
                appliance installation techniques. Join our next workshop and pass your RAIL exam on the first attempt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/texas-rail-workshop"
                  className="inline-block bg-[#22c55e] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#16a34a] transition-colors"
                >
                  View Workshop Details
                </a>
                <a
                  href="tel:2146901941"
                  className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Call (214) 690-1941
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 bg-gradient-to-br from-[#0a1a0a] via-black to-[#1a0a0a]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">Enroll in RAIL Course</h2>
              <p className="text-gray-300 text-center mb-8">
                Start your electrical career today. Fill out the form below to enroll in our RAIL Course. Call (214)
                690-1941 for course details and availability.
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
      {/* Script tags for iframe functionality */}
      <Script src="https://formnx.com/js/iframeResizer.js" strategy="lazyOnload" />
      <Script src="https://formnx.com/js/widget.js" strategy="lazyOnload" />
    </>
  )
}
