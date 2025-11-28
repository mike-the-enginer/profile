import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mike G. | (SRE & Dev/AI/Sec Ops) Architect",
  description: "SRE & (Dev/AI/Sec Ops) Portfolio - Architectural Maturity & Operational Excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceCodePro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
