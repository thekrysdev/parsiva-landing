import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import ProofStrip from "@/components/ProofStrip"
import PainSplit from "@/components/PainSplit"
import ROICalculator from "@/components/ROICalculator"
import BentoBranchen from "@/components/BentoBranchen"
import NachtragDelta from "@/components/NachtragDelta"
import CompareTable from "@/components/CompareTable"
import Process from "@/components/Process"
import PricingPhilosophy from "@/components/PricingPhilosophy"
import Security from "@/components/Security"
import FAQ from "@/components/FAQ"
import FinalCTA from "@/components/FinalCTA"
import MadeInGermany from "@/components/MadeInGermany"
import Footer from "@/components/Footer"

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Parsiva",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "KI-gestützte Dokumentenverarbeitung für deutsche Unternehmen. Maßgeschneidert, DSGVO-konform, Server in Frankfurt.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Was macht Parsiva konkret?", acceptedAnswer: { "@type": "Answer", text: "Parsiva liest Dokumente aus und gibt die Daten strukturiert zurück — als Excel, CSV, JSON oder direkt per API in Ihr System." } },
        { "@type": "Question", name: "Was unterscheidet Parsiva von anderen OCR-Tools?", acceptedAnswer: { "@type": "Answer", text: "Jeder Kunde bekommt einen individuellen Agent, maßgeschneidert auf seine Dokumente und Felder. Plus die einzigartige Nachtrag-Delta-Funktion." } },
        { "@type": "Question", name: "Kann ich das nicht einfach mit ChatGPT machen?", acceptedAnswer: { "@type": "Answer", text: "ChatGPT extrahiert keine strukturierten Daten in Ihre Felder. Parsiva automatisiert den Prozess komplett." } },
        { "@type": "Question", name: "Ist Parsiva DSGVO-konform?", acceptedAnswer: { "@type": "Answer", text: "Ja. Server in Deutschland, AVV nach Art. 28 DSGVO. Daten werden nie zum KI-Training verwendet." } },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <PainSplit />
        <ROICalculator />
        <BentoBranchen />
        <NachtragDelta />
        <CompareTable />
        <Process />
        <PricingPhilosophy />
        <Security />
        <FAQ />
        <FinalCTA />
        <MadeInGermany />
      </main>
      <Footer />
    </>
  )
}
