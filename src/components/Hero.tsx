import { MapPin, ShieldCheck, Sparkles, BadgeCheck, Zap, FileText, Quote } from "lucide-react"
import DemoButton from "@/components/DemoButton"
import FloatingBadge from "@/components/FloatingBadge"

export default function Hero() {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-20 px-6 md:px-8 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-paper pointer-events-none opacity-70" />
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(30, 58, 138, 0.06), transparent 60%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto relative grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper-2 border border-line text-xs font-medium text-ink-3 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-p-green animate-pulse-soft" />
            Server in Frankfurt · DSGVO-konform · Kein KI-Training
          </div>

          <h1
            className="font-heading font-medium leading-[0.98] tracking-[-0.03em] max-w-[720px] mb-6 text-ink"
            style={{ fontSize: "clamp(40px, 5.5vw, 72px)", fontVariationSettings: '"opsz" 96' }}
          >
            Ihre Dokumente lesen sich{" "}
            <em className="italic font-normal text-p-blue">selbst</em>.
          </h1>

          <p className="text-lg md:text-xl text-ink-3 leading-[1.5] max-w-[560px] mb-8 font-normal">
            Verträge, Rechnungen, Bescheide, Angebote —{" "}
            <strong className="text-ink font-semibold">
              Parsiva extrahiert automatisch alle Felder
            </strong>
            . Maßgeschneidert auf Ihr Unternehmen, in unter 60 Sekunden pro Dokument.
          </p>

          <div className="flex gap-3 items-center mb-8 flex-wrap">
            <DemoButton variant="primary">Kostenlose Demo vereinbaren →</DemoButton>
            <a
              href="#rechner"
              className="inline-flex items-center gap-1.5 font-semibold text-[15px] px-6 py-3.5 rounded-lg bg-transparent text-ink-3 border border-line hover:border-ink-3 hover:text-ink transition-all"
            >
              Was kostet es mich, nichts zu ändern?
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-ink-4 mb-3">
            <span className="inline-flex items-center gap-1.5">
              <MapPin strokeWidth={1.75} className="w-3.5 h-3.5 text-p-blue" />
              Server in Frankfurt
            </span>
            <span className="w-1 h-1 rounded-full bg-ink-5" />
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck strokeWidth={1.75} className="w-3.5 h-3.5 text-p-blue" />
              DSGVO-konform
            </span>
            <span className="w-1 h-1 rounded-full bg-ink-5" />
            <span className="inline-flex items-center gap-1.5">
              <Sparkles strokeWidth={1.75} className="w-3.5 h-3.5 text-p-orange" />
              Validiert an komplexen Gewerbemietverträgen
            </span>
          </div>
          <div className="flex gap-5 flex-wrap text-[13px] text-ink-4">
            <span>Setup in wenigen Tagen</span>
            <span className="flex items-center gap-1.5 before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-ink-5">
              Pay-per-Document
            </span>
            <span className="flex items-center gap-1.5 before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-ink-5">
              Kein Abo
            </span>
          </div>
        </div>

        <div className="relative w-full">
          <HeroMockup />
        </div>
      </div>

      <DemoWindowLarge />
    </section>
  )
}

function HeroMockup() {
  return (
    <div className="relative h-[440px] md:h-[520px]">
      <div
        aria-hidden
        className="absolute -inset-8 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 40% 45%, rgba(30, 58, 138, 0.18), transparent 60%), radial-gradient(ellipse at 85% 85%, rgba(194, 65, 12, 0.12), transparent 55%)",
        }}
      />

      <div className="absolute top-0 left-0 w-[70%] bg-white rounded-xl shadow-[0_24px_60px_-20px_rgba(10,14,26,0.3)] border border-line overflow-hidden z-10">
        <div className="h-9 bg-ink flex items-center justify-between px-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/25" />
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/70 truncate max-w-[70%]">
            <FileText strokeWidth={1.75} className="w-3 h-3 shrink-0" />
            Gewerbemietvertrag.pdf
          </div>
          <div className="w-6" />
        </div>
        <div className="px-5 pt-4 pb-5">
          <div className="font-heading text-[11px] font-semibold text-ink tracking-[0.12em] mb-3 text-center">
            GEWERBEMIETVERTRAG
          </div>
          <div className="space-y-2 text-[10.5px] leading-[1.65] text-ink-3">
            <div className="font-semibold text-ink">§ 1 Mietgegenstand</div>
            <p>
              Räumlichkeiten mit einer Gesamtfläche von{" "}
              <span className="bg-[rgba(194,65,12,0.18)] px-1 py-[1px] rounded-[3px] font-semibold text-ink animate-hl-pulse">
                868 m²
              </span>{" "}
              im Erdgeschoss.
            </p>
            <div className="font-semibold text-ink mt-1.5">§ 2 Mietzeit</div>
            <p>
              Laufzeit bis{" "}
              <span className="bg-[rgba(194,65,12,0.18)] px-1 py-[1px] rounded-[3px] font-semibold text-ink animate-hl-pulse">
                31.10.2033
              </span>
              , Kündigung 6 Monate.
            </p>
            <div className="font-semibold text-ink mt-1.5">§ 3 Miete</div>
            <p>
              Nettomiete{" "}
              <span className="bg-[rgba(194,65,12,0.18)] px-1 py-[1px] rounded-[3px] font-semibold text-ink animate-hl-pulse">
                EUR 18.500,00
              </span>{" "}
              zzgl. USt.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-2 md:right-3 w-[54%] bg-ink text-paper rounded-xl shadow-[0_24px_60px_-20px_rgba(10,14,26,0.5)] p-5 z-20 border border-white/5">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] uppercase tracking-[1.5px] text-ink-5 font-semibold">
            Extracted Fields
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-[#86EFAC] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse-dot" />
            parsed
          </div>
        </div>
        <div className="space-y-2.5">
          {[
            { k: "Mietfläche", v: "868 m²" },
            { k: "Laufzeit bis", v: "31.10.2033" },
            { k: "Nettomiete", v: "18.500 €" },
            { k: "Kündigungsfrist", v: "6 Monate" },
            { k: "Indexklausel", v: "VPI-gebunden" },
          ].map((f, i) => (
            <div
              key={f.k}
              className="flex items-center justify-between gap-3 animate-field-in"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <span className="text-[11px] text-ink-5 font-mono shrink-0">{f.k}</span>
              <span className="flex items-center gap-1.5 min-w-0">
                <BadgeCheck strokeWidth={2} className="w-3 h-3 text-[#86EFAC] shrink-0" />
                <span className="text-[12px] font-mono text-paper truncate">{f.v}</span>
              </span>
            </div>
          ))}
          <div
            className="flex items-center justify-between gap-3 pt-2.5 mt-1 border-t border-white/10 animate-field-in"
            style={{ animationDelay: "650ms" }}
          >
            <span className="text-[11px] text-ink-5 font-mono shrink-0">+ weitere</span>
            <span className="text-[11px] text-p-amber font-mono">175 Felder</span>
          </div>
        </div>
      </div>

      <div className="absolute -top-3 left-4 md:left-6 z-30">
        <FloatingBadge icon={Zap} variant="orange" animation="float">
          In 47 Sek. verarbeitet
        </FloatingBadge>
      </div>

      <div className="hidden md:block absolute top-[50%] -left-4 z-30 max-w-[260px] -translate-y-1/2">
        <div className="animate-float-delayed bg-paper rounded-xl border border-line-2 shadow-[0_16px_40px_-14px_rgba(10,14,26,0.22)] p-4">
          <div className="flex items-start gap-2.5">
            <span className="shrink-0 w-7 h-7 rounded-full bg-p-blue-soft text-p-blue border border-p-blue/15 flex items-center justify-center">
              <Quote strokeWidth={2} className="w-3.5 h-3.5" />
            </span>
            <div>
              <p className="text-[12px] leading-[1.45] text-ink-2 font-medium">
                „4 IDP-Anbieter getestet — Parsiva lieferte als einziges zuverlässige Extraktion
                auf Gewerbemietverträgen.&ldquo;
              </p>
              <p className="mt-2 text-[11px] text-ink-4">
                Evaluierung bei Drees &amp; Sommer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DemoWindowLarge() {
  return (
    <div className="max-w-[1280px] mx-auto mt-24 relative">
      <div className="bg-ink rounded-[20px] p-3 shadow-[0_30px_60px_-20px_rgba(10,14,26,0.35)]">
        <div className="flex items-center px-4 pt-3 pb-4 gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 bg-white/10 px-3.5 py-1.5 rounded-md font-mono text-[11px] text-white/60 text-center">
            app.parsiva.de / demo
          </div>
        </div>

        <div className="bg-paper rounded-[10px] grid grid-cols-1 md:grid-cols-[1.2fr_1fr] min-h-[520px] overflow-hidden relative">
          <div className="absolute top-5 right-5 bg-[rgba(15,23,42,0.9)] text-white px-3 py-1 rounded-full text-[10px] font-semibold flex items-center gap-1.5 font-mono uppercase tracking-wider z-10 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FCA55C] animate-pulse-dot" />
            Live-Demo kommt bald
          </div>

          <div className="bg-[#1E293B] p-6 flex flex-col">
            <div className="flex items-center justify-between mb-5 text-[#CBD5E1] text-xs">
              <span className="font-mono inline-flex items-center gap-1.5">
                <FileText strokeWidth={1.75} className="w-3.5 h-3.5" />
                Beispiel-Dokument.pdf
              </span>
              <span className="font-mono text-[10px]">Seite 1 / 26</span>
            </div>
            <div className="flex-1 bg-white rounded px-8 py-7 text-[9.5px] leading-[1.6] text-[#1C2333] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <div className="font-bold text-xs mb-3 text-center">GEWERBEMIETVERTRAG (Muster)</div>
              <p className="mb-2.5 text-[#3A4259]">
                Zwischen{" "}
                <span className="bg-[rgba(194,65,12,0.15)] px-0.5 rounded-sm animate-hl-pulse">
                  Muster-Vermieter GmbH
                </span>
                , vertreten durch den Geschäftsführer, Musterstraße 1, 60311 Frankfurt am Main
              </p>
              <p className="mb-2.5 text-[#3A4259]">
                und{" "}
                <span className="bg-[rgba(194,65,12,0.15)] px-0.5 rounded-sm animate-hl-pulse">
                  Beispiel-Mieter AG
                </span>
                , Beispielweg 12, 10115 Berlin
              </p>
              <p className="mb-2.5 text-[#3A4259]">wird folgender Mietvertrag geschlossen:</p>
              <p className="mb-2.5 text-[#3A4259]">
                <strong>§ 1 Mietgegenstand</strong>
              </p>
              <p className="mb-2.5 text-[#3A4259]">
                Gegenstand sind Räumlichkeiten mit einer Gesamtfläche von{" "}
                <span className="bg-[rgba(194,65,12,0.15)] px-0.5 rounded-sm animate-hl-pulse">
                  868 m²
                </span>{" "}
                im Erdgeschoss.
              </p>
              <p className="mb-2.5 text-[#3A4259]">
                <strong>§ 2 Mietzeit</strong>
              </p>
              <p className="mb-2.5 text-[#3A4259]">
                Der Mietvertrag beginnt am{" "}
                <span className="bg-[rgba(194,65,12,0.15)] px-0.5 rounded-sm animate-hl-pulse">
                  01.11.2023
                </span>{" "}
                und wird bis zum{" "}
                <span className="bg-[rgba(194,65,12,0.15)] px-0.5 rounded-sm animate-hl-pulse">
                  31.10.2033
                </span>{" "}
                fest abgeschlossen.
              </p>
              <p className="mb-2.5 text-[#3A4259]">
                <strong>§ 3 Miete</strong>
              </p>
              <p className="mb-2.5 text-[#3A4259]">
                Die monatliche Nettomiete beträgt{" "}
                <span className="bg-[rgba(194,65,12,0.15)] px-0.5 rounded-sm animate-hl-pulse">
                  EUR 18.500,00
                </span>{" "}
                zzgl. USt.
              </p>
            </div>
          </div>

          <div className="p-6 flex flex-col bg-paper">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-line-2">
              <div>
                <div className="font-heading text-[15px] font-semibold">Extrahierte Felder</div>
                <div className="flex gap-2.5 text-[10.5px] text-ink-4">
                  <span>180+ Felder</span>
                  <span>· unter 60 Sek.</span>
                </div>
              </div>
            </div>

            <div className="text-[9.5px] font-bold uppercase tracking-[1.2px] text-p-blue mb-1.5">
              Parteien
            </div>
            <DemoField label="Mieter" value="Beispiel-Mieter AG" delay="0.1s" />
            <DemoField label="Vermieter" value="Muster-Vermieter GmbH" delay="0.2s" />

            <div className="text-[9.5px] font-bold uppercase tracking-[1.2px] text-p-blue mt-5 mb-1.5 pt-3.5 border-t-2 border-paper-3">
              Vertragsdaten
            </div>
            <DemoField label="Fläche" value="868 m²" mono delay="0.3s" />
            <DemoField label="Beginn" value="01.11.2023" mono delay="0.4s" />
            <DemoField label="Ende Erstlaufzeit" value="31.10.2033" mono delay="0.5s" />
            <DemoField label="Nettomiete" value="18.500,00 €" mono delay="0.6s" />
            <DemoField label="Kündigungsfrist" value="6 Monate" mono delay="0.7s" />
          </div>
        </div>
      </div>
    </div>
  )
}

function DemoField({
  label,
  value,
  mono,
  delay,
}: {
  label: string
  value: string
  mono?: boolean
  delay: string
}) {
  return (
    <div
      className="grid grid-cols-[110px_1fr_auto] items-center py-2.5 border-b border-line-2 text-[12.5px] animate-field-in"
      style={{ animationDelay: delay }}
    >
      <span className="text-[11px] text-ink-4 font-medium">{label}</span>
      <span className={`font-medium text-ink ${mono ? "font-mono text-[11.5px]" : ""}`}>{value}</span>
      <BadgeCheck strokeWidth={2} className="w-4 h-4 text-p-green" />
    </div>
  )
}
