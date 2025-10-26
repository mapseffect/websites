"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Workshops", href: "/workshops" },
    { name: "Contact Us", href: "/contactus" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/420f5ec1-2956-4da7-9632-cfd2b31f4f00/public"
              alt="ABR Electric Logo"
              className="h-12 w-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#22c55e] transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center gap-3">
            <img
              src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/781dc659-56b3-4b47-4c68-b9b7c07d8c00/public"
              alt="Service Truck"
              className="h-10 w-auto"
            />
            <div>
              <a
                href="tel:+12146901941"
                className="text-[#22c55e] font-bold text-lg hover:text-[#16a34a] transition-colors"
              >
                +1 214-690-1941
              </a>
              <p className="text-xs text-[#a3a3a3] text-right">Licensed & Insured</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-white hover:text-[#22c55e] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a href="tel:+12146901941" className="block py-2 text-[#22c55e] font-bold">
              +1 214-690-1941
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
