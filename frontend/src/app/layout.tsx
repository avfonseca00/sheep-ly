import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sheep-ly | Url Shortener",
  description: "Shorten your URL and share with friends",
  openGraph: {
    title: 'Sheep-ly',
    description: 'The easier URL Shortener in the web',
    url: 'https://sheep-ly.vercel.app',
    siteName: 'Sheep-ly',
    images: [
      {
        url: 'https://sheep-ly.vercel.app/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
