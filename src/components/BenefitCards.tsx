import type { LucideIcon } from "lucide-react"

export type Benefit = {
  icon: LucideIcon
  title: string
  body: string
}

type Tone = "dark" | "light"

export default function BenefitCards({
  items,
  eyebrow = "Warum Parsiva",
  tone = "dark",
  titleStart = "Drei Dinge, die Parsiva",
  titleItalic = "anders macht.",
}: {
  items: Benefit[]
  eyebrow?: string
  tone?: Tone
  titleStart?: string
  titleItalic?: string
}) {
  const isDark = tone === "dark"

  return (
    <section
      className={`relative px-6 md:px-8 py-24 overflow-hidden ${
        isDark ? "bg-ink-700 text-paper" : "bg-paper text-ink"
      }`}
    >
      {isDark ? (
        <>
          <div aria-hidden className="absolute inset-0 bg-grid-ink pointer-events-none" />
          <div
            aria-hidden
            className="absolute -top-40 -left-40 w-[560px] h-[560px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(30, 58, 138, 0.45), transparent 65%)",
            }}
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -right-20 w-[480px] h-[480px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(194, 65, 12, 0.18), transparent 65%)",
            }}
          />
        </>
      ) : null}

      <div className="max-w-[1280px] mx-auto relative">
        <div className="max-w-[720px] mx-auto text-center mb-14">
          <div
            className={`text-xs font-semibold uppercase tracking-[2px] mb-4 ${
              isDark ? "text-p-amber" : "text-p-orange"
            }`}
          >
            {eyebrow}
          </div>
          <h2
            className={`font-heading font-medium leading-[1.05] tracking-[-0.025em] ${
              isDark ? "text-paper" : "text-ink"
            }`}
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            {titleStart}{" "}
            <em
              className={`italic font-normal ${
                isDark ? "text-p-amber" : "text-p-blue"
              }`}
            >
              {titleItalic}
            </em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((b, i) => {
            const Icon = b.icon
            return (
              <div
                key={b.title}
                className={`group relative p-8 rounded-[16px] transition-all animate-fade-in-up ${
                  isDark
                    ? "bg-ink-800/80 border border-white/10 hover:border-p-amber/40 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(252,165,92,0.3)]"
                    : "bg-paper border border-line-2 hover:border-p-blue/30 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(30,58,138,0.15)]"
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className={`absolute left-0 top-8 bottom-8 w-1 rounded-r ${
                    isDark ? "bg-p-amber" : "bg-p-blue"
                  }`}
                />
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    isDark
                      ? "bg-p-amber/15 text-p-amber border border-p-amber/25"
                      : "bg-p-blue-soft text-p-blue border border-p-blue/15"
                  }`}
                >
                  <Icon strokeWidth={1.75} className="w-6 h-6" />
                </div>
                <div
                  className={`font-heading text-[22px] font-semibold mb-2 tracking-[-0.01em] [hyphens:auto] break-words ${
                    isDark ? "text-paper" : "text-ink"
                  }`}
                >
                  {b.title}
                </div>
                <p
                  className={`text-[15px] leading-[1.55] [hyphens:auto] break-words ${
                    isDark ? "text-paper/70" : "text-ink-3"
                  }`}
                >
                  {b.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
