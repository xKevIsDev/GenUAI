import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "./globals.css";
import { AuthProvider } from "@/context/AuthProvider";

let title = "GenUIAI";
let description = "Generate your next app with Llama 3.1 405B";
let url = "https://genuiai.io/";
let ogimage = "/images/app-logo.png";
let sitename = "genuiai.io";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <PlausibleProvider domain="llamacoder.io" />
      </head>

      <body className="antialiased">
      <AuthProvider>
        {/* The children prop will render the content of the current page */}
        {children}
      </AuthProvider>
      </body>
    </html>
  );
}
