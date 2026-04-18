import { MessageSquare, Wrench, FlaskConical, Rocket, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const STEPS: { num: string; title: string; desc: string; meta: string; icon: LucideIcon }[] = [
  { num: "01", title: "Erstgespräch", desc: "15 Minuten. Sie zeigen uns 1–2 Ihrer Dokumente, wir definieren gemeinsam die Felder, die Sie brauchen.", meta: "Kostenlos · Unverbindlich", icon: MessageSquare },
  { num: "02", title: "Ihr individueller Agent", desc: "Wir bauen Ihr System — mit Ihren Feldern, Ihren Dokumenttypen, Ihrer Logik. Keine Templates von der Stange.", meta: "2–5 Werktage", icon: Wrench },
  { num: "03", title: "Testphase", desc: "Sie laden echte Dokumente hoch, prüfen Ergebnisse, geben Feedback. Wir feintunen, bis jedes Feld sitzt.", meta: "1–2 Wochen", icon: FlaskConical },
  { num: "04", title: "Go-Live", desc: "Parsiva läuft produktiv. Per Upload, API oder automatischem Import. Sie behalten die volle Kontrolle.", meta: "Ab Tag 1", icon: Rocket },
]

export default function Process() {
  return (
    <section
      id="ablauf"
      className="px-8 py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F0F4FB 0%, #FBFAF7 45%, #FDF6ED 100%)" }}
    >
      <div aria-hidden className="absolute inset-0 bg-grid-paper pointer-events-none opacity-50" />
      <div className="max-w-[1280px] mx-auto relative">
        <div className="max-w-[720px] mx-auto text-center mb-[72px]">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">Ablauf</div>
          <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
            In 4 Schritten.
            <br />
            <em className="italic font-normal text-p-blue">Nicht in 4 Monaten.</em>
          </h2>
          <p className="text-lg text-ink-3 leading-[1.5]">Kein Enterprise-Projekt. Ein schlanker Prozess — damit Sie schnell produktiv werden.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.num} className="relative flex">
                <div
                  className="group relative flex-1 rounded-2xl p-6 bg-white border border-line-2 shadow-[0_10px_30px_-16px_rgba(10,14,26,0.15)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(30,58,138,0.2)] hover:border-p-blue/30 transition-all animate-fade-in-up"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-[11px] font-mono font-semibold text-p-blue tracking-[2px]">{s.num}</div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-p-blue text-paper shadow-[0_10px_20px_-10px_rgba(30,58,138,0.6)]">
                      <Icon strokeWidth={1.75} className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-heading text-[20px] font-semibold text-ink mb-2 tracking-[-0.01em]">{s.title}</h3>
                  <p className="text-sm text-ink-3 leading-[1.55]">{s.desc}</p>
                  <div className="mt-4 pt-3 border-t border-line-2 text-[11px] font-mono text-ink-5">{s.meta}</div>
                </div>
                {i < STEPS.length - 1 ? (
                  <div className="hidden md:flex items-center justify-center w-4 shrink-0 -ml-2 -mr-2 relative z-10">
                    <ArrowRight strokeWidth={1.75} className="w-5 h-5 text-p-blue/40" />
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
