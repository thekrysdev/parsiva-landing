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
      accentColor="#166534"
      hero={{
        headlineStart: "Verträge in Minuten.",
        headlineItalic: "Nicht in Stunden.",
        subline:
          "Parsiva extrahiert Klauseln, Fristen und Vertragsdaten aus Rahmenverträgen, Mandantenverträgen und Rechtsdokumenten — konfiguriert auf die Fragestellungen, die Sie wirklich interessieren.",
        cta: "Demo für Kanzleien vereinbaren →",
      }}
      pains={[
        "Due Diligence bedeutet: 500 Verträge lesen, 20 Klauseln finden.",
        "Mandanten wollen Ergebnisse heute, nicht in zwei Wochen.",
        "Legartis, Legisway — gut, aber viel zu teuer für unsere Kanzleigröße.",
        "Standardklauseln-Prüfung sollte automatisch laufen, nicht jeden Abend.",
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
        <section className="px-6 md:px-8 py-28 bg-paper-2">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[720px] mx-auto text-center">
              <div className="text-xs font-semibold uppercase tracking-[2px] mb-4" style={{ color: "#166534" }}>
                Positionierung
              </div>
              <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
                Legartis und Docusign sind mächtig —
                <br />
                <em className="italic font-normal" style={{ color: "#166534" }}>und teuer.</em>
              </h2>
              <p className="text-lg text-ink-3 leading-[1.55] [hyphens:auto] break-words">
                Große Legal-Tech-Suiten bieten Klausel-Bibliotheken, Risk-Scoring und CLM-Workflows — zu Preisen, die für kleinere und mittlere Kanzleien selten tragfähig sind. Parsiva macht bewusst weniger: nur saubere Extraktion, aber exakt auf Ihre Fragestellungen konfiguriert. Wenn Sie keine vollwertige CLM-Suite brauchen, sondern Vertragsdaten strukturiert in Ihre Akten wollen — dann sind wir die richtige Wahl.
              </p>
            </div>
          </div>
        </section>
      }
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
        title: "Senden Sie uns einen",
        italic: "anonymisierten Vertragstyp.",
        body: "15 Minuten Demo. Wir zeigen live, was Parsiva aus einem Ihrer typischen Rahmen- oder Mandantenverträge extrahiert — mit den Klauseln und Datenpunkten, die für Sie relevant sind.",
        button: "Demo für Kanzleien vereinbaren →",
      }}
    />
  )
}
