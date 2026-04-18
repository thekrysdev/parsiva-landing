import DemoWindow from "@/components/DemoWindow"
import DemoButton from "@/components/DemoButton"

export default function Hero() {
  return (
    <section className="pt-36 pb-20 px-8 relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(30, 58, 138, 0.04), transparent 60%)",
        }}
      />

      <div className="max-w-[1280px] mx-auto relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper-2 border border-line text-xs font-medium text-ink-3 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-p-green animate-pulse-soft" />
          Server in Frankfurt · DSGVO-konform · Kein KI-Training mit Ihren Daten
        </div>

        <h1
          className="font-heading font-medium leading-[0.98] tracking-[-0.03em] max-w-[900px] mb-6 text-ink"
          style={{ fontSize: "clamp(44px, 6.5vw, 84px)", fontVariationSettings: '"opsz" 96' }}
        >
          Ihre Dokumente lesen sich <em className="italic font-normal text-p-blue">selbst</em>.
        </h1>

        <p className="text-xl text-ink-3 leading-[1.5] max-w-[620px] mb-10 font-normal">
          Verträge, Rechnungen, Bescheide, Angebote — <strong className="text-ink font-semibold">Parsiva extrahiert automatisch alle Felder, die Sie brauchen</strong>. Maßgeschneidert auf Ihr Unternehmen, in unter 60 Sekunden pro Dokument. Keine Templates. Keine Kompromisse.
        </p>

        <div className="flex gap-3 items-center mb-12 flex-wrap">
          <DemoButton variant="primary">
            Kostenlose Demo vereinbaren →
          </DemoButton>
          <a href="#rechner" className="inline-flex items-center gap-1.5 font-semibold text-[15px] px-6 py-3.5 rounded-lg bg-transparent text-ink-3 border border-line hover:border-ink-3 hover:text-ink transition-all">
            Was kostet es mich, nichts zu ändern?
          </a>
        </div>

        <div className="flex gap-6 flex-wrap text-[13px] text-ink-4 mb-6">
          <span>Setup in wenigen Tagen</span>
          <span className="flex items-center gap-1.5 before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-ink-5">Pay-per-Document</span>
          <span className="flex items-center gap-1.5 before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-ink-5">Kein Abo</span>
        </div>

        <p className="text-[13px] italic text-ink-4 max-w-[640px] leading-[1.55] [hyphens:auto] break-words">
          Validiert an komplexen Gewerbemietverträgen — 4 IDP-Anbieter schlugen fehl, Parsiva lieferte.
        </p>
      </div>

      <DemoWindow />
    </section>
  )
}
