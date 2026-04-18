export default function NachtragDelta() {
  return (
    <section id="nachtrag" className="px-6 md:px-8 py-28">
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

        <div className="bg-ink text-paper rounded-[20px] p-6 sm:p-12 md:p-[72px] relative overflow-hidden">
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

            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 sm:p-6 overflow-hidden">
              <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-4 gap-2">
                <span className="inline-flex items-center shrink-0 text-[10.5px] font-semibold bg-p-blue/30 text-[#93C5FD] px-2.5 py-1 rounded-full">
                  Nachtrag Nr. 2
                </span>
                <div className="font-heading text-sm sm:text-base font-semibold truncate">Beispiel-Dokument</div>
                <span className="inline-flex items-center shrink-0 text-[10.5px] font-semibold bg-[rgba(252,165,92,0.15)] text-[#FCA55C] px-2.5 py-1 rounded-full">
                  5 Felder
                </span>
              </div>
              {[
                { field: "Fläche", old: "868 m²", new: "912 m²", status: "accepted" as const },
                { field: "Nettomiete", old: "18.500 €", new: "19.450 €", status: "accepted" as const },
                { field: "Laufzeit bis", old: "31.10.2028", new: "31.10.2033", status: "pending" as const },
                { field: "Kautionshöhe", old: "55.500 €", new: "58.350 €", status: "pending" as const },
                { field: "Nebenkostenvz.", old: "1.800 €", new: "2.200 €", status: "rejected" as const },
              ].map((row, i, arr) => (
                <div
                  key={row.field}
                  className={`flex flex-col sm:grid sm:grid-cols-[130px_1fr_auto_1fr_auto] items-start sm:items-center gap-1.5 sm:gap-3 py-2.5 text-[12.5px] ${
                    i < arr.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <div className="font-medium text-ink-5 text-[11.5px]">{row.field}</div>
                  <div className="flex items-center gap-2 w-full sm:contents">
                    <div className="bg-[rgba(239,68,68,0.15)] text-[#FCA5A5] px-2.5 py-1 rounded-md line-through font-mono text-[11.5px] whitespace-nowrap">
                      {row.old}
                    </div>
                    <div className="text-ink-5 text-xs">→</div>
                    <div
                      className={`px-2.5 py-1 rounded-md font-mono text-[11.5px] font-semibold whitespace-nowrap ${
                        row.status === "rejected"
                          ? "bg-[rgba(107,116,137,0.2)] text-ink-5 line-through"
                          : "bg-[rgba(34,197,94,0.15)] text-[#86EFAC]"
                      }`}
                    >
                      {row.new}
                    </div>
                    <div className="flex gap-1 ml-auto sm:ml-0 shrink-0">
                      {row.status === "accepted" && (
                        <span className="w-6 h-6 rounded bg-[#22C55E] text-white text-[11px] font-bold flex items-center justify-center">✓</span>
                      )}
                      {row.status === "rejected" && (
                        <span className="w-6 h-6 rounded bg-[#EF4444] text-white text-[11px] font-bold flex items-center justify-center">✕</span>
                      )}
                      {row.status === "pending" && (
                        <>
                          <button className="w-6 h-6 rounded border-0 bg-[#22C55E] text-white text-[11px] font-bold flex items-center justify-center hover:bg-[#16A34A] transition-colors">
                            ✓
                          </button>
                          <button className="w-6 h-6 rounded border border-[#EF4444] bg-transparent text-[#EF4444] text-[11px] font-bold flex items-center justify-center hover:bg-[#EF4444]/10 transition-colors">
                            ✕
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-white/5 text-[11px] text-ink-5 italic leading-[1.55]">
                So sieht Parsiva Nachträge. Pro Feld: akzeptieren oder ablehnen per Klick.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
