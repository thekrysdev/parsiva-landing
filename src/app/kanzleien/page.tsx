import type { Metadata } from "next"
import IndustryPage from "@/components/IndustryPage"

export const metadata: Metadata = {
  title: "Verträge analysieren & Klauseln extrahieren — KI für Kanzleien & Rechtsabteilungen",
  description:
    "Parsiva extrahiert automatisch relevante Klauseln, Fristen und Pflichten aus Verträgen. Für kleine und mittlere Kanzleien. DSGVO-konform, Server in Frankfurt.",
  keywords: [
    "Vertragsanalyse KI",
    "Klauseln extrahieren",
    "Vertragsprüfung Software",
    "Due Diligence Verträge",
    "Mandantenverträge Kanzlei",
    "Kanzlei Dokumentenautomatisierung",
    "Vertragsklauseln Risiko",
  ],
  alternates: { canonical: "https://parsiva.de/kanzleien" },
  openGraph: {
    title: "Verträge analysieren — KI für Kanzleien & Rechtsabteilungen | Parsiva",
    description:
      "Parsiva extrahiert Klauseln, Fristen und Vertragsdaten automatisch — die günstige Alternative für Kanzleien, die nur Extraktion brauchen.",
    url: "https://parsiva.de/kanzleien",
    siteName: "Parsiva",
    locale: "de_DE",
    type: "website",
  },
}

export default function KanzleienPage() {
  return (
    <IndustryPage
      slug="kanzleien"
      eyebrow="Kanzleien & Rechtsabteilungen"
      accentBgColor="#FAF7F4"
      hero={{
        headlineStart: "Verträge in Minuten.",
        headlineItalic: "Nicht in Stunden.",
        subline:
          "Parsiva extrahiert Klauseln, Fristen und Vertragsdaten aus Rahmenverträgen, Mandantenverträgen und Rechtsdokumenten — konfiguriert auf die Fragestellungen, die Sie wirklich interessieren.",
        cta: "Demo für Kanzleien vereinbaren →",
        proofPoints: ["Mandantendaten bleiben in der EU", "Keine CLM-Overhead-Kosten"],
        visualVariant: "kanzleien",
      }}
      benefits={[
        {
          icon: "🔍",
          title: "Klauseln erkennen",
          body: "Kündigungsfristen, Haftung, Gerichtsstand, Gewährleistung — automatisch markiert und strukturiert.",
        },
        {
          icon: "📂",
          title: "Due Diligence schneller",
          body: "500 Verträge screenen in Minuten statt Wochen — mit Ihrem Klauselbaum, Ihren Prüfkriterien.",
        },
        {
          icon: "🛡️",
          title: "Anwaltlich sicher",
          body: "Mandantendaten verlassen nie die EU. Kein KI-Training. Volle Audit-Logs für jede Extraktion.",
        },
      ]}
      pains={[
        {
          icon: "📚",
          title: "500 Verträge, 20 Klauseln",
          body: "Due Diligence bedeutet Stundenlanges Durchforsten. Die relevanten Klauseln sind klar definiert — nur niemand hat Zeit, sie zu suchen.",
        },
        {
          icon: "⏰",
          title: "Mandanten wollen heute",
          body: "Vertragsprüfung in zwei Wochen? Nicht mehr zeitgemäß. Mandanten erwarten heute Antworten, nicht nächste Woche.",
        },
        {
          icon: "💰",
          title: "Legal-Tech ist zu teuer",
          body: "Legartis, Legisway, Docusign CLM — mächtig und gut. Aber die Lizenzkosten sind für kleinere Kanzleien selten tragfähig.",
        },
        {
          icon: "🔁",
          title: "Standardprüfungen manuell",
          body: "Gleiche Klauseln, gleiche Fragen, jedes Mal neu durchgegangen. Das sollte automatisch laufen, nicht jeden Abend.",
        },
      ]}
      documentTypes={[
        {
          name: "Verträge",
          fields: ["Parteien", "Laufzeit", "Klauseln", "Kündigung", "Gerichtsstand", "Haftung"],
        },
        {
          name: "Vollmachten",
          fields: ["Vollmachtgeber", "Bevollmächtigter", "Umfang", "Gültigkeit", "Unterschrift"],
        },
        {
          name: "Schriftsätze",
          fields: ["Parteien", "Aktenzeichen", "Anträge", "Wesentliche Argumente", "Fristen"],
        },
        {
          name: "Urteile & Beschlüsse",
          fields: ["Gericht", "Aktenzeichen", "Tenor", "Wesentliche Gründe", "Rechtsmittel"],
        },
      ]}
      usp={
        <section className="px-6 md:px-8 py-24">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[720px] mx-auto text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">Klausel-Highlighting</div>
              <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                Relevante Klauseln auf einen Blick — <em className="italic font-normal text-p-blue">mit Risiko-Einordnung.</em>
              </h2>
              <p className="text-lg text-ink-3 leading-[1.5]">
                Parsiva markiert die Klauseln, die für Sie kritisch sind, und liefert eine strukturierte Zusammenfassung — inkl. grober Risikoeinordnung auf Basis Ihrer Prüfkriterien.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6 max-w-[1000px] mx-auto">
              <div className="bg-paper rounded-2xl border border-line shadow-[0_20px_50px_-20px_rgba(10,14,26,0.15)] overflow-hidden">
                <div className="h-9 bg-ink flex items-center px-4">
                  <div className="text-[11px] font-mono text-paper/70">Rahmenvertrag_2024.pdf</div>
                </div>
                <div className="p-6 space-y-2.5 text-[12px] leading-[1.8] font-serif">
                  <div className="h-2 bg-line rounded w-3/4" />
                  <div className="h-2 bg-line rounded w-full" />
                  <div className="inline-block px-2 py-1 rounded bg-p-red/15 text-p-red font-semibold text-[11px]">
                    § 8 Haftung — unbegrenzt bei Vorsatz
                  </div>
                  <div className="h-2 bg-line rounded w-full" />
                  <div className="inline-block px-2 py-1 rounded bg-[#EAB308]/20 text-[#854D0E] font-semibold text-[11px]">
                    § 12 Kündigungsfrist — 6 Monate zum Quartalsende
                  </div>
                  <div className="h-2 bg-line rounded w-5/6" />
                  <div className="inline-block px-2 py-1 rounded bg-p-blue/15 text-p-blue font-semibold text-[11px]">
                    § 19 Gerichtsstand — München
                  </div>
                  <div className="h-2 bg-line rounded w-full" />
                  <div className="h-2 bg-line rounded w-2/3" />
                </div>
              </div>
              <div className="bg-ink text-paper rounded-2xl p-6">
                <div className="text-[10px] uppercase tracking-[1.5px] text-ink-5 font-semibold mb-4">Extracted Clauses</div>
                <div className="space-y-3 text-[13px]">
                  <div className="pb-3 border-b border-white/10">
                    <div className="text-[10px] uppercase tracking-wider text-ink-5 mb-1">Risikoscore</div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#EAB308] font-heading text-xl font-semibold">Mittel</span>
                      <span className="text-ink-5 text-xs">· 3 Punkte</span>
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-ink-5 font-mono text-[11px]">Haftung</span>
                    <span className="text-p-red font-mono text-[11px] text-right">unbegrenzt</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-ink-5 font-mono text-[11px]">Kündigung</span>
                    <span className="text-[#FBBF24] font-mono text-[11px] text-right">6 Mon / Quartal</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-ink-5 font-mono text-[11px]">Gerichtsstand</span>
                    <span className="text-[#93C5FD] font-mono text-[11px] text-right">München</span>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-ink-5 font-mono text-[11px]">Laufzeit</span>
                    <span className="text-[#86EFAC] font-mono text-[11px] text-right">36 Monate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      processSteps={[
        { title: "Vertrag hochladen", body: "PDF, Scan oder Word — Parsiva akzeptiert alle üblichen Formate." },
        { title: "Klauseln erkennen", body: "Auf Basis Ihres Klauselbaums werden relevante Abschnitte automatisch markiert." },
        { title: "Zusammenfassung", body: "Strukturierte Übersicht mit groben Risiko-Hinweisen und extrahierten Datenpunkten." },
        { title: "Export ins Kanzleisystem", body: "JSON, CSV, DMS-API oder direkt in Ihre Mandantenakte." },
      ]}
      faqs={[
        {
          q: "Wie sicher sind Mandantendaten bei Parsiva (anwaltliches Berufsgeheimnis)?",
          a: "Server stehen ausschließlich in Frankfurt, Verschlüsselung bei Übertragung und Ruhe (AES-256), AVV nach Art. 28 DSGVO. Ihre Daten verlassen nie die EU und werden nie zum KI-Training verwendet — weder unserer Modelle noch fremder. Die Vertraulichkeitsanforderungen des anwaltlichen Berufsgeheimnisses sind durch vertragliche und technische Maßnahmen abgesichert.",
        },
        {
          q: "Welche Vertragsarten werden unterstützt?",
          a: "Grundsätzlich alle. Typische Konfigurationen umfassen Rahmenverträge, Dienstleistungsverträge, Arbeitsverträge, Kaufverträge, NDAs, Mietverträge, Lizenzverträge. Für jede Vertragsart konfigurieren wir die relevanten Klauseln und Datenpunkte individuell — basierend auf den Fragen, die Ihre Kanzlei tatsächlich stellt.",
        },
        {
          q: "Können wir Parsiva auf unsere eigenen Klauselbibliotheken trainieren?",
          a: "Wir konfigurieren Parsiva auf Ihre typischen Klauselmuster — das heißt: Sie zeigen uns Beispiele, wir bauen die Erkennungslogik. Es handelt sich nicht um klassisches ML-Training im Sinne eines eigenen Modells, sondern um konfigurierte Extraktionsregeln, die auf Ihre Formulierungen zugeschnitten sind. Ihre Musterverträge bleiben Ihre, werden nicht Teil eines Modells.",
        },
        {
          q: "Wie ist das im Vergleich zu Legartis oder Docusign CLM?",
          a: "Legartis und Docusign CLM sind umfassende Suiten mit Risk-Scoring, Playbooks, CLM-Workflows — entsprechend teurer. Parsiva ist fokussierter: saubere Extraktion, konfiguriert auf Ihre Fragen, ohne CLM-Overhead. Wenn Sie eine Plattform brauchen, die den gesamten Vertragslebenszyklus abbildet, ist Legartis/Docusign die richtige Wahl. Wenn Sie 'nur' Vertragsdaten strukturiert extrahieren wollen — Parsiva.",
        },
        {
          q: "Wird ChatGPT intern genutzt?",
          a: "Nein. Parsiva läuft auf europäisch gehosteten Modellen, keine Daten verlassen die EU. Es gibt keinen Datenfluss zu OpenAI, Anthropic, Google oder anderen US-Anbietern.",
        },
      ]}
      cta={{
        proofPoint: "Mandantendaten bleiben in der EU. Kein KI-Training. Anwaltlich sicher.",
        title: "Senden Sie uns einen",
        italic: "anonymisierten Vertragstyp.",
        body: "15 Minuten Demo. Wir zeigen live, was Parsiva aus einem Ihrer typischen Rahmen- oder Mandantenverträge extrahiert — mit den Klauseln und Datenpunkten, die für Sie relevant sind.",
        button: "Demo für Kanzleien vereinbaren →",
      }}
    />
  )
}
