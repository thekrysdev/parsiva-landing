export default function BentoBranchen() {
  return (
    <section id="branchen" className="px-8 py-28 bg-paper-2">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center mb-[72px]">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-p-orange mb-4">Branchen</div>
          <h2 className="font-heading font-medium leading-[1.05] tracking-[-0.025em] text-ink mb-5" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
            Eine Technologie.
            <br />
            <em className="italic font-normal text-p-blue">Jedes Dokument.</em>
          </h2>
          <p className="text-lg text-ink-3 leading-[1.5]">Parsiva wird für jeden Kunden individuell konfiguriert — auf Ihre Dokumenttypen, Ihre Felder, Ihre Prozesse.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[200px] gap-4">
          {/* Main card — Immobilien */}
          <div className="md:col-span-3 md:row-span-2 rounded-[20px] p-7 bg-ink text-paper flex flex-col justify-between hover:-translate-y-1 transition-all cursor-pointer">
            <div>
              <div className="text-[28px] mb-auto text-[#FCA55C]">🏢</div>
              <div className="font-heading text-[22px] font-semibold tracking-[-0.01em] leading-[1.1] mt-auto mb-1.5 text-paper">Immobilien & Hausverwaltung</div>
              <div className="text-[13px] text-ink-5 leading-[1.5]">Gewerbemietverträge mit Optionen, Indexklauseln, Nachträgen und Mietsicherheiten. Der anspruchsvollste Use-Case — und unser Ursprung.</div>
            </div>
            <div className="bg-white/5 rounded-[10px] p-4 font-mono text-[11px] text-ink-5 leading-[1.8] mt-5">
              <span className="text-[#4ADE80]">✓</span> Mietverträge (gewerblich &amp; privat)<br />
              <span className="text-[#4ADE80]">✓</span> Nachträge mit Delta-Review<br />
              <span className="text-[#4ADE80]">✓</span> Nebenkostenabrechnungen<br />
              <span className="text-[#4ADE80]">✓</span> Übergabeprotokolle
            </div>
          </div>

          <div className="md:col-span-3 rounded-[20px] p-7 bg-paper-2 border border-line-2 flex flex-col justify-between hover:-translate-y-1 transition-all cursor-pointer">
            <div className="text-[28px]">🧾</div>
            <div>
              <div className="font-heading text-[22px] font-semibold tracking-[-0.01em] leading-[1.1] mb-1.5">Steuerbüros & Buchhaltung</div>
              <div className="text-[13px] text-ink-4 leading-[1.5]">Rechnungen, Belege, Bescheide — direkt per API in DATEV oder Ihr System.</div>
            </div>
            <div className="pt-3.5 border-t border-line text-[11px] font-mono text-ink-5">Rechnungen · Belege · Steuerbescheide</div>
          </div>

          <div className="md:col-span-3 rounded-[20px] p-7 bg-p-blue-soft border border-p-blue/15 flex flex-col justify-between hover:-translate-y-1 transition-all cursor-pointer">
            <div className="text-[28px]">⚖️</div>
            <div>
              <div className="font-heading text-[22px] font-semibold tracking-[-0.01em] leading-[1.1] mb-1.5">Kanzleien & Rechtsabteilungen</div>
              <div className="text-[13px] text-ink-4 leading-[1.5]">Verträge analysieren, Klauseln erkennen, Fristen und Pflichten extrahieren.</div>
            </div>
            <div className="pt-3.5 border-t border-line text-[11px] font-mono text-ink-5">Verträge · Vollmachten · Schriftsätze</div>
          </div>

          <div className="md:col-span-2 rounded-[20px] p-7 bg-paper-2 border border-line-2 flex flex-col justify-between hover:-translate-y-1 transition-all cursor-pointer">
            <div className="text-[28px]">🔧</div>
            <div>
              <div className="font-heading text-[22px] font-semibold tracking-[-0.01em] leading-[1.1] mb-1.5">Handwerk & Technik</div>
              <div className="text-[13px] text-ink-4 leading-[1.5]">Angebote und Lieferscheine automatisch ins ERP.</div>
            </div>
          </div>

          <div className="md:col-span-2 rounded-[20px] p-7 bg-paper-2 border border-line-2 flex flex-col justify-between hover:-translate-y-1 transition-all cursor-pointer">
            <div className="text-[28px]">🚚</div>
            <div>
              <div className="font-heading text-[22px] font-semibold tracking-[-0.01em] leading-[1.1] mb-1.5">Logistik & Transport</div>
              <div className="text-[13px] text-ink-4 leading-[1.5]">Frachtbriefe, CMR, Zolldokumente — sekundenschnell.</div>
            </div>
          </div>

          <div
            className="md:col-span-2 rounded-[20px] p-7 border border-p-orange/15 flex flex-col justify-between hover:-translate-y-1 transition-all cursor-pointer"
            style={{ background: "linear-gradient(135deg, #FEE4D1 0%, #FBE4C9 100%)" }}
          >
            <div className="text-[28px]">✦</div>
            <div>
              <div className="font-heading text-[22px] font-semibold tracking-[-0.01em] leading-[1.1] mb-1.5">Ihr Anwendungsfall</div>
              <div className="text-[13px] text-ink-4 leading-[1.5]">Jedes Dokument. Jedes Feld. Wir passen es an.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
