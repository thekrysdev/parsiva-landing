import type { Metadata } from "next"
import IndustryPage from "@/components/IndustryPage"

export const metadata: Metadata = {
  title: "Belege, Bescheide & Sonderdokumente extrahieren — KI für Steuerkanzleien",
  description:
    "Parsiva extrahiert automatisch Daten aus Steuerbescheiden, komplexen Belegen und Spezialdokumenten, die DATEV und lexoffice nicht abdecken. Individuell für Ihre Kanzlei konfiguriert.",
  keywords: [
    "Steuerbescheid auslesen",
    "Bescheid digitalisieren Steuerkanzlei",
    "Sonderbeleg OCR",
    "Kanzlei Dokumentenautomatisierung",
    "Einspruchsentscheidung extrahieren",
    "GoBD Dokumentenextraktion",
  ],
  alternates: { canonical: "https://parsiva.de/steuerberatung" },
  openGraph: {
    title: "Bescheide & Sonderdokumente extrahieren — KI für Steuerkanzleien | Parsiva",
    description:
      "Parsiva ergänzt DATEV. Für alle Dokumente, die der DATEV-Automatisierungsservice nicht sauber verarbeitet.",
    url: "https://parsiva.de/steuerberatung",
    siteName: "Parsiva",
    locale: "de_DE",
    type: "website",
  },
}

export default function SteuerberatungPage() {
  return (
    <IndustryPage
      slug="steuerberatung"
      eyebrow="Steuerberatung & Buchhaltung"
      accentBgColor="#FAFAF7"
      hero={{
        headlineStart: "DATEV macht Ihre Rechnungen.",
        headlineItalic: "Wir machen den Rest.",
        subline:
          "Steuerbescheide, Einspruchsentscheidungen, Sonderbelege, branchenspezifische Formulare — Parsiva extrahiert genau die Dokumente, die DATEV-Automatisierungsservice und lexoffice nicht abdecken. Konfiguriert auf Ihre Mandantenlandschaft.",
        cta: "Demo für Steuerkanzleien vereinbaren →",
        proofPoints: ["Parallel zu DATEV, nicht statt", "GoBD-konforme Ablage"],
        visualVariant: "steuerberatung",
      }}
      benefits={[
        {
          icon: "🎯",
          title: "Wo DATEV aufhört",
          body: "Steuerbescheide, Einspruchsentscheidungen, Sonderbelege — genau die Dokumente, die DATEV-Automatisierung nicht abdeckt.",
        },
        {
          icon: "👥",
          title: "Pro Mandant konfiguriert",
          body: "Jeder Ihrer Mandanten hat andere Sonderbelege. Wir konfigurieren Parsiva pro Mandantengruppe individuell.",
        },
        {
          icon: "📜",
          title: "GoBD-konform",
          body: "Revisionssichere Archivierung, Audit-Logs, deutsche Server. Kanzlei-ready für alle Prüfungsanforderungen.",
        },
      ]}
      pains={[
        {
          icon: "📄",
          title: "Sonderbelege = Abtippen",
          body: "Für Standard-Rechnungen haben wir DATEV. Aber für Bescheide, Einsprüche, Sonderbelege? Abtippen. Jeden Tag, jeden Monat.",
        },
        {
          icon: "🧩",
          title: "Jeder Mandant anders",
          body: "Zahnarzt, Spedition, Bäckerei — jede Branche hat eigene Dokumenttypen. Template-basierte Lösungen scheitern an der Vielfalt.",
        },
        {
          icon: "🛃",
          title: "Zoll, USt, Gewerbe — Chaos",
          body: "Einfuhr-USt-Bescheide, Gewerbesteuer-Messbescheide, Zolldokumente — keine zuverlässige Auto-Erkennung in Standard-Tools.",
        },
        {
          icon: "📥",
          title: "'Später'-Stapel",
          body: "Sonderfälle landen auf dem Stapel, der 'später' erledigt wird — und nie wird. Zeit läuft, Fristen kippen, Mandanten fragen.",
        },
      ]}
      documentTypes={[
        {
          name: "Steuerbescheide",
          fields: ["Steuerart", "Zeitraum", "Festsetzung", "Fälligkeit", "Einspruchsfrist", "Aktenzeichen"],
        },
        {
          name: "Einspruchsentscheidungen",
          fields: ["Aktenzeichen", "Tenor", "Begründung", "Rechtsbehelfsbelehrung"],
        },
        {
          name: "Sonderbelege",
          fields: ["Absender", "Datum", "Betrag", "Verwendungszweck", "Mandantenzuordnung"],
        },
        {
          name: "Mandantenformulare",
          fields: ["Branchenspezifisch", "konfigurierbar pro Mandant"],
        },
      ]}
      usp={
        <section className="px-6 md:px-8 py-24">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[720px] mx-auto text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">Ehrliche Arbeitsteilung</div>
              <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                DATEV und Parsiva — <em className="italic font-normal text-p-blue">parallel, nicht konkurrierend.</em>
              </h2>
              <p className="text-lg text-ink-3 leading-[1.5]">
                Standard-Rechnungen laufen über DATEV. Alles andere über Parsiva. Beide Datenströme landen in derselben Mandantenakte.
              </p>
            </div>
            <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
              <div className="bg-paper rounded-2xl p-5 border border-line shadow-[0_12px_40px_-16px_rgba(10,14,26,0.15)]">
                <div className="text-[10px] uppercase tracking-[1.5px] text-ink-4 font-semibold mb-3">DATEV Automatisierung</div>
                <div className="text-[13px] text-ink font-semibold mb-1">Standard-Rechnungen</div>
                <div className="text-[12px] text-ink-4 leading-[1.55]">Eingangs- und Ausgangsrechnungen, Kontoauszüge — die klassische Beleg-Strecke.</div>
              </div>
              <div className="flex md:flex-col items-center justify-center text-ink-4 text-xl">
                <svg className="w-6 h-6 rotate-90 md:rotate-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
              <div className="bg-ink text-paper rounded-2xl p-5 shadow-[0_20px_50px_-20px_rgba(10,14,26,0.4)] relative">
                <div className="absolute -top-3 left-5 px-2.5 py-1 rounded-full bg-p-orange text-paper text-[10px] font-semibold uppercase tracking-wider">
                  Parsiva
                </div>
                <div className="text-[10px] uppercase tracking-[1.5px] text-ink-5 font-semibold mb-3 mt-1">Alles andere</div>
                <div className="text-[13px] font-semibold mb-1">Bescheide · Einsprüche · Sonderbelege</div>
                <div className="text-[12px] text-ink-5 leading-[1.55]">Pro Mandant konfiguriert. GoBD-konform. Deutsche Server.</div>
              </div>
              <div className="flex md:flex-col items-center justify-center text-ink-4 text-xl">
                <svg className="w-6 h-6 rotate-90 md:rotate-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>
              <div className="bg-paper rounded-2xl p-5 border-2 border-p-blue/30">
                <div className="text-[10px] uppercase tracking-[1.5px] text-p-blue font-semibold mb-3">Gemeinsames Archiv</div>
                <div className="text-[13px] text-ink font-semibold mb-1">Mandantenakte</div>
                <div className="text-[12px] text-ink-4 leading-[1.55]">Alle Daten strukturiert an einem Ort. Zugriff über Ihr DMS oder direkt in DATEV.</div>
              </div>
            </div>
          </div>
        </section>
      }
      processSteps={[
        { title: "Dokument hochladen", body: "Bescheide, Einsprüche, Sonderbelege — per E-Mail, Watch-Folder oder API." },
        { title: "Typ erkennen & extrahieren", body: "Parsiva identifiziert den Dokumenttyp und wendet die passende Mandantenkonfiguration an." },
        { title: "Pro-Mandant-Konfiguration", body: "Branchenspezifische Felder, individuelle Geschäftslogik, mandantenbezogene Zuordnung." },
        { title: "GoBD-konforme Ablage", body: "Revisionssicher archiviert, mit Audit-Log, direkt verfügbar in Ihrem Kanzleiablauf." },
      ]}
      faqs={[
        {
          q: "Warum Parsiva wenn wir schon DATEV Automatisierungsservice haben?",
          a: "DATEV ist für Standard-Eingangsrechnungen stark. Für Bescheide, Einspruchsentscheidungen, Zollpapiere oder individuelle Mandantenformulare ist DATEV entweder nicht vorgesehen oder unzuverlässig. Parsiva deckt genau diese Lücke. Die beiden Systeme arbeiten parallel: DATEV macht Rechnungen, Parsiva macht den Rest.",
        },
        {
          q: "Welche Dokumente soll man NICHT mit Parsiva machen?",
          a: "Standard-Eingangsrechnungen. Dafür ist DATEV-Automatisierungsservice optimiert, günstig und in Ihrer Kanzleiumgebung bereits integriert. Parsiva lohnt sich erst dort, wo DATEV oder andere Standard-Tools nicht sauber extrahieren.",
        },
        {
          q: "Wie integriert sich Parsiva in unseren Kanzleiablauf?",
          a: "Parsiva liefert strukturierte Daten (JSON, CSV, Excel) oder per API direkt in Ihr DMS oder DATEV-Erweiterungsfeld. Typischer Ablauf: Dokumente landen in einem Watch-Folder oder dediziertem E-Mail-Postfach, Parsiva extrahiert, die Ergebnisse werden je nach Dokumenttyp an den richtigen Ort in Ihrem Kanzleiprozess geroutet.",
        },
        {
          q: "Was ist mit GoBD-Konformität?",
          a: "GoBD-Konformität betrifft primär die Aufbewahrung und Unveränderbarkeit buchungsrelevanter Daten. Parsiva erzeugt strukturierte Extrakte mit Zeitstempel und Originaldokument-Referenz. Die revisionssichere Ablage erfolgt in Ihrem DMS oder Buchhaltungssystem — Parsiva ist dort die Extraktions-Schicht, nicht das Archivsystem.",
        },
        {
          q: "Ist Parsiva DSGVO-konform für Mandantendaten?",
          a: "Server in Frankfurt, AES-256 Verschlüsselung, AVV nach Art. 28 DSGVO, keine Datenübertragung in Drittländer, kein KI-Training mit Ihren Daten. Für die besonders schützenswerten Mandantenunterlagen gelten die gleichen Standards wie für Kanzleiakten generell.",
        },
      ]}
      cta={{
        proofPoint: "Parallel zu DATEV — für alle Dokumente, die dort nicht gehen.",
        title: "Senden Sie uns 3 Dokumenttypen, die Sie",
        italic: "nicht automatisiert bearbeiten können.",
        body: "15 Minuten Demo. Wir zeigen live, was Parsiva aus Bescheiden, Sonderbelegen oder branchenspezifischen Mandantenformularen extrahiert — dort, wo DATEV und lexoffice an ihre Grenzen kommen.",
        button: "Demo für Steuerkanzleien vereinbaren →",
      }}
    />
  )
}
