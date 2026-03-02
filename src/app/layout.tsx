import type { Metadata } from "next";
import { Geist, Geist_Mono, Chakra_Petch } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Chakra_Petch({
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAST Micro | Risk Assessment & Security Testing",
  description: "Professional risk assessment and security testing services for businesses. Ensure your digital assets are secure with RAST Micro.",
  keywords: ["risk assessment", "security testing", "cybersecurity", "RAST Micro", "penetration testing", "vulnerability assessment"],
  authors: [{ name: "RAST Micro Team" }],
  openGraph: {
    title: "RAST Micro | Risk Assessment & Security Testing",
    description: "Expert security testing and risk assessment for modern businesses.",
    url: "https://rast-micro.vercel.app", // Placeholder
    siteName: "RAST Micro",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${display.variable}`}>
        <header className="topbar">
          <div className="container topbar__inner">
            <div className="logo">RAST<span>MICRO</span></div>
            <nav className="nav">
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">Why Us</a>
              <a href="#contact">Engage</a>
            </nav>
            <a href="#contact" className="button button-primary button-compact">
              Engage Ops
            </a>
          </div>
        </header>
        {children}
        <footer>
          <div className="container footer">
            <div>
              <div className="logo">RAST<span>MICRO</span></div>
                <p>© {new Date().getFullYear()} RAST Micro. Siege-grade security for hostile networks.</p>
            </div>
            <div className="footer__links">
              <a href="#services">Services</a>
              <a href="#about">Why Us</a>
              <a href="mailto:info@rastmicro.com">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
