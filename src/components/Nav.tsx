import DemoButton from "@/components/DemoButton"

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-paper/85 backdrop-blur-xl border-b border-line-2">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-8 py-4">
        <a href="/" className="font-heading text-2xl font-semibold tracking-tight text-ink leading-none">
          Parsiva<span className="text-p-orange">.</span>
        </a>
        <div className="flex items-center gap-8">
          <a href="#problem" className="hidden md:inline text-sm font-medium text-ink-3 hover:text-ink transition-colors">Problem</a>
          <a href="#rechner" className="hidden md:inline text-sm font-medium text-ink-3 hover:text-ink transition-colors">Kostenrechner</a>
          <a href="#branchen" className="hidden md:inline text-sm font-medium text-ink-3 hover:text-ink transition-colors">Branchen</a>
          <a href="#nachtrag" className="hidden md:inline text-sm font-medium text-ink-3 hover:text-ink transition-colors">Nachträge</a>
          <a href="#ablauf" className="hidden md:inline text-sm font-medium text-ink-3 hover:text-ink transition-colors">Ablauf</a>
          <DemoButton variant="ghost">Demo vereinbaren</DemoButton>
        </div>
      </div>
    </nav>
  )
}
