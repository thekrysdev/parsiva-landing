"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect, useState } from "react"

type Variant = "primary" | "secondary" | "ghost"

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "inline-flex items-center gap-1.5 font-semibold text-[15px] px-6 py-3.5 rounded-lg bg-p-orange text-paper hover:bg-p-orange-glow hover:-translate-y-px transition-all",
  secondary:
    "inline-flex items-center gap-1.5 font-semibold text-[15px] px-6 py-3.5 rounded-lg bg-p-blue text-paper hover:bg-p-blue-2 hover:-translate-y-px transition-all",
  ghost:
    "inline-flex items-center font-semibold text-sm text-ink hover:text-p-orange underline underline-offset-4 decoration-1 transition-colors",
}

export default function DemoButton({
  variant = "primary",
  children,
  className,
}: {
  variant?: Variant
  children: React.ReactNode
  className?: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className ?? VARIANT_CLASSES[variant]}
      >
        {children}
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Demo buchen"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[100] flex items-stretch md:items-center justify-center bg-[rgba(10,14,26,0.7)] backdrop-blur-sm md:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-paper w-full md:max-w-[900px] md:max-h-[90vh] md:min-h-[700px] md:rounded-lg flex flex-col overflow-hidden shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Schließen"
              className="absolute top-3 right-3 z-10 w-9 h-9 inline-flex items-center justify-center rounded-full text-ink-4 hover:text-p-orange hover:bg-paper-2 transition-colors text-xl leading-none"
            >
              ×
            </button>
            <div className="flex-1 min-h-0 overflow-hidden p-4 md:p-6 pt-12 md:pt-10">
              <DemoModalContent />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function DemoModalContent() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "demo" })
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#1E3A8A" },
          dark: { "cal-brand": "#1E3A8A" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  return (
    <Cal
      namespace="demo"
      calLink="parsiva/demo"
      calOrigin="https://cal.eu"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  )
}
