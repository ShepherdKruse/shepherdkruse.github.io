import Image from "next/image"
import Link from "next/link"
import { CalendarIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "HELIWRAP Software Revolutionizes Carbon Fiber Engine Manufacturing",
      excerpt:
        "New proprietary software automates carbon fiber wrapping patterns for rocket engines, enabling precise structural reinforcement and thermal management.",
      date: "November 20, 2025",
      category: "Technology",
      image: "/images/chatgpt-20image-20nov-2020-2c-202025-2c-2001-26-03-20pm.png",
    },
    {
      id: 4,
      title: "AI Fuel Geometry Algorithm Shows Promising Results",
      excerpt:
        "Initial simulations suggest optimized fuel grain designs could match desired thrust curves with high accuracy.",
      date: "January 10, 2025",
      category: "Technology",
      image: "/images/screenshot-202025-03-31-20at-2012.png",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {newsItems.map((item) => (
        <Link key={item.id} href="#" className="group">
          <div className="overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="secondary">{item.category}</Badge>
                <div className="flex items-center text-xs text-muted-foreground">
                  <CalendarIcon className="mr-1 h-3 w-3" />
                  {item.date}
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.excerpt}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
