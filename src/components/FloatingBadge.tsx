import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"

type Variant = "orange" | "paper" | "ink"

const VARIANTS: Record<Variant, string> = {
  orange:
    "bg-p-orange text-paper shadow-[0_12px_30px_-8px_rgba(194,65,12,0.45)] border border-white/15",
  paper:
    "bg-paper text-ink border border-line-2 shadow-[0_14px_30px_-12px_rgba(10,14,26,0.18)]",
  ink:
    "bg-ink text-paper border border-white/10 shadow-[0_14px_30px_-12px_rgba(10,14,26,0.45)]",
}

export default function FloatingBadge({
  icon: Icon,
  children,
  variant = "orange",
  className = "",
  iconClassName = "",
  animation = "float",
}: {
  icon?: LucideIcon
  children: ReactNode
  variant?: Variant
  className?: string
  iconClassName?: string
  animation?: "float" | "float-delayed" | "none"
}) {
  const animClass =
    animation === "float"
      ? "animate-float"
      : animation === "float-delayed"
      ? "animate-float-delayed"
      : ""

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full font-medium text-[12px] leading-none ${VARIANTS[variant]} ${animClass} ${className}`}
    >
      {Icon ? <Icon strokeWidth={1.75} className={`w-4 h-4 shrink-0 ${iconClassName}`} /> : null}
      <span className="whitespace-nowrap">{children}</span>
    </div>
  )
}
