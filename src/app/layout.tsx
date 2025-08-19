import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "We Work With AI - Curated Remote AI Jobs",
  description:
    "Premium remote AI and machine learning jobs from top companies. Featured listings, $175 job posts, 10k+ monthly pageviews. Updated daily.",
  keywords: [
    "remote AI jobs",
    "machine learning jobs", 
    "artificial intelligence careers",
    "remote work",
    "AI engineer",
    "ML engineer",
    "prompt engineer",
    "AI researcher",
    "tech jobs",
    "remote developer",
  ],
  authors: [{ name: "We Work With AI" }],
  creator: "We Work With AI",
  publisher: "We Work With AI",
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
    url: "https://weworkwith-ai.com",
    title: "We Work With AI - Curated Remote AI Jobs",
    description:
      "Premium remote AI and machine learning jobs from top companies. Featured listings, updated daily, 100+ companies.",
    siteName: "We Work With AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "We Work With AI - Curated Remote AI Jobs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Work With AI - Curated Remote AI Jobs",
    description:
      "Premium remote AI and ML jobs from leading companies. Updated daily.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://weworkwith-ai.com",
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
