import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Parsiva Website",
  robots: { index: false, follow: false },
}

export default function Impressum() {
  return (
    <main className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl font-semibold text-ink mb-12 tracking-tight">Impressum</h1>
        <div className="space-y-10 text-sm text-ink-3 leading-relaxed">
          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)</h2>
            <p>[Vorname Nachname]<br />Parsiva<br />[Straße Hausnummer]<br />[PLZ Ort]<br />Deutschland</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:info@parsiva.de" className="text-p-blue hover:underline">info@parsiva.de</a>
              <br />
              Telefon: [+49 XXX XXXXXXX]
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Umsatzsteuer-Identifikationsnummer</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [DE XXXXXXXXX]</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>[Vorname Nachname]<br />[Straße Hausnummer]<br />[PLZ Ort]</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-p-blue hover:underline break-all">https://ec.europa.eu/consumers/odr/</a>
              <br />Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="mt-3">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Haftung für Links</h2>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Urheberrecht</h2>
            <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
