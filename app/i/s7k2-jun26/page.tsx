import type { Metadata } from "next"
import { InvestorUpdateJune2026 } from "@/components/investor-update-june-2026"

export const metadata: Metadata = {
  title: "Investor Update — Delta-V Solid Motor / SF-2026-027",
  description: "Confidential investor update. From print to burn.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export default function Page() {
  return <InvestorUpdateJune2026 />
}
