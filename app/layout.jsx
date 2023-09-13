"use client";
import { MovieProvider } from "./context/MovieContext";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { metadata } from "./metadata";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <MovieProvider>
        <head>
          <title>{metadata.title}</title>
          <meta name='description' content={metadata.description} />
        </head>
        <body className={dmSans.className}>{children}</body>
      </MovieProvider>
    </html>
  );
}
