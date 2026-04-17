export default function PricingPhilosophy() {
  return (
    <section id="preismodell" className="px-8 py-28 bg-paper-2">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center mb-[72px]">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">Preismodell</div>
          <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
            Individuell kalkuliert.
            <br />
            <em className="italic font-normal text-p-blue">Ohne Überraschungen.</em>
          </h2>
          <p className="text-lg text-ink-3 leading-[1.5]">
            Wir versprechen keine Pauschalpreise, die wir nicht halten können. Stattdessen kalkulieren wir nach Ihrem tatsächlichen Bedarf.
          </p>
        </div>

        <div className="bg-paper-2 rounded-[20px] p-14 border border-line">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { num: "01", h: "Wir schauen uns Ihre Dokumente an", p: "Wie komplex sind sie? Wie viele Felder brauchen Sie? Welche Sonderfälle gibt es? Das bestimmt den Aufwand." },
              { num: "02", h: "Sie bekommen ein konkretes Angebot", p: "Einmalige Einrichtung für Ihren individuellen Agent plus nutzungsbasierte Abrechnung pro verarbeitetem Dokument. Transparent, schriftlich, verbindlich." },
              { num: "03", h: "Sie entscheiden", p: "Kein Abo. Keine Mindestlaufzeit. Sie zahlen nur das, was Sie tatsächlich verarbeiten. Steigen Sie jederzeit aus." },
            ].map((s) => (
              <div key={s.num} className="text-left">
                <div className="font-heading text-[40px] font-medium text-p-orange leading-none mb-3 tracking-[-0.02em]">{s.num}</div>
                <h3 className="font-heading text-xl font-semibold mb-2 tracking-[-0.01em]">{s.h}</h3>
                <p className="text-sm text-ink-3 leading-[1.55]">{s.p}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#demo" className="inline-flex items-center gap-1.5 font-semibold text-[15px] px-6 py-3.5 rounded-lg bg-ink text-paper hover:bg-p-blue hover:-translate-y-px transition-all">
              Ihr individuelles Angebot anfragen →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
