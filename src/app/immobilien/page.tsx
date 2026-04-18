import type { Metadata } from "next"
import IndustryPage from "@/components/IndustryPage"
import NachtragDelta from "@/components/NachtragDelta"

export const metadata: Metadata = {
  title: "Mietverträge automatisch auslesen — KI-Extraktion für Hausverwaltungen",
  description:
    "Parsiva extrahiert automatisch alle Felder aus Gewerbemietverträgen, Wohnungsmietverträgen und Nachträgen. Individuell für Ihre Hausverwaltung konfiguriert. DSGVO-konform, Server in Frankfurt.",
  keywords: [
    "Mietvertrag auslesen",
    "Mietvertragsverwaltung Software",
    "Gewerbemietvertrag digitalisieren",
    "Nachtrag Mietvertrag",
    "Mieterliste automatisch",
    "Hausverwaltung KI Dokumente",
    "Nebenkostenabrechnung extrahieren",
  ],
  alternates: { canonical: "https://parsiva.de/immobilien" },
  openGraph: {
    title: "Mietverträge automatisch auslesen — KI für Hausverwaltungen | Parsiva",
    description:
      "Parsiva extrahiert Gewerbe- und Wohnungsmietverträge, Nachträge, Nebenkostenabrechnungen — maßgeschneidert für Hausverwaltungen.",
    url: "https://parsiva.de/immobilien",
    siteName: "Parsiva",
    locale: "de_DE",
    type: "website",
  },
}

export default function ImmobilienPage() {
  return (
    <IndustryPage
      slug="immobilien"
      eyebrow="Immobilien & Hausverwaltung"
      accentColor="#1E3A8A"
      hero={{
        headlineStart: "Mietverträge, die sich",
        headlineItalic: "selbst",
        headlineEnd: "auslesen.",
        subline:
          "Gewerbemietverträge, Wohnungsmietverträge, Nachträge, Nebenkostenabrechnungen — Parsiva extrahiert alle Felder automatisch. Spezialisiert auf die komplexesten Vertragsformate im deutschen Immobilienmarkt.",
        cta: "Demo für Hausverwaltungen vereinbaren →",
      }}
      pains={[
        "Ein 30-Seiten-Gewerbemietvertrag braucht 90 Minuten manuelle Erfassung.",
        "Nachträge stapeln sich. Niemand weiß mehr, welche Version aktuell gilt.",
        "Mieterlisten werden in Excel gepflegt — und enthalten Fehler.",
        "Indexklauseln, Staffelmieten, Optionen: Ein falsches Feld = Jahre von Miete verloren.",
      ]}
      documentTypes={[
        {
          name: "Gewerbemietverträge",
          fields: ["Parteien", "Laufzeit", "Mietfläche", "Nettomiete", "Indexklausel", "Optionen", "Mietsicherheit", "Kündigungsfristen"],
        },
        {
          name: "Wohnungsmietverträge",
          fields: ["Mieter", "Vermieter", "Miete", "Kaution", "Kündigung", "Staffelmiete"],
        },
        {
          name: "Nachträge",
          fields: ["Delta-Analyse", "Alter Wert", "Neuer Wert", "Änderungsdatum", "Akzept/Ablehnung"],
        },
        {
          name: "Nebenkostenabrechnungen",
          fields: ["Positionen", "Umlageschlüssel", "Vorauszahlungen", "Nachforderungen"],
        },
        {
          name: "Übergabeprotokolle",
          fields: ["Zählerstände", "Mängel", "Schlüsselübergabe", "Datum"],
        },
      ]}
      usp={<NachtragDelta />}
      faqs={[
        {
          q: "Arbeitet Parsiva mit unserer Hausverwaltungssoftware zusammen (immocloud, Nahaus, immoment, ImmoTop2 etc.)?",
          a: "Ja. Parsiva liefert strukturierte Daten per REST-API, CSV, JSON oder Excel — Sie entscheiden das Format. Die Integration in Ihre bestehende Software erfolgt entweder direkt über die API oder über Import-Schnittstellen, die die meisten Hausverwaltungssysteme bereits bieten. Im Erstgespräch prüfen wir konkret, wie der Datenfluss aussieht.",
        },
        {
          q: "Wie funktioniert der Nachtrag-Delta-Abgleich technisch?",
          a: "Sie laden den Ursprungsvertrag und den Nachtrag hoch. Parsiva extrahiert beide nach demselben Schema und stellt Feld für Feld gegenüber: alter Wert, neuer Wert, Änderungsart. Sie sehen auf einen Blick, was sich geändert hat, und entscheiden pro Feld, ob die Änderung übernommen wird. Das ersetzt den manuellen Abgleich, der heute mehrere Stunden pro Nachtrag kostet.",
        },
        {
          q: "Können wir Gewerbe- und Wohnungsmietverträge in derselben Konfiguration verarbeiten?",
          a: "Ja. Wir konfigurieren Parsiva pro Vertragstyp individuell — mit unterschiedlichen Feldschemata für Gewerbe und Wohnen. Parsiva erkennt automatisch, welcher Typ vorliegt, und wendet das passende Schema an.",
        },
        {
          q: "Werden auch handschriftliche Nachträge erkannt?",
          a: "In der Regel ja, solange sie sauber lesbar sind. Für handschriftliche Dokumente ist die Erkennungsrate niedriger als bei Druck — wir zeigen Ihnen in der Testphase ehrlich, welche Qualität Sie erwarten können. Für unleserliche Handschrift gibt es keinen Anbieter, der Wunder verspricht; wir auch nicht.",
        },
        {
          q: "Wie viele Mietverträge kann Parsiva gleichzeitig verarbeiten?",
          a: "Technisch gibt es keine harte Grenze. Wir haben Kunden mit einstelliger Anzahl pro Monat und andere mit mehreren Tausend pro Woche. Die Verarbeitung erfolgt pro Dokument unter 60 Sekunden — Sie können also ein Bestandsarchiv auch in einem Rutsch durchschleusen.",
        },
      ]}
      cta={{
        title: "Sehen Sie Parsiva mit",
        italic: "einem Ihrer echten Mietverträge.",
        body: "15 Minuten Demo. Wir zeigen live, was Parsiva aus einem Ihrer Gewerbemietverträge, Wohnungsmietverträge oder Nachträge extrahiert — mit Ihrer Feldstruktur, Ihren Anforderungen.",
        button: "Demo für Hausverwaltungen vereinbaren →",
      }}
    />
  )
}
