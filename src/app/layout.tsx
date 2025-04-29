import type { Metadata } from "next";
import '../../styles/globals.scss';

export const metadata: Metadata = {
  title: "Supernova",
  description: "A next-generation PoW blockchain built for tomorrow's challenges",
  icons: {
    icon: [
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
