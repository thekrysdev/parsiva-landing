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
      accentBgColor="#F6F9FB"
      hero={{
        headlineStart: "Vom Papier ins TMS.",
        headlineItalic: "In Sekunden.",
        subline:
          "CMR-Frachtbriefe, Transportaufträge, Lieferscheine, Zolldokumente — Parsiva extrahiert alle Felder automatisch und liefert sie in Ihr Transport Management System. Vorbereitet auf eFTI 2029.",
        cta: "Demo für Speditionen vereinbaren →",
        proofPoints: ["eFTI-2029-ready", "DE · EN · FR · PL"],
        visualVariant: "logistik",
      }}
      benefits={[
        {
          icon: "📄",
          title: "CMR automatisch",
          body: "Absender, Empfänger, Zollwert, Incoterms — aus jedem Scan in unter 30 Sekunden.",
        },
        {
          icon: "🇪🇺",
          title: "eFTI-ready 2029",
          body: "Vorbereitet auf die EU-Verordnung für elektronische Frachtpapiere. Strukturierte Daten im eFTI-Mapping.",
        },
        {
          icon: "🌐",
          title: "Multi-Language",
          body: "Deutsche, englische, französische, polnische CMRs — alle in einem System, gleiche Datenstruktur.",
        },
      ]}
      pains={[
        {
          icon: "📝",
          title: "Dreimal getippt",
          body: "Beim Versender, beim Frachtführer, beim Empfänger — derselbe Frachtbrief, dreimal manuell erfasst. Jedes Mal Fehlerrisiko.",
        },
        {
          icon: "📦",
          title: "Papier verliert sich",
          body: "Papier-Frachtbriefe gehen auf Touren verloren. Ohne Beleg keine Vergütung — Reklamationen werden teuer.",
        },
        {
          icon: "🛃",
          title: "30 Zollfelder, alle wichtig",
          body: "Zolldokumente mit Zolltarifnummer, Warenwert, Ursprungsland, Incoterms — ein falsches Feld und die Lieferung steht an der Grenze.",
        },
        {
          icon: "⏳",
          title: "eFTI 2029 kommt",
          body: "Ab 2029 elektronische Frachtpapiere als Regelfall. Wer jetzt nicht digitalisiert, baut zweimal um — teuer und riskant.",
        },
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
        <section className="px-6 md:px-8 py-24">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[720px] mx-auto text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">Multi-Language + eFTI</div>
              <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                Ein CMR, drei Sprachen, <em className="italic font-normal text-p-blue">ein Datensatz.</em>
              </h2>
              <p className="text-lg text-ink-3 leading-[1.5]">
                Deutsche Versender, polnische Fahrer, französische Zollbehörden — Parsiva normalisiert alle Sprachen in eine einheitliche Datenstruktur, bereit für eFTI.
              </p>
            </div>
            <div className="max-w-[900px] mx-auto bg-paper rounded-2xl border border-line shadow-[0_20px_50px_-20px_rgba(10,14,26,0.15)] overflow-hidden">
              <div className="flex items-center gap-0 border-b border-line-2 bg-paper-2">
                {[
                  { code: "DE", label: "Deutsch", active: true },
                  { code: "EN", label: "English" },
                  { code: "PL", label: "Polski" },
                ].map((tab) => (
                  <div
                    key={tab.code}
                    className={`px-5 py-3 text-[12px] font-mono font-semibold border-r border-line-2 ${
                      tab.active ? "bg-paper text-ink border-b-2 border-b-p-blue -mb-px" : "text-ink-4"
                    }`}
                  >
                    {tab.code} · {tab.label}
                  </div>
                ))}
                <div className="ml-auto flex items-center gap-2 px-4 py-2 mr-3">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2 py-1 rounded bg-p-green/15 text-p-green">
                    <span className="w-1.5 h-1.5 rounded-full bg-p-green" />
                    eFTI-kompatibel
                  </span>
                </div>
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[1.5px] text-ink-4 font-semibold mb-3">Quelle · CMR-Scan</div>
                  <div className="bg-[#F8F0D8] rounded-lg p-4 space-y-2 border border-[#E8D8A8]">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-ink/60">Nr.</span>
                      <span className="text-ink font-semibold">1 Absender</span>
                    </div>
                    <div className="h-2 bg-ink/20 rounded w-full" />
                    <div className="h-2 bg-ink/20 rounded w-3/4" />
                    <div className="flex items-center justify-between text-[11px] font-mono pt-2 border-t border-[#E8D8A8]">
                      <span className="text-ink/60">Nr.</span>
                      <span className="text-ink font-semibold">2 Empfänger</span>
                    </div>
                    <div className="h-2 bg-ink/20 rounded w-5/6" />
                    <div className="h-2 bg-ink/20 rounded w-full" />
                    <div className="flex items-center justify-between text-[11px] font-mono pt-2 border-t border-[#E8D8A8]">
                      <span className="text-ink/60">Nr. 7</span>
                      <span className="text-ink font-semibold">Ware</span>
                    </div>
                    <div className="h-2 bg-p-orange/60 rounded w-2/3" />
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[1.5px] text-ink-4 font-semibold mb-3">Normalisiert · eFTI-Mapping</div>
                  <div className="bg-ink text-paper rounded-lg p-4 space-y-2.5">
                    {[
                      { k: "consignor.name", v: "DE-Beispiel GmbH" },
                      { k: "consignor.country", v: "DE" },
                      { k: "consignee.name", v: "PL-Odbiorca Sp." },
                      { k: "consignee.country", v: "PL" },
                      { k: "goods.description", v: "Maschinenteile" },
                      { k: "goods.weight_kg", v: "4250" },
                      { k: "incoterms", v: "CPT Warszawa" },
                    ].map((f) => (
                      <div key={f.k} className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-ink-5">{f.k}</span>
                        <span className="text-[#86EFAC] text-right">{f.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      processSteps={[
        { title: "CMR scannen", body: "Vom Smartphone des Fahrers, per Scan-Station oder als PDF — alle Formate werden akzeptiert." },
        { title: "Felder extrahieren", body: "Absender, Empfänger, Ware, Gewicht, Zollwert, Incoterms — strukturiert und normalisiert." },
        { title: "Multi-Language-Abgleich", body: "Deutsche, englische, französische, polnische Originalsprache — gleiche Zielstruktur." },
        { title: "Direkt ins TMS", body: "REST-API, CSV-Import oder Watch-Folder in Winsped, TransIT, SoloPlan — eFTI-kompatibel." },
      ]}
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
        proofPoint: "Vorbereitet auf eFTI 2029 — heute starten, morgen bereit.",
        title: "Laden Sie",
        italic: "einen typischen CMR hoch.",
        body: "15 Minuten Demo. Wir zeigen live, was Parsiva aus Ihren CMR-Frachtbriefen, Transportaufträgen oder Zolldokumenten extrahiert — direkt im Format, das Ihr TMS versteht.",
        button: "Demo für Speditionen vereinbaren →",
      }}
    />
  )
}
