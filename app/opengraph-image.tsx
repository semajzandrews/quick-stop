import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Quick Stop · The corner that never misses · Main St, Orange NJ";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px 80px",
          background:
            "radial-gradient(120% 90% at 0% 0%, #3a1240 0%, #0B0710 55%)",
          color: "#F4EEF6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, letterSpacing: 6, color: "#E879E8", textTransform: "uppercase" }}>
          Main Street · Orange, NJ
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 24, fontSize: 104, fontWeight: 800, lineHeight: 0.95, textTransform: "uppercase" }}>
          <span>The corner that</span>
          <span>never <span style={{ color: "#E879E8" }}>misses.</span></span>
        </div>
        <div style={{ display: "flex", gap: 24, marginTop: 40, fontSize: 28, color: "#CDBFD3" }}>
          Coffee · Lotto · ATM · Snacks · Gas · Open 6 AM to 9 PM
        </div>
      </div>
    ),
    { ...size }
  );
}
