import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Investor Update | Shepherd Space Systems",
  description: "Private investor update for Shepherd Space Systems.",
  // Hidden from search engines and crawlers
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

// ─────────────────────────────────────────────────────────────
// EDIT YOUR UPDATE BELOW
// Replace the placeholder values and section content with your
// real investor update. Everything is plain text/markup.
// ─────────────────────────────────────────────────────────────
const update = {
  period: "Q2 2026",
  date: "June 2026",
  headline: "Static fire campaign complete, scaling extrusion throughput.",
  summary:
    "This quarter we completed our fifth full-duration static fire, validated the vacuum-extrusion process at production cadence, and advanced two defense programs toward qualification. Details below.",
  metrics: [
    { label: "Static Fires", value: "5", note: "Full-duration" },
    { label: "Cash Runway", value: "14 mo", note: "At current burn" },
    { label: "Burst Margin", value: ">2.4x", note: "MEOP" },
    { label: "Active Programs", value: "2", note: "Defense" },
  ],
  sections: [
    {
      title: "Highlights",
      body: [
        "Completed fifth full-duration static fire with measured void fraction under 0.5%.",
        "Validated vacuum-boundary extrusion at production cadence.",
        "Advanced Counter-UAS propulsion program toward qualification testing.",
      ],
    },
    {
      title: "Programs & Revenue",
      body: [
        "Counter-UAS Systems: progressing through hardware scaling for U.S. Space Force engagement.",
        "Tactical Motor Production: precision grain geometries delivered for payload-delivery profiles.",
      ],
    },
    {
      title: "Financials",
      body: [
        "Current monthly burn is on plan. Runway extends approximately 14 months at present spend.",
        "Replace this section with your detailed financial summary, raise status, and use of funds.",
      ],
    },
    {
      title: "Asks",
      body: [
        "Introductions to defense primes and DoD program offices.",
        "Candidates for senior propulsion and manufacturing engineering roles.",
      ],
    },
  ],
}

export default function InvestorUpdatesPage() {
  return (
    <div className="min-h-screen">
      {/* Minimal nav */}
      <nav className="fixed top-0 left-0 right-0 z-[999] h-14 flex items-center justify-between px-5 md:px-10 bg-[rgba(6,8,12,0.85)] backdrop-blur-[20px] border-b border-blue-500/10">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/sss-logo.png" alt="Shepherd Space Systems" width={32} height={32} className="opacity-90" />
          <span className="font-mono text-[11.5px] font-medium tracking-[2.5px] uppercase text-[var(--text)]">
            Shepherd Space Systems
          </span>
        </Link>
        <span className="font-mono text-[10.5px] tracking-[1.2px] uppercase text-blue-400 px-4 py-1.5 border border-blue-500/50">
          Investor Update
        </span>
      </nav>

      <main className="px-5 md:px-10 pt-32 pb-28">
        <div className="max-w-[820px] mx-auto">
          {/* Confidential banner */}
          <div className="mb-10 flex items-center gap-3 px-4 py-3 bg-blue-500/10 border border-blue-500/25 rounded">
            <span className="font-mono text-[10px] tracking-[2px] uppercase text-blue-400">Confidential</span>
            <span className="text-[13px] text-[var(--text-2)]">
              For invited investors only. Please do not share this link publicly.
            </span>
          </div>

          {/* Header */}
          <div className="section-tag">{update.period} / Investor Update</div>
          <h1 className="text-[clamp(28px,4vw,44px)] font-black leading-[1.1] tracking-[-1.5px] mb-4">
            {update.headline}
          </h1>
          <div className="font-mono text-[11px] tracking-[1.5px] uppercase text-[var(--text-3)] mb-8">
            {update.date}
          </div>
          <p className="text-[17px] text-[var(--text-2)] leading-[1.75] mb-12 max-w-[640px]">{update.summary}</p>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] mb-16">
            {update.metrics.map((m) => (
              <div key={m.label} className="bg-[var(--bg-card)] p-6">
                <div className="font-mono text-[10px] tracking-[1.5px] uppercase text-[var(--text-3)] mb-3">
                  {m.label}
                </div>
                <div className="text-[26px] font-bold text-[var(--text)] leading-none mb-1.5">{m.value}</div>
                <div className="font-mono text-[10px] text-blue-400">{m.note}</div>
              </div>
            ))}
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-12">
            {update.sections.map((section, i) => (
              <section key={section.title}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="font-mono text-[11px] text-blue-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[20px] font-semibold tracking-[-0.3px]">{section.title}</h2>
                  <div className="flex-1 h-px bg-[var(--border)]" />
                </div>
                <ul className="flex flex-col gap-3 pl-1">
                  {section.body.map((line, j) => (
                    <li key={j} className="flex gap-3 text-[15px] text-[var(--text-2)] leading-[1.7]">
                      <span className="mt-2.5 w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[13px] text-[var(--text-3)]">
              Questions? Reach out directly at{" "}
              <a
                href="mailto:shepherd.kruse@shepherdspacesystems.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                shepherd.kruse@shepherdspacesystems.com
              </a>
            </p>
            <Link
              href="/"
              className="font-mono text-[10.5px] tracking-[1.2px] uppercase text-[var(--text-2)] hover:text-[var(--text)] transition-colors"
            >
              ← Back to site
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
