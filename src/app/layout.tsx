import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habeeb & Riza | 28 November 2026",
  description:
    "Join Habeebul Rahiman and Riza Sajil for their Nikah on 28 November 2026 at 10:30 AM, followed by a reception at Hajmus Convention Centre, Taliparamba.",
  openGraph: {
    title: "You're invited · Habeeb & Riza",
    description: "28 November 2026 · Nikah 10:30 AM · Reception 12–2 PM · Hajmus Convention Centre, Taliparamba.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
