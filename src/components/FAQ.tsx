"use client"

import { useState } from "react"

type FaqItem = { q: string; a: string }

const DEFAULT_FAQS: FaqItem[] = [
  {
    q: "Was macht Parsiva konkret?",
    a: "Sie laden ein Dokument hoch — einen Vertrag, eine Rechnung, einen Bescheid. Parsiva liest es aus und gibt Ihnen die Daten strukturiert zurück. Als Excel, CSV, JSON oder direkt per API in Ihr System. Der Unterschied zu klassischem OCR: Wir erkennen nicht nur Text, sondern verstehen die Struktur und liefern genau die Felder, die Sie brauchen.",
  },
  {
    q: "Was passiert mit meinen Dokumenten nach der Verarbeitung?",
    a: "Das entscheiden Sie. Standardmäßig werden Dokumente verschlüsselt in Ihrem privaten Speicher (Frankfurt) aufbewahrt. Auf Wunsch löschen wir sie sofort nach der Extraktion automatisch. Sie haben jederzeit volle Kontrolle.",
  },
  {
    q: "Was kostet Parsiva?",
    a: "Wir arbeiten mit individuellen Preisen, weil jeder Kunde andere Dokumente und Anforderungen hat. Sie bekommen eine einmalige Einrichtungspauschale für Ihren individuellen Agent plus eine nutzungsbasierte Abrechnung pro verarbeitetem Dokument. Keine Mindestlaufzeit, kein Abo. Im kostenlosen Erstgespräch kalkulieren wir Ihnen konkret, was Parsiva für Ihre Dokumentmenge kostet.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "In der Regel 1–3 Wochen vom Erstgespräch bis Go-Live. Wir konfigurieren das System, Sie testen mit echten Dokumenten, wir passen nach. Kein monatelanges Beraterprojekt.",
  },
  {
    q: "Was ist, wenn mein Dokument nicht perfekt extrahiert wird?",
    a: "Wir bauen für jeden Kunden individuell und testen vor dem Go-Live mit echten Dokumenten. In der Testphase sehen Sie jedes Ergebnis, geben Feedback, wir passen an. Erst wenn jedes Feld sitzt, geht Parsiva produktiv. Versprechen wir Ihnen keine 100% Genauigkeit aus dem Nichts — kein seriöser Anbieter kann das. Aber wir versprechen: wir arbeiten so lange mit Ihnen, bis die Ergebnisse verlässlich sind.",
  },
  {
    q: "Welche Dokumenttypen werden unterstützt?",
    a: "Grundsätzlich jeder. Mietverträge, Rechnungen, Lieferscheine, Bescheide, Frachtbriefe, branchenspezifische Formulare. Im Erstgespräch definieren wir gemeinsam, was Sie brauchen.",
  },
  {
    q: "Was unterscheidet Parsiva von anderen OCR-Tools?",
    a: "Wir liefern kein Standard-Template. Jeder Kunde bekommt einen individuellen Agent — exakt auf seine Dokumenttypen, Felder und Prozesse zugeschnitten. Plus die einzigartige Nachtrag-Delta-Funktion, die wir in keinem anderen IDP-System gefunden haben.",
  },
  {
    q: "Kann ich das nicht einfach mit ChatGPT machen?",
    a: "ChatGPT liest PDFs, aber extrahiert keine strukturierten Daten in Ihre Felder. Sie müssten jedes Dokument manuell hochladen, die richtigen Fragen stellen, die Antworten selbst ins System übertragen. Parsiva macht das automatisch: Upload, Extraktion in Ihre Felder, Export. Plus direkter API-Anschluss an Ihr ERP, CRM oder DMS.",
  },
  {
    q: "Kann ich Parsiva in mein bestehendes System integrieren?",
    a: "Ja. Wir bieten eine REST-API, über die Sie extrahierte Daten direkt in Ihr ERP, CRM, DMS oder DATEV übertragen können. Alternativ: manueller Upload, E-Mail-Postfach oder automatischer Watch-Folder.",
  },
]

export default function FAQ({
  faqs = DEFAULT_FAQS,
  eyebrow = "FAQ",
  titleStart = "Offene Fragen,",
  titleEnd = "ehrliche Antworten.",
}: {
  faqs?: FaqItem[]
  eyebrow?: string
  titleStart?: string
  titleEnd?: string
}) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="px-6 md:px-8 py-28 bg-paper-2">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center mb-[72px]">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">{eyebrow}</div>
          <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
            {titleStart}
            <br />
            <em className="italic font-normal text-p-blue">{titleEnd}</em>
          </h2>
        </div>

        <div className="max-w-[780px] mx-auto">
          {faqs.map((item, i) => (
            <div key={i} className="border-b border-line py-6">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center text-left">
                <span className="font-heading text-xl font-medium tracking-[-0.01em]">{item.q}</span>
                <span
                  className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm transition-all shrink-0 ml-4 ${
                    open === i ? "bg-ink text-paper border-ink rotate-45" : "border-line text-ink-4"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className="text-[15px] text-ink-3 leading-[1.65] overflow-hidden transition-all"
                style={{ maxHeight: open === i ? "800px" : "0", marginTop: open === i ? "16px" : "0" }}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
