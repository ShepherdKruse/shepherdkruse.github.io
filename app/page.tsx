import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[999] h-14 flex items-center justify-between px-5 md:px-10 bg-[rgba(6,8,12,0.85)] backdrop-blur-[20px] border-b border-blue-500/10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/sss-logo.png"
            alt="Shepherd Space Systems"
            width={32}
            height={32}
            className="opacity-90"
          />
          <span className="font-mono text-[11.5px] font-medium tracking-[2.5px] uppercase text-[var(--text)]">
            Shepherd Space Systems
          </span>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="#about" className="hidden md:block font-mono text-[10.5px] tracking-[1.2px] uppercase text-[var(--text-2)] hover:text-[var(--text)] transition-colors">
            About
          </Link>
          <Link href="#capabilities" className="hidden md:block font-mono text-[10.5px] tracking-[1.2px] uppercase text-[var(--text-2)] hover:text-[var(--text)] transition-colors">
            Capabilities
          </Link>
          <Link href="#technology" className="hidden md:block font-mono text-[10.5px] tracking-[1.2px] uppercase text-[var(--text-2)] hover:text-[var(--text)] transition-colors">
            Technology
          </Link>
          <Link href="#programs" className="hidden md:block font-mono text-[10.5px] tracking-[1.2px] uppercase text-[var(--text-2)] hover:text-[var(--text)] transition-colors">
            Programs
          </Link>
          <Link href="#leadership" className="hidden md:block font-mono text-[10.5px] tracking-[1.2px] uppercase text-[var(--text-2)] hover:text-[var(--text)] transition-colors">
            Leadership
          </Link>
          <Link 
            href="#contact" 
            className="font-mono text-[10.5px] tracking-[1.2px] uppercase text-blue-400 px-4 py-1.5 border border-blue-500/50 rounded hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-5 md:px-10 relative overflow-hidden">
        {/* Background effects - more vibrant blue */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0" style={{
            background: `
              radial-gradient(ellipse 60% 50% at 70% 30%, rgba(59, 130, 246, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 50% 60% at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 90% 10%, rgba(37, 99, 235, 0.15) 0%, transparent 40%)
            `
          }} />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        {/* Animated floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/5 w-64 h-64 bg-blue-600/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        {/* Vertical lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
          <div className="absolute w-px h-full left-1/3 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
          <div className="absolute w-px h-full left-2/3 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-center w-full max-w-[1200px] mx-auto pt-20 lg:pt-0">
          <div>
            <div className="flex items-center gap-3.5 mb-6 animate-fade-in animate-delay-1">
              <span className="w-7 h-px bg-[var(--accent)]" />
              <span className="font-mono text-[10.5px] tracking-[3px] uppercase text-[var(--accent)]">
                Solid Propulsion Manufacturing
              </span>
            </div>
            <h1 className="text-[clamp(34px,4.8vw,56px)] font-extrabold leading-[1.08] tracking-[-2px] mb-7 animate-fade-in animate-delay-2">
              We build the motors<br />the mission <span className="text-gradient">depends on.</span>
            </h1>
            <p className="text-[17px] text-[var(--text-2)] leading-[1.75] max-w-[520px] mb-10 animate-fade-in animate-delay-3">
              Shepherd Space Systems manufactures high-performance solid rocket motors using proprietary vacuum-extrusion technology. Vertically integrated. Defense-ready. Colorado Springs.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-4">
              <Link href="#contact" className="btn-primary">Get in Touch</Link>
              <Link href="#technology" className="btn-secondary">Our Technology</Link>
            </div>
          </div>

          {/* Data Card */}
          <div className="bg-[var(--bg-card)] border border-[var(--border)] p-8 lg:p-9 animate-fade-in animate-delay-5 relative overflow-hidden rounded-lg">
            {/* Card glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl" />
            <div className="font-mono text-[10px] tracking-[2.5px] uppercase text-[var(--text-3)] mb-7 pb-3 border-b border-[var(--border)]">
              Demonstrated Performance
            </div>
            {[
              { label: "Void Fraction", value: "<0.5%", accent: true },
              { label: "Static Fires", value: "5", accent: false },
              { label: "Thrust Deviation", value: "15% tighter", accent: true },
              { label: "Burst Margin", value: ">2.4x MEOP", accent: false },
              { label: "Solids Loading", value: "80-82%", accent: false },
              { label: "Status", value: "TRL 5", accent: true },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-baseline py-3.5 border-b border-[var(--border)] last:border-b-0">
                <span className="font-mono text-[10.5px] tracking-[0.5px] text-[var(--text-3)]">{item.label}</span>
                <span className={`font-mono text-[15px] font-medium ${item.accent ? 'text-[var(--accent)]' : 'text-[var(--text)]'}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 md:py-32 px-5 md:px-10 bg-[var(--bg-raised)] border-t border-b border-[var(--border)] scroll-mt-14">
        <div className="wrap">
          <div className="section-tag">01 / About</div>
          <h2 className="section-heading">Vertically integrated solid<br />rocket motor manufacturing.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 mt-14">
            <div className="flex flex-col gap-5">
              <p className="text-[16px] text-[var(--text-2)] leading-[1.8]">
                Shepherd Space Systems is a defense-focused aerospace company building the next generation of solid rocket motor manufacturing. We design propellant formulations, extrude complex grain geometries, wind composite casings, mold phenolic nozzle assemblies, and static fire complete motor systems, all under one roof.
              </p>
              <p className="text-[16px] text-[var(--text-2)] leading-[1.8]">
                Our core innovation is a vacuum-isolated extrusion process that eliminates the primary failure mode in solid propellant manufacturing: entrapped air voids. Where conventional casting depends on gravity and manual technique, our process uses precision volumetric extrusion under hard vacuum to produce propellant grains with near-theoretical density and measurably tighter ballistic performance.
              </p>
              <p className="text-[16px] text-[var(--text-2)] leading-[1.8]">
                We are actively executing defense contracts and scaling our manufacturing to support tactical and strategic solid propulsion programs across the Department of the Air Force.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--border)]">
              {[
                { label: "Headquarters", value: "Colorado Springs, CO" },
                { label: "Markets", value: "Defense & Commercial Aerospace" },
                { label: "Maturity", value: "Advanced Prototyping & Qualification" },
                { label: "CAGE Code", value: "13MC5" },
                { label: "UEI", value: "JN1DXJ1NPD59" },
                { label: "Business Size", value: "Small Business (NAICS 541715)" },
              ].map((item, i) => (
                <div key={i} className="bg-[var(--bg-card)] p-6 md:p-7">
                  <div className="font-mono text-[9.5px] tracking-[2px] uppercase text-[var(--text-3)] mb-2">{item.label}</div>
                  <div className="text-[14.5px] font-medium text-[var(--text)]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-28 md:py-32 px-5 md:px-10 scroll-mt-14 relative">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="wrap relative">
          <div className="section-tag">02 / Capabilities</div>
          <h2 className="section-heading">Every critical subsystem,<br />manufactured in-house.</h2>
          <p className="section-desc">No supply chain bottlenecks. No geometry constraints from legacy tooling. Full traceability from raw chemistry to flight-ready motor.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] mt-14 rounded-lg overflow-hidden">
            {[
              { num: "01", title: "Propellant Formulation & Extrusion", desc: "High-solids composite propellant processed through our proprietary vacuum-boundary extrusion system. Complex internal geometries including star, finocyl, and moonburner profiles. Measured void fraction under 0.5%." },
              { num: "02", title: "Composite Motor Casings", desc: "Filament-wound carbon fiber casings engineered for high chamber pressures and extreme thermal loads. Demonstrated burst pressure exceeding 1,100 psi with production-batch destructive testing." },
              { num: "03", title: "Nozzle & Thermal Protection", desc: "Hydraulically compression-molded phenolic nozzle assemblies with graphite throat inserts. In-house Bulk Molding Compound manufacturing. Erosion rates under 0.002 in/sec across extended burns." },
              { num: "04", title: "Static Fire & Qualification Testing", desc: "Fully instrumented test operations with high-frequency pressure, thrust, and temperature data acquisition. Burn rate characterization, structural proof, and lot acceptance testing." },
              { num: "05", title: "Counter-UAS Propulsion", desc: "Solid rocket motors engineered for kinetic counter-drone applications. High-efficiency designs optimized for rapid-response deployment in partnership with the U.S. Space Force." },
              { num: "06", title: "Digital Process Control", desc: "Real-time extrusion monitoring with closed-loop control. Full digital traceability from propellant batch through final motor assembly, supporting production readiness reviews." },
            ].map((cap, i) => (
              <div key={i} className="bg-[var(--bg)] p-8 md:p-11 transition-all duration-300 hover:bg-[var(--bg-hover)] relative group">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500 transition-all duration-300" />
                <div className="font-mono text-[10px] text-blue-400 mb-5 tracking-[1px]">{cap.num}</div>
                <h3 className="text-[17px] font-semibold mb-3 tracking-[-0.2px] group-hover:text-blue-300 transition-colors">{cap.title}</h3>
                <p className="text-[13.5px] text-[var(--text-2)] leading-[1.7]">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-28 md:py-32 px-5 md:px-10 bg-[var(--bg-raised)] border-t border-b border-[var(--border)] scroll-mt-14">
        <div className="wrap">
          <div className="section-tag">03 / Technology</div>
          <h2 className="section-heading">Why extrusion changes<br />the equation.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-14">
            <div>
              <p className="text-[16px] text-[var(--text-2)] leading-[1.8] mb-5">
                The standard method for loading solid propellant into a motor case is casting: a heated slurry is poured in, flows around a mandrel under gravity, and cures in place. This process works, but it introduces air at the propellant-case interface and around complex mandrel features. The resulting voids create unpredictable burn behavior and scatter in chamber pressure and thrust.
              </p>
              <p className="text-[16px] text-[var(--text-2)] leading-[1.8] mb-5">
                Our approach replaces gravity with a progressive cavity pump operating behind a hard vacuum boundary. Propellant is extruded directly onto the mandrel at controlled volumetric rates, with no air path into the grain. The result is a propellant column with near-theoretical density.
              </p>
              <p className="text-[16px] text-[var(--text-2)] leading-[1.8]">
                We have measured this difference across five static fires: our vacuum-extruded grains produce a 15% tighter standard deviation in thrust-time profiles compared to cast grains of identical formulation. That is not a simulation. It is instrumented test data.
              </p>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "<0.5%", label: "Void fraction, X-ray validated" },
                  { value: "3-5%", label: "Industry standard (cast motors)" },
                  { value: "29 inHg", label: "Sustained process vacuum" },
                  { value: "80-82%", label: "Solids loading range" },
                ].map((item, i) => (
                  <div key={i} className="bg-[var(--bg-card)] border border-[var(--border)] p-6">
                    <div className="font-mono text-[22px] font-medium text-[var(--accent)] mb-1.5">{item.value}</div>
                    <div className="text-[12px] text-[var(--text-3)] leading-[1.5]">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-7 md:p-8 bg-[var(--bg-card)] border border-[var(--border)] flex flex-wrap gap-8 md:gap-12">
                {[
                  { value: "355 psi", label: "Nominal Pc" },
                  { value: "~120 lbf", label: "Peak thrust (54mm)" },
                  { value: "5,035 ft/s", label: "Measured c*" },
                  { value: "~235 s", label: "Theoretical Isp (SL)" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="font-mono text-[18px] font-medium text-[var(--accent)]">{item.value}</div>
                    <div className="text-[11px] text-[var(--text-3)]">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-28 md:py-32 px-5 md:px-10 scroll-mt-14">
        <div className="wrap">
          <div className="section-tag">04 / Active Programs</div>
          <h2 className="section-heading">Building for the warfighter.</h2>
          <p className="section-desc">Shepherd Space Systems is executing across defense and commercial aerospace, with active work spanning tactical propulsion, counter-UAS, and atmospheric research.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] mt-14">
            {[
              { category: "Defense", title: "Counter-UAS Systems", desc: "Engineering and manufacturing solid rocket motors for a kinetic counter-drone mechanism commissioned by the United States Space Force. High-efficiency propulsion optimized for rapid engagement of unmanned aerial threats." },
              { category: "Defense", title: "Tactical Motor Production", desc: "Manufacturing high-efficiency solid rocket motors for payload delivery applications. Precision grain geometries tailored for specific thrust profiles and mission envelopes." },
              { category: "Research", title: "Stratolink (Nonprofit)", desc: "Atmospheric research and autonomous flight operations through an associated nonprofit organization. Laying groundwork for high-altitude data collection and autonomous vehicle development." },
              { category: "Development", title: "Scaled Motor Qualification", desc: "Expanding our vacuum-extrusion platform to larger motor diameters for tactical missile applications. Hardware scaling, qualification testing, and manufacturing process documentation for technology transition." },
            ].map((prog, i) => (
              <div key={i} className="bg-[var(--bg)] p-9 md:p-11">
                <div className="font-mono text-[9.5px] tracking-[2px] uppercase text-[var(--accent)] mb-4">{prog.category}</div>
                <h3 className="text-[18px] font-semibold mb-3">{prog.title}</h3>
                <p className="text-[14px] text-[var(--text-2)] leading-[1.75]">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-28 md:py-32 px-5 md:px-10 scroll-mt-14 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="wrap relative">
          <div className="section-tag">05 / Leadership</div>
          <h2 className="section-heading">Built by an engineer who<br />understands the mission.</h2>
          <div className="mt-14 flex flex-col md:flex-row items-start gap-10 md:gap-16 max-w-[900px]">
            {/* Photo with gradient mask - no frame */}
            <div className="relative flex-shrink-0">
              {/* Glowing ring behind photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-blue-600/20 to-transparent blur-xl scale-110" />
              {/* Circular photo with gradient fade */}
              <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden" style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.1) 100%)'
              }}>
                <Image
                  src="/shepherd-headshot.png"
                  alt="Shepherd Henry Kruse"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Gradient overlay for fade effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-transparent" />
              </div>
              {/* Decorative accent ring */}
              <div className="absolute -inset-2 rounded-full border border-blue-500/20" />
              <div className="absolute -inset-4 rounded-full border border-blue-500/10" />
            </div>
            {/* Bio content */}
            <div className="flex-1">
              <h3 className="text-[24px] font-semibold mb-1">Shepherd Henry Kruse</h3>
              <div className="font-mono text-[12px] tracking-[1.5px] uppercase text-gradient mb-5">Founder & CEO</div>
              <p className="text-[15px] text-[var(--text-2)] leading-[1.85] mb-6">
                Shepherd founded Shepherd Space Systems to solve a problem he saw firsthand: the solid rocket motor industrial base lacks the agile, flexible manufacturing capability that modern defense programs require. He designed and built the company&apos;s extrusion system, propellant formulations, and motor hardware from scratch.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-[12px] font-mono text-blue-400">
                  M.S. Nuclear Engineering
                </span>
                <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-[12px] font-mono text-blue-400">
                  B.S. Astronautical Engineering
                </span>
                <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-[12px] font-mono text-blue-400">
                  1st Lt, USSF
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 md:py-32 px-5 md:px-10 bg-[var(--bg-raised)] border-t border-[var(--border)] scroll-mt-14">
        <div className="wrap">
          <div className="section-tag">06 / Contact</div>
          <h2 className="section-heading">Let&apos;s talk propulsion.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-14">
            <div>
              {[
                { label: "Email", value: "shepherd.kruse@shepherdspacesystems.com", href: "mailto:shepherd.kruse@shepherdspacesystems.com" },
                { label: "Phone", value: "(719) 360-2628", href: "tel:+17193602628" },
                { label: "Location", value: "Colorado Springs, Colorado", href: null },
                { label: "CAGE / UEI", value: "13MC5 / JN1DXJ1NPD59", href: null },
              ].map((item, i) => (
                <div key={i} className="mb-8">
                  <div className="font-mono text-[9.5px] tracking-[2px] uppercase text-[var(--text-3)] mb-1.5">{item.label}</div>
                  <div className="text-[15px]">
                    {item.href ? (
                      <a href={item.href} className="border-b border-[var(--border)] hover:border-[var(--accent)] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-[16px] text-[var(--text-2)] leading-[1.8] mb-5">
                We work with defense program offices, prime contractors, and research laboratories developing next-generation solid propulsion systems.
              </p>
              <p className="text-[16px] text-[var(--text-2)] leading-[1.8]">
                If you are exploring advanced manufacturing approaches for tactical or strategic solid rocket motors, or need a responsive production partner for small-to-medium SRM programs, we welcome the conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-5 md:px-10 border-t border-[var(--border)] flex flex-col md:flex-row justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[1px] uppercase text-[var(--text-3)]">
          &copy; 2026 Shepherd Space Systems. All rights reserved.
        </p>
        <p className="font-mono text-[10px] tracking-[1px] uppercase text-[var(--text-3)]">
          Colorado Springs, CO
        </p>
      </footer>
    </div>
  )
}
