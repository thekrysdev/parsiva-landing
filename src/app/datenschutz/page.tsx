import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Parsiva Website",
  robots: { index: false, follow: false },
}

export default function Datenschutz() {
  return (
    <main className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl font-semibold text-ink mb-12 tracking-tight">Datenschutzerklärung</h1>
        <div className="space-y-10 text-sm text-ink-3 leading-relaxed">
          <section>
            <h2 className="font-semibold text-ink text-base mb-3">§ 1 Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mt-2">[Vorname Nachname]<br />Parsiva<br />[Straße Hausnummer]<br />[PLZ Ort]<br />E-Mail: <a href="mailto:info@parsiva.de" className="text-p-blue hover:underline">info@parsiva.de</a></p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">§ 2 Erhobene Daten beim Besuch der Website</h2>
            <p>Beim Aufruf dieser Website werden automatisch Informationen an den Server übertragen und in Server-Logdateien gespeichert. Dies betrifft:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP-Adresse (gekürzt/anonymisiert)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
            </ul>
            <p className="mt-3">Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO aus dem berechtigten Interesse an der sicheren und stabilen Bereitstellung der Website. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Daten werden nach spätestens 30 Tagen gelöscht.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">§ 3 Kontaktaufnahme per E-Mail</h2>
            <p>Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (Name, E-Mail-Adresse, Nachrichteninhalt) zur Bearbeitung Ihrer Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Anbahnung eines Vertragsverhältnisses) bzw. lit. f (berechtigtes Interesse an der Beantwortung). Die Daten werden gelöscht, sobald sie für die Anfragebearbeitung nicht mehr erforderlich sind — spätestens jedoch nach Ablauf gesetzlicher Aufbewahrungsfristen.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">§ 4 Cookies</h2>
            <p>Auf dieser Website werden keine nicht-essentiellen Cookies eingesetzt. Es findet keine Nachverfolgung des Nutzerverhaltens statt, und es werden keine Analyse- oder Werbetools eingebunden.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">§ 5 Hosting</h2>
            <p>Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Die Auslieferung der Inhalte erfolgt über das globale Edge-Netzwerk von Vercel, wobei Daten vorrangig über europäische Rechenzentren (Frankfurt am Main) ausgeliefert werden. Mit Vercel besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Für Datenübermittlungen in die USA gelten die EU-Standardvertragsklauseln (Standard Contractual Clauses) gemäß Art. 46 Abs. 2 lit. c DSGVO.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">§ 6 Rechte der betroffenen Person</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="mt-3">Wenden Sie sich zur Ausübung dieser Rechte an die im Impressum genannte E-Mail-Adresse.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">§ 7 Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Zuständig ist insbesondere die Aufsichtsbehörde des Bundeslandes, in dem der Verantwortliche seinen Sitz hat: [zuständige Landesaufsichtsbehörde ergänzen].</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">§ 8 SSL/TLS-Verschlüsselung</h2>
            <p>Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und am Schloss-Symbol in Ihrer Browserzeile.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">§ 9 Änderungen dieser Datenschutzerklärung</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklärung gelegentlich anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
            <p className="mt-3 text-ink-4">Stand: April 2026</p>
          </section>
        </div>
      </div>
    </main>
  )
}
