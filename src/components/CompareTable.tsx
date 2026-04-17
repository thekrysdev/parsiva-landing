type Row = {
  feature: string
  sub: string
  chatgpt: { label: string; type: "no" | "partial" | "yes" }
  ocr: { label: string; type: "no" | "partial" | "yes" }
  parsiva: { label: string; type: "no" | "partial" | "yes" }
}

const ROWS: Row[] = [
  {
    feature: "Strukturiert in Ihre Felder",
    sub: "Nicht nur Text, sondern direkt in Ihr Schema",
    chatgpt: { label: "— Freitext", type: "no" },
    ocr: { label: "Templates", type: "partial" },
    parsiva: { label: "✓ Maßgeschneidert", type: "yes" },
  },
  {
    feature: "Nachtrag-Delta-Review",
    sub: "Amendments gegen Bestand abgleichen",
    chatgpt: { label: "— Manuell", type: "no" },
    ocr: { label: "— Manuell", type: "no" },
    parsiva: { label: "✓ Automatisch", type: "yes" },
  },
  {
    feature: "DSGVO-konform (EU)",
    sub: "Server in Deutschland, AVV inklusive",
    chatgpt: { label: "— USA", type: "no" },
    ocr: { label: "Je nach Anbieter", type: "partial" },
    parsiva: { label: "✓ Frankfurt", type: "yes" },
  },
  {
    feature: "API in Ihr System",
    sub: "Direkt ins ERP, CRM, DMS",
    chatgpt: { label: "— Copy-Paste", type: "no" },
    ocr: { label: "✓", type: "yes" },
    parsiva: { label: "✓ REST-API", type: "yes" },
  },
  {
    feature: "Bezahlbar für Mittelstand",
    sub: "Keine Enterprise-Pricing-Minimums",
    chatgpt: { label: "✓ Günstig", type: "yes" },
    ocr: { label: "— Enterprise", type: "no" },
    parsiva: { label: "✓ Mittelstand", type: "yes" },
  },
]

function cellClass(type: "no" | "partial" | "yes") {
  if (type === "yes") return "text-p-green font-semibold"
  if (type === "partial") return "text-p-orange"
  return "text-ink-5"
}

export default function CompareTable() {
  return (
    <section className="px-8 py-28 bg-paper-2">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center mb-[72px]">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">Warum nicht einfach…</div>
          <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
            ChatGPT? Standard-OCR?
            <br />
            <em className="italic font-normal text-p-blue">Kurze Antwort: nein.</em>
          </h2>
          <p className="text-lg text-ink-3 leading-[1.5]">Ein ehrlicher Vergleich der häufigsten Alternativen, die wir in Gesprächen hören.</p>
        </div>

        <div className="bg-paper-2 rounded-[20px] p-3 border border-line">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] px-6 py-5 text-xs font-semibold text-ink-4 uppercase tracking-wider bg-paper rounded-xl">
            <div>Anforderung</div>
            <div className="text-center">ChatGPT</div>
            <div className="text-center">Standard-OCR</div>
            <div className="text-center text-ink font-heading font-bold text-base tracking-[-0.01em] normal-case">Parsiva</div>
          </div>

          {ROWS.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[2fr_1fr_1fr_1fr] px-6 py-5 items-center ${i < ROWS.length - 1 ? "border-b border-line-2" : ""}`}
            >
              <div>
                <div className="font-medium text-[15px]">{row.feature}</div>
                <div className="text-xs text-ink-4 mt-0.5">{row.sub}</div>
              </div>
              <div className={`text-center text-sm ${cellClass(row.chatgpt.type)}`}>{row.chatgpt.label}</div>
              <div className={`text-center text-sm ${cellClass(row.ocr.type)}`}>{row.ocr.label}</div>
              <div
                className={`text-center text-sm bg-ink -my-5 py-5 ${
                  i === 0 ? "rounded-t-xl" : ""
                } ${i === ROWS.length - 1 ? "rounded-b-xl" : ""}`}
                style={{ color: "#86EFAC", fontWeight: 600 }}
              >
                {row.parsiva.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
