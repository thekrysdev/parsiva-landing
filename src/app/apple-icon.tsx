import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0E1A",
          borderRadius: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            fontSize: 130,
            fontWeight: 600,
            color: "#FBFAF7",
            letterSpacing: "-3px",
            lineHeight: 1,
            marginTop: -8,
          }}
        >
          P
        </div>
        <div
          style={{
            position: "absolute",
            width: 22,
            height: 22,
            borderRadius: 11,
            background: "#C2410C",
            bottom: 36,
            right: 42,
          }}
        />
      </div>
    ),
    { ...size },
  )
}
