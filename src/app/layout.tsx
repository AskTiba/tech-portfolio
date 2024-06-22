// layout.tsx
import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import React from "react";
import ClientProvider from "./ClientProvider"; // Adjust this import to your actual path

const overpass = Overpass({
  weight: ["500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={overpass.className}>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
