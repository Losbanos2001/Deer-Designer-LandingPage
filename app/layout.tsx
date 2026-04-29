import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deer Designer",
  description: "Custom Design Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
