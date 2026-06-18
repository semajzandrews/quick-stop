import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(150deg, #8E3B8E, #1C1026)",
          color: "#F4EEF6",
          fontSize: 34,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: -2,
        }}
      >
        Q<span style={{ color: "#E879E8" }}>S</span>
      </div>
    ),
    { ...size }
  );
}
