import type { Metadata } from "next";
import { Crimson_Text, Instrument_Serif, DM_Sans } from "next/font/google";
import "./globals.css";

const crimsonText = Crimson_Text({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-crimson-text',
});

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
});

const dmSans = DM_Sans({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: "Blessing SoftTech - Professional IT Services",
  description: "Innovating with Purpose and Vision - Global Technology Partner trusted by enterprises worldwide",
  keywords: "IT services, software development, digital transformation, technology consulting, global technology partner",
  authors: [{ name: "Blessing SoftTech" }],
  creator: "Blessing SoftTech",
  publisher: "Blessing SoftTech",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  themeColor: "#131416",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blessingsofttech.com",
    title: "Blessing SoftTech - Professional IT Services",
    description: "Innovating with Purpose and Vision - Global Technology Partner trusted by enterprises worldwide",
    siteName: "Blessing SoftTech",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1920,
        height: 1080,
        alt: "Blessing SoftTech - Professional IT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blessing SoftTech - Professional IT Services",
    description: "Innovating with Purpose and Vision - Global Technology Partner trusted by enterprises worldwide",
    images: ["/images/hero-bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro" 
          rel="stylesheet"
        />
        <link rel="preload" href="/images/hero-bg.png" as="image" />
        <link rel="dns-prefetch" href="https://fonts.cdnfonts.com" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body 
        className={`
          ${crimsonText.variable} 
          ${instrumentSerif.variable} 
          ${dmSans.variable} 
          bg-[#131416] 
          text-white 
          antialiased 
          overflow-x-hidden
        `.replace(/\s+/g, ' ').trim()}
        suppressHydrationWarning
      >
        <noscript>
          <div style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            backgroundColor: '#131416', 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontSize: '18px', 
            textAlign: 'center', 
            padding: '20px' 
          }}>
            This website requires JavaScript to function properly. Please enable JavaScript in your browser.
          </div>
        </noscript>
        {children}
      </body>
    </html>
  );
}
