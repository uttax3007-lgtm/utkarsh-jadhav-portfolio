import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Utkarsh Jadhav — Developer & Builder",
  description:
    "The portfolio of Utkarsh Jadhav — an IT student exploring software, the web, and practical AI.",
  applicationName: "Utkarsh Jadhav Portfolio",
  openGraph: {
    title: "Utkarsh Jadhav — Developer & Builder",
    description: "A collection of things I build, learn, and care about.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f3ef",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}