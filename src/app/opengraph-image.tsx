import { ImageResponse } from "next/og"

export const alt = "Parsiva — Ihre Dokumente lesen sich selbst"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FBFAF7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          position: "relative",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1000px",
            height: "600px",
            background: "radial-gradient(ellipse at center, rgba(30, 58, 138, 0.06), transparent 70%)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "baseline", fontSize: 44, fontWeight: 600, color: "#0A0E1A", letterSpacing: "-1.5px" }}>
            Parsiva
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#C2410C", marginLeft: 4, display: "flex" }} />
          </div>
          <div style={{ display: "flex", alignItems: "center", fontFamily: "system-ui, -apple-system, sans-serif", fontSize: 16, fontWeight: 500, color: "#6B7489", letterSpacing: "0.5px", textTransform: "uppercase" }}>
            <div style={{ width: 8, height: 8, borderRadius: 4, background: "#15803D", marginRight: 10, display: "flex" }} />
            Server in Frankfurt · DSGVO
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", position: "relative", marginTop: "40px" }}>
          <div style={{ fontSize: 108, fontWeight: 500, color: "#0A0E1A", letterSpacing: "-3.5px", lineHeight: 1, display: "flex", flexWrap: "wrap" }}>
            Ihre Dokumente
          </div>
          <div style={{ fontSize: 108, fontWeight: 500, color: "#0A0E1A", letterSpacing: "-3.5px", lineHeight: 1, marginTop: 8, display: "flex", flexWrap: "wrap" }}>
            lesen sich{" "}
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "#1E3A8A", marginLeft: 20 }}>selbst.</span>
          </div>
          <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: 26, fontWeight: 400, color: "#3A4259", marginTop: 32, lineHeight: 1.4, display: "flex", maxWidth: "900px" }}>
            KI-Dokumentenverarbeitung — maßgeschneidert für den deutschen Mittelstand.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", position: "relative", paddingTop: "32px", borderTop: "1px solid #DDD8CC" }}>
          <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: 22, fontWeight: 500, color: "#6B7489", letterSpacing: "-0.3px", display: "flex" }}>
            parsiva.de
          </div>
          <div style={{ display: "flex", gap: "28px", fontFamily: "system-ui, -apple-system, sans-serif", fontSize: 15, fontWeight: 500, color: "#6B7489", letterSpacing: "0.3px", textTransform: "uppercase" }}>
            <div style={{ display: "flex" }}>180+ Felder</div>
            <div style={{ display: "flex", color: "#DDD8CC" }}>·</div>
            <div style={{ display: "flex" }}>Unter 60 Sek.</div>
            <div style={{ display: "flex", color: "#DDD8CC" }}>·</div>
            <div style={{ display: "flex" }}>Nachtrag-Delta</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
