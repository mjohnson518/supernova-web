import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import '../../styles/globals.scss';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

export const viewport: Viewport = {
  themeColor: '#4D84FF',
};

export const metadata: Metadata = {
  title: "Supernova",
  description: "A next-generation PoW blockchain built for tomorrow's challenges",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: { url: '/favicon.svg', type: 'image/svg+xml' },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-gray-900 text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
