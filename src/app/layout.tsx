import type { Metadata } from "next"
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://parsiva.de"),
  title: {
    default: "Parsiva — Ihre Dokumente lesen sich selbst",
    template: "%s | Parsiva",
  },
  description:
    "Parsiva extrahiert automatisch alle Felder aus Ihren Dokumenten — Verträge, Rechnungen, Bescheide. Maßgeschneidert auf Ihr Unternehmen. Server in Deutschland.",
  keywords: [
    "Dokumentenverarbeitung",
    "IDP",
    "Intelligent Document Processing",
    "Vertragsautomatisierung",
    "Rechnungserfassung",
    "DSGVO",
    "Mietvertrag digitalisieren",
    "Nachtrag Vergleich",
  ],
  authors: [{ name: "Parsiva" }],
  openGraph: {
    title: "Parsiva — Ihre Dokumente lesen sich selbst",
    description:
      "Maßgeschneiderte KI-Dokumentenverarbeitung für den deutschen Mittelstand. DSGVO-konform. Server in Frankfurt.",
    url: "https://parsiva.de",
    siteName: "Parsiva",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://parsiva.de" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
