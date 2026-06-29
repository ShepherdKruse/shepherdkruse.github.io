import Image from "next/image"

const BASE = "/i/s7k2-jun26"
const VIDEO_SRC =
  "https://github.com/ShepherdKruse/ShepherdSpaceSystems/raw/main/public/i/s7k2-jun26/static-fire.mp4"

const telemetry = [
  { label: "Peak Thrust", value: "134", unit: "N" },
  { label: "Total Impulse", value: "469", unit: "N·s" },
  { label: "Burn Time", value: "5.2", unit: "s" },
  { label: "Impulse Class", value: "I", unit: "" },
]

const pipeline = [
  { step: "01", title: "Requirement", desc: "Mission-defined thrust, impulse, and envelope targets." },
  { step: "02", title: "Design", desc: "Grain geometry and casing modeled to the spec." },
  { step: "03", title: "3D Print", desc: "Flight article additively manufactured in-house." },
  { step: "04", title: "Static Fire", desc: "Instrumented burn validates the prediction." },
]

const gallery = [
  { src: `${BASE}/ignition.png`, alt: "Motor ignition", caption: "Ignition" },
  { src: `${BASE}/full-thrust.png`, alt: "Motor at full thrust", caption: "Full thrust" },
  { src: `${BASE}/thrust-trace.png`, alt: "Measured thrust trace", caption: "Thrust trace" },
]

export function InvestorUpdateJune2026() {
  return (
    <main
      className="min-h-screen text-[var(--text)] relative"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 60%), #0a0b0d",
      }}
    >
      <div className="mx-auto w-full max-w-[980px] px-5 md:px-8 py-8 md:py-12">
        {/* Logo */}
        <header className="flex items-center gap-3 mb-16 md:mb-24">
          <Image
            src={`${BASE}/shepherd-icon.png`}
            alt="Shepherd Space Systems"
            width={46}
            height={46}
            className="w-[46px] h-[46px] object-contain"
          />
          <div className="font-mono text-[10px] tracking-[2px] leading-[1.4] text-[var(--text-2)]">
            SHEPHERD
            <br />
            SPACE SYSTEMS
          </div>
        </header>

        {/* Hero */}
        <section className="mb-12 md:mb-16">
          <div className="font-mono text-[11px] tracking-[2px] uppercase text-[var(--accent)] mb-6">
            Delta-V Solid Motor / SDP-48I-A / SF-2026-027
          </div>
          <h1 className="text-[clamp(40px,7vw,76px)] font-black leading-[0.98] tracking-[-2px] mb-6">
            From print to burn.
          </h1>
          <p className="text-[17px] md:text-[19px] text-[var(--text-2)] leading-[1.65] max-w-[640px]">
            Our first additively manufactured flight article held through a full-duration burn.
            Design, hardware, and measured performance lined up.
          </p>
        </section>

        {/* Video */}
        <section className="mb-6">
          <div className="relative rounded-xl overflow-hidden border border-[var(--border-2)] bg-black aspect-video">
            <video
              controls
              playsInline
              preload="metadata"
              poster={`${BASE}/poster.png`}
              className="w-full h-full object-cover"
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          </div>
          <div className="flex items-center justify-between mt-3 font-mono text-[11px] tracking-[1px] text-[var(--text-3)]">
            <span>Static fire with live telemetry / 0:10</span>
            <span>SF-2026-027</span>
          </div>
        </section>

        {/* Telemetry strip */}
        <section className="mt-14 md:mt-20 border border-[var(--border-2)] rounded-xl overflow-hidden bg-[var(--bg-card)]">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
            <span className="font-mono text-[10px] tracking-[2px] uppercase text-[var(--text-3)]">
              Measured at the stand
            </span>
            <span className="font-mono text-[10px] tracking-[1.5px] uppercase text-emerald-400 flex items-center gap-1.5">
              <span className="text-emerald-400">●</span> Nominal
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {telemetry.map((t, i) => (
              <div
                key={t.label}
                className={`px-6 py-7 ${i < telemetry.length - 1 ? "md:border-r" : ""} border-[var(--border)] ${
                  i < 2 ? "border-b md:border-b-0" : ""
                } ${i % 2 === 0 ? "border-r md:border-r" : ""}`}
              >
                <div className="font-mono text-[10px] tracking-[1.5px] uppercase text-[var(--text-3)] mb-3">
                  {t.label}
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-[32px] md:text-[38px] font-bold leading-none tracking-[-1px]">
                    {t.value}
                  </span>
                  {t.unit && (
                    <span className="font-mono text-[13px] text-[var(--text-2)]">{t.unit}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Numbered sections */}
        <div className="mt-20 md:mt-28 flex flex-col gap-16 md:gap-24">
          <Section num="01" title="Why we're building this">
            <p>
              Defense programs need solid rocket motors that are fast to iterate and trusted to
              perform. The legacy supply base is slow and inflexible. Shepherd closes the entire
              loop — design, print, and test — so a motor can go from a requirement to a validated
              flight article in a fraction of the usual time.
            </p>
          </Section>

          <Section num="02" title="One pipeline">
            <p className="mb-8">
              Every motor moves through a single, repeatable pipeline. No handoffs to outside
              vendors, no waiting on tooling.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-lg overflow-hidden">
              {pipeline.map((p) => (
                <div key={p.step} className="bg-[var(--bg-card)] p-5">
                  <div className="font-mono text-[10px] text-[var(--accent)] mb-3 tracking-[1px]">
                    {p.step}
                  </div>
                  <div className="text-[15px] font-semibold mb-2">{p.title}</div>
                  <div className="text-[13px] text-[var(--text-2)] leading-[1.6]">{p.desc}</div>
                </div>
              ))}
            </div>
          </Section>

          <Section num="03" title="What we proved">
            <p>
              On <strong className="text-[var(--text)] font-semibold">26 June 2026</strong>, we
              static-fired the <strong className="text-[var(--text)] font-semibold">SDP-48I-A</strong>
              {" "}— our first additively manufactured flight article. It held through a
              full-duration burn, and the measured thrust trace matched our pre-test prediction.
              The design tools, the hardware, and the stand all agreed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {gallery.map((g) => (
                <figure key={g.src} className="group">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[var(--border-2)] bg-[var(--bg-card)]">
                    <Image
                      src={g.src || "/placeholder.svg"}
                      alt={g.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 320px"
                    />
                  </div>
                  <figcaption className="font-mono text-[10px] tracking-[1.5px] uppercase text-[var(--text-3)] mt-2.5">
                    {g.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Section>

          <Section num="04" title="Traction">
            <ul className="flex flex-col gap-4">
              <TractionItem>Signed 50-unit production contract.</TractionItem>
              <TractionItem>Active agency R&D engagement.</TractionItem>
              <TractionItem>Next flight article scheduled for Q3 2026.</TractionItem>
            </ul>
          </Section>

          <Section num="05" title="The longer play">
            <p className="mb-5">
              Two technologies extend the moat beyond manufacturing speed:
            </p>
            <div className="flex flex-col gap-4">
              <div className="border border-[var(--border-2)] rounded-lg p-5 bg-[var(--bg-card)]">
                <div className="font-mono text-[10px] tracking-[1.5px] uppercase text-[var(--accent)] mb-2">
                  PhysOp
                </div>
                <p className="text-[14px] text-[var(--text-2)] leading-[1.65]">
                  A physics solver running roughly <strong className="text-[var(--text)]">1000× faster</strong> than
                  conventional methods — milliseconds instead of hours — at under 5% error. It turns
                  motor design into a near-real-time loop.
                </p>
              </div>
              <div className="border border-[var(--border-2)] rounded-lg p-5 bg-[var(--bg-card)]">
                <div className="font-mono text-[10px] tracking-[1.5px] uppercase text-[var(--accent)] mb-2">
                  Smart Skin
                </div>
                <p className="text-[14px] text-[var(--text-2)] leading-[1.65]">
                  An RF-active surface layer that adds sensing and signature control directly to the
                  airframe.
                </p>
              </div>
            </div>
          </Section>

          <Section num="06" title="Go deeper">
            <p className="mb-7">
              Happy to walk through the data, the pipeline, or the roadmap in detail.
            </p>
            <a
              href="mailto:shepherd@shepherdspacesystems.com"
              className="btn-primary"
            >
              Reply to Shepherd →
            </a>
            <div className="mt-8 pt-6 border-t border-[var(--border)]">
              <div className="text-[15px] font-semibold">Shepherd Kruse</div>
              <div className="font-mono text-[11px] tracking-[1.5px] uppercase text-[var(--accent)] mt-1">
                Founder &amp; CEO
              </div>
            </div>
          </Section>
        </div>

        {/* Footer */}
        <footer className="mt-24 md:mt-32 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 font-mono text-[10px] tracking-[1.5px] uppercase text-[var(--text-3)]">
          <span>Shepherd Space Systems</span>
          <span>Demonstrated, not described</span>
        </footer>
      </div>
    </main>
  )
}

function Section({
  num,
  title,
  children,
}: {
  num: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8">
      <div className="font-mono text-[11px] tracking-[1.5px] uppercase text-[var(--accent)] md:pt-1">
        {num} /
      </div>
      <div>
        <h2 className="text-[24px] md:text-[28px] font-bold tracking-[-0.5px] mb-5">{title}</h2>
        <div className="text-[15px] md:text-[16px] text-[var(--text-2)] leading-[1.75] max-w-[620px]">
          {children}
        </div>
      </div>
    </section>
  )
}

function TractionItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-[var(--accent)] mt-1.5 text-[10px]">●</span>
      <span>{children}</span>
    </li>
  )
}
