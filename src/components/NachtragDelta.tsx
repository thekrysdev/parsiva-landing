export default function NachtragDelta() {
  return (
    <section id="nachtrag" className="px-8 py-28">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center mb-[72px]">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">Unser Alleinstellungsmerkmal</div>
          <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
            Nachträge, die sich <em className="italic font-normal text-p-blue">selbst prüfen.</em>
          </h2>
          <p className="text-lg text-ink-3 leading-[1.5]">
            Ein Feature, das wir in keinem anderen IDP-System gefunden haben: Änderungsdokumente werden automatisch gegen den Bestand abgeglichen und pro Feld prüfbar dargestellt.
          </p>
        </div>

        <div className="bg-ink text-paper rounded-[20px] p-12 md:p-[72px] relative overflow-hidden">
          <div
            className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(252,165,92,0.15), transparent 70%)" }}
          />
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-16 items-center relative">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(252,165,92,0.15)] text-[#FCA55C] text-xs font-semibold mb-5">
                Unser Alleinstellungsmerkmal
              </span>
              <h3 className="font-heading text-[40px] font-medium leading-[1.05] tracking-[-0.02em] text-paper mb-6">
                Alter Wert.
                <br />
                Neuer Wert.
                <br />
                <em className="italic font-normal text-[#FCA55C]">Ein Klick.</em>
              </h3>
              <p className="text-base text-ink-5 leading-[1.6] mb-4">
                Nachträge, Änderungsvereinbarungen, Anhänge — bei Verträgen, Versicherungspolicen, Rahmenverträgen. Parsiva erkennt automatisch, was sich im Vergleich zum Original geändert hat, und zeigt Ihnen pro Feld: alt, neu, akzeptieren oder ablehnen.
              </p>
              <p className="text-base text-ink-5 leading-[1.6]">
                Kein manueller Abgleich. Keine Excel-Duelle. Kein &quot;Moment, was stand nochmal im Original?&quot;
              </p>
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-4">
                <div className="font-heading text-base font-semibold">Nachtrag Nr. 2 — Beispiel-Dokument</div>
                <span className="inline-flex items-center text-[10.5px] font-semibold bg-[rgba(96,165,250,0.15)] text-[#93C5FD] px-2.5 py-1 rounded-full">
                  3 Änderungen
                </span>
              </div>
              {[
                { field: "Fläche", old: "868 m²", new: "912 m²" },
                { field: "Nettomiete", old: "18.500 €", new: "19.450 €" },
                { field: "Laufzeit bis", old: "31.10.2028", new: "31.10.2033" },
              ].map((row, i) => (
                <div
                  key={row.field}
                  className={`grid grid-cols-[130px_1fr_auto_1fr_auto] items-center gap-3 py-2.5 text-[12.5px] ${
                    i < 2 ? "border-b border-white/5" : ""
                  }`}
                >
                  <div className="font-medium text-ink-5 text-[11.5px]">{row.field}</div>
                  <div className="bg-[rgba(239,68,68,0.15)] text-[#FCA5A5] px-2.5 py-1 rounded-md line-through font-mono text-[11.5px]">
                    {row.old}
                  </div>
                  <div className="text-ink-5 text-xs">→</div>
                  <div className="bg-[rgba(34,197,94,0.15)] text-[#86EFAC] px-2.5 py-1 rounded-md font-mono text-[11.5px] font-semibold">
                    {row.new}
                  </div>
                  <div className="flex gap-1">
                    <button className="w-5.5 h-5.5 rounded border-0 bg-[#22C55E] text-white text-[11px] font-bold flex items-center justify-center">
                      ✓
                    </button>
                    <button className="w-5.5 h-5.5 rounded border border-[#EF4444] bg-transparent text-[#EF4444] text-[11px] font-bold flex items-center justify-center">
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
