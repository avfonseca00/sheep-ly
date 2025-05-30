import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@components/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sheep-ly | Url Shortener",
  description: "Shorten your URL and share with friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased`}
      >
        <Header/>
        <main className="flex flex-col gap-16 items-center w-full">
          <div className="flex flex-col items-center w-full lg:max-w-5xl xl:max-w-7xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
