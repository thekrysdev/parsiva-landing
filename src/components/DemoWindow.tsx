export default function DemoWindow() {
  return (
    <div className="max-w-[1280px] mx-auto mt-20 relative">
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
              <span className="font-mono">📄 Beispiel-Dokument.pdf</span>
              <span className="font-mono text-[10px]">Seite 1 / 26</span>
            </div>
            <div className="flex-1 bg-white rounded px-8 py-7 text-[9.5px] leading-[1.6] text-[#1C2333] shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
              <div className="font-bold text-xs mb-3 text-center">GEWERBEMIETVERTRAG (Muster)</div>
              <p className="mb-2.5 text-[#3A4259]">Zwischen <span className="bg-[rgba(194,65,12,0.15)] px-0.5 rounded-sm animate-hl-pulse">Muster-Vermieter GmbH</span>, vertreten durch den Geschäftsführer, Musterstraße 1, 60311 Frankfurt am Main</p>
              <p className="mb-2.5 text-[#3A4259]">und <span className="bg-[rgba(194,65,12,0.15)] px-0.5 rounded-sm animate-hl-pulse">Beispiel-Mieter AG</span>, Beispielweg 12, 10115 Berlin</p>
              <p className="mb-2.5 text-[#3A4259]">wird folgender Mietvertrag geschlossen:</p>
              <p className="mb-2.5 text-[#3A4259]"><strong>§ 1 Mietgegenstand</strong></p>
              <p className="mb-2.5 text-[#3A4259]">Gegenstand sind Räumlichkeiten mit einer Gesamtfläche von <span className="bg-[rgba(194,65,12,0.15)] px-0.5 rounded-sm animate-hl-pulse">868 m²</span> im Erdgeschoss.</p>
              <p className="mb-2.5 text-[#3A4259]"><strong>§ 2 Mietzeit</strong></p>
              <p className="mb-2.5 text-[#3A4259]">Der Mietvertrag beginnt am <span className="bg-[rgba(194,65,12,0.15)] px-0.5 rounded-sm animate-hl-pulse">01.11.2023</span> und wird bis zum <span className="bg-[rgba(194,65,12,0.15)] px-0.5 rounded-sm animate-hl-pulse">31.10.2033</span> fest abgeschlossen.</p>
              <p className="mb-2.5 text-[#3A4259]"><strong>§ 3 Miete</strong></p>
              <p className="mb-2.5 text-[#3A4259]">Die monatliche Nettomiete beträgt <span className="bg-[rgba(194,65,12,0.15)] px-0.5 rounded-sm animate-hl-pulse">EUR 18.500,00</span> zzgl. USt.</p>
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

            <div className="text-[9.5px] font-bold uppercase tracking-[1.2px] text-p-blue mb-1.5">Parteien</div>
            <DemoField label="Mieter" value="Beispiel-Mieter AG" delay="0.1s" />
            <DemoField label="Vermieter" value="Muster-Vermieter GmbH" delay="0.2s" />

            <div className="text-[9.5px] font-bold uppercase tracking-[1.2px] text-p-blue mt-5 mb-1.5 pt-3.5 border-t-2 border-paper-3">Vertragsdaten</div>
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

function DemoField({ label, value, mono, delay }: { label: string; value: string; mono?: boolean; delay: string }) {
  return (
    <div
      className="grid grid-cols-[110px_1fr_auto] items-center py-2.5 border-b border-line-2 text-[12.5px] animate-field-in"
      style={{ animationDelay: delay }}
    >
      <span className="text-[11px] text-ink-4 font-medium">{label}</span>
      <span className={`font-medium text-ink ${mono ? "font-mono text-[11.5px]" : ""}`}>{value}</span>
      <span className="text-p-green font-semibold text-sm">✓</span>
    </div>
  )
}
