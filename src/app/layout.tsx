import type { Metadata } from "next";
import Aspekta from "next/font/local";
import Aspekta800 from "next/font/local";
import "./globals.css";

const aspekta = Aspekta({
  src: './Fonts/Aspekta-500.otf',
  variable: "--font-aspekta",
});


const aspekta800 = Aspekta800({
  src: './Fonts/Aspekta-800.otf',
  variable: "--font-aspekta800",
});

export const metadata: Metadata = {
  title: "STROY",
  description: "Creative Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aspekta.variable} ${aspekta800.variable}  font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
