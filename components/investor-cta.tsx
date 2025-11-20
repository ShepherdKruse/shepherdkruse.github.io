"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Calendar, Mail } from "lucide-react"

export default function InvestorCTA() {
  return (
    <div className="rounded-lg border bg-card p-8 shadow-sm">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Join Our Pre-Seed Round</h3>
          <p className="text-muted-foreground">
            We're raising $400,000 to conduct our first synthetic fuel tests and develop our AI-driven design software
            platform. Be among the first to invest in the future of propulsion technology.
          </p>
          <div className="space-y-2">
            <Button className="w-full sm:w-auto" asChild>
              <a href="https://docsend.com/view/ie3eskiv8vxi6cxp" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download Pitch Deck
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => window.open("https://calendar.app.google/EivBzRxEBwARyL3M7", "_blank")}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule a Call
            </Button>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Early Investor Benefits</h3>
          <p className="text-sm text-muted-foreground">
            Early investors receive favorable terms and the opportunity to shape the future of a revolutionary
            technology in its formative stage.
          </p>
          <div className="flex gap-2">
            <Input type="email" placeholder="Your email address" />
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            We respect your privacy and will never share your information with third parties.
          </p>
        </div>
      </div>
    </div>
  )
}
