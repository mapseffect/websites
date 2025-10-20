import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#0f0f10] py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1: Company Brand */}
          <div>
            <img
              src="https://imagedelivery.net/Vao_m7ISeT7aNnreYMwd6A/420f5ec1-2956-4da7-9632-cfd2b31f4f00/public"
              alt="ABR Electric Logo"
              className="h-10 w-auto mb-4"
            />
            <p className="text-[#a3a3a3] text-sm">
              Professional electrical services in McKinney, TX and surrounding areas. Licensed, insured, and veteran
              owned.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-[#22c55e] font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-[#a3a3a3] text-sm">
              <li>Electrical Repairs</li>
              <li>Panel Upgrades</li>
              <li>Generator Installation</li>
              <li>Outlet & Switch Installation</li>
              <li>Lighting & Fixtures</li>
            </ul>
          </div>

          {/* Column 3: Financing */}
          <div>
            <h3 className="text-[#22c55e] font-bold mb-4">Financing</h3>
            <ul className="space-y-2 text-[#a3a3a3] text-sm">
              <li>Flexible Payment Options</li>
              <li>Generator & EV Charger Financing</li>
              <li>Panel Upgrade Financing</li>
              <li>
                <Link href="/hearth" className="text-[#22c55e] hover:underline">
                  Learn More
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-[#22c55e] font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-[#a3a3a3] text-sm">
              <li>
                <a href="tel:+12146901941" className="hover:text-[#22c55e] transition-colors">
                  +1 214-690-1941
                </a>
              </li>
              <li>McKinney, TX 75071</li>
              <li className="text-white font-semibold">Licensed & Insured</li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <p className="text-center text-[#a3a3a3] text-sm">© 2025 ABR Electric. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
