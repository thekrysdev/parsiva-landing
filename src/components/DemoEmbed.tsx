"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

export default function DemoEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "demo-inline" })
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
    <div className="rounded-lg overflow-hidden border border-line-2 bg-paper">
      <Cal
        namespace="demo-inline"
        calLink="parsiva/demo"
        calOrigin="https://cal.eu"
        style={{ width: "100%", height: "700px" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  )
}
