import { Clock, AlertTriangle, TrendingDown, Users, Zap, CheckCircle2, Scale, GitCompare } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Item = { icon: LucideIcon; label: string; detail: string }

const PAINS: Item[] = [
  { icon: Clock, label: "Stunden pro Dokument", detail: "Mitarbeiter tippen Felder aus 20–30-Seiten-Verträgen ab. Jede Eingabe ein Fehlerrisiko." },
  { icon: AlertTriangle, label: "Tippfehler und Inkonsistenzen", detail: "Zahlendreher, vergessene Nachträge, unterschiedliche Formatierungen. Immer." },
  { icon: TrendingDown, label: "Skaliert nicht mit dem Wachstum", detail: "Mehr Dokumente heißt mehr Überstunden oder Neueinstellungen." },
  { icon: Users, label: "Wissen liegt bei einer Person", detail: "Wenn die erfahrene Kollegin Urlaub hat, liegen die Dokumente wochenlang." },
]

const GAINS: Item[] = [
  { icon: Zap, label: "Unter 60 Sekunden pro Dokument", detail: "Upload, extrahiert, fertig strukturiert. 180+ Felder. Keine Wartezeit, kein Tippen." },
  { icon: CheckCircle2, label: "Einheitliche Qualität", detail: "Jedes Dokument wird nach demselben Schema extrahiert. Keine Inkonsistenzen mehr." },
  { icon: Scale, label: "Skaliert mit Ihrem Volumen", detail: "10 Dokumente oder 10.000 — gleicher Prozess, gleiche Qualität, ohne neue Mitarbeiter." },
  { icon: GitCompare, label: "Nachträge werden automatisch abgeglichen", detail: "Ein Feature, das wir in keinem anderen IDP-System gefunden haben — mehr dazu weiter unten." },
]

export default function PainSplit() {
  return (
    <section id="problem" className="px-8 py-28 bg-cream">
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
          <div className="p-10 rounded-[20px] bg-white border border-line-2 shadow-sm">
            <h3 className="font-heading text-2xl font-semibold mb-6 tracking-[-0.02em] text-ink">Der manuelle Weg</h3>
            {PAINS.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.label} className="py-4 border-b border-line-2 last:border-b-0 last:pb-0">
                  <div className="text-[14px] font-semibold mb-1.5 flex items-center gap-2.5 text-ink">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-p-red-soft text-p-orange border border-p-orange/15 shrink-0">
                      <Icon strokeWidth={1.75} className="w-3.5 h-3.5" />
                    </span>
                    {p.label}
                  </div>
                  <div className="text-sm text-ink-4 pl-[38px] leading-[1.55]">{p.detail}</div>
                </div>
              )
            })}
          </div>

          <div className="flex items-center justify-center text-p-blue/50 font-heading text-5xl italic font-light rotate-90 md:rotate-0 py-4 md:py-0">→</div>

          <div className="p-10 rounded-[20px] bg-ink text-paper relative overflow-hidden">
            <div aria-hidden className="absolute inset-0 bg-grid-ink pointer-events-none opacity-50" />
            <div className="relative">
              <h3 className="font-heading text-2xl font-semibold mb-6 tracking-[-0.02em] text-paper">Parsiva</h3>
              {GAINS.map((g) => {
                const Icon = g.icon
                return (
                  <div key={g.label} className="py-4 border-b border-white/10 last:border-b-0 last:pb-0">
                    <div className="text-[14px] font-semibold mb-1.5 flex items-center gap-2.5 text-paper">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-p-amber/15 text-p-amber border border-p-amber/30 shrink-0">
                        <Icon strokeWidth={1.75} className="w-3.5 h-3.5" />
                      </span>
                      {g.label}
                    </div>
                    <div className="text-sm text-paper/60 pl-[38px] leading-[1.55]">{g.detail}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
