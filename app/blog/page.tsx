import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "ABR Electric Blog | Electrical Tips, Safety & Home Improvement",
  description:
    "Expert electrical advice, safety tips, and home improvement guides from ABR Electric. Learn about electrical systems, permits, and best practices for your home.",
  alternates: {
    canonical: "https://abrelectric.com/blog",
  },
}

export default function BlogListingPage() {
  const blogPosts = [
    {
      title: "Is Your Garage Door Opener on a Shared Circuit?",
      excerpt:
        "Learn about electrical requirements for garage door openers, when you need permits, and why dedicated circuits matter for safety. Discover best practices for ensuring your garage door opener has the power it needs.",
      slug: "is-your-garage-door-opener-on-a-shared-circuit",
      category: "Electrical Safety",
      readTime: "5 min read",
      image: "/garage-door-night.jpg",
      date: "January 2025",
    },
  ]

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#1a2332] to-[#0a1628] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-[#00ff9d]/10 text-[#00ff9d] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ABR Electric Blog
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Electrical Tips & Home Safety Guides
            </h1>
            <p className="text-xl text-gray-300 mb-8 text-pretty max-w-3xl mx-auto">
              Expert advice on electrical systems, safety, permits, and home improvements from licensed electricians
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-[#0a1628]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card
                  key={post.slug}
                  className="bg-[#1a2332] border-gray-700 overflow-hidden hover:border-[#00ff9d]/50 transition-all group"
                >
                  {/* Post Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 bg-[#00ff9d]/90 text-[#0a1628] px-3 py-1 rounded-full text-xs font-semibold">
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-gray-400 text-sm mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff9d] transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

                    <Button
                      asChild
                      variant="ghost"
                      className="text-[#00ff9d] hover:text-white hover:bg-[#00ff9d]/10 p-0 h-auto group/btn"
                    >
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2">
                        Read More
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a2332]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Need Professional Electrical Services?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              ABR Electric provides licensed, insured electrical services throughout Collin County. From dedicated
              circuits to complete electrical upgrades, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#00ff9d] text-[#0a1628] hover:bg-[#00ff9d]/90">
                <Link href="/contactus">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#00ff9d] text-[#00ff9d] hover:bg-[#00ff9d]/10 bg-transparent"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
