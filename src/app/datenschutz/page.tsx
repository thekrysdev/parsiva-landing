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
        <div className="space-y-12 text-sm text-ink-3 leading-relaxed">
          <section>
            <h2 className="font-semibold text-ink text-base mb-3">1. Verantwortlicher</h2>
            <p>Verantwortlich im Sinne der DSGVO ist:</p>
            <address className="not-italic mt-2">
              Krystian Stawiarski<br />
              Parsiva<br />
              Schlesische Straße 10<br />
              78224 Singen (Hohentwiel)<br />
              Deutschland<br />
              E-Mail: <a href="mailto:info@parsiva.de" className="text-p-blue hover:underline">info@parsiva.de</a>
            </address>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">2. Hosting</h2>
            <p>Diese Website wird bei Cloudflare, Inc. gehostet. Cloudflare fungiert als Auftragsverarbeiter und verarbeitet technisch notwendige Daten (IP-Adresse, User-Agent, Anfragedaten) zum Zweck der sicheren Auslieferung dieser Website, insbesondere zum Schutz vor Denial-of-Service-Angriffen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).</p>
            <p className="mt-3">Cloudflare ist ein US-amerikanisches Unternehmen mit Sitz in San Francisco. Die Datenübertragung in die USA erfolgt auf Grundlage des EU-US Data Privacy Framework, in das sich Cloudflare zertifiziert hat, sowie durch Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO.</p>
            <p className="mt-3">Weitere Informationen finden Sie in der Datenschutzerklärung von Cloudflare: <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-p-blue hover:underline break-all">https://www.cloudflare.com/privacypolicy/</a></p>
            <p className="mt-3">Mit Cloudflare besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">3. Server-Logs</h2>
            <p>Beim Aufruf dieser Website werden durch den Hoster automatisch technische Daten in Server-Logs gespeichert:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene URL</li>
              <li>Referrer-URL</li>
              <li>User-Agent (Browser-Information)</li>
              <li>Statuscode</li>
            </ul>
            <p className="mt-3">Diese Daten werden zur Gewährleistung des sicheren Betriebs, zur Fehlerdiagnose und zur Abwehr von Angriffen verarbeitet. Eine Zusammenführung mit anderen Datenquellen oder eine personenbezogene Auswertung findet nicht statt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Die Speicherdauer beträgt in der Regel maximal 7 Tage.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">4. Cookies</h2>
            <p>Diese Website setzt keine Cookies. Weder eigene noch Cookies Dritter werden bei einem bloßen Besuch dieser Website gesetzt. Es findet kein Tracking, kein Retargeting und keine Reichweitenmessung statt.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">5. Kontaktaufnahme per E-Mail</h2>
            <p>Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten (insbesondere E-Mail-Adresse, Name und der Inhalt der Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).</p>
            <p className="mt-3">Ihre Daten werden nach Erledigung der Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
          </section>

          {/*
            Abschnitt 6 — Terminbuchung (Cal.com): NOCH NICHT AKTIV.
            Cal.com-Embed ist aktuell noch nicht integriert.
            Sobald die Integration live ist, folgenden Block einkommentieren
            und in der Nummerierung der Folgeabschnitte (7–10) nachziehen.

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">6. Terminbuchung (Cal.com)</h2>
            <p>Für die Buchung von Demo-Terminen nutzen wir Cal.com. Anbieter ist die Cal.com, Inc. Wenn Sie über unsere Website einen Termin buchen, werden Ihre Eingaben (Name, E-Mail, Firma, ggf. weitere Angaben) direkt an Cal.com übermittelt und dort zum Zweck der Terminverwaltung verarbeitet.</p>
            <p className="mt-3">Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen). Cal.com bietet auf cal.eu ausschließlich EU-Hosting an. Mit Cal.com besteht ein Auftragsverarbeitungsvertrag.</p>
            <p className="mt-3">Weitere Informationen: <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" className="text-p-blue hover:underline break-all">https://cal.com/privacy</a></p>
          </section>
          */}

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">6. Ihre Rechte als betroffene Person</h2>
            <p>Sie haben uns gegenüber folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-3">Zur Geltendmachung Ihrer Rechte genügt eine formlose E-Mail an <a href="mailto:info@parsiva.de" className="text-p-blue hover:underline">info@parsiva.de</a>.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">7. Beschwerderecht</h2>
            <p>Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.</p>
            <p className="mt-3">Zuständige Aufsichtsbehörde:</p>
            <address className="not-italic mt-2">
              Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
              Königstraße 10a<br />
              70173 Stuttgart<br />
              <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" className="text-p-blue hover:underline break-all">https://www.baden-wuerttemberg.datenschutz.de</a>
            </address>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">8. SSL/TLS-Verschlüsselung</h2>
            <p>Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung an der „https://&rdquo; Adresszeile Ihres Browsers.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">9. Änderungen dieser Datenschutzerklärung</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
            <p className="mt-3 text-ink-4">Stand: April 2026</p>
          </section>
        </div>
      </div>
    </main>
  )
}
