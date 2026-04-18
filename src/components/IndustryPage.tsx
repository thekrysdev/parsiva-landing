import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import FAQ from "@/components/FAQ"
import DemoButton from "@/components/DemoButton"
import TrustProofBar from "@/components/TrustProofBar"
import BenefitCards, { type Benefit } from "@/components/BenefitCards"
import ProcessFlow, { type ProcessStep } from "@/components/ProcessFlow"
import IndustryHeroVisual, { type HeroVisualVariant } from "@/components/IndustryHeroVisual"

export type DocumentType = { name: string; fields: string[] }
export type FaqItem = { q: string; a: string }
export type Pain = { icon: string; title: string; body: string }

export type IndustryPageProps = {
  slug: string
  eyebrow: string
  accentBgColor: string
  hero: {
    headlineStart: string
    headlineItalic: string
    headlineEnd?: string
    subline: string
    cta: string
    proofPoints: string[]
    visualVariant: HeroVisualVariant
  }
  benefits: Benefit[]
  pains: Pain[]
  documentTypes: DocumentType[]
  usp: React.ReactNode
  processSteps: ProcessStep[]
  faqs: FaqItem[]
  cta: { proofPoint: string; title: string; italic: string; body: string; button: string }
}

export default function IndustryPage({
  slug,
  eyebrow,
  accentBgColor,
  hero,
  benefits,
  pains,
  documentTypes,
  usp,
  processSteps,
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
      <div style={{ backgroundColor: accentBgColor }}>
        <main>
          <section className="pt-32 md:pt-36 pb-20 md:pb-24 px-6 md:px-8 relative overflow-hidden">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[1600px] h-[600px] pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(30, 58, 138, 0.05), transparent 60%)" }}
            />
            <div className="max-w-[1280px] mx-auto relative">
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper-2 border border-line text-xs font-medium text-ink-3 mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-p-blue" />
                    Für {eyebrow}
                  </div>
                  <h1
                    className="font-heading font-medium leading-[1.0] tracking-[-0.03em] max-w-[640px] mb-6 text-ink"
                    style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontVariationSettings: '"opsz" 96' }}
                  >
                    {hero.headlineStart}{" "}
                    <em className="italic font-normal text-p-blue">{hero.headlineItalic}</em>
                    {hero.headlineEnd ? ` ${hero.headlineEnd}` : null}
                  </h1>
                  <p className="text-lg md:text-xl text-ink-3 leading-[1.5] max-w-[620px] mb-8 font-normal [hyphens:auto] break-words">
                    {hero.subline}
                  </p>
                  <div className="mb-8">
                    <DemoButton variant="primary">{hero.cta}</DemoButton>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 text-[13px] text-ink-4">
                    {hero.proofPoints.map((p) => (
                      <div key={p} className="flex items-center gap-2">
                        <span className="text-p-green">✓</span>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="order-last lg:order-none">
                  <IndustryHeroVisual variant={hero.visualVariant} />
                </div>
              </div>
            </div>
          </section>

          <TrustProofBar />

          <BenefitCards items={benefits} eyebrow={`Für ${eyebrow}`} />

          <section className="px-6 md:px-8 py-24 bg-paper-2">
            <div className="max-w-[1280px] mx-auto">
              <div className="max-w-[720px] mx-auto text-center mb-14">
                <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">
                  Die Realität heute
                </div>
                <h2 className="font-heading font-medium leading-[1.1] tracking-[-0.025em] text-ink" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                  Was gerade in Ihrem Alltag <em className="italic font-normal text-p-blue">schiefgeht.</em>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pains.map((p) => (
                  <div
                    key={p.title}
                    className="relative p-7 rounded-[16px] bg-paper border border-line-2 overflow-hidden"
                  >
                    <div className="absolute left-0 top-7 bottom-7 w-1 rounded-r bg-p-orange" />
                    <div className="text-[28px] mb-3">{p.icon}</div>
                    <h3 className="font-heading text-[22px] font-semibold text-ink mb-2 tracking-[-0.01em] leading-[1.2] [hyphens:auto] break-words">
                      {p.title}
                    </h3>
                    <p className="text-[15px] text-ink-3 leading-[1.55] [hyphens:auto] break-words">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 md:px-8 py-24">
            <div className="max-w-[1280px] mx-auto">
              <div className="max-w-[720px] mx-auto text-center mb-14">
                <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">
                  Dokumenttypen
                </div>
                <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                  Was Parsiva für Sie <em className="italic font-normal text-p-blue">ausliest.</em>
                </h2>
                <p className="text-lg text-ink-3 leading-[1.5]">
                  Pro Dokumenttyp konfigurieren wir exakt die Felder, die in Ihren Workflow müssen.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documentTypes.map((d) => (
                  <div
                    key={d.name}
                    className="p-7 rounded-[20px] bg-paper border border-line-2 hover:border-p-blue/30 transition-colors"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="shrink-0 w-12 h-14 rounded-md bg-paper-2 border border-line flex flex-col items-center justify-center gap-0.5 p-1.5">
                        <div className="w-full h-0.5 bg-ink-5 rounded" />
                        <div className="w-3/4 h-0.5 bg-ink-5 rounded" />
                        <div className="w-full h-0.5 bg-ink-5 rounded" />
                        <div className="w-1/2 h-0.5 bg-p-orange rounded" />
                      </div>
                      <div className="font-heading text-[20px] font-semibold text-ink tracking-[-0.01em] leading-[1.2] [hyphens:auto] break-words">
                        {d.name}
                      </div>
                    </div>
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

          <ProcessFlow
            steps={processSteps}
            eyebrow="Ablauf"
            titleStart="In vier Schritten"
            titleItalic="vom Papier zur Datei."
          />

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
                style={{ background: "radial-gradient(ellipse at top, rgba(30,58,138,0.3), transparent 60%)" }}
              />
              <p className="text-[13px] italic text-paper/60 mb-5 relative max-w-[720px] mx-auto [hyphens:auto] break-words">
                {cta.proofPoint}
              </p>
              <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-paper mb-4 relative" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
                {cta.title} <em className="italic font-normal text-[#FCA55C]">{cta.italic}</em>
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
      </div>
      <Footer />
    </>
  )
}
