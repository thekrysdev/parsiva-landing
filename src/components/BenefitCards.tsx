export type Benefit = {
  icon: string
  title: string
  body: string
}

export default function BenefitCards({
  items,
  eyebrow = "Warum Parsiva",
}: {
  items: Benefit[]
  eyebrow?: string
}) {
  return (
    <section className="px-6 md:px-8 py-24">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center mb-14">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">{eyebrow}</div>
          <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
            Drei Dinge, die Parsiva <em className="italic font-normal text-p-blue">anders macht.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((b) => (
            <div
              key={b.title}
              className="relative p-8 rounded-[16px] bg-paper border border-line-2 hover:border-p-blue/30 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(30,58,138,0.15)] transition-all"
            >
              <div className="absolute left-0 top-8 bottom-8 w-1 rounded-r bg-p-blue" />
              <div className="text-[32px] mb-4">{b.icon}</div>
              <div className="font-heading text-[22px] font-semibold text-ink mb-2 tracking-[-0.01em]">
                {b.title}
              </div>
              <p className="text-[15px] text-ink-3 leading-[1.55] [hyphens:auto] break-words">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
