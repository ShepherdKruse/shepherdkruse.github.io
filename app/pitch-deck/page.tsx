"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Download,
  DollarSign,
  Clock,
  Settings,
  Network,
  Zap,
  Target,
  BarChart3,
  Shield,
  Users,
  Rocket,
  CheckCircle,
  XCircle,
  Calendar,
  Mail,
  Linkedin,
  Phone,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import HeroAnimation from "@/components/hero-animation"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeInFromLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function PitchDeck() {
  const [activeTab, setActiveTab] = useState("problem")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Function to update active section based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const scrollThreshold = windowHeight * 0.4 // Detect section when it's 40% into the viewport

      // Get all sections and their positions
      const sections = document.querySelectorAll("section[id]")

      // Find the section that is currently in view
      let currentSection = "problem"

      sections.forEach((section) => {
        const sectionTop = section.offsetTop

        // Consider a section active when its top is near the middle of the viewport
        if (scrollPosition >= sectionTop - scrollThreshold) {
          currentSection = section.id
        }
      })

      // Special case for the last section to ensure it gets highlighted
      const lastSection = sections[sections.length - 1]
      if (lastSection && window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
        currentSection = lastSection.id
      }

      // Update the active tab
      if (currentSection !== activeTab) {
        setActiveTab(currentSection)
      }
    }

    // Add scroll event listener with throttling to improve performance
    let ticking = false
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", scrollListener)

    // Call once on mount to set initial active section
    handleScroll()

    return () => {
      window.removeEventListener("scroll", scrollListener)
    }
  }, [activeTab])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/sss-logo.png" alt="SSS Logo" width={32} height={32} className="h-8 w-auto" />
            <span className="text-xl font-bold">Shepherd Space Systems</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://docsend.com/view/ie3eskiv8vxi6cxp" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
            <Button size="sm" asChild>
              <Link href="/">
                <ArrowRight className="mr-2 h-4 w-4" />
                Back to Site
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-black py-20 md:py-32">
          <div className="absolute inset-0 z-0">
            <HeroAnimation />
          </div>
          <div className="container relative z-10">
            <motion.div className="mx-auto max-w-4xl text-center" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                3D-Printed Rocket Fuel for Agile Propulsion
              </h1>
              <p className="mb-8 text-xl text-muted-foreground md:text-2xl">Shepherd Space Systems</p>
              <div className="flex flex-col gap-4 sm:flex-row justify-center">
                <Button size="lg" asChild>
                  <a href="https://docsend.com/view/ie3eskiv8vxi6cxp" target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download Pitch Deck
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/#contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="sticky top-16 z-40 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container overflow-auto">
            <div className="flex space-x-1 py-2">
              {[
                { id: "problem", label: "Problem" },
                { id: "solution", label: "Solution" },
                { id: "why-now", label: "Why Now" },
                { id: "how-it-works", label: "How It Works" },
                { id: "market", label: "Market" },
                { id: "advantage", label: "Advantage" },
                { id: "users", label: "Users" },
                { id: "execution", label: "Execution" },
                { id: "revenue", label: "Revenue" },
                { id: "challenges", label: "Challenges" },
                { id: "partner", label: "Partner" },
                { id: "contact", label: "Contact" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id)
                    document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className={`whitespace-nowrap px-3 py-1.5 text-sm font-medium transition-all duration-300 ease-in-out rounded-md ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* The Problem */}
        <section id="problem" className="py-20 border-b border-border/40">
          <div className="container">
            <motion.div
              className="grid gap-12 md:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInFromLeft}>
                <h2 className="mb-8 text-3xl font-bold">The Problem</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xl font-medium">High cost per launch</p>
                      <p className="text-muted-foreground">$450K+ per missile</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xl font-medium">Long manufacturing timelines</p>
                      <p className="text-muted-foreground">Years from design to deployment</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Settings className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xl font-medium">One-size-fits-all design</p>
                      <p className="text-muted-foreground">Results in wasted performance or overspending</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Network className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xl font-medium">Complex, fragile supply chains</p>
                      <p className="text-muted-foreground">Vulnerable to disruption</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
              <motion.div className="flex flex-col gap-6" variants={fadeIn}>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="mb-4 text-2xl font-bold">The Chinese Spy Balloon Incident</h3>
                  <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="/f22-balloon-incident.png"
                      alt="F-22 shooting down Chinese spy balloon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground mb-2">
                    In February 2023, an F-22 Raptor was deployed to shoot down a Chinese spy balloon using a $450,000
                    AIM-9X Sidewinder missile.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Total cost:</strong> Over $1.5M for the operation, including jet deployment and missile
                    cost.
                  </p>
                  <p className="mt-4 text-primary font-medium">
                    Our solution would have provided a mission-specific, cost-effective alternative at a fraction of the
                    price.
                  </p>
                </div>
                <div className="rounded-lg border bg-card p-4 shadow-sm">
                  <p className="text-xl text-muted-foreground italic">
                    "Modern missiles aren't built for agility or cost-effectiveness - they're built for standardization
                    at the expense of mission flexibility."
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* The Solution */}
        <section id="solution" className="py-20 border-b border-border/40 bg-muted/10">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="mb-4 text-3xl font-bold">The Solution: Next-Gen 3D-Printed Rocket Fuel</h2>
              <p className="text-xl text-muted-foreground">Mission-Specific, On-Demand Rocket Fuel</p>
              <p className="mt-4 text-muted-foreground">
                Imagine a world where the Chinese spy balloon incident could have been addressed with a $5,000
                custom-printed propulsion solution instead of a $450,000 missile.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="relative">
                <div className="rounded-lg border bg-card p-6 shadow-sm h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Mission-Tailored Propellant</h3>
                  <p className="text-muted-foreground">
                    3D-printed propellant tailored to each mission profile, optimized for specific performance
                    requirements
                  </p>
                </div>
                <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-primary/30 md:block"></div>
              </motion.div>

              <motion.div variants={fadeIn} className="relative">
                <div className="rounded-lg border bg-card p-6 shadow-sm h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Rapid, Decentralized Production</h3>
                  <p className="text-muted-foreground">
                    Manufacture fuel on-site in hours instead of months, eliminating complex supply chains
                  </p>
                </div>
                <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-primary/30 md:block"></div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <div className="rounded-lg border bg-card p-6 shadow-sm h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Optimized Performance</h3>
                  <p className="text-muted-foreground">
                    Lower cost, reduced waste, and precisely tuned thrust profiles for each specific mission
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Now */}
        <section id="why-now" className="py-20 border-b border-border/40 bg-gradient-to-b from-black to-blue-950">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="mb-4 text-3xl font-bold">Why Now?</h2>
              <p className="text-xl text-muted-foreground">Market Timing Is Critical</p>
            </motion.div>

            <motion.div
              className="mx-auto max-w-4xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Central hub with radiating elements */}
              <div className="relative">
                {/* Central hub */}
                <div className="relative mx-auto mb-16 w-64 h-64 rounded-full border-2 border-primary bg-black/80 flex items-center justify-center z-10">
                  <div className="text-center p-6">
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">The Time is Now</h3>
                    <p className="text-sm text-muted-foreground">Converging factors create a unique opportunity</p>
                  </div>
                </div>

                {/* Radiating elements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    variants={fadeIn}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-primary/5 rounded-lg transform rotate-3"></div>
                    <div className="relative rounded-lg border-2 border-primary/40 bg-black/60 p-6 backdrop-blur-sm h-full z-10">
                      <div className="mb-4 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-4 text-xl font-bold">Agile Combat Employment</h3>
                      <p className="text-muted-foreground">
                        Military doctrine is shifting toward distributed, agile operations requiring responsive supply
                        chains and on-demand capabilities.
                      </p>
                      <div className="mt-4 h-1 w-16 bg-primary/50 rounded-full"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative mt-8 md:mt-0"
                  >
                    <div className="absolute inset-0 bg-primary/5 rounded-lg transform -rotate-2"></div>
                    <div className="relative rounded-lg border-2 border-primary/40 bg-black/60 p-6 backdrop-blur-sm h-full z-10">
                      <div className="mb-4 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-4 text-xl font-bold">Peer Threats Demand Speed</h3>
                      <p className="text-muted-foreground">
                        China & Russia are developing advanced capabilities that require faster response times and more
                        adaptable systems.
                      </p>
                      <div className="mt-4 h-1 w-16 bg-primary/50 rounded-full"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeIn}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative mt-8 md:mt-0"
                  >
                    <div className="absolute inset-0 bg-primary/5 rounded-lg transform rotate-1"></div>
                    <div className="relative rounded-lg border-2 border-primary/40 bg-black/60 p-6 backdrop-blur-sm h-full z-10">
                      <div className="mb-4 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Network className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-4 text-xl font-bold">Vulnerable Supply Chains</h3>
                      <p className="text-muted-foreground">
                        Manufacturing & logistics pipelines are increasingly vulnerable to disruption, creating
                        strategic risks.
                      </p>
                      <div className="mt-4 h-1 w-16 bg-primary/50 rounded-full"></div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="mx-auto max-w-3xl mt-16 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className="absolute inset-0 bg-primary/5 rounded-lg transform rotate-1"></div>
                <div className="relative rounded-lg border-2 border-primary/30 bg-black/80 p-8 text-center backdrop-blur-sm">
                  <p className="text-2xl font-medium italic text-primary-foreground">
                    "The future fight won't wait for a supply chain."
                  </p>
                  <p className="mt-2 text-muted-foreground">— USAF Strategic Doctrine</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 border-b border-border/40">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="mb-4 text-3xl font-bold">How It Works: On-Demand 3D-Printed SRM Fuel</h2>
              <p className="text-xl text-muted-foreground">From Mission Specs to Printed Fuel in Hours</p>
            </motion.div>

            <motion.div
              className="relative mx-auto max-w-4xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>

              {/* Step 1 */}
              <motion.div className="relative mb-16 md:ml-0 md:mr-[50%] md:pr-12" variants={fadeInFromLeft}>
                <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border bg-primary text-primary-foreground md:left-auto md:right-0 md:translate-x-1/2">
                  1
                </div>
                <div className="ml-12 rounded-lg border bg-card p-6 shadow-sm md:ml-0">
                  <h3 className="mb-2 text-xl font-bold">Enter Mission Parameters</h3>
                  <p className="text-muted-foreground">
                    Use our AI-powered interface to input mission requirements, including range, payload, and thrust
                    profile
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div className="relative mb-16 md:ml-[50%] md:pl-12" variants={fadeIn}>
                <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border bg-primary text-primary-foreground md:left-0 md:-translate-x-1/2">
                  2
                </div>
                <div className="ml-12 rounded-lg border bg-card p-6 shadow-sm md:ml-0">
                  <h3 className="mb-2 text-xl font-bold">AI Generates STL File</h3>
                  <p className="text-muted-foreground">
                    Our proprietary algorithm creates the optimal fuel grain geometry to match your exact thrust curve
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div className="relative mb-16 md:ml-0 md:mr-[50%] md:pr-12" variants={fadeInFromLeft}>
                <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border bg-primary text-primary-foreground md:left-auto md:right-0 md:translate-x-1/2">
                  3
                </div>
                <div className="ml-12 rounded-lg border bg-card p-6 shadow-sm md:ml-0">
                  <h3 className="mb-2 text-xl font-bold">Print Fuel On-Site</h3>
                  <p className="text-muted-foreground">
                    The fuel is printed with our custom resin on-site, eliminating shipping hazards and delays
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div className="relative md:ml-[50%] md:pl-12" variants={fadeIn}>
                <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border bg-primary text-primary-foreground md:left-0 md:-translate-x-1/2">
                  4
                </div>
                <div className="ml-12 rounded-lg border bg-card p-6 shadow-sm md:ml-0">
                  <h3 className="mb-2 text-xl font-bold">Launch</h3>
                  <p className="text-muted-foreground">
                    Insert the printed fuel grain into the missile body and deploy with confidence
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section id="market" className="py-20 border-b border-border/40 bg-muted/10">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="mb-4 text-3xl font-bold">Market Opportunity</h2>
              <p className="text-xl text-muted-foreground">Transforming SRM Production</p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <div className="rounded-lg border bg-card p-8 shadow-sm text-center h-full">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <DollarSign className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-4xl font-bold">$26.8B+</h3>
                  <p className="text-muted-foreground">Global tactical missile market</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <div className="rounded-lg border bg-card p-8 shadow-sm text-center h-full">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-4xl font-bold">$400M+</h3>
                  <p className="text-muted-foreground">Potential annual savings from tailored fuels</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn}>
                <div className="rounded-lg border bg-card p-8 shadow-sm text-center h-full">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-4xl font-bold">Disruption</h3>
                  <p className="text-muted-foreground">Current solutions are ripe for innovation</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-12 mx-auto max-w-3xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <p className="text-muted-foreground italic">
                "A Multi-Billion Dollar Opportunity: Thousands vs. 100s of thousands/millions in cost comparison"
              </p>
            </motion.div>
          </div>
        </section>

        {/* Competitive Advantage */}
        <section id="advantage" className="py-20 border-b border-border/40">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="mb-4 text-3xl font-bold">Competitive Advantage</h2>
              <p className="text-xl text-muted-foreground">How We Compare to Traditional Solutions</p>
            </motion.div>

            <motion.div
              className="mx-auto max-w-4xl overflow-hidden rounded-lg border"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="w-[200px]">Feature</TableHead>
                    <TableHead>Traditional SRMs</TableHead>
                    <TableHead>3D-Printed SRMs</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-muted/5">
                    <TableCell className="font-medium">Manufacturing Time</TableCell>
                    <TableCell className="text-muted-foreground">Years</TableCell>
                    <TableCell className="text-primary font-medium">Hours to Days</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/5">
                    <TableCell className="font-medium">Design Flexibility</TableCell>
                    <TableCell className="text-muted-foreground">Fixed</TableCell>
                    <TableCell className="text-primary font-medium">Adaptive (Thrust Profiles)</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/5">
                    <TableCell className="font-medium">Supply Chain Risks</TableCell>
                    <TableCell className="text-muted-foreground">High (Only 2 Suppliers)</TableCell>
                    <TableCell className="text-primary font-medium">Low (Local Production)</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/5">
                    <TableCell className="font-medium">Storage & Transport</TableCell>
                    <TableCell className="text-muted-foreground">Hazardous, Costly</TableCell>
                    <TableCell className="text-primary font-medium">Safe, Non-Energetic Resin</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/5">
                    <TableCell className="font-medium">Thrust Optimization</TableCell>
                    <TableCell className="text-muted-foreground">Limited</TableCell>
                    <TableCell className="text-primary font-medium">Customizable per Mission</TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/5">
                    <TableCell className="font-medium">Production Sites</TableCell>
                    <TableCell className="text-muted-foreground">Centralized</TableCell>
                    <TableCell className="text-primary font-medium">Decentralized</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </motion.div>
          </div>
        </section>

        {/* Target Users */}
        <section id="users" className="py-20 border-b border-border/40 bg-muted/10">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="mb-4 text-3xl font-bold">Who Needs This Technology?</h2>
              <p className="text-xl text-muted-foreground">Serving Those Who Can't Afford to Wait</p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn}>
                <Card className="overflow-hidden h-full">
                  <div className="bg-primary/10 p-6 flex justify-center">
                    <Shield className="h-16 w-16 text-primary" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold">U.S. Department of Defense</h3>
                    <p className="text-muted-foreground">
                      Tactical and strategic missile systems requiring rapid deployment
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="overflow-hidden h-full">
                  <div className="bg-primary/10 p-6 flex justify-center">
                    <Users className="h-16 w-16 text-primary" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold">NATO Allies</h3>
                    <p className="text-muted-foreground">
                      Partner nations seeking advanced propulsion capabilities with reduced logistics footprint
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="overflow-hidden h-full">
                  <div className="bg-primary/10 p-6 flex justify-center">
                    <Settings className="h-16 w-16 text-primary" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold">Defense Contractors</h3>
                    <p className="text-muted-foreground">
                      Major companies like Raytheon and Lockheed seeking innovative propulsion solutions
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="overflow-hidden h-full">
                  <div className="bg-primary/10 p-6 flex justify-center">
                    <Rocket className="h-16 w-16 text-primary" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-2 text-xl font-bold">Emerging Space & Drones</h3>
                    <p className="text-muted-foreground">
                      Tactical drone manufacturers and small-launch vehicle companies
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Execution Plan */}
        <section id="execution" className="py-20 border-b border-border/40">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="mb-4 text-3xl font-bold">How We Execute & Scale</h2>
              <p className="text-xl text-muted-foreground">Our Roadmap to Market</p>
            </motion.div>

            <motion.div
              className="mx-auto max-w-4xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="relative">
                {/* Progress line */}
                <div className="absolute left-[15px] top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2"></div>

                {/* Phase 1 */}
                <motion.div
                  className="relative mb-12 pl-10 md:ml-0 md:mr-[50%] md:pl-0 md:pr-12"
                  variants={fadeInFromLeft}
                >
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-primary text-primary-foreground md:left-1/2 md:-translate-x-1/2">
                    1
                  </div>
                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <Badge className="mb-2">Phase 1</Badge>
                    <h3 className="mb-2 text-xl font-bold">Small-scale fuel testing</h3>
                    <p className="text-muted-foreground mb-2">Validate fuel formulations and printing techniques</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Status</span>
                      <span className="text-sm font-medium">Planning</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[5%] rounded-full bg-primary"></div>
                    </div>
                    <p className="mt-4 text-right font-bold">
                      $400K <span className="text-xs font-normal text-muted-foreground">(Pre-seed funding)</span>
                    </p>
                  </div>
                </motion.div>

                {/* Phase 2 */}
                <motion.div className="relative mb-12 pl-10 md:ml-[50%] md:pl-12" variants={fadeIn}>
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-primary text-primary-foreground md:left-1/2 md:-translate-x-1/2">
                    2
                  </div>
                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <Badge className="mb-2">Phase 2</Badge>
                    <h3 className="mb-2 text-xl font-bold">3D printer adaptation (SLA/DLP)</h3>
                    <p className="text-muted-foreground mb-2">Customize printing hardware for energetic materials</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Status</span>
                      <span className="text-sm font-medium">Future Phase</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[0%] rounded-full bg-primary"></div>
                    </div>
                    <p className="mt-4 text-right font-bold">
                      $2M <span className="text-xs font-normal text-muted-foreground">(Seed round)</span>
                    </p>
                  </div>
                </motion.div>

                {/* Phase 3 */}
                <motion.div
                  className="relative mb-12 pl-10 md:ml-0 md:mr-[50%] md:pl-0 md:pr-12"
                  variants={fadeInFromLeft}
                >
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-primary text-primary-foreground md:left-1/2 md:-translate-x-1/2">
                    3
                  </div>
                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <Badge className="mb-2">Phase 3</Badge>
                    <h3 className="mb-2 text-xl font-bold">Full-scale engine testing</h3>
                    <p className="text-muted-foreground mb-2">Validate performance in real-world conditions</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Status</span>
                      <span className="text-sm font-medium">Future Phase</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[0%] rounded-full bg-primary"></div>
                    </div>
                    <p className="mt-4 text-right font-bold">
                      $8M <span className="text-xs font-normal text-muted-foreground">(Series A)</span>
                    </p>
                  </div>
                </motion.div>

                {/* Phase 4 */}
                <motion.div className="relative pl-10 md:ml-[50%] md:pl-12" variants={fadeIn}>
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border bg-primary text-primary-foreground md:left-1/2 md:-translate-x-1/2">
                    4
                  </div>
                  <div className="rounded-lg border bg-card p-6 shadow-sm">
                    <Badge className="mb-2">Phase 4</Badge>
                    <h3 className="mb-2 text-xl font-bold">DoD certification & deployment</h3>
                    <p className="text-muted-foreground mb-2">Achieve certification and begin field deployment</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Status</span>
                      <span className="text-sm font-medium">Future Phase</span>
                    </div>
                    <div className="mt-1 h-2 w-full rounded-full bg-muted">
                      <div className="h-2 w-[0%] rounded-full bg-primary"></div>
                    </div>
                    <p className="mt-4 text-right font-bold">
                      $10M+ <span className="text-xs font-normal text-muted-foreground">(Series B+)</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Revenue Streams */}
        <section id="revenue" className="py-20 border-b border-border/40 bg-muted/10">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="mb-4 text-3xl font-bold">Revenue Streams</h2>
              <p className="text-xl text-muted-foreground">Multiple Paths to Sustainable Growth</p>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">DoD Contracts & R&D</h3>
                    <p className="text-muted-foreground">
                      Direct government investment through contracts and research grants
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Settings className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Licensing</h3>
                    <p className="text-muted-foreground">
                      Licensing to major defense contractors – Scalable, high-margin revenue
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Rocket className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Contract Manufacturing</h3>
                    <p className="text-muted-foreground">Supplying fuel directly to end users and system integrators</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <DollarSign className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">SBIR/STTR Grants</h3>
                    <p className="text-muted-foreground">
                      Small Business Innovation Research and Technology Transfer grants
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section id="challenges" className="py-20 border-b border-border/40">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="mb-4 text-3xl font-bold">Challenges & Solutions</h2>
              <p className="text-xl text-muted-foreground">Addressing Key Concerns</p>
            </motion.div>

            <motion.div
              className="mx-auto max-w-4xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInFromLeft}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center">
                        <XCircle className="mr-2 h-5 w-5 text-destructive" />
                        <h3 className="text-xl font-bold">Safety Concerns</h3>
                      </div>
                      <div className="mb-4 flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <p className="text-muted-foreground">
                          Fuel remains non-energetic until activated, reducing handling risks
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center">
                        <XCircle className="mr-2 h-5 w-5 text-destructive" />
                        <h3 className="text-xl font-bold">Regulatory Approvals</h3>
                      </div>
                      <div className="mb-4 flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <p className="text-muted-foreground">
                          Early engagement with DoD safety & acquisition teams ensures compliance
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInFromLeft}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center">
                        <XCircle className="mr-2 h-5 w-5 text-destructive" />
                        <h3 className="text-xl font-bold">Adoption Hesitation</h3>
                      </div>
                      <div className="mb-4 flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <p className="text-muted-foreground">
                          Gradual field testing proves reliability before full-scale deployment
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center">
                        <XCircle className="mr-2 h-5 w-5 text-destructive" />
                        <h3 className="text-xl font-bold">Upfront Investment Costs</h3>
                      </div>
                      <div className="mb-4 flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                        <p className="text-muted-foreground">
                          Small-scale demo first de-risks large investments, proving ROI early
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partner With Us */}
        <section id="partner" className="py-20 border-b border-border/40 bg-black">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="mb-4 text-3xl font-bold">Partner With Us</h2>
              <p className="text-xl text-muted-foreground">Join Us at the Ground Floor</p>
            </motion.div>

            <motion.div
              className="mx-auto max-w-4xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="grid gap-8 md:grid-cols-2">
                <motion.div variants={fadeInFromLeft}>
                  <Card className="bg-card/20 backdrop-blur-sm border-primary/20 h-full">
                    <CardContent className="p-8">
                      <h3 className="mb-6 text-2xl font-bold">We're seeking:</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                            <DollarSign className="h-3 w-3" />
                          </div>
                          <p className="text-lg">$400,000 in pre-seed funding</p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                            <Settings className="h-3 w-3" />
                          </div>
                          <p className="text-lg">To begin development of our custom energetic resin</p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                            <Rocket className="h-3 w-3" />
                          </div>
                          <p className="text-lg">To create our first AI-driven design software prototype</p>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <Button size="lg" className="w-full" asChild>
                          <a href="https://docsend.com/view/ie3eskiv8vxi6cxp" target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-5 w-5" />
                            Download Full Pitch Deck
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeIn}>
                  <Card className="bg-card/20 backdrop-blur-sm border-primary/20 h-full">
                    <CardContent className="p-8">
                      <h3 className="mb-6 text-2xl font-bold">Early Investor Advantages:</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                            <CheckCircle className="h-3 w-3" />
                          </div>
                          <p className="text-lg">Most favorable terms at the earliest stage</p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                            <CheckCircle className="h-3 w-3" />
                          </div>
                          <p className="text-lg">Strategic input on product development and go-to-market strategy</p>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                            <CheckCircle className="h-3 w-3" />
                          </div>
                          <p className="text-lg">First access to demonstration and testing results</p>
                        </li>
                      </ul>
                      <div className="mt-8">
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full"
                          onClick={() => window.open("https://calendar.app.google/EivBzRxEBwARyL3M7", "_blank")}
                        >
                          <Calendar className="mr-2 h-5 w-5" />
                          Schedule a Call
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <div className="container">
            <motion.div
              className="mx-auto max-w-3xl text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="mb-4 text-3xl font-bold">Let's Talk</h2>
              <p className="text-xl text-muted-foreground">Ready to revolutionize propulsion technology?</p>
            </motion.div>

            <motion.div
              className="mx-auto max-w-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 overflow-hidden rounded-full h-[150px] w-[150px] relative">
                      <Image src="/shepherd-headshot.png" alt="Shepherd" fill className="object-cover" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold">Shepherd Kruse</h3>
                    <p className="mb-6 text-muted-foreground">Founder & Chief Executive Officer</p>

                    <div className="grid gap-4 w-full max-w-xs">
                      <Button variant="outline" className="flex justify-start" asChild>
                        <a href="https://linkedin.com/in/shepherdkruse" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-5 w-5" />
                          shepherdkruse
                        </a>
                      </Button>
                      <Button variant="outline" className="flex justify-start" asChild>
                        <a href="tel:7193602628">
                          <Phone className="mr-2 h-5 w-5" />
                          719-360-2628
                        </a>
                      </Button>
                      <Button variant="outline" className="flex justify-start" asChild>
                        <a href="mailto:info@shepherdspacesystems.com">
                          <Mail className="mr-2 h-5 w-5" />
                          info@shepherdspacesystems.com
                        </a>
                      </Button>
                      <Button variant="outline" className="flex justify-start" asChild>
                        <a href="https://shepherdspacesystems.com" target="_blank" rel="noopener noreferrer">
                          <Globe className="mr-2 h-5 w-5" />
                          shepherdspacesystems.com
                        </a>
                      </Button>
                    </div>

                    <div className="mt-8 w-full">
                      <Button
                        className="w-full"
                        onClick={() => window.open("https://calendar.app.google/EivBzRxEBwARyL3M7", "_blank")}
                      >
                        <Calendar className="mr-2 h-5 w-5" />
                        Schedule a Meeting
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              Back to Home
            </Link>
            <a
              href="https://docsend.com/view/ie3eskiv8vxi6cxp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Download PDF
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shepherd Space Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
