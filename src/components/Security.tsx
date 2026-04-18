const CARDS = [
  { icon: "🇩🇪", h: "Frankfurt am Main", p: "Alle Daten werden ausschließlich auf Servern in Deutschland verarbeitet und gespeichert. Nichts verlässt die EU." },
  { icon: "🔐", h: "AES-256 verschlüsselt", p: "Ihre Dokumente sind bei der Übertragung und im Ruhezustand nach Industriestandard verschlüsselt." },
  { icon: "📜", h: "AVV nach Art. 28 DSGVO", p: "Wir schließen mit jedem Kunden einen Auftrags\u00ADverarbeitungs\u00ADvertrag. Muster auf Anfrage verfügbar." },
  { icon: "🚫", h: "Kein KI-Training", p: "Ihre Dokumente werden niemals zum Training unserer oder fremder KI-Modelle verwendet." },
]

export default function Security() {
  return (
    <section id="sicherheit" className="px-8 py-28">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center mb-[72px]">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">Sicherheit</div>
          <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
            Datenschutz ist kein Feature.
            <br />
            <em className="italic font-normal text-p-blue">Es ist die Grundlage.</em>
          </h2>
          <p className="text-lg text-ink-3 leading-[1.5]">Sie verarbeiten sensible Dokumente. Wir nehmen das genauso ernst wie Sie.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {CARDS.map((c) => (
            <div key={c.h} className="p-8 px-6 rounded-[20px] bg-paper border border-line-2">
              <div className="w-12 h-12 rounded-xl bg-p-blue-soft flex items-center justify-center text-xl mb-5">
                {c.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{c.h}</h3>
              <p className="text-[13px] text-ink-4 leading-[1.55]">{c.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
