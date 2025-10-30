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
          Yes, we install and troubleshoot smart doorbells and video systems. Contact{" "}
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
          Absolutely. We coordinate with contractors to rough-in wiring, relocate panels, and upgrade circuits for
          kitchen, bathroom, and whole-home renovations.
        </>
      ),
    },
    {
      question: "Can you replace or install ceiling fans on high ceilings?",
      answer: (
        <>
          Yes. We have the equipment and experience to safely install or replace ceiling fans on vaulted and cathedral
          ceilings.
        </>
      ),
    },
    {
      question: "Do you repair burning outlets or damaged circuits?",
      answer: (
        <>
          Yes. Burning smells or scorch marks indicate a serious hazard. We diagnose the root cause, replace damaged
          devices, and verify safe operation.
        </>
      ),
    },
    {
      question: "Can you add outlets in closets, garages, or utility spaces?",
      answer: (
        <>
          Yes. We install code-compliant outlets wherever you need power, including GFCI protection in garages and
          outdoor areas.
        </>
      ),
    },
    {
      question: "Do you install plugs or dedicated outlets for mini-split A/C or appliances?",
      answer: (
        <>
          Yes. We run dedicated circuits for mini-splits, ranges, dryers, and other high-draw appliances to ensure safe,
          reliable operation.
        </>
      ),
    },
    {
      question: "Can you install or upgrade smoke and heat detectors?",
      answer: (
        <>Yes. We install hardwired smoke and CO detectors with battery backup to meet current code requirements.</>
      ),
    },
    {
      question: "Can you disconnect old security system wiring?",
      answer: <>Yes. We safely remove outdated alarm wiring and patch or repurpose the circuits as needed.</>,
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
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
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
