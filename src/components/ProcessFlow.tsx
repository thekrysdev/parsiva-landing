export type ProcessStep = {
  title: string
  body: string
}

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
    <section id="ablauf" className="px-6 md:px-8 py-24 bg-paper-2">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">{eyebrow}</div>
          <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            {titleStart} <em className="italic font-normal text-p-blue">{titleItalic}</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-full w-full h-px bg-line-2 -translate-x-1/2 pointer-events-none">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-t border-r border-line" />
                </div>
              )}
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-p-blue text-paper font-heading font-semibold text-lg mb-4 relative z-10 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-heading text-[18px] font-semibold text-ink mb-2 tracking-[-0.01em]">{step.title}</h3>
              <p className="text-[14px] text-ink-3 leading-[1.55] [hyphens:auto] break-words">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
