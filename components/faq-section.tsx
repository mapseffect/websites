"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: React.ReactNode
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems: FAQItem[] = [
    {
      question: "Can you install or repair doorbells like Ring, Blink, or Nest?",
      answer: (
        <>
          Yes, we install and troubleshoot smart doorbells and video systems including Ring, Blink, Nest, and other
          low-voltage security devices. Our licensed electricians ensure proper transformer sizing (typically 16V-24V AC
          per NEC Article 725 for Class 2 circuits) and verify adequate wire gauge for the distance from your existing
          doorbell transformer to the new smart device. We also test for voltage drop, which can cause intermittent
          connectivity issues, and upgrade transformers when necessary to meet the manufacturer's power requirements.
          Many smart doorbells require 10-40VA transformers, and we ensure your installation meets both NEC standards
          and manufacturer specifications for reliable operation. Contact{" "}
          <a href="mailto:support@abrelectric.com" className="text-abr-green hover:underline">
            support@abrelectric.com
          </a>{" "}
          or call{" "}
          <a href="tel:12146901941" className="text-abr-green hover:underline">
            214-690-1941
          </a>
          .
        </>
      ),
    },
    {
      question: "Do you handle electrical work during home remodels?",
      answer: (
        <>
          Absolutely. We coordinate with general contractors to provide comprehensive electrical services for kitchen,
          bathroom, and whole-home renovations. This includes rough-in wiring per NEC Article 210 for branch circuits,
          relocating or upgrading electrical panels to accommodate increased loads, installing dedicated 20-amp circuits
          for kitchen countertop receptacles (NEC 210.52(B)), and ensuring proper GFCI and AFCI protection as required
          by current code. We also handle service upgrades from 100A to 200A panels when remodels add significant
          electrical demand, install recessed lighting with proper IC (insulation contact) ratings, and coordinate with
          HVAC contractors for new mini-split or central air installations requiring dedicated circuits. All work
          includes proper permitting and inspection coordination with Collin County building departments.
        </>
      ),
    },
    {
      question: "Can you replace or install ceiling fans on high ceilings?",
      answer: (
        <>
          Yes. We have the specialized equipment and extensive experience to safely install or replace ceiling fans on
          vaulted and cathedral ceilings up to 20+ feet high. All installations comply with NEC Article 314.27(C), which
          requires ceiling fan boxes to be listed and marked as suitable for fan support (rated for at least 50 pounds).
          We verify that existing boxes meet current code or install new fan-rated boxes with proper bracing. For high
          ceilings, we use extension downrods to maintain the recommended 8-10 feet from floor to blade tips for optimal
          air circulation. We also ensure proper wire gauge (typically 14 AWG for 15A circuits or 12 AWG for 20A
          circuits per NEC Table 310.15(B)(16)) and install appropriate wall controls or remote systems. Our technicians
          are trained in fall protection and use scaffolding or lifts to access high mounting locations safely.
        </>
      ),
    },
    {
      question: "Do you repair burning outlets or damaged circuits?",
      answer: (
        <>
          Yes. Burning smells, scorch marks, or discolored outlets indicate serious electrical hazards that require
          immediate attention. Our licensed electricians diagnose the root cause, which often includes loose connections
          causing arcing (a leading cause of electrical fires), undersized wiring for the connected load, or
          deteriorated devices. We perform thermal imaging inspections to identify hot spots, test for proper grounding
          per NEC Article 250, verify circuit breaker sizing matches wire gauge per NEC 240.4, and replace damaged
          receptacles with commercial-grade devices rated for the application. We also inspect for aluminum wiring
          connections, which require special anti-oxidant compounds and AL-rated devices per NEC 110.14. All repairs
          include verification testing to ensure safe operation and compliance with NEC Article 406 receptacle
          requirements.
        </>
      ),
    },
    {
      question: "Can you add outlets in closets, garages, or utility spaces?",
      answer: (
        <>
          Yes. We install code-compliant outlets wherever you need power, following NEC Article 210.52 spacing
          requirements and NEC Article 210.8 GFCI protection mandates. Garage receptacles require GFCI protection per
          NEC 210.8(A)(2), and we install weather-resistant (WR) receptacles in damp locations per NEC 406.9(B)(1). For
          closets, we ensure proper clearance from storage areas per NEC 410.16 and install outlets suitable for the
          intended use. Outdoor and exterior outlets require GFCI protection and weatherproof covers (WP rating) that
          maintain protection even when cords are plugged in, per NEC 406.9(B)(1). We run properly sized circuits
          (typically 12 AWG copper for 20A circuits) through appropriate raceways or NM cable with proper stapling
          intervals per NEC 334.30, and all installations include proper grounding per NEC Article 250.
        </>
      ),
    },
    {
      question: "Do you install plugs or dedicated outlets for mini-split A/C or appliances?",
      answer: (
        <>
          Yes. We run dedicated circuits for mini-splits, electric ranges, dryers, and other high-draw appliances to
          ensure safe, reliable operation per NEC Article 210.23. Mini-split systems typically require dedicated 15A or
          20A circuits depending on BTU rating, with proper disconnect switches within sight of the outdoor unit per NEC
          440.14. Electric ranges require 40A or 50A circuits with 6 AWG or 8 AWG copper conductors per NEC Table
          310.15(B)(16), while electric dryers need 30A circuits with 10 AWG copper. We install appropriate receptacle
          configurations (NEMA 14-30R for dryers, NEMA 14-50R for ranges) and ensure proper overcurrent protection
          sizing per NEC Article 240. All dedicated circuits include proper grounding and bonding per NEC Article 250,
          and we verify voltage drop calculations to ensure efficient appliance operation.
        </>
      ),
    },
    {
      question: "Can you install or upgrade smoke and heat detectors?",
      answer: (
        <>
          Yes. We install hardwired smoke and carbon monoxide detectors with battery backup to meet current NEC Article
          760 and local building code requirements. Modern installations require interconnected detectors so that when
          one alarm sounds, all alarms activate throughout the home. We install photoelectric smoke detectors in living
          areas and ionization or dual-sensor detectors in appropriate locations, with proper spacing per NFPA 72
          (within 12 inches of ceiling, at least 4 inches from walls). CO detectors are required within 10 feet of
          bedrooms per most local codes. All wiring follows NEC Article 760 for fire alarm systems, using proper wire
          types (typically 14/3 or 14/2 with red traveler for interconnect) and ensuring devices are powered from
          dedicated circuits or properly shared circuits. We also verify proper placement to avoid false alarms from
          kitchens, bathrooms, or HVAC vents.
        </>
      ),
    },
    {
      question: "Can you disconnect old security system wiring?",
      answer: (
        <>
          Yes. We safely remove outdated alarm wiring and patch or repurpose the circuits as needed, following NEC
          Article 725 for Class 2 and Class 3 remote control and signaling circuits. Our process includes tracing all
          low-voltage wiring to the main panel or security panel location, disconnecting power sources, removing or
          abandoning wiring per NEC 725.25 (abandoned cables must be tagged or removed), and patching wall penetrations.
          If the wiring is suitable, we can repurpose it for new low-voltage applications like doorbell systems, network
          cabling, or speaker wire. We ensure all electrical boxes are properly covered with blank plates per NEC
          314.25, and any abandoned wiring left in walls is clearly identified. This service is particularly common when
          upgrading to wireless security systems or smart home devices that don't require hardwired connections.
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
        <h2 className="text-3xl font-bold text-white text-center mb-8">Other Electrical Services FAQ – ABR Electric</h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-[#1e293b] border border-gray-700 rounded-lg overflow-hidden shadow-lg">
              <button
                className="w-full text-left p-4 font-semibold text-white hover:bg-gray-800 transition-colors duration-300 flex items-center justify-between"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform duration-200 flex-shrink-0 ml-4",
                    openIndex === index ? "rotate-180" : "",
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="p-4 pt-0 text-gray-300 leading-relaxed">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#1e293b] border border-gray-700 rounded-lg p-6 text-center mt-8">
          <p className="text-white">
            <strong>Next step:</strong>{" "}
            <a href="#quote-form" className="text-abr-green hover:underline font-bold">
              Fill out our form
            </a>{" "}
            and upload photos if possible. Questions? Email{" "}
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
