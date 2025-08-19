import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "We Work With AI - Curated Remote AI Jobs",
  description:
    "Discover the latest remote AI and machine learning opportunities. Connect with top companies hiring for artificial intelligence roles worldwide.",
  keywords: [
    "remote work",
    "AI jobs",
    "machine learning",
    "artificial intelligence",
    "remote careers",
    "tech jobs",
  ],
  authors: [{ name: "AI Remote Work" }],
  creator: "AI Remote Work",
  publisher: "AI Remote Work",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://airemotework.com",
    title: "AI Remote Work - Premium Remote AI Jobs",
    description:
      "Discover the latest remote AI and machine learning opportunities. Connect with top companies hiring for artificial intelligence roles worldwide.",
    siteName: "AI Remote Work",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Remote Work - Premium Remote AI Jobs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Remote Work - Premium Remote AI Jobs",
    description:
      "Discover the latest remote AI and machine learning opportunities.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://airemotework.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
      <body className="min-h-screen bg-background font-mono antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
