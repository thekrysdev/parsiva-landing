"use client"

import { useEffect, useState } from "react"
import DemoButton from "@/components/DemoButton"

const NAV_LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#rechner", label: "Kostenrechner" },
  { href: "#branchen", label: "Branchen" },
  { href: "#nachtrag", label: "Nachträge" },
  { href: "#ablauf", label: "Ablauf" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

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
        <a
          href="/"
          className="font-heading text-2xl font-semibold tracking-tight text-ink leading-none relative z-10"
          onClick={() => setOpen(false)}
        >
          Parsiva<span className="text-p-orange">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-ink-3 hover:text-ink transition-colors">
              {link.label}
            </a>
          ))}
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
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-ink-2 hover:text-p-orange py-3 border-b border-line-2 last:border-b-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
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
