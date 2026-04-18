import { MapPin, ShieldCheck, Flag } from "lucide-react"

const INDUSTRY_LINKS = [
  { href: "/immobilien", label: "Immobilien & Hausverwaltung" },
  { href: "/handwerk", label: "Handwerk & Technik" },
  { href: "/kanzleien", label: "Kanzleien & Rechtsabteilungen" },
  { href: "/logistik", label: "Logistik & Transport" },
  { href: "/steuerberatung", label: "Steuerberatung & Buchhaltung" },
]

const LEGAL_LINKS = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "mailto:info@parsiva.de", label: "info@parsiva.de" },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-6 md:px-8 py-16 border-t border-line-2 bg-paper">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-10 md:gap-14 mb-10">
          <div>
            <div className="font-heading text-2xl font-semibold tracking-tight text-ink mb-3 leading-none">
              Parsiva<span className="text-p-orange">.</span>
            </div>
            <p className="text-[14px] text-ink-3 leading-[1.55] max-w-[360px] mb-5">
              Maßgeschneiderte Dokumentenverarbeitung für den deutschen Mittelstand. Verträge,
              Rechnungen, Bescheide — automatisch strukturiert.
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-ink-4">
              <span className="inline-flex items-center gap-1.5">
                <Flag strokeWidth={1.75} className="w-3.5 h-3.5 text-p-blue" />
                Made in Germany
              </span>
              <span className="w-1 h-1 rounded-full bg-ink-5" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin strokeWidth={1.75} className="w-3.5 h-3.5 text-p-blue" />
                Server in Frankfurt
              </span>
              <span className="w-1 h-1 rounded-full bg-ink-5" />
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck strokeWidth={1.75} className="w-3.5 h-3.5 text-p-blue" />
                DSGVO-konform
              </span>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[2px] text-ink-4 mb-4">
              Branchen
            </div>
            <ul className="space-y-2">
              {INDUSTRY_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-ink-3 hover:text-p-orange transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[2px] text-ink-4 mb-4">
              Rechtliches
            </div>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[14px] text-ink-3 hover:text-p-orange transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-line-2 text-[13px] text-ink-4">
          <div>© {year} Parsiva</div>
          <div className="text-ink-5">Ihre Dokumente lesen sich selbst.</div>
        </div>
      </div>
    </footer>
  )
}
