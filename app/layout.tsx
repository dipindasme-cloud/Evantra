import type { Metadata } from "next";
import "./globals.css";
import AmbientBackground from "@/components/ui/AmbientBackground";

export const metadata: Metadata = {
  title: "Evantra",
  description: "Luxury automotive experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white overflow-x-hidden">
        {/* Background layer, z-index -10 - no layout changes here */}
        <div className="fixed inset-0 z-0">
          <AmbientBackground />
        </div>

        {/* Main content wrapper, z-index 10 - layout only */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}