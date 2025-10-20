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
          Yes. ABR Electric installs Generac and other standby generators for homes of all sizes.
          <strong> Please fill out our form</strong> and include home size and key loads, then contact{" "}
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
          Yes. Full install covers generator, transfer switch, wiring, coordination for gas. Labor-only applies if you
          already own equipment.
          <strong> Please fill out our form</strong> for a precise quote, then call{" "}
          <a href="tel:12146901941" className="text-abr-green hover:underline">
            214-690-1941
          </a>
          .
        </>
      ),
    },
    {
      question: "Can you help relocate my generator during a remodel or yard project?",
      answer: (
        <>
          Yes. ABR Electric disconnects, moves, and reinstalls to code. <strong>Upload photos</strong> if possible, then
          contact{" "}
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
          Depends on square footage and priority loads (HVAC, fridge, medical, sump). ABR Electric sizes after a load
          review.
          <strong> Please fill out our form</strong> with key appliances and send panel photos.
        </>
      ),
    },
    {
      question: "Can you install the transfer switch and surge protection?",
      answer: (
        <>
          Yes. ABR Electric installs automatic transfer switches and whole-home surge protection as part of the project.
          Email{" "}
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
      question: "Do you install generator inlets for portable backup?",
      answer: (
        <>
          Yes. ABR Electric installs 240 V inlets and safe interlocks to your panel.{" "}
          <strong>Please fill out our form</strong> for pricing.
        </>
      ),
    },
    {
      question: "Can you connect propane or natural gas to the generator?",
      answer: (
        <>
          Yes. ABR Electric coordinates fuel source and clearances. Share gas meter/tank details in the form, then call{" "}
          <a href="tel:12146901941" className="text-abr-green hover:underline">
            214-690-1941
          </a>
          .
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
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
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
