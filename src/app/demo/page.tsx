import type { Metadata } from "next"
import DemoEmbed from "@/components/DemoEmbed"

export const metadata: Metadata = {
  title: "Demo buchen — Parsiva",
  description:
    "Buchen Sie ein unverbindliches 30-minütiges Erstgespräch. Wir zeigen Ihnen live, wie Parsiva mit Ihren Dokumenten funktioniert.",
}

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-paper px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-4" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
            Parsiva live sehen.
          </h1>
          <p className="text-lg text-ink-3 leading-[1.5] max-w-2xl mx-auto">
            30 Minuten, unverbindlich. Kurze Vorstellung, Live-Demo anhand einer Muster-Extraktion aus Ihrer Branche, Ihre Fragen. Keine Folien, kein Verkaufsdruck.
          </p>
        </header>

        <DemoEmbed />
      </div>
    </main>
  )
}
