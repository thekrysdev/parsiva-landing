import type { Metadata } from "next"
import IndustryPage from "@/components/IndustryPage"

export const metadata: Metadata = {
  title: "Frachtbriefe & CMR automatisch auslesen — KI-Dokumentenextraktion für Spedition & Logistik",
  description:
    "Parsiva extrahiert automatisch Daten aus CMR-Frachtbriefen, Transportaufträgen und Zolldokumenten. Bereit für die EU-eFTI-Verordnung 2029. DSGVO-konform.",
  keywords: [
    "Frachtbrief digitalisieren",
    "CMR auslesen",
    "Frachtbrief OCR",
    "Transportauftrag automatisch",
    "eFTI Vorbereitung",
    "eCMR",
    "Zolldokumente extrahieren",
  ],
  alternates: { canonical: "https://parsiva.de/logistik" },
  openGraph: {
    title: "Frachtbriefe & CMR automatisch auslesen — KI für Logistik | Parsiva",
    description:
      "Parsiva extrahiert CMR, Transportaufträge und Zolldokumente automatisch. Vorbereitet auf eFTI 2029.",
    url: "https://parsiva.de/logistik",
    siteName: "Parsiva",
    locale: "de_DE",
    type: "website",
  },
}

export default function LogistikPage() {
  return (
    <IndustryPage
      slug="logistik"
      eyebrow="Logistik & Transport"
      accentColor="#475569"
      hero={{
        headlineStart: "Vom Papier ins TMS.",
        headlineItalic: "In Sekunden.",
        subline:
          "CMR-Frachtbriefe, Transportaufträge, Lieferscheine, Zolldokumente — Parsiva extrahiert alle Felder automatisch und liefert sie in Ihr Transport Management System. Vorbereitet auf eFTI 2029.",
        cta: "Demo für Speditionen vereinbaren →",
      }}
      pains={[
        "Jeder CMR wird dreimal getippt: beim Versender, beim Frachtführer, beim Empfänger.",
        "Papier-Frachtbriefe gehen auf Touren verloren — Reklamationen werden teuer.",
        "Zolldokumente mit 30 Feldern, jedes muss stimmen.",
        "Ab 2029 eFTI-Pflicht — und unser System ist nicht bereit.",
      ]}
      documentTypes={[
        {
          name: "CMR-Frachtbriefe",
          fields: ["Versender", "Empfänger", "Warenart", "Gewicht", "Zollwert", "Unterschriften", "Datum"],
        },
        {
          name: "Transportaufträge",
          fields: ["Auftraggeber", "Abholung", "Zustellung", "Konditionen", "Zeitfenster", "Frachtpreis"],
        },
        {
          name: "Lieferscheine",
          fields: ["Absender", "Empfänger", "Positionen", "Verpackung", "Stückzahl"],
        },
        {
          name: "Zolldokumente",
          fields: ["Zolltarifnummer", "Warenwert", "Ursprungsland", "Incoterms", "EORI-Nummer"],
        },
      ]}
      usp={
        <section className="px-6 md:px-8 py-28 bg-paper-2">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[720px] mx-auto text-center">
              <div className="text-xs font-semibold uppercase tracking-[2px] mb-4" style={{ color: "#475569" }}>
                Positionierung
              </div>
              <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
                Parsiva ist kein TMS.
                <br />
                <em className="italic font-normal" style={{ color: "#475569" }}>Parsiva ist die Extraktions-Schicht davor.</em>
              </h2>
              <p className="text-lg text-ink-3 leading-[1.55] [hyphens:auto] break-words">
                Sie haben bereits ein Transport Management System — Winsped, TransIT, SoloPlan, oder eine Individuallösung. Parsiva ersetzt es nicht, sondern liefert die strukturierten Daten aus Papier- und PDF-Dokumenten direkt hinein. Vorbereitet auf die EU-eFTI-Verordnung ab 2029: Wer heute Extraktion automatisiert, ist morgen bereit für elektronische Frachtpapiere als Regelfall.
              </p>
            </div>
          </div>
        </section>
      }
      faqs={[
        {
          q: "Funktioniert Parsiva mit unserem TMS (Winsped, TransIT, SoloPlan etc.)?",
          a: "Die Anbindung erfolgt über REST-API oder Import-Schnittstellen. Die meisten TMS-Systeme bieten Import per CSV/JSON oder APIs für Auftragsdaten. Im Erstgespräch schauen wir uns Ihre konkrete Systemlandschaft an und klären, wie der Datenfluss am saubersten aussieht.",
        },
        {
          q: "Ist Parsiva bereits eFTI-konform vorbereitet?",
          a: "Parsiva extrahiert Frachtpapiere in strukturierte Datenformate (JSON, XML), die sich direkt auf das eFTI-Datenmodell mappen lassen. Die eFTI-Verordnung wird ab 2029 elektronische Frachtpapiere als Regelfall etablieren — wer heute Extraktion automatisiert, reduziert die Umstellungsaufwände erheblich. Die konkrete eFTI-Plattform-Integration passen wir an, sobald die technischen Spezifikationen final sind.",
        },
        {
          q: "Wie werden mehrsprachige Frachtbriefe behandelt (DE/EN/FR/PL)?",
          a: "Parsiva erkennt die wesentlichen CMR-Felder unabhängig von der Sprache — die CMR-Formulare folgen einem international standardisierten Layout. Freitextfelder werden in der Originalsprache extrahiert. Auf Wunsch konfigurieren wir zusätzliche Übersetzung oder Feldzuordnung nach Sprache.",
        },
        {
          q: "Können wir Scan-Apps auf dem Smartphone der Fahrer nutzen?",
          a: "Ja. Parsiva akzeptiert Smartphone-Fotos (JPG, HEIC, PDF) — auch unter Baustellen- oder LKW-Bedingungen. Wir integrieren uns mit Scan-Apps, die Ihre Fahrer bereits nutzen, oder liefern per API einen Endpoint, an den direkt fotografierte Dokumente gesendet werden.",
        },
        {
          q: "Was kostet die Integration in unser bestehendes System?",
          a: "Die Einrichtung umfasst: Dokumentanalyse Ihrer typischen Frachtbrief-Formate, Konfiguration der Feldextraktion, Aufbau der Schnittstelle zu Ihrem TMS. Je nach Komplexität 1–3 Wochen. Die konkreten Kosten berechnen wir auf Basis Ihres Dokumentenvolumens und der Integrationsanforderungen — transparent und verbindlich im Angebot.",
        },
      ]}
      cta={{
        title: "Laden Sie",
        italic: "einen typischen CMR hoch.",
        body: "15 Minuten Demo. Wir zeigen live, was Parsiva aus Ihren CMR-Frachtbriefen, Transportaufträgen oder Zolldokumenten extrahiert — direkt im Format, das Ihr TMS versteht.",
        button: "Demo für Speditionen vereinbaren →",
      }}
    />
  )
}
