export default function FinalCTA() {
  return (
    <section id="demo" className="pt-20 pb-0">
      <div
        className="max-w-[1216px] mx-8 lg:mx-auto bg-ink text-paper rounded-[20px] px-12 py-24 text-center relative overflow-hidden mb-20"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(30,58,138,0.3), transparent 60%)" }}
        />
        <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-paper mb-4 relative" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
          Sehen Sie Parsiva <em className="italic font-normal text-[#FCA55C]">mit Ihren Dokumenten.</em>
        </h2>
        <p className="text-lg text-ink-5 max-w-[540px] mx-auto mb-10 relative">
          15 Minuten. Kostenlos. Unverbindlich. Wir zeigen Ihnen live, wie Parsiva ein Dokument aus Ihrem Alltag extrahiert — Sie sehen sofort, ob es für Sie funktioniert.
        </p>
        <div className="inline-flex gap-3 flex-wrap justify-center relative">
          <a href="mailto:info@parsiva.de?subject=Demo-Anfrage%20Parsiva&body=Guten%20Tag%2C%0A%0Aich%20interessiere%20mich%20f%C3%BCr%20eine%20Parsiva-Demo.%0A%0AMein%20Anwendungsfall%3A%20%0A%0ABeste%20Gr%C3%BC%C3%9Fe" className="inline-flex items-center gap-1.5 font-semibold text-[15px] px-6 py-3.5 rounded-lg bg-paper text-ink hover:bg-white transition-all">
            Demo vereinbaren →
          </a>
          <a href="mailto:info@parsiva.de" className="inline-flex items-center gap-1.5 font-semibold text-[15px] px-6 py-3.5 rounded-lg bg-transparent text-ink-5 border border-white/15 hover:text-paper hover:border-white/30 transition-all">
            Direkt schreiben
          </a>
        </div>
      </div>
    </section>
  )
}
