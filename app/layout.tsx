import type { Metadata } from "next";
import { Khand, Inter } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import NightGlow from "./components/NightGlow";
import "./globals.css";

const display = Khand({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const body = Inter({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://quick-stop.vercel.app"),
  title: "Quick Stop · The corner that never misses · Main St, Orange NJ",
  description:
    "The neighborhood corner store on Main Street, Orange NJ. Coffee, cold drinks, snacks, lotto, ATM, groceries and gas. Open 6 AM to 9 PM, every day. Recently remodeled.",
  openGraph: {
    title: "Quick Stop · Main St, Orange NJ",
    description:
      "Everything you need on your daily routine. Coffee, lotto, ATM, cold drinks, groceries and gas. Open 6 AM to 9 PM.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable} antialiased`}
    >
      <body className="bg-night text-chalk min-h-screen night-grain">
        <NightGlow />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ConvenienceStore",
              name: "Quick Stop",
              address: {
                "@type": "PostalAddress",
                streetAddress: "323 Main St",
                addressLocality: "Orange",
                addressRegion: "NJ",
                postalCode: "07050",
                addressCountry: "US",
              },
              telephone: "+1-973-677-3699",
              openingHours: "Mo-Su 06:00-21:00",
              url: "https://quick-stop.vercel.app",
            }),
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
