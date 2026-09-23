"use client";

import { Cormorant_Garamond, Jost } from "next/font/google";
import ErrorView from "@/components/ErrorView";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="bg-[#0a0a0a] text-[#f5f0e8] font-body antialiased min-h-screen">
        <main>
          <ErrorView error={error} reset={reset} statusCode={500} />
        </main>
      </body>
    </html>
  );
}
