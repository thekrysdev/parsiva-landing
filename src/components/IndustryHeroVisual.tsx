export type HeroVisualVariant =
  | "immobilien"
  | "handwerk"
  | "kanzleien"
  | "logistik"
  | "steuerberatung"

type DocumentMockup = {
  title: string
  headerColor: string
  bodyLines: { width: string; heading?: boolean }[]
  highlightRows?: number[]
}

type FieldPanel = {
  title: string
  fields: { label: string; value: string; status?: "ok" | "new" | "pending" }[]
}

type VisualConfig = {
  document: DocumentMockup
  panel: FieldPanel
}

const CONFIG: Record<HeroVisualVariant, VisualConfig> = {
  immobilien: {
    document: {
      title: "Gewerbemietvertrag.pdf",
      headerColor: "bg-ink",
      bodyLines: [
        { width: "w-3/4", heading: true },
        { width: "w-full" },
        { width: "w-11/12" },
        { width: "w-5/6" },
        { width: "w-3/4" },
        { width: "w-full" },
        { width: "w-4/5" },
      ],
      highlightRows: [2, 4, 6],
    },
    panel: {
      title: "Extracted Fields",
      fields: [
        { label: "Mieter", value: "Beispiel-Mieter AG" },
        { label: "Nettomiete", value: "18.500 €" },
        { label: "Laufzeit bis", value: "31.10.2033" },
        { label: "Mietfläche", value: "868 m²" },
        { label: "Kündigungsfrist", value: "6 Monate" },
      ],
    },
  },
  handwerk: {
    document: {
      title: "Lieferschein_2024-0847.pdf",
      headerColor: "bg-ink",
      bodyLines: [
        { width: "w-2/3", heading: true },
        { width: "w-full" },
        { width: "w-4/5" },
        { width: "w-full" },
        { width: "w-3/4" },
        { width: "w-5/6" },
      ],
      highlightRows: [2, 3, 5],
    },
    panel: {
      title: "Extracted Fields",
      fields: [
        { label: "Lieferant", value: "Baustoffe Huber" },
        { label: "Bestellnummer", value: "BST-2024-0847" },
        { label: "Positionen", value: "12" },
        { label: "Gewicht gesamt", value: "842 kg" },
        { label: "Lieferdatum", value: "18.04.2026" },
      ],
    },
  },
  kanzleien: {
    document: {
      title: "Rahmenvertrag_2024.pdf",
      headerColor: "bg-ink",
      bodyLines: [
        { width: "w-3/4", heading: true },
        { width: "w-full" },
        { width: "w-5/6" },
        { width: "w-full" },
        { width: "w-4/5" },
        { width: "w-11/12" },
        { width: "w-3/4" },
      ],
      highlightRows: [2, 4, 5, 6],
    },
    panel: {
      title: "Extracted Clauses",
      fields: [
        { label: "Parteien", value: "2 identifiziert" },
        { label: "Laufzeit", value: "36 Monate" },
        { label: "Kündigungsfrist", value: "3 Monate" },
        { label: "Haftung", value: "beschränkt" },
        { label: "Gerichtsstand", value: "München" },
      ],
    },
  },
  logistik: {
    document: {
      title: "CMR_DE-PL-2024-1147.pdf",
      headerColor: "bg-[#B8860B]",
      bodyLines: [
        { width: "w-2/3", heading: true },
        { width: "w-full" },
        { width: "w-5/6" },
        { width: "w-full" },
        { width: "w-3/4" },
        { width: "w-11/12" },
      ],
      highlightRows: [1, 3, 4, 5],
    },
    panel: {
      title: "Extracted Fields",
      fields: [
        { label: "Versender", value: "DE-Beispiel GmbH" },
        { label: "Empfänger", value: "PL-Odbiorca Sp." },
        { label: "Warenart", value: "Maschinenteile" },
        { label: "Gewicht", value: "4.250 kg" },
        { label: "Incoterms", value: "CPT Warschau" },
      ],
    },
  },
  steuerberatung: {
    document: {
      title: "Steuerbescheid_2024.pdf",
      headerColor: "bg-ink-2",
      bodyLines: [
        { width: "w-4/5", heading: true },
        { width: "w-full" },
        { width: "w-3/4" },
        { width: "w-full" },
        { width: "w-5/6" },
        { width: "w-2/3" },
      ],
      highlightRows: [2, 3, 5],
    },
    panel: {
      title: "Extracted Fields",
      fields: [
        { label: "Steuerart", value: "Einkommensteuer" },
        { label: "Zeitraum", value: "2024" },
        { label: "Festsetzung", value: "12.840,00 €" },
        { label: "Fälligkeit", value: "15.05.2026" },
        { label: "Einspruchsfrist", value: "28 Tage" },
      ],
    },
  },
}

export default function IndustryHeroVisual({ variant }: { variant: HeroVisualVariant }) {
  const config = CONFIG[variant]

  return (
    <div className="relative w-full aspect-[5/4] md:aspect-auto md:h-[520px]">
      <div
        className="absolute inset-8 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(30, 58, 138, 0.12), transparent 70%)" }}
      />

      <div className="absolute top-0 left-0 w-[62%] bg-paper rounded-xl shadow-[0_20px_50px_-20px_rgba(10,14,26,0.25)] border border-line overflow-hidden">
        <div className={`h-9 ${config.document.headerColor} flex items-center justify-between px-3`}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <div className="text-[11px] font-mono text-paper/70 truncate max-w-[60%]">{config.document.title}</div>
          <div className="w-8" />
        </div>
        <div className="p-5 space-y-2.5">
          {config.document.bodyLines.map((line, i) => {
            const isHighlighted = config.document.highlightRows?.includes(i)
            return (
              <div
                key={i}
                className={`h-2 rounded ${line.width} ${
                  line.heading ? "h-3 bg-ink/30" : isHighlighted ? "bg-p-orange/60" : "bg-line"
                }`}
              />
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[58%] bg-ink text-paper rounded-xl shadow-[0_20px_50px_-20px_rgba(10,14,26,0.4)] p-5 z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] uppercase tracking-[1.5px] text-ink-5 font-semibold">{config.panel.title}</div>
          <div className="flex items-center gap-1.5 text-[10px] text-[#86EFAC] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse-dot" />
            parsed
          </div>
        </div>
        <div className="space-y-2.5">
          {config.panel.fields.map((f, i) => (
            <div
              key={f.label}
              className="flex items-center justify-between gap-3 animate-field-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-[11px] text-ink-5 font-mono shrink-0">{f.label}</span>
              <span className="flex items-center gap-1.5 min-w-0">
                <span className="text-[#86EFAC] text-xs shrink-0">✓</span>
                <span className="text-[12px] font-mono text-paper truncate">{f.value}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
