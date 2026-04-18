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
        <div className="space-y-12 text-sm text-ink-3 leading-relaxed">
          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Angaben gemäß § 5 DDG</h2>
            <address className="not-italic">
              Parsiva<br />
              Inhaber: Krystian Stawiarski<br />
              Schlesische Straße 10<br />
              78224 Singen (Hohentwiel)<br />
              Deutschland
            </address>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Kontakt</h2>
            <p>
              E-Mail: <a href="mailto:info@parsiva.de" className="text-p-blue hover:underline">info@parsiva.de</a>
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Umsatzsteuer</h2>
            <p>Kleinunternehmer gemäß § 19 UStG. Keine Ausweisung der Umsatzsteuer.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <address className="not-italic">
              Krystian Stawiarski<br />
              Schlesische Straße 10<br />
              78224 Singen (Hohentwiel)
            </address>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">EU-Streitschlichtung</h2>
            <p>Die Europäische Kommission stellte eine Plattform zur Online-Streitbeilegung (OS) bereit. Diese wurde zum 20. Juli 2025 eingestellt. Eine Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle findet nicht statt.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf dieser Website nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Haftung für Links</h2>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
          </section>

          <section>
            <h2 className="font-semibold text-ink text-base mb-3">Urheberrecht</h2>
            <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Verfassers.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
