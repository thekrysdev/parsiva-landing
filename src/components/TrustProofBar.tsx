const ITEMS = [
  { icon: "🇩🇪", label: "Server in Frankfurt" },
  { icon: "🛡️", label: "DSGVO-konform" },
  { icon: "🔐", label: "AES-256 verschlüsselt" },
  { icon: "🧠", label: "Kein KI-Training" },
]

export default function TrustProofBar() {
  return (
    <section className="bg-ink text-paper">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-6 items-center">
          {ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 text-[13px] md:text-sm">
              <span className="text-base shrink-0">{item.icon}</span>
              <span className="font-medium text-ink-5">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
