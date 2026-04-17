"use client"

import { useState } from "react"

const PRESETS = {
  immo:     { docs: 300,  mins: 90,  rate: 35 },
  steuer:   { docs: 2000, mins: 10,  rate: 40 },
  handwerk: { docs: 500,  mins: 15,  rate: 28 },
  logistik: { docs: 3000, mins: 8,   rate: 25 },
  recht:    { docs: 200,  mins: 60,  rate: 70 },
  sonstige: { docs: 500,  mins: 20,  rate: 35 },
}

type PresetKey = keyof typeof PRESETS

const BRANCHE_LABELS: Record<PresetKey, string> = {
  immo: "Immobilien",
  steuer: "Steuerberatung",
  handwerk: "Handwerk",
  logistik: "Logistik",
  recht: "Kanzlei",
  sonstige: "Sonstige",
}

function formatEuro(n: number) {
  return new Intl.NumberFormat("de-DE").format(Math.round(n)) + " €"
}
function formatHours(n: number) {
  return new Intl.NumberFormat("de-DE").format(Math.round(n)) + " h"
}
function getEquivalent(yearly: number): string {
  if (yearly < 2000) return "mehreren Wochen Arbeit pro Jahr"
  if (yearly < 5000) return "einem Monatsgehalt einer Teilzeitkraft"
  if (yearly < 15000) return "einem neuen Dienstwagen alle drei Jahre"
  if (yearly < 35000) return "einer zusätzlichen halben Stelle"
  if (yearly < 70000) return "einer ganzen Vollzeitstelle"
  return "zwei Vollzeitstellen, die Sie nicht einstellen müssen"
}

export default function ROICalculator() {
  const [active, setActive] = useState<PresetKey>("immo")
  const [docs, setDocs] = useState(PRESETS.immo.docs)
  const [mins, setMins] = useState(PRESETS.immo.mins)
  const [rate, setRate] = useState(PRESETS.immo.rate)

  const hoursManual = (docs * mins) / 60
  const costManual = hoursManual * rate
  const hoursParsiva = (docs * 1) / 60
  const costParsiva = hoursParsiva * rate
  const yearlySavings = costManual - costParsiva
  const hoursSaved = hoursManual - hoursParsiva
  const threeYear = yearlySavings * 3

  const selectPreset = (key: PresetKey) => {
    setActive(key)
    setDocs(PRESETS[key].docs)
    setMins(PRESETS[key].mins)
    setRate(PRESETS[key].rate)
  }

  return (
    <section id="rechner" className="px-8 py-28" style={{ background: "linear-gradient(180deg, #FBFAF7 0%, #F5F3EE 100%)" }}>
      <div className="max-w-[1100px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">Kostenrechner</div>
          <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
            Was kostet es Sie,
            <br />
            <em className="italic font-normal text-p-blue">nichts zu ändern?</em>
          </h2>
          <p className="text-lg text-ink-3 leading-[1.5]">Wählen Sie Ihre Branche, passen Sie die Zahlen an — sehen Sie, was Sie gerade jedes Jahr in manuelle Dokumentenverarbeitung stecken.</p>
        </div>

        <div className="bg-paper rounded-[20px] p-12 shadow-[0_20px_60px_-20px_rgba(10,14,26,0.12),0_0_0_1px_#E8E4DA] relative overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-[3px] animate-shimmer"
            style={{ background: "linear-gradient(90deg, #C2410C, #DC2626, #C2410C)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[2px] text-ink-4 mb-5">Ihre Branche</div>
              <div className="flex flex-wrap gap-1.5 mb-8">
                {(Object.keys(PRESETS) as PresetKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => selectPreset(key)}
                    className={`px-3.5 py-2 rounded-full border text-[12.5px] font-medium transition-all ${
                      active === key
                        ? "bg-ink text-paper border-ink"
                        : "bg-paper-2 text-ink-3 border-line hover:border-ink-4 hover:text-ink"
                    }`}
                  >
                    {BRANCHE_LABELS[key]}
                  </button>
                ))}
              </div>

              <InputSlider label="Dokumente pro Jahr" value={docs} display={new Intl.NumberFormat("de-DE").format(docs)} min={50} max={10000} step={50} onChange={setDocs} />
              <InputSlider label="Minuten pro Dokument (manuell)" value={mins} display={`${mins} min`} min={5} max={180} step={5} onChange={setMins} />
              <InputSlider label="Stundensatz Mitarbeiter" value={rate} display={`${rate} €`} min={15} max={120} step={5} onChange={setRate} />
            </div>

            <div className="bg-ink text-paper rounded-2xl p-8 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none animate-glow-pulse"
                style={{ background: "radial-gradient(ellipse at center, rgba(239,68,68,0.15), transparent 70%)" }}
              />

              <div className="text-[11px] uppercase tracking-[2.5px] text-white/50 font-semibold mb-3 relative">Sie verschwenden jedes Jahr</div>

              <div
                className="font-heading font-medium tracking-[-0.03em] leading-none text-[#FCA5A5] relative animate-count-pulse"
                style={{ fontSize: "clamp(48px, 7vw, 88px)", textShadow: "0 0 40px rgba(239,68,68,0.3)" }}
              >
                {formatEuro(yearlySavings)}
              </div>

              <div className="font-heading text-xl text-white/70 italic font-normal mt-2 relative">in manueller Dateneingabe</div>

              <div className="grid grid-cols-2 gap-5 mt-7 pt-6 border-t border-white/10 relative">
                <div className="text-left">
                  <div className="font-heading text-[22px] font-semibold text-paper mb-1">{formatHours(hoursSaved)}</div>
                  <div className="text-[11px] text-white/50 uppercase tracking-wider">Verschwendete Stunden<br />pro Jahr</div>
                </div>
                <div className="text-left">
                  <div className="font-heading text-[22px] font-semibold text-paper mb-1">{formatEuro(threeYear)}</div>
                  <div className="text-[11px] text-white/50 uppercase tracking-wider">Kumuliert<br />in 3 Jahren</div>
                </div>
              </div>

              <div
                className="mt-5 px-5 py-3.5 rounded-[10px] text-[13px] italic relative"
                style={{ background: "rgba(252, 165, 92, 0.12)", color: "#FCA55C" }}
              >
                Das entspricht: <strong className="font-semibold text-[#FFB87A] not-italic">{getEquivalent(yearlySavings)}.</strong>
              </div>

              <div className="mt-7 flex flex-col gap-2.5 relative">
                <a href="#demo" className="bg-paper text-ink px-6 py-3.5 rounded-[10px] font-semibold text-sm hover:bg-white hover:-translate-y-px transition-all text-center">
                  Jetzt exakt kalkulieren — 15 Min Gespräch →
                </a>
                <div className="text-[11.5px] text-white/40">Kostenlos, unverbindlich, ohne Verkaufsdruck</div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-[13px] text-ink-4 italic">
          Die Rechnung nimmt an, dass Parsiva die Verarbeitung auf rund 1 Minute pro Dokument reduziert. Tatsächliche Ersparnisse hängen vom individuellen Dokumententyp ab.
        </p>
      </div>
    </section>
  )
}

function InputSlider({ label, value, display, min, max, step, onChange }: {
  label: string; value: number; display: string; min: number; max: number; step: number; onChange: (n: number) => void
}) {
  return (
    <div className="mb-5">
      <div className="text-[13px] text-ink-3 font-medium mb-2 flex justify-between items-center">
        <label>{label}</label>
        <span className="font-mono text-[13px] text-ink font-semibold">{display}</span>
      </div>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-1.5 rounded-full bg-paper-3 appearance-none outline-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-ink [&::-webkit-slider-thumb]:cursor-pointer
          [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-paper
          [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
      />
    </div>
  )
}
