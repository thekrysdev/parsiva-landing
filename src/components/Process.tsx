const STEPS = [
  { num: "01", title: "Erstgespräch", desc: "15 Minuten. Sie zeigen uns 1–2 Ihrer Dokumente, wir definieren gemeinsam die Felder, die Sie brauchen.", meta: "Kostenlos · Unverbindlich" },
  { num: "02", title: "Ihr individueller Agent", desc: "Wir bauen Ihr System — mit Ihren Feldern, Ihren Dokumenttypen, Ihrer Logik. Keine Templates von der Stange.", meta: "2–5 Werktage" },
  { num: "03", title: "Testphase", desc: "Sie laden echte Dokumente hoch, prüfen Ergebnisse, geben Feedback. Wir feintunen, bis jedes Feld sitzt.", meta: "1–2 Wochen" },
  { num: "04", title: "Go-Live", desc: "Parsiva läuft produktiv. Per Upload, API oder automatischem Import. Sie behalten die volle Kontrolle.", meta: "Ab Tag 1" },
]

export default function Process() {
  return (
    <section id="ablauf" className="px-8 py-28">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center mb-[72px]">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">Ablauf</div>
          <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
            In 4 Schritten.
            <br />
            <em className="italic font-normal text-p-blue">Nicht in 4 Monaten.</em>
          </h2>
          <p className="text-lg text-ink-3 leading-[1.5]">Kein Enterprise-Projekt. Ein schlanker Prozess — damit Sie schnell produktiv werden.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-line z-0" />
          {STEPS.map((s) => (
            <div key={s.num} className="relative z-10 text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-paper border border-line rounded-full font-heading text-xl font-semibold text-p-blue mb-5">
                {s.num}
              </div>
              <h3 className="font-heading text-[22px] font-semibold tracking-[-0.01em] mb-2">{s.title}</h3>
              <p className="text-sm text-ink-4 leading-[1.55]">{s.desc}</p>
              <div className="mt-3 pt-3 border-t border-line-2 text-[11px] font-mono text-ink-5">{s.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
