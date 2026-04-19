import type { Metadata, Viewport } from "next";

import "./globals.css";
import PWARegister from "./components/pwa-register";

export const metadata: Metadata = {
  title: "Network Capital",
  description: "Professional networking and knowledge-sharing platform.",
  applicationName: "Network Capital",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Network Capital"
  }
};

export const viewport: Viewport = {
  themeColor: "#0f172a"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
