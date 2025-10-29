"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: React.ReactNode
}

const GeneratorFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: "Do you install Generac generators for residential homes?",
      answer: (
        <>
          Yes. ABR Electric is an authorized Generac dealer and installs standby generators for homes of all sizes, from
          compact 7.5kW units for essential circuits to whole-home 26kW systems. Our installations comply with NEC
          Article 702 (Optional Standby Systems) and include proper sizing calculations based on your home's electrical
          load. We perform load analysis to determine which circuits you want backed up during outages, calculate
          starting surge requirements for motors and compressors (typically 3-5x running watts), and ensure the
          generator can handle simultaneous loads. Installation includes mounting on a code-compliant concrete pad with
          proper clearances per manufacturer specifications (typically 18-60 inches from structures), connecting to
          natural gas or LP fuel sources, and installing an automatic transfer switch.{" "}
          <strong>Please fill out our form</strong> with your home size, square footage, and priority loads (HVAC,
          refrigeration, medical equipment, sump pumps), then contact{" "}
          <a href="mailto:support@abrelectric.com" className="text-abr-green hover:underline">
            support@abrelectric.com
          </a>{" "}
          or{" "}
          <a href="tel:12146901941" className="text-abr-green hover:underline">
            214-690-1941
          </a>
          .
        </>
      ),
    },
    {
      question: "Can you provide a complete install price and a labor-only price?",
      answer: (
        <>
          Yes. We provide detailed quotes for both turnkey installations (including generator, automatic transfer
          switch, all wiring, concrete pad, fuel connection coordination, permits, and startup) and labor-only
          installations if you've already purchased equipment. Full installations include Generac generators sized
          appropriately for your home (typically 10kW-26kW for residential), transfer switches rated for your main panel
          amperage (100A, 150A, or 200A per NEC 702.6), proper wire sizing per NEC Table 310.15(B)(16) (typically 2 AWG
          to 4/0 AWG copper depending on generator output and distance), and coordination with gas utility companies for
          meter upgrades if needed. Labor-only quotes assume you provide compatible, code-compliant equipment and cover
          installation, wiring, transfer switch connection, and startup testing.{" "}
          <strong>Please fill out our form</strong> with photos of your electrical panel, available space for generator
          placement, and fuel source location, then call{" "}
          <a href="tel:12146901941" className="text-abr-green hover:underline">
            214-690-1941
          </a>{" "}
          for a precise quote.
        </>
      ),
    },
    {
      question: "Can you help relocate my generator during a remodel or yard project?",
      answer: (
        <>
          Yes. ABR Electric safely disconnects, relocates, and reinstalls standby generators to code-compliant
          locations. This process includes de-energizing and disconnecting the generator from the automatic transfer
          switch, capping fuel lines per local gas codes, relocating the unit to a new concrete pad with proper
          clearances per NEC 702.7 and manufacturer requirements (minimum 18 inches from combustible materials, 60
          inches from doors/windows for exhaust), running new electrical conduit and properly sized conductors from the
          transfer switch to the new location, reconnecting fuel lines with proper leak testing, and performing full
          startup and load testing. We ensure the new location meets setback requirements, has adequate ventilation for
          air-cooled units, and maintains proper wire sizing to prevent voltage drop (typically less than 3% per NEC
          215.2(A)(1)). <strong>Upload photos</strong> of your current installation and proposed new location if
          possible, then contact{" "}
          <a href="mailto:support@abrelectric.com" className="text-abr-green hover:underline">
            support@abrelectric.com
          </a>{" "}
          or{" "}
          <a href="tel:12146901941" className="text-abr-green hover:underline">
            214-690-1941
          </a>
          .
        </>
      ),
    },
    {
      question: "What size generator do I need?",
      answer: (
        <>
          Generator sizing depends on your home's square footage, priority loads, and simultaneous usage patterns. A
          typical 2,000 sq ft home with central HVAC requires 14-18kW, while larger homes (3,000+ sq ft) with multiple
          HVAC zones may need 20-26kW. Critical factors include: HVAC tonnage (3-ton AC = ~3,500W running, 10,500W
          starting surge per NEC 430 motor calculations), refrigerator/freezer loads (~800W), well pumps if applicable
          (1-2HP = 1,500-3,000W surge), sump pumps, medical equipment, and desired convenience loads (lighting, outlets,
          garage doors). We perform detailed load calculations per NEC Article 220 to determine actual demand, apply
          diversity factors since not all loads run simultaneously, and account for motor starting currents which can be
          3-6x running watts. ABR Electric sizes generators after a comprehensive load review to avoid undersizing
          (which causes overload trips) or oversizing (which wastes fuel and money).{" "}
          <strong>Please fill out our form</strong> with your home square footage, HVAC type and tonnage, and list of
          priority appliances, and send photos of your electrical panel showing circuit breaker sizes.
        </>
      ),
    },
    {
      question: "Can you install the transfer switch and surge protection?",
      answer: (
        <>
          Yes. ABR Electric installs automatic transfer switches (ATS) and whole-home surge protection as integral parts
          of generator installations. The ATS is a critical component that safely switches your home between utility
          power and generator power, typically within 10-15 seconds of detecting an outage. We install transfer switches
          rated to match your main panel amperage (100A, 150A, or 200A) per NEC 702.6, with proper service-rated
          disconnects and overcurrent protection. Transfer switches can be configured for whole-home backup or
          load-shedding (which prioritizes essential circuits and sheds heavy loads like electric water heaters or pool
          pumps to allow smaller generators). We also install Type 1 or Type 2 surge protective devices (SPDs) per NEC
          Article 285, rated for at least 50kA surge current, to protect your home from voltage spikes during utility
          power transitions and lightning events. All installations include proper grounding and bonding per NEC Article
          250. Email{" "}
          <a href="mailto:support@abrelectric.com" className="text-abr-green hover:underline">
            support@abrelectric.com
          </a>{" "}
          or call{" "}
          <a href="tel:12146901941" className="text-abr-green hover:underline">
            214-690-1941
          </a>{" "}
          for detailed transfer switch options.
        </>
      ),
    },
    {
      question: "Do you install generator inlets for portable backup?",
      answer: (
        <>
          Yes. ABR Electric installs 240V power inlets (typically 30A or 50A NEMA L14-30 or L14-50 receptacles) and
          manual transfer switches or interlock kits for safe portable generator connections. This is a cost-effective
          backup solution for homeowners who already own portable generators or want flexibility without the expense of
          a permanent standby system. We install weatherproof inlet boxes on exterior walls per NEC 406.9, run properly
          sized conductors (10 AWG for 30A or 6 AWG for 50A per NEC Table 310.15(B)(16)) to your main panel, and install
          either a manual transfer switch (which physically switches selected circuits between utility and generator) or
          an interlock kit per NEC 702.7 (which prevents simultaneous connection of utility and generator power—a
          critical safety requirement). All installations include proper grounding per NEC 250.34 for separately derived
          systems and clear labeling per NEC 110.21(B). <strong>Please fill out our form</strong> indicating your
          portable generator wattage and desired circuits for backup, and we'll provide pricing for inlet and transfer
          equipment.
        </>
      ),
    },
    {
      question: "Can you connect propane or natural gas to the generator?",
      answer: (
        <>
          Yes. ABR Electric coordinates fuel source connections and ensures proper clearances for both natural gas and
          LP (propane) generator installations. For natural gas, we work with your utility company to verify adequate
          gas pressure (typically 7" water column for generators) and meter capacity, and coordinate meter upgrades if
          your existing meter cannot supply both your home and generator simultaneously. We install gas lines per local
          codes (typically black iron pipe or approved CSST flexible gas line) with proper sizing to prevent pressure
          drop, include manual shutoff valves within sight of the generator per NEC 702.7, and perform leak testing
          before startup. For LP systems, we coordinate with propane suppliers for tank sizing (typically 250-500 gallon
          tanks for whole-home generators), ensure proper tank placement with required setbacks from structures
          (typically 10 feet minimum), and install regulators and gas lines to manufacturer specifications. All fuel
          connections include proper bonding per NEC Article 250 and comply with NFPA 54 (National Fuel Gas Code). Share
          your current gas meter location, size, and photos in our form, or provide propane tank details if applicable,
          then call{" "}
          <a href="tel:12146901941" className="text-abr-green hover:underline">
            214-690-1941
          </a>{" "}
          to discuss fuel coordination.
        </>
      ),
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Generator FAQ – ABR Electric</h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg">
              <button
                className="w-full text-left p-4 font-semibold text-white hover:bg-gray-800 transition-colors duration-300 flex items-center justify-between"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn("w-5 h-5 transition-transform duration-200", openIndex === index ? "rotate-180" : "")}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="p-4 pt-0 text-gray-300 leading-relaxed">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 text-center mt-8">
          <p className="text-white">
            <strong>Next step:</strong>{" "}
            <a href="/contactus" className="text-abr-green hover:underline font-bold">
              Fill out our form
            </a>{" "}
            and upload panel photos if possible. Questions? Email{" "}
            <a href="mailto:support@abrelectric.com" className="text-abr-green hover:underline">
              support@abrelectric.com
            </a>{" "}
            or call{" "}
            <a href="tel:12146901941" className="text-abr-green hover:underline">
              214-690-1941
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export default GeneratorFAQ
