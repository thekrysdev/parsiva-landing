"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Building2, Wrench, Scale, Truck, Receipt } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import DemoButton from "@/components/DemoButton"

const NAV_LINKS = [
  { href: "/#problem", label: "Problem" },
  { href: "/#rechner", label: "Kostenrechner" },
  { href: "/#nachtrag", label: "Nachträge" },
  { href: "/#ablauf", label: "Ablauf" },
]

const INDUSTRIES: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/immobilien", label: "Immobilien & Hausverwaltung", icon: Building2 },
  { href: "/handwerk", label: "Handwerk & Technik", icon: Wrench },
  { href: "/kanzleien", label: "Kanzleien & Rechtsabteilungen", icon: Scale },
  { href: "/logistik", label: "Logistik & Transport", icon: Truck },
  { href: "/steuerberatung", label: "Steuerberatung & Buchhaltung", icon: Receipt },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [industriesOpenMobile, setIndustriesOpenMobile] = useState(false)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/85 backdrop-blur-xl border-b border-line-2">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-8 py-4">
        <Link
          href="/"
          className="font-heading text-2xl font-semibold tracking-tight text-ink leading-none relative z-10"
          onClick={() => setOpen(false)}
        >
          Parsiva<span className="text-p-orange">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-ink-3 hover:text-ink transition-colors">
              {link.label}
            </a>
          ))}

          <div className="relative group">
            <button
              type="button"
              className="text-sm font-medium text-ink-3 hover:text-ink transition-colors inline-flex items-center gap-1"
            >
              Branchen
              <svg className="w-3 h-3 transition-transform group-hover:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 5l3 3 3-3" />
              </svg>
            </button>
            <div className="absolute top-full right-0 pt-3 w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-paper rounded-xl border border-line-2 shadow-[0_20px_50px_-20px_rgba(10,14,26,0.2)] overflow-hidden">
                {INDUSTRIES.map((ind) => {
                  const Icon = ind.icon
                  return (
                    <a
                      key={ind.href}
                      href={ind.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-paper-2 transition-colors border-b border-line-2 last:border-b-0"
                    >
                      <span className="shrink-0 w-8 h-8 rounded-lg bg-p-blue-soft text-p-blue border border-p-blue/15 flex items-center justify-center">
                        <Icon strokeWidth={1.75} className="w-4 h-4" />
                      </span>
                      <span className="text-sm font-medium text-ink">{ind.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <DemoButton variant="ghost">Demo vereinbaren</DemoButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden relative z-10 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-paper-2 transition-colors"
        >
          <span className={`block w-5 h-[1.5px] bg-ink transition-all origin-center ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-ink transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-ink transition-all origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-paper border-t border-line-2 ${
          open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-ink-2 hover:text-p-orange py-3 border-b border-line-2 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={() => setIndustriesOpenMobile((v) => !v)}
            aria-expanded={industriesOpenMobile}
            className="flex items-center justify-between py-3 border-b border-line-2 text-base font-medium text-ink-2 hover:text-p-orange transition-colors text-left"
          >
            <span>Branchen</span>
            <svg
              className={`w-4 h-4 transition-transform ${industriesOpenMobile ? "rotate-180" : ""}`}
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 5l3 3 3-3" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
              industriesOpenMobile ? "max-h-[400px]" : "max-h-0"
            }`}
          >
            <div className="pt-1 pb-2 pl-2">
              {INDUSTRIES.map((ind) => {
                const Icon = ind.icon
                return (
                  <a
                    key={ind.href}
                    href={ind.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 py-2.5 text-[15px] font-medium text-ink-3 hover:text-p-orange transition-colors"
                  >
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-p-blue-soft text-p-blue border border-p-blue/15 flex items-center justify-center">
                      <Icon strokeWidth={1.75} className="w-3.5 h-3.5" />
                    </span>
                    <span>{ind.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="pt-5 mt-2 border-t border-line-2" onClick={() => setOpen(false)}>
            <DemoButton
              variant="primary"
              className="w-full inline-flex items-center justify-center gap-1.5 font-semibold text-[15px] px-6 py-3.5 rounded-lg bg-p-orange text-paper hover:bg-p-orange-glow transition-all"
            >
              Demo vereinbaren →
            </DemoButton>
          </div>
        </div>
      </div>
    </nav>
  )
}
