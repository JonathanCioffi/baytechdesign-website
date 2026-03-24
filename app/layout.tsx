import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const metadata: Metadata = {
  title: "Bay Tech Design Group",
  description:
    "AVIT solutions — Audio-Visual and Information Technology design, integration, and service.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/pxp0lve.css" />
      </head>
      <body className="min-h-screen flex flex-col bg-bg-white text-text-body">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
