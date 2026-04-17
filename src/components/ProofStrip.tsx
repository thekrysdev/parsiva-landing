export default function ProofStrip() {
  const metrics = [
    { num: "180+", label: "Felder pro Vertrag\nautomatisch extrahiert" },
    { num: "< 60s", label: "Verarbeitungszeit\npro Dokument" },
    { num: "150×", label: "schneller als\nmanuelle Eingabe" },
    { num: "100%", label: "individuell konfiguriert\npro Kunde" },
  ]
  return (
    <section className="px-8 py-16 border-y border-line-2 mt-20">
      <div className="max-w-[1280px] mx-auto text-center">
        <div className="text-xs uppercase tracking-[1.8px] text-ink-4 font-medium mb-7">Was Parsiva leistet</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[900px] mx-auto">
          {metrics.map((m) => (
            <div key={m.num} className="text-center">
              <div className="font-heading text-[48px] font-medium tracking-[-0.03em] leading-none text-ink mb-1.5">{m.num}</div>
              <div className="text-[13px] text-ink-4 whitespace-pre-line">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
