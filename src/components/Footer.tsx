export default function Footer() {
  return (
    <footer className="px-8 py-12 border-t border-line-2">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center flex-wrap gap-4 text-[13px] text-ink-4">
        <div>© 2026 Parsiva</div>
        <div className="flex gap-6">
          <a href="/impressum" className="text-ink-4 hover:text-ink transition-colors">Impressum</a>
          <a href="/datenschutz" className="text-ink-4 hover:text-ink transition-colors">Datenschutz</a>
          <a href="mailto:info@parsiva.de" className="text-ink-4 hover:text-ink transition-colors">info@parsiva.de</a>
        </div>
      </div>
    </footer>
  )
}
