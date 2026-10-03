import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

/* Type system, matched to whizzo.com:
   - Montserrat — headings, nav, buttons, labels
   - Lato       — body copy */

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://whizzowow.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WhizzoWow",
    template: "%s",
  },
  description:
    "WhizzoWow — recycled fibre and yarn sourcing for spinning mills, exporters and buying houses.",
  openGraph: {
    siteName: "WhizzoWow",
    type: "website",
    locale: "en",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lato.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
