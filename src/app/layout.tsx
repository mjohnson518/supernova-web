import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "Supernova",
  description: "A next-generation PoW blockchain built for tomorrow's challenges",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon"
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gray-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
