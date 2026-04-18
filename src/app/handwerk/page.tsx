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
      accentBgColor="#F8F9FC"
      hero={{
        headlineStart: "Weniger Papier.",
        headlineItalic: "Mehr Werkstatt.",
        subline:
          "Angebote, Lieferscheine, Eingangsrechnungen — Parsiva extrahiert alle Daten automatisch und liefert sie direkt in Ihr ERP oder Warenwirtschaftssystem. Für Handwerksbetriebe, die sich kein SAP leisten und kein SAP brauchen.",
        cta: "Demo für Handwerksbetriebe vereinbaren →",
        proofPoints: ["Für Betriebe von 5 bis 500 Mitarbeitern", "Kompatibel mit KWP, MOS'aik, HAPAK"],
        visualVariant: "handwerk",
      }}
      benefits={[
        {
          icon: "📦",
          title: "Lieferscheine ohne Tippen",
          body: "Großhandel, Baumärkte, Lieferanten — alle Formate, alle Felder, automatisch ins ERP.",
        },
        {
          icon: "📝",
          title: "Angebote digitalisieren",
          body: "Positionen, Mengen, Preise — aus PDF oder Foto direkt in Ihr System.",
        },
        {
          icon: "🔌",
          title: "ERP-freundlich",
          body: "Export als CSV, JSON, XML oder per API. Kompatibel mit KWP, MOS'aik, HAPAK und mehr.",
        },
      ]}
      pains={[
        {
          icon: "📋",
          title: "Jeder Lieferschein doppelt",
          body: "Einmal vom Fahrer auf der Tour, einmal im Büro am Rechner. Jede Eingabe ein Fehlerrisiko, jede Minute doppelt verloren.",
        },
        {
          icon: "🧾",
          title: "10 Formate, 10 Lieferanten",
          body: "Eingangsrechnungen vom Großhandel kommen in jedem erdenklichen Format. Template-OCR scheitert an der Vielfalt.",
        },
        {
          icon: "📱",
          title: "Baustelle → Büro = Tage",
          body: "Auf der Baustelle fotografiert, im Büro abgetippt. Tage gehen verloren zwischen Aufnahme und ERP-Buchung.",
        },
        {
          icon: "⌨️",
          title: "ERP ohne Zulauf",
          body: "Das ERP ist da, gut konfiguriert — aber die Dokumente landen per Hand drin. Technologie-Bruch im letzten Meter.",
        },
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
        <section className="px-6 md:px-8 py-24">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[720px] mx-auto text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">Vom Foto ins ERP</div>
              <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                Smartphone-Foto zur ERP-Buchung <em className="italic font-normal text-p-blue">in Minuten.</em>
              </h2>
              <p className="text-lg text-ink-3 leading-[1.5]">
                Baustellen-Foto hochladen — Parsiva extrahiert, prüft, übergibt an Ihr ERP. Kein doppeltes Tippen mehr.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center max-w-[900px] mx-auto">
              <div className="bg-ink text-paper rounded-2xl p-5 shadow-[0_20px_50px_-20px_rgba(10,14,26,0.3)]">
                <div className="text-[10px] uppercase tracking-[1.5px] text-ink-5 font-semibold mb-3 flex items-center gap-2">
                  <span>📱</span> Baustellen-App
                </div>
                <div className="bg-paper-3 aspect-[4/5] rounded-lg p-3 flex flex-col gap-1.5">
                  <div className="h-3 bg-ink/20 rounded w-2/3" />
                  <div className="h-2 bg-ink/15 rounded w-full" />
                  <div className="h-2 bg-ink/15 rounded w-5/6" />
                  <div className="h-2 bg-ink/15 rounded w-full" />
                  <div className="h-2 bg-p-orange/60 rounded w-3/4" />
                  <div className="h-2 bg-ink/15 rounded w-4/5" />
                  <div className="h-2 bg-p-orange/60 rounded w-2/3" />
                  <div className="flex-1" />
                  <div className="text-center text-[10px] text-ink/50 font-mono">lieferschein_2847.jpg</div>
                </div>
              </div>
              <div className="flex items-center justify-center text-p-blue">
                <svg className="w-10 h-10 rotate-90 md:rotate-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
              <div className="bg-paper rounded-2xl p-5 border border-line shadow-[0_20px_50px_-20px_rgba(10,14,26,0.15)]">
                <div className="text-[10px] uppercase tracking-[1.5px] text-ink-4 font-semibold mb-3 flex items-center gap-2">
                  <span>💻</span> Ihr ERP
                </div>
                <div className="space-y-2">
                  {[
                    { k: "Lieferant", v: "Baustoffe Huber" },
                    { k: "Pos. 1", v: "Estrichzement 25kg" },
                    { k: "Menge", v: "40 Sack" },
                    { k: "Pos. 2", v: "Baustahl Q188" },
                    { k: "Menge", v: "12 Matten" },
                    { k: "Summe", v: "842,00 €" },
                  ].map((r) => (
                    <div key={r.k} className="flex items-center justify-between text-[12px] font-mono border-b border-line-2 pb-1.5 last:border-0">
                      <span className="text-ink-4">{r.k}</span>
                      <span className="flex items-center gap-1.5">
                        <span className="text-p-green text-[10px]">✓</span>
                        <span className="text-ink">{r.v}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      processSteps={[
        { title: "Foto oder scannen", body: "Baustellen-Foto, Scan-App oder klassisches PDF — Parsiva akzeptiert alle Eingabeformate." },
        { title: "Positionen erkennen", body: "Lieferant, Bestellnummer, Positionen, Mengen — alles strukturiert extrahiert." },
        { title: "Prüfen und freigeben", body: "Felder kurz checken, bei Bedarf korrigieren, freigeben. In Sekunden, nicht Minuten." },
        { title: "Direkt ins ERP", body: "Per API, CSV-Import oder Watch-Folder in KWP, MOS'aik, HAPAK oder Ihr Eigensystem." },
      ]}
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
        proofPoint: "Für Handwerksbetriebe ab 5 Mitarbeitern bis 500 — keine SAP-Einführung nötig.",
        title: "Zeigen Sie uns einen",
        italic: "Ihrer typischen Lieferscheine.",
        body: "15 Minuten Demo. Wir zeigen live, was Parsiva aus Ihren konkreten Lieferanten-Formularen und Angeboten extrahiert — direkt in Ihr ERP-Format.",
        button: "Demo für Handwerksbetriebe vereinbaren →",
      }}
    />
  )
}
