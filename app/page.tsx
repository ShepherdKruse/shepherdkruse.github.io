import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import TechnologyComparison from "@/components/technology-comparison"
import PropulsionSystem3D from "@/components/propulsion-system-3d"
import InvestorCTA from "@/components/investor-cta"
import NewsSection from "@/components/news-section"
import ContactForm from "@/components/contact-form"
import MissionSpecificGenerator from "@/components/mission-specific-generator"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/sss-logo.png" alt="SSS Logo" width={32} height={32} className="h-8 w-auto" />
            <span className="text-xl font-bold">Shepherd Space Systems</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="#technology" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Technology
            </Link>
            <Link href="#generator" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Generator
            </Link>
            <Link href="#market" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Market
            </Link>
            <Link href="#news" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              News
            </Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex bg-transparent" asChild>
              <Link href="/pitch-deck">
                <Download className="mr-2 h-4 w-4" />
                View Pitch Deck
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="#contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <HeroAnimation />
          </div>
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
                  <Star className="mr-1 h-3.5 w-3.5" />
                  <span>Next-Generation Propulsion</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  The Future of Thrust, On-Demand
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl">
                  Delta-V is a 3D printed engine platform that delivers AI-generated, mission-specific fuel geometries —
                  built for rapid, responsive deployment.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" asChild>
                    <a href="https://docsend.com/view/ie3eskiv8vxi6cxp" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-5 w-5" />
                      Download Pitch Deck
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#contact">
                      Contact the Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] bg-black rounded-lg">
                  <Image
                    src="/delta-v-logo-new.png"
                    alt="Delta-V Engine logo"
                    fill
                    className="object-contain p-8"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="border-y border-border/40 bg-muted/50 py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold">Why Shepherd Space Systems?</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Image src="/sss-logo.png" alt="SSS Logo" width={24} height={24} className="h-6 w-auto" />
                </div>
                <h3 className="mb-2 text-xl font-bold">3D Printed Propulsion</h3>
                <p className="text-muted-foreground">
                  Modular, 3D-printed solid rocket engines with rapid manufacturing capabilities for custom
                  applications.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Image src="/sss-logo.png" alt="SSS Logo" width={24} height={24} className="h-6 w-auto" />
                </div>
                <h3 className="mb-2 text-xl font-bold">AI-Optimized Fuel Geometries</h3>
                <p className="text-muted-foreground">
                  Our software generates optimized fuel grain geometries within hours — all ready for additive
                  manufacturing.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Image src="/sss-logo.png" alt="SSS Logo" width={24} height={24} className="h-6 w-auto" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Mission-Specific Solutions</h3>
                <p className="text-muted-foreground">
                  Custom thrust profiles for responsive space launch, defense applications, and special access programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">About Us</h2>
              <p className="mb-10 text-xl text-muted-foreground">
                Shepherd Space Systems is reimagining how propulsion is designed, customized, and delivered. We build
                engines that adapt to missions — not the other way around.
              </p>
            </div>
            <div className="mt-16 grid gap-12 md:grid-cols-2">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 overflow-hidden rounded-full h-[200px] w-[200px] relative">
                  <Image src="/shepherd-headshot.png" alt="Shepherd" fill className="object-cover" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Shepherd</h3>
                <p className="mb-4 text-sm text-muted-foreground">Founder & Chief Executive Officer</p>
                <p className="text-muted-foreground">
                  With a B.S. in Astronautical Engineering from the U.S. Air Force Academy and a master's degree in
                  Nuclear Engineering from the Air Force Institute of Technology, Shepherd brings technical precision
                  and operational insight to the frontier of propulsion.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 overflow-hidden rounded-full h-[200px] w-[200px] relative bg-black">
                  <Image src="/delta-v-logo-new.png" alt="Delta-V Engine" fill className="object-contain p-4" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Delta-V Engine</h3>
                <p className="mb-4 text-sm text-muted-foreground">Our Flagship Product</p>
                <p className="text-muted-foreground">
                  Delta-V is a modular, 3D-printed solid rocket engine platform. Our software takes mission parameters
                  and generates optimized fuel grain geometries within hours — all ready for additive manufacturing.
                </p>
              </div>
            </div>
            <div className="mt-20">
              <h3 className="mb-6 text-center text-2xl font-bold">Use Cases</h3>
              <div className="grid gap-8 md:grid-cols-4">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="mb-3 text-xl font-bold">Drone Interception & Tactical UAS</h4>
                  <p className="text-muted-foreground">
                    High-agility solid motors engineered for strike, pursuit, and rapid maneuvering. Shepherd designs
                    custom thrust curves and lightweight carbon-wrapped casings specifically for drone interception,
                    loitering munitions, and tactical UAS platforms where acceleration and raw thrust density decide the
                    outcome.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="mb-3 text-xl font-bold">Quick-Turn Motors for Operational Urgency</h4>
                  <p className="text-muted-foreground">
                    Design–simulate–print–wrap–fire cycles measured in days, not quarters. Shepherd replaces slow,
                    brittle supply chains with an on-demand motor production ecosystem: custom grains, optimized
                    nozzles, and carbon-fiber cases delivered on accelerated timelines for urgent missions and rapid
                    development programs.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="mb-2 text-xl font-bold">Experimental & Classified Propulsion R&D</h4>
                  <p className="text-muted-foreground">
                    Modular propulsion for programs pushing performance limits. Our architecture supports unconventional
                    grain geometries, AI-driven burn profiles, altitude-matched nozzles, and materials unavailable from
                    legacy providers — ideal for primes, RDT&E groups, and special access programs requiring specialized
                    or sensitive propulsion solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology & Research */}
        <section id="technology" className="border-y border-border/40 bg-black py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">AI-Driven Fuel Design</h2>
              <p className="mb-10 text-xl text-muted-foreground">
                Our proprietary software platform allows users to input desired thrust curves and receive printable,
                performance-matched fuel grain files in minutes.
              </p>
            </div>
            <div className="mb-20 flex justify-center">
              <div className="h-[400px] w-full max-w-4xl">
                <PropulsionSystem3D />
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-center text-2xl font-bold">Performance Comparison</h3>
              <div className="mx-auto max-w-4xl overflow-x-auto">
                <TechnologyComparison />
              </div>
            </div>
          </div>
        </section>

        {/* Mission-Specific Generator */}
        <section id="generator" className="py-20">
          <div className="container px-6">
            <div className="mx-auto max-w-3xl text-center mb-10">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Try Our Technology</h2>
              <p className="text-xl text-muted-foreground">
                Experience our AI-driven fuel grain design technology with this interactive demo.
              </p>
            </div>
            <div className="mx-auto max-w-5xl">
              <MissionSpecificGenerator />
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section id="market" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Pre-Seed Funding Opportunity</h2>
              <p className="mb-10 text-xl text-muted-foreground">
                We're launching our pre-seed round to raise $400,000 for initial synthetic fuel testing and software
                platform development. Join us at the ground floor of redefining propulsion technology.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">Initial Prototype Development</h3>
                <p className="text-muted-foreground">
                  Your investment will accelerate our ability to develop and test our first fuel formulations and
                  printing techniques.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">Software Platform Foundation</h3>
                <p className="text-muted-foreground">
                  We'll build the first version of our AI-driven design platform to demonstrate the concept and gather
                  feedback.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold">Strategic Partnerships</h3>
                <p className="text-muted-foreground">
                  Initial funding will enable us to establish key relationships with defense contractors and research
                  institutions.
                </p>
              </div>
            </div>
            <div className="mt-16">
              <h3 className="mb-6 text-center text-2xl font-bold">Development Roadmap</h3>
              <div className="mx-auto max-w-4xl">
                <div className="mb-6 rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="mb-2 text-xl font-bold">Phase 1: Initial Synthetic Fuel Testing</h4>
                  <p className="mb-2 text-muted-foreground">Develop and test our first proprietary fuel formulations</p>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[10%] rounded-full bg-primary"></div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Planning stage - $400K Pre-seed funding required to begin
                  </p>
                </div>
                <div className="mb-6 rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="mb-2 text-xl font-bold">Phase 2: Software Platform Development</h4>
                  <p className="mb-2 text-muted-foreground">
                    Create proof-of-concept version of our AI-driven design software
                  </p>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[5%] rounded-full bg-primary"></div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Initial planning - $2M Seed funding required to begin
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h4 className="mb-2 text-xl font-bold">Phase 3: Defense Integration</h4>
                  <p className="mb-2 text-muted-foreground">
                    Partner with defense contractors for specialized applications
                  </p>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 w-[0%] rounded-full bg-primary"></div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Future phase - $8M Series A funding following successful seed round
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <InvestorCTA />
            </div>
          </div>
        </section>

        {/* News & Partnerships */}
        <section id="news" className="border-y border-border/40 bg-muted/50 py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">News & Partnerships</h2>
              <p className="mb-10 text-xl text-muted-foreground">
                Stay updated with our latest developments and partnerships
              </p>
            </div>
            <NewsSection />
            {/* Option 1: Technology Partners/Stack */}
            <div className="mt-16">
              <h3 className="mb-6 text-center text-2xl font-bold">Technology Stack</h3>
              <p className="text-center text-muted-foreground mb-8">Powered by cutting-edge technologies</p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                <div className="grayscale transition hover:grayscale-0">
                  <Image src="/react-logo.png" alt="React" width={120} height={60} className="object-contain" />
                </div>
                <div className="grayscale transition hover:grayscale-0">
                  <Image src="/nextjs-logo.png" alt="Next.js" width={120} height={60} className="object-contain" />
                </div>
                <div className="grayscale transition hover:grayscale-0">
                  <Image
                    src="/tailwind-css-logo.png"
                    alt="Tailwind CSS"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="grayscale transition hover:grayscale-0">
                  <Image
                    src="/typescript-logo.png"
                    alt="TypeScript"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="grayscale transition hover:grayscale-0">
                  <Image src="/python-logo.png" alt="Python" width={120} height={60} className="object-contain" />
                </div>
                <div className="grayscale transition hover:grayscale-0">
                  <Image
                    src="/tensorflow-logo.png"
                    alt="TensorFlow"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="grayscale transition hover:grayscale-0">
                  <Image src="/vercel-logo.png" alt="Vercel" width={120} height={60} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
              <p className="mb-10 text-xl text-muted-foreground">
                Interested in learning more? Get in touch with our team.
              </p>
            </div>
            <div className="mx-auto max-w-2xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/40 bg-muted/30 py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/sss-logo.png" alt="SSS Logo" width={24} height={24} className="h-6 w-auto" />
            <span className="text-sm font-semibold">Shepherd Space Systems</span>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shepherd Space Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
