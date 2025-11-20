import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Star, Rocket, Zap, Target } from "lucide-react"
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
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 transition-all duration-300">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Image src="/sss-logo.png" alt="SSS Logo" width={32} height={32} className="h-8 w-auto" />
            <span className="text-xl font-bold">Shepherd Space Systems</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#technology"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Technology
            </Link>
            <Link
              href="#generator"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Generator
            </Link>
            <Link
              href="#market"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Market
            </Link>
            <Link
              href="#news"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              News
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex bg-transparent hover:bg-primary/10 transition-colors"
              asChild
            >
              <Link href="/pitch-deck">
                <Download className="mr-2 h-4 w-4" />
                View Pitch Deck
              </Link>
            </Button>
            <Button size="sm" className="hover:scale-105 transition-transform" asChild>
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
        <section className="relative overflow-hidden bg-black py-24 md:py-32 lg:py-40">
          <div className="absolute inset-0 z-0">
            <HeroAnimation />
          </div>
          <div className="container relative z-10">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary w-fit animate-fade-in">
                  <Star className="mr-2 h-4 w-4" />
                  <span>Next-Generation Propulsion</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up text-balance">
                  The Future of Thrust, On-Demand
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl leading-relaxed animate-fade-in-up text-pretty">
                  Delta-V is a 3D printed engine platform that delivers AI-generated, mission-specific fuel geometries —
                  built for rapid, responsive deployment.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up">
                  <Button size="lg" className="hover:scale-105 transition-transform shadow-lg" asChild>
                    <a href="https://docsend.com/view/ie3eskiv8vxi6cxp" target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-5 w-5" />
                      Download Pitch Deck
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="hover:bg-primary/10 transition-colors bg-transparent"
                    asChild
                  >
                    <Link href="#contact">
                      Contact the Team
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center animate-fade-in">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] bg-black rounded-lg hover:scale-105 transition-transform duration-500">
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

        <section className="border-y border-border/40 bg-muted/50 py-20">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold text-balance">Why Shepherd Space Systems?</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group rounded-lg border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Rocket className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">3D Printed Propulsion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Modular, 3D-printed solid rocket engines with rapid manufacturing capabilities for custom
                  applications.
                </p>
              </div>
              <div className="group rounded-lg border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">AI-Optimized Fuel Geometries</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our software generates optimized fuel grain geometries within hours — all ready for additive
                  manufacturing.
                </p>
              </div>
              <div className="group rounded-lg border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Mission-Specific Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Custom thrust profiles for responsive space launch, defense applications, and special access programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-24 scroll-mt-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-balance">About Us</h2>
              <p className="mb-16 text-xl text-muted-foreground leading-relaxed text-pretty">
                Shepherd Space Systems is reimagining how propulsion is designed, customized, and delivered. We build
                engines that adapt to missions — not the other way around.
              </p>
            </div>
            <div className="mt-16 grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center group">
                <div className="mb-6 overflow-hidden rounded-full h-[220px] w-[220px] relative ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <Image src="/shepherd-headshot.png" alt="Shepherd" fill className="object-cover" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Shepherd</h3>
                <p className="mb-4 text-sm text-primary font-medium">Founder & Chief Executive Officer</p>
                <p className="text-muted-foreground leading-relaxed">
                  With a B.S. in Astronautical Engineering from the U.S. Air Force Academy and a master's degree in
                  Nuclear Engineering from the Air Force Institute of Technology, Shepherd brings technical precision
                  and operational insight to the frontier of propulsion.
                </p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="mb-6 overflow-hidden rounded-full h-[220px] w-[220px] relative bg-black ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <Image src="/delta-v-logo-new.png" alt="Delta-V Engine" fill className="object-contain p-6" />
                </div>
                <h3 className="mb-2 text-2xl font-bold">Delta-V Engine</h3>
                <p className="mb-4 text-sm text-primary font-medium">Our Flagship Product</p>
                <p className="text-muted-foreground leading-relaxed">
                  Delta-V is a modular, 3D-printed solid rocket engine platform. Our software takes mission parameters
                  and generates optimized fuel grain geometries within hours — all ready for additive manufacturing.
                </p>
              </div>
            </div>
            <div className="mt-24">
              <h3 className="mb-10 text-center text-2xl font-bold">Use Cases</h3>
              <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                <div className="group rounded-lg border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <h4 className="mb-4 text-xl font-bold group-hover:text-primary transition-colors">
                    Drone Interception & Tactical UAS
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    High-agility solid motors engineered for strike, pursuit, and rapid maneuvering. Shepherd designs
                    custom thrust curves and lightweight carbon-wrapped casings specifically for drone interception,
                    loitering munitions, and tactical UAS platforms where acceleration and raw thrust density decide the
                    outcome.
                  </p>
                </div>
                <div className="group rounded-lg border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <h4 className="mb-4 text-xl font-bold group-hover:text-primary transition-colors">
                    Quick-Turn Motors for Operational Urgency
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Design–simulate–print–wrap–fire cycles measured in days, not quarters. Shepherd replaces slow,
                    brittle supply chains with an on-demand motor production ecosystem: custom grains, optimized
                    nozzles, and carbon-fiber cases delivered on accelerated timelines for urgent missions and rapid
                    development programs.
                  </p>
                </div>
                <div className="group rounded-lg border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <h4 className="mb-4 text-xl font-bold group-hover:text-primary transition-colors">
                    Experimental & Classified Propulsion R&D
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
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
        <section id="technology" className="border-y border-border/40 bg-black py-24 scroll-mt-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-balance">AI-Driven Fuel Design</h2>
              <p className="mb-16 text-xl text-muted-foreground leading-relaxed text-pretty">
                Our proprietary software platform allows users to input desired thrust curves and receive printable,
                performance-matched fuel grain files in minutes.
              </p>
            </div>
            <div className="mb-20 flex justify-center">
              <div className="h-[450px] w-full max-w-4xl rounded-lg overflow-hidden border border-border/40 shadow-2xl">
                <PropulsionSystem3D />
              </div>
            </div>
            <div>
              <h3 className="mb-10 text-center text-2xl font-bold">Performance Comparison</h3>
              <div className="mx-auto max-w-5xl">
                <TechnologyComparison />
              </div>
            </div>
          </div>
        </section>

        {/* Mission-Specific Generator */}
        <section id="generator" className="py-24 scroll-mt-16">
          <div className="container px-6">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-balance">Try Our Technology</h2>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Experience our AI-driven fuel grain design technology with this interactive demo.
              </p>
            </div>
            <div className="mx-auto max-w-5xl">
              <MissionSpecificGenerator />
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section id="market" className="py-24 scroll-mt-16 bg-muted/30">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-balance">
                Pre-Seed Funding Opportunity
              </h2>
              <p className="mb-16 text-xl text-muted-foreground leading-relaxed text-pretty">
                We're launching our pre-seed round to raise $400,000 for initial synthetic fuel testing and software
                platform development. Join us at the ground floor of redefining propulsion technology.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 mb-20">
              <div className="group rounded-lg border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <h3 className="mb-3 text-xl font-bold group-hover:text-primary transition-colors">
                  Initial Prototype Development
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your investment will accelerate our ability to develop and test our first fuel formulations and
                  printing techniques.
                </p>
              </div>
              <div className="group rounded-lg border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <h3 className="mb-3 text-xl font-bold group-hover:text-primary transition-colors">
                  Software Platform Foundation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We'll build the first version of our AI-driven design platform to demonstrate the concept and gather
                  feedback.
                </p>
              </div>
              <div className="group rounded-lg border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                <h3 className="mb-3 text-xl font-bold group-hover:text-primary transition-colors">
                  Strategic Partnerships
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Initial funding will enable us to establish key relationships with defense contractors and research
                  institutions.
                </p>
              </div>
            </div>
            <div className="mt-16">
              <h3 className="mb-10 text-center text-2xl font-bold">Development Roadmap</h3>
              <div className="mx-auto max-w-4xl space-y-6">
                <div className="group rounded-lg border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <h4 className="mb-3 text-xl font-bold group-hover:text-primary transition-colors">
                    Phase 1: Initial Synthetic Fuel Testing
                  </h4>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    Develop and test our first proprietary fuel formulations
                  </p>
                  <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-3 w-[10%] rounded-full bg-primary transition-all duration-500"></div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Planning stage - $400K Pre-seed funding required to begin
                  </p>
                </div>
                <div className="group rounded-lg border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <h4 className="mb-3 text-xl font-bold group-hover:text-primary transition-colors">
                    Phase 2: Software Platform Development
                  </h4>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    Create proof-of-concept version of our AI-driven design software
                  </p>
                  <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-3 w-[5%] rounded-full bg-primary transition-all duration-500"></div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Initial planning - $2M Seed funding required to begin
                  </p>
                </div>
                <div className="group rounded-lg border bg-card p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
                  <h4 className="mb-3 text-xl font-bold group-hover:text-primary transition-colors">
                    Phase 3: Defense Integration
                  </h4>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    Partner with defense contractors for specialized applications
                  </p>
                  <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-3 w-[0%] rounded-full bg-primary transition-all duration-500"></div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Future phase - $8M Series A funding following successful seed round
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <InvestorCTA />
            </div>
          </div>
        </section>

        {/* News & Partnerships */}
        <section id="news" className="border-y border-border/40 bg-muted/50 py-24 scroll-mt-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-balance">News & Partnerships</h2>
              <p className="mb-12 text-xl text-muted-foreground leading-relaxed text-pretty">
                Stay updated with our latest developments and partnerships
              </p>
            </div>
            <NewsSection />
            <div className="mt-20">
              <h3 className="mb-8 text-center text-2xl font-bold">Technology Stack</h3>
              <p className="text-center text-muted-foreground mb-12">Powered by cutting-edge technologies</p>
              <div className="flex flex-wrap items-center justify-center gap-12">
                <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                  <Image src="/react-logo.png" alt="React" width={120} height={60} className="object-contain" />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                  <Image src="/nextjs-logo.png" alt="Next.js" width={120} height={60} className="object-contain" />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                  <Image
                    src="/tailwind-css-logo.png"
                    alt="Tailwind CSS"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                  <Image
                    src="/typescript-logo.png"
                    alt="TypeScript"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                  <Image src="/python-logo.png" alt="Python" width={120} height={60} className="object-contain" />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                  <Image
                    src="/tensorflow-logo.png"
                    alt="TensorFlow"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                  <Image src="/vercel-logo.png" alt="Vercel" width={120} height={60} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact" className="py-24 scroll-mt-16">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-balance">Contact Us</h2>
              <p className="mb-12 text-xl text-muted-foreground leading-relaxed text-pretty">
                Interested in learning more? Get in touch with our team.
              </p>
            </div>
            <div className="mx-auto max-w-2xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/40 bg-muted/30 py-8">
        <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-70">
            <Image src="/sss-logo.png" alt="SSS Logo" width={24} height={24} className="h-6 w-auto" />
            <span className="text-sm font-semibold">Shepherd Space Systems</span>
          </Link>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
