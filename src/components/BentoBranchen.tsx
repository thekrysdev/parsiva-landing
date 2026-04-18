import Link from "next/link"
import { Building2, Wrench, Scale, Truck, Receipt, Sparkles, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import DemoButton from "@/components/DemoButton"

type Branche = {
  slug: string
  icon: LucideIcon
  title: string
  desc: string
  docs: string[]
}

const BRANCHEN: Branche[] = [
  {
    slug: "immobilien",
    icon: Building2,
    title: "Immobilien & Hausverwaltung",
    desc: "Gewerbemietverträge, Wohnungsmietverträge, Nachträge, Nebenkostenabrechnungen — automatisch extrahiert.",
    docs: ["Mietverträge", "Nachträge", "Nebenkostenabrechnungen", "Übergabeprotokolle"],
  },
  {
    slug: "steuerberatung",
    icon: Receipt,
    title: "Steuerberatung & Buchhaltung",
    desc: "Rechnungen, Belege, Bescheide — direkt ins Buchhaltungssystem oder DATEV.",
    docs: ["Rechnungen", "Belege", "Steuerbescheide", "Kontoauszüge"],
  },
  {
    slug: "kanzleien",
    icon: Scale,
    title: "Kanzleien & Rechtsabteilungen",
    desc: "Verträge analysieren, Klauseln erkennen, Fristen und Pflichten extrahieren.",
    docs: ["Verträge", "Vollmachten", "Schriftsätze", "Urteile"],
  },
  {
    slug: "handwerk",
    icon: Wrench,
    title: "Handwerk & Technik",
    desc: "Angebote, Lieferscheine, Rechnungen — automatisch ins ERP oder Warenwirtschaft.",
    docs: ["Angebote", "Lieferscheine", "Eingangsrechnungen", "Bauverträge"],
  },
  {
    slug: "logistik",
    icon: Truck,
    title: "Logistik & Transport",
    desc: "Frachtbriefe, CMR-Papiere, Zolldokumente — sekundenschnell strukturiert.",
    docs: ["Frachtbriefe", "CMR", "Zolldokumente", "Lieferscheine"],
  },
]

const CARD_CLASSES =
  "flex flex-col min-h-[280px] rounded-[20px] p-7 bg-white border border-line-2 hover:-translate-y-1 hover:border-p-blue/30 hover:shadow-[0_18px_40px_-16px_rgba(30,58,138,0.2)] transition-all group"

export default function BentoBranchen() {
  return (
    <section id="branchen" className="px-6 md:px-8 py-28 bg-paper-2 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-grid-paper pointer-events-none opacity-50" />
      <div className="max-w-[1280px] mx-auto relative">
        <div className="max-w-[720px] mx-auto text-center mb-[72px]">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">Branchen</div>
          <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
            Eine Technologie.
            <br />
            <em className="italic font-normal text-p-blue">Jedes Dokument.</em>
          </h2>
          <p className="text-lg text-ink-3 leading-[1.5]">Parsiva wird für jeden Kunden individuell konfiguriert — auf Ihre Dokumenttypen, Ihre Felder, Ihre Prozesse.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BRANCHEN.map((b, i) => {
            const Icon = b.icon
            return (
              <Link
                key={b.slug}
                href={`/${b.slug}`}
                className={`${CARD_CLASSES} animate-fade-in-up`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-p-blue-soft text-p-blue border border-p-blue/15 flex items-center justify-center mb-5 group-hover:bg-p-blue group-hover:text-paper transition-colors">
                  <Icon strokeWidth={1.75} className="w-6 h-6" />
                </div>
                <div className="font-heading text-[22px] font-semibold tracking-[-0.01em] leading-[1.15] mb-2 text-ink">
                  {b.title}
                </div>
                <p className="text-[14px] text-ink-3 leading-[1.55] mb-5 [hyphens:auto] break-words">
                  {b.desc}
                </p>
                <ul className="mt-auto space-y-1.5 mb-5">
                  {b.docs.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-[13px] text-ink-4">
                      <span className="text-p-orange mt-0.5">•</span>
                      <span className="[hyphens:auto] break-words">{d}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-p-blue group-hover:text-p-blue-2 group-hover:gap-2 transition-all">
                  Mehr erfahren
                  <ArrowRight strokeWidth={2} className="w-3.5 h-3.5" />
                </span>
              </Link>
            )
          })}

          <DemoButton
            variant="primary"
            className="relative flex flex-col min-h-[280px] rounded-[20px] p-7 border border-p-orange/20 hover:-translate-y-1 hover:border-p-orange/40 transition-all group text-left overflow-hidden animate-fade-in-up"
          >
            <div
              className="absolute inset-0 -z-10"
              style={{ background: "linear-gradient(135deg, #FEE4D1 0%, #FBE4C9 100%)" }}
            />
            <div className="w-12 h-12 rounded-xl bg-p-orange text-paper border border-p-orange/25 flex items-center justify-center mb-5 shadow-[0_10px_20px_-10px_rgba(194,65,12,0.6)]">
              <Sparkles strokeWidth={1.75} className="w-6 h-6" />
            </div>
            <div className="font-heading text-[22px] font-semibold tracking-[-0.01em] leading-[1.15] mb-2 text-ink">
              Ihr Anwendungsfall
            </div>
            <p className="text-[14px] text-ink-3 leading-[1.55] mb-5 [hyphens:auto] break-words">
              Jedes Dokument. Jedes Feld. Wir passen es für Sie an.
            </p>
            <span className="mt-auto inline-flex items-center gap-1 text-[13px] font-semibold text-p-orange group-hover:text-p-orange-glow group-hover:gap-2 transition-all">
              Use Case besprechen
              <ArrowRight strokeWidth={2} className="w-3.5 h-3.5" />
            </span>
          </DemoButton>
        </div>
      </div>
    </section>
  )
}
