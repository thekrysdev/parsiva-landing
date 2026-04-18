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
      accentColor="#991B1B"
      hero={{
        headlineStart: "DATEV macht Ihre Rechnungen.",
        headlineItalic: "Wir machen den Rest.",
        subline:
          "Steuerbescheide, Einspruchsentscheidungen, Sonderbelege, branchenspezifische Formulare — Parsiva extrahiert genau die Dokumente, die DATEV-Automatisierungsservice und lexoffice nicht abdecken. Konfiguriert auf Ihre Mandantenlandschaft.",
        cta: "Demo für Steuerkanzleien vereinbaren →",
      }}
      pains={[
        "Für Standard-Rechnungen haben wir DATEV. Aber für Bescheide, Einsprüche, Sonderbelege? Abtippen.",
        "Jeder Mandant hat andere Dokumenttypen — Template-basierte Lösungen scheitern.",
        "Zoll, Einfuhr-USt, Gewerbesteuer-Bescheide — keine zuverlässige Auto-Erkennung.",
        "Sonderfälle landen auf dem Stapel, der 'später' erledigt wird — und nie wird.",
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
        <section className="px-6 md:px-8 py-28 bg-paper-2">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[720px] mx-auto text-center">
              <div className="text-xs font-semibold uppercase tracking-[2px] mb-4" style={{ color: "#991B1B" }}>
                Ehrliche Positionierung
              </div>
              <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-6" style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}>
                Wir konkurrieren nicht mit DATEV.
                <br />
                <em className="italic font-normal" style={{ color: "#991B1B" }}>Wir ergänzen DATEV.</em>
              </h2>
              <p className="text-lg text-ink-3 leading-[1.55] [hyphens:auto] break-words">
                Für Standard-Eingangsrechnungen ist DATEV-Automatisierungsservice die richtige Wahl. Ebenso lexoffice, sevDesk und Finmatics für die klassische Beleg-Strecke. Parsiva sitzt bewusst daneben: für alle Dokumente, die diese Systeme <strong className="text-ink font-semibold">nicht</strong> sauber verarbeiten — Bescheide, Einspruchsentscheidungen, Sonderbelege, individuelle Mandantenformulare. Wenn DATEV bei einem Dokumenttyp scheitert oder gar nicht ansetzt, springt Parsiva ein.
              </p>
            </div>
          </div>
        </section>
      }
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
        title: "Senden Sie uns 3 Dokumenttypen, die Sie",
        italic: "nicht automatisiert bearbeiten können.",
        body: "15 Minuten Demo. Wir zeigen live, was Parsiva aus Bescheiden, Sonderbelegen oder branchenspezifischen Mandantenformularen extrahiert — dort, wo DATEV und lexoffice an ihre Grenzen kommen.",
        button: "Demo für Steuerkanzleien vereinbaren →",
      }}
    />
  )
}
