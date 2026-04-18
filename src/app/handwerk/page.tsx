import type { Metadata } from "next"
import IndustryPage from "@/components/IndustryPage"

export const metadata: Metadata = {
  title: "Lieferscheine & Angebote digitalisieren — KI-Dokumentenextraktion für Handwerksbetriebe",
  description:
    "Parsiva extrahiert automatisch Felder aus Angeboten, Lieferscheinen und Eingangsrechnungen im Handwerk. Direkte Integration ins ERP. Konfiguriert für Ihren Betrieb.",
  keywords: [
    "Lieferschein digitalisieren",
    "Angebote Handwerk auslesen",
    "Eingangsrechnung Handwerk OCR",
    "Handwerk Papierkram digitalisieren",
    "Bauvertrag automatisch erfassen",
    "Lieferschein OCR Handwerk",
    "Eingangsrechnungen ERP Handwerker",
  ],
  alternates: { canonical: "https://parsiva.de/handwerk" },
  openGraph: {
    title: "Lieferscheine & Angebote digitalisieren — KI für Handwerksbetriebe | Parsiva",
    description:
      "Parsiva extrahiert Angebote, Lieferscheine und Eingangsrechnungen automatisch ins ERP. Für Handwerksbetriebe, die kein SAP brauchen.",
    url: "https://parsiva.de/handwerk",
    siteName: "Parsiva",
    locale: "de_DE",
    type: "website",
  },
}

export default function HandwerkPage() {
  return (
    <IndustryPage
      slug="handwerk"
      eyebrow="Handwerk & Technik"
      accentColor="#B45309"
      hero={{
        headlineStart: "Weniger Papier.",
        headlineItalic: "Mehr Werkstatt.",
        subline:
          "Angebote, Lieferscheine, Eingangsrechnungen — Parsiva extrahiert alle Daten automatisch und liefert sie direkt in Ihr ERP oder Warenwirtschaftssystem. Für Handwerksbetriebe, die sich kein SAP leisten und kein SAP brauchen.",
        cta: "Demo für Handwerksbetriebe vereinbaren →",
      }}
      pains={[
        "Jeder Lieferschein wird zweimal angefasst: einmal vom Fahrer, einmal vom Büro.",
        "Eingangsrechnungen vom Großhandel kommen in 10 verschiedenen Formaten.",
        "Auf der Baustelle fotografiert, im Büro abgetippt — Tage verloren.",
        "Das ERP ist da. Aber die Dokumente landen per Hand drin.",
      ]}
      documentTypes={[
        {
          name: "Angebote",
          fields: ["Positionen", "Mengen", "Preise", "Kunde", "Gültigkeit", "Zahlungsbedingungen"],
        },
        {
          name: "Lieferscheine",
          fields: ["Lieferant", "Position", "Menge", "Bestellnummer", "Chargen", "Datum"],
        },
        {
          name: "Eingangsrechnungen",
          fields: ["Rechnungsnummer", "Positionen", "Steuer", "Zahlungsziel", "Skonto", "IBAN"],
        },
        {
          name: "Bauverträge",
          fields: ["Gewerk", "Leistungsumfang", "Vertragssumme", "Zahlungsplan", "Gewährleistung"],
        },
      ]}
      usp={
        <section className="px-6 md:px-8 py-28 bg-paper-2">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[720px] mx-auto text-center">
              <div className="text-xs font-semibold uppercase tracking-[2px] mb-4" style={{ color: "#B45309" }}>
                Für Ihren Betrieb maßgeschneidert
              </div>
              <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
                Keine Standardvorlage.
                <br />
                <em className="italic font-normal" style={{ color: "#B45309" }}>Ihre Lieferanten. Ihre Formulare.</em>
              </h2>
              <p className="text-lg text-ink-3 leading-[1.55] [hyphens:auto] break-words">
                Handwerksbetriebe arbeiten mit einer bunten Mischung aus Großhandels-Formularen, regionalen Lieferanten und eigenen Angebotsvorlagen. Genau dafür ist Parsiva gebaut: Wir konfigurieren das System auf Ihre konkreten Dokumente, nicht auf einen Industriestandard. Damit die Daten sauber ins ERP oder die Warenwirtschaft landen — ohne Umwege.
              </p>
            </div>
          </div>
        </section>
      }
      faqs={[
        {
          q: "Arbeitet Parsiva mit unserer Handwerker-Software (KWP, MOS'aik, HAPAK etc.)?",
          a: "Die Integration läuft über REST-API oder Import-Schnittstellen. Die meisten Handwerker-Systeme bieten CSV- oder JSON-Import. Im Erstgespräch schauen wir uns Ihre konkrete Software an und klären, wie der Datenfluss am saubersten aussieht — direkter API-Anschluss wo möglich, Import-Datei wo nicht.",
        },
        {
          q: "Werden auch Fotos vom Smartphone erkannt (Baustellen-Fotos)?",
          a: "Ja. Parsiva verarbeitet PDF, JPG, PNG, HEIC — auch schief fotografiert, unter wechselnden Lichtverhältnissen. Wichtig ist nur, dass der Text lesbar ist. Für besonders schlechte Qualität zeigen wir Ihnen in der Testphase offen, wo die Grenzen liegen.",
        },
        {
          q: "Wie läuft die Integration ins ERP technisch ab?",
          a: "Drei Varianten: 1) Direkt per REST-API — Ihr ERP fragt Parsiva ab und bekommt strukturierte JSON-Daten zurück. 2) Watch-Folder — Dokumente in einen Ordner legen, Parsiva extrahiert und legt die Ergebnisse ab. 3) E-Mail-Postfach — Rechnungen an eine dedizierte Adresse senden, die Daten landen strukturiert in Ihrem System.",
        },
        {
          q: "Was ist mit handgeschriebenen Lieferscheinen?",
          a: "Druck funktioniert sehr gut. Saubere Handschrift meist auch. Kritzelige Handschrift ist für keine KI zuverlässig — da sind wir ehrlich. In der Testphase sehen Sie, welche Ihrer Lieferanten-Formate gut laufen und wo Sie weiter manuell nacharbeiten müssen.",
        },
        {
          q: "Funktioniert das auch mit ZUGFeRD-Rechnungen?",
          a: "Ja. ZUGFeRD ist PDF mit eingebettetem XML — wir können beides verarbeiten. Bei ZUGFeRD lesen wir direkt das XML aus (maximale Genauigkeit). Bei reinen PDF-Rechnungen extrahieren wir aus dem Bild. Beide Wege landen im gleichen strukturierten Format in Ihrem System.",
        },
      ]}
      cta={{
        title: "Zeigen Sie uns einen",
        italic: "Ihrer typischen Lieferscheine.",
        body: "15 Minuten Demo. Wir zeigen live, was Parsiva aus Ihren konkreten Lieferanten-Formularen und Angeboten extrahiert — direkt in Ihr ERP-Format.",
        button: "Demo für Handwerksbetriebe vereinbaren →",
      }}
    />
  )
}
