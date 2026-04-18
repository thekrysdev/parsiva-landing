import { BadgeCheck, FileText, Zap } from "lucide-react"
import FloatingBadge from "@/components/FloatingBadge"

export type HeroVisualVariant =
  | "immobilien"
  | "handwerk"
  | "kanzleien"
  | "logistik"
  | "steuerberatung"

type DocLine =
  | { kind: "heading"; text: string }
  | { kind: "text"; parts: ({ t: string } | { hl: string; id?: string })[] }

type VisualConfig = {
  fileName: string
  headerAccent: string
  doc: {
    title: string
    lines: DocLine[]
  }
  panel: {
    title: string
    fields: { label: string; value: string; connectFromId?: string }[]
    fieldNoteLabel: string
    fieldNoteValue: string
  }
  floats: {
    badge: string
  }
}

const CONFIG: Record<HeroVisualVariant, VisualConfig> = {
  immobilien: {
    fileName: "Gewerbemietvertrag.pdf",
    headerAccent: "bg-ink",
    doc: {
      title: "GEWERBEMIETVERTRAG",
      lines: [
        { kind: "heading", text: "§ 1 Mietgegenstand" },
        {
          kind: "text",
          parts: [
            { t: "Gegenstand sind Räumlichkeiten mit einer Gesamtfläche von " },
            { hl: "868 m²", id: "flaeche" },
            { t: " im Erdgeschoss." },
          ],
        },
        { kind: "heading", text: "§ 2 Mietzeit" },
        {
          kind: "text",
          parts: [
            { t: "Beginn " },
            { hl: "01.11.2023" },
            { t: ", Ende der Erstlaufzeit " },
            { hl: "31.10.2033", id: "ende" },
            { t: "." },
          ],
        },
        { kind: "heading", text: "§ 3 Miete" },
        {
          kind: "text",
          parts: [
            { t: "Die monatliche Nettomiete beträgt " },
            { hl: "EUR 18.500,00", id: "miete" },
            { t: " zzgl. USt." },
          ],
        },
      ],
    },
    panel: {
      title: "Extracted Fields",
      fields: [
        { label: "Mietfläche", value: "868 m²", connectFromId: "flaeche" },
        { label: "Laufzeit bis", value: "31.10.2033", connectFromId: "ende" },
        { label: "Nettomiete", value: "18.500 €", connectFromId: "miete" },
        { label: "Kündigungsfrist", value: "6 Monate" },
        { label: "Indexklausel", value: "VPI-gebunden" },
      ],
      fieldNoteLabel: "+ weitere",
      fieldNoteValue: "175 Felder",
    },
    floats: { badge: "In 47 Sek. verarbeitet" },
  },
  handwerk: {
    fileName: "Lieferschein_2024-0847.pdf",
    headerAccent: "bg-ink",
    doc: {
      title: "LIEFERSCHEIN",
      lines: [
        { kind: "heading", text: "Lieferant" },
        {
          kind: "text",
          parts: [
            { hl: "Baustoffe Huber GmbH", id: "lief" },
            { t: ", Industriestraße 14, 78224 Singen" },
          ],
        },
        { kind: "heading", text: "Bestellnummer" },
        {
          kind: "text",
          parts: [{ hl: "BST-2024-0847", id: "bst" }, { t: "  ·  Lieferdatum 18.04.2026" }],
        },
        { kind: "heading", text: "Positionen" },
        {
          kind: "text",
          parts: [
            { t: "3× " },
            { hl: "Trockenbauprofil 100 mm" },
            { t: ", 12× Gipskarton 12,5 mm, 40× Estrichzement 25 kg" },
          ],
        },
        {
          kind: "text",
          parts: [
            { t: "Gesamtgewicht " },
            { hl: "842 kg", id: "gew" },
            { t: "  ·  Empfänger: Baustelle Rheingasse" },
          ],
        },
      ],
    },
    panel: {
      title: "Extracted Fields",
      fields: [
        { label: "Lieferant", value: "Baustoffe Huber", connectFromId: "lief" },
        { label: "Bestellnr.", value: "BST-2024-0847", connectFromId: "bst" },
        { label: "Positionen", value: "12" },
        { label: "Gewicht", value: "842 kg", connectFromId: "gew" },
        { label: "Lieferdatum", value: "18.04.2026" },
      ],
      fieldNoteLabel: "+ Export",
      fieldNoteValue: "KWP · MOS'aik · HAPAK",
    },
    floats: { badge: "In 32 Sek. verarbeitet" },
  },
  kanzleien: {
    fileName: "Rahmenvertrag_2024.pdf",
    headerAccent: "bg-ink",
    doc: {
      title: "RAHMENVERTRAG",
      lines: [
        { kind: "heading", text: "§ 7 Haftung" },
        {
          kind: "text",
          parts: [
            { t: "Die Haftung ist " },
            { hl: "beschränkt auf direkte Schäden", id: "haft" },
            { t: ", ausgenommen bei Vorsatz." },
          ],
        },
        { kind: "heading", text: "§ 12 Kündigung" },
        {
          kind: "text",
          parts: [
            { t: "Ordentliche Kündigungsfrist " },
            { hl: "3 Monate zum Quartalsende", id: "kuend" },
            { t: "." },
          ],
        },
        { kind: "heading", text: "§ 19 Gerichtsstand" },
        {
          kind: "text",
          parts: [
            { t: "Ausschließlicher Gerichtsstand ist " },
            { hl: "München", id: "ger" },
            { t: ", Recht der Bundesrepublik Deutschland." },
          ],
        },
      ],
    },
    panel: {
      title: "Extracted Clauses",
      fields: [
        { label: "Haftung", value: "beschränkt", connectFromId: "haft" },
        { label: "Kündigung", value: "3 Mo · Quartal", connectFromId: "kuend" },
        { label: "Gerichtsstand", value: "München", connectFromId: "ger" },
        { label: "Laufzeit", value: "36 Monate" },
        { label: "Parteien", value: "2 identifiziert" },
      ],
      fieldNoteLabel: "Risikoscore",
      fieldNoteValue: "Mittel · 3 Punkte",
    },
    floats: { badge: "In 54 Sek. analysiert" },
  },
  logistik: {
    fileName: "CMR_DE-PL-2024-1147.pdf",
    headerAccent: "bg-[#B8860B]",
    doc: {
      title: "CMR-FRACHTBRIEF",
      lines: [
        { kind: "heading", text: "1  Absender" },
        {
          kind: "text",
          parts: [
            { hl: "Mustermann GmbH, Berlin", id: "abs" },
            { t: "  ·  EORI DE123456789" },
          ],
        },
        { kind: "heading", text: "2  Empfänger" },
        {
          kind: "text",
          parts: [
            { hl: "PL-Odbiorca Sp. z o.o., Warszawa", id: "emp" },
            { t: "  ·  Incoterms CPT Warschau" },
          ],
        },
        { kind: "heading", text: "7  Ware" },
        {
          kind: "text",
          parts: [
            { hl: "Elektronische Bauteile" },
            { t: ", " },
            { hl: "842 kg", id: "gew" },
            { t: "  ·  Zollwert " },
            { hl: "EUR 12.500", id: "zoll" },
          ],
        },
      ],
    },
    panel: {
      title: "eFTI-Mapping",
      fields: [
        { label: "consignor", value: "DE · Mustermann", connectFromId: "abs" },
        { label: "consignee", value: "PL · Odbiorca", connectFromId: "emp" },
        { label: "weight_kg", value: "842", connectFromId: "gew" },
        { label: "customs_eur", value: "12.500", connectFromId: "zoll" },
        { label: "incoterms", value: "CPT Warszawa" },
      ],
      fieldNoteLabel: "Format",
      fieldNoteValue: "eFTI · JSON · XML",
    },
    floats: { badge: "In 28 Sek. verarbeitet" },
  },
  steuerberatung: {
    fileName: "Steuerbescheid_2024.pdf",
    headerAccent: "bg-ink-2",
    doc: {
      title: "STEUERBESCHEID",
      lines: [
        { kind: "heading", text: "Festsetzung" },
        {
          kind: "text",
          parts: [
            { hl: "Einkommensteuer 2024", id: "art" },
            { t: "  ·  Aktenzeichen 42/815/2024" },
          ],
        },
        { kind: "heading", text: "Zahlbetrag" },
        {
          kind: "text",
          parts: [
            { t: "Festsetzung " },
            { hl: "EUR 14.320,00", id: "betr" },
            { t: ", fällig am 15.05.2026." },
          ],
        },
        { kind: "heading", text: "Rechtsbehelfsbelehrung" },
        {
          kind: "text",
          parts: [
            { t: "Einspruch binnen " },
            { hl: "4 Wochen", id: "frist" },
            { t: " nach Bekanntgabe des Bescheids." },
          ],
        },
      ],
    },
    panel: {
      title: "Extracted Fields",
      fields: [
        { label: "Steuerart", value: "Einkommensteuer", connectFromId: "art" },
        { label: "Festsetzung", value: "14.320,00 €", connectFromId: "betr" },
        { label: "Einspruchsfrist", value: "4 Wochen", connectFromId: "frist" },
        { label: "Fälligkeit", value: "15.05.2026" },
        { label: "Aktenzeichen", value: "42/815/2024" },
      ],
      fieldNoteLabel: "Archiv",
      fieldNoteValue: "GoBD-konform",
    },
    floats: { badge: "In 41 Sek. verarbeitet" },
  },
}

function Highlight({ children }: { children: string }) {
  return (
    <span className="bg-[rgba(194,65,12,0.18)] px-1 py-[1px] rounded-[3px] font-semibold text-ink animate-hl-pulse">
      {children}
    </span>
  )
}

export default function IndustryHeroVisual({ variant }: { variant: HeroVisualVariant }) {
  const config = CONFIG[variant]

  return (
    <div className="relative w-full aspect-[5/4] md:aspect-auto md:h-[560px]">
      <div
        aria-hidden
        className="absolute -inset-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 35% 40%, rgba(30, 58, 138, 0.16), transparent 60%), radial-gradient(ellipse at 80% 85%, rgba(194, 65, 12, 0.08), transparent 55%)",
        }}
      />

      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
        viewBox="0 0 400 400"
        preserveAspectRatio="none"
      >
        <path
          d="M 180 130 C 240 130, 260 180, 300 180"
          stroke="rgba(30, 58, 138, 0.35)"
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="none"
          className="animate-draw-line"
        />
        <path
          d="M 180 220 C 240 220, 260 240, 300 240"
          stroke="rgba(30, 58, 138, 0.3)"
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="none"
          className="animate-draw-line"
          style={{ animationDelay: "0.3s" }}
        />
        <path
          d="M 180 300 C 240 300, 260 290, 300 290"
          stroke="rgba(30, 58, 138, 0.25)"
          strokeWidth="1"
          strokeDasharray="4 4"
          fill="none"
          className="animate-draw-line"
          style={{ animationDelay: "0.6s" }}
        />
      </svg>

      <div className="absolute top-2 left-0 w-[64%] bg-white rounded-xl shadow-[0_24px_60px_-20px_rgba(10,14,26,0.3)] border border-line overflow-hidden z-10">
        <div className={`h-9 ${config.headerAccent} flex items-center justify-between px-3`}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/70 truncate max-w-[70%]">
            <FileText strokeWidth={1.75} className="w-3 h-3 shrink-0" />
            <span className="truncate">{config.fileName}</span>
          </div>
          <div className="w-6" />
        </div>
        <div className="px-5 pt-4 pb-5">
          <div className="font-heading text-[11px] font-semibold text-ink tracking-[0.12em] mb-3 text-center">
            {config.doc.title}
          </div>
          <div className="space-y-2 text-[10.5px] leading-[1.65] text-ink-3">
            {config.doc.lines.map((line, i) =>
              line.kind === "heading" ? (
                <div key={i} className="font-semibold text-ink mt-1.5 first:mt-0">
                  {line.text}
                </div>
              ) : (
                <p key={i} className="[hyphens:none] break-words">
                  {line.parts.map((p, j) =>
                    "hl" in p ? <Highlight key={j}>{p.hl}</Highlight> : <span key={j}>{p.t}</span>
                  )}
                </p>
              )
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 right-2 md:right-3 w-[56%] bg-ink text-paper rounded-xl shadow-[0_24px_60px_-20px_rgba(10,14,26,0.5)] p-5 z-20 border border-white/5">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] uppercase tracking-[1.5px] text-ink-5 font-semibold">
            {config.panel.title}
          </div>
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
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <span className="text-[11px] text-ink-5 font-mono shrink-0">{f.label}</span>
              <span className="flex items-center gap-1.5 min-w-0">
                <BadgeCheck strokeWidth={2} className="w-3 h-3 text-[#86EFAC] shrink-0" />
                <span className="text-[12px] font-mono text-paper truncate">{f.value}</span>
              </span>
            </div>
          ))}
          <div className="flex items-center justify-between gap-3 pt-2.5 mt-1 border-t border-white/10 animate-field-in" style={{ animationDelay: "650ms" }}>
            <span className="text-[11px] text-ink-5 font-mono shrink-0">{config.panel.fieldNoteLabel}</span>
            <span className="text-[11px] text-p-amber font-mono truncate">{config.panel.fieldNoteValue}</span>
          </div>
        </div>
      </div>

      <div className="absolute -top-2 left-4 md:left-6 z-30">
        <FloatingBadge icon={Zap} variant="orange" animation="float">
          {config.floats.badge}
        </FloatingBadge>
      </div>

      <div className="absolute -bottom-2 left-2 md:left-8 z-30">
        <FloatingBadge icon={BadgeCheck} variant="paper" animation="float-delayed">
          <span className="text-p-green font-semibold">5 / 5</span>
          <span className="text-ink-3 font-medium ml-1">Felder validiert</span>
        </FloatingBadge>
      </div>
    </div>
  )
}
