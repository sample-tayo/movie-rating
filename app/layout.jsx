"use client";
import { MovieProvider } from "./context/MovieContext";
import "./globals.css";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <MovieProvider>
        <body className={dmSans.className}>{children}</body>
      </MovieProvider>
    </html>
  );
}