import type { LucideIcon } from "lucide-react"
import { Upload, ScanLine, GitCompare, Download, ArrowRight } from "lucide-react"

export type ProcessStep = {
  title: string
  body: string
  icon?: LucideIcon
}

const FALLBACK_ICONS: LucideIcon[] = [Upload, ScanLine, GitCompare, Download]

export default function ProcessFlow({
  steps,
  eyebrow = "Ablauf",
  titleStart = "Wie es",
  titleItalic = "funktioniert.",
}: {
  steps: ProcessStep[]
  eyebrow?: string
  titleStart?: string
  titleItalic?: string
}) {
  return (
    <section
      id="ablauf"
      className="px-6 md:px-8 py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F0F4FB 0%, #FBFAF7 45%, #FDF6ED 100%)",
      }}
    >
      <div aria-hidden className="absolute inset-0 bg-grid-paper pointer-events-none opacity-50" />
      <div className="max-w-[1280px] mx-auto relative">
        <div className="max-w-[720px] mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">{eyebrow}</div>
          <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            {titleStart} <em className="italic font-normal text-p-blue">{titleItalic}</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {steps.map((step, i) => {
            const Icon = step.icon ?? FALLBACK_ICONS[i] ?? Upload
            return (
              <div key={step.title} className="relative flex">
                <div
                  className="group relative flex-1 rounded-2xl p-6 bg-white border border-line-2 shadow-[0_10px_30px_-16px_rgba(10,14,26,0.15)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(30,58,138,0.2)] hover:border-p-blue/30 transition-all animate-fade-in-up"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-[11px] font-mono font-semibold text-p-blue tracking-[2px]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-p-blue text-paper shadow-[0_10px_20px_-10px_rgba(30,58,138,0.6)]">
                      <Icon strokeWidth={1.75} className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-heading text-[18px] font-semibold text-ink mb-2 tracking-[-0.01em] [hyphens:auto] break-words">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-ink-3 leading-[1.55] [hyphens:auto] break-words">{step.body}</p>
                </div>
                {i < steps.length - 1 ? (
                  <div className="hidden md:flex items-center justify-center w-4 shrink-0 -ml-2 -mr-2 relative z-10">
                    <ArrowRight strokeWidth={1.75} className="w-5 h-5 text-p-blue/40" />
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
