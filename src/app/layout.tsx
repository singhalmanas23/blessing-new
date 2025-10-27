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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro" rel="stylesheet" />
      </head>
      <body className={`${crimsonText.variable} ${instrumentSerif.variable} ${dmSans.variable} bg-[#131416] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
