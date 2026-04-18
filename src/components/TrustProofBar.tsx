import { MapPin, ShieldCheck, Lock, ShieldBan } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const ITEMS: { icon: LucideIcon; label: string }[] = [
  { icon: MapPin, label: "Server in Frankfurt" },
  { icon: ShieldCheck, label: "DSGVO-konform" },
  { icon: Lock, label: "AES-256 verschlüsselt" },
  { icon: ShieldBan, label: "Kein KI-Training" },
]

export default function TrustProofBar() {
  return (
    <section className="bg-ink text-paper relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-ink pointer-events-none opacity-60" />
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 items-center">
          {ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex items-center gap-2.5 text-[13px] md:text-sm">
                <Icon strokeWidth={1.75} className="w-4 h-4 text-p-amber shrink-0" />
                <span className="font-medium text-paper/85">{item.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
