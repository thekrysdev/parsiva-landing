import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import FAQ from "@/components/FAQ"
import DemoButton from "@/components/DemoButton"

export type DocumentType = { name: string; fields: string[] }
export type FaqItem = { q: string; a: string }

export type IndustryPageProps = {
  slug: string
  eyebrow: string
  accentColor: string
  hero: {
    headlineStart: string
    headlineItalic: string
    headlineEnd?: string
    subline: string
    cta: string
  }
  pains: string[]
  documentTypes: DocumentType[]
  usp: React.ReactNode
  faqs: FaqItem[]
  cta: { title: string; italic: string; body: string; button: string }
}

export default function IndustryPage({
  slug,
  eyebrow,
  accentColor,
  hero,
  pains,
  documentTypes,
  usp,
  faqs,
  cta,
}: IndustryPageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Parsiva", item: "https://parsiva.de" },
          { "@type": "ListItem", position: 2, name: eyebrow, item: `https://parsiva.de/${slug}` },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: `Parsiva — ${eyebrow}`,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: hero.subline,
        url: `https://parsiva.de/${slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main>
        <section className="pt-36 pb-20 px-6 md:px-8 relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1600px] h-[600px] pointer-events-none"
            style={{ background: `radial-gradient(ellipse at center, ${accentColor}10, transparent 60%)` }}
          />
          <div className="max-w-[1280px] mx-auto relative">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper-2 border border-line text-xs font-medium text-ink-3 mb-8">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor }} />
              Für {eyebrow}
            </div>
            <h1
              className="font-heading font-medium leading-[0.98] tracking-[-0.03em] max-w-[900px] mb-6 text-ink"
              style={{ fontSize: "clamp(40px, 6vw, 76px)", fontVariationSettings: '"opsz" 96' }}
            >
              {hero.headlineStart}{" "}
              <em className="italic font-normal" style={{ color: accentColor }}>{hero.headlineItalic}</em>
              {hero.headlineEnd ? ` ${hero.headlineEnd}` : null}
            </h1>
            <p className="text-xl text-ink-3 leading-[1.5] max-w-[720px] mb-10 font-normal">
              {hero.subline}
            </p>
            <DemoButton variant="primary">{hero.cta}</DemoButton>
          </div>
        </section>

        <section className="px-6 md:px-8 py-20 bg-paper-2">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[720px] mx-auto text-center mb-14">
              <div className="text-xs font-semibold uppercase tracking-[2px] mb-4" style={{ color: accentColor }}>
                Die Realität heute
              </div>
              <h2 className="font-heading font-medium leading-[1.1] tracking-[-0.025em] text-ink" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                Was gerade in Ihrem Alltag schiefgeht.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pains.map((p) => (
                <div key={p} className="p-6 rounded-[16px] bg-paper border border-line-2 flex items-start gap-3">
                  <span className="text-p-red font-bold mt-0.5 shrink-0">−</span>
                  <span className="text-[15px] text-ink-2 leading-[1.55] [hyphens:auto] break-words">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-8 py-28">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[720px] mx-auto text-center mb-[72px]">
              <div className="text-xs font-semibold uppercase tracking-[2px] mb-4" style={{ color: accentColor }}>
                Dokumenttypen
              </div>
              <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                Was Parsiva für Sie ausliest.
              </h2>
              <p className="text-lg text-ink-3 leading-[1.5]">
                Pro Dokumenttyp konfigurieren wir exakt die Felder, die in Ihren Workflow müssen.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documentTypes.map((d) => (
                <div key={d.name} className="p-7 rounded-[20px] bg-paper border border-line-2">
                  <div className="font-heading text-lg font-semibold text-ink mb-3 tracking-[-0.01em]">{d.name}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {d.fields.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center text-[12px] font-mono px-2.5 py-1 rounded-md bg-paper-2 text-ink-3 border border-line-2"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {usp}

        <FAQ
          faqs={faqs}
          eyebrow={`FAQ · ${eyebrow}`}
          titleStart="Ihre Fragen,"
          titleEnd="direkt beantwortet."
        />

        <section className="pt-20 pb-0">
          <div className="max-w-[1216px] mx-6 lg:mx-auto bg-ink text-paper rounded-[20px] px-8 md:px-12 py-20 text-center relative overflow-hidden mb-20">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse at top, ${accentColor}40, transparent 60%)` }}
            />
            <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-paper mb-4 relative" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
              {cta.title} <em className="italic font-normal" style={{ color: accentColor }}>{cta.italic}</em>
            </h2>
            <p className="text-lg text-ink-5 max-w-[620px] mx-auto mb-10 relative [hyphens:auto] break-words">
              {cta.body}
            </p>
            <div className="relative">
              <DemoButton variant="primary">{cta.button}</DemoButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
