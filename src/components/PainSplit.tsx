export default function PainSplit() {
  const pains = [
    { label: "Stunden pro Dokument", detail: "Mitarbeiter tippen Felder aus 20–30-Seiten-Verträgen ab. Jede Eingabe ein Fehlerrisiko." },
    { label: "Tippfehler und Inkonsistenzen", detail: "Zahlendreher, vergessene Nachträge, unterschiedliche Formatierungen. Immer." },
    { label: "Skaliert nicht mit dem Wachstum", detail: "Mehr Dokumente heißt mehr Überstunden oder Neueinstellungen." },
    { label: "Wissen liegt bei einer Person", detail: "Wenn die erfahrene Kollegin Urlaub hat, liegen die Dokumente wochenlang." },
  ]
  const gains = [
    { label: "Unter 60 Sekunden pro Dokument", detail: "Upload, extrahiert, fertig strukturiert. 180+ Felder. Keine Wartezeit, kein Tippen." },
    { label: "Einheitliche Qualität", detail: "Jedes Dokument wird nach demselben Schema extrahiert. Keine Inkonsistenzen mehr." },
    { label: "Skaliert mit Ihrem Volumen", detail: "10 Dokumente oder 10.000 — gleicher Prozess, gleiche Qualität, ohne neue Mitarbeiter." },
    { label: "Nachträge werden automatisch abgeglichen", detail: "Ein Feature, das wir in keinem anderen IDP-System gefunden haben — mehr dazu weiter unten." },
  ]

  return (
    <section id="problem" className="px-8 py-28">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center mb-[72px]">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">Das Problem</div>
          <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
            Manuell ist <em className="italic font-normal text-p-blue">teuer.</em>
            <br />
            Standard-Tools sind <em className="italic font-normal text-p-blue">zu dumm.</em>
          </h2>
          <p className="text-lg text-ink-3 leading-[1.5]">Die beiden typischen Wege, Dokumente zu verarbeiten — und warum beide nicht funktionieren.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 items-stretch">
          <div className="p-10 rounded-[20px] bg-paper-2 border border-line">
            <h3 className="font-heading text-2xl font-semibold mb-8 tracking-[-0.02em]">Der manuelle Weg</h3>
            {pains.map((p) => (
              <div key={p.label} className="py-4 border-b border-line-2 last:border-b-0 last:pb-0">
                <div className="text-[13px] font-medium mb-1.5 flex items-center gap-2">
                  <span className="text-p-red font-bold">−</span>
                  {p.label}
                </div>
                <div className="text-sm text-ink-4 pl-4 leading-[1.55]">{p.detail}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center text-ink-5 font-heading text-5xl italic font-light rotate-90 md:rotate-0 py-4 md:py-0">→</div>

          <div className="p-10 rounded-[20px] bg-ink text-paper">
            <h3 className="font-heading text-2xl font-semibold mb-8 tracking-[-0.02em] text-paper">Parsiva</h3>
            {gains.map((g) => (
              <div key={g.label} className="py-4 border-b border-white/10 last:border-b-0 last:pb-0">
                <div className="text-[13px] font-medium mb-1.5 flex items-center gap-2 text-paper">
                  <span className="text-[#4ADE80] font-bold">+</span>
                  {g.label}
                </div>
                <div className="text-sm text-ink-5 pl-4 leading-[1.55]">{g.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
