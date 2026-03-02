import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, margin: '1rem', padding: '1rem' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', letterSpacing: '1px' }}>
              RAST<span style={{ color: '#fff' }}>MICRO</span>
            </div>
            <nav style={{ display: 'flex', gap: '2rem' }}>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>
        {children}
        <footer>
          <div className="container">
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>RAST MICRO</div>
            <p>© {new Date().getFullYear()} RAST Micro. All rights reserved.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem' }}>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="mailto:info@rastmicro.com">Email Us</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
